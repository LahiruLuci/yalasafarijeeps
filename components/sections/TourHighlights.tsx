"use client";

import Image from "next/image";

const highlights = [
  {
    title: "Handpicked Stays",
    description: "We select only the most immersive hill country estates and luxury safari lodges that bring you closer to nature.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: "Expert Naturalists",
    description: "Our guides are more than drivers; they are passionate naturalists who know every bird call and track in the jungle.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
      </svg>
    ),
  },
  {
    title: "Privately Curated",
    description: "Every journey is private for your group. No overcrowded buses—just you, the wild, and your dedicated team.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Ethical Wildlife",
    description: "We follow strict ethical guidelines in Yala to ensure our presence never disturbs the animals we love to observe.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

export default function TourHighlights() {
  return (
    <section className="bg-deep-charcoal py-24 md:py-32 relative overflow-hidden px-4 md:px-8 border-t border-white/5">
      
      {/* Decorative Light Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sunset-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-olive-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Content Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-sunset-gold font-bold text-sm tracking-[0.4em] uppercase mb-4 block">The Expedition Edge</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8">
              Why Expedition With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-gold to-warm-sand">Yala Safari Jeeps?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {highlights.map((item, i) => (
                <div key={i} className="flex flex-col gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sunset-gold group-hover:bg-sunset-gold group-hover:text-deep-charcoal transition-all duration-300 transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-warm-sand/50 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Feature Image Panel */}
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src="/images/yala-national-park/yala-national-park-sri-lanka-image8.jpg"
              alt="Experience Sri Lanka"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Dark overlay with pullquote */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/20 to-transparent flex flex-col justify-end p-10 md:p-14">
              <div className="relative pl-8 border-l-2 border-sunset-gold">
                <p className="text-white text-xl md:text-2xl font-medium italic leading-relaxed">
                  "Our mission is to show you Sri Lanka beyond the brochures — to take you into the silence of the morning and the heart of the wild."
                </p>
                <span className="block mt-4 text-sunset-gold font-bold text-sm tracking-widest uppercase">— Expedition Team</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
