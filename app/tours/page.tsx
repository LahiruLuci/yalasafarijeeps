import ToursHero from "@/components/sections/ToursHero";
import ToursList from "@/components/sections/ToursList";
import TourHighlights from "@/components/sections/TourHighlights";

export const metadata = {
  title: "Sri Lanka Wildlife & Safari Tours",
  description: "Discover multi-day Sri Lanka safari and wildlife tour packages. Combine Yala National Park safaris with Ella, Kandy, and Galle.",
  alternates: {
    canonical: "https://yalasafarijeeps.com/tours",
  },
  openGraph: {
    title: "Sri Lanka Wildlife & Safari Tours",
    description: "Multi-day Sri Lanka safari packages — jungle safaris at Yala, heritage in Kandy, and the coastal beauty of Galle.",
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
