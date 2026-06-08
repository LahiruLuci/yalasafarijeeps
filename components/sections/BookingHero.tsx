"use client";

import Image from "next/image";

export default function BookingHero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-deep-charcoal py-24">
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

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-sunset-gold"></div>
            <span className="text-sunset-gold font-black text-xs md:text-sm tracking-[0.5em] uppercase">
              RESERVE YOUR ADVENTURE
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-8 italic overflow-visible">
            Book Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-gold to-warm-sand pr-4 inline-block">Yala Safari Jeep</span>
          </h1>
          <p className="text-lg md:text-xl text-warm-sand/80 font-medium leading-relaxed max-w-xl mb-10">
            Reserve your private Yala safari experience. Choose your package, date, and pickup location — no payment required now.
          </p>

          <div className="flex flex-wrap gap-6">
            <button
              onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-sunset-gold text-deep-charcoal px-10 py-5 rounded-full font-black text-sm tracking-widest uppercase shadow-[0_20px_50px_rgba(208,122,63,0.3)] hover:scale-110 active:scale-95 transition-all"
            >
              Start Booking
            </button>
            <a
              href="https://wa.me/61416482262"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-black text-sm tracking-widest uppercase hover:bg-white/20 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
