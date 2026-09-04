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
    time: "5:30 AM – 10:30 AM",
    duration: "4-5 Hours",
    image: "/images/morning-safari-yala-national-park.jpg",
    href: "/safari/morning",
    accentColor: "bg-[#D07A3F]",
    description:
      "Begin your journey before sunrise while stars fade over the horizon. The morning hours offer excellent opportunities for wildlife viewing, with cooler temperatures increasing the chance for potential leopard sightings. You'll also witness a jaw-dropping Yala dawn that no photograph can ever fully capture.",
    included: ["Private 4x4 Safari Jeep", "Experienced Driver/Guide", "Local Pickup & Drop-off", "Bottled Water", "Park Entry Assistance"],
    bgGradient: "from-[#D07A3F]/80",
  },
  {
    id: "evening",
    tag: "Golden Hour",
    label: "Half Day",
    title: "Evening Safari",
    subtitle: "Twilight Encounter",
    time: "2:30 PM – 6:00 PM",
    duration: "3.5 Hours",
    image: "/images/new-images/evening-safari.webp",
    href: "/safari/evening",
    accentColor: "bg-olive-green",
    description:
      "As the afternoon sun softens, prey animals emerge from the shade and predators often become more active. The golden hour light transforms Yala into a palette of amber and ochre, creating a dramatic cinematic experience unlike any morning drive.",
    included: ["Private 4x4 Safari Jeep", "Experienced Driver/Guide", "Local Pickup & Drop-off", "Bottled Water", "Park Entry Assistance"],
    bgGradient: "from-olive-green/80",
  },
  {
    id: "tailor-made",
    tag: "Personalized",
    label: "Flexible",
    title: "Tailor-Made Yala Safari",
    subtitle: "Your Safari, Your Way",
    time: "Flexible Schedule",
    duration: "Customizable",
    image: "/images/full-day-safari.jpg",
    href: "/safari/tailor-made",
    accentColor: "bg-safari-brown",
    description:
      "Create a private safari experience centered around your interests and schedule. From wildlife viewing preferences to custom pickups, we'll design a personalized plan. (Subject to park regulations and operations).",
    included: ["Personalized Safari Planning", "Private 4x4 Safari Jeep", "Driver/Guide", "Flexible Pickup Arrangement", "Confirmed Inclusions Before Booking"],
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
              Pick Your <br />
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
              className={`flex-1 group text-left px-6 py-5 rounded-2xl border transition-all duration-500 cursor-pointer ${activeId === s.id
                ? "bg-white/10 border-sunset-gold shadow-[0_0_30px_rgba(208,122,63,0.2)]"
                : "bg-white/5 border-white/10 hover:border-white/30"
                }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${activeId === s.id ? "bg-sunset-gold text-deep-charcoal" : "bg-white/10 text-warm-sand/60"
                  }`}>{s.tag}</span>
                <span className={`text-xs font-bold uppercase tracking-widest ${activeId === s.id ? "text-sunset-gold" : "text-warm-sand/40"}`}>{s.label}</span>
              </div>
              <h3 className={`text-xl font-extrabold transition-colors ${activeId === s.id ? "text-white" : "text-warm-sand/60"}`}>
                {s.title}
              </h3>
              <p className={`text-xs font-bold uppercase tracking-wider mt-1 mb-4 ${activeId === s.id ? "text-sunset-gold/80" : "text-warm-sand/30"}`}>{s.time}</p>
              {/* More Details micro-link */}
              <div className="flex items-center gap-2 group/link">
                <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${activeId === s.id ? "text-sunset-gold" : "text-warm-sand/30 group-hover/link:text-warm-sand/60"
                  }`}>View Details</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                  className={`transition-all duration-300 group-hover/link:translate-x-1 ${activeId === s.id ? "text-sunset-gold" : "text-warm-sand/30"
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
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white/20 hover:border-sunset-gold/50 transition-all duration-300 group/detail"
              >
                More Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/detail:translate-x-1">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19"></path>
                </svg>
              </Link>
              <a
                href="https://wa.me/61416482262"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366]/5 border border-[#25D366]/20 text-[#25D366] font-bold text-sm tracking-widest uppercase rounded-full hover:bg-[#25D366]/10 hover:border-[#25D366]/40 transition-all duration-300 group/wa"
              >
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-20 group-hover/wa:animate-ping" />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.668.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                Ask via WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
