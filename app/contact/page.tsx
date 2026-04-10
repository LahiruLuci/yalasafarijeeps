import { Metadata } from "next";
import ContactHero from "../../components/sections/ContactHero";
import ContactQuickOptions from "../../components/sections/ContactQuickOptions";
import ContactDetails from "../../components/sections/ContactDetails";
import ContactMap from "../../components/sections/ContactMap";
import ContactForm from "../../components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Plan Your Yala Safari Adventure",
  description: "Have questions about our Yala safari tours? Ready to book your luxury stay? Our dedicated team at Yala Safari Jeeps is here to help you every step of the way.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-warm-sand">
      <ContactHero />
      <ContactQuickOptions />
      <ContactDetails />
      <ContactMap />
      <ContactForm />
    </main>
  );
}
