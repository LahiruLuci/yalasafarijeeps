"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const team = [
  {
    id: 1,
    name: "Chaminda Rajapaksa",
    role: "Lead Safari Tracker",
    experience: "15+ Years",
    specialty: "Leopard & Big Cat Expert",
    image: "/images/team/img-1.jpg",
    bio: "Born and raised in the villages surrounding Yala, Chaminda has an almost supernatural ability to read the jungle. He has guided over 2,000 successful leopard sightings.",
    sightings: "2,000+",
  },
  {
    id: 2,
    name: "Nuwan Perera",
    role: "Senior Wilderness Guide",
    experience: "12+ Years",
    specialty: "Bird & Reptile Specialist",
    image: "/images/team/img-2.jpg",
    bio: "Nuwan's ornithological knowledge is unrivaled. He can identify over 215 bird species by call alone, making every morning safari a masterclass in avian life.",
    sightings: "1,500+",
  },
  {
    id: 3,
    name: "Asanka Wickramasinghe",
    role: "Elephant Corridor Expert",
    experience: "10+ Years",
    specialty: "Elephant & Mammal Expert",
    image: "/images/team/img-3.jpg",
    bio: "Asanka's deep respect for elephant social behavior allows him to observe herds in their most intimate, undisturbed states—an experience that few in the world can provide.",
    sightings: "1,800+",
  },
  {
    id: 4,
    name: "Kapila De Silva",
    role: "Night Safari Specialist",
    experience: "9+ Years",
    specialty: "Nocturnal Wildlife Expert",
    image: "/images/team/img-4.jpg",
    bio: "Kapila thrives in the twilight hours of the jungle. His evening and night safaris reveal an entirely different world, from sloth bears to fishing cats emerging from the scrub.",
    sightings: "1,200+",
  },
  {
    id: 5,
    name: "Rohan Fernando",
    role: "Photography Safari Guide",
    experience: "8+ Years",
    specialty: "Wildlife Photography Expert",
    image: "/images/team/img-5.jpg",
    bio: "As a passionate wildlife photographer himself, Rohan understands the perfect angle, the golden-hour light, and the key behavioral cues that produce award-winning shots.",
    sightings: "1,100+",
  },
  {
    id: 6,
    name: "Saman Bandara",
    role: "Coastal Safari Navigator",
    experience: "11+ Years",
    specialty: "Marine & Coastal Expert",
    image: "/images/team/img-6.jpg",
    bio: "Saman bridges the coastal and jungle ecosystems, guiding whale watching expeditions in the morning and deep jungle safaris by afternoon with equal mastery and passion.",
    sightings: "900+",
  },
];

export default function TeamSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="bg-warm-sand/20 py-24 md:py-40 relative overflow-hidden px-4 md:px-8">

      {/* Background ambient decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-olive-green/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sunset-gold/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 md:mb-28">
          <div className="max-w-2xl">
            <span className="text-sunset-gold font-bold text-sm tracking-[0.4em] uppercase mb-6 block">
              The Heartbeat of the Expedition
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-deep-charcoal leading-[1.1] tracking-tight">
              Meet Your <br/>
              <span className="relative inline-block">
                Guides
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-sunset-gold rounded-full"></span>
              </span>
            </h2>
          </div>
          <p className="text-lg text-safari-brown/80 max-w-sm font-medium leading-relaxed lg:text-right">
            Every sighting. Every sunrise. Every memory. All made possible by the world's most passionate wildlife experts.
          </p>
        </div>

        {/* Magazine-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveId(member.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Portrait Container */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-[3/4] w-full shadow-xl">
                
                {/* Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700"
                />

                {/* Default Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/90 via-deep-charcoal/30 to-transparent transition-opacity duration-500" />
                
                {/* Active deep overlay */}
                <div className={`absolute inset-0 bg-deep-charcoal/80 transition-opacity duration-500 ${activeId === member.id ? 'opacity-100' : 'opacity-0'}`} />

                {/* Experience Badge */}
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-lg z-10">
                  <span className="text-deep-charcoal font-black text-xs tracking-widest uppercase">{member.experience}</span>
                </div>

                {/* Bottom Content - Default State */}
                <div className={`absolute bottom-0 left-0 right-0 p-7 z-10 transition-all duration-500 ${activeId === member.id ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                  <span className="block text-sunset-gold font-bold text-xs tracking-widest uppercase mb-2 drop-shadow">{member.role}</span>
                  <h3 className="text-2xl font-extrabold text-white leading-tight drop-shadow-lg">{member.name}</h3>
                </div>

                {/* Hover Detail Panel */}
                <div className={`absolute inset-0 p-7 z-10 flex flex-col justify-center transition-all duration-500 ${activeId === member.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <span className="block text-sunset-gold font-bold text-xs tracking-widest uppercase mb-3">{member.specialty}</span>
                  <h3 className="text-2xl font-extrabold text-white mb-4 leading-tight">{member.name}</h3>
                  <p className="text-warm-sand/90 text-sm leading-relaxed mb-6 border-l-2 border-sunset-gold/50 pl-4">
                    {member.bio}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <span className="text-sunset-gold font-black text-2xl">{member.sightings}</span>
                      <span className="text-warm-sand/60 text-xs uppercase tracking-wider">Successful Sightings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below Grid */}
        <div className="mt-20 text-center">
          <p className="text-safari-brown/70 font-medium mb-6 text-lg">
            Meet all 24 of our certified guides and drivers
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-10 py-5 bg-deep-charcoal text-soft-beige font-black text-sm tracking-widest uppercase rounded-full hover:bg-sunset-gold hover:text-deep-charcoal transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Plan Your Safari
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12H19M19 12L12 5M19 12L12 19"></path>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
