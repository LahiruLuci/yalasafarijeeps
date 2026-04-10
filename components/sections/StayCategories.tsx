"use client";

import Image from "next/image";

const categories = [
  {
    title: "Luxury Lodges",
    subtitle: "UNCOMPROMISED OPULENCE",
    image: "/images/chena-huts/chena-hut-yala-national-park-top.jpg",
    description: "Architectural marvels nestled in the heart of the national park, where every detail is crafted for your absolute comfort.",
    features: ["Private Plunge Pools", "Personalized Butler Service", "All-Inclusive Dining"]
  },
  {
    title: "Safari Tents",
    subtitle: "AUTHENTIC GLAMPING",
    image: "/images/leopard-nest/leopard-nest.jpg",
    description: "Experience the true essence of the wild from the safety of our custom-designed, luxury tented camps situated at the park boundaries.",
    features: ["Starlit Sleepouts", "Campfire Gastronomy", "Proximity to the Wild"]
  },
  {
    title: "Boutique Resorts",
    subtitle: "MODERN WILDERNESS",
    image: "/images/rock-wild-yala/rock-wild-yala-home-1.jpg",
    description: "A fusion of contemporary design and natural textures, these resorts offer a secluded escape with a focus on relaxation and tranquility.",
    features: ["Thematic Designs", "Wellness & Spa", "Curated Experiences"]
  }
];

export default function StayCategories() {
  return (
    <section className="bg-deep-charcoal py-32 md:py-52 relative overflow-hidden">
      
      {/* ── Background Typography ── */}
      <div className="absolute top-0 right-0 text-[30vw] font-black text-white/5 select-none pointer-events-none leading-none -mr-20">
         STAY
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* ── Header Row ── */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-24 gap-8">
           <div className="max-w-3xl">
              <span className="text-sunset-gold font-bold text-sm tracking-[0.6em] uppercase mb-8 block">
                 Choose Your Style
              </span>
              <h2 className="text-6xl md:text-8xl font-extrabold text-soft-beige leading-none tracking-tighter">
                 Explore Stay <br />
                 <span className="italic text-sunset-gold font-light font-serif">Categories</span>
              </h2>
           </div>
           <div className="max-w-sm">
              <p className="text-warm-sand/40 text-lg font-medium leading-relaxed italic">
                 Whether you crave the luxury of a private pool or the thrill of a designer tent, we have the perfect stay for your safari.
              </p>
           </div>
        </div>

        {/* ── Categories Scroll-like Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-y border-white/10 group/grid">
           {categories.map((cat, idx) => (
             <div 
               key={idx} 
               className="group relative h-[600px] border-x border-white/5 overflow-hidden transition-all duration-700 hover:lg:col-span-1.5"
             >
               {/* Background Image */}
               <Image
                 src={cat.image}
                 alt={cat.title}
                 fill
                 className="object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
               />
               
               {/* Fixed Dark Gradient Overlay for Contrast (Persistent) */}
               <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/60 to-transparent opacity-100 transition-opacity duration-700" />
               
               {/* Hover Overlay Lighten (Optional) */}
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

               {/* Content - Static View */}
               <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end z-10">
                  
                  {/* Category Indicator */}
                  <div className="mb-6 flex items-center justify-between">
                     <span className="text-[11px] text-sunset-gold font-black tracking-[0.5em] uppercase drop-shadow-md">
                        Category 0{idx + 1}
                     </span>
                     <div className="w-12 h-px bg-sunset-gold/50" />
                  </div>

                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-soft-beige mb-6 tracking-tight group-hover:text-sunset-gold transition-colors duration-500 drop-shadow-2xl">
                     {cat.title}
                  </h3>
                  
                  {/* Expandable Content on Hover */}
                  <div className="h-0 opacity-0 transform translate-y-12 group-hover:h-auto group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 overflow-hidden">
                     <p className="text-warm-sand font-bold text-sm leading-relaxed mb-8 max-w-sm drop-shadow-md">
                        {cat.description}
                     </p>
                     
                     <div className="space-y-4 mb-10">
                        {cat.features.map((feature, fIdx) => (
                           <div key={fIdx} className="flex items-center gap-3 text-[11px] text-soft-beige font-black uppercase tracking-widest">
                              <div className="w-1.5 h-1.5 rounded-full bg-sunset-gold shadow-[0_0_8px_rgba(208,122,63,0.8)]" />
                              {feature}
                           </div>
                        ))}
                     </div>

                     <button className="flex items-center gap-4 text-soft-beige group/btn">
                        <span className="font-black text-xs tracking-widest uppercase">DISCOVER NOW</span>
                        <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center transition-all group-hover/btn:bg-soft-beige group-hover/btn:text-deep-charcoal group-hover/btn:scale-110">
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                     </button>
                  </div>

               </div>

             </div>
           ))}
        </div>

      </div>

    </section>
  );
}
