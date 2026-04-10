# AGENT.md

## 1. Project Overview

This project rebuilds the **Yala Safari Jeeps** tourism website using Next.js.

The existing website was built using static HTML, CSS, and JavaScript.  
The new version must modernize the structure, improve performance, and enhance SEO while preserving the original business content.

Primary Goals:
- Convert static website into a modern Next.js application
- Improve user experience and page structure
- Maintain fast loading performance
- Optimize SEO and accessibility
- Keep architecture simple and maintainable

IMPORTANT:
This project intentionally avoids backend complexity.

❗ No database usage.
❗ No CMS integrations.
❗ No authentication systems.

All content should be handled as static data or local configuration files.

---

## 2. Tech Stack

Framework:
- Next.js (App Router)
- React
- TypeScript

Styling:
- Tailwind CSS

Deployment Target:
- Vercel

Preferred Built-in Features:
- Next.js Image Optimization
- Metadata API
- Server Components
- File-based routing

Avoid adding third-party libraries unless clearly necessary.

---

## 3. Project Philosophy

The agent must follow these principles:

1. Simplicity over complexity
2. Performance over visual effects
3. SEO over animation
4. Maintainability over shortcuts
5. Reusable components over duplicated code

If unsure, always choose the simpler implementation.

---

## 4. Application Structure

The project uses Next.js App Router.

Expected structure:
/app
layout.tsx
globals.css
page.tsx

/about/page.tsx
/safari/page.tsx
/safari/[slug]/page.tsx
/tours/page.tsx
/stay/page.tsx
/booking/page.tsx
/contact/page.tsx

/components
Navbar.tsx
Footer.tsx
sections/

/components/sections
Hero.tsx
SafariPackages.tsx
WhyChooseUs.tsx
AboutPreview.tsx
WildlifeExperiences.tsx
FeaturedTours.tsx
StaySection.tsx
Testimonials.tsx
BookingCTA.tsx
ContactPreview.tsx

/public
images/


Rules:
- Pages contain layout logic only.
- UI must live inside components.
- Sections must remain modular.

---

## 5. Homepage Section Order (STRICT)

The homepage MUST contain sections in this exact order:

1. Navbar
2. Hero Section
3. Safari Packages
4. Why Choose Us
5. About Preview
6. Wildlife Experiences
7. Featured Tours
8. Places to Stay
9. Testimonials
10. Booking Call-To-Action
11. Contact Preview
12. Footer

Do not reorder sections unless explicitly instructed.

---

## 6. Page Requirements

### Home Page
Marketing-focused landing page presenting safari experiences.

### About Page
Company story, mission, experience, and trust-building content.

### Safari Page
Overview listing all safari types.

### Individual Safari Page
Dynamic route describing each safari package.

### Tours Page
Multi-day tour experiences.

### Stay Page
Accommodation recommendations.

### Booking Page
Static booking form interface (no backend logic required).

### Contact Page
Contact details, map, and inquiry form UI.

---

## 7. Component Rules

- Each homepage section = separate component.
- Components must be reusable.
- Avoid components larger than ~200 lines.
- Prefer composition over nesting complexity.

Use:

Server Components → default  
Client Components → only when interaction is required.

Add `"use client"` only when necessary.

---

## 8. Styling Guidelines

Use Tailwind CSS exclusively.

Design Principles:
- Clean tourism aesthetic
- Large imagery
- Spacious layout
- Clear call-to-action buttons
- Mobile-first responsiveness

Avoid:
- Inline styles
- Large custom CSS files
- Overly complex animations

---

## 9. Performance Rules

Agent MUST prioritize performance.

Required practices:
- Use Next.js `<Image />` component
- Optimize image sizes
- Avoid unnecessary React state
- Avoid heavy UI libraries
- Prefer static rendering
- Lazy-load large sections when useful

Never sacrifice performance for visual effects.

---

## 10. SEO Requirements

Every page must include metadata using Next.js Metadata API:

- title
- description
- openGraph metadata

Semantic HTML rules:
- One H1 per page
- Proper heading hierarchy
- Use section and article tags appropriately

Images must include alt text.

---

## 11. Content Handling Rules

- Reuse existing website content.
- Improve grammar and clarity only when necessary.
- Maintain tourism-focused tone.
- Do not invent fake services or pricing.
- Do not generate placeholder business claims.

Content accuracy is critical.

---

## 12. Accessibility Requirements

Agent should ensure:

- Accessible button labels
- Proper contrast
- Semantic HTML usage
- Keyboard navigability
- Alt text for images

Accessibility improvements are encouraged.

---

## 13. What the Agent MUST NOT Do

DO NOT:

- Add databases
- Add authentication
- Add admin dashboards
- Add CMS systems
- Add payment integrations
- Introduce complex backend logic
- Install unnecessary dependencies
- Overengineer solutions

Keep the project lightweight and static-focused.

---

## 14. Development Commands

Install dependencies: npm install


Run development server:  npm run dev


Build production version:  npm run build


---

## 15. Code Quality Rules

- TypeScript strict typing
- Functional components only
- Clear naming conventions
- Descriptive variable names
- Avoid unused code
- Keep files organized

Naming:
- Components → PascalCase
- Routes → lowercase
- Utilities → camelCase

---

## 16. Agent Decision Guidelines

When making implementation decisions:

1. Prefer native Next.js features.
2. Prefer static solutions.
3. Prefer reusable components.
4. Reduce dependencies.
5. Keep structure predictable.

If uncertainty exists:
→ choose the simplest working solution.

---

## 17. Definition of Done

A feature is complete when:

- Builds successfully
- Fully responsive
- SEO metadata added
- No console errors
- Performance remains optimized
- Matches defined page structure

---

## Color Palette Guidelines

The website should use a safari-inspired, premium palette. Use the 60-30-10 rule:

### 60% Base Colors
- **Warm Sand** `#E8DCC2` → page background, large sections

### 30% Secondary Colors
- **Olive Green** `#6B6F3A` → navbar, footers, section backgrounds
- **Safari Brown** `#3E3B2F` → content backgrounds, overlays

### 10% Accent Colors
- **Sunset Gold** `#D07A3F` → buttons, call-to-actions, icons, hover effects

### Text Colors
- **Deep Charcoal** `#2B2A22` → main headings, paragraphs
- **Soft Beige** `#F2E6CE` → light text on dark backgrounds

### Usage Rules
- Maintain the 60/30/10 distribution throughout the site.
- Accent color (#D07A3F) must be used sparingly for maximum effect.
- Base colors dominate backgrounds; secondary colors for structure elements.
- All text must have sufficient contrast with background for accessibility.
- Avoid pure white (#FFFFFF); prefer off-white tones (#F2E6CE or #E8DCC2) for premium feel.
- Hero images may have semi-transparent overlay using secondary dark (#3E3B2F) with 40-50% opacity.

## 18. Final Instruction

This project represents a real tourism business website.

The agent must act as a senior frontend engineer and prioritize:

Performance → SEO → Maintainability → Design polish.

Avoid experimentation and focus on stable production-quality implementation.

Always check the mobile and tablet responsiveness of the website.
