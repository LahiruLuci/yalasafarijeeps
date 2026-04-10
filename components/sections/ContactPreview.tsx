"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPreview() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid format";
    }
    if (!formData.message.trim()) newErrors.message = "Please share your inquiry details";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Reset success message after delay
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="bg-white py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sunset-gold font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
            Plan Your Safari
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-deep-charcoal mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-safari-brown/80 font-medium">
            Have questions about our custom tours or need help planning your trip to Yala? Our wildlife experts are available 24/7.
          </p>
        </div>

        {/* The Edge-to-Edge Floating Container */}
        <div className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
          
          {/* Left Column - Contact Form with Image Background */}
          <div className="w-full lg:w-1/2 relative p-8 md:p-14 lg:p-16 flex flex-col justify-center">
            
            {/* Dark Cinematic Background */}
            <div className="absolute inset-0">
              <Image
                src="/images/contact-bg.jpg"
                alt="Contact Yala Safari"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-deep-charcoal/90 backdrop-blur-sm" />
            </div>

            <div className="relative z-10 w-full">
              {isSuccess ? (
                <div className="flex flex-col items-center text-center py-20 animate-in zoom-in duration-500">
                   <div className="w-16 h-16 rounded-full bg-sunset-gold flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-deep-charcoal"><polyline points="20 6 9 17 4 12"/></svg>
                   </div>
                   <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Message Transmitted</h3>
                   <p className="text-warm-sand/60 italic font-medium">A wildlife expert will reach out within 2 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-extrabold text-white mb-2">Drop a Message</h3>
                  <p className="text-warm-sand/80 mb-8 font-medium">We usually respond within a few hours.</p>

                  <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center pr-2">
                           <label htmlFor="name" className={`text-xs font-bold uppercase tracking-wider transition-colors ${errors.name ? 'text-red-400' : 'text-warm-sand'}`}>Your Name</label>
                           {errors.name && <span className="text-[10px] font-black text-red-400/80 uppercase mb-0.5">{errors.name}</span>}
                        </div>
                        <input 
                          type="text" 
                          id="name" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="John Doe" 
                          className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-colors ${errors.name ? 'border-red-400/50 focus:ring-red-400/50' : 'border-white/20 focus:border-sunset-gold focus:ring-sunset-gold'}`}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center pr-2">
                           <label htmlFor="email" className={`text-xs font-bold uppercase tracking-wider transition-colors ${errors.email ? 'text-red-400' : 'text-warm-sand'}`}>Email Address</label>
                           {errors.email && <span className="text-[10px] font-black text-red-400/80 uppercase mb-0.5">{errors.email}</span>}
                        </div>
                        <input 
                          type="email" 
                          id="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="john@example.com" 
                          className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-colors ${errors.email ? 'border-red-400/50 focus:ring-red-400/50' : 'border-white/20 focus:border-sunset-gold focus:ring-sunset-gold'}`}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-xs font-bold text-warm-sand uppercase tracking-wider">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="Safari Inquiry" 
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-sunset-gold focus:border-sunset-gold transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center pr-2">
                         <label htmlFor="message" className={`text-xs font-bold uppercase tracking-wider transition-colors ${errors.message ? 'text-red-400' : 'text-warm-sand'}`}>Your Message</label>
                         {errors.message && <span className="text-[10px] font-black text-red-400/80 uppercase mb-0.5">{errors.message}</span>}
                      </div>
                      <textarea 
                        id="message" 
                        rows={4} 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your adventure..." 
                        className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-colors resize-none ${errors.message ? 'border-red-400/50 focus:ring-red-400/50' : 'border-white/20 focus:border-sunset-gold focus:ring-sunset-gold'}`}
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="mt-4 w-full bg-sunset-gold text-deep-charcoal font-black text-sm tracking-widest uppercase py-4 rounded-lg hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-xl disabled:grayscale disabled:opacity-50"
                    >
                      {isSubmitting ? "Transmitting..." : "Send Message"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Map & Floating Contact Info */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
            {/* The Google Map iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126938.86877028913!2d81.36506306540673!3d6.390099491689369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5d105234125b3%3A0xeab50dcebcfe3fd6!2sYala%20National%20Park!5e0!3m2!1sen!2slk!4v1698765432100!5m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Yala National Park Location Map"
            ></iframe>

            {/* Glassmorphism Floating Info Card */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl border border-white/50 flex flex-col gap-6">
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-olive-green text-soft-beige flex items-center justify-center flex-shrink-0 group-hover:bg-sunset-gold transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-safari-brown/70 mb-0.5">Location</span>
                  <span className="block text-deep-charcoal font-bold">Yala National Park, Sri Lanka</span>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-olive-green text-soft-beige flex items-center justify-center flex-shrink-0 group-hover:bg-sunset-gold transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-safari-brown/70 mb-0.5">Phone (24/7)</span>
                  <a href="tel:+94722112222" className="block text-deep-charcoal font-bold hover:text-sunset-gold transition-colors">+94 72 211 22 22</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-olive-green text-soft-beige flex items-center justify-center flex-shrink-0 group-hover:bg-sunset-gold transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-safari-brown/70 mb-0.5">Email</span>
                  <a href="mailto:info@yalasafarijeeps.com" className="block text-deep-charcoal font-bold hover:text-sunset-gold transition-colors">info@yalasafarijeeps.com</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
