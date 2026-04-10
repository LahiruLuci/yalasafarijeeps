"use client";

import Image from "next/image";

const whyStayPoints = [
  {
    title: "The Gold Standard",
    desc: "Every recommendation passes our elite luxury and safety audits. A literal seal of master craftsmanship.",
    stat: "100%",
    statLabel: "Vetted"
  },
  {
    title: "Proximity Edge",
    desc: "Ideally situated within a 5-10 minute drive to the park gates. Be the first to track the leopard.",
    stat: "05",
    statLabel: "Mins Away"
  },
  {
    title: "Nocturnal Pulse",
    desc: "Hearing the wild breathe from the sanctuary of your veranda. Uninhibited connection with nature.",
    stat: "24/7",
    statLabel: "Immersion"
  },
  {
    title: "Elite Sanctuary",
    desc: "Peace of mind redefined with 24/7 high-end security and the finest modern amenities.",
    stat: "Safe",
    statLabel: "Guaranteed"
  },
  {
    title: "Local Legacy",
    desc: "Every stay supports the indigenous communities and focuses on sustainable eco-tourism.",
    stat: "Eco",
    statLabel: "Impact"
  }
];

export default function StayWhyChooseUs() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-32 md:py-48 group bg-black">
      
      {/* ── Cinematic Background Engine ── */}
      <div className="absolute inset-0 z-0">
         <Image
           src="/images/cinnamon-wild/cinnamon-wild-hotel-yala.jpg"
           alt="Yala Wilderness Backdrop"
           fill
           className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[10s] brightness-[0.3]"
         />
         {/* Animated Multi-Layer Glow */}
         <div className="absolute inset-0 bg-gradient-to-tr from-deep-charcoal via-transparent to-sunset-gold/10 z-10" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(208,122,63,0.1),transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_50%,rgba(208,122,63,0.2),transparent_70%)] transition-colors duration-1000 z-10" />
         
         {/* Moving Light Beam */}
         <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent,rgba(208,122,63,0.05),transparent_40deg)] animate-spin-slow pointer-events-none z-20" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-30">
        
        {/* Header Stack */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 lg:mb-40 gap-12">
           <div className="max-w-4xl relative">
              {/* Massive Outline Text in BG */}
              <div className="absolute -top-12 -left-4 text-[12vw] font-black text-white/[0.03] select-none leading-none tracking-tighter mix-blend-plus-lighter whitespace-nowrap hidden lg:block">
                 EXPERIENCE
              </div>
              <span className="text-sunset-gold font-bold text-sm tracking-[0.5em] uppercase mb-8 block drop-shadow-md">
                 Our Selection Standard
              </span>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-soft-beige leading-[0.8] tracking-tighter italic">
                 Why Choose <br />
                 <span className="text-sunset-gold drop-shadow-[0_0_20px_rgba(208,122,63,0.4)]">Our Lodges?</span>
              </h2>
           </div>
           
           <div className="max-w-md p-10 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] group-hover:border-sunset-gold/30 transition-colors">
              <p className="text-warm-sand/60 text-lg leading-relaxed font-serif italic">
                 &quot;Luxury in the wild is silent. It is the peace of knowing your santuary is as untamed as the landscape, yet as secure as a fortress.&quot;
              </p>
           </div>
        </div>

        {/* The Glass-Wrapped Selection Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
           {whyStayPoints.map((point, idx) => (
             <div 
               key={idx} 
               className="group/card relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] transition-all duration-700 hover:-translate-y-6 hover:bg-white/[0.08] hover:border-sunset-gold/50 flex flex-col justify-between min-h-[440px]"
             >
                {/* Floating Index */}
                <div className="absolute top-8 right-8 text-[10px] font-black text-sunset-gold opacity-40 uppercase tracking-widest">
                   {idx + 1} / 5
                </div>

                <div className="relative z-10">
                   <h3 className="text-2xl font-black text-soft-beige mb-6 leading-tight group-hover/card:text-sunset-gold transition-colors italic">
                      {point.title}
                   </h3>
                   <p className="text-warm-sand/40 text-sm leading-relaxed font-medium group-hover/card:text-warm-sand/70 transition-colors">
                      {point.desc}
                   </p>
                </div>

                <div className="mt-12">
                   <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-5xl font-black text-soft-beige tracking-tighter drop-shadow-[0_0_15px_rgba(208,122,63,0.2)]">
                         {point.stat}
                      </span>
                      <span className="text-[9px] text-sunset-gold font-bold uppercase tracking-widest opacity-60">
                         {point.statLabel}
                      </span>
                   </div>
                   <div className="h-px w-full bg-gradient-to-r from-sunset-gold to-transparent opacity-30 group-hover/card:opacity-100 transition-opacity" />
                </div>
                
                {/* Glow Element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-sunset-gold/10 rounded-full blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity" />
             </div>
           ))}
        </div>

      </div>

    </section>
  );
}
