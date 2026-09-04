"use client";

import { useState } from "react";

const faqs = [
   {
      question: "Where should I stay for a Yala safari?",
      answer: "We recommend staying in Tissamaharama, Palatupana, Kirinda, or Yala itself. These areas offer the easiest access to the park gates for early morning departures."
   },
   {
      question: "Can Yala Safari Jeeps arrange pickup from my hotel?",
      answer: "Yes, we arrange pickups from accommodations around the Yala, Tissamaharama, Kirinda, and Kataragama areas. If you are staying further away, we can also organize transfers for an additional fee."
   },
   {
      question: "Do you book hotels directly?",
      answer: "At present, our accommodation pages are provided to help travellers research places to stay near Yala. Contact us if you would like help coordinating your safari plans around your accommodation."
   },
   {
      question: "Can you help me plan my safari around my accommodation?",
      answer: "Absolutely. Once you decide where you are staying, let us know via WhatsApp. We will help you schedule the best safari departure time based on your location and park conditions."
   },
   {
      question: "Are hotel prices shown on this website?",
      answer: "No, hotel prices are not shown here as they vary by season and booking platform. We provide this curated guide solely to assist you in selecting the right base for your Yala safari."
   }
];

export default function StayFAQ() {
   const [openIndex, setOpenIndex] = useState<number | null>(0);

   return (
      <section className="bg-warm-sand py-32 md:py-52 relative overflow-hidden">

         {/* ── Background Detail ── */}
         <div className="absolute top-1/2 left-0 w-full h-px bg-sunset-gold/10 -translate-y-1/2 z-0" />
         <div className="absolute top-0 right-10 text-[15vw] font-black text-deep-charcoal/[0.03] select-none pointer-events-none leading-none">
            FAQ
         </div>

         <div className="container mx-auto px-6 md:px-12 relative z-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

               {/* ── Left Side: Sticky Header ── */}
               <div className="lg:col-span-5 lg:sticky lg:top-40 self-start">
                  <span className="text-sunset-gold font-bold text-sm tracking-[0.5em] uppercase mb-8 block">
                     Inquire & Explore
                  </span>
                  <h2 className="text-5xl md:text-7xl font-extrabold text-deep-charcoal leading-none tracking-tighter mb-10">
                     Frequently Asked <br />
                     <span className="italic text-olive-green font-light font-serif">Curiosities</span>
                  </h2>
                  <p className="text-safari-brown/60 text-lg font-medium leading-relaxed italic max-w-sm mb-12">
                     Everything you need to know about your sanctuary in the wild before your arrival.
                  </p>

                  <div className="flex items-center gap-6">
                     <div className="w-16 h-16 rounded-full bg-deep-charcoal flex items-center justify-center text-soft-beige shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                     </div>
                     <div>
                        <p className="text-deep-charcoal font-black text-sm uppercase tracking-widest">Still have questions?</p>
                        <a href="mailto:info@yalasafarijeeps.com" className="text-sunset-gold font-bold text-xs uppercase border-b border-sunset-gold pb-0.5 hover:text-olive-green hover:border-olive-green transition-colors inline-block mt-1">Contact Our Team</a>
                     </div>
                  </div>
               </div>

               {/* ── Right Side: Modern Accordion Engine ── */}
               <div className="lg:col-span-7 flex flex-col gap-6">
                  {faqs.map((faq, idx) => (
                     <div
                        key={idx}
                        className={`group relative overflow-hidden transition-all duration-700 rounded-[2.5rem] border ${openIndex === idx
                           ? 'bg-white shadow-[0_30px_60px_rgba(43,42,34,0.1)] border-sunset-gold/20'
                           : 'bg-white/40 border-white/60 hover:bg-white/60'
                           }`}
                     >
                        <button
                           onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                           className="w-full p-10 md:p-12 flex items-center justify-between text-left gap-8"
                        >
                           <div className="flex items-center gap-8">
                              <span className={`text-xl font-black transition-colors ${openIndex === idx ? 'text-sunset-gold' : 'text-deep-charcoal/20'}`}>
                                 0{idx + 1}
                              </span>
                              <h3 className={`text-xl md:text-2xl font-extrabold tracking-tight transition-colors ${openIndex === idx ? 'text-deep-charcoal' : 'text-safari-brown/80'}`}>
                                 {faq.question}
                              </h3>
                           </div>

                           <div className={`shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${openIndex === idx ? 'bg-sunset-gold border-sunset-gold text-white rotate-45' : 'border-deep-charcoal/10 text-deep-charcoal'
                              }`}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
                           </div>
                        </button>

                        <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                           <div className="px-10 md:px-32 pb-12">
                              <div className="h-px w-full bg-sunset-gold/10 mb-8" />
                              <p className="text-safari-brown/70 text-lg leading-relaxed font-medium italic">
                                 &quot;{faq.answer}&quot;
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

            </div>

         </div>

      </section>
   );
}
