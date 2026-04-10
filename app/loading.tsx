"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function GlobalLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Immediate show for better perceived feedback on shift
    const timer = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-deep-charcoal overflow-hidden animate-in fade-in duration-500">
      
      {/* ── Cinematic Atmosphere ── */}
      <div className="absolute inset-0 z-0">
         {/* Moving Gradient Mist */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-sunset-gold/5 rounded-full blur-[120px] animate-pulse" />
         <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-olive-green/5 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* ── The Yala Totem (Rotating Logo) ── */}
        <div className="relative w-32 h-32 md:w-48 md:h-48 mb-12 flex items-center justify-center">
           
           {/* Concentric Rotating Rails */}
           <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_8s_linear_infinite]" />
           <div className="absolute inset-4 border border-sunset-gold/10 rounded-full animate-[spin_4s_linear_infinite_reverse]" />
           
           {/* The Core Logo */}
           <div className="relative w-24 h-24 md:w-32 md:h-32 p-4 animate-[heartbeat_3s_ease-in-out_infinite]">
              <Image 
                src="/images/logo-2.png" 
                alt="Yala Safari Jeeps" 
                fill 
                sizes="(max-width: 768px) 96px, 128px"
                className="object-contain drop-shadow-[0_0_20px_rgba(208,122,63,0.3)]" 
              />
           </div>

           {/* Floating Tracker Dot */}
           <div className="absolute inset-0 p-2 animate-[spin_3s_linear_infinite]">
              <div className="w-2 h-2 rounded-full bg-sunset-gold shadow-[0_0_15px_#D07A3F]" />
           </div>
        </div>

        {/* ── Branded Narrative ── */}
        <div className="flex flex-col items-center gap-4 px-6">
           <div className="overflow-hidden">
              <span className="text-sunset-gold font-bold text-[10px] md:text-xs tracking-[0.6em] uppercase block animate-[slide-up-loading_1s_ease-out_forwards]">
                 Mastering the Wild
              </span>
           </div>

           <h2 className="text-2xl md:text-4xl font-extrabold text-soft-beige tracking-tighter uppercase relative group">
              <span className="inline-block relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-warm-sand via-white to-warm-sand bg-[length:200%_auto] animate-[shimmer-loading_3s_linear_infinite]">
                Your Expedition Awaits
              </span>
              
              {/* Under-glow for text */}
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sunset-gold/30 to-transparent" />
           </h2>

           <div className="flex items-center gap-3 py-3 px-8 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-3xl mt-4">
              <div className="flex gap-1">
                 <span className="w-1.5 h-1.5 bg-sunset-gold rounded-full animate-[loading-pulse_1s_infinite_0ms]" />
                 <span className="w-1.5 h-1.5 bg-sunset-gold rounded-full animate-[loading-pulse_1s_infinite_200ms]" />
                 <span className="w-1.5 h-1.5 bg-sunset-gold rounded-full animate-[loading-pulse_1s_infinite_400ms]" />
              </div>
              <span className="text-[9px] font-black text-warm-sand/40 tracking-widest uppercase">Tracking Leopard...</span>
           </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes shimmer-loading {
          0% { background-position: 100% center; }
          100% { background-position: -100% center; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes slide-up-loading {
          0% { transform: translate-y(100%); opacity: 0; }
          100% { transform: translate-y(0); opacity: 1; }
        }
        @keyframes loading-pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
