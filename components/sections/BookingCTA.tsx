"use client";

import Image from "next/image";
import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="bg-warm-sand/20 py-24 md:py-32 px-4 md:px-8 relative overflow-hidden">
      
      {/* Massive Cinematic Floating Banner */}
      <div className="max-w-7xl mx-auto relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] group h-[500px] md:h-[600px] flex items-center justify-center border border-white/20">
        
        {/* Continuous Slow Parallax Background */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/cta-bg-s2.jpg"
            alt="Yala Safari Adventure Landscape"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover scale-100 group-hover:scale-[1.15] transition-transform duration-[15s] ease-out origin-center"
          />
        </div>

        {/* Sophisticated Dual-Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/90 via-deep-charcoal/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal/70 via-transparent to-deep-charcoal/70 z-10" />

        {/* Floating Abstract Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sunset-gold/20 rounded-full blur-[120px] mix-blend-screen z-10 transform group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-[10s]" />

        {/* Foreground Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto w-full flex flex-col items-center">
          
          <div className="overflow-hidden mb-4">
            <span className="text-sunset-gold font-extrabold text-sm tracking-[0.4em] uppercase block transform group-hover:scale-105 transition-transform duration-1000">
              Begin Your Journey
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
            Your Wildest Dreams <br/>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-soft-beige via-white to-soft-beige">
              Are Waiting
            </span>
          </h2>

          <p className="text-lg md:text-xl text-warm-sand/90 font-medium max-w-2xl mx-auto mb-12 drop-shadow-md">
            Don't let the adventure of a lifetime pass you by. Connect with our expert rangers today and secure your seat in the heart of the wild.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 w-full">
            
            {/* The Ultimate "Book Now" Button */}
            <Link 
              href="/booking"
              className="relative group/btn overflow-hidden w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-sunset-gold text-deep-charcoal font-black text-sm tracking-widest uppercase rounded-full shadow-[0_0_40px_rgba(208,122,63,0.4)] hover:shadow-[0_0_60px_rgba(208,122,63,0.7)] transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Sweeping Light Ray Effect */}
              <div className="absolute inset-0 -translate-x-[150%] skew-x-[30deg] bg-white/30 group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-in-out z-0" />
              <span className="relative z-10">Reserve Your Jeep</span>
              <svg className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* The Echoing WhatsApp Button */}
            <a 
              href="https://wa.me/94722112222"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/wa w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-sm tracking-widest uppercase rounded-full overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/20 hover:border-white/50"
            >
              <div className="relative flex items-center justify-center w-6 h-6">
                {/* Sonar Ping Ring */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 group-hover/wa:animate-ping"></span>
                <span className="absolute inline-flex rounded-full h-5 w-5 bg-[#25D366]"></span>
                <svg className="relative z-10 w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.668.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <span className="relative z-10 text-white">Chat on WhatsApp</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
