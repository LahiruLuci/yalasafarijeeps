"use client";

import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Expert Local Trackers",
    description: "Our guides possess an intimate knowledge of Yala's terrain and wildlife behaviors, significantly increasing your chances of spotting the elusive leopard.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Premium 4x4 Jeeps",
    description: "Experience the rugged wilderness in supreme comfort. Our specialized fleet offers elevated stadium seating and unobstructed panoramic views.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Ethical Eco-Tourism",
    description: "We are deeply committed to sustainable practices that protect Yala's delicate ecosystem while providing you a pristine, undisturbed experience.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column - Large Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/features-pic.jpg"
                alt="Safari Guide in Yala National Park"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-safari-brown/60 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-xl flex items-center gap-4">
                <div className="bg-sunset-gold/10 p-3 rounded-full text-sunset-gold">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="font-extrabold text-2xl text-deep-charcoal">10+</div>
                  <div className="text-xs uppercase tracking-wider text-safari-brown/70 font-bold">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Background Accent Element */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-olive-green/10 rounded-full blur-3xl"></div>
          </div>

          {/* Right Column - Content & Features */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="mb-10 lg:mb-12">
              <span className="text-sunset-gold font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
                The Yala Difference
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-deep-charcoal mb-6 leading-tight">
                Why Venture With Us?
              </h2>
              <p className="text-lg text-safari-brown/80 font-medium leading-relaxed">
                At Yala Safari Jeeps, we don’t just offer a tour; we provide an immersion into the untamed beauty of Sri Lanka. Discover what makes us the premier choice for wildlife enthusiasts globally.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {features.map((feature, idx) => (
                <div 
                  key={feature.id} 
                  className={`flex gap-6 items-start group ${
                    idx !== features.length - 1 ? "border-b border-gray-100 pb-8" : ""
                  }`}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-warm-sand/50 group-hover:bg-sunset-gold rounded-full flex items-center justify-center text-olive-green group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-deep-charcoal mb-2 group-hover:text-sunset-gold transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-safari-brown/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
