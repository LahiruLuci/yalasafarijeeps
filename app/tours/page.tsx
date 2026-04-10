import ToursHero from "@/components/sections/ToursHero";
import ToursList from "@/components/sections/ToursList";
import TourHighlights from "@/components/sections/TourHighlights";

export const metadata = {
  title: "Sri Lanka Tours | Yala Safari Jeeps",
  description: "Discover our premium multi-day Sri Lanka tour packages. Combine the wild safari experience of Yala National Park with iconic destinations like Kandy, Ella, and Galle.",
  openGraph: {
    title: "Sri Lanka Tours | Yala Safari Jeeps",
    description: "Multi-day Sri Lanka expedition packages — from jungle safaris at Yala to the temples of Kandy and the beaches of Galle.",
  },
};

export default function ToursPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full">
        {/* 1. Tours Hero */}
        <ToursHero />

        {/* 2. Featured Tour List */}
        <ToursList />

        {/* 3. Tour Highlights */}
        <TourHighlights />

        {/* More sections to follow */}
      </main>
    </div>
  );
}
