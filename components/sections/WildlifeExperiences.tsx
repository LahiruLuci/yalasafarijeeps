"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    id: "yala",
    title: "Yala Safari",
    subtitle: "The Leopard Capital",
    description: "Explore one of the world's most renowned leopard habitats along with majestic elephants and sloth bears.",
    detailedDescription: "Yala National Park is Sri Lanka's most famous wildlife destination. Spanning over 978 square kilometers, it is divided into five blocks, with Block 1 being the most popular for leopard sightings. The park's varied ecosystems, ranging from moist monsoon forests to freshwater and marine wetlands, support a rich diversity of life including 215 bird species and 44 mammal species.",
    highlights: ["Renowned Leopard Population", "Elephant Gatherings", "Sloth Bear Sightings", "Coastal Views"],
    bestTime: "February to June (Dry Season)",
    image: "/images/yala-safari-page-image.jpg",
    span: "col-span-1 md:col-span-2 md:row-span-2",
  },
  {
    id: "udawalawe",
    title: "Udawalawe Safari",
    subtitle: "Elephant Sanctuary",
    description: "Witness hundreds of elephants roaming freely in their expansive natural grassland habitat.",
    detailedDescription: "Udawalawe National Park is renowned as one of the best places in Asia to see wild elephants in their natural environment. Established as a sanctuary for displaced wildlife, the park features a massive reservoir and open grasslands that make spotting herds remarkably easy. It is also home to the Elephant Transit Home, which rehabilitates orphaned calves.",
    highlights: ["Elephant Herds", "Water Buffaloes", "Endemic Birds", "Open Grasslands"],
    bestTime: "All year round; peak sightings May to September",
    image: "/images/udawalawe-national-park-img1.jpg",
    span: "col-span-1",
  },
  {
    id: "bundala",
    title: "Bundala Safari",
    subtitle: "Birdwatcher's Paradise",
    description: "Discover a UNESCO biosphere reserve teeming with spectacular migratory birds and crocodiles.",
    detailedDescription: "Bundala National Park is a critical wintering ground for migratory waterbirds. This unique RAMSAR wetland site hosts over 197 species of birds, including massive flocks of Greater Flamingos. The complex maze of lagoons and scrublands also provides habitat for elephants, crocodiles, and various species of turtles that visit the coastline.",
    highlights: ["Greater Flamingos", "Migratory Waterbirds", "Marsh Crocodiles", "Coastal Lagoons"],
    bestTime: "September to March (Migratory Season)",
    image: "/images/bundala-national-park-1.jpg",
    span: "col-span-1",
  },
  {
    id: "lunugamwehera",
    title: "Lunugamwehera",
    subtitle: "Untamed Corridor",
    description: "An essential elephant corridor between Yala and Udawalawe offering isolated wilderness views.",
    detailedDescription: "Acting as a vital link between Yala and Udawalawe, Lunugamwehera National Park serves as an essential corridor for seasonal elephant migrations. Its rugged terrain and central reservoir offer a more secluded and off-the-beaten-path safari experience, perfect for travelers seeking solitude in the wild away from the crowds.",
    highlights: ["Elephant Corridor", "Reservoir Views", "Rare Birds of Prey", "Isolated Wilderness"],
    bestTime: "January to May",
    image: "/images/lunugamwehera-park-1.jpg",
    span: "col-span-1",
  },
  {
    id: "whale-watching",
    title: "Whale Watching",
    subtitle: "Marine Giants",
    description: "Set sail to spot magnificent blue whales and acrobatic dolphins off the southern coast.",
    detailedDescription: "The deep waters off Sri Lanka's southern coast are among the few places in the world where Blue Whales can be spotted consistently. These marine giants are often joined by Sperm Whales, Spinner Dolphins, and Green Turtles. Our tours prioritize ethical observation distances to ensure the safety and comfort of these magnificent creatures.",
    highlights: ["Blue Whale Spotting", "Sperm Whales", "Acrobatic Dolphins", "Deep Sea Navigation"],
    bestTime: "November to April (Southern Coast)",
    image: "/images/whale-watching-sri-lanka-1.jpg",
    span: "col-span-1",
  },
];

export default function WildlifeExperiences() {
  const [selectedExp, setSelectedExp] = useState<typeof experiences[0] | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedExp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedExp]);

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
            <button
              key={exp.id}
              onClick={() => setSelectedExp(exp)}
              className={`group relative rounded-2xl overflow-hidden block text-left cursor-pointer appearance-none border-none ${exp.span}`}
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
                    View Experience
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
            </button>
          ))}
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedExp && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedExp(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] cursor-pointer"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed inset-4 md:inset-10 lg:inset-x-[15%] lg:inset-y-[10%] bg-deep-charcoal rounded-[2rem] md:rounded-[3rem] z-[101] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10"
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative h-[300px] md:h-full">
                  <Image
                    src={selectedExp.image}
                    alt={selectedExp.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-deep-charcoal via-transparent to-transparent opacity-60" />

                  {/* Close Button (Mobile Only Top Right) */}
                  <button
                    onClick={() => setSelectedExp(null)}
                    className="absolute top-6 right-6 md:hidden w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center border border-white/20"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 overflow-y-auto flex flex-col">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sunset-gold font-bold text-xs tracking-[0.4em] uppercase">
                        {selectedExp.subtitle}
                      </span>
                      {/* Close Button (Desktop) */}
                      <button
                        onClick={() => setSelectedExp(null)}
                        className="hidden md:flex w-10 h-10 rounded-full bg-white/5 text-soft-beige hover:bg-sunset-gold hover:text-deep-charcoal items-center justify-center transition-colors cursor-pointer"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-soft-beige tracking-tighter italic">
                      {selectedExp.title}
                    </h2>
                  </div>

                  {/* Body */}
                  <div className="flex-1 space-y-8">
                    <p className="text-warm-sand/80 text-lg leading-relaxed font-medium">
                      {selectedExp.detailedDescription}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sunset-gold font-black text-[10px] tracking-widest uppercase mb-4">Wildlife Highlights</h4>
                        <ul className="space-y-2">
                          {selectedExp.highlights.map((h, i) => (
                            <li key={i} className="flex items-center gap-3 text-soft-beige text-sm font-bold">
                              <div className="w-1.5 h-1.5 rounded-full bg-sunset-gold" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sunset-gold font-black text-[10px] tracking-widest uppercase mb-4">Best Time to Visit</h4>
                        <p className="text-soft-beige text-sm font-bold leading-relaxed">
                          {selectedExp.bestTime}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/61416482262"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-8 py-4 bg-sunset-gold text-deep-charcoal font-black text-[10px] tracking-widest uppercase rounded-xl flex items-center justify-center gap-3 hover:bg-white transition-colors"
                    >
                      Inquire via WhatsApp
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.668.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
