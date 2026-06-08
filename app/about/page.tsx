import AboutPageClient from "@/components/sections/AboutPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Local Yala Safari Experts",
  description: "Learn about Yala Safari Jeeps, local safari support for private Yala jeep tours, hotel pickup coordination, and WhatsApp booking assistance.",
  alternates: {
    canonical: "https://yalasafarijeeps.com/about",
  },
};

export default function AboutPage() {
  return (
    <AboutPageClient />
  );
}
