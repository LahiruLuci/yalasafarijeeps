"use client";

import Image from "next/image";

import Link from "next/link";

const stays = [
  {
    name: "Uga Chena Huts Yala",
    type: "Luxury Wilderness Stay",
    location: "Palatupana, Yala",
    image: "/images/chena-huts/chena-huts-home-1.jpg",
    description: "A boutique luxury property where the ocean meets the jungle, offering unparalleled private living near Yala National Park.",
    tags: ["Private Pool", "Luxury", "Spa"],
    color: "bg-olive-green",
    href: "/stay/uga-chena-huts-yala"
  },
  {
    name: "Cinnamon Wild Yala",
    type: "Wildlife Resort",
    location: "Yala Area",
    image: "/images/cinnamon-wild/cinnamon-wild-home-1.jpg",
    description: "A renowned wildlife resort offering seamless immersion into the natural wilderness surrounding Yala.",
    tags: ["Wildlife View", "Resort", "Nature"],
    color: "bg-safari-brown",
    href: "/stay/cinnamon-wild-yala"
  },
  {
    name: "Jetwing Yala",
    type: "Coastal Safari Resort",
    location: "Palatupana, Kirinda",
    image: "/images/jetwin-yala/jetwin-yala.jpg",
    description: "A full-service resort set on a sprawling coastal wilderness property near Yala National Park.",
    tags: ["Ocean View", "Spa", "Beach Access"],
    color: "bg-deep-charcoal",
    href: "/stay/jetwing-yala"
  },
  {
    name: "Leopard Trails Yala",
    type: "Tented Safari Experience",
    location: "Yala Area",
    image: "/images/cinnamon-wild/cinnamon-wild-hotel-yala-2.jpg", // Using placeholder image from existing assets
    description: "An immersive tented safari camp blending classic explorer aesthetics with modern comforts.",
    tags: ["Glamping", "Authentic", "Nature"],
    color: "bg-sunset-gold",
    href: "/stay/leopard-trails-yala"
  }
];

export default function StayList() {
  return (
    <section id="curated-stays" className="bg-warm-sand py-32 relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-sunset-gold font-bold text-sm tracking-[0.4em] uppercase mb-6 block">
              Curated Collection
            </span>
            <h2 className="text-4xl md:text-7xl font-extrabold text-deep-charcoal leading-[1.1] tracking-tight">
              Our Recommended <br />
              <span className="italic text-olive-green font-light font-serif">Sanctuaries</span>
            </h2>
          </div>
          <p className="max-w-md text-safari-brown/60 font-medium pb-2 border-b border-sunset-gold/20">
            Hand-selected stays that offer the perfect balance of comfort after a long day in the wild.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stays.map((stay, idx) => (
            <div
              key={idx}
              className="group bg-white/40 backdrop-blur-sm rounded-[3rem] p-4 border border-white/40 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(43,42,34,0.1)] hover:-translate-y-4"
            >
              {/* Image Container */}
              <div className="relative h-[320px] rounded-[2.5rem] overflow-hidden mb-8">
                <Image
                  src={stay.image}
                  alt={stay.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sunset-gold animate-pulse" />
                  <span className="text-deep-charcoal font-black text-[10px] uppercase tracking-widest">
                    {stay.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-6">
                <div className="flex items-center gap-2 text-sunset-gold text-[10px] uppercase font-bold tracking-[0.3em] mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  {stay.location}
                </div>
                <h3 className="text-3xl font-extrabold text-deep-charcoal mb-4 group-hover:text-olive-green transition-colors">
                  {stay.name}
                </h3>
                <p className="text-safari-brown/60 text-sm leading-relaxed mb-8">
                  {stay.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {stay.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-olive-green/5 text-olive-green text-[10px] font-bold py-1.5 px-3 rounded-full border border-olive-green/10">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={stay.href}
                  className="w-full flex items-center justify-between bg-deep-charcoal group-hover:bg-sunset-gold text-soft-beige font-bold py-5 px-8 rounded-full transition-all group-hover:scale-[1.02] transform"
                >
                  VIEW DETAILS
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
