"use client";

import Image from "next/image";
import Link from "next/link";

const accommodations = [
  {
    id: "chena-huts",
    name: "Chena Huts by Uga",
    type: "Luxury Resort",
    image: "/images/chena-huts/chena-huts-home-1.jpg",
    stars: 5,
    description: "Where the untamed jungle meets the rolling surf. Private pool pavilions nestled amongst the coastal scrub.",
    href: "/stay/chena-huts",
  },
  {
    id: "cinnamon-wild",
    name: "Cinnamon Wild Yala",
    type: "Premium Lodge",
    image: "/images/cinnamon-wild/cinnamon-wild-home-1.jpg",
    stars: 5,
    description: "Rustic luxury chalets blending seamlessly into the jungle, offering world-class comfort with wilderness at your doorstep.",
    href: "/stay/cinnamon-wild",
  },
  {
    id: "rock-wild",
    name: "Rock Wild Yala",
    type: "Boutique Villa",
    image: "/images/rock-wild-yala/rock-wild-yala-home-1.jpg",
    stars: 4,
    description: "An intimate and serene escape offering personalized service, authentic cuisine, and a deeply localized safari experience.",
    href: "/stay/rock-wild",
  },
];

export default function StaySection() {
  return (
    <section className="bg-warm-sand/20 py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-sunset-gold font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
              Discover Comfort Amidst Nature's Majesty
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-deep-charcoal mb-6 leading-tight">
              Curated Places to Stay
            </h2>
            <p className="text-lg text-safari-brown/80 font-medium">
              After an exhilarating day of wildlife exploration, indulge in relaxation and comfort at our carefully selected accommodations. Experience the perfect blend of modern luxury and rustic charm.
            </p>
          </div>
          <div className="hidden md:block">
            <Link 
              href="/stay"
              className="inline-flex items-center gap-2 pb-2 border-b-2 border-sunset-gold text-deep-charcoal font-bold text-sm tracking-widest uppercase hover:text-sunset-gold transition-colors"
            >
              View All Lodges
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Accommodation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {accommodations.map((lodging) => (
            <div 
              key={lodging.id}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-72 md:h-80 w-full overflow-hidden">
                <Image
                  src={lodging.image}
                  alt={lodging.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                
                {/* Overlay Tags */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur text-deep-charcoal text-xs font-black uppercase tracking-wider rounded-full shadow">
                    {lodging.type}
                  </span>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex text-sunset-gold mb-2">
                    {[...Array(lodging.stars)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    {lodging.name}
                  </h3>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <p className="text-safari-brown/80 leading-relaxed mb-8 flex-1">
                  {lodging.description}
                </p>
                <Link
                  href={lodging.href}
                  className="w-full py-4 text-center border font-bold text-sm tracking-widest uppercase rounded group-hover:bg-sunset-gold group-hover:text-white group-hover:border-sunset-gold transition-colors duration-300 text-deep-charcoal border-gray-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/stay"
            className="inline-flex items-center gap-2 pb-2 border-b-2 border-sunset-gold text-deep-charcoal font-bold text-sm tracking-widest uppercase"
          >
            View All Lodges
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
