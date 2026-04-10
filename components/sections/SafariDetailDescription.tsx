"use client";

import Image from "next/image";
import Link from "next/link";
import { SafariPackage } from "@/lib/safariData";

const timelineSteps = [
  {
    step: "01",
    title: "Hotel Pickup",
    desc: "Our driver meets you at your accommodation well before the park opens.",
  },
  {
    step: "02",
    title: "Park Gate Entry",
    desc: "We secure priority entry with pre-arranged permits and trackers briefed on recent activity.",
  },
  {
    step: "03",
    title: "Active Wildlife Zones",
    desc: "We navigate deep into exclusive corridors beyond the reach of typical tourist jeeps.",
  },
  {
    step: "04",
    title: "Return & Drop",
    desc: "We exit the park gently as the light changes and return you to your hotel refreshed.",
  },
];

export default function SafariDetailDescription({ safari }: { safari: SafariPackage }) {
  return (
    <section className="bg-white py-24 md:py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* ── PART 1: The Narrative Block ── */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-28 md:mb-40 items-start">

          {/* Left: Long-form Text */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[2px] bg-sunset-gold"></span>
              <span className="text-sunset-gold font-black text-xs tracking-[0.4em] uppercase">The Experience</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-deep-charcoal leading-[1.1] mb-8 tracking-tight">
              What Makes the <br/>
              <span className="italic text-olive-green">{safari.title}</span> <br/>
              Extraordinary?
            </h2>

            {/* Giant pullquote */}
            <div className="relative mb-8 pl-8 border-l-4 border-sunset-gold">
              <div className="absolute -top-2 -left-1 text-[5rem] font-black text-sunset-gold/15 leading-none select-none">"</div>
              <p className="text-xl text-safari-brown/90 font-medium leading-relaxed relative z-10 italic">
                {safari.description}
              </p>
            </div>

            <p className="text-lg text-safari-brown/70 leading-relaxed mb-8">
              {safari.longDescription}
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex flex-col items-center px-7 py-4 rounded-2xl bg-warm-sand/60 border border-warm-sand">
                <span className="text-3xl font-black text-deep-charcoal">{safari.duration}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-safari-brown/60 mt-1">Duration</span>
              </div>
              <div className="flex flex-col items-center px-7 py-4 rounded-2xl bg-warm-sand/60 border border-warm-sand">
                <span className="text-3xl font-black text-deep-charcoal">4x4</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-safari-brown/60 mt-1">Premium Jeep</span>
              </div>
              <div className="flex flex-col items-center px-7 py-4 rounded-2xl bg-warm-sand/60 border border-warm-sand">
                <span className="text-3xl font-black text-deep-charcoal">24/7</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-safari-brown/60 mt-1">Support</span>
              </div>
            </div>
          </div>

          {/* Right: Staggered Image Collage */}
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
            {/* Big photo */}
            <div className="absolute top-0 right-0 w-[72%] h-[62%] rounded-[2.5rem] overflow-hidden shadow-2xl z-20 border-8 border-white">
              <Image
                src={safari.image}
                alt={safari.title}
                fill
                sizes="(max-width: 1024px) 80vw, 38vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Small stacked photo */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[50%] rounded-[2rem] overflow-hidden shadow-xl z-30 border-8 border-white">
              <Image
                src={safari.heroImage}
                alt={`${safari.title} experience`}
                fill
                sizes="30vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative warm sand block */}
            <div className="absolute top-6 left-6 w-[55%] h-[58%] rounded-[2.5rem] bg-warm-sand/70 z-10" />
            {/* Floating time badge */}
            <div className="absolute bottom-[42%] right-[24%] z-40 bg-deep-charcoal text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/10 text-center">
              <span className="block text-xs font-black uppercase tracking-widest text-sunset-gold mb-1">Time</span>
              <span className="block text-base font-extrabold text-white whitespace-nowrap">{safari.time}</span>
            </div>
          </div>
        </div>

        {/* ── PART 2: Highlights Grid ── */}
        <div className="mb-28 md:mb-40">
          <div className="text-center mb-14">
            <span className="text-sunset-gold font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Why It Stands Apart</span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-deep-charcoal leading-tight">Key Highlights</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {safari.highlights.map((highlight, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl bg-warm-sand/30 border border-warm-sand hover:border-sunset-gold hover:shadow-xl hover:shadow-sunset-gold/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-olive-green flex items-center justify-center text-white font-extrabold text-lg mb-6 group-hover:bg-sunset-gold transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-deep-charcoal font-bold text-lg leading-snug">{highlight}</p>
                <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full border border-sunset-gold/30 flex items-center justify-center text-sunset-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PART 3: Journey Timeline ── */}
        <div className="mb-28 md:mb-40 relative">
          {/* Background strip */}
          <div className="absolute top-24 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sunset-gold/20 to-transparent hidden lg:block" />

          <div className="text-center mb-16">
            <span className="text-sunset-gold font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Step by Step</span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-deep-charcoal leading-tight">How the Day Unfolds</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {timelineSteps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-start gap-5">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-deep-charcoal flex items-center justify-center shadow-xl">
                    <span className="text-sunset-gold font-extrabold text-base">{step.step}</span>
                  </div>
                  {/* Connecting horizontal line on lg */}
                  {i < timelineSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-14 w-full h-[2px] bg-gradient-to-r from-sunset-gold/30 to-transparent -z-10" />
                  )}
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-deep-charcoal mb-2">{step.title}</h4>
                  <p className="text-safari-brown/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PART 4: Inclusions ── */}
        <div className="rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-warm-sand">
          {/* Left dark panel */}
          <div className="w-full lg:w-5/12 bg-deep-charcoal p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-sunset-gold/10 blur-[80px] pointer-events-none" />
            <span className="text-sunset-gold font-bold text-xs tracking-[0.4em] uppercase mb-6 block">Full Breakdown</span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">What's <br/> Included</h3>
            <p className="text-warm-sand/60 font-medium leading-relaxed text-base">
              Every detail has been arranged so you can be fully present in the wild — not worrying about logistics.
            </p>
          </div>
          {/* Right inclusions panel */}
          <div className="w-full lg:w-7/12 bg-warm-sand/20 p-10 md:p-16 flex items-center">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 w-full">
              {safari.included.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-olive-green flex-shrink-0 flex items-center justify-center shadow">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-deep-charcoal font-bold text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── CTA Strip ── */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href="/booking"
            className="inline-flex items-center gap-3 px-10 py-5 bg-sunset-gold text-deep-charcoal font-black text-sm tracking-widest uppercase rounded-full shadow-xl hover:shadow-[0_0_50px_rgba(208,122,63,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Book This Safari
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" />
            </svg>
          </Link>
          <Link
            href="/safari"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-deep-charcoal/20 text-deep-charcoal font-bold text-sm tracking-widest uppercase rounded-full hover:border-sunset-gold hover:text-sunset-gold transition-all duration-300"
          >
            View All Packages
          </Link>
        </div>

      </div>
    </section>
  );
}
