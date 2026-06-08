import { Metadata } from "next";
import ContactPageClient from "@/components/sections/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Yala Safari Jeeps",
  description: "Contact Yala Safari Jeeps by WhatsApp, phone, or email to plan your private Yala National Park safari. We reply within 2 hours.",
  alternates: {
    canonical: "https://yalasafarijeeps.com/contact",
  },
};

export default function ContactPage() {
  return (
    <ContactPageClient />
  );
}
