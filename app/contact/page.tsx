import { Metadata } from "next";
import ContactHero from "../../components/sections/ContactHero";
import ContactQuickOptions from "../../components/sections/ContactQuickOptions";
import ContactDetails from "../../components/sections/ContactDetails";
import ContactMap from "../../components/sections/ContactMap";
import ContactForm from "../../components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Yala Safari Jeeps | Book Your Safari in Sri Lanka",
  description: "Have questions about our Yala safari tours? Ready to book your luxury stay? Our dedicated team at Yala Safari Jeeps is here to help you plan your wild adventure.",
  alternates: {
    canonical: "https://yalasafarijeeps.com/contact",
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
