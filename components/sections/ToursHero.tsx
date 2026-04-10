import Image from "next/image";
import Link from "next/link";

const tourStats = [
  { value: "8", unit: "Days", label: "Immersive Journey" },
  { value: "5+", unit: "Destinations", label: "Across Sri Lanka" },
  { value: "2", unit: "Safaris", label: "Included" },
  { value: "24/7", unit: "Support", label: "Always With You" },
];

export default function ToursHero() {
  return (
    <section className="relative w-full min-h-[100svh] bg-deep-charcoal overflow-hidden flex flex-col pt-24">

      {/* ── Background: 3-panel horizontal image composition ── */}
      <div className="absolute inset-0 grid grid-cols-3 z-0 opacity-90">
        <div className="relative overflow-hidden">
          <Image src="/images/yala-national-park/yala-national-park-sri-lanka-image1.jpg" alt="Leopard" fill sizes="34vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal/80 to-transparent" />
        </div>
        <div className="relative overflow-hidden">
          <Image src="/images/yala-safari-accomodation-banner.jpg" alt="Kandy Temple" fill sizes="33vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-deep-charcoal/30" />
        </div>
        <div className="relative overflow-hidden">
          <Image src="/images/yala-national-park/yala-national-park-sri-lanka-image7.jpg" alt="Yala Landscape" fill sizes="33vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-l from-deep-charcoal/80 to-transparent" />
        </div>
      </div>

      {/* Full dark gradient bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-transparent to-deep-charcoal/40 z-10 pointer-events-none" />

      {/* Ambient glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-sunset-gold/8 blur-[160px] z-10 pointer-events-none" />

      {/* ── Main Content ── */}
      <div className="relative z-20 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8 w-full text-center pb-36 md:pb-28">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-5 mb-10">
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-sunset-gold" />
          <span className="text-sunset-gold font-black text-xs tracking-[0.5em] uppercase">
            Sri Lanka Expedition
          </span>
          <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-sunset-gold" />
        </div>

        {/* Giant Stacked Headline */}
        <div className="mb-10">
          <h1 className="text-6xl md:text-7xl lg:text-[9rem] font-black text-white leading-[0.9] tracking-tighter uppercase">
            Beyond
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-[9rem] font-black leading-[0.9] tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-warm-sand via-sunset-gold to-warm-sand">
            The Park
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-warm-sand/70 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
          Multi-day expeditions combining the raw majesty of Yala with the temples, tea trails, and coastlines of Sri Lanka's most iconic destinations.
        </p>

        {/* CTA Pair */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#tours-list"
            className="group relative overflow-hidden inline-flex items-center gap-3 px-10 py-5 bg-sunset-gold text-deep-charcoal font-black text-sm tracking-widest uppercase rounded-full shadow-[0_0_50px_rgba(208,122,63,0.4)] hover:shadow-[0_0_80px_rgba(208,122,63,0.7)] transition-all duration-500 transform hover:-translate-y-1"
          >
            <span className="absolute inset-0 -translate-x-full skew-x-[20deg] bg-white/30 group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Explore Tours</span>
            <svg className="relative z-10 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </Link>
          <Link
            href="/booking"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur border border-white/20 text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Book a Custom Tour
          </Link>
        </div>
      </div>

      {/* ── Bottom Stats Strip ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-white/5 backdrop-blur-xl border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {tourStats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center py-6 md:py-7 gap-1 text-center">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-black text-sunset-gold">{stat.value}</span>
                    <span className="text-base font-extrabold text-white">{stat.unit}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-warm-sand/50">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Side scroll indicator */}
      <div className="absolute right-8 bottom-28 z-30 hidden md:flex flex-col items-center gap-2 text-warm-sand/30">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-sunset-gold/60" />
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] rotate-90 translate-x-4">Scroll</span>
      </div>

    </section>
  );
}
