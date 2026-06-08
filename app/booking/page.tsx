import BookingHero from "@/components/sections/BookingHero";
import BookingForm from "@/components/sections/BookingForm";
import HowBookingWorks from "@/components/sections/HowBookingWorks";
import BookingFAQ from "@/components/sections/BookingFAQ";
import FinalBookingCTA from "@/components/sections/FinalBookingCTA";
import Testimonials from "@/components/sections/Testimonials";

export const metadata = {
  title: "Book Yala Safari Jeep | Private Safari Reservation",
  description: "Reserve your private 4x4 safari at Yala National Park. Choose your package, date, and pickup location — no payment required now.",
  alternates: {
    canonical: "https://yalasafarijeeps.com/booking",
  },
};

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full">
        {/* 1. Booking Page Hero */}
        <BookingHero />

        {/* 2. Direct Booking Form Section with Trust Card */}
        <BookingForm />

        {/* 3. How Booking Works */}
        <HowBookingWorks />

        {/* 4. Guest Testimonials for Social Proof */}
        <Testimonials />

        {/* 5. FAQ Section */}
        <BookingFAQ />

        {/* 6. Final Engagement CTA */}
        <FinalBookingCTA />
      </main>
    </div>
  );
}
