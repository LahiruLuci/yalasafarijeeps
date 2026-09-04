"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const faqs = [
    {
        q: "How can I book a safari?",
        a: "Send us a WhatsApp message or fill in the inquiry form on this page. Tell us your preferred date, package, and pickup location and we will confirm availability.",
    },
    {
        q: "Do I need to pay before confirmation?",
        a: "No. You can send an inquiry without any upfront payment. We will confirm your safari details and share pricing by WhatsApp.",
    },
    {
        q: "Is hotel pickup included?",
        a: "Complimentary pickup and drop-off are available from selected locations around Yala, Tissamaharama, Kirinda and Kataragama. Transfers from more distant locations can be arranged at an additional charge.",
    },
    {
        q: "Can I book through WhatsApp?",
        a: "Yes — WhatsApp is the fastest way to reach us. Message us at +61 416 482 262 and we will reply within 2 hours.",
    },
    {
        q: "What information should I send?",
        a: "Share your safari date, preferred package (morning, evening, or tailor-made safari), number of adults and children, and your pickup location. That is all we need to get started.",
    },
    {
        q: "How fast do you reply?",
        a: "We typically reply within 2 hours via WhatsApp. For urgent inquiries, call us directly at +61 416 482 262.",
    },
];

/* ─────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────── */
function ContactInquiryForm() {
    const [formData, setFormData] = useState({
        name: "",
        whatsapp: "",
        email: "",
        date: "",
        safariPackage: "Morning Safari",
        pickupLocation: "",
        message: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const today = new Date().toISOString().split("T")[0];

    const validate = () => {
        const e: Record<string, string> = {};
        if (!formData.name.trim()) e.name = "Full name is required";
        if (!formData.whatsapp.trim()) e.whatsapp = "WhatsApp number is required";
        if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email))
            e.email = "Invalid email format";
        if (!formData.message.trim()) e.message = "Please add a message or your safari details";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const buildWAMessage = () => {
        const text = `Hello Yala Safari Jeeps, I would like to make an inquiry.

Name: ${formData.name}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email || "Not provided"}
Safari Package: ${formData.safariPackage}
Preferred Date: ${formData.date || "Flexible"}
Pickup Location: ${formData.pickupLocation || "Not provided"}
Message: ${formData.message}

Please contact me at your earliest convenience.`;
        return `https://wa.me/61416482262?text=${encodeURIComponent(text)}`;
    };

    const handleWhatsApp = () => {
        if (!validate()) return;
        trackEvent("generate_lead", {
            lead_type: "contact",
            safari_package: formData.safariPackage.toLowerCase().replace(/\s+/g, '_'),
            contact_method: "whatsapp",
            page_path: "/contact"
        });
        window.open(buildWAMessage(), "_blank");
        setStatus("success");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setStatus("submitting");

        try {
            await fetch("https://formsubmit.co/ajax/info@yalasafarijeeps.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    _subject: "New Safari Inquiry from Website",
                    ...formData
                })
            });
            trackEvent("generate_lead", {
                lead_type: "contact",
                safari_package: formData.safariPackage.toLowerCase().replace(/\s+/g, '_'),
                contact_method: "form",
                page_path: "/contact"
            });
            setStatus("success");
        } catch (error) {
            console.error("Form submission error", error);
            setStatus("idle");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-white rounded-3xl p-10 text-center shadow-xl border border-warm-sand/60">
                <div className="w-20 h-20 bg-olive-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>
                <h3 className="text-2xl font-black text-deep-charcoal mb-3">Inquiry Sent!</h3>
                <p className="text-safari-brown/70 font-medium mb-8 max-w-sm mx-auto">
                    We will get back to you on WhatsApp within 2 hours. For urgent help, call us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://wa.me/61416482262"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-event="whatsapp_click"
                        className="bg-[#25D366] text-white px-8 py-4 rounded-full font-black text-sm tracking-widest uppercase hover:scale-105 transition-all"
                    >
                        Open WhatsApp
                    </a>
                    <button
                        onClick={() => setStatus("idle")}
                        className="text-safari-brown/50 font-bold text-sm uppercase tracking-widest hover:text-sunset-gold transition-colors"
                    >
                        Send Another
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-warm-sand/60 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-safari-brown/60">Full Name *</label>
                    <input
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full border ${errors.name ? "border-red-400" : "border-warm-sand/60"} rounded-xl px-4 py-3 outline-none focus:border-sunset-gold transition-all font-medium text-deep-charcoal`}
                    />
                    {errors.name && <p className="text-[10px] text-red-500 font-bold">{errors.name}</p>}
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-safari-brown/60">WhatsApp Number *</label>
                    <input
                        type="tel"
                        placeholder="+1 234 567 890"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className={`w-full border ${errors.whatsapp ? "border-red-400" : "border-warm-sand/60"} rounded-xl px-4 py-3 outline-none focus:border-sunset-gold transition-all font-medium text-deep-charcoal`}
                    />
                    {errors.whatsapp && <p className="text-[10px] text-red-500 font-bold">{errors.whatsapp}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-safari-brown/60">Email (Optional)</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full border ${errors.email ? "border-red-400" : "border-warm-sand/60"} rounded-xl px-4 py-3 outline-none focus:border-sunset-gold transition-all font-medium text-deep-charcoal`}
                    />
                    {errors.email && <p className="text-[10px] text-red-500 font-bold">{errors.email}</p>}
                </div>

                {/* Safari Date */}
                <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-safari-brown/60">Safari Date (Optional)</label>
                    <input
                        type="date"
                        min={today}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full border border-warm-sand/60 rounded-xl px-4 py-3 outline-none focus:border-sunset-gold transition-all font-medium text-deep-charcoal"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Safari Package */}
                <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-safari-brown/60">Safari Package</label>
                    <select
                        value={formData.safariPackage}
                        onChange={(e) => setFormData({ ...formData, safariPackage: e.target.value })}
                        className="w-full border border-warm-sand/60 rounded-xl px-4 py-3 outline-none focus:border-sunset-gold transition-all font-medium text-deep-charcoal appearance-none bg-white"
                    >
                        <option>Morning Safari</option>
                        <option>Evening Safari</option>
                        <option>Tailor-Made Safari</option>
                        <option>Not Sure Yet</option>
                    </select>
                </div>

                {/* Pickup Location */}
                <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-safari-brown/60">Pickup Location</label>
                    <input
                        type="text"
                        placeholder="e.g. Tissamaharama Hotel"
                        value={formData.pickupLocation}
                        onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                        className="w-full border border-warm-sand/60 rounded-xl px-4 py-3 outline-none focus:border-sunset-gold transition-all font-medium text-deep-charcoal"
                    />
                </div>
            </div>

            {/* Message */}
            <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-safari-brown/60">Your Message *</label>
                <textarea
                    rows={4}
                    placeholder="Tell us your safari date, number of travelers, pickup location, or any questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full border ${errors.message ? "border-red-400" : "border-warm-sand/60"} rounded-xl px-4 py-3 outline-none focus:border-sunset-gold transition-all font-medium text-deep-charcoal resize-none`}
                />
                {errors.message && <p className="text-[10px] text-red-500 font-bold">{errors.message}</p>}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                    type="button"
                    onClick={handleWhatsApp}
                    data-event="whatsapp_click"
                    className="flex-1 flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white font-black text-sm tracking-widest uppercase rounded-2xl shadow-lg hover:scale-[1.02] transition-all"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.668.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send via WhatsApp
                </button>
                <button
                    type="submit"
                    disabled={status === "submitting"}
                    data-event="contact_form_submit"
                    className="flex-1 py-4 border-2 border-deep-charcoal text-deep-charcoal font-black text-sm tracking-widest uppercase rounded-2xl hover:bg-deep-charcoal hover:text-white transition-all disabled:opacity-50"
                >
                    {status === "submitting" ? "Sending…" : "Send Inquiry"}
                </button>
            </div>
            <p className="text-[10px] text-safari-brown/40 font-bold uppercase tracking-widest text-center">
                No payment required — we confirm availability first.
            </p>
        </form>
    );
}

/* ─────────────────────────────────────────────
   FAQ ACCORDION
───────────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-warm-sand/60">
            <button
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <span className="font-bold text-deep-charcoal text-base group-hover:text-sunset-gold transition-colors">{q}</span>
                <span className={`text-sunset-gold transition-transform duration-300 flex-shrink-0 ${open ? "rotate-45" : ""}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </span>
            </button>
            {open && (
                <p className="pb-5 text-safari-brown/80 font-medium leading-relaxed text-sm">{a}</p>
            )}
        </div>
    );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export default function ContactPageClient() {
    return (
        <>
            {/* ── 1. HERO ───────────────────────────────── */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-deep-charcoal">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/our-vision-image.webp"
                        alt="Yala Safari Contact"
                        fill
                        priority
                        className="object-cover opacity-60 brightness-75 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal/60 via-transparent to-deep-charcoal/80" />
                </div>

                <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 text-center">
                    <span className="text-sunset-gold font-bold text-xs tracking-[0.5em] uppercase mb-6 block animate-fade-in-up">
                        Get in Touch
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-6 animate-fade-in-up">
                        Contact<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-gold to-warm-sand">
                            Yala Safari Jeeps
                        </span>
                    </h1>
                    <p className="text-warm-sand/70 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up">
                        Plan your private Yala safari with our team. Message us on WhatsApp, call, or send an inquiry — we will help you confirm your safari date, pickup location, and package.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/61416482262"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-event="whatsapp_click"
                            className="flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white font-black text-sm tracking-widest uppercase rounded-full shadow-xl hover:scale-105 transition-all"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.668.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chat on WhatsApp
                        </a>
                        <a
                            href="tel:+61416482262"
                            data-event="phone_click"
                            className="flex items-center justify-center gap-3 px-8 py-5 bg-white/10 border border-white/20 text-white font-black text-sm tracking-widest uppercase rounded-full hover:bg-white/20 transition-all"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Call Now
                        </a>
                    </div>
                </div>
            </section>

            {/* ── 2. QUICK CONTACT CARDS ─────────────────── */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* WhatsApp Card */}
                        <a
                            href="https://wa.me/61416482262"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-event="whatsapp_click"
                            className="group flex flex-col items-center text-center p-8 rounded-3xl border-2 border-warm-sand/60 hover:border-[#25D366] hover:shadow-xl transition-all duration-300 bg-warm-sand/10 hover:bg-[#25D366]/5"
                        >
                            <div className="w-16 h-16 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#25D366]/20 transition-colors">
                                <svg className="w-8 h-8 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.668.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-safari-brown/50 mb-2">WhatsApp</span>
                            <p className="font-black text-deep-charcoal text-lg mb-4">+61 416 482 262</p>
                            <span className="w-full py-3 bg-[#25D366] text-white font-black text-xs tracking-widest uppercase rounded-full group-hover:scale-105 transition-transform">
                                Chat on WhatsApp
                            </span>
                        </a>

                        {/* Call Card */}
                        <a
                            href="tel:+61416482262"
                            data-event="phone_click"
                            className="group flex flex-col items-center text-center p-8 rounded-3xl border-2 border-warm-sand/60 hover:border-sunset-gold hover:shadow-xl transition-all duration-300 bg-warm-sand/10 hover:bg-sunset-gold/5"
                        >
                            <div className="w-16 h-16 bg-sunset-gold/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-sunset-gold/20 transition-colors">
                                <svg className="w-8 h-8 text-sunset-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-safari-brown/50 mb-2">Direct Call</span>
                            <p className="font-black text-deep-charcoal text-lg mb-4">+61 416 482 262</p>
                            <span className="w-full py-3 bg-sunset-gold text-deep-charcoal font-black text-xs tracking-widest uppercase rounded-full group-hover:scale-105 transition-transform">
                                Call Now
                            </span>
                        </a>

                        {/* Email Card */}
                        <a
                            href="mailto:info@yalasafarijeeps.com"
                            data-event="email_click"
                            className="group flex flex-col items-center text-center p-8 rounded-3xl border-2 border-warm-sand/60 hover:border-olive-green hover:shadow-xl transition-all duration-300 bg-warm-sand/10 hover:bg-olive-green/5"
                        >
                            <div className="w-16 h-16 bg-olive-green/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-olive-green/20 transition-colors">
                                <svg className="w-8 h-8 text-olive-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-safari-brown/50 mb-2">Email</span>
                            <p className="font-black text-deep-charcoal text-base mb-4 break-all">info@yalasafarijeeps.com</p>
                            <span className="w-full py-3 bg-olive-green text-white font-black text-xs tracking-widest uppercase rounded-full group-hover:scale-105 transition-transform">
                                Send Email
                            </span>
                        </a>

                    </div>
                </div>
            </section>

            {/* ── 3. INQUIRY FORM ────────────────────────── */}
            <section className="bg-warm-sand py-16 md:py-24" id="inquiry-form">
                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Left: context */}
                        <div className="lg:col-span-4">
                            <span className="text-sunset-gold font-bold text-xs tracking-[0.5em] uppercase mb-4 block">Send an Inquiry</span>
                            <h2 className="text-4xl md:text-5xl font-black text-deep-charcoal leading-tight tracking-tighter mb-6">
                                Tell Us Your Plan
                            </h2>
                            <p className="text-safari-brown/80 font-medium leading-relaxed mb-8">
                                Tell us your safari date, pickup location, and number of travelers. We will confirm availability by WhatsApp.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { label: "Response time", value: "Within 2 hours via WhatsApp" },
                                    { label: "No payment needed", value: "We confirm availability first" },
                                    { label: "Hotel pickup", value: "Available from nearby areas" },
                                    { label: "Safari area", value: "Yala National Park, Sri Lanka" },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-sunset-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-black text-deep-charcoal text-xs uppercase tracking-widest">{item.label}</p>
                                            <p className="text-safari-brown/70 text-sm font-medium">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="lg:col-span-8">
                            <ContactInquiryForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. MAP ─────────────────────────────────── */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-4">
                            <span className="text-sunset-gold font-bold text-xs tracking-[0.5em] uppercase mb-4 block">Our Location</span>
                            <h2 className="text-3xl md:text-4xl font-black text-deep-charcoal leading-tight tracking-tighter mb-4">
                                Based Near Yala National Park
                            </h2>
                            <p className="text-safari-brown/70 font-medium leading-relaxed mb-6">
                                We operate near the entrance of Yala National Park in Southern Sri Lanka. Hotel pickup is available from Tissamaharama, Yala, Kataragama, Ella, and surrounding areas.
                            </p>
                            <div className="space-y-3">
                                {[
                                    { label: "Yala Gate 1", dist: "5 min drive" },
                                    { label: "Kataragama City", dist: "20 min drive" },
                                    { label: "Tissamaharama", dist: "15 min drive" },
                                ].map((loc) => (
                                    <div key={loc.label} className="flex items-center justify-between p-4 bg-warm-sand/40 rounded-2xl">
                                        <span className="font-bold text-deep-charcoal text-sm">{loc.label}</span>
                                        <span className="text-xs font-black text-sunset-gold uppercase tracking-widest">{loc.dist}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15871.328328148943!2d81.28294747585642!3d6.21639071060965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae697d02ead370b%3A0xe9f798889a244465!2sYala%20National%20Park!5e0!3m2!1sen!2slk!4v1712213000000!5m2!1sen!2slk"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Yala National Park Map"
                                />
                                <div className="absolute top-4 right-4 py-2 px-5 rounded-full bg-white/90 shadow-lg border border-white/40 flex items-center gap-2 z-10">
                                    <div className="w-2 h-2 rounded-full bg-sunset-gold animate-ping" />
                                    <span className="text-deep-charcoal font-black text-xs tracking-widest uppercase">Yala, Sri Lanka</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. FAQ ─────────────────────────────────── */}
            <section className="bg-warm-sand py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <span className="text-sunset-gold font-bold text-xs tracking-[0.5em] uppercase mb-4 block">Common Questions</span>
                        <h2 className="text-4xl md:text-5xl font-black text-deep-charcoal tracking-tighter">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="bg-white rounded-3xl shadow-lg border border-warm-sand/60 px-8 py-4">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} q={faq.q} a={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 6. FINAL CTA ────────────────────────────── */}
            <section className="bg-deep-charcoal py-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sunset-gold opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6">
                        Ready to Plan Your<br />
                        <span className="text-sunset-gold">Yala Safari?</span>
                    </h2>
                    <p className="text-warm-sand/60 text-lg font-medium mb-10">
                        Use WhatsApp for the fastest response. Our team is ready to confirm your safari date and details.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/booking"
                            data-event="booking_click"
                            className="px-10 py-5 bg-sunset-gold text-deep-charcoal font-black text-sm tracking-widest uppercase rounded-full shadow-[0_20px_50px_rgba(208,122,63,0.3)] hover:scale-105 transition-all"
                        >
                            Book Safari
                        </Link>
                        <a
                            href="https://wa.me/61416482262"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-event="whatsapp_click"
                            className="px-10 py-5 bg-white/10 border border-white/20 text-white font-black text-sm tracking-widest uppercase rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
