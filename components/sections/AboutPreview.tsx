"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-warm-sand/30 py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 relative z-10">
            <span className="text-sunset-gold font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-deep-charcoal mb-8 leading-tight">
              Passionate About <br />
              <span className="text-olive-green">Yala's Wilderness</span>
            </h2>
            
            <p className="text-lg text-safari-brown/80 font-medium leading-relaxed mb-6">
              At **Yala Safari Jeeps**, we are more than just a tour operator; we are your dedicated companions in exploring the untamed beauty of Sri Lanka. Nestled on the edge of the world-renowned Yala National Park, we specialize in providing unforgettable wildlife encounters.
            </p>
            
            <p className="text-lg text-safari-brown/80 font-medium leading-relaxed mb-10">
              Whether you are tracking the elusive Sri Lankan leopard, observing wild elephant herds, or bird watching, our expert local guides ensure an ethical, premium, and deeply native jeep safari experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="/about"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-sunset-gold text-soft-beige font-bold text-sm tracking-widest uppercase overflow-hidden rounded shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-deep-charcoal w-0 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
                <span className="relative z-10">Learn Our Story</span>
                <svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-olive-green flex items-center justify-center text-olive-green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-safari-brown uppercase tracking-widest font-bold">24/7 Support</span>
                  <a href="tel:+94722112222" className="text-deep-charcoal font-bold text-lg hover:text-sunset-gold transition-colors">+94 72 211 22 22</a>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            {/* The main image wrapper with an offset border design */}
            <div className="relative z-10 w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/yala-banner.jpg"
                alt="Yala Safari Jeeps - Expert Wildlife Guide in Sri Lanka"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 border border-white/20 rounded-3xl m-4 pointer-events-none"></div>
            </div>

            {/* Decorative background blocks overlapping the image */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-3/4 h-3/4 bg-olive-green rounded-3xl" />
            
            {/* Overlay statistics card */}
            <div className="absolute -left-8 md:-left-12 bottom-12 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-5 border border-warm-sand/50 hidden sm:flex">
              <div className="bg-warm-sand/40 text-sunset-gold w-14 h-14 rounded-full flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                   <circle cx="9" cy="7" r="4"></circle>
                   <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                   <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-deep-charcoal">5000+</span>
                <span className="text-sm text-safari-brown font-bold tracking-wider uppercase">Happy Explorers</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
