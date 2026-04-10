"use client";

import Image from "next/image";

const chapters = [
  {
    id: "01",
    year: "2012",
    title: "A Seed in the Savannah",
    description: "It began with a single vintage jeep, a deep passion for wildlife, and a relentless desire to share the raw beauty of Yala. We spent our early days charting unknown tracks and learning the intricate rhythms of the jungle.",
    image: "/images/projects/yala-safari-jeepa-thum-1.jpg",
  },
  {
    id: "02",
    year: "2018",
    title: "Elevating the Experience",
    description: "Recognizing the need for a more premium, ethical approach to tourism, we completely overhauled our fleet. We introduced luxury tiered seating, silenced engines, and hired generational local trackers to guarantee unparalleled sightings.",
    image: "/images/slider/slide-3.jpg",
  },
  {
    id: "03",
    year: "Present",
    title: "The apex of Eco-Tourism",
    description: "Today, we stand as the gold standard for wildlife expeditions in Sri Lanka. From bespoke wildlife photography tours to five-star catered wilderness picnics, our mission remains the same: protect the wild, and witness its majesty.",
    image: "/images/slider/slide-4.jpg",
  },
];

export default function CompanyStory() {
  return (
    <section className="bg-warm-sand/30 py-24 md:py-40 relative px-4 md:px-8">
      {/* Background ambient text */}
      <div className="absolute top-32 -left-24 text-[12vw] font-black text-deep-charcoal/5 whitespace-nowrap pointer-events-none origin-bottom-left -rotate-90">
        LEGACY
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Intro Text */}
        <div className="max-w-3xl mb-24 lg:mb-40">
          <span className="text-sunset-gold font-bold text-sm tracking-[0.4em] uppercase mb-6 block">
            Our Timeline
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-deep-charcoal leading-[1.1] mb-8">
            The Making of <br/>
            <span className="text-olive-green">A Legend</span>
          </h2>
          <p className="text-xl text-safari-brown/80 font-medium leading-relaxed border-l-4 border-sunset-gold pl-6">
            We didn't just build a tour company; we grew alongside the jungle itself. Over a decade of tracking, preserving, and exploring has led us to where we stand today.
          </p>
        </div>

        {/* The Timeline Layout */}
        <div className="relative w-full flex flex-col gap-32 lg:gap-48">
          
          {/* Central Vertical Timeline Line (Only visible on large screens) */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-sunset-gold/0 via-sunset-gold to-sunset-gold/0 z-0"></div>

          {chapters.map((chapter, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={chapter.id} 
                className={`relative z-10 flex flex-col lg:flex-row items-center w-full gap-12 lg:gap-0 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                
                {/* Node for Timeline (Desktop) */}
                <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-deep-charcoal border-4 border-sunset-gold items-center justify-center text-sunset-gold font-black z-20 shadow-[0_0_30px_rgba(208,122,63,0.5)]">
                  {chapter.id}
                </div>

                {/* Image Block */}
                <div className={`w-full lg:w-1/2 flex ${isEven ? "lg:pr-24 lg:justify-end" : "lg:pl-24 lg:justify-start"}`}>
                  <div className="relative w-full max-w-lg aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white">
                    <Image
                      src={chapter.image}
                      alt={chapter.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transform transition-transform duration-[15s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-deep-charcoal/20 group-hover:bg-transparent transition-colors duration-700" />
                    
                    {/* The Giant Year Watermark strictly hovering over the image */}
                    <div className={`absolute -bottom-8 ${isEven ? "-right-8" : "-left-8"} text-[8rem] font-black text-white/50 leading-none drop-shadow-2xl mix-blend-overlay pointer-events-none`}>
                      {chapter.year}
                    </div>
                  </div>
                </div>

                {/* Text Content Block */}
                <div className={`w-full lg:w-1/2 flex flex-col justify-center ${isEven ? "lg:pl-24" : "lg:pr-24"}`}>
                  
                  {/* Mobile Year Badge */}
                  <div className="lg:hidden inline-flex px-4 py-2 bg-deep-charcoal text-sunset-gold font-black tracking-widest text-sm rounded-full mb-6 self-start shadow-xl border border-sunset-gold/30">
                    Est. {chapter.year}
                  </div>

                  {/* Desktop Year Watermark (Behind Text) */}
                  <div className="hidden lg:block absolute -top-16 text-[10rem] font-black text-safari-brown/5 leading-none -z-10 pointer-events-none whitespace-nowrap">
                    {chapter.year}
                  </div>

                  <span className="text-olive-green font-extrabold text-xl mb-4 tracking-wider">
                    Chapter {chapter.id}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-black text-deep-charcoal mb-6 leading-tight">
                    {chapter.title}
                  </h3>
                  <p className="text-lg text-safari-brown/80 font-medium leading-relaxed drop-shadow-sm">
                    {chapter.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
