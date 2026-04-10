"use client";

import { useState } from "react";

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section className="bg-white py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Info */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-black text-deep-charcoal mb-8 leading-tight">
              Inquire About <br/>
              <span className="text-olive-green italic font-serif font-light">Availability</span>
            </h2>
            <p className="text-lg text-safari-brown/70 leading-relaxed mb-10">
              Please share your preferred date and safari type. Our concierge team will confirm availability and send you a formal confirmation within 2 hours.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Direct WhatsApp", value: "+94 72 211 22 22", color: "bg-[#25D366]" },
                { title: "Email Inquiry", value: "booking@yalasafarijeeps.com", color: "bg-deep-charcoal" },
                { title: "Instant Booking", value: "24/7 Availability Trackers", color: "bg-sunset-gold" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center text-white shadow-lg`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-safari-brown/40">{item.title}</span>
                    <span className="block font-bold text-lg text-deep-charcoal">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="bg-warm-sand/20 rounded-[3rem] p-8 md:p-12 border border-warm-sand shadow-2xl relative overflow-hidden">
              
              {status === "success" ? (
                <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-olive-green rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-deep-charcoal mb-4">Request Sent!</h3>
                  <p className="text-safari-brown/70 font-medium">We've received your request. Check your inbox shortly.</p>
                  <button onClick={() => setStatus("idle")} className="mt-8 text-sunset-gold font-bold uppercase tracking-widest text-sm underline underline-offset-8">Send Another Request</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-safari-brown/60 ml-2">Your Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full bg-white border border-warm-sand/50 rounded-2xl px-6 py-4 outline-none focus:border-sunset-gold transition-colors font-medium" />
                    </div>
                    <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-safari-brown/60 ml-2">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-white border border-warm-sand/50 rounded-2xl px-6 py-4 outline-none focus:border-sunset-gold transition-colors font-medium" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-safari-brown/60 ml-2">Safari Type</label>
                      <select required className="w-full bg-white border border-warm-sand/50 rounded-2xl px-6 py-4 outline-none focus:border-sunset-gold transition-colors font-bold text-deep-charcoal">
                        <option>Morning Safari</option>
                        <option>Evening Safari</option>
                        <option>Full Day Safari</option>
                        <option>Private Specialized Tour</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-safari-brown/60 ml-2">Safari Date</label>
                      <input required type="date" className="w-full bg-white border border-warm-sand/50 rounded-2xl px-6 py-4 outline-none focus:border-sunset-gold transition-colors font-bold text-deep-charcoal" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-safari-brown/60 ml-2">Inquiry & Special Requests</label>
                    <textarea placeholder="Tell us about group size, dietary needs, or specific wildlife interests..." rows={4} className="w-full bg-white border border-warm-sand/50 rounded-2xl px-6 py-4 outline-none focus:border-sunset-gold transition-colors font-medium resize-none" />
                  </div>

                  <button 
                    disabled={status === "submitting"}
                    className="w-full py-6 bg-deep-charcoal text-white font-black text-sm tracking-[.3em] uppercase rounded-2xl shadow-xl hover:bg-olive-green transition-all duration-500 disabled:opacity-50"
                  >
                    {status === "submitting" ? "Processing..." : "Submit Inquiry"}
                  </button>
                  <p className="text-[10px] text-center text-safari-brown/40 font-bold uppercase tracking-widest">NO INSTANT PAYMENT REQUIRED — WE CONFIRM FIRST</p>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
