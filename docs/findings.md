# Audit Findings — Investigation Report

Investigation only. No code changed. All line numbers are relative to the repo root
(`yala-new-site/`) as of this investigation (2026-08-04).

## 1. Stack & architecture snapshot

- **Framework**: Next.js 16.2.2, App Router, React 19.2.4, TypeScript, Tailwind CSS 4.
- **Styling**: Tailwind utility classes only, no CSS modules. Safari-themed color tokens
  (`warm-sand`, `olive-green`, `sunset-gold`, etc.) used throughout.
- **Routing**: File-based under `app/` — `/`, `/about`, `/contact`, `/safari`,
  `/safari/[slug]`, `/stay`, `/tours`, `/booking`. No `app/api/*` routes exist anywhere
  in the project — confirmed via filesystem search.
- **Content/data**: Two shared modules exist — `lib/siteConfig.ts` (contact info, social
  links) and `lib/safariData.ts` (safari package data, typed, with a `getSafariBySlug`
  helper). **However**, most page content (times, "included" lists, prices, guest
  counts, team bios) is hardcoded inline in individual `components/sections/*.tsx`
  files instead of pulling from `lib/`. This duplication is the direct cause of finding
  #3 below — the same fact (e.g. Morning Safari time) is typed out separately in at
  least 4 places and has drifted out of sync.
- **Forms**: Both `BookingForm.tsx` and `ContactForm.tsx` are client components
  (`"use client"`) with local `useState` only. See §2.
- **Analytics**: `lib/analytics.ts` wraps `window.gtag`, called from many components.
  GA script tags are injected in `app/layout.tsx:61-74` using
  `process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID`. No `.env` file exists in the repo
  (git-ignored per `.gitignore:2`), so whether this variable is actually set in
  production (Vercel) cannot be verified from code.
- **Structured data**: `components/Schema.tsx` (organization/website JSON-LD) and
  `components/BreadcrumbSchema.tsx` (breadcrumb JSON-LD) are both wired into
  `app/layout.tsx:59-60` and render on every page.

## 2. Form submission trace — the most important finding

**Neither form sends data anywhere. There is no API route, no email transport, no
database, and no third-party form service in this codebase.**

- `components/sections/ContactForm.tsx:35-47` — `handleSubmit` runs validation, then:
  ```
  await new Promise(resolve => setTimeout(resolve, 1500));
  setIsSubmitting(false);
  setIsSuccess(true);
  ```
  That's it. The comment on line 40 literally says `// Simulate API call`. No `fetch`,
  no `mailto:`, no `trackEvent` call either — contact-form submissions are not even
  recorded in GA (contradicts `docs/analytics-events.md:39`, which documents
  `generate_lead` as firing for the Contact Form too — it does not, in code).
  **User-entered data is discarded the instant the tab closes.** The success screen
  ("Inquiry Received... team will reach out within the next 2 hours") is shown
  regardless — visitors are told an inquiry was sent when nothing happened.

- `components/sections/BookingForm.tsx:95-110` — same pattern for the **"Submit Inquiry
  via Email"** button: `setTimeout(..., 1500)` then a fake success state. Despite the
  button's own label promising an email, no email is ever sent.

- The **WhatsApp path is real and works**: `BookingForm.tsx:63-93` builds a
  `wa.me` deep link from the filled fields and does `window.open(...)`, which
  genuinely hands the inquiry to WhatsApp. This is the only functioning conversion
  path in either form.

- `/contact` is not a total dead end even though its form is fake: the page also
  renders `ContactQuickOptions.tsx` (real `wa.me`, `tel:`, `mailto:` links) and the
  global `WhatsAppFloating.tsx` button. A determined visitor can still reach you. But
  anyone who fills out the actual contact form — the thing it's designed to funnel
  people into — loses their message with no error and a false confirmation.

## 3. Verdicts

| # | Finding | Verdict | Evidence |
|---|---|---|---|
| 1 | No prices except bottom of /stay | **CONFIRMED** | Sitewide grep for `$`/price patterns found real numbers in exactly one place: `components/sections/StaySafariCombo.tsx:8,15,22` (`"From $120"`, `"From $240"`, `"From $80"`). That component is rendered 8th of 9 sections on `/stay` (`app/stay/page.tsx:20-33`) — i.e. near the bottom, matching the audit. No prices exist anywhere else, including `lib/safariData.ts` and every safari-package component. These three numbers look invented (round, untied to any cost basis) — flagged in §5, don't treat as real prices. |
| 2 | Only AU phone, no Sri Lankan number | **CONFIRMED** | `lib/siteConfig.ts:5-8` defines exactly one phone/WhatsApp number (`+61 416 482 262`), consumed everywhere via `siteConfig.contact`. Additionally hardcoded (not even importing siteConfig) in `BookingForm.tsx:325,382`, `ContactQuickOptions.tsx:7,20`, `Schema.tsx:21`. No second number field exists in the data model at all. |
| 3 | Contradictions: fees, times, guest counts | **CONFIRMED — and worse than reported** | **Fees**: `SafariTypesList.tsx:21,37,53` lists `"Park entry fees"` as included; `BookingFAQ.tsx:18` says fees are "paid separately at the gate." **Times** (Morning Safari alone has 4 different values across the codebase): `lib/safariData.ts:25` → 5:30–10:30 AM; `SafariTypesList.tsx:14` → 5:30–9:30 AM; `SafariPackages.tsx:10` → 5:30–9:30 AM; `Schema.tsx:67` → "5:30 AM to 10:00 AM". Full Day Safari also disagrees: `lib/safariData.ts:71` → 5:00 AM–6:00 PM vs `SafariTypesList.tsx:46`/`SafariPackages.tsx:28` → 6:00 AM–6:00 PM (`SafariPackages.tsx:30` literally says "the day safari begins at 6am"). **Guest counts**: `AboutPreview.tsx:84` → "5000+" (labeled "Happy Explorers"); `StayHero.tsx:77` → "Loved by 2,000+ Guests". These are the same claim (total past guests) with different numbers, not two different metrics. Root cause: safari time/inclusions are hardcoded independently in `lib/safariData.ts`, `SafariPackages.tsx`, `SafariTypesList.tsx`, and `Schema.tsx` instead of one shared source. |
| 4 | Testimonials fabricated, no review-platform link | **CONFIRMED** | `components/sections/Testimonials.tsx:11-67` — 5 hardcoded reviewers (names, countries, dates, quotes, star ratings) with no `href` to Google/TripAdvisor anywhere in the component. Compounding this: `Schema.tsx:51-57` publishes an `AggregateRating` of **4.9 stars / 1250 reviews** in JSON-LD served to Google on every page — this is fabricated review-count structured data, which is a Google Rich Results / review-snippet policy violation, not just a UI trust issue. `Schema.tsx:20,79` also claims "since 2008" and specific specialty claims with no backing data. |
| 5 | Footer social links "#", Privacy/Terms both → /contact | **CONFIRMED** | `lib/siteConfig.ts:14-17` — `facebook`, `instagram`, `tripadvisor`, `youtube` are all literally `"#"`, consumed by `Footer.tsx:45,48,51` (note: `youtube` is defined but not even rendered — no 4th icon in the footer). `Footer.tsx:147-148` — both "Privacy Policy" and "Terms of Service" `<Link>` to `/contact`; neither a privacy nor a terms page exists in `app/`. Interestingly `Schema.tsx:97-100` has *real-looking* `sameAs` URLs for Facebook/Instagram/TripAdvisor that contradict the footer's `"#"` placeholders — another internal inconsistency, and worth checking whether those `sameAs` URLs are genuine before shipping (see §6). |
| 6 | Footer park links (Udawalawe/Bundala/Lunugamwehera/Whale Watching) → /safari, pages don't exist | **CONFIRMED (mostly — one detail off)** | `Footer.tsx:82-88` — "Udawalawe Safari", "Bundala Safari", "Lunugamwehera Safari" all `href: '/safari'` (generic overview page that only covers Yala). "Whale Watching" is `href: '/tours'`, not `/safari` as the audit stated — but `/tours` has no dedicated whale-watching content either (whale watching is only described as a teaser in the homepage's `WildlifeExperiences.tsx:53-60`, with no bookable page). Net effect is the same: footer promises 4 services with no corresponding page. |
| 7 | Canonical says apex domain, site serves www | **CANNOT VERIFY FROM CODE — likely a hosting/DNS issue, not a code bug** | Every canonical tag and `metadataBase` in the codebase consistently uses `https://yalasafarijeeps.com` (no www) — `app/layout.tsx:22,29`, and every page's `alternates.canonical` (`about/page.tsx:8`, `contact/page.tsx:8`, `stay/page.tsx:16`, `booking/page.tsx:12`, `safari/page.tsx:9`). `robots.ts:22-23` and `sitemap.ts:4` agree — apex domain everywhere. The string `www.yalasafarijeeps.com` does not appear anywhere in the repo. If the live site is actually being served on `www.`, that's a domain/redirect configuration issue at the host (Vercel domain settings) — the code is internally consistent and always says apex. Need to check your Vercel project's domain config (see §6). |
| 8 | /about, /contact, /stay, /booking reuse homepage OG title/description | **CONFIRMED for OpenGraph tags specifically (not the visible `<title>`)** | Each page **does** set its own unique `<title>`/`description` (e.g. `about/page.tsx:5-6`, `contact/page.tsx:5-6`, `stay/page.tsx:13-14`, `booking/page.tsx:9-10`) — those are fine and already differentiated. But none of those four pages define an `openGraph` object. Next.js's metadata resolution does not synthesize `openGraph.title`/`description` from the plain `title`/`description` when a page omits `openGraph` — it inherits the parent layout's `openGraph` object wholesale. `app/layout.tsx:31-38` hardcodes homepage-specific OG title/description as the only `openGraph` block in the app. Result: `og:title`/`og:description` (what shows in WhatsApp/Facebook link previews — highly relevant since your audience shares trip links) are identical homepage copy on About, Contact, Stay, and Booking. `safari/page.tsx:11-14` is the one page that correctly overrides `openGraph`, proving the fix pattern already exists in the codebase. |
| 9 | No JSON-LD structured data | **MISDIAGNOSED — data exists, but has fabricated fields** | `components/Schema.tsx` (TravelAgency + WebSite JSON-LD) and `components/BreadcrumbSchema.tsx` (BreadcrumbList) are both mounted in `app/layout.tsx:59-60` and render on every page. No `FAQPage` or `Product`/`Offer` schema exists (BookingFAQ/StayFAQ content isn't marked up), so there's a real gap there — but "no structured data at all" is false. The bigger issue is that the data present includes fabricated specifics (fake `aggregateRating`, "since 2008") — see finding #4. |
| 10 | Images requesting w=3840, missing `sizes` prop | **CONFIRMED, partially** | 21 of 57 `<Image>` usages across the codebase have no `sizes` prop (checked via grep). Worst offenders: `ContactHero.tsx` (3 images, 0 sizes), `AboutPageClient.tsx` (4 images, 0 sizes), and most of the `/stay` page components (`StayList.tsx:92-97`, `StaySafariCombo.tsx`, `StayCategories.tsx`, `StayExperience.tsx`, `StaySleepUnderStars.tsx`, `StayWhyChooseUs.tsx`, `FeaturedStayCards.tsx`) — all use `fill` with no `sizes`. `next.config.ts` sets no custom `images.deviceSizes`, so Next.js's default device-size list (up to 3840px) applies, and a `fill` image with no `sizes` defaults to `sizes="100vw"`, prompting the browser to request the largest matching srcset entry even in a 320px-tall card. Note: 36 of 57 usages (roughly two-thirds, including `Hero.tsx`, `Navbar.tsx`, `SafariGallery.tsx`, most hero sections) already do set `sizes` correctly — this is inconsistent, not universal. |
| 11 | "Tracking Leopard..." preloader on every page load | **CONFIRMED, and specifically bad for your stated audience** | `app/loading.tsx` is a root-level Next.js `loading.tsx`, which becomes the Suspense fallback for every route under `app/`. Because there's no per-route `loading.tsx` to override it, this heavy, animation-laden full-screen loader (multiple infinite CSS `animate-*` loops, a rotating logo, shimmer text) is what every visitor sees on **first paint of any direct page load** — which for a tourism site is most traffic (Google search results, WhatsApp-shared links, social bookmarks almost never land on `/` first). Given your audience is explicitly "tourists on mobile phones with slow connections," this adds a mandatory animated screen in front of content precisely when connection latency is already working against you. |
| 12 | Booking form has ~10 fields, too much friction | **CONFIRMED** | `BookingForm.tsx:14-26` — 11 fields: fullName, whatsapp, email, package, date, adults, children, pickupLocation, country, preferredTime, specialRequests. 5 are required (`validate()` at lines 47-61: fullName, whatsapp, email, date, pickupLocation). |
| 13 | Unclear if form delivers email / saves anywhere | **CONFIRMED — worse than "unclear": it's confirmed to do nothing** | See §2. Not "possibly spam" — there is no send step of any kind to land in spam. Nothing is saved anywhere; no database, no API route, no email API/SMTP call exists in this codebase. |
| 14 | No analytics or conversion tracking visible | **PARTIALLY MISDIAGNOSED — code is wired up, but effectiveness is unverifiable and has a real gap** | `app/layout.tsx:61-74` loads GA4 via `gtag.js`, and `lib/analytics.ts` + `docs/analytics-events.md` show a deliberate, PII-scrubbing event schema (`whatsapp_click`, `phone_click`, `email_click`, `booking_form_start`, `generate_lead`, `select_item`, `book_now_click`) called from many components. Two real problems: (a) `NEXT_PUBLIC_GA_MEASUREMENT_ID` isn't in the repo (env vars are git-ignored) — whether it's actually set in your Vercel project can't be verified from code; if it's unset, the GA script loads with `id=undefined` and silently tracks nothing. (b) The Contact Form's `handleSubmit` never calls `trackEvent` at all (see §2), so contact-form conversions are undercounted even though `docs/analytics-events.md:39` documents them as tracked. |

## 4. Impact-on-inquiries ÷ effort ranking

Ordered highest priority first. "Effort" assumes the existing `lib/` data-module
pattern is extended rather than a new architecture introduced.

1. **Fix the fake forms (#13, part of #12)** — Every Contact Form submission and every
   Booking Form "Submit via Email" click currently vanishes with a false success
   message. This is actively losing inquiries today, silently. Fixing this (wire a
   real transport, or at minimum default both primary CTAs to the already-working
   WhatsApp deep-link pattern from `BookingForm.tsx`) is a contained, mechanical change
   with the single largest impact on the stated goal.
2. **Remove fabricated trust signals (#4, #9)** — Fake `aggregateRating` in JSON-LD
   (Google policy risk) and invented testimonials cost nothing to remove and actively
   erode trust/deliverability once discovered. Low effort, meaningful downside
   avoided; replacing with real reviews is separate follow-up work pending your input.
3. **Consolidate safari facts into `lib/safariData.ts` (#3)** — Times, fees-included,
   and guest counts disagreeing across pages is a trust problem for a business whose
   entire model is "trust us enough to WhatsApp with no upfront payment." Medium
   effort (the data module already exists; components need to import from it instead
   of hardcoding), high payoff, and prevents this class of bug recurring.
4. **Fix footer dead links (#5, #6)** — Social "#" links and Privacy/Terms both routing
   to `/contact` are quick, low-risk fixes (either point them at real destinations or
   remove them) that stop looking obviously broken to a skeptical visitor.
5. **Kill or shrink the preloader for direct page loads (#11)** — Given your slow-connection
   mobile audience landing mostly on inner pages, this is a low-effort change
   (remove or drastically simplify `app/loading.tsx`) with a real first-paint/bounce
   benefit.
6. **Add `sizes` to the remaining 21 `<Image>` usages (#10)** — Mechanical, low-risk,
   directly reduces mobile data usage/load time for exactly the audience you have.
7. **Add per-page `openGraph` blocks (#8)** — Low effort (pattern already exists on
   `/safari`), improves link-preview quality when itineraries get shared via WhatsApp.
8. **Add a Sri Lanka phone number (#2)** — Trivial code change once you provide the
   number; adds a lower-cost/lower-friction contact option for in-country tourists.
9. **Decide on pricing display (#1)** — Needs your input on pricing strategy before
   any code change (see §5); not purely a code fix.
10. **Trim/reconsider booking form fields (#12)** — Real, but a design tradeoff (some
    fields qualify leads for you); worth discussing rather than blindly cutting.
11. **Verify GA measurement ID is set in production (#14)** — Not a code task; a
    5-minute check in your Vercel project settings.
12. **Investigate canonical/www hosting behavior (#7)** — Not a code task from what's
    visible; needs a check of your domain/DNS or Vercel redirect settings.

## 5. What I need from you before touching any of this

I have not invented any business facts, and the following need real answers, not
placeholders:

- **Sri Lankan phone/WhatsApp number** — for finding #2, and to add as a second
  contact method in `lib/siteConfig.ts`.
- **Real safari times, per package** — which of the 4 conflicting versions (or none)
  is actually correct, for Morning, Evening, and Full Day safaris.
- **Is park entrance fee included or not?** — direct contradiction needs one true
  answer.
- **Actual guest/customer count**, if you want to state one at all (5000+ and 2,000+
  are both currently unverifiable).
- **Actual pricing**, or a decision to keep pricing WhatsApp-only sitewide (in which
  case the three `$120`/`$240`/`$80` numbers in `StaySafariCombo.tsx` should either be
  replaced with your real numbers or removed rather than left as invented figures).
- **Real testimonials** — actual guest quotes/names you have permission to publish, or
  a decision to link out to your existing Google/TripAdvisor listing instead of
  hosting quotes locally. If your Google/TripAdvisor rating exists, I need the actual
  rating/review count to put in `Schema.tsx` — I cannot invent 4.9/1250.
- **Real social profile URLs** — are the `sameAs` links already in `Schema.tsx`
  (`facebook.com/yalasafarijeeps`, `instagram.com/yalasafarijeeps`, the TripAdvisor
  listing URL) actually your real profiles? If yes, the footer's `"#"` placeholders
  should point to the same URLs. If no, I need the real ones (or an instruction to
  remove the icons).
- **Founding year** — "since 2008" appears in `Schema.tsx:20` and the OG image
  generator (`app/opengraph-image.tsx:79`). Confirm or correct.
- **Whether Privacy Policy / Terms of Service pages should exist at all** — for a
  WhatsApp-confirmation business with no online payment, minimal versions may still be
  worth having (they're a small trust signal and Google sometimes expects them); your
  call on scope.
- **Udawalawe / Bundala / Lunugamwehera / Whale Watching** — do you actually offer
  these as bookable services? If yes, they need real content and pages; if no, remove
  them from the footer rather than link to a generic page.
- **Confirm `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set in your Vercel project's
  environment variables** — I can't see production env vars from the repo.
- **Confirm your production domain setup** — is `www.yalasafarijeeps.com` or
  `yalasafarijeeps.com` the canonical one you want, and does your DNS/Vercel config
  redirect one to the other? The code consistently assumes the apex domain.

Waiting for your go-ahead before making any changes.
