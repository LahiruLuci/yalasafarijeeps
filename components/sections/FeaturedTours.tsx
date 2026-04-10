"use client";

import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    id: "multi-day",
    title: "Immersive Multi-Day Expeditions",
    subtitle: "Comprehensive Journeys",
    description: "Experience the ultimate Sri Lankan adventure. Our pre-designed multi-day tours seamlessly blend ancient cultural heritage, breathtaking hill country train rides, and exhilarating wildlife safaris into one unforgettable expedition.",
    image: "/images/yala-safari-accomodation-banner.jpg",
    features: ["Pre-planned Itineraries", "Luxury Stays", "Island Wide Coverage"],
    href: "/tours",
    align: "left",
  },
  {
    id: "custom",
    title: "Bespoke Custom Packages",
    subtitle: "Tailored to You",
    description: "Craft your dream journey from scratch. Whether you're seeking a romantic luxury honeymoon, an educational family wildlife adventure, or a highly dedicated leopard photography expedition, our experts design the perfect pathway.",
    image: "/images/slider/slide-2.jpg",
    features: ["Flexible Scheduling", "Dedicated Private Guides", "Personalized Interests"],
    href: "/contact",
    align: "right",
  },
];

export default function FeaturedTours() {
  return (
    <section className="bg-white py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-sunset-gold font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
            Go Beyond The Park
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-deep-charcoal mb-6 leading-tight">
            Featured Tour Programs
          </h2>
          <p className="text-lg text-safari-brown/80 font-medium leading-relaxed">
            Expand your horizons. Combine the thrill of the Yala jungle with the rich, diverse landscapes of Sri Lanka through our premium extended tours.
          </p>
        </div>

        {/* Panoramic Tour Cards */}
        <div className="flex flex-col gap-12 md:gap-16">
          {tours.map((tour, idx) => (
            <div 
              key={tour.id}
              className="group relative h-[500px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700"
            >
              {/* Full Width Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Gradient overlays to ensure text readability */}
              <div className="absolute inset-0 bg-black/20" />
              <div className={`absolute inset-0 bg-gradient-to-${tour.align === 'left' ? 'r' : 'l'} from-deep-charcoal/90 via-deep-charcoal/60 to-transparent`} />

              {/* Glassmorphism Content Panel */}
              <div 
                className={`absolute inset-y-0 ${tour.align === 'left' ? 'left-0' : 'right-0'} w-full md:w-3/5 lg:w-1/2 p-8 md:p-16 flex flex-col justify-center`}
              >
                <div className={`relative z-10 ${tour.align === 'left' ? 'md:pr-12' : 'md:pl-12'} transform transition-all duration-700 group-hover:-translate-y-2`}>
                  
                  <div className="inline-block px-4 py-1 border border-sunset-gold/50 rounded-full mb-6">
                    <span className="text-sunset-gold font-bold text-xs tracking-widest uppercase">
                      {tour.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-extrabold text-soft-beige mb-6 leading-tight text-shadow-sm">
                    {tour.title}
                  </h3>
                  
                  <p className="text-lg text-warm-sand/90 leading-relaxed mb-8">
                    {tour.description}
                  </p>

                  <ul className="flex flex-col gap-3 mb-10">
                    {tour.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-soft-beige font-medium">
                        <div className="w-6 h-6 rounded-full bg-olive-green/80 flex items-center justify-center flex-shrink-0">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={tour.href}
                    className="inline-flex items-center gap-4 group/btn"
                  >
                    <span className="text-sunset-gold font-bold text-sm tracking-[0.2em] uppercase">
                      Explore Itinerary
                    </span>
                    <div className="w-12 h-12 rounded-full border border-sunset-gold/50 flex items-center justify-center text-sunset-gold group-hover/btn:bg-sunset-gold group-hover/btn:text-white transition-colors duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/btn:translate-x-1">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19"></path>
                      </svg>
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
