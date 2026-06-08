import ToursHero from "@/components/sections/ToursHero";
import ToursList from "@/components/sections/ToursList";
import TourHighlights from "@/components/sections/TourHighlights";

export const metadata = {
  title: "Sri Lanka Wildlife & Safari Tours | Yala Safari Jeeps",
  description: "Discover our premium multi-day Sri Lanka safari and wildlife tour packages. Combine Yala National Park safaris with iconic destinations like Ella, Kandy, and Galle.",
  alternates: {
    canonical: "https://yalasafarijeeps.com/tours",
  },
  openGraph: {
    title: "Sri Lanka Wildlife & Safari Tours | Yala Safari Jeeps",
    description: "Multi-day Sri Lanka expedition packages — from jungle safaris at Yala to the heritage of Kandy and the coastal beauty of Galle.",
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
