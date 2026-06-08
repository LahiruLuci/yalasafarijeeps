"use client";

import Image from "next/image";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

/* ─────────────────────────────────────────────
   Trust Points & Why Choose Us
───────────────────────────────────────────── */
const trustPoints = [
    {
        title: "Clear Safari Information",
        desc: "Direct and honest details on morning, evening, and full-day safari timings."
    },
    {
        title: "Fast WhatsApp Communication",
        desc: "Real-time support to answer questions and confirm your jeep reservation."
    },
    {
        title: "Local Yala Area Knowledge",
        desc: "Based near the park entrance with years of experience navigating the local sectors."
    },
    {
        title: "Flexible Pickup Support",
        desc: "Coordinated hotel pickups from Tissamaharama, Yala, Kataragama, and Ella."
    }
];

const helpCards = [
    {
        title: "Private Jeep Bookings",
        desc: "Arranging dedicated high-clearance 4x4 jeeps for groups and solo travelers.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 13.1v2.9c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
            </svg>
        )
    },
    {
        title: "Safari Planning",
        desc: "Support for Morning (6am), Evening (2pm), and Full Day (12hr) safari options.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        )
    },
    {
        title: "Hotel Pickup Coordination",
        desc: "Logistics for picking you up from your hotel and returning you safely after the tour.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        )
    },
    {
        title: "WhatsApp Travel Support",
        desc: "Instant confirmations and answers to any pre-safari questions on the go.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        )
    }
];

export default function AboutPageClient() {
    return (
        <>
            {/* ── 1. HERO SECTION ─────────────────────────────── */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-deep-charcoal">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/lunugamwehera-park-1.jpg"
                        alt="Yala Safari Wilderness"
                        fill
                        priority
                        className="object-cover opacity-60 brightness-75 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal/60 via-transparent to-deep-charcoal/80" />
                </div>

                <div className="max-w-5xl mx-auto px-4 md:px-8 text-center relative z-10">
                    <span className="text-sunset-gold font-bold text-xs tracking-[0.5em] uppercase mb-6 block animate-fade-in-up">
                        Our Story
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-8 group animate-fade-in-up">
                        About<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-gold to-warm-sand">
                            Yala Safari Jeeps
                        </span>
                    </h1>
                    <p className="text-warm-sand/70 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto animate-fade-in-up">
                        Local safari support for private Yala National Park jeep tours, hotel pickup coordination, and WhatsApp-based booking assistance.
                    </p>
                </div>
            </section>

            {/* ── 2. SHORT STORY SECTION ──────────────────────── */}
            <section className="bg-white py-20 md:py-32">
                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-sunset-gold font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Factual Support</span>
                            <h2 className="text-4xl md:text-5xl font-black text-deep-charcoal tracking-tighter mb-6">
                                Local Safari Support <br /><span className="text-olive-green">Near Yala</span>
                            </h2>
                            <p className="text-safari-brown/80 text-lg font-medium leading-relaxed mb-6">
                                Yala Safari Jeeps helps travelers plan private jeep safaris in and around Yala National Park. Our focus is simple: clear communication, safe pickup arrangements, experienced local support, and a smooth booking process from inquiry to safari day.
                            </p>
                            <p className="text-safari-brown/70 font-medium leading-relaxed">
                                We operate locally and understand the sectors, entry points, and best times to witness Yala's diverse wildlife. Whether you are looking for a morning leopard search or an all-day wilderness immersion, our goal is to handle the logistics so you can focus on the experience.
                            </p>
                        </div>
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1">
                            <Image
                                src="/images/yala-national-park/yala-national-park-sri-lanka-image5.jpg"
                                alt="Local Yala Safari Support Team"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/40 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 3. WHAT WE HELP WITH (CARDS) ────────────────── */}
            <section className="bg-warm-sand/30 py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-deep-charcoal tracking-tighter mb-4">What We Help With</h2>
                        <p className="text-safari-brown/60 font-bold uppercase tracking-widest text-xs">Essential Logistics for Your Expedition</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {helpCards.map((card, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border border-warm-sand/50 hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-sunset-gold/10 text-sunset-gold rounded-2xl flex items-center justify-center mb-6">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-black text-deep-charcoal mb-3">{card.title}</h3>
                                <p className="text-safari-brown/70 text-sm font-medium leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 4. WHY TRAVELERS CHOOSE US ──────────────────── */}
            <section className="bg-white py-20 md:py-32">
                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div>
                            <span className="text-sunset-gold font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Trust & Reliability</span>
                            <h2 className="text-4xl md:text-5xl font-black text-deep-charcoal tracking-tighter mb-6">
                                Why Travelers <br />Choose Us
                            </h2>
                            <p className="text-safari-brown/70 font-medium leading-relaxed mb-8">
                                We understand that planning a safari in Sri Lanka can be confusing. We aim to keep things transparent, reliable, and honest from the first message.
                            </p>
                            <div className="space-y-4">
                                {trustPoints.map((point, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-olive-green text-white flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-black text-deep-charcoal text-sm uppercase tracking-wider">{point.title}</h4>
                                            <p className="text-safari-brown/60 text-sm font-medium">{point.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8">
                                <Image src="/images/projects/yala-safari-jeepa-thum-1.jpg" alt="Safari Detail" fill className="object-cover" />
                            </div>
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                                <Image src="/images/slider/slide-3.jpg" alt="Safari Detail" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. OUR APPROACH ─────────────────────────────── */}
            <section className="bg-deep-charcoal py-20 md:py-32 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-olive-green/5 pointer-events-none" />
                <div className="max-w-3xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
                        Simple, Safe, and Clear <br />
                        <span className="text-sunset-gold">Safari Planning</span>
                    </h2>
                    <p className="text-warm-sand/70 text-lg font-medium leading-relaxed mb-6">
                        Choosing the right safari time can be the difference between a good trip and a great one. We help you select the correct session based on your travel dates, prepare your hotel pickup, and advise you on what to bring.
                    </p>
                    <p className="text-warm-sand/50 text-sm font-bold uppercase tracking-[0.2em]">
                        No hidden fees — No pre-payment required to inquire
                    </p>
                </div>
            </section>

            {/* ── 6. LOCAL SUPPORT TEAM SECTION ────────────────── */}
            <section className="bg-warm-sand/10 py-20">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-deep-charcoal tracking-tighter mb-4">Local Safari Support Team</h2>
                    <p className="text-safari-brown/70 font-medium leading-relaxed max-w-2xl mx-auto">
                        Our group consists of verified local drivers and guides who have spent years navigating Yala's terrain. We prioritize safety, park regulation compliance, and respect for wild animals in their natural habitat.
                    </p>
                </div>
            </section>

            {/* ── 7. FINAL CTA ────────────────────────────────── */}
            <section className="bg-white py-24 md:py-32 text-center relative">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-7xl font-black text-deep-charcoal tracking-tighter leading-tight mb-8">
                        Ready to plan your <br />
                        <span className="text-sunset-gold underline decoration-deep-charcoal/10 underline-offset-8">Yala Safari?</span>
                    </h2>
                    <p className="text-safari-brown/70 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
                        We are ready to answer your questions and confirm your preferred dates via WhatsApp within 2 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/booking"
                            onClick={() => trackEvent("book_now_click", { location: "about_final_cta" })}
                            data-event="book_now_click"
                            className="px-12 py-5 bg-deep-charcoal text-white font-black text-sm tracking-widest uppercase rounded-full shadow-xl hover:scale-105 transition-all"
                        >
                            Book Safari
                        </Link>
                        <a
                            href="https://wa.me/61416482262"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent("whatsapp_click", { location: "about_final_cta" })}
                            data-event="whatsapp_click"
                            className="flex items-center justify-center gap-3 px-12 py-5 bg-[#25D366] text-white font-black text-sm tracking-widest uppercase rounded-full shadow-xl hover:scale-105 transition-all"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
