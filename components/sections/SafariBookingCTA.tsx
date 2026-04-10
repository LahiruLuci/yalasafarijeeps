"use client";

import Image from "next/image";
import Link from "next/link";
import { SafariPackage } from "@/lib/safariData";

export default function SafariBookingCTA({ safari }: { safari: SafariPackage }) {
  return (
    <section className="relative bg-warm-sand/20 py-24 md:py-32 px-4 md:px-8 overflow-hidden">

      {/* Decorative diagonal background shape */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-olive-green/10 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-sunset-gold/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* The Main Floating Card */}
        <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.25)] flex flex-col lg:flex-row min-h-[500px] border border-white/60">

          {/* Left: Dark cinematic side */}
          <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-full overflow-hidden">
            <Image
              src={safari.image}
              alt={`Book ${safari.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover scale-105 hover:scale-100 transition-transform duration-[15s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-deep-charcoal/95 via-deep-charcoal/60 to-transparent" />

            {/* Floating content on image */}
            <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-sunset-gold rounded-full mb-5 shadow-lg">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-deep-charcoal">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span className="text-deep-charcoal font-black text-xs tracking-widest uppercase">{safari.time}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-xl">
                {safari.title}
              </h3>
              <p className="text-warm-sand/70 font-bold text-sm uppercase tracking-widest mt-2">{safari.subtitle} · {safari.duration}</p>
            </div>
          </div>

          {/* Right: Booking Panel */}
          <div className="w-full lg:w-1/2 bg-white p-10 md:p-16 flex flex-col justify-center gap-8">

            <div>
              <span className="text-sunset-gold font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Secure Your Spot</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-deep-charcoal leading-tight mb-5">
                Ready to Enter <br/>
                <span className="italic text-olive-green">The Wild?</span>
              </h2>
              <p className="text-safari-brown/70 text-lg font-medium leading-relaxed">
                Spots fill quickly — especially during peak season. Reserve your {safari.title} with us today and guarantee an extraordinary, private wildlife encounter.
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Direct Booking */}
              <Link
                href="/booking"
                className="group relative overflow-hidden flex-1 flex flex-col items-center justify-center gap-2 bg-deep-charcoal text-white rounded-2xl px-6 py-6 font-black text-sm tracking-widest uppercase text-center hover:bg-olive-green transition-colors duration-300 shadow-xl"
              >
                <span className="absolute inset-0 -translate-x-full skew-x-[20deg] bg-white/10 group-hover:translate-x-full transition-transform duration-700" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span className="relative z-10">Book Online</span>
              </Link>

              {/* WhatsApp */}
              <a
                href="https://wa.me/94722112222"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex flex-col items-center justify-center gap-2 bg-[#25D366] text-white rounded-2xl px-6 py-6 font-black text-sm tracking-widest uppercase text-center hover:bg-[#1da851] transition-colors duration-300 shadow-xl"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.668.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Call Strip */}
            <a
              href="tel:+94722112222"
              className="group flex items-center justify-between gap-4 p-5 rounded-2xl border-2 border-dashed border-deep-charcoal/20 hover:border-sunset-gold hover:bg-warm-sand/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-warm-sand flex items-center justify-center text-deep-charcoal group-hover:bg-sunset-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.906.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.905.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-safari-brown/50 mb-0.5">Call Us 24/7</span>
                  <span className="block text-lg font-extrabold text-deep-charcoal group-hover:text-sunset-gold transition-colors">+94 72 211 22 22</span>
                </div>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-deep-charcoal/30 group-hover:text-sunset-gold group-hover:translate-x-1 transition-all duration-300">
                <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
              </svg>
            </a>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-5 pt-2 border-t border-deep-charcoal/10">
              {["Free Cancellation", "No Hidden Fees", "Instant Confirmation"].map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-olive-green flex items-center justify-center flex-shrink-0">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-safari-brown/60 text-xs font-bold">{badge}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
