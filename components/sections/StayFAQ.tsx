"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Which lodge is closest to the main Yala National Park entrance?",
    answer: "Chena Huts and Cinnamon Wild are strategically located within 5-10 minutes of the Palatupana (Gate 1) entrance, ensuring you are among the first to enter the park for peak leopard tracking hours."
  },
  {
    question: "Are safari pickups included in our stay booking?",
    answer: "While some luxury all-inclusive stays like Chena Huts include safaris, others require separate booking. However, Yala Safari Jeeps provides seamless door-to-door pickup and return for all recommended lodges in the area."
  },
  {
    question: "Is it safe to stay in the wilderness lodges and tented camps?",
    answer: "Absolutely. All our recommended sanctuaries feature 24/7 high-end security, electric fencing where necessary, and expert naturalists on-site. You experience the raw wild with total peace of mind."
  },
  {
    question: "Do the luxury tents have modern amenities like Air Conditioning?",
    answer: "Yes. Premium camps like Leopard Nest and Chena Huts feature custom-designed pavilions with full air conditioning, private en-suite bathrooms, and high-speed Wi-Fi, blending raw nature with modern luxury."
  },
  {
    question: "Do we need to book our stay and safari months in advance?",
    answer: "Yala is a world-renowned destination. We highly recommend booking at least 3-6 months in advance, especially for peak seasons (February to June), to secure your preferred sanctuary and expert tracker."
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                 </div>
                 <div>
                    <p className="text-deep-charcoal font-black text-sm uppercase tracking-widest">Still have questions?</p>
                    <button className="text-sunset-gold font-bold text-xs uppercase border-b border-sunset-gold pb-0.5 hover:text-olive-green hover:border-olive-green transition-colors">Contact Our Concierge</button>
                 </div>
              </div>
           </div>

           {/* ── Right Side: Modern Accordion Engine ── */}
           <div className="lg:col-span-7 flex flex-col gap-6">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`group relative overflow-hidden transition-all duration-700 rounded-[2.5rem] border ${
                    openIndex === idx 
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

                     <div className={`shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
                       openIndex === idx ? 'bg-sunset-gold border-sunset-gold text-white rotate-45' : 'border-deep-charcoal/10 text-deep-charcoal'
                     }`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
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
