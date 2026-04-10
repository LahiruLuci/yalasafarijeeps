"use client";

import Image from "next/image";

export default function StaySleepUnderStars() {
  return (
    <section className="bg-black py-24 md:py-40 relative overflow-hidden group">
      
      {/* ── Background Ambiance (Starfield) ── */}
      <div className="absolute inset-0 z-0">
         <Image
           src="/images/leopard-nest/leopard-nest-yala-national-park-11.jpg"
           alt="Midnight Wilderness"
           fill
           className="object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[10s] brightness-[0.25]"
         />
         {/* Layered vignette */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-20">
           
           {/* ── Left Side: The "Midnight Window" (Visual) ── */}
           <div className="w-full lg:w-1/2 relative h-[500px] md:h-[700px]">
              <div className="absolute inset-0 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
                 <Image
                   src="/images/leopard-nest/leopard-nest-yala-national-park-3.jpg"
                   alt="Starlit Sleepout Setup"
                   fill
                   className="object-cover transition-transform duration-[5s] group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-sunset-gold/10 rounded-full blur-[80px] animate-pulse" />
              <div className="absolute -bottom-12 -left-12 p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] hidden md:block">
                 <span className="text-sunset-gold font-black text-[10px] tracking-[0.4em] uppercase block mb-2">Observation</span>
                 <p className="text-soft-beige font-serif italic text-lg leading-tight">Yala Night Sky,<br />21:45 PM</p>
              </div>
           </div>

           {/* ── Right Side: Narrative Impact ── */}
           <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              
              <div className="mb-12">
                 <span className="text-sunset-gold font-bold text-sm tracking-[0.6em] uppercase mb-8 block">
                    The Midnight Ritual
                 </span>
                 <h2 className="text-6xl md:text-8xl font-extrabold text-soft-beige leading-[0.9] tracking-tighter mb-10">
                    Sleep Under <br />
                    <span className="italic text-sunset-gold font-light font-serif">The Stars</span>
                 </h2>
                 <p className="text-warm-sand/50 text-xl font-medium leading-relaxed italic max-w-xl border-l border-sunset-gold/30 pl-8">
                    In the heart of the wilderness, luxury is defined by silence. Experience a night where the only ceiling is the velvet expanse of the cosmos and the only sound is the breath of the bush.
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-12 mb-16">
                 <div>
                    <span className="text-[10px] text-soft-beige/30 font-black uppercase tracking-widest block mb-4">The View</span>
                    <p className="text-soft-beige font-bold text-lg leading-tight italic">99% Clarity<br />Zero Light Pollution</p>
                 </div>
                 <div>
                    <span className="text-[10px] text-soft-beige/30 font-black uppercase tracking-widest block mb-4">The Comfort</span>
                    <p className="text-soft-beige font-bold text-lg leading-tight italic">Luxury Linens<br />Secure Enclosures</p>
                 </div>
              </div>

              <button className="group/btn flex items-center gap-6">
                 <div className="w-16 h-16 rounded-full bg-sunset-gold flex items-center justify-center transition-transform group-hover/btn:scale-110 shadow-[0_0_30px_rgba(208,122,63,0.4)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-deep-charcoal group-hover/btn:rotate-45 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                 </div>
                 <span className="text-soft-beige font-black text-sm tracking-[0.3em] uppercase border-b-2 border-sunset-gold pb-1 group-hover/btn:text-sunset-gold transition-colors">
                    EXPLORE NIGHT STAYS
                 </span>
              </button>

           </div>

        </div>

      </div>

    </section>
  );
}
