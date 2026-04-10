import BookingHero from "@/components/sections/BookingHero";
import BookingForm from "@/components/sections/BookingForm";
import BookingBenefits from "@/components/sections/BookingBenefits";
import Testimonials from "@/components/sections/Testimonials";

export const metadata = {
  title: "Book Your Safari | Yala Safari Jeeps",
  description: "Reserve your private 4x4 safari at Yala National Park. Instant confirmation, expert guides, and the best leopard tracking in Sri Lanka.",
  alternates: {
    canonical: "/booking",
  },
};

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full">
        {/* 1. Booking Page Hero */}
        <BookingHero />

        {/* 2. Direct Booking Form Section */}
        <BookingForm />

        {/* 3. Why Book with Us */}
        <BookingBenefits />

        {/* 4. Guest Testimonials for Social Proof */}
        <Testimonials />
      </main>
    </div>
  );
}
