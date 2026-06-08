import SafariPackagesHero from "@/components/sections/SafariPackagesHero";
import SafariIntro from "@/components/sections/SafariIntro";
import SafariTypesList from "@/components/sections/SafariTypesList";

export const metadata = {
  title: "Yala Safari Packages",
  description: "Compare morning, evening, and full-day Yala safari jeep packages. Private 4x4 safaris with hotel pickup, local expert guides, and WhatsApp confirmation.",
  alternates: {
    canonical: "https://yalasafarijeeps.com/safari",
  },
  openGraph: {
    title: "Yala Safari Packages | Morning, Evening & Full Day",
    description: "Compare morning, evening, and full-day Yala safari jeep packages with private 4x4 and hotel pickup.",
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
