"use client";

import Image from "next/image";

const landmarks = [
  { name: "Yala National Park (Gate 1)", distance: "05 Mins", desc: "Our primary pickup point for dawn safaris." },
  { name: "Kataragama City", distance: "20 Mins", desc: "The spiritual heart of the Southern Province." },
  { name: "Palatupana Lake", distance: "02 Mins", desc: "Direct views of the sunset over the wild." }
];

export default function ContactMap() {
  return (
    <section className="bg-warm-sand py-32 md:py-52 relative overflow-hidden group">
      
      {/* ── Background Detail Texture ── */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none">
         <Image src="/images/img-4.jpg" alt="Safari Map Texture" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
           
           {/* ── Left Side: The Geographical Hook ── */}
           <div className="lg:col-span-4">
              <span className="text-sunset-gold font-bold text-xs tracking-[0.5em] uppercase mb-8 block">
                 Gateway to the Wild
              </span>
              <h2 className="text-5xl md:text-7xl font-extrabold text-deep-charcoal leading-none tracking-tighter mb-10 italic">
                 Located at <br />
                 <span className="text-olive-green">The Portal</span>
              </h2>
              <p className="text-safari-brown text-xl font-medium leading-relaxed italic mb-12 pr-10 border-l border-sunset-gold/30 pl-8">
                 &quot;Strategically positioned near the Yala National Park entrance for a frictionless safari experience. No long commutes—just the wild.&quot;
              </p>

              {/* Landmark Identity Stack */}
              <div className="flex flex-col gap-6">
                 {landmarks.map((landmark, idx) => (
                   <div key={idx} className="group/item flex items-center gap-6 p-6 rounded-3xl bg-white/40 border border-white/60 hover:bg-white hover:shadow-xl transition-all">
                      <div className="w-14 h-14 rounded-2xl bg-sunset-gold/10 flex items-center justify-center text-sunset-gold group-hover/item:bg-sunset-gold group-hover/item:text-deep-charcoal transition-colors">
                         <span className="text-[10px] font-black">{landmark.distance}</span>
                      </div>
                      <div>
                         <h4 className="text-sm font-black text-deep-charcoal uppercase tracking-widest">{landmark.name}</h4>
                         <p className="text-[10px] text-safari-brown/60 font-medium italic">{landmark.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* ── Right Side: The Map Masterpiece (8 Units) ── */}
           <div className="lg:col-span-8 relative">
              {/* Cinematic Frame for Map */}
              <div className="relative w-full aspect-square md:aspect-video rounded-[4rem] border-4 border-white overflow-hidden shadow-2xl shadow-deep-charcoal/10 group-hover:border-sunset-gold/20 transition-colors">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15871.328328148943!2d81.28294747585642!3d6.21639071060965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae697d02ead370b%3A0xe9f798889a244465!2sYala%20National%20Park!5e0!3m2!1sen!2slk!4v1712213000000!5m2!1sen!2slk" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   className="grayscale-[0.8] hover:grayscale-0 transition-all duration-[2s] pointer-events-auto"
                 />
                 
                 {/* Floating Map Label */}
                 <div className="absolute top-10 right-10 py-4 px-10 rounded-full bg-white/80 backdrop-blur-3xl shadow-xl z-20 border border-white/20">
                    <div className="flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-sunset-gold animate-ping" />
                       <span className="text-deep-charcoal font-black text-[10px] tracking-widest uppercase">YALA BASE SITE</span>
                    </div>
                 </div>

                 {/* Corner Accent Detail */}
                 <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-sunset-gold/10 rounded-full blur-[80px]" />
              </div>

              {/* Secondary Visual Accent (Image Mesh) */}
              <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-[3rem] border-4 border-white overflow-hidden shadow-2xl hidden lg:block animate-float">
                 <Image src="/images/morning-safari-yala-national-park.jpg" alt="Local Gateway" fill className="object-cover" />
              </div>
           </div>

        </div>

      </div>

    </section>
  );
}
