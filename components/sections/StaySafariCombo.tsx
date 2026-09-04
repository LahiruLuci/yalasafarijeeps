"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function StaySafariCombo() {
   return (
      <section className="bg-warm-sand py-32 md:py-52 relative overflow-hidden">

         {/* ── Background Detail ── */}
         <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none z-0">
            <Image src="/images/img-4.jpg" alt="Safari Detail Texture" fill className="object-cover" />
         </div>

         <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">

            {/* ── Section Header (Narrative) ── */}
            <div className="max-w-3xl mb-16">
               <span className="text-sunset-gold font-bold text-sm tracking-[0.5em] uppercase mb-4 block">
                  Safari Logistics
               </span>
               <h2 className="text-4xl md:text-7xl font-extrabold text-deep-charcoal leading-[1.1] tracking-tight mb-8">
                  Planning a Yala Safari <br />
                  <span className="italic text-olive-green font-light font-serif">During Your Stay?</span>
               </h2>
               <p className="text-safari-brown font-medium text-lg md:text-xl leading-relaxed italic opacity-80 mx-auto">
                  Wherever you choose to stay around Yala, Tissamaharama, Kirinda or Kataragama, our team can help you arrange your Yala safari and confirm pickup options.
               </p>
            </div>

            {/* ── Custom Buttons ── */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
               <Link
                  href="/safari"
                  className="bg-deep-charcoal text-soft-beige font-black py-5 px-10 rounded-full transition-all hover:bg-olive-green hover:scale-[1.02] transform uppercase tracking-widest text-sm flex items-center justify-center gap-4 w-full sm:w-auto"
               >
                  Plan My Yala Safari
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
               </Link>
               <a
                  href={siteConfig.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white font-black py-5 px-10 rounded-full transition-all hover:scale-[1.02] transform uppercase tracking-widest text-sm flex items-center justify-center gap-4 w-full sm:w-auto shadow-lg shadow-[#25D366]/20"
               >
                  Ask Us on WhatsApp
               </a>
            </div>
         </div>
      </section>
   );
}
