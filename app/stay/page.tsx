import { Metadata } from "next";
import StayHero from "../../components/sections/StayHero";
import StayExperience from "../../components/sections/StayExperience";
import StaySleepUnderStars from "../../components/sections/StaySleepUnderStars";
import StayCategories from "../../components/sections/StayCategories";
import StayList from "../../components/sections/StayList";
import FeaturedStayCards from "../../components/sections/FeaturedStayCards";
import StayWhyChooseUs from "../../components/sections/StayWhyChooseUs";
import StaySafariCombo from "../../components/sections/StaySafariCombo";
import StayFAQ from "../../components/sections/StayFAQ";

export const metadata: Metadata = {
  title: "Places to Stay Near Yala National Park | Yala Safari Jeeps",
  description: "Explore hotels, lodges and safari-style accommodation near Yala National Park, with useful stay information for planning your Yala safari.",
  alternates: {
    canonical: "https://yalasafarijeeps.com/stay",
  },
};

export default function StayPage() {
  return (
    <main className="min-h-screen bg-warm-sand">
      <StayHero />
      <StayCategories />
      <StayList />
      <StayWhyChooseUs />
      <StaySafariCombo />
      <StayFAQ />

      {/* Transparency Note */}
      <section className="bg-warm-sand py-12 px-6 text-center">
        <p className="max-w-3xl mx-auto text-sm text-safari-brown/70 italic leading-relaxed border-t border-safari-brown/10 pt-8">
          Accommodation information is provided to help travellers plan their Yala visit. Yala Safari Jeeps is not presented as the official booking agent or representative of these properties unless otherwise stated.
        </p>
      </section>
    </main>
  );
}
