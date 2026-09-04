"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
   {
      title: "Luxury Lodges",
      subtitle: "PREMIUM COMFORT",
      image: "/images/luxury-lodges.webp",
      description: "Comfortable premium properties for travellers seeking privacy, resort facilities and high-end accommodation."
   },
   {
      title: "Safari Camps",
      subtitle: "NATURE IMMERSION",
      image: "/images/safari-tents.webp",
      description: "Nature-focused accommodation for travellers who want a more immersive wildlife atmosphere."
   },
   {
      title: "Resorts & Boutique",
      subtitle: "MODERN CONVENIENCE",
      image: "/images/boutique-resorts.webp",
      description: "Comfortable options around Yala, Kirinda and Tissamaharama offering great amenities for safari travelers."
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
                     Choose Your Stay Style
                  </span>
                  <h2 className="text-5xl md:text-7xl font-extrabold text-soft-beige leading-none tracking-tighter">
                     Explore Stay <br />
                     <span className="italic text-sunset-gold font-light font-serif">Categories</span>
                  </h2>
               </div>
               <div className="max-w-sm">
                  <p className="text-warm-sand/40 text-lg font-medium leading-relaxed italic">
                     Whether you crave the luxury of a premium lodge or the thrill of a safari tent, we can help you figure out the best fit.
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

                           <Link href="#curated-stays" className="flex items-center gap-4 text-soft-beige group/btn">
                              <span className="font-black text-xs tracking-widest uppercase">View Recommendations</span>
                              <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center transition-all group-hover/btn:bg-soft-beige group-hover/btn:text-deep-charcoal group-hover/btn:scale-110">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                              </div>
                           </Link>
                        </div>

                     </div>

                  </div>
               ))}
            </div>

         </div>

      </section>
   );
}
