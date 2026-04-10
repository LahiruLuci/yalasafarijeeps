"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Wind, Zap } from "lucide-react";

/* ── DATA SECTION ── */
const SLIDES = [
  {
    id: "01",
    image: "/images/slider/hero-signature.png",
    title: "UNTAMED",
    highlight: "LEGACY",
    desc: "Venture into the heart of Yala, where the shadows of ancient granite boulders hide the world's most dense leopard population.",
    location: "Block I, Yala West",
    stats: [
       { label: "Sightings", value: "94%" },
       { label: "Guides", value: "Level 4" }
    ]
  },
  {
    id: "02",
    image: "/images/slider/hero-elephants.png",
    title: "GENTLE",
    highlight: "GIANTS",
    desc: "Witness the majestic migration of Asian elephant herds across the emerald lagoons of the southeastern plains.",
    location: "Sella Kataragama",
    stats: [
        { label: "Population", value: "400+" },
        { label: "Status", value: "Wild" }
    ]
  },
  {
    id: "03",
    image: "/images/yala-national-park/yala-national-park-sri-lanka-image5.jpg",
    title: "SILENT",
    highlight: "PROWL",
    desc: "Experience the golden hour in Yala, a cinematic transition where predators emerge for the nightly chase under timber skies.",
    location: "Palatupana Entrance",
    stats: [
       { label: "Terrain", value: "Arid" },
       { label: "Species", value: "215+" }
    ]
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Auto-play logic */
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const slide = SLIDES[index];

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[700px] overflow-hidden bg-deep-charcoal"
    >
      {/* 1. Background Layers (Parallax Engine) */}
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dynamic Cinematic Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal via-deep-charcoal/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-transparent to-transparent z-10 opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10" />
        </motion.div>
      </AnimatePresence>

      {/* 2. Main Content Stack (Editorial Layout) */}
      <div className="container mx-auto h-full px-6 md:px-12 relative z-20 flex flex-col justify-center">
        
        <div className="max-w-5xl">
          {/* Top Info Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-sunset-gold relative overflow-hidden bg-olive-green/20 backdrop-blur-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Zap className="w-4 h-4 text-sunset-gold" strokeWidth={3} />
                  </div>
                </div>
              ))}
            </div>
            <div className="h-[1px] w-12 bg-sunset-gold/50" />
            <span className="text-sunset-gold font-black text-xs md:text-sm tracking-[0.5em] uppercase">
              Premier Wilderness Experience
            </span>
          </motion.div>

          {/* Headline Engine (Modern Masking Effect) */}
          <div className="mb-12 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="overflow-hidden">
                  <motion.h1 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-8xl lg:text-[12rem] font-black text-white leading-[0.85] tracking-tighter mix-blend-plus-lighter opacity-90"
                  >
                    {slide.title}
                  </motion.h1>
                </div>
                <div className="overflow-hidden mt-[-10px]">
                  <motion.h1 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-8xl lg:text-[12rem] font-black text-transparent stroke-white stroke-1 bg-clip-text bg-gradient-to-r from-sunset-gold to-warm-sand leading-[0.85] tracking-tighter"
                  >
                    {slide.highlight}
                  </motion.h1>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description & CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <motion.div
              key={`desc-${index}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-warm-sand/80 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-md border-l-2 border-sunset-gold/30 pl-8 italic">
                {slide.desc}
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <Link 
                  href="/safari"
                  className="group relative overflow-hidden bg-sunset-gold px-10 py-5 rounded-full text-deep-charcoal font-black text-sm tracking-widest transition-all hover:scale-110 active:scale-95 flex items-center gap-4 shadow-[0_0_40px_rgba(208,122,63,0.3)]"
                >
                  DISCOVER THE WILD
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" strokeWidth={3} />
                </Link>
                
                <Link 
                  href="/booking"
                  className="text-white hover:text-sunset-gold font-bold text-sm tracking-widest border-b-2 border-white/20 pb-1 transition-all flex items-center gap-3"
                >
                  SECURE A JEEP
                  <Zap className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Floating Location Card (Glassmorphism) */}
            <motion.div
              key={`card-${index}`}
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hidden lg:block bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group hover:bg-white/10 transition-colors"
            >
              <div className="absolute top-0 right-0 p-8">
                 <Wind className="text-sunset-gold/30 w-16 h-16 animate-pulse" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-sunset-gold mb-4">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-[0.3em]">{slide.location}</span>
                </div>
                <div className="grid grid-cols-2 gap-12">
                  {slide.stats.map((stat, i) => (
                    <div key={i}>
                      <span className="block text-4xl font-black text-soft-beige">{stat.value}</span>
                      <span className="block text-[10px] uppercase font-black tracking-widest text-warm-sand/40">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>

      {/* 3. Navigation Controls (Next Level) */}
      <div className="absolute right-8 bottom-12 z-30 flex items-center gap-8">
        {/* Progress Circle Indicators */}
        <div className="flex items-center gap-4">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className="group relative w-12 h-12 flex items-center justify-center transition-all"
            >
              <div className={`w-2 h-2 rounded-full transition-all duration-500 ${index === i ? "bg-sunset-gold scale-150 shadow-[0_0_15px_rgba(208,122,63,0.8)]" : "bg-white/20"}`} />
              <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
                <circle
                  cx="50%" cy="50%" r="20"
                  className={`fill-none stroke-sunset-gold stroke-[1] transition-all duration-[6000ms] ${index === i ? "opacity-100" : "opacity-0"}`}
                  strokeDasharray="126"
                  strokeDashoffset={index === i ? "0" : "126"}
                />
              </svg>
            </button>
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="flex items-center gap-4 ml-6 pl-6 border-l border-white/10">
          <button 
            onClick={handlePrev}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-sunset-gold hover:border-sunset-gold transition-all group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={handleNext}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-sunset-gold hover:border-sunset-gold transition-all group"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* Side Decorative IDs */}
      <div className="absolute left-8 bottom-12 hidden md:flex flex-col gap-4 items-center">
         <span className="text-sunset-gold font-black text-xl italic tracking-tighter">
            {slide.id}
         </span>
         <div className="h-24 w-[1px] bg-gradient-to-t from-sunset-gold to-transparent" />
      </div>

    </section>
  );
}
