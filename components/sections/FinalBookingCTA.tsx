"use client";

import Link from "next/link";

export default function FinalBookingCTA() {
    return (
        <section className="bg-deep-charcoal py-32 relative overflow-hidden">
            {/* Decorative background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sunset-gold opacity-[0.03] rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-5xl md:text-7xl font-black text-white italic leading-tight tracking-tighter mb-10">
                    Ready to <br />
                    <span className="text-sunset-gold">Enter the Wild?</span>
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button
                        onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full sm:w-auto px-12 py-6 bg-sunset-gold text-deep-charcoal font-black text-sm tracking-[.3em] uppercase rounded-full shadow-[0_20px_50px_rgba(208,122,63,0.3)] hover:scale-110 active:scale-95 transition-all"
                    >
                        Book Safari Now
                    </button>
                    <a
                        href="https://wa.me/61416482262"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-12 py-6 border-2 border-white/20 text-white font-black text-sm tracking-[.3em] uppercase rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                    >
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </section>
    );
}
