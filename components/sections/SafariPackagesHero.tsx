"use client";

import Image from "next/image";
import Link from "next/link";

const packages = [
  { label: "Half Day Morning", href: "/safari/half-day-morning", tag: "Most Popular" },
  { label: "Half Day Evening", href: "/safari/half-day-evening", tag: null },
  { label: "Full Day Safari", href: "/safari/full-day", tag: "Best Value" },
  { label: "Overnight Safari", href: "/safari/overnight", tag: "Premium" },
  { label: "2 Day Package", href: "/safari/2-day", tag: null },
];

export default function SafariPackagesHero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col overflow-hidden bg-deep-charcoal pt-24">
      
      {/* Full-Bleed Parallax Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/yala-safari-page-image.jpg"
          alt="Yala National Park Safari Experience"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Cinematic multi-directional gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/20 to-deep-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal/80 via-transparent to-transparent" />
      </div>

      {/* Diagonal Slanted Accent Bar */}
      <div className="absolute bottom-[140px] md:bottom-[120px] left-0 right-0 z-10 overflow-hidden h-32 pointer-events-none">
        <div className="absolute inset-0 bg-sunset-gold/10 -skew-y-2 origin-left transform scale-110" />
      </div>

      {/* Floating Ambient Orb */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-sunset-gold/10 blur-[130px] z-0 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8 w-full pb-48 md:pb-40">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-[2px] bg-sunset-gold"></div>
          <span className="text-sunset-gold font-black text-xs tracking-[0.4em] uppercase">
            Into the Wild
          </span>
        </div>

        {/* Giant Headline */}
        <div className="mb-8 overflow-hidden">
          <h1 className="text-6xl md:text-7xl lg:text-[8rem] font-black text-white leading-[0.92] tracking-tighter">
            Safari
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-[8rem] font-black leading-[0.92] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sunset-gold via-warm-sand to-sunset-gold">
            Packages
          </h1>
        </div>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-warm-sand/80 font-medium max-w-xl leading-relaxed border-l-2 border-sunset-gold/40 pl-6">
          From fleeting golden-hour encounters to immersive multi-day expeditions—choose your own path into one of the world's most biodiverse national parks.
        </p>
      </div>

      {/* Sliding Package Quick-Nav Strip (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Frosted container */}
        <div className="bg-white/5 backdrop-blur-xl border-t border-white/10 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex overflow-x-auto scrollbar-hide py-0 gap-0 divide-x divide-white/10">
              {packages.map((pkg, i) => (
                <Link
                  key={i}
                  href={pkg.href}
                  className="group flex-shrink-0 flex flex-col items-start gap-1 px-6 md:px-8 py-5 md:py-6 hover:bg-white/5 transition-colors duration-300 relative min-w-[180px]"
                >
                  {pkg.tag && (
                    <span className="text-[9px] font-black uppercase tracking-widest text-sunset-gold bg-sunset-gold/10 px-2 py-0.5 rounded-full">
                      {pkg.tag}
                    </span>
                  )}
                  {!pkg.tag && <span className="h-4 block" />}
                  <span className="text-white font-bold text-sm group-hover:text-sunset-gold transition-colors whitespace-nowrap">
                    {pkg.label}
                  </span>
                  {/* Bottom active indicator */}
                  <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-sunset-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute right-8 bottom-28 z-30 hidden md:flex flex-col items-center gap-2 text-warm-sand/40">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-sunset-gold/60"></div>
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] rotate-90 translate-x-4">Scroll</span>
      </div>

    </section>
  );
}
