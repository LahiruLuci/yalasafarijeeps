import { Metadata } from "next";
import { hotels } from "@/data/hotels";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, MapPin, Users, Info, CalendarDays, Key, Image as ImageIcon } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema"; // Assuming standard breadcrumb usage

// Next.js 15+ parameter structure
type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const hotel = hotels.find((h) => h.slug === resolvedParams.slug);

    if (!hotel) {
        return { title: "Hotel Not Found" };
    }

    return {
        title: hotel.seoTitle,
        description: hotel.seoDescription,
        alternates: {
            canonical: `https://yalasafarijeeps.com/stay/${hotel.slug}`,
        },
    };
}

export async function generateStaticParams() {
    return hotels.map((hotel) => ({
        slug: hotel.slug,
    }));
}

export default async function HotelDetailPage({ params }: Props) {
    const resolvedParams = await params;
    const hotel = hotels.find((h) => h.slug === resolvedParams.slug);

    if (!hotel) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-warm-sand/20">
            {/* JSON-LD Schema (simplified for informative purpose) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yalasafarijeeps.com" },
                            { "@type": "ListItem", "position": 2, "name": "Places to Stay", "item": "https://yalasafarijeeps.com/stay" },
                            { "@type": "ListItem", "position": 3, "name": hotel.name, "item": `https://yalasafarijeeps.com/stay/${hotel.slug}` }
                        ]
                    }),
                }}
            />

            {/* 1. HERO SECTION */}
            <section className="relative w-full h-[60vh] min-h-[500px] bg-deep-charcoal flex items-center justify-center overflow-hidden">
                {/* Placeholder for Hero Image */}
                <div className="absolute inset-0 z-0 bg-deep-charcoal border-b border-white/10 flex items-center justify-center">
                    {/* // Add hotel images here later */}
                    <div className="text-white/20 flex flex-col items-center">
                        <ImageIcon size={48} className="mb-4 opacity-50" />
                        <span className="font-bold tracking-widest text-sm uppercase">HotelHeroImage Placeholder</span>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/60 to-transparent z-10" />

                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
                    <span className="inline-block px-4 py-1.5 bg-sunset-gold/20 text-sunset-gold border border-sunset-gold/30 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-6">
                        {hotel.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                        {hotel.name}
                    </h1>
                    <p className="text-soft-beige/80 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        {hotel.shortDescription}
                    </p>
                </div>
            </section>

            {/* 2. HOTEL OVERVIEW & 6. LOCATION SECTION */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-deep-charcoal">
                            About {hotel.name}
                        </h2>
                        <p className="text-safari-brown/80 text-lg leading-relaxed font-medium">
                            {hotel.description}
                        </p>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-warm-sand/50 sticky top-32">
                            <h3 className="text-xl font-black text-deep-charcoal mb-6 border-b border-warm-sand pb-4">
                                Staying Near Yala National Park
                            </h3>
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-10 h-10 rounded-full bg-olive-green/10 flex flex-shrink-0 items-center justify-center text-olive-green mt-1">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-deep-charcoal mb-1">General Location</h4>
                                    <p className="text-safari-brown/70 text-sm font-medium">{hotel.location}</p>
                                </div>
                            </div>
                            <div className="bg-warm-sand/30 rounded-2xl p-5 border border-warm-sand">
                                <div className="flex items-start gap-3">
                                    <Info size={18} className="text-sunset-gold mt-0.5 flex-shrink-0" />
                                    <p className="text-xs text-safari-brown/80 leading-relaxed italic">
                                        Accommodation information is provided to help travellers plan their visit. Yala Safari Jeeps is not presented as the official booking agent or representative of this property unless otherwise stated.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHY STAY HERE FOR A YALA SAFARI? */}
            <section className="py-20 md:py-32 bg-white border-y border-warm-sand">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-deep-charcoal mb-6">
                            Why Stay Here For A Yala Safari?
                        </h2>
                        <p className="text-safari-brown/70 text-lg">
                            Understanding why {hotel.name} could be the perfect anchor point for your wildlife expedition.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {hotel.safariBenefits.map((benefit, idx) => (
                            <div key={idx} className="bg-warm-sand/20 rounded-3xl p-8 border border-warm-sand hover:shadow-xl transition-shadow duration-300">
                                <div className="w-12 h-12 bg-sunset-gold/10 rounded-2xl flex items-center justify-center text-sunset-gold mb-6">
                                    <Key size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-deep-charcoal mb-4">{benefit.title}</h3>
                                <p className="text-safari-brown/70 text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FACILITIES & 5. WHO IS THIS STAY GOOD FOR? */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Facilities */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-deep-charcoal mb-8">
                            Verified Facilities
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {hotel.facilities.map((facility, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-olive-green/10 flex items-center justify-center flex-shrink-0 text-olive-green">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="font-medium text-safari-brown/80">{facility}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Best For Tags */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-deep-charcoal mb-8">
                            Who Is This Stay Good For?
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {hotel.bestFor.map((tag, idx) => (
                                <div key={idx} className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-warm-sand shadow-sm text-deep-charcoal font-bold text-sm">
                                    <Users size={16} className="text-sunset-gold" />
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. GALLERY PLACEHOLDER */}
            <section className="py-20 bg-deep-charcoal text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-4">Glimpse the Experience</h2>
                            <p className="text-soft-beige/60">A visual preview of the environment and spaces.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Add hotel images here later - 4 to 6 placeholders */}
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="aspect-square bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center justify-center text-white/20">
                                <ImageIcon size={32} className="mb-2 opacity-50" />
                                <span className="text-xs uppercase tracking-widest font-bold">Gallery Image {item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. SAFARI CONNECTION & 9. HOTEL ENQUIRY SECTION */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Safari Combo Box */}
                    <div className="bg-olive-green rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                        <div className="relative z-10">
                            <CalendarDays className="w-12 h-12 text-sunset-gold mb-6" />
                            <h3 className="text-3xl font-black mb-6">Planning a Yala Safari During Your Stay?</h3>
                            <p className="text-white/80 font-medium leading-relaxed mb-10">
                                Guests staying in the {hotel.location} area can easily arrange premium private safaris with us. We handle your logistics, ensuring your focus remains entirely on the wilderness.
                            </p>
                            <Link
                                href="/booking"
                                className="inline-block bg-sunset-gold text-deep-charcoal px-8 py-4 rounded-full font-black text-sm tracking-widest uppercase hover:scale-105 transition-transform"
                            >
                                Plan My Yala Safari
                            </Link>
                        </div>
                    </div>

                    {/* Hotel Enquiry Box */}
                    <div className="bg-white rounded-[3rem] p-10 md:p-14 border border-warm-sand shadow-xl">
                        <h3 className="text-3xl font-black text-deep-charcoal mb-6">Interested in Staying Here?</h3>
                        <p className="text-safari-brown/80 font-medium leading-relaxed mb-10">
                            If you&apos;re considering this property as part of your Yala trip, contact us and we&apos;ll be happy to help with general stay and safari planning information.
                        </p>
                        <a
                            href={`https://wa.me/61416482262?text=${encodeURIComponent(`Hi, I'm planning a Yala safari and I'm interested in staying at ${hotel.name}. Could you please help me with more information?`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-black text-sm tracking-widest uppercase hover:scale-105 transition-transform"
                        >
                            Ask About This Hotel
                        </a>
                    </div>

                </div>
            </section>

        </main>
    );
}
