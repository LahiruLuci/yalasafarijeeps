"use client";

import Image from "next/image";

const highlights = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    ),
    label: "Highest Leopard Density",
    detail: "Yala Block I holds the world's highest density of wild leopards per square kilometer.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    label: "215+ Bird Species",
    detail: "A paradise for ornithologists, from the majestic painted stork to the Indian pitta.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      </svg>
    ),
    label: "Elephant Herds",
    detail: "Encounter majestic elephant herds crossing ancient watering holes at dusk.",
  },
];

export default function SafariIntro() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Top Editorial Layout: Text Left + Image Collage Right */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24 md:mb-40">

          {/* Left: Rich Text Column */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-[2px] bg-sunset-gold"></span>
              <span className="text-sunset-gold font-black text-xs tracking-[0.4em] uppercase">Block I, Yala National Park</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-deep-charcoal leading-[1.05] mb-8 tracking-tight">
              Where Every
              <br />
              <span className="italic text-olive-green font-black">Track Tells</span>
              <br />
              a Story
            </h2>

            {/* Large Pullquote */}
            <blockquote className="relative mb-10">
              <div className="absolute -top-4 -left-4 text-[8rem] font-black text-sunset-gold/10 leading-none select-none">"</div>
              <p className="text-xl md:text-2xl text-safari-brown/90 font-medium leading-relaxed pl-6 border-l-4 border-sunset-gold relative z-10">
                Yala is not just a destination — it is a living, breathing wilderness that rewards patience, presence, and an open heart.
              </p>
            </blockquote>

            <p className="text-lg text-safari-brown/70 leading-relaxed mb-12">
              Spanning over 979 square kilometers, Yala National Park is Sri Lanka's most visited and second-largest national park. Our expeditions focus exclusively on Block I — the richest zone — delivering encounters that rival the greatest wildlife reserves on earth.
            </p>

            {/* Key Highlights */}
            <div className="flex flex-col gap-6">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-warm-sand flex items-center justify-center text-olive-green flex-shrink-0 group-hover:bg-olive-green group-hover:text-soft-beige transition-all duration-300">
                    {h.icon}
                  </div>
                  <div>
                    <span className="block font-black text-deep-charcoal text-sm uppercase tracking-wider mb-1">{h.label}</span>
                    <span className="block text-safari-brown/70 text-sm leading-relaxed">{h.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Staggered Image Collage */}
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[700px]">

            {/* Large dominant image */}
            <div className="absolute top-0 right-0 w-[75%] h-[65%] rounded-[2.5rem] overflow-hidden shadow-2xl z-20 border-8 border-white">
              <Image
                src="/images/yala-national-park/yala-national-park-sri-lanka-image1.jpg"
                alt="Yala National Park Leopard"
                fill
                sizes="(max-width: 1024px) 80vw, 38vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Small accent image - bottom left */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[48%] rounded-[2rem] overflow-hidden shadow-xl z-30 border-8 border-white">
              <Image
                src="/images/yala-national-park/yala-national-park-sri-lanka-image3.jpg"
                alt="Elephant herd at Yala"
                fill
                sizes="35vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating stats badge */}
            <div className="absolute top-[55%] right-[22%] z-40 bg-deep-charcoal text-white px-5 py-4 rounded-2xl shadow-2xl text-center border border-white/10">
              <span className="block text-3xl font-black text-sunset-gold leading-none">979</span>
              <span className="block text-[9px] font-bold uppercase tracking-widest text-warm-sand/70 mt-1">km² of Wilderness</span>
            </div>

            {/* Decorative olive block behind images */}
            <div className="absolute top-8 left-8 w-[55%] h-[60%] rounded-[2.5rem] bg-warm-sand/60 z-10"></div>
          </div>

        </div>

        {/* Bottom Full-Width Proof Strip */}
        <div className="w-full rounded-[2rem] overflow-hidden relative h-64 md:h-80 shadow-2xl group">
          <Image
            src="/images/yala-national-park/yala-national-park-sri-lanka-image7.jpg"
            alt="Yala National Park Landscape"
            fill
            sizes="100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-[15s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal/80 via-deep-charcoal/30 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div className="max-w-xl">
              <span className="text-sunset-gold font-bold text-xs tracking-[0.3em] uppercase block mb-3">Sri Lanka's Crown Jewel</span>
              <p className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                A UNESCO World Heritage Site & global leopard sanctuary — all in one extraordinary destination.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
