import { notFound } from "next/navigation";
import { safariPackages, getSafariBySlug } from "@/lib/safariData";
import SafariDetailHero from "@/components/sections/SafariDetailHero";
import SafariDetailDescription from "@/components/sections/SafariDetailDescription";
import SafariGallery from "@/components/sections/SafariGallery";
import SafariBookingCTA from "@/components/sections/SafariBookingCTA";

// Generate static params for all known slugs
export async function generateStaticParams() {
  return safariPackages.map((pkg) => ({ slug: pkg.slug }));
}

// Generate SEO metadata dynamically per safari
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const safari = getSafariBySlug(slug);
  if (!safari) return {};
  
  return {
    title: `${safari.title} | Yala Safari Jeeps`,
    description: safari.description,
    alternates: {
      canonical: `/safari/${slug}`,
    },
    openGraph: {
      title: `${safari.title} | Premium Yala Safari`,
      description: safari.longDescription.slice(0, 160),
      url: `https://yalasafarijeeps.com/safari/${slug}`,
      siteName: "Yala Safari Jeeps",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: safari.heroImage,
          width: 1200,
          height: 630,
          alt: `${safari.title} Expedition`,
        },
      ],
    },
  };
}

export default async function SafariDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const safari = getSafariBySlug(slug);

  if (!safari) notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full">
        {/* 1. Individual Safari Hero */}
        <SafariDetailHero safari={safari} />

        {/* 2. Safari Detail Description */}
        <SafariDetailDescription safari={safari} />

        {/* 3. Safari Gallery */}
        <SafariGallery safari={safari} />

        {/* 4. Booking CTA */}
        <SafariBookingCTA safari={safari} />
      </main>
    </div>
  );
}
