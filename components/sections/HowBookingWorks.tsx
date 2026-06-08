"use client";

import { motion } from "framer-motion";

export default function HowBookingWorks() {
    const steps = [
        {
            number: "01",
            title: "Choose your safari",
            desc: "Select from morning, evening, or full-day packages based on your wildlife interests."
        },
        {
            number: "02",
            title: "Send your request",
            desc: "Fill out the simple form or message us directly on WhatsApp with your details."
        },
        {
            number: "03",
            title: "Confirm by WhatsApp",
            desc: "Our team will verify availability and send you a final confirmation and pickup time."
        }
    ];

    return (
        <section className="bg-warm-sand/20 py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-sunset-gold font-black text-xs tracking-[0.5em] uppercase mb-4 block">Process</span>
                    <h2 className="text-4xl md:text-6xl font-black text-deep-charcoal italic leading-tight">How Booking Works</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                    {steps.map((step, i) => (
                        <div key={i} className="relative group">
                            {i < 2 && (
                                <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-sunset-gold/30 to-transparent -translate-x-12 z-0" />
                            )}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-[2.5rem] bg-white shadow-xl flex items-center justify-center text-sunset-gold text-4xl font-black mb-8 group-hover:bg-sunset-gold group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                                    {step.number}
                                </div>
                                <h3 className="text-2xl font-black text-deep-charcoal mb-4 uppercase tracking-tighter">{step.title}</h3>
                                <p className="text-safari-brown/70 font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
