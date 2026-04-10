"use client";

const contactMethods = [
  {
    name: "WhatsApp",
    label: "INSTANT CHAT",
    value: "+94 77 123 4567",
    desc: "Average response: < 5 mins",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sunset-gold">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 1 1 0 0 1 1 1 8.38 8.38 0 0 1 7.5 6.9z"/><path d="m14 11 5-5"/><path d="m20 12.5-3 1.5-1-1.5-1.5 1-1.5-3 1.5-1-1.5-1-1.5 3 1.5 1.5 1 1.5 3-1.5"/>
      </svg>
    ),
    isPrimary: true
  },
  {
    name: "Direct Call",
    label: "VOICE SUPPORT",
    value: "+94 47 123 4567",
    desc: "Available for urgent booking",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sunset-gold">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    isPrimary: false
  },
  {
    name: "Official Email",
    label: "INQUIRY DESK",
    value: "hello@yalasafari.com",
    desc: "Detailed itineraries & quotes",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sunset-gold">
        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    isPrimary: false
  }
];

export default function ContactQuickOptions() {
  return (
    <section className="bg-warm-sand py-24 md:py-40 relative overflow-hidden">
      
      {/* ── Background Detail ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sunset-gold/5 rounded-full blur-[150px] z-0 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-20">
           <span className="text-sunset-gold font-bold text-xs tracking-[0.6em] uppercase mb-6 block">
              Instant Connection
           </span>
           <h2 className="text-5xl md:text-7xl font-extrabold text-deep-charcoal leading-none tracking-tighter mb-8 italic">
              Choose Your <br />
              <span className="text-olive-green">Gateway to the Wild</span>
           </h2>
           <p className="text-safari-brown/70 text-lg md:text-xl font-medium leading-relaxed italic border-l-2 border-sunset-gold/30 pl-8">
              Tourists prefer instant communication, not long forms. Reach out to our dedicated Yala team through your preferred channel for a real-time response.
           </p>
        </div>

        {/* ── The Quick Option Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {contactMethods.map((method, idx) => (
             <button 
               key={idx} 
               className={`group relative p-10 md:p-14 rounded-[3.5rem] transition-all duration-700 text-left flex flex-col justify-between min-h-[380px] overflow-hidden ${
                 method.isPrimary 
                 ? 'bg-deep-charcoal text-soft-beige shadow-[0_40px_100px_rgba(43,42,34,0.15)] border-2 border-sunset-gold/20' 
                 : 'bg-white/50 border border-white/80 hover:bg-white/80 backdrop-blur-3xl'
               }`}
             >
                {/* Secondary Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-sunset-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                   <div className="flex items-center justify-between mb-10">
                      <div className="w-14 h-14 rounded-2xl bg-sunset-gold/10 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                         {method.icon}
                      </div>
                      {method.isPrimary && (
                         <div className="py-2 px-6 rounded-full bg-sunset-gold text-deep-charcoal font-black text-[9px] tracking-widest uppercase animate-pulse">
                            PRIMARY
                         </div>
                      )}
                   </div>
                   
                   <span className={`text-[10px] font-black tracking-[0.4em] uppercase mb-4 block ${method.isPrimary ? 'text-sunset-gold' : 'text-olive-green'}`}>
                      {method.label}
                   </span>
                   <h3 className={`text-2xl md:text-3xl font-black mb-4 tracking-tighter capitalize ${method.isPrimary ? 'text-soft-beige' : 'text-deep-charcoal'}`}>
                      {method.name}
                   </h3>
                   <p className={`text-base font-bold mb-8 ${method.isPrimary ? 'text-white' : 'text-deep-charcoal'}`}>
                      {method.value}
                   </p>
                </div>

                <div className="relative z-10">
                   <div className="h-px w-full bg-current opacity-10 mb-6" />
                   <div className="flex items-center justify-between">
                      <p className={`text-xs font-medium italic ${method.isPrimary ? 'text-warm-sand/50' : 'text-safari-brown/60'}`}>
                         {method.desc}
                      </p>
                      <div className="w-10 h-10 rounded-full border border-current opacity-20 flex items-center justify-center group-hover:opacity-100 transition-opacity">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </div>
                   </div>
                </div>

                {/* Ambient Detail on Hover */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-sunset-gold/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
             </button>
           ))}
        </div>

        {/* ── Response Time Indicator ── */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between p-10 md:p-14 border border-deep-charcoal/5 rounded-[3rem] bg-white/20 backdrop-blur-xl gap-8">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-olive-green flex items-center justify-center text-soft-beige shadow-xl">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                 <h4 className="text-xl font-extrabold text-deep-charcoal tracking-tight">24/7 Global Inquiries</h4>
                 <p className="text-safari-brown/60 text-sm font-medium italic">Our Yala base is operational around the clock for your convenience.</p>
              </div>
           </div>
           <div className="flex gap-4">
              <span className="py-3 px-6 rounded-full bg-deep-charcoal text-soft-beige font-black text-[9px] tracking-widest uppercase">SYDNEY: 6:00 PM</span>
              <span className="py-3 px-6 rounded-full bg-sunset-gold text-deep-charcoal font-black text-[9px] tracking-widest uppercase">YALA: 12:30 PM</span>
              <span className="py-3 px-6 rounded-full bg-deep-charcoal text-soft-beige font-black text-[9px] tracking-widest uppercase">LONDON: 7:00 AM</span>
           </div>
        </div>

      </div>

    </section>
  );
}
