"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const heroSlides = [
  {
    id: 1,
    image: "/images/yala-national-park/yala-national-park-sri-lanka-image5.jpg",
    subtitle: "Explore The Untamed",
    title: "Experience the Wild Beauty of Yala",
    desc: "Embark on an unforgettable luxury safari through Sri Lanka's most renowned wildlife sanctuary.",
  },
  {
    id: 2,
    image: "/images/slider/slide-2.jpg",
    subtitle: "The Apex Predator",
    title: "Encounter the Elusive Leopard",
    desc: "Join our expert rangers on a thrilling quest to spot the majestic Sri Lankan leopard in its natural habitat.",
  },
  {
    id: 3,
    image: "/images/slider/slide-3.jpg",
    subtitle: "Gentle Giants",
    title: "Witness the Giants of Yala",
    desc: "Observe wild elephant herds roam freely across expansive savannahs and watering holes.",
  },
  {
    id: 4,
    image: "/images/slider/slide-4.jpg",
    subtitle: "Premium Comfort",
    title: "Discover Untamed Wilderness",
    desc: "Experience the perfect balance of rugged adventure and premium comfort in our luxury safari jeeps.",
  },
];

export default function Hero() {
  return (
    /* Inline style is the final guarantee — CSS class handles the rest */
    <section
      className="hero-section"
      style={{ height: "100vh", minHeight: 600 }}
    >
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1400}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          renderBullet: (_i: number, cls: string) =>
            `<span class="${cls} hero-bullet"></span>`,
        }}
        navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
        loop
        allowTouchMove
        className="hero-swiper"
        /* Belt-and-suspenders: inline height in case Tailwind/class fights it */
        style={{ width: "100%", height: "100%" }}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="hero-slide group"
            style={{ height: "100%" }}
          >
            {/* Full-bleed background — next/image for peak performance and virtual cropping */}
            <div className="absolute inset-0 z-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === 1}
                sizes="100vw"
                className="object-cover object-center transition-transform duration-[4000ms] group-[.swiper-slide-active]:scale-110"
              />
            </div>

            {/* Overlays (styles in globals.css) */}
            <div className="hero-overlay-color" />
            <div className="hero-overlay-gradient" />

            {/* Text content */}
            <div className="hero-content">
              <span
                tabIndex={0}
                className="hero-eyebrow
                  opacity-0 translate-y-5
                  group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0
                  transition-all duration-700 delay-300 ease-out"
              >
                <span className="hero-eyebrow-line" />
                {slide.subtitle}
              </span>

              <h1
                tabIndex={0}
                className="hero-heading
                  opacity-0 translate-y-8
                  group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0
                  transition-all duration-700 delay-[500ms] ease-out"
              >
                {slide.title}
              </h1>

              <p
                tabIndex={0}
                className="hero-desc
                  opacity-0 translate-y-5
                  group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0
                  transition-all duration-700 delay-700 ease-out"
              >
                {slide.desc}
              </p>

              <div
                className="hero-cta-row
                  opacity-0 translate-y-4
                  group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0
                  transition-all duration-700 delay-[900ms] ease-out"
              >
                <Link href="/safari" className="hero-btn-primary group/pb">
                  <span style={{ position: "relative", zIndex: 1 }}>Explore Safaris</span>
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    style={{ position: "relative", zIndex: 1 }}
                    className="transition-transform duration-300 group-hover/pb:translate-x-1"
                  >
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="hero-btn-fill" />
                </Link>

                <Link href="/contact" className="hero-btn-ghost group/gb">
                  <span>Inquire Now</span>
                  <svg
                    width="13" height="13" viewBox="0 0 24 24" fill="none"
                    className="transition-transform duration-300 group-hover/gb:translate-x-1"
                  >
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Side navigation arrows */}
        <button aria-label="Previous slide" className="hero-prev hero-nav-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button aria-label="Next slide" className="hero-next hero-nav-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </Swiper>

      {/* UI-only styles — layout-critical CSS is in globals.css */}
      <style>{`
        .hero-content {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 15vh;
          padding-left: 24px;
          padding-right: 24px;
          max-width: 1440px;
        }
        @media (min-width: 768px)  { .hero-content { padding-left: 6vw; padding-top: 18vh; } }
        @media (min-width: 1024px) { .hero-content { padding-left: 8vw; padding-top: 20vh; } }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: #D07A3F;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-shadow: 0px 2px 6px rgba(0,0,0,0.8);
        }
        .hero-eyebrow-line {
          display: inline-block;
          width: 32px;
          height: 2px;
          background: #D07A3F;
          flex-shrink: 0;
          box-shadow: 0 1px 3px rgba(0,0,0,0.6);
        }
        .hero-heading {
          color: #F2E6CE;
          font-weight: 800;
          line-height: 1.08;
          margin: 0 0 20px;
          max-width: 14ch;
          text-shadow: 0 4px 24px rgba(0,0,0,0.8);
          font-size: clamp(2rem, 5.5vw, 5rem);
        }
        .hero-desc {
          color: #F2E6CE;
          font-weight: 500;
          font-size: clamp(1rem, 1.4vw, 1.15rem);
          max-width: 500px;
          line-height: 1.75;
          margin: 0 0 36px;
          text-shadow: 0 2px 6px rgba(0,0,0,0.8);
        }
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }

        /* Primary button */
        .hero-btn-primary {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #D07A3F;
          color: #F2E6CE;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 13px 24px;
          text-decoration: none;
        }
        .hero-btn-fill {
          position: absolute;
          inset: 0;
          background: #2B2A22;
          width: 0;
          transition: width 0.3s ease-out;
          z-index: 0;
        }
        .hero-btn-primary:hover .hero-btn-fill { width: 100%; }

        /* Ghost button */
        .hero-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: rgba(242,230,206,0.65);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.3s;
        }
        .hero-btn-ghost:hover { color: #F2E6CE; }

        /* Navigation arrows */
        .hero-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          transition: background 0.3s, border-color 0.3s, color 0.3s;
        }
        .hero-nav-btn:hover { background:#D07A3F; border-color:#D07A3F; color:#fff; }
        .hero-prev { left: 16px; }
        .hero-next { right: 16px; }
        @media (min-width: 768px) {
          .hero-prev { left: 28px; }
          .hero-next { right: 28px; }
          .hero-nav-btn { width: 46px; height: 46px; }
        }

        /* Pagination */
        .swiper-pagination {
          bottom: 28px !important;
          left: 0 !important;
          width: 100% !important;
          text-align: left !important;
          padding-left: 24px;
          display: flex;
          align-items: center;
        }
        @media (min-width: 768px)  { .swiper-pagination { padding-left: 48px; bottom: 36px !important; } }
        @media (min-width: 1024px) { .swiper-pagination { padding-left: 64px; } }

        .hero-bullet {
          display: inline-block;
          width: 20px; height: 1.5px;
          background: rgba(242,230,206,0.3);
          margin: 0 4px;
          border-radius: 0;
          cursor: pointer;
          opacity: 1 !important;
          transition: width 0.4s ease, background 0.4s ease;
        }
        .swiper-pagination-bullet-active.hero-bullet {
          background: #D07A3F;
          width: 36px;
        }

        /* Focus outlines for better accessibility */
        .hero-eyebrow:focus-visible,
        .hero-heading:focus-visible,
        .hero-desc:focus-visible,
        .hero-btn-primary:focus-visible,
        .hero-btn-ghost:focus-visible,
        .hero-nav-btn:focus-visible,
        .hero-bullet:focus-visible {
          outline: 2px solid #D07A3F;
          outline-offset: 4px;
          border-radius: 4px;
        }

      `}</style>
    </section>
  );
}
