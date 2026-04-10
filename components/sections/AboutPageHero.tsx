"use client";

import Image from "next/image";

export default function AboutPageHero() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] flex items-center bg-deep-charcoal overflow-hidden pt-24 pb-12">
      
      {/* Background Giant Watermark Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 mix-blend-overlay opacity-10">
        <h1 className="text-[15vw] font-black tracking-tighter text-white whitespace-nowrap leading-none">
          WILDERNESS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center order-2 lg:order-1 mt-12 lg:mt-0">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-sunset-gold"></span>
              <span className="text-sunset-gold font-bold text-sm tracking-[0.4em] uppercase">
                Our Story
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-soft-beige mb-8 leading-[1.1] tracking-tight drop-shadow-lg">
              Beyond <br className="hidden md:block"/>
              The Horizon
            </h2>
            
            <p className="text-lg md:text-xl text-warm-sand/80 font-medium leading-relaxed mb-10 border-l-2 border-olive-green pl-6 border-opacity-50">
              For over a decade, we have dedicated ourselves to connecting modern explorers with the ancient, untamed rhythms of the Sri Lankan jungle.
            </p>

            {/* Scroll Indicator */}
            <div className="hidden lg:flex items-center gap-4 text-warm-sand/50 text-xs font-bold uppercase tracking-widest mt-12">
              <span className="animate-bounce">↓</span> Scroll to discover
            </div>
          </div>

          {/* Right Floating Image Composition */}
          <div className="w-full lg:w-7/12 relative order-1 lg:order-2 h-[50vh] md:h-[60vh] lg:h-[75vh]">
            
            {/* The Main Hero Image */}
            <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl z-20 border-[8px] border-deep-charcoal outline outline-1 outline-white/10 transform rotate-1 md:rotate-2 group">
              <Image
                src="/images/yala-national-park/yala-national-park-sri-lanka-image5.jpg"
                alt="Yala Safari Jeeps Team in the Wilderness"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-[20s] ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-safari-brown/60 to-transparent mix-blend-multiply" />
            </div>

            {/* Background Accent Element */}
            <div className="absolute -bottom-8 -left-8 w-full h-full rounded-[2.5rem] md:rounded-[4rem] bg-olive-green z-10 transform -rotate-2 md:-rotate-3 shadow-[0_0_80px_rgba(107,111,58,0.3)]"></div>
            
            {/* Soft Glowing Atmosphere */}
            <div className="absolute top-1/4 -right-12 w-64 h-64 bg-sunset-gold/20 rounded-full blur-[100px] z-0"></div>

          </div>

        </div>
      </div>
    </section>
  );
}
