import AboutPageHero from "@/components/sections/AboutPageHero";
import CompanyStory from "@/components/sections/CompanyStory";
import MissionVision from "@/components/sections/MissionVision";
import ExperienceOverview from "@/components/sections/ExperienceOverview";
import TeamSection from "@/components/sections/TeamSection";
import AboutCTA from "@/components/sections/AboutCTA";

export const metadata = {
  title: "About Us | Yala Safari Jeeps",
  description: "Learn about Yala Safari Jeeps, our expert guides, our premium fleet, and our commitment to ethical wildlife tourism in Sri Lanka.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full">
        {/* 1. About Page Hero */}
        <AboutPageHero />

        {/* 2. Company Story Timeline */}
        <CompanyStory />
        
        {/* 3. Mission & Vision */}
        <MissionVision />

        {/* 4. Safari Experience Overview */}
        <ExperienceOverview />

        {/* 5. Team & Drivers */}
        <TeamSection />

        {/* 6. About CTA */}
        <AboutCTA />
      </main>
    </div>
  );
}
