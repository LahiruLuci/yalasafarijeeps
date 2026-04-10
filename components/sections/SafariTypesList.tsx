"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const safariTypes = [
  {
    id: "morning",
    tag: "Most Popular",
    label: "Half Day",
    title: "Morning Safari",
    subtitle: "Sunrise Expedition",
    time: "5:30 AM – 9:30 AM",
    duration: "4 Hours",
    image: "/images/morning-safari-yala-national-park.jpg",
    href: "/safari/morning",
    accentColor: "bg-[#D07A3F]",
    description:
      "Begin your journey before sunrise while stars fade over the horizon. The morning hours are the prime window for leopard sightings as they stalk the golden scrubland. You'll also witness a jaw-dropping Yala dawn that no photograph can ever fully capture.",
    included: ["Hotel pickup & drop", "Expert tracker", "Premium 4x4 Jeep", "Bottled water", "Park entry fees"],
    bgGradient: "from-[#D07A3F]/80",
  },
  {
    id: "evening",
    tag: "Golden Hour",
    label: "Half Day",
    title: "Evening Safari",
    subtitle: "Twilight Encounter",
    time: "1:30 PM – 6:00 PM",
    duration: "4.5 Hours",
    image: "/images/evening-safari-yala-national-park.jpg",
    href: "/safari/evening",
    accentColor: "bg-olive-green",
    description:
      "As the afternoon sun softens, prey animals emerge from the shade and predators ignite their evening hunt. The golden hour light transforms Yala into a palette of amber and ochre, creating a dramatic cinematic experience unlike any morning drive.",
    included: ["Hotel pickup & drop", "Expert tracker", "Premium 4x4 Jeep", "Bottled water", "Park entry fees"],
    bgGradient: "from-olive-green/80",
  },
  {
    id: "full-day",
    tag: "Best Value",
    label: "Full Day",
    title: "Full Day Safari",
    subtitle: "Complete Wilderness",
    time: "6:00 AM – 6:00 PM",
    duration: "12 Hours",
    image: "/images/full-day-safari.jpg",
    href: "/safari/full-day",
    accentColor: "bg-safari-brown",
    description:
      "The definitive Yala experience. Spend a full 12 hours inside the park — from the dewy-fresh morning chorus through the midday heat when elephants bathe, to the golden dusk when sloth bears and leopards take center stage. Includes a wilderness lunch picnic.",
    included: ["Hotel pickup & drop", "Expert tracker", "Premium 4x4 Jeep", "Wilderness picnic lunch", "Bottled water", "Park entry fees"],
    bgGradient: "from-safari-brown/80",
  },
];

export default function SafariTypesList() {
  const [activeId, setActiveId] = useState<string>("morning");
  const active = safariTypes.find((s) => s.id === activeId)!;

  return (
    <section className="bg-deep-charcoal py-24 md:py-32 relative overflow-hidden px-4 md:px-8">

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sunset-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <span className="text-sunset-gold font-bold text-sm tracking-[0.4em] uppercase mb-4 block">
              Choose Your Adventure
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
              Pick Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-gold to-warm-sand">
                Safari
              </span>
            </h2>
          </div>
          <p className="text-lg text-warm-sand/60 font-medium max-w-sm md:text-right">
            Three distinct time-windows. Three unique jungle moods. One extraordinary destination.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          {safariTypes.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`flex-1 group text-left px-6 py-5 rounded-2xl border transition-all duration-500 cursor-pointer ${
                activeId === s.id
                  ? "bg-white/10 border-sunset-gold shadow-[0_0_30px_rgba(208,122,63,0.2)]"
                  : "bg-white/5 border-white/10 hover:border-white/30"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${
                  activeId === s.id ? "bg-sunset-gold text-deep-charcoal" : "bg-white/10 text-warm-sand/60"
                }`}>{s.tag}</span>
                <span className={`text-xs font-bold uppercase tracking-widest ${activeId === s.id ? "text-sunset-gold" : "text-warm-sand/40"}`}>{s.label}</span>
              </div>
              <h3 className={`text-xl font-extrabold transition-colors ${activeId === s.id ? "text-white" : "text-warm-sand/60"}`}>
                {s.title}
              </h3>
              <p className={`text-xs font-bold uppercase tracking-wider mt-1 mb-4 ${activeId === s.id ? "text-sunset-gold/80" : "text-warm-sand/30"}`}>{s.time}</p>
              {/* More Details micro-link */}
              <div className="flex items-center gap-2 group/link">
                <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
                  activeId === s.id ? "text-sunset-gold" : "text-warm-sand/30 group-hover/link:text-warm-sand/60"
                }`}>View Details</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                  className={`transition-all duration-300 group-hover/link:translate-x-1 ${
                    activeId === s.id ? "text-sunset-gold" : "text-warm-sand/30"
                  }`}>
                  <path d="M5 12H19M19 12L12 5M19 12L12 19"></path>
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Active Safari Detail Panel */}
        <div className="w-full rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[500px] border border-white/10">

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative h-72 lg:h-auto overflow-hidden group">
            <Image
              key={active.id}
              src={active.image}
              alt={active.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-all duration-1000 group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r ${active.bgGradient} via-transparent to-transparent opacity-80`} />
            
            {/* Duration Badge */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg">
              <span className="text-deep-charcoal font-black text-sm uppercase tracking-widest">{active.duration}</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 bg-[#1a1914] p-8 md:p-14 flex flex-col justify-center gap-8">
            
            <div>
              <span className="text-sunset-gold font-bold text-xs tracking-[0.35em] uppercase mb-3 block">{active.subtitle}</span>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{active.title}</h3>
              <p className="text-warm-sand/50 font-bold text-sm tracking-widest uppercase">{active.time}</p>
            </div>

            <p className="text-lg text-warm-sand/80 font-medium leading-relaxed border-l-2 border-sunset-gold/40 pl-6">
              {active.description}
            </p>

            {/* Inclusions */}
            <div>
              <span className="text-white font-black text-xs tracking-widest uppercase mb-4 block">What's Included</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {active.included.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-warm-sand/70 text-sm font-medium">
                    <div className="w-5 h-5 rounded-full bg-olive-green/30 border border-olive-green/50 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-olive-green">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex gap-4 flex-wrap">
              <Link
                href={active.href}
                className="inline-flex items-center gap-3 px-8 py-4 bg-sunset-gold text-deep-charcoal font-black text-sm tracking-widest uppercase rounded-full hover:shadow-[0_0_40px_rgba(208,122,63,0.5)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Book Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19"></path>
                </svg>
              </Link>
              <Link
                href={active.href}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white/20 hover:border-sunset-gold/50 transition-all duration-300 group/detail"
              >
                More Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/detail:translate-x-1">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19"></path>
                </svg>
              </Link>
              <a
                href="https://wa.me/94722112222"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/10 text-warm-sand/60 font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white/5 transition-all duration-300"
              >
                Ask via WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
