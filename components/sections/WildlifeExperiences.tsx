"use client";

import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    id: "yala",
    title: "Yala Safari",
    subtitle: "The Leopard Capital",
    description: "Explore the highest density of leopards in the world along with majestic elephants and sloth bears.",
    image: "/images/yala-safari-page-image.jpg",
    span: "col-span-1 md:col-span-2 md:row-span-2",
    href: "/safari/yala",
  },
  {
    id: "udawalawe",
    title: "Udawalawe Safari",
    subtitle: "Elephant Sanctuary",
    description: "Witness hundreds of elephants roaming freely in their expansive natural grassland habitat.",
    image: "/images/udawalawe-national-park-img1.jpg",
    span: "col-span-1",
    href: "/safari/udawalawe",
  },
  {
    id: "bundala",
    title: "Bundala Safari",
    subtitle: "Birdwatcher's Paradise",
    description: "Discover a UNESCO biosphere reserve teeming with spectacular migratory birds and crocodiles.",
    image: "/images/bundala-national-park-1.jpg",
    span: "col-span-1",
    href: "/safari/bundala",
  },
  {
    id: "lunugamwehera",
    title: "Lunugamwehera",
    subtitle: "Untamed Corridor",
    description: "An essential elephant corridor between Yala and Udawalawe offering isolated wilderness views.",
    image: "/images/lunugamwehera-park-1.jpg",
    span: "col-span-1",
    href: "/safari/lunugamwehera",
  },
  {
    id: "whale-watching",
    title: "Whale Watching",
    subtitle: "Marine Giants",
    description: "Set sail to spot magnificent blue whales and acrobatic dolphins off the southern coast.",
    image: "/images/whale-watching-sri-lanka-1.jpg",
    span: "col-span-1",
    href: "/safari/whale-watching",
  },
];

export default function WildlifeExperiences() {
  return (
    <section className="bg-deep-charcoal py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-sunset-gold font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
            Sri Lanka's Best Kept Secrets
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-soft-beige mb-6 leading-tight">
            Wildlife Experiences & Parks
          </h2>
          <p className="text-lg text-warm-sand/80 font-medium leading-relaxed">
            From the deep blue ocean to the dense jungles, embark on breathtaking journeys across Sri Lanka's most iconic wildlife preserves. 
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[280px] md:auto-rows-[300px] gap-4 md:gap-6">
          {experiences.map((exp) => (
            <Link 
              key={exp.id} 
              href={exp.href}
              className={`group relative rounded-2xl overflow-hidden block ${exp.span}`}
            >
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content Box */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <span className="text-sunset-gold font-bold text-xs tracking-[0.2em] uppercase mb-2 block transform transition-transform duration-500">
                  {exp.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-soft-beige mb-2 group-hover:text-sunset-gold transition-colors duration-300">
                  {exp.title}
                </h3>
                
                {/* Description - Slides up on hover */}
                <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <p className="text-warm-sand/90 text-sm leading-relaxed mt-2 mb-4">
                    {exp.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-soft-beige font-bold text-xs tracking-widest uppercase pb-1 border-b border-sunset-gold">
                    Discover More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Base Arrow indicator visible before hover */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="-rotate-45">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
