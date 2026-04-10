"use client";

import Image from "next/image";

export default function StayExperience() {
  return (
    <section className="bg-warm-sand py-24 md:py-40 relative overflow-hidden">
      
      {/* ── Background Accent ── */}
      <div className="absolute -left-20 top-40 text-[20vw] font-black text-olive-green/5 select-none pointer-events-none leading-none">
         WILDLIFE
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* ── Left Side: Asymmetric Image Montage ── */}
          <div className="lg:col-span-6 relative">
            <div className="relative group overflow-hidden rounded-[4rem] shadow-2xl h-[500px] md:h-[650px] w-full lg:w-[90%] transform -rotate-3 hover:rotate-0 transition-transform duration-1000">
              <Image
                src="/images/chena-huts/chena-hut-yala-national-park-top.jpg"
                alt="Luxury Tent Setup at Chena Huts"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/40 to-transparent" />
            </div>

            {/* Floating Inset Image */}
            <div className="absolute -bottom-12 -right-8 md:-right-12 w-[240px] md:w-[320px] h-[340px] md:h-[450px] rounded-[3rem] overflow-hidden shadow-[-40px_40px_80px_rgba(43,42,34,0.3)] border-[10px] border-warm-sand group transform rotate-6 hover:rotate-3 transition-transform duration-1000 z-20">
               <Image
                 src="/images/cinnamon-wild/cinnamon-wild-home-1.jpg"
                 alt="Wilderness Pool Experience at Cinnamon Wild"
                 fill
                 className="object-cover transition-transform duration-[2s] group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-sunset-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-[2px] border-sunset-gold/20 rounded-full animate-spin-slow pointer-events-none" />
          </div>

          {/* ── Right Side: Narrative Content ── */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="mb-10">
              <span className="text-sunset-gold font-bold text-sm tracking-[0.4em] uppercase mb-6 block">
                 The Spirit of Yala
              </span>
              <h2 className="text-5xl md:text-7xl font-extrabold text-deep-charcoal leading-[1.05] tracking-tight mb-8">
                 The Luxury of <br />
                 <span className="italic text-olive-green font-light font-serif">Proximity</span>
              </h2>
              <p className="text-xl text-safari-brown/70 leading-relaxed font-medium mb-10 max-w-xl">
                 In Yala, luxury isn&apos;t just about fine linens and silk sheets; it&apos;s about being close enough to hear the roar of the leopard and the rhythmic crashing of the Indian Ocean against the shore.
              </p>
            </div>

            {/* ── Experience Pillars ── */}
            <div className="space-y-12 pl-2 border-l-2 border-sunset-gold/20">
              
              {/* Pillar 01 */}
              <div className="relative group pl-10">
                <div className="absolute left-[-22px] top-0 w-10 h-10 bg-deep-charcoal rounded-full flex items-center justify-center text-sunset-gold font-black text-xs transition-colors group-hover:bg-sunset-gold group-hover:text-deep-charcoal shadow-lg">
                  01
                </div>
                <h3 className="text-2xl font-bold text-deep-charcoal mb-3 italic">Dawn in the Bush</h3>
                <p className="text-safari-brown/60 leading-relaxed">
                   Wake up to the symphony of over 215 bird species. Enjoy your morning coffee on a private deck as the golden sun spills over the horizon, revealing tracks of the night&apos;s wanderers.
                </p>
              </div>

              {/* Pillar 02 */}
              <div className="relative group pl-10">
                <div className="absolute left-[-22px] top-0 w-10 h-10 bg-deep-charcoal rounded-full flex items-center justify-center text-sunset-gold font-black text-xs transition-colors group-hover:bg-sunset-gold group-hover:text-deep-charcoal shadow-lg">
                  02
                </div>
                <h3 className="text-2xl font-bold text-deep-charcoal mb-3 italic">Twilight Rituals</h3>
                <p className="text-safari-brown/60 leading-relaxed">
                   After a full day of tracking, unwind with sunset cocktails on the dunes. Feel the cool ocean breeze as the park transitions from the heat of the day to the mystery of the night.
                </p>
              </div>

              {/* Pillar 03 */}
              <div className="relative group pl-10">
                <div className="absolute left-[-22px] top-0 w-10 h-10 bg-deep-charcoal rounded-full flex items-center justify-center text-sunset-gold font-black text-xs transition-colors group-hover:bg-sunset-gold group-hover:text-deep-charcoal shadow-lg">
                  03
                </div>
                <h3 className="text-2xl font-bold text-deep-charcoal mb-3 italic">Star-Bound Dining</h3>
                <p className="text-safari-brown/60 leading-relaxed">
                   Experience world-class gastronomy under one of the darkest skies in the world. Our bush dinners are an intimate affair, lit by moonlight and bonfire.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
