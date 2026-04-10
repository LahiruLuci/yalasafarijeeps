"use client";

import Image from "next/image";

const packages = [
  {
    name: "Independent Stay",
    price: "From $120",
    includes: ["Accommodation Only", "Complimentary Breakfast", "Resort Facilities Access"],
    highlight: "PERFECT FOR RELAXATION",
    isPopular: false
  },
  {
    name: "The Full Safari Circle",
    price: "From $240",
    includes: ["Luxury Stay + 5-Star Safari", "Morning Hotel Pickup", "Professional Guide + Binoculars", "Evening Hotel Return", "National Park Entrance Fees"],
    highlight: "MOST RECOMMENDED",
    isPopular: true
  },
  {
    name: "Safari Individual",
    price: "From $80",
    includes: ["Professional Jeep Safari", "Expert Native Tracker", "All Park Permits", "Binoculars & Refreshments"],
    highlight: "FOR DAY EXPLORERS",
    isPopular: false
  }
];

export default function StaySafariCombo() {
  return (
    <section className="bg-warm-sand py-32 md:py-52 relative overflow-hidden">
      
      {/* ── Background Detail ── */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none z-0">
         <Image src="/images/img-4.jpg" alt="Safari Detail Texture" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* ── Section Header (Narrative) ── */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12 text-center lg:text-left">
           <div className="max-w-2xl">
              <span className="text-sunset-gold font-bold text-sm tracking-[0.5em] uppercase mb-4 block">
                 Seamless Integration
              </span>
              <h2 className="text-5xl md:text-7xl font-extrabold text-deep-charcoal leading-none tracking-tight mb-8">
                 Complete Your <br />
                 <span className="italic text-olive-green font-light font-serif">Safari Circle</span>
              </h2>
           </div>
           <div className="max-w-md">
              <p className="text-safari-brown font-medium text-lg leading-relaxed italic opacity-70">
                 From door-to-door pickups to sunset returns, we handle every logistical detail so you can focus on the wildlife. 
              </p>
           </div>
        </div>

        {/* ── Visual Workflow ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-sunset-gold/30 to-transparent z-0" />
           
           {[
             { title: "MORNING PICKUP", desc: "Private pickup directly from your lodge entrance.", icon: "05:30 AM" },
             { title: "THE WILD EXPERIENCE", desc: "Hours of immersive tracking with expert guides.", icon: "SAFARI" },
             { title: "EVENING RETURN", desc: "Safe return to your sanctuary for a bush dinner.", icon: "06:30 PM" }
           ].map((step, sIdx) => (
             <div key={sIdx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-[120px] h-[120px] rounded-full bg-white shadow-xl flex flex-col items-center justify-center mb-8 border border-sunset-gold/10 group-hover:bg-sunset-gold group-hover:text-soft-beige transition-all duration-500">
                   <span className="text-[10px] font-black tracking-widest text-sunset-gold group-hover:text-soft-beige uppercase mb-1">Step {sIdx + 1}</span>
                   <span className="text-sm font-black text-deep-charcoal group-hover:text-soft-beige">{step.icon}</span>
                </div>
                <h4 className="text-xl font-black text-deep-charcoal mb-3 uppercase tracking-tighter italic">{step.title}</h4>
                <p className="text-safari-brown/60 text-sm font-medium">{step.desc}</p>
             </div>
           ))}
        </div>

        {/* ── Comparison Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
           {packages.map((pkg, pIdx) => (
             <div 
               key={pIdx} 
               className={`relative group p-12 md:p-14 rounded-[4rem] transition-all duration-700 flex flex-col justify-between ${
                 pkg.isPopular 
                 ? 'bg-deep-charcoal text-soft-beige shadow-[0_40px_100px_rgba(43,42,34,0.3)] scale-105 z-20 border-2 border-sunset-gold/30' 
                 : 'bg-white/40 text-deep-charcoal border border-white/60 hover:bg-white/60'
               }`}
             >
                {/* Popular Badge */}
                {pkg.isPopular && (
                   <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-sunset-gold text-deep-charcoal px-8 py-3 rounded-full font-black text-[10px] tracking-[0.5em] shadow-xl whitespace-nowrap">
                      GOLD STANDARD
                   </div>
                )}

                <div>
                   <span className={`text-[10px] font-black tracking-[0.2em] uppercase mb-4 block ${pkg.isPopular ? 'text-sunset-gold' : 'text-olive-green'}`}>
                      {pkg.highlight}
                   </span>
                   <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight tracking-tighter capitalize italic">
                      {pkg.name}
                   </h3>
                   
                   <div className="mb-10 flex items-baseline gap-2">
                      <span className="text-5xl font-black">{pkg.price}</span>
                      <span className="text-xs opacity-50 uppercase font-black">/ Person</span>
                   </div>

                   <ul className="space-y-6 mb-12">
                      {pkg.includes.map((inc, iIdx) => (
                        <li key={iIdx} className="flex gap-4 text-sm font-medium leading-normal opacity-80">
                           <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${pkg.isPopular ? 'bg-sunset-gold/20 text-sunset-gold' : 'bg-olive-green/10 text-olive-green'}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                           </div>
                           {inc}
                        </li>
                      ))}
                   </ul>
                </div>

                <button className={`w-full py-6 rounded-full font-black text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-4 ${
                  pkg.isPopular 
                  ? 'bg-sunset-gold text-deep-charcoal hover:bg-soft-beige hover:shadow-[0_0_30px_rgba(242,230,206,0.2)]' 
                  : 'bg-deep-charcoal text-soft-beige hover:bg-olive-green'
                }`}>
                   CHOOSE {pkg.isPopular ? 'EXPERIENCE' : 'PACKAGE'}
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
             
             </div>
           ))}
        </div>

      </div>

    </section>
  );
}
