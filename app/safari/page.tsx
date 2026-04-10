import SafariPackagesHero from "@/components/sections/SafariPackagesHero";
import SafariIntro from "@/components/sections/SafariIntro";
import SafariTypesList from "@/components/sections/SafariTypesList";

export const metadata = {
  title: "Safari Packages | Yala Safari Jeeps",
  description: "Explore our range of premium Yala safari packages — from morning half-day safaris to exclusive overnight expedition experiences in Yala National Park, Sri Lanka.",
  alternates: {
    canonical: "/safari",
  },
  openGraph: {
    title: "Safari Packages | Yala Safari Jeeps",
    description: "Choose from half-day, full-day, overnight and multi-day safari packages in Yala National Park. Book your premium wildlife experience today.",
  },
};

export default function SafariPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full">
        {/* 1. Safari Packages Hero */}
        <SafariPackagesHero />

        {/* 2. Safari Introduction */}
        <SafariIntro />

        {/* 3. Safari Types List */}
        <SafariTypesList />

        {/* More sections to follow */}
      </main>
    </div>
  );
}
