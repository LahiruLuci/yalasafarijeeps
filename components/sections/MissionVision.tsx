"use client";

import Image from "next/image";
import { useState } from "react";

export default function MissionVision() {
  const [hoveredPanel, setHoveredPanel] = useState<"mission" | "vision" | null>(null);

  // Determine flex ratios based on hover state. 
  // Custom cubic-bezier ensures a buttery smooth accordion expansion.
  const getFlexClass = (panel: "mission" | "vision") => {
    if (hoveredPanel === null) return "flex-[1]";
    return hoveredPanel === panel ? "flex-[1.8]" : "flex-[0.8]";
  };

  return (
    <section className="w-full relative bg-deep-charcoal">
      
      {/* Floating Centered Badge (Only visible on Desktop) */}
      <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-32 h-32 rounded-full bg-deep-charcoal border-[4px] border-sunset-gold items-center justify-center flex-col shadow-2xl pointer-events-none">
        <span className="text-sunset-gold font-bold text-[10px] tracking-widest uppercase">The</span>
        <span className="text-soft-beige font-black text-xl tracking-wider uppercase">Core</span>
      </div>

      <div className="flex flex-col lg:flex-row h-[100vh] lg:h-[85vh] w-[100vw] overflow-hidden">
        
        {/* === THE MISSION PANEL === */}
        <div 
          onMouseEnter={() => setHoveredPanel("mission")}
          onMouseLeave={() => setHoveredPanel(null)}
          className={`relative h-1/2 lg:h-full transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden cursor-crosshair group ${getFlexClass("mission")}`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/yala-banner.jpg"
              alt="Our Mission"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[800ms] ease-out opacity-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          
          {/* Dynamic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-deep-charcoal via-deep-charcoal/80 to-transparent lg:to-deep-charcoal/40 transition-opacity duration-700" />
          
          {/* Content Container */}
          <div className="absolute inset-0 p-8 md:p-16 lg:p-24 flex flex-col justify-end lg:justify-center">
            <div className="transform transition-transform duration-700 lg:group-hover:-translate-y-4">
              <span className="inline-block px-4 py-1 border border-sunset-gold/50 text-sunset-gold font-bold text-xs tracking-[0.3em] uppercase rounded-full mb-6">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight whitespace-nowrap">
                Pioneering <br/> <span className="text-sunset-gold">The Wild</span>
              </h2>
              
              {/* Expanding Description */}
              <div className="lg:max-h-0 lg:opacity-0 lg:overflow-hidden group-hover:max-h-64 group-hover:opacity-100 transition-all duration-700 ease-in-out lg:delay-100 max-w-xl">
                <p className="text-lg text-warm-sand/90 font-medium leading-relaxed border-l-2 border-sunset-gold pl-6">
                  To deliver the most immersive, ethical, and breathtaking safari experiences in Sri Lanka by blending luxury hospitality with deep, generational knowledge of the untamed jungle.
                </p>
              </div>
              
              {/* Mobile Description (Always visible) */}
               <div className="lg:hidden block mt-4 max-w-xl">
                <p className="text-base text-warm-sand/90 font-medium leading-relaxed border-l-2 border-sunset-gold pl-4">
                  To deliver the most immersive, ethical, and breathtaking safari experiences in Sri Lanka by blending luxury hospitality with deep, generational knowledge of the untamed jungle.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* === THE VISION PANEL === */}
        <div 
          onMouseEnter={() => setHoveredPanel("vision")}
          onMouseLeave={() => setHoveredPanel(null)}
          className={`relative h-1/2 lg:h-full transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden cursor-crosshair group ${getFlexClass("vision")}`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/projects/bundala-national-park-thum1.jpg"
              alt="Our Vision"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[800ms] ease-out opacity-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          
          {/* Dynamic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-olive-green via-olive-green/90 to-transparent lg:to-olive-green/40 transition-opacity duration-700" />
          
          {/* Content Container */}
          <div className="absolute inset-0 p-8 md:p-16 lg:p-24 flex flex-col justify-start lg:justify-center lg:items-end lg:text-right">
            <div className="transform transition-transform duration-700 lg:group-hover:-translate-y-4 flex flex-col lg:items-end">
              <span className="inline-block px-4 py-1 border border-soft-beige/50 text-soft-beige font-bold text-xs tracking-[0.3em] uppercase rounded-full mb-6">
                Our Vision
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight whitespace-nowrap">
                Sustaining <br/> <span className="text-soft-beige/60">The Future</span>
              </h2>
              
              {/* Expanding Description */}
              <div className="lg:max-h-0 lg:opacity-0 lg:overflow-hidden group-hover:max-h-64 group-hover:opacity-100 transition-all duration-700 ease-in-out lg:delay-100 max-w-xl">
                <p className="text-lg text-warm-sand/90 font-medium leading-relaxed border-l-2 lg:border-l-0 lg:border-r-2 border-soft-beige pr-0 lg:pr-6 pl-6 lg:pl-0">
                  To pioneer a sustainable ecosystem for wildlife tourism, where every expedition actively guarantees the preservation of Yala's biodiversity and the prosperity of its local communities.
                </p>
              </div>

               {/* Mobile Description (Always visible) */}
               <div className="lg:hidden block mt-4 max-w-xl">
                <p className="text-base text-warm-sand/90 font-medium leading-relaxed border-l-2 border-soft-beige pl-4">
                   To pioneer a sustainable ecosystem for wildlife tourism, where every expedition actively guarantees the preservation of Yala's biodiversity and the prosperity of its local communities.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
