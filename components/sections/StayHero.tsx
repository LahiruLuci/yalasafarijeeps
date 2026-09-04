"use client";

import Image from "next/image";

export default function StayHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-deep-charcoal">

      {/* ── Background Engine ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/yala-safari-accomodation-banner.jpg"
          alt="Luxury Yala Accommodation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70 scale-105 transition-transform duration-1000"
        />
        {/* Dynamic Shadow Layer for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal via-deep-charcoal/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-transparent to-transparent z-10" />

        {/* Animated Light Orb */}
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-sunset-gold/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 pt-20">
        <div className="max-w-4xl">

          {/* Top Label */}
          <div className="flex items-center gap-4 mb-8 overflow-hidden">
            <div className="h-px w-12 bg-sunset-gold/50" />
            <span className="text-sunset-gold font-bold text-xs md:text-sm tracking-[0.5em] uppercase">
              Places to Stay Near Yala
            </span>
          </div>

          {/* Main Typography Stack */}
          <div className="relative mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-soft-beige leading-[1.1] tracking-tighter mix-blend-plus-lighter opacity-90 mb-6">
              Accommodation Near<br />
              <span className="text-sunset-gold italic font-light font-serif">Yala National Park</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-warm-sand/80 font-medium leading-relaxed pl-4 border-l-2 border-sunset-gold/30 italic">
              Discover a selection of hotels, lodges and safari-style stays around Yala, Tissamaharama, Kirinda and the surrounding area.
            </p>
          </div>

          {/* ── CTA & Interaction Row ── */}
          <div className="flex flex-wrap items-center gap-6 pl-2">
            <a href="#curated-stays" className="group flex items-center gap-4 bg-sunset-gold hover:bg-sunset-gold/90 text-deep-charcoal font-black py-4 px-8 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(208,122,63,0.3)]">
              EXPLORE STAYS
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform group-hover:translate-x-2">
                <path d="M18 8L22 12L18 16" /><path d="M2 12H22" />
              </svg>
            </a>

            <a href="/contact" className="group flex items-center gap-4 bg-transparent border-2 border-soft-beige/20 hover:border-sunset-gold text-soft-beige font-black py-4 px-8 rounded-full transition-all hover:scale-105 active:scale-95">
              PLAN YOUR SAFARI
            </a>
          </div>
        </div>
      </div>

      {/* ── Right-Side Floating Specs (The "Next Level" Element) ── */}
      <div className="hidden lg:flex absolute right-4 bottom-0 top-0 w-1/3 flex-col justify-center items-end p-12 pointer-events-none">
        <div className="flex flex-col gap-6">

          {/* Spec Card 01 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl lg:rounded-l-[3rem] lg:rounded-r-xl w-[360px] transform hover:-translate-x-8 transition-transform duration-700 pointer-events-auto shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-sunset-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sunset-gold mb-4">
              <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
              <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
              <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
            </svg>
            <h3 className="text-soft-beige font-bold text-xl mb-2 italic">Nature-Focused</h3>
            <p className="text-warm-sand/50 text-sm leading-relaxed">
              Discover properties that allow you to unwind surrounded by the beauty of the Sri Lankan wilderness.
            </p>
          </div>

          {/* Spec Card 02 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl lg:rounded-l-[3rem] lg:rounded-r-xl w-[360px] transform hover:-translate-x-8 transition-transform duration-700 pointer-events-auto shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-sunset-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sunset-gold mb-4">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <h3 className="text-soft-beige font-bold text-xl mb-2 italic">Convenient Safari Logistics</h3>
            <p className="text-warm-sand/50 text-sm leading-relaxed">
              Explore stays located in nearby areas like Tissamaharama and Kirinda, perfect for early morning park access.
            </p>
          </div>

          {/* Spec Card 03 - Badge style */}
          <div className="flex items-center gap-6 mt-8">
            <div className="h-[2px] w-[120px] bg-gradient-to-r from-transparent to-sunset-gold/50" />
            <div className="text-soft-beige font-bold text-xs uppercase tracking-[0.5em] whitespace-nowrap">
              Scroll To Begin
            </div>
          </div>
        </div>
      </div>


      {/* Side Navigation Labels */}
      <div className="absolute left-8 bottom-12 hidden md:flex flex-col gap-8 items-center overflow-hidden">
        <div className="h-24 w-px bg-white/10" />
        <span className="-rotate-90 text-white/20 font-bold uppercase tracking-[0.6em] text-[10px] whitespace-nowrap origin-center scale-150 py-10">
          EST. MMVIII
        </span>
      </div>

    </section>
  );
}
