"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const itinerary = [
  {
    day: "01",
    title: "Arrival in Colombo",
    desc: "Arrive at Bandaranaike International Airport. Transfer to your hotel in Colombo. Spend the evening exploring Colombo's vibrant street markets, shopping, and dining.",
  },
  {
    day: "02",
    title: "Colombo to Kandy",
    desc: "After breakfast, depart for Kandy. En-route, visit the Pinnawala Elephant Orphanage. In Kandy, visit the Temple of the Tooth Relic and enjoy a cultural dance show.",
  },
  {
    day: "03",
    title: "Kandy to Nuwara Eliya",
    desc: "Head to Nuwara Eliya, known as 'Little England' for its scenic beauty. En-route, visit a tea plantation and factory. Explore Nuwara Eliya's lush greenery and waterfalls.",
  },
  {
    day: "04",
    title: "Nuwara Eliya to Ella",
    desc: "Depart for Ella, a picturesque hill station. Visit the stunning Ramboda Falls and the famous Nine Arch Bridge. Enjoy hiking and exploring Ella's beautiful landscapes.",
  },
  {
    day: "05",
    title: "Ella to Yala National Park",
    desc: "Travel to Yala National Park. Take an afternoon jeep safari to spot wildlife such as leopards, elephants, and exotic birds. Overnight stay near the park.",
  },
  {
    day: "06",
    title: "Full Day Safari at Yala",
    desc: "The definitive Yala experience. Spend a full 12 hours inside the park tracking leopards and observing the vibrant ecosystem. Includes a wilderness picnic lunch.",
  },
  {
    day: "07",
    title: "Yala to Galle",
    desc: "Head to Galle. Explore the historic Galle Fort, a UNESCO World Heritage Site. Enjoy leisurely walks along the fort walls and visit Galle's charming colonial streets.",
  },
  {
    day: "08",
    title: "Galle to Airport",
    desc: "Depending on your flight schedule, enjoy free time for last-minute shopping. Check-out from the hotel and proceed to Bandaranaike International Airport for departure.",
  },
];

export default function ToursList() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="tours-list" className="bg-warm-sand py-24 md:py-32 relative px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <span className="text-sunset-gold font-bold text-sm tracking-[0.4em] uppercase mb-4 block">
            Featured Expedition
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-deep-charcoal leading-[1.1] mb-6">
            Serenity & Splendor:<br />
            <span className="italic text-olive-green text-3xl md:text-5xl font-light">The 8-Day Sri Lanka Tour</span>
          </h2>
          <p className="text-lg text-safari-brown/80 font-medium leading-relaxed">
            Experience the perfect balance of wildlife, culture, and scenic beauty. This curated multi-day journey takes you from the bustling streets of Colombo to the untamed wilderness of Yala, concluding at the historic shores of Galle.
          </p>
        </div>

        {/* ── Split Interactive Itinerary ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
          
          {/* Left: Sticky Image Side (5 Cols) */}
          <div className="w-full lg:col-span-5 h-full relative">
            <div className="lg:sticky lg:top-32 lg:h-[600px] transition-all duration-300">
              <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl group border-[12px] border-white z-10">
                <Image
                  src={
                    activeDay === 4 || activeDay === 5 ? "/images/full-day-safari.jpg" 
                    : activeDay === 2 || activeDay === 3 ? "/images/yala-national-park/yala-national-park-sri-lanka-image7.jpg"
                    : "/images/yala-safari-accomodation-banner.jpg" 
                  }
                  alt={itinerary[activeDay].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-all duration-1000 group-hover:scale-105"
                />
                {/* Dynamic Day Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/90 via-deep-charcoal/20 to-transparent flex flex-col justify-end p-10 md:p-14">
                  <span className="text-sunset-gold font-black text-6xl md:text-8xl leading-none opacity-20 absolute bottom-8 right-8 pointer-events-none">
                    Day {itinerary[activeDay].day}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 relative z-10">
                    {itinerary[activeDay].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Accordion/Timeline List (7 Cols) */}
          <div className="w-full lg:col-span-7 flex flex-col gap-6 relative">
            {itinerary.map((item, index) => {
              const isActive = activeDay === index;
              return (
                <div 
                  key={index}
                  className={`relative p-6 md:p-8 rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden border ${
                    isActive 
                      ? "bg-white border-sunset-gold shadow-xl" 
                      : "bg-white/50 border-white hover:bg-white/80"
                  }`}
                  onClick={() => setActiveDay(index)}
                >
                  {/* Active highlight bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-2 transition-colors duration-500 ${isActive ? "bg-sunset-gold" : "bg-transparent"}`} />

                  <div className="flex items-start gap-5 md:gap-8 relative z-10 pl-2">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-500 ${
                      isActive ? "bg-deep-charcoal text-sunset-gold" : "bg-warm-sand/80 text-safari-brown/40"
                    }`}>
                      <span className="font-extrabold text-xl md:text-2xl">{item.day}</span>
                    </div>
                    
                    <div className="flex-1 pt-2 md:pt-3">
                      <h4 className={`text-xl md:text-2xl font-extrabold transition-colors duration-300 ${
                        isActive ? "text-deep-charcoal" : "text-safari-brown/70"
                      }`}>
                        {item.title}
                      </h4>
                      
                      <div className={`grid transition-all duration-500 ease-in-out ${
                        isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}>
                        <div className="overflow-hidden">
                          <p className="text-safari-brown/80 leading-relaxed text-base md:text-lg">
                            {item.desc}
                          </p>
                          {/* Mini inclusion pills for styling */}
                          <div className="flex gap-3 mt-4 flex-wrap">
                            <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full bg-olive-green/10 text-olive-green">Guided</span>
                            <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full bg-sunset-gold/10 text-sunset-gold">Transport</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ── Booking Strip ── */}
        <div className="mt-24 md:mt-32 max-w-4xl mx-auto bg-deep-charcoal rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Background element */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-sunset-gold/10 rounded-full blur-[60px]" />
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl font-extrabold text-white mb-2">Ready to embark?</h3>
            <p className="text-warm-sand/60 font-medium">Customizable dates and group sizes available.</p>
          </div>
          <div className="relative z-10 flex gap-4 w-full md:w-auto">
            <Link
              href="/booking"
              className="flex-1 md:flex-none text-center px-8 py-4 bg-sunset-gold text-deep-charcoal font-black text-sm tracking-widest uppercase rounded-xl hover:shadow-[0_0_30px_rgba(208,122,63,0.4)] transition-all transform hover:-translate-y-1"
            >
              Inquire Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
