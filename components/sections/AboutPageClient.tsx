"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

/* ─────────────────────────────────────────────
   Data Structures & Future Placeholders 
───────────────────────────────────────────── */

// When real team data is available, populate this array. 
// Do NOT invent fake drivers or owners.
type TeamMember = {
    name: string;
    role: "Owner / Safari Coordinator" | "Safari Driver" | "Safari Driver / Guide" | "Booking Coordinator";
    image: string; // real photograph URL
    yearsExperience?: string;
    languages?: string[];
    specialty?: string;
    bio?: string;
};
const TEAM_MEMBERS: TeamMember[] = [];

// When real jeep photos and verified info are available, populate this array.
type SafariVehicle = {
    id: string;
    modelInfo: string;
    features: string[]; // only real features like "Covered Roof", "Raised Viewing"
    image: string; // real photograph URL
};
const SAFARI_VEHICLES: SafariVehicle[] = [];

// When real wildlife photos taken by the company are verified, populate this array.
const GALLERY_IMAGES: string[] = [
    // placeholder structure
    // "/images/wildlife-placeholder-1.jpg", 
    // "/images/wildlife-placeholder-2.jpg",
];

const TRUST_STRIP = [
    { title: "Local Yala Support" },
    { title: "Private Planning" },
    { title: "Direct WhatsApp" },
    { title: "Respect for Rules" }
];

const PROCESS_STEPS = [
    {
        num: "01",
        title: "Tell Us Your Plans",
        desc: "Choose your preferred safari, date, group size and pickup location."
    },
    {
        num: "02",
        title: "We Confirm the Details",
        desc: "We check the arrangement and confirm the safari details, pickup and applicable costs with you."
    },
    {
        num: "03",
        title: "We Coordinate Your Pickup",
        desc: "Your confirmed pickup arrangements are prepared before the safari."
    },
    {
        num: "04",
        title: "Experience Yala",
        desc: "Meet your safari driver and explore Yala while respecting park rules and the natural behaviour of wildlife."
    }
];

export default function AboutPageClient() {
    return (
        <>
            {/* ── 1. HERO ─────────────────────────────── */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-deep-charcoal overflow-hidden flex flex-col items-center text-center px-4">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/lunugamwehera-park-1.jpg" // COMMENT: Replace with REAL photo of the owner, a driver with jeep, or genuine Yala moment
                        alt="Yala Safari Jeep Experience"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover opacity-30 brightness-[0.8] grayscale-[30%] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal/80 via-transparent to-deep-charcoal" />
                </div>

                <div className="relative z-10 max-w-4xl w-full">
                    <span className="text-sunset-gold font-bold text-xs md:text-sm tracking-[0.4em] uppercase mb-6 block">
                        About Yala Safari Jeeps
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8">
                        Local People. <br className="hidden md:block" /> Real Yala Experience.
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-12">
                        We help travellers experience Yala with local safari support, straightforward planning and private jeep safari arrangements built around their trip.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#meet-the-team" className="w-full sm:w-auto px-8 py-4 border border-sunset-gold text-sunset-gold font-bold text-sm tracking-widest uppercase rounded-full hover:bg-sunset-gold hover:text-deep-charcoal transition-all">
                            Meet Our Team
                        </a>
                        <Link href="/safari" className="w-full sm:w-auto px-8 py-4 bg-sunset-gold text-deep-charcoal font-bold text-sm tracking-widest uppercase rounded-full hover:scale-105 transition-all">
                            Plan Your Safari
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── 2. TRUST STRIP ──────────────────────── */}
            <section className="bg-sunset-gold py-6 border-b border-deep-charcoal/10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x-0 md:divide-x divide-deep-charcoal/20">
                        {TRUST_STRIP.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-center px-4 py-2">
                                <span className="text-deep-charcoal font-extrabold text-xs md:text-sm uppercase tracking-widest leading-snug">
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 3. OUR STORY ────────────────────────── */}
            <section className="py-20 md:py-32 bg-warm-sand/20">
                <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                        {/* COMMENT: Needs genuine local/team/jeep image */}
                        <Image
                            src="/images/yala-national-park/yala-national-park-sri-lanka-image5.jpg"
                            alt="Preparing for a Yala Safari"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <span className="text-sunset-gold font-bold text-sm tracking-widest uppercase mb-4 block">Our Story</span>
                        <h2 className="text-3xl md:text-5xl font-black text-deep-charcoal leading-tight mb-8">
                            Built Around a Love for Yala
                        </h2>
                        <div className="text-safari-brown/90 text-lg leading-relaxed font-medium space-y-6">
                            <p>
                                Yala Safari Jeeps was created to make planning a safari around Yala simpler for travellers.
                                From choosing the right safari session to coordinating pickup and answering questions before the trip,
                                our focus is on making the experience clear from the beginning.
                            </p>
                            <p>
                                As locals to the area, we wanted to build a bridge between international visitors and the incredible natural environment of Sri Lanka's Southern Province.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. MEET THE PEOPLE ──────────────────── */}
            <section id="meet-the-team" className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="mb-16">
                        <span className="text-sunset-gold font-bold text-sm tracking-widest uppercase mb-4 block">Our People</span>
                        <h2 className="text-3xl md:text-5xl font-black text-deep-charcoal leading-tight mb-6">
                            Meet the People Behind Your Safari
                        </h2>
                        <p className="text-safari-brown/80 text-lg md:text-xl font-medium max-w-2xl">
                            A safari is shaped not only by the park, but by the people helping you experience it.
                            Our operation relies on a dedicated local team handling bookings, driving, and guiding.
                        </p>
                    </div>

                    {TEAM_MEMBERS.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-16">
                            {TEAM_MEMBERS.map((member, idx) => (
                                <div key={idx} className="flex flex-col group">
                                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-warm-sand/50">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-black text-deep-charcoal mb-1">{member.name}</h3>
                                    <span className="text-sunset-gold font-bold text-sm uppercase tracking-widest mb-4 inline-block">{member.role}</span>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {member.yearsExperience && (
                                            <span className="px-3 py-1 bg-warm-sand/30 text-deep-charcoal font-semibold text-xs rounded-full">
                                                {member.yearsExperience} Exp.
                                            </span>
                                        )}
                                        {member.languages?.map(lang => (
                                            <span key={lang} className="px-3 py-1 bg-warm-sand/30 text-deep-charcoal font-semibold text-xs rounded-full">
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-safari-brown/80 leading-relaxed text-sm font-medium">
                                        {member.bio}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-warm-sand/20 rounded-3xl p-8 md:p-12 border border-warm-sand/50">
                            <p className="text-safari-brown/90 text-lg leading-relaxed font-medium">
                                Behind Yala Safari Jeeps is a team of hardworking Safari Drivers, Guides, and Safari Coordinators from the local area.
                                By confirming your safari with us, you are relying on local individuals who communicate directly
                                to ensure your pickup, ticketing, and park entry are managed carefully.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* ── 5. LOCAL EXPERIENCE ACTUAL MEANING ────── */}
            <section className="py-20 md:py-32 bg-deep-charcoal">
                <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">
                            Local Knowledge That Helps on Safari
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-sunset-gold">ROUTE AWARENESS</h3>
                            <p className="text-white/80 font-medium leading-relaxed">
                                Our drivers plan each safari around current park conditions, recent wildlife activity and their local knowledge of Yala.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-sunset-gold">PARK RESPECT</h3>
                            <p className="text-white/80 font-medium leading-relaxed">
                                We operate within national park rules and encourage responsible wildlife viewing.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-sunset-gold">PICKUP COORDINATION</h3>
                            <p className="text-white/80 font-medium leading-relaxed">
                                We coordinate confirmed pickup arrangements so guests know where and when their safari begins.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-sunset-gold">DIRECT COMMUNICATION</h3>
                            <p className="text-white/80 font-medium leading-relaxed">
                                Questions before the safari can be handled directly through our booking and WhatsApp channels.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. PROCESS ──────────────────────────── */}
            <section className="py-20 md:py-32 bg-warm-sand/10 border-b border-warm-sand/50">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                    <span className="text-sunset-gold font-bold text-sm tracking-widest uppercase mb-4 block">How It Works</span>
                    <h2 className="text-3xl md:text-5xl font-black text-deep-charcoal leading-tight mb-16">
                        From Your First Message to Safari Day
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 text-left relative">
                        {PROCESS_STEPS.map((step, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col bg-white rounded-3xl p-8 shadow-sm border border-warm-sand/60">
                                <span className="text-4xl font-black text-warm-sand mb-6">
                                    {step.num}
                                </span>
                                <h3 className="text-xl font-black text-deep-charcoal mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-safari-brown/80 font-medium leading-relaxed text-sm">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 7. MEET THE JEEPS ───────────────────── */}
            {SAFARI_VEHICLES.length > 0 && (
                <section className="py-20 md:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6 md:px-12">
                        <h2 className="text-3xl md:text-5xl font-black text-deep-charcoal leading-tight mb-16">
                            Your Safari Vehicle
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {SAFARI_VEHICLES.map(vehicle => (
                                <div key={vehicle.id} className="rounded-3xl border border-warm-sand/50 overflow-hidden bg-warm-sand/10">
                                    <div className="relative aspect-video">
                                        <Image src={vehicle.image} alt={vehicle.modelInfo} fill className="object-cover" />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-black text-deep-charcoal mb-4">{vehicle.modelInfo}</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-safari-brown/80 font-medium">
                                            {vehicle.features.map(f => <li key={f}>{f}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── 8. RESPONSIBLE SAFARI ───────────────── */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <span className="text-sunset-gold font-bold text-sm tracking-widest uppercase mb-4 block">Responsible Safari</span>
                        <h2 className="text-3xl md:text-5xl font-black text-deep-charcoal leading-tight">
                            Respecting Yala, Wildlife and Our Guests
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-warm-sand/20 rounded-3xl p-8 border border-warm-sand/50">
                            <h3 className="text-xl font-bold text-deep-charcoal mb-4">Follow Park Rules</h3>
                            <p className="text-safari-brown/80 font-medium leading-relaxed">
                                Our safari experiences operate according to applicable national park rules and instructions.
                            </p>
                        </div>
                        <div className="bg-warm-sand/20 rounded-3xl p-8 border border-warm-sand/50">
                            <h3 className="text-xl font-bold text-deep-charcoal mb-4">Respect Wildlife</h3>
                            <p className="text-safari-brown/80 font-medium leading-relaxed">
                                We encourage responsible viewing without promising or forcing wildlife encounters.
                            </p>
                        </div>
                        <div className="bg-warm-sand/20 rounded-3xl p-8 border border-warm-sand/50">
                            <h3 className="text-xl font-bold text-deep-charcoal mb-4">Clear Pickup Planning</h3>
                            <p className="text-safari-brown/80 font-medium leading-relaxed">
                                Pickup details are confirmed before the safari so guests know what to expect.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 9. MOMENTS FROM YALA ────────────────── */}
            {GALLERY_IMAGES.length > 0 && (
                <section className="py-20 md:py-32 bg-deep-charcoal text-white">
                    <div className="max-w-7xl mx-auto px-6 md:px-12">
                        <h2 className="text-3xl md:text-5xl font-black mb-12">Moments From Yala</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {GALLERY_IMAGES.map((src, i) => (
                                <div key={i} className="relative aspect-square rounded-2xl overflow-hidden bg-white/5">
                                    <Image src={src} alt="Yala safari moment" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── 10. REAL LOCATION & WHAT WE WON'T PROMISE */}
            <section className="py-20 md:py-32 bg-warm-sand/20 border-t border-warm-sand">
                <div className="max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-black text-deep-charcoal mb-6">Based Near Yala</h2>
                        <p className="text-safari-brown/80 text-lg leading-relaxed font-medium mb-6">
                            Yala Safari Jeeps operates from the Yala/Tissamaharama area, allowing us to coordinate safari planning and local pickup arrangements close to the national park.
                        </p>
                        <address className="not-italic text-sm font-semibold text-deep-charcoal p-6 bg-white rounded-2xl border border-warm-sand">
                            <span className="block mb-2 font-bold text-sunset-gold">Registered Office</span>
                            {siteConfig.contact.address.split(', ').map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))}
                        </address>
                    </div>

                    <div>
                        <h2 className="text-3xl font-black text-deep-charcoal mb-6">What You Can Expect From Us</h2>
                        <ul className="list-disc pl-5 space-y-3 font-medium text-safari-brown/80 mb-8">
                            <li>Clear information and pricing</li>
                            <li>Confirmed safari arrangements</li>
                            <li>Local pickup coordination</li>
                            <li>Respectful wildlife viewing</li>
                            <li>Direct line communication</li>
                        </ul>
                        <div className="bg-olive-green/10 text-olive-green p-6 rounded-2xl border border-olive-green/20">
                            <p className="font-semibold text-sm leading-relaxed">
                                Please Note: Yala is a natural wildlife environment, so sightings of any particular animal can never be guaranteed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 11. FINAL CTA ───────────────────────── */}
            <section className="bg-white py-24 md:py-32 text-center">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <h2 className="text-4xl md:text-6xl font-black text-deep-charcoal tracking-tight leading-tight mb-8">
                        Ready to Experience <br />
                        <span className="text-sunset-gold">Yala With Us?</span>
                    </h2>
                    <p className="text-safari-brown/70 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
                        Tell us your preferred date, group size and pickup location, and we'll help you plan your Yala safari.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/safari"
                            className="px-10 py-5 bg-deep-charcoal text-white font-black text-sm tracking-widest uppercase rounded-full shadow-xl hover:scale-[1.02] transition-transform w-full sm:w-auto"
                        >
                            Plan Your Safari
                        </Link>
                        <a
                            href={siteConfig.contact.whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white font-black text-sm tracking-widest uppercase rounded-full shadow-xl hover:scale-[1.02] transition-transform w-full sm:w-auto"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
