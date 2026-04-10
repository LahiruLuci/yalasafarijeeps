"use client";

import Image from "next/image";

export default function BookingHero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-deep-charcoal">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-bg.jpg"
          alt="Book Yala Safari"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal/40 via-deep-charcoal/20 to-deep-charcoal" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-sunset-gold"></div>
            <span className="text-sunset-gold font-black text-xs md:text-sm tracking-[0.5em] uppercase">
              RESERVE YOUR ADVENTURE
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic">
            Book <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-gold to-warm-sand">Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-warm-sand/80 font-medium leading-relaxed max-w-xl">
            Secure your spot in the wild today. Choose your package and prepare for an unforgettable private expedition through Yala's pristine wilderness.
          </p>
        </div>
      </div>
    </section>
  );
}
