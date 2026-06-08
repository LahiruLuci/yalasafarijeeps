import SafariPackagesHero from "@/components/sections/SafariPackagesHero";
import SafariIntro from "@/components/sections/SafariIntro";
import SafariTypesList from "@/components/sections/SafariTypesList";

export const metadata = {
  title: "Yala Safari Packages | Morning, Evening & Full Day Jeep Safaris",
  description: "Explore our range of premium Yala safari packages — from morning half-day expeditions to golden hour evening tours and full-day private safaris in Yala National Park.",
  alternates: {
    canonical: "https://yalasafarijeeps.com/safari",
  },
  openGraph: {
    title: "Yala Safari Packages | Premium Wildlife Experiences",
    description: "Choose from morning, evening, and full-day safari packages in Yala National Park. Book your private 4x4 expedition with expert trackers today.",
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
