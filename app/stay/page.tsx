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
  title: "Places to Stay Near Yala National Park | Safari Lodges & Hotels",
  description: "Experience the ultimate night-sky wilderness retreat. Discover luxury lodges, boutique resorts, and authentic safari tents near Yala National Park.",
  alternates: {
    canonical: "https://yalasafarijeeps.com/stay",
  },
};

export default function StayPage() {
  return (
    <main className="min-h-screen bg-warm-sand">
      <StayHero />
      <StaySleepUnderStars />
      <StayExperience />
      <StayCategories />
      <StayList />
      <FeaturedStayCards />
      <StayWhyChooseUs />
      <StaySafariCombo />
      <StayFAQ />
    </main>
  );
}
