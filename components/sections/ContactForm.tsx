"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    guests: "1",
    date: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Explorer name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email destination is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.country.trim()) newErrors.country = "Origin country is required";
    if (!formData.message.trim()) newErrors.message = "Please share some adventure details";
    
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
    
    // Reset success message after delay
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="bg-deep-charcoal py-32 md:py-52 relative overflow-hidden group">
      
      {/* ── Background Ambience (Night Mist) ── */}
      <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-[3s]">
         <Image 
           src="/images/cta-bg.jpg" 
           alt="Night Safari Ambience" 
           fill 
           className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[20s]" 
         />
         <div className="absolute inset-0 bg-gradient-to-tr from-deep-charcoal via-deep-charcoal/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
           
           {/* ── Left Pillar: The Reassurance Hook ── */}
           <div className="lg:col-span-5">
              <span className="text-sunset-gold font-bold text-xs tracking-[0.5em] uppercase mb-8 block">
                 Engage the Expedition
              </span>
              <h2 className="text-5xl md:text-7xl font-extrabold text-soft-beige leading-none tracking-tighter mb-10 italic">
                 Start Your <br />
                 <span className="text-white">Custom Journey</span>
              </h2>
              <p className="text-warm-sand/40 text-xl font-medium leading-relaxed italic mb-12 pr-10 border-l border-sunset-gold/30 pl-8">
                 &quot;Crafting the perfect safari requires individual detail. Tell us your vision, and we will translate it into a Yala reality.&quot;
              </p>

              {/* Trust Indicators Row */}
              <div className="space-y-6">
                 {[
                   { label: "Response Time", value: "Typically within 2-4 Hours", active: true },
                   { label: "Data Security", value: "Encrypted Inquiry System", active: false },
                   { label: "Availability", value: "Full Season (2026-2027)", active: false }
                 ].map((stat, i) => (
                   <div key={i} className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${stat.active ? 'bg-sunset-gold animate-pulse' : 'bg-white/10'}`} />
                      <div className="flex flex-col">
                         <span className="text-[10px] text-warm-sand/20 font-black uppercase tracking-[0.2em]">{stat.label}</span>
                         <span className="text-soft-beige font-bold text-sm tracking-tight">{stat.value}</span>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* ── Right Pillar: The Expedition Ledger (The Form) ── */}
           <div className="lg:col-span-7">
              <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/5 p-10 md:p-16 rounded-[4rem] shadow-2xl relative">
                 
                 {/* Success Overlay */}
                 {isSuccess && (
                   <div className="absolute inset-0 z-50 bg-deep-charcoal/90 flex flex-col items-center justify-center text-center p-10 rounded-[4rem] animate-in fade-in duration-500">
                      <div className="w-20 h-20 rounded-full bg-sunset-gold flex items-center justify-center mb-6">
                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-deep-charcoal"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <h3 className="text-3xl font-black text-soft-beige mb-4">Inquiry Received</h3>
                      <p className="text-warm-sand/60 italic font-medium">Your expedition details have been logged in our wild ledger. Our team will reach out within the next 2 hours.</p>
                   </div>
                 )}

                 {/* The Form Engine */}
                 <form className="space-y-10" onSubmit={handleSubmit}>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       {/* Name Field */}
                       <div className="relative group/field">
                          <label className={`text-[10px] font-black uppercase tracking-widest transition-colors ${focused === 'name' ? 'text-sunset-gold' : (errors.name ? 'text-red-500' : 'text-warm-sand/30')}`}>Explorer Name</label>
                          <input 
                            type="text" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            onFocus={() => setFocused('name')} 
                            onBlur={() => setFocused(null)}
                            placeholder="e.g. Alexander Wild"
                            className={`bg-transparent w-full pt-4 pb-2 border-b text-soft-beige placeholder:text-white/5 focus:outline-none transition-colors font-medium text-lg ${errors.name ? 'border-red-500 shadow-[0_1px_10px_rgba(239,68,68,0.2)]' : 'border-white/10 focus:border-sunset-gold'}`}
                          />
                          <div className={`absolute bottom-0 left-0 h-px bg-sunset-gold transition-all duration-700 ${focused === 'name' ? 'w-full' : 'w-0'}`} />
                          {errors.name && <span className="absolute -bottom-6 left-0 text-[10px] font-bold text-red-500 uppercase tracking-tighter animate-pulse">{errors.name}</span>}
                       </div>

                       {/* Email Field */}
                       <div className="relative group/field">
                          <label className={`text-[10px] font-black uppercase tracking-widest transition-colors ${focused === 'email' ? 'text-sunset-gold' : (errors.email ? 'text-red-500' : 'text-warm-sand/30')}`}>Email Destination</label>
                          <input 
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            onFocus={() => setFocused('email')} 
                            onBlur={() => setFocused(null)}
                            placeholder="explorer@expedition.com"
                            className={`bg-transparent w-full pt-4 pb-2 border-b text-soft-beige placeholder:text-white/5 focus:outline-none transition-colors font-medium text-lg ${errors.email ? 'border-red-500 shadow-[0_1px_10px_rgba(239,68,68,0.2)]' : 'border-white/10 focus:border-sunset-gold'}`}
                          />
                          <div className={`absolute bottom-0 left-0 h-px bg-sunset-gold transition-all duration-700 ${focused === 'email' ? 'w-full' : 'w-0'}`} />
                          {errors.email && <span className="absolute -bottom-6 left-0 text-[10px] font-bold text-red-500 uppercase tracking-tighter animate-pulse">{errors.email}</span>}
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       {/* Country Field */}
                       <div className="relative group/field">
                          <label className={`text-[10px] font-black uppercase tracking-widest transition-colors ${focused === 'country' ? 'text-sunset-gold' : (errors.country ? 'text-red-500' : 'text-warm-sand/30')}`}>Origin Country</label>
                          <input 
                            type="text" 
                            value={formData.country}
                            onChange={(e) => setFormData({...formData, country: e.target.value})}
                            onFocus={() => setFocused('country')} 
                            onBlur={() => setFocused(null)}
                            placeholder="e.g. United Kingdom"
                            className={`bg-transparent w-full pt-4 pb-2 border-b text-soft-beige placeholder:text-white/5 focus:outline-none transition-colors font-medium text-lg ${errors.country ? 'border-red-500 shadow-[0_1px_10px_rgba(239,68,68,0.2)]' : 'border-white/10 focus:border-sunset-gold'}`}
                          />
                          <div className={`absolute bottom-0 left-0 h-px bg-sunset-gold transition-all duration-700 ${focused === 'country' ? 'w-full' : 'w-0'}`} />
                          {errors.country && <span className="absolute -bottom-6 left-0 text-[10px] font-bold text-red-500 uppercase tracking-tighter animate-pulse">{errors.country}</span>}
                       </div>

                       {/* Guests Field */}
                       <div className="relative group/field">
                          <label className={`text-[10px] font-black uppercase tracking-widest transition-colors ${focused === 'guests' ? 'text-sunset-gold' : 'text-warm-sand/30'}`}>Number of Guests</label>
                          <select 
                            value={formData.guests}
                            onChange={(e) => setFormData({...formData, guests: e.target.value})}
                            onFocus={() => setFocused('guests')} 
                            onBlur={() => setFocused(null)}
                            className="bg-transparent w-full pt-4 pb-2 border-b border-white/10 text-soft-beige focus:outline-none focus:border-sunset-gold transition-colors font-medium text-lg appearance-none cursor-pointer"
                          >
                             {[1,2,3,4,5,6, '7+'].map(num => <option key={num} value={num} className="bg-deep-charcoal text-soft-beige">{num} Guests</option>)}
                          </select>
                          <div className={`absolute bottom-0 left-0 h-px bg-sunset-gold transition-all duration-700 ${focused === 'guests' ? 'w-full' : 'w-0'}`} />
                          <div className="absolute right-0 bottom-4 pointer-events-none text-sunset-gold/30">
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                          </div>
                       </div>
                    </div>

                    {/* Date Field (Optional) */}
                    <div className="relative group/field">
                       <label className={`text-[10px] font-black uppercase tracking-widest transition-colors ${focused === 'date' ? 'text-sunset-gold' : 'text-warm-sand/30'}`}>Safari Date (Optional)</label>
                       <input 
                         type="date" 
                         value={formData.date}
                         onChange={(e) => setFormData({...formData, date: e.target.value})}
                         onFocus={() => setFocused('date')} 
                         onBlur={() => setFocused(null)}
                         className="bg-transparent w-full pt-4 pb-2 border-b border-white/10 text-soft-beige focus:outline-none focus:border-sunset-gold transition-colors font-medium text-lg inverted-date-picker"
                       />
                       <div className={`absolute bottom-0 left-0 h-px bg-sunset-gold transition-all duration-700 ${focused === 'date' ? 'w-full' : 'w-0'}`} />
                    </div>

                    {/* Message Field */}
                    <div className="relative group/field">
                       <label className={`text-[10px] font-black uppercase tracking-widest transition-colors ${focused === 'message' ? 'text-sunset-gold' : (errors.message ? 'text-red-500' : 'text-warm-sand/30')}`}>Adventure Details / Questions</label>
                       <textarea 
                         value={formData.message}
                         onChange={(e) => setFormData({...formData, message: e.target.value})}
                         onFocus={() => setFocused('message')} 
                         onBlur={() => setFocused(null)}
                         rows={3}
                         placeholder="Describe your vision for the perfect Yala expedition..."
                         className={`bg-transparent w-full pt-4 pb-2 border-b text-soft-beige placeholder:text-white/5 focus:outline-none transition-colors font-medium text-lg resize-none ${errors.message ? 'border-red-500 shadow-[0_1px_10px_rgba(239,68,68,0.2)]' : 'border-white/10 focus:border-sunset-gold'}`}
                       />
                       <div className={`absolute bottom-0 left-0 h-px bg-sunset-gold transition-all duration-700 ${focused === 'message' ? 'w-full' : 'w-0'}`} />
                       {errors.message && <span className="absolute -bottom-6 left-0 text-[10px] font-bold text-red-500 uppercase tracking-tighter animate-pulse">{errors.message}</span>}
                    </div>

                    {/* Final Engagement Action */}
                    <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
                       <p className="text-[10px] text-warm-sand/30 font-black uppercase tracking-[0.2em] max-w-[200px]">
                          By sending this inquiry you agree to our expedition privacy policy.
                       </p>
                       <button 
                         disabled={isSubmitting}
                         className="group/btn relative py-6 px-16 bg-sunset-gold rounded-full flex items-center gap-4 overflow-hidden transform hover:-translate-y-1 transition-all shadow-xl shadow-sunset-gold/20 disabled:grayscale disabled:opacity-50"
                       >
                          <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 opacity-10" />
                          <span className="text-deep-charcoal font-black text-xs uppercase tracking-[0.3em] relative z-10">
                            {isSubmitting ? "TRANSMITTING..." : "Send Inquiry"}
                          </span>
                          {!isSubmitting && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-deep-charcoal transition-transform group-hover/btn:translate-x-2 relative z-10"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                          )}
                       </button>
                    </div>

                 </form>

              </div>
           </div>

        </div>

      </div>

    </section>
  );
}
