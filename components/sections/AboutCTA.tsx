"use client";

import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "10+", label: "Years of Expertise" },
  { value: "5,000+", label: "Happy Explorers" },
  { value: "98%", label: "5-Star Reviews" },
  { value: "3", label: "National Parks" },
];

export default function AboutCTA() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-deep-charcoal py-24 md:py-28">
      
      {/* Full-Bleed Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg-s2.jpg"
          alt="Wild Safari Experience Sri Lanka"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Multi-layered Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal/60 via-transparent to-deep-charcoal/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal/80 via-transparent to-deep-charcoal/80 z-10" />

      {/* Floating Accent Globes */}
      <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-sunset-gold/10 blur-[120px] z-10 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-olive-green/15 blur-[100px] z-10 animate-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-4 mb-10">
          <span className="w-16 h-[1px] bg-sunset-gold/60"></span>
          <span className="text-sunset-gold font-bold text-sm tracking-[0.4em] uppercase">
            Your Adventure Awaits
          </span>
          <span className="w-16 h-[1px] bg-sunset-gold/60"></span>
        </div>

        {/* Giant Headline */}
        <h2 className="text-6xl md:text-7xl lg:text-[7rem] font-black text-white leading-[0.95] tracking-tighter mb-10 max-w-5xl mx-auto">
          The Call of
          <br />
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sunset-gold via-soft-beige to-sunset-gold inline-block">
            The Wild
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-warm-sand/80 font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
          You've discovered who we are. Now let us show you what Yala truly holds. A single day in the jungle changes everything.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center mb-24">
          {/* Primary CTA */}
          <Link
            href="/booking"
            className="relative overflow-hidden group inline-flex items-center gap-3 px-10 py-5 bg-sunset-gold text-deep-charcoal font-black text-sm tracking-widest uppercase rounded-full shadow-[0_0_60px_rgba(208,122,63,0.5)] hover:shadow-[0_0_90px_rgba(208,122,63,0.8)] transition-all duration-500 transform hover:-translate-y-1"
          >
            {/* Sweeping Light */}
            <span className="absolute inset-0 -translate-x-full skew-x-[20deg] bg-white/30 group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0" />
            <span className="relative z-10">Book My Safari</span>
            <span className="relative z-10 w-7 h-7 rounded-full bg-deep-charcoal/20 flex items-center justify-center group-hover:bg-deep-charcoal/30 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
              </svg>
            </span>
          </Link>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/94722112222"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 group-hover:animate-ping" />
              <span className="absolute w-4 h-4 rounded-full bg-[#25D366]" />
              <svg className="relative z-10 w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.668.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            Chat with Us
          </a>
        </div>

        {/* Floating Stats Bar */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-center">
                <span className="text-4xl md:text-5xl font-black text-sunset-gold leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="text-warm-sand/70 text-xs font-bold uppercase tracking-widest leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
