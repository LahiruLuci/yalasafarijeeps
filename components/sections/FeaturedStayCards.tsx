"use client";

import Image from "next/image";

const featuredStays = [
  {
    name: "Chena Huts by Uga",
    theme: "ULTRA LUXURY",
    image: "/images/chena-huts/chena-hut-yala-national-park-top.jpg",
    distance: "05 MINS",
    highlight: "Where the Indian Ocean meets the dense jungle of Yala.",
    features: ["Private Plunge Pools", "Luxury Pavilions", "All-Inclusive Dining"],
    color: "olive"
  },
  {
    name: "Hilton Resort Yala",
    theme: "SOPHISTICATED WILD",
    image: "/images/hilton-resort-yala/hilton-resort-yala.jpg",
    distance: "10 MINS",
    highlight: "Contemporary luxury architecture integrated into the wild terrain.",
    features: ["Resort Pool", "Luxury Spa", "Wildlife Rangers"],
    color: "gold"
  },
  {
    name: "Cinnamon Wild Yala",
    theme: "AUTHENTIC BUSH",
    image: "/images/cinnamon-wild/cinnamon-wild-hotel-yala.jpg",
    distance: "08 MINS",
    highlight: "Rustic luxury chalets offering an uninhibited connection with nature.",
    features: ["Observation Deck", "Rooftop Bar", "Chalets"],
    color: "brown"
  }
];

export default function FeaturedStayCards() {
  return (
    <section className="bg-deep-charcoal py-32 md:py-48 relative overflow-hidden">
      
      {/* ── Background Detail ── */}
      <div className="absolute left-0 bottom-0 text-[10vw] font-black text-white/5 select-none pointer-events-none leading-none -ml-10">
         SELECTION
      </div>

      <div className="container mx-auto px-0">
        
        {/* Loop through each featured stay with a modern side-by-side reveal layout */}
        <div className="space-y-0">
           {featuredStays.map((stay, idx) => (
             <div 
               key={idx} 
               className={`relative flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[700px] group overflow-hidden border-b border-white/10`}
             >
                
                {/* ── Visual Engine (60% Width) ── */}
                <div className="relative w-full lg:w-3/5 h-[400px] lg:h-auto overflow-hidden">
                   <Image
                     src={stay.image}
                     alt={stay.name}
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-[3s] grayscale group-hover:grayscale-0"
                   />
                   {/* Layered Color Wash */}
                   <div className="absolute inset-0 bg-deep-charcoal/20 group-hover:bg-transparent transition-colors duration-1000 z-10" />
                   
                   {/* Floating Image Label */}
                   <div className="absolute top-12 left-12 lg:left-20 z-20 overflow-hidden">
                      <span className="text-soft-beige font-black text-xs tracking-[0.5em] block transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                         FEATURED {idx + 1}
                      </span>
                   </div>
                </div>

                {/* ── Content Engine (40% Width) ── */}
                <div className="w-full lg:w-2/5 p-12 lg:p-24 flex flex-col justify-center bg-deep-charcoal relative z-20">
                   
                   <div className="max-w-md mx-auto lg:mx-0">
                      <div className="flex items-center gap-4 mb-8">
                         <div className="h-px w-8 bg-sunset-gold" />
                         <span className="text-sunset-gold font-bold text-[10px] tracking-[0.4em] uppercase">
                            {stay.theme}
                         </span>
                      </div>

                      <h3 className="text-4xl md:text-6xl font-black text-soft-beige mb-8 tracking-tighter leading-none italic group-hover:text-sunset-gold transition-colors duration-500">
                         {stay.name}
                      </h3>

                      <p className="text-warm-sand/50 text-base leading-relaxed mb-12 italic border-l border-sunset-gold/30 pl-6">
                         &quot;{stay.highlight}&quot;
                      </p>

                      {/* Specs Row */}
                      <div className="flex items-center gap-12 mb-12">
                         <div>
                            <p className="text-[10px] text-soft-beige/40 font-bold tracking-widest uppercase mb-2">Distance</p>
                            <p className="text-2xl font-black text-sunset-gold">{stay.distance}</p>
                         </div>
                         <div className="h-10 w-px bg-white/10" />
                         <div>
                            <p className="text-[10px] text-soft-beige/40 font-bold tracking-widest uppercase mb-2">Park Access</p>
                            <p className="text-2xl font-black text-sunset-gold">PRIVATE</p>
                         </div>
                      </div>

                      <div className="space-y-4 mb-14">
                         {stay.features.map((feat, fIdx) => (
                           <div key={fIdx} className="flex items-center gap-4 text-[10px] text-soft-beige/60 font-bold uppercase tracking-[0.2em]">
                              <div className="w-1 h-1 rounded-full bg-sunset-gold shadow-[0_0_8px_rgba(208,122,63,0.5)]" />
                              {feat}
                           </div>
                         ))}
                      </div>

                      <button className="flex items-center gap-6 group/btn">
                         <span className="text-soft-beige font-black text-sm tracking-widest border-b-[2px] border-sunset-gold pb-1 group-hover/btn:text-sunset-gold transition-colors">
                            RESERVE RETREAT
                         </span>
                         <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover/btn:bg-soft-beige group-hover/btn:text-deep-charcoal group-hover/btn:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                         </div>
                      </button>
                   </div>

                </div>

             </div>
           ))}
        </div>

      </div>

    </section>
  );
}
