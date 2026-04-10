"use client";

import Image from "next/image";
import Link from "next/link";

const packages = [
  {
    id: "morning",
    title: "Morning Jeep Safari",
    time: "5:30 AM - 9:30 AM",
    description:
      "Journey begins at 5:30am from your hotel, while stars sparkle in their final hour of glory before the majestic Yala sunrise.",
    image: "/images/morning-safari-yala-national-park.jpg",
    href: "/safari/morning",
  },
  {
    id: "evening",
    title: "Evening Jeep Safari",
    time: "1:30 PM - 6:00 PM",
    description:
      "Journey begins at 1:30pm from the hotel you abode. While the warmth of the sun teases, watch the leopards awaken for their evening prowl.",
    image: "/images/evening-safari-yala-national-park.jpg",
    href: "/safari/evening",
  },
  {
    id: "full-day",
    title: "Full Day Jeep Safari",
    time: "6:00 AM - 6:00 PM",
    description:
      "Allowing for a late start, the day safari begins at 6am from the hotel you board at. Immerse yourself completely in the untamed wilderness of Yala.",
    image: "/images/full-day-safari.jpg",
    href: "/safari/full-day",
  },
];

export default function SafariPackages() {
  return (
    <section className="bg-warm-sand py-20 lg:py-28 text-deep-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-sunset-gold font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
            Choose Your Adventure
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-deep-charcoal mb-6 leading-tight">
            Signature Safari Packages
          </h2>
          <p className="text-lg text-safari-brown/80 font-medium leading-relaxed">
            Experience the thrill of the wild with our expertly guided tours. Whether you seek the break of dawn, the golden hour, or a full day of exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-safari-brown/80 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sunset-gold/90 backdrop-blur-sm text-soft-beige text-xs font-bold uppercase tracking-widest rounded shadow-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {pkg.time}
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-deep-charcoal group-hover:text-olive-green transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-safari-brown/70 leading-relaxed mb-8 flex-1">
                  {pkg.description}
                </p>
                <Link
                  href={pkg.href}
                  className="inline-flex items-center gap-2 text-sunset-gold font-bold text-sm tracking-widest uppercase transition-all duration-300 group-hover:gap-3"
                >
                  Explore Details
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <Link
                href="/safari"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-deep-charcoal text-soft-beige font-bold text-sm tracking-[0.2em] uppercase rounded hover:bg-olive-green transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
                View All Safaris
            </Link>
        </div>
      </div>
    </section>
  );
}
