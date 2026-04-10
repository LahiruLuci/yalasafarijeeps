"use client";

import Image from "next/image";

const experiences = [
  {
    id: "01",
    title: "The Premium Fleet",
    subtitle: "Engineered for the Wild",
    description: "Your comfort and safety dictate the quality of your safari. We utilize heavily modified, elevated 4x4 vehicles equipped with luxury staggered seating, ensuring that every passenger has an unobstructed, 360-degree panoramic view of the jungle without ever feeling crowded.",
    image: "/images/features-pic.jpg",
    accent: "text-sunset-gold",
    border: "border-sunset-gold",
  },
  {
    id: "02",
    title: "Generational Trackers",
    subtitle: "Eyes of the Jungle",
    description: "A safari is only as good as its guide. Our team consists of elite, local naturalists who have spent their entire lives reading the subtle footprints, broken branches, and alarm calls of the wilderness. They don't just drive; they narrate the heartbeat of Yala.",
    image: "/images/slider/slide-3.jpg",
    accent: "text-olive-green",
    border: "border-olive-green",
  },
  {
    id: "03",
    title: "Unrestricted Encounters",
    subtitle: "Closer to the Magic",
    description: "Because of our deep familiarity with the park's sectors, we proactively divert from crowded tourist hotspots, guiding you into secluded corridors for intimate, uninterrupted encounters with leopards, elephants, and sloth bears in their natural habitat.",
    image: "/images/slider/slide-2.jpg",
    accent: "text-soft-beige",
    border: "border-soft-beige",
  }
];

export default function ExperienceOverview() {
  return (
    <section className="bg-deep-charcoal py-24 md:py-40 relative px-4 md:px-8">
      
      {/* Abstract Background Noise */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <span className="text-sunset-gold font-bold text-sm tracking-[0.4em] uppercase mb-6 block">
            Anatomy of an Expedition
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8">
            The Safari <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-soft-beige via-sunset-gold to-soft-beige">
              Experience
            </span>
          </h2>
          <p className="text-xl text-warm-sand/80 font-medium leading-relaxed">
            Every detail of our expeditions is meticulously engineered to remove the barriers between you and the raw, untamed wilderness.
          </p>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative flex flex-col gap-12 md:gap-24 lg:gap-0 pb-32">
          
          {experiences.map((exp, index) => {
            // Calculate a slight scale down for older stacked cards based on their index.
            // But since sticky just sits there, we don't need JS scaling, just rely on the pure overlap.
            
            return (
              <div 
                key={exp.id}
                className="lg:sticky w-full h-auto lg:h-[80vh] min-h-[500px] flex items-center justify-center pt-0 lg:pt-10"
                style={{ 
                  top: `8vh`, // Snap slightly higher to give more room
                  zIndex: index * 10 
                }}
              >
                {/* The Card Itself */}
                <div className="relative w-full h-full flex flex-col lg:flex-row bg-[#1a1914] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.8)] border border-white/5 transform transition-transform duration-500 hover:-translate-y-2">
                  
                  {/* Left Imagery Panel */}
                  <div className="w-full lg:w-1/2 relative h-64 lg:h-full overflow-hidden group">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transform transition-transform duration-[10s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1a1914] lg:via-transparent via-[#1a1914]/80 to-transparent" />
                    
                    {/* Massive Floating Number */}
                    <div className="absolute -bottom-10 -left-6 lg:bottom-12 lg:-right-12 text-[10rem] font-black leading-none text-white/5 z-10 pointer-events-none drop-shadow-2xl">
                      {exp.id}
                    </div>
                  </div>

                  {/* Right Content Panel */}
                  <div className="w-full lg:w-1/2 p-8 lg:p-12 xl:p-14 flex flex-col justify-center relative overflow-y-auto">
                    {/* Minimalist Top Indicator */}
                    <div className="flex items-center gap-4 mb-6 lg:mb-8 mt-auto">
                      <div className={`w-12 h-[2px] ${exp.accent.replace('text', 'bg')}`}></div>
                      <span className={`font-bold text-xs tracking-widest uppercase ${exp.accent}`}>
                        Phase {exp.id}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 lg:mb-4 leading-tight">
                      {exp.title}
                    </h3>
                    
                    <h4 className={`text-base md:text-lg font-bold mb-6 lg:mb-8 uppercase tracking-widest ${exp.accent} opacity-80`}>
                      {exp.subtitle}
                    </h4>

                    <p className="text-base md:text-lg text-warm-sand/80 font-medium leading-relaxed mb-8 lg:mb-10 pl-5 lg:pl-6 border-l-2 border-white/10">
                      {exp.description}
                    </p>

                    {/* Faux Interactive "Learn More" element without link */}
                    <div className="inline-flex items-center gap-4 group/btn w-max cursor-pointer mb-auto">
                      <div className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-colors duration-300 group-hover/btn:bg-white/10 ${exp.accent}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </div>
                      <span className="text-white font-bold text-xs uppercase tracking-[0.2em] group-hover/btn:text-sunset-gold transition-colors">
                        Discover More
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}
