import BookingHero from "@/components/sections/BookingHero";
import BookingForm from "@/components/sections/BookingForm";
import HowBookingWorks from "@/components/sections/HowBookingWorks";
import BookingFAQ from "@/components/sections/BookingFAQ";
import FinalBookingCTA from "@/components/sections/FinalBookingCTA";
import Testimonials from "@/components/sections/Testimonials";

export const metadata = {
  title: "Book Your Yala Safari Jeep",
  description: "Send your Yala safari booking request with package, date, pickup location, and traveler details. No payment required — we confirm availability by WhatsApp.",
  alternates: {
    canonical: "https://yalasafarijeeps.com/booking",
  },
};

const safariTypeMap: Record<string, string> = {
  "morning": "Morning Safari",
  "evening": "Evening Safari",
  "full-day": "Full Day Safari",
  "special": "Custom Safari / Not Sure Yet"
};

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const resolvedParams = await searchParams;
  const type = resolvedParams.type;
  const initialPackage = type ? safariTypeMap[type] : "";

  return (
    <>
      {/* 1. Booking Page Hero */}
      <BookingHero />

      {/* 2. Direct Booking Form Section with Trust Card */}
      <BookingForm initialPackage={initialPackage} />

      {/* 3. How Booking Works */}
      <HowBookingWorks />

      {/* 4. Guest Testimonials for Social Proof */}
      <Testimonials />

      {/* 5. FAQ Section */}
      <BookingFAQ />

      {/* 6. Final Engagement CTA */}
      <FinalBookingCTA />
    </>
  );
}
