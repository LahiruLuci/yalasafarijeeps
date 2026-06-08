"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const safariTypeMap: Record<string, string> = {
  "morning": "Morning Safari",
  "evening": "Evening Safari",
  "full-day": "Full Day Safari",
  "special": "Custom Safari / Not Sure Yet"
};

function BookingFormInner() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    email: "",
    package: "Morning Safari",
    date: "",
    adults: "2",
    children: "0",
    pickupLocation: "",
    country: "",
    preferredTime: "Morning",
    specialRequests: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Autofill Safari Package from URL
  useEffect(() => {
    const type = searchParams.get("type");
    if (type && safariTypeMap[type]) {
      setFormData(prev => ({ ...prev, package: safariTypeMap[type] }));
    }
  }, [searchParams]); // eslint-disable-line react-hooks/exhaustive-deps

  const today = new Date().toISOString().split("T")[0];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "WhatsApp number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.pickupLocation.trim()) newErrors.pickupLocation = "Pickup location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppHref = () => {
    const text = `Hello Yala Safari Jeeps, I would like to book a safari.

Name: ${formData.fullName}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email}
Safari Package: ${formData.package}
Date: ${formData.date}
Time: ${formData.preferredTime}
Adults: ${formData.adults}
Children: ${formData.children}
Pickup Location: ${formData.pickupLocation}
Country: ${formData.country}
Special Request: ${formData.specialRequests || 'None'}

Please confirm availability.`;

    return `https://wa.me/61416482262?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppSubmit = () => {
    if (!validate()) return;
    window.open(generateWhatsAppHref(), '_blank');
    setStatus("success");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // Here you would normally send to an API
    setTimeout(() => setStatus("success"), 1500);
  };

  if (status === "success") {
    return (
      <div className="text-center py-20 animate-in fade-in zoom-in duration-500 bg-white rounded-[3rem] border border-warm-sand shadow-2xl p-12">
        <div className="w-24 h-24 bg-olive-green rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-4xl font-black text-deep-charcoal mb-4 italic">Expedition Logged!</h3>
        <p className="text-safari-brown/70 text-lg font-medium max-w-md mx-auto">
          Your request has been received. We will connect with you on WhatsApp within 2 hours to confirm your private safari.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={generateWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-sm tracking-widest uppercase shadow-xl hover:scale-105 transition-all"
          >
            Chat Now on WhatsApp
          </a>
          <button onClick={() => setStatus("idle")} className="text-safari-brown/40 font-bold uppercase tracking-widest text-xs hover:text-sunset-gold transition-colors">
            Send Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[3rem] p-8 md:p-14 border border-warm-sand shadow-2xl relative overflow-hidden">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-safari-brown/60 ml-2">Full Name *</label>
            <input
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={e => setFormData({ ...formData, fullName: e.target.value })}
              className={`w-full bg-warm-sand/5 border ${errors.fullName ? 'border-red-400' : 'border-warm-sand/50'} rounded-2xl px-6 py-4 outline-none focus:border-sunset-gold transition-all font-medium text-lg`}
            />
            {errors.fullName && <p className="text-[10px] text-red-500 font-bold ml-2">{errors.fullName}</p>}
          </div>

          {/* WhatsApp Number */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-safari-brown/60 ml-2">WhatsApp Number *</label>
            <input
              type="tel"
              placeholder="+1 234 567 890"
              value={formData.whatsapp}
              onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
              className={`w-full bg-warm-sand/5 border ${errors.whatsapp ? 'border-red-400' : 'border-warm-sand/50'} rounded-2xl px-6 py-4 outline-none focus:border-sunset-gold transition-all font-medium text-lg`}
            />
            {errors.whatsapp && <p className="text-[10px] text-red-500 font-bold ml-2">{errors.whatsapp}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-safari-brown/60 ml-2">Email Address *</label>
            <input
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className={`w-full bg-warm-sand/5 border ${errors.email ? 'border-red-400' : 'border-warm-sand/50'} rounded-2xl px-6 py-4 outline-none focus:border-sunset-gold transition-all font-medium text-lg`}
            />
            {errors.email && <p className="text-[10px] text-red-500 font-bold ml-2">{errors.email}</p>}
          </div>

          {/* Country */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-safari-brown/60 ml-2">Country (Optional)</label>
            <input
              type="text"
              placeholder="United Kingdom"
              value={formData.country}
              onChange={e => setFormData({ ...formData, country: e.target.value })}
              className="w-full bg-warm-sand/5 border border-warm-sand/50 rounded-2xl px-6 py-4 outline-none focus:border-sunset-gold transition-all font-medium text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Safari Package */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-safari-brown/60 ml-2">Safari Package *</label>
            <select
              value={formData.package}
              onChange={e => setFormData({ ...formData, package: e.target.value })}
              className="w-full bg-warm-sand/5 border border-warm-sand/50 rounded-2xl px-6 py-4 outline-none focus:border-sunset-gold transition-all font-bold text-deep-charcoal text-lg appearance-none cursor-pointer"
            >
              <option>Morning Safari</option>
              <option>Evening Safari</option>
              <option>Full Day Safari</option>
              <option>Custom Safari / Not Sure Yet</option>
            </select>
          </div>

          {/* Preferred Date */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-safari-brown/60 ml-2">Preferred Date *</label>
            <input
              type="date"
              min={today}
              value={formData.date}
              onChange={e => setFormData({ ...formData, date: e.target.value })}
              className={`w-full bg-warm-sand/5 border ${errors.date ? 'border-red-400' : 'border-warm-sand/50'} rounded-2xl px-6 py-4 outline-none focus:border-sunset-gold transition-all font-bold text-deep-charcoal text-lg`}
            />
            {errors.date && <p className="text-[10px] text-red-500 font-bold ml-2">{errors.date}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Preferred Time */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-safari-brown/60 ml-2">Preferred Time</label>
            <select
              value={formData.preferredTime}
              onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full bg-warm-sand/5 border border-warm-sand/50 rounded-2xl px-6 py-4 outline-none focus:border-sunset-gold transition-all font-bold text-deep-charcoal text-lg"
            >
              <option>Morning</option>
              <option>Evening</option>
              <option>Full Day</option>
              <option>Flexible</option>
            </select>
          </div>

          {/* Adults */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-safari-brown/60 ml-2">Number of Adults</label>
            <select
              value={formData.adults}
              onChange={e => setFormData({ ...formData, adults: e.target.value })}
              className="w-full bg-warm-sand/5 border border-warm-sand/50 rounded-2xl px-6 py-4 outline-none focus:border-sunset-gold transition-all font-bold text-deep-charcoal text-lg"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(num => <option key={num}>{num}</option>)}
            </select>
          </div>

          {/* Children */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-safari-brown/60 ml-2">Number of Children</label>
            <select
              value={formData.children}
              onChange={e => setFormData({ ...formData, children: e.target.value })}
              className="w-full bg-warm-sand/5 border border-warm-sand/50 rounded-2xl px-6 py-4 outline-none focus:border-sunset-gold transition-all font-bold text-deep-charcoal text-lg"
            >
              {[0, 1, 2, 3, 4, 5].map(num => <option key={num}>{num}</option>)}
            </select>
          </div>
        </div>

        {/* Pickup Location */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-safari-brown/60 ml-2">Pickup Location *</label>
          <input
            type="text"
            placeholder="e.g. Tissamaharama, Yala, Ella, or Hotel Name"
            value={formData.pickupLocation}
            onChange={e => setFormData({ ...formData, pickupLocation: e.target.value })}
            className={`w-full bg-warm-sand/5 border ${errors.pickupLocation ? 'border-red-400' : 'border-warm-sand/50'} rounded-2xl px-6 py-4 outline-none focus:border-sunset-gold transition-all font-medium text-lg`}
          />
          {errors.pickupLocation && <p className="text-[10px] text-red-500 font-bold ml-2">{errors.pickupLocation}</p>}
        </div>

        {/* Special Requests */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-safari-brown/60 ml-2">Special Requests (Optional)</label>
          <textarea
            placeholder="Tell us about specific wildlife interests, photography needs, or dietary requirements..."
            value={formData.specialRequests}
            onChange={e => setFormData({ ...formData, specialRequests: e.target.value })}
            rows={4}
            className="w-full bg-warm-sand/5 border border-warm-sand/50 rounded-2xl px-6 py-4 outline-none focus:border-sunset-gold transition-all font-medium text-lg resize-none"
          />
        </div>

        <div className="pt-6 flex flex-col gap-4">
          <button
            type="button"
            onClick={handleWhatsAppSubmit}
            className="w-full py-6 bg-[#25D366] text-white font-black text-sm tracking-[.3em] uppercase rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-4"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.668.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Send Booking Request on WhatsApp
          </button>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-6 border-2 border-deep-charcoal text-deep-charcoal font-black text-sm tracking-[.3em] uppercase rounded-2xl hover:bg-deep-charcoal hover:text-white transition-all duration-500 disabled:opacity-50"
          >
            {status === "submitting" ? "Processing..." : "Submit Inquiry via Email"}
          </button>
          <p className="text-[10px] text-center text-safari-brown/40 font-black uppercase tracking-[0.2em]">No instant payment required — we verify availability first</p>
        </div>
      </form>
    </div>
  );
}

export default function BookingForm() {
  return (
    <section id="booking-form" className="bg-white py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="h-[800px] flex items-center justify-center bg-warm-sand/10 rounded-[3rem] text-safari-brown/40 font-bold uppercase tracking-widest">Warming the Jeep...</div>}>
              <BookingFormInner />
            </Suspense>
          </div>

          {/* Right Column: Trust Card & Info */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="bg-deep-charcoal rounded-[3rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sunset-gold opacity-10 rounded-full -mr-16 -mt-16 blur-2xl"></div>

              <h3 className="text-3xl font-black mb-8 italic text-soft-beige">Why book with us?</h3>

              <div className="space-y-8 mb-12">
                {[
                  { icon: "✓", text: "No payment needed now" },
                  { icon: "✓", text: "Response within 2 hours" },
                  { icon: "✓", text: "Private 4x4 jeep safari" },
                  { icon: "✓", text: "Hotel pickup available" },
                  { icon: "✓", text: "Park permits handled" },
                  { icon: "✓", text: "Local expert guides" },
                  { icon: "✓", text: "WhatsApp confirmation available" }
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-sunset-gold flex items-center justify-center text-deep-charcoal font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                      {point.icon}
                    </div>
                    <span className="text-warm-sand/80 font-bold tracking-tight text-lg">{point.text}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 mb-10">
                <p className="text-sm text-warm-sand/60 font-medium italic leading-relaxed">
                  &quot;Submit your request and our team will confirm availability, pickup time, and final price by WhatsApp.&quot;
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-gold/50 mb-2">Emergency Support</span>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+61416482262" className="text-2xl font-black text-soft-beige hover:text-sunset-gold transition-colors">+61 416 482 262</a>
                    <a href="mailto:info@yalasafarijeeps.com" className="text-warm-sand hover:text-sunset-gold transition-colors font-bold break-all">info@yalasafarijeeps.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

