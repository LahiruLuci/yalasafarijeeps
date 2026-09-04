import AboutPageClient from "@/components/sections/AboutPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Yala Safari Jeeps | Local Yala Safari Team",
  description: "Meet the local team behind Yala Safari Jeeps and learn how we help travellers plan private jeep safaris, local pickup and wildlife experiences around Yala National Park.",
  alternates: {
    canonical: "https://yalasafarijeeps.com/about",
  },
};

export default function AboutPage() {
  return (
    <AboutPageClient />
  );
}
