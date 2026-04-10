"use client";

import Image from "next/image";

export default function ContactDetails() {
  return (
    <section className="bg-deep-charcoal py-32 md:py-52 relative overflow-hidden group">
      
      {/* ── Background Identity (Watermark) ── */}
      <div className="absolute top-0 right-0 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none leading-none -mr-20">
         LEGACY
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-stretch">
           
           {/* ── Left Pillar: The Identity Block (5 Units) ── */}
           <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                 <div className="mb-12">
                    <span className="text-sunset-gold font-bold text-xs tracking-[0.6em] uppercase mb-8 block">
                       Authorized & Verified
                    </span>
                    <h2 className="text-5xl md:text-7xl font-extrabold text-soft-beige leading-none tracking-tighter mb-8 italic">
                       Business <br />
                       <span className="text-white">Transparency</span>
                    </h2>
                    <p className="text-warm-sand/40 text-xl font-medium leading-relaxed italic border-l-2 border-sunset-gold/30 pl-8">
                       Building absolute trust for our global travelers. We are a registered Sri Lankan travel institution with a decade of Yala legacy.
                    </p>
                 </div>

                 {/* Official Signature/Seal */}
                 <div className="inline-flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                    <div className="w-16 h-16 rounded-full border-2 border-sunset-gold/50 flex items-center justify-center p-1">
                       <div className="w-full h-full rounded-full bg-sunset-gold flex items-center justify-center text-deep-charcoal font-black text-[10px]">
                          Y.S.J
                       </div>
                    </div>
                    <div>
                       <p className="text-soft-beige font-black text-sm uppercase tracking-widest">Yala Safari Jeeps</p>
                       <p className="text-warm-sand/30 text-[10px] font-bold uppercase tracking-widest">Official Registration: 2008/SL/TRV</p>
                    </div>
                 </div>
              </div>

              {/* Social Connect Layer */}
              <div className="mt-20 lg:mt-0 flex gap-4">
                 {['Facebook', 'Instagram', 'TripAdvisor', 'YouTube'].map((social) => (
                   <button key={social} className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-sunset-gold hover:text-deep-charcoal group/social">
                      <span className="text-[8px] font-black uppercase tracking-tighter opacity-40 group-hover/social:opacity-100">{social[0]}</span>
                   </button>
                 ))}
              </div>
           </div>

           {/* ── Right Pillar: The Data Ledger (7 Units) ── */}
           <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[4rem] overflow-hidden">
              
              {/* Card 1: Office Location */}
              <div className="bg-deep-charcoal p-12 md:p-14 hover:bg-white/[0.02] transition-colors flex flex-col justify-between group/card">
                 <div>
                    <span className="text-sunset-gold font-black text-[9px] tracking-[0.4em] uppercase mb-8 block">HEADQUARTERS</span>
                    <h3 className="text-2xl font-black text-soft-beige tracking-tight mb-4">Kirinda Road</h3>
                    <p className="text-warm-sand/40 text-base leading-relaxed italic">
                       Tissamaharama, Southern Province,<br />Sri Lanka 82600.
                    </p>
                 </div>
                 <button className="mt-10 flex items-center gap-4 text-soft-beige/40 text-[9px] font-black uppercase tracking-widest hover:text-sunset-gold transition-colors">
                    VIEW ON MAP <div className="w-6 h-px bg-current" />
                 </button>
              </div>

              {/* Card 2: Contact Matrix */}
              <div className="bg-deep-charcoal p-12 md:p-14 border-l border-white/5 hover:bg-white/[0.02] transition-colors flex flex-col justify-between group/card">
                 <div>
                    <span className="text-sunset-gold font-black text-[9px] tracking-[0.4em] uppercase mb-8 block">DIRECT LINES</span>
                    <p className="text-soft-beige font-black text-xl mb-2 tracking-tight">+94 77 123 4567</p>
                    <p className="text-soft-beige font-black text-xl mb-6 tracking-tight">+94 47 987 6543</p>
                    <p className="text-warm-sand/40 text-base italic">hello@yalasafari.com</p>
                 </div>
                 <div className="mt-10 w-8 h-8 rounded-full border border-sunset-gold/30 flex items-center justify-center text-sunset-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                 </div>
              </div>

              {/* Card 3: Operation Hours */}
              <div className="bg-deep-charcoal p-12 md:p-14 border-t border-white/5 hover:bg-white/[0.02] transition-colors flex flex-col justify-between group/card">
                 <div>
                    <span className="text-sunset-gold font-black text-[9px] tracking-[0.4em] uppercase mb-8 block">AVAILABILITY</span>
                    <h3 className="text-2xl font-black text-soft-beige tracking-tight mb-4 italic">24 / 7 Operations</h3>
                    <p className="text-warm-sand/40 text-base leading-relaxed italic">
                       Our Yala base never sleeps. We are ready for early dawn or midnight tracking emergencies.
                    </p>
                 </div>
                 <div className="mt-10 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-olive-green" />
                    <div className="w-2 h-2 rounded-full bg-olive-green" />
                    <div className="w-2 h-2 rounded-full bg-olive-green animate-pulse" />
                 </div>
              </div>

              {/* Card 4: Global Response */}
              <div className="bg-deep-charcoal p-12 md:p-14 border-l border-t border-white/5 hover:bg-white/[0.02] transition-colors flex flex-col justify-between group/card">
                 <div>
                    <span className="text-sunset-gold font-black text-[9px] tracking-[0.4em] uppercase mb-8 block">COMMITMENT</span>
                    <h3 className="text-2xl font-black text-soft-beige tracking-tight mb-4 capitalize italic">Instant Response</h3>
                    <p className="text-warm-sand/40 text-base leading-relaxed italic">
                       International tourists are prioritized with our 2-hour maximum response guarantee. 
                    </p>
                 </div>
                 <div className="mt-10 opacity-10 group-hover/card:opacity-30 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="text-soft-beige"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                 </div>
              </div>

           </div>

        </div>

      </div>

    </section>
  );
}
