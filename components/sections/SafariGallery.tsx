"use client";

import { useState } from "react";
import Image from "next/image";
import { SafariPackage } from "@/lib/safariData";

// Images per safari type to show contextually relevant shots
const galleryImages: Record<string, { src: string; caption: string }[]> = {
  morning: [
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image1.jpg", caption: "Leopard at dawn, Block I" },
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image2.jpg", caption: "Sunrise over the savannah" },
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image4.jpg", caption: "Elephant crossing at first light" },
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image6.jpg", caption: "Morning mist across the lagoon" },
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image9.jpg", caption: "Golden hour glow on the treetops" },
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image11.jpg", caption: "Peacock displaying at sunrise" },
  ],
  evening: [
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image8.jpg", caption: "Leopard emerges for the evening" },
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image7.jpg", caption: "Twilight at the watering hole" },
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image5.jpg", caption: "The vast golden plains at dusk" },
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image3.jpg", caption: "Herds migrating at sunset" },
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image10.jpg", caption: "Sloth bear spotted in fading light" },
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image11.jpg", caption: "Evening chorus from the canopy" },
  ],
  "full-day": [
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image2.jpg", caption: "Dawn breaks over Block I" },
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image5.jpg", caption: "The full expanse of Yala" },
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image1.jpg", caption: "Leopard spotted mid-morning" },
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image8.jpg", caption: "Midday heat at the lagoon" },
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image4.jpg", caption: "Elephant herd crossing" },
    { src: "/images/yala-national-park/yala-national-park-sri-lanka-image9.jpg", caption: "Final golden hour of the full day" },
  ],
};




export default function SafariGallery({ safari }: { safari: SafariPackage }) {
  const images = galleryImages[safari.slug] ?? galleryImages["morning"];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : 0));
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : 0));

  return (
    <section className="bg-deep-charcoal py-24 md:py-32 relative overflow-hidden px-4 md:px-8">

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 rounded-full bg-sunset-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-sunset-gold font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Visual Diary</span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Into the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-gold to-warm-sand">
                Wild Gallery
              </span>
            </h2>
          </div>
          <p className="text-warm-sand/50 font-medium max-w-xs md:text-right text-base leading-relaxed">
            Authentic moments captured during real {safari.title} expeditions at Yala.
          </p>
        </div>

        {/* ── Bento Masonry Grid ── */}
        <div
          className="grid gap-3 md:gap-4 w-full"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "220px 220px 220px",
          }}
        >
          {images.map((img, i) => {
            const gridStyles: React.CSSProperties[] = [
              { gridColumn: "1 / 3", gridRow: "1 / 3" },   // 0: large 2x2
              { gridColumn: "3 / 4", gridRow: "1 / 2" },   // 1: small
              { gridColumn: "4 / 5", gridRow: "1 / 2" },   // 2: small
              { gridColumn: "3 / 4", gridRow: "2 / 4" },   // 3: tall
              { gridColumn: "4 / 5", gridRow: "2 / 3" },   // 4: small
              { gridColumn: "1 / 3", gridRow: "3 / 4" },   // 5: wide bottom, replaced by 2 individual
            ];
            // Mobile fallback: simple 2-col grid - use row/col spans only on md+
            return (
              <div
                key={i}
                onClick={() => openLightbox(i)}
                className="relative overflow-hidden rounded-2xl md:rounded-3xl cursor-zoom-in group shadow-lg"
                style={gridStyles[i]}
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-deep-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 md:p-7">
                  <p className="text-white font-bold text-sm leading-snug translate-y-2 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    {img.caption}
                  </p>
                </div>
                {/* Expand icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 rotate-12 group-hover:rotate-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Main Image Container */}
          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].caption}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 py-4 text-center">
              <span className="text-warm-sand/70 text-sm font-bold uppercase tracking-widest">
                {images[lightboxIndex].caption}
              </span>
              <span className="block text-warm-sand/30 text-xs mt-1">
                {lightboxIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
