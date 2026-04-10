"use client";

import Image from "next/image";

const stays = [
  {
    name: "Chena Huts",
    type: "Luxury Safari Lodge",
    location: "Yala National Park",
    image: "/images/chena-huts/chena-huts-home-1.jpg",
    description: "Located where the ocean meets the jungle, offering private pool pavilions.",
    tags: ["Private Pool", "All-Inclusive", "Beachfront"],
    color: "bg-olive-green"
  },
  {
    name: "Cinnamon Wild",
    type: "Rustic Wilderness Lodge",
    location: "Palatupana",
    image: "/images/cinnamon-wild/cinnamon-wild-home-1.jpg",
    description: "A rustic retreat offering an authentic bush experience near the park boundary.",
    tags: ["Pool", "Wilderness View", "Dining"],
    color: "bg-safari-brown"
  },
  {
    name: "Jetwing Yala",
    type: "Eco-Luxury Resort",
    location: "Yala Coastal Belt",
    image: "/images/jetwin-yala/jetwin-yala.jpg",
    description: "Experience the thrill of the wild with one of the best coastal views in Sri Lanka.",
    tags: ["Ocean View", "Spa", "Sustainability"],
    color: "bg-deep-charcoal"
  },
  {
    name: "Wild Lotus Yala",
    type: "Boutique Beach Resort",
    location: "Yala Coast",
    image: "/images/wild-lotus-yala/wild-lotus-yala.jpg",
    description: "A blend of rustic charm and chic design for the modern explorer.",
    tags: ["Boutique", "Secluded", "Beach"],
    color: "bg-sunset-gold"
  },
  {
    name: "Leopard Nest",
    type: "Premium Glamping",
    location: "Yala Boundary",
    image: "/images/leopard-nest/leopard-nest.jpg",
    description: "High-end tented camp with breathtaking views of the surrounding wilderness.",
    tags: ["Glamping", "Night Safaris", "Cozy"],
    color: "bg-olive-green"
  },
  {
    name: "Rock Wild Yala",
    type: "Boutique Escape",
    location: "Kirinda",
    image: "/images/rock-wild-yala/rock-wild-yala-home-1.jpg",
    description: "Nestled amongst massive boulders, offering a unique rock-view experience.",
    tags: ["Unique", "Quiet", "Modern"],
    color: "bg-safari-brown"
  }
];

export default function StayList() {
  return (
    <section className="bg-warm-sand py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-sunset-gold font-bold text-sm tracking-[0.4em] uppercase mb-6 block">
               Curated Collection
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-deep-charcoal leading-none tracking-tight">
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
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
                 <button className="w-full flex items-center justify-between bg-deep-charcoal group-hover:bg-sunset-gold text-soft-beige font-bold py-5 px-8 rounded-full transition-all group-hover:scale-[1.02] transform">
                    VIEW DETAILS
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
