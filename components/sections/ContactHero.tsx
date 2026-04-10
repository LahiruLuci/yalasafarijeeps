"use client";

import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-black overflow-hidden group">
      
      {/* ── Immersive Cinematic Engine (Multi-Layered) ── */}
      <div className="absolute inset-0 z-0">
         {/* Background Layer: Slow Parallax Jungle */}
         <Image
           src="/images/yala-national-park/yala-national-park-sri-lanka-image5.jpg"
           alt="Quiet Wilderness"
           fill
           priority
           className="object-cover opacity-60 scale-110 group-hover:scale-100 transition-all duration-[20s] ease-out brightness-[0.4]"
         />
         {/* Atmospheric Depth Gradients */}
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        
        {/* ── The Signature Masterpiece Layout ── */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
           
           {/* Left Pillar: The "Concierge" Visual (The Circle of Focus) */}
           <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
              <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px]">
                 {/* Main Reveal Frame */}
                 <div className="absolute inset-0 rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-1000">
                    <Image
                      src="/images/morning-safari-yala-national-park.jpg"
                      alt="The Golden Hour"
                      fill
                      className="object-cover group-hover:scale-110 transition-all duration-[10s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                 </div>

                 {/* Secondary Floating "Signature" Frame */}
                 <div className="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 rounded-full border border-sunset-gold/30 p-2 backdrop-blur-xl animate-float">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                       <Image
                         src="/images/yala-banner.jpg"
                         alt="Yala Essence"
                         fill
                         className="object-cover"
                       />
                       <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <span className="text-white font-black text-[10px] tracking-[0.5em] uppercase text-center mt-2">
                             Est.<br />2008
                          </span>
                       </div>
                    </div>
                 </div>

                 {/* Decorative Detail */}
                 <div className="absolute -top-12 -left-12 w-32 h-32 bg-sunset-gold/10 rounded-full blur-[80px]" />
              </div>
           </div>

           {/* Right Pillar: The Narrative Engagement */}
           <div className="w-full lg:w-1/2 text-left">
              
              <div className="mb-12 overflow-hidden">
                 <span className="text-sunset-gold font-bold text-sm tracking-[0.6em] uppercase block mb-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000">
                    Your Personal Concierge
                 </span>
                 <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold text-soft-beige leading-[0.85] tracking-tighter mb-10 drop-shadow-2xl">
                    Plan Your <br />
                    <span className="italic font-light font-serif text-sunset-gold">Yala Safari</span>
                 </h1>
                 <p className="text-warm-sand/50 text-xl md:text-2xl font-medium leading-relaxed italic pr-10 border-l border-white/10 pl-8">
                    &quot;Every safari is a story waiting to be told. Whether you have questions or you&apos;re ready to reserve your place in the wild, our team is here to guide your gaze.&quot;
                 </p>
              </div>

              {/* High-Intent CTAs */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
                 <div className="flex items-center gap-6 group/item">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center transition-all group-hover/item:bg-sunset-gold group-hover/item:rotate-[15deg]">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-soft-beige group-hover/item:text-deep-charcoal transition-colors">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                       </svg>
                    </div>
                    <div>
                       <p className="text-soft-beige font-black text-sm uppercase tracking-widest mb-1">Direct Line</p>
                       <p className="text-warm-sand/40 font-medium">+94 123 456 789</p>
                    </div>
                 </div>

                 <div className="flex items-center gap-4 py-4 px-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl hover:border-sunset-gold/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-sunset-gold animate-ping" />
                    <span className="text-soft-beige/80 font-black text-[10px] tracking-widest uppercase">Expert Assistance Online</span>
                 </div>
              </div>

           </div>

        </div>

      </div>

      {/* Decorative Night Border Details */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-40">
         <div className="h-24 w-px bg-gradient-to-t from-sunset-gold to-transparent" />
         <span className="text-soft-beige text-[8px] font-black uppercase tracking-[0.5em] rotate-180 vertical-rl">The Journey Begins</span>
      </div>

    </section>
  );
}
