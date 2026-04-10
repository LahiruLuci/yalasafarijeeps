import Hero from "@/components/sections/Hero";
import SafariPackages from "@/components/sections/SafariPackages";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AboutPreview from "@/components/sections/AboutPreview";
import WildlifeExperiences from "@/components/sections/WildlifeExperiences";
import FeaturedTours from "@/components/sections/FeaturedTours";
import StaySection from "@/components/sections/StaySection";
import Testimonials from "@/components/sections/Testimonials";
import BookingCTA from "@/components/sections/BookingCTA";
import ContactPreview from "@/components/sections/ContactPreview";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-grow w-full">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Safari Packages */}
        <SafariPackages />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. About Preview */}
        <AboutPreview />

        {/* 6. Wildlife Experiences */}
        <WildlifeExperiences />

        {/* 7. Featured Tours */}
        <FeaturedTours />

        {/* 8. Places to Stay */}
        <StaySection />

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Booking CTA */}
        <BookingCTA />

        {/* 11. Contact Preview */}
        <ContactPreview />
      </main>
    </div>
  );
}
