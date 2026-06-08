import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    absolute: "Yala Safari Jeep Tours | Private Yala National Park Safaris",
  },
  description: "Book private Yala National Park jeep safaris with local guides, hotel pickup, and WhatsApp confirmation. Morning, evening, and full-day packages available.",
  alternates: {
    canonical: "https://yalasafarijeeps.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <SafariPackages />
      <WhyChooseUs />
      <AboutPreview />
      <WildlifeExperiences />
      <FeaturedTours />
      <StaySection />
      <Testimonials />
      <BookingCTA />
      <ContactPreview />
    </>
  );
}
