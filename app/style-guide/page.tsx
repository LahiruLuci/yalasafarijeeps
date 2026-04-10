import React from "react";

export const metadata = {
  title: "Style Guide - Yala Safari Jeeps",
  description: "Common site styles and design system based on AGENTS.md",
};

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-olive-green text-soft-beige py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Style Guide
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            This page demonstrates the common styles for the Yala Safari Jeeps project based on the design principles established in <code>AGENTS.md</code>.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 md:px-8 mt-16 space-y-20">
        {/* Colors Section */}
        <section>
          <div className="mb-8 border-b border-safari-brown/20 pb-4">
            <h2 className="text-3xl font-bold text-deep-charcoal">Color Palette</h2>
            <p className="text-deep-charcoal/80 mt-2">
              Safari-inspired premium palette following the 60-30-10 rule.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-deep-charcoal">60% Base Colors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="rounded-xl overflow-hidden shadow-sm border border-safari-brown/10">
                  <div className="h-32 bg-warm-sand"></div>
                  <div className="p-4 bg-white/50">
                    <p className="font-bold text-deep-charcoal">Warm Sand</p>
                    <p className="text-sm font-mono text-deep-charcoal/70">#E8DCC2</p>
                    <p className="text-xs mt-2 text-deep-charcoal/80">Page background, large sections</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-deep-charcoal">30% Secondary Colors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="rounded-xl overflow-hidden shadow-sm">
                  <div className="h-32 bg-olive-green"></div>
                  <div className="p-4 bg-white/50">
                    <p className="font-bold text-deep-charcoal">Olive Green</p>
                    <p className="text-sm font-mono text-deep-charcoal/70">#6B6F3A</p>
                    <p className="text-xs mt-2 text-deep-charcoal/80">Navbar, footers, section bg</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm">
                  <div className="h-32 bg-safari-brown"></div>
                  <div className="p-4 bg-white/50">
                    <p className="font-bold text-deep-charcoal">Safari Brown</p>
                    <p className="text-sm font-mono text-deep-charcoal/70">#3E3B2F</p>
                    <p className="text-xs mt-2 text-deep-charcoal/80">Content bg, overlays</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-deep-charcoal">10% Accent Colors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="rounded-xl overflow-hidden shadow-sm">
                  <div className="h-32 bg-sunset-gold"></div>
                  <div className="p-4 bg-white/50">
                    <p className="font-bold text-deep-charcoal">Sunset Gold</p>
                    <p className="text-sm font-mono text-deep-charcoal/70">#D07A3F</p>
                    <p className="text-xs mt-2 text-deep-charcoal/80">Buttons, CTAs, icons, hover</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-deep-charcoal">Text Colors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="rounded-xl overflow-hidden shadow-sm">
                  <div className="h-32 bg-deep-charcoal flex items-center justify-center">
                    <span className="text-soft-beige font-bold text-xl">Aa</span>
                  </div>
                  <div className="p-4 bg-white/50">
                    <p className="font-bold text-deep-charcoal">Deep Charcoal</p>
                    <p className="text-sm font-mono text-deep-charcoal/70">#2B2A22</p>
                    <p className="text-xs mt-2 text-deep-charcoal/80">Main headings, paragraphs</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm bg-safari-brown">
                  <div className="h-32 bg-soft-beige flex items-center justify-center">
                    <span className="text-deep-charcoal font-bold text-xl">Aa</span>
                  </div>
                  <div className="p-4 bg-white/50">
                    <p className="font-bold text-deep-charcoal">Soft Beige</p>
                    <p className="text-sm font-mono text-deep-charcoal/70">#F2E6CE</p>
                    <p className="text-xs mt-2 text-deep-charcoal/80">Light text on dark backgrounds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <div className="mb-8 border-b border-safari-brown/20 pb-4">
            <h2 className="text-3xl font-bold text-deep-charcoal">Typography</h2>
            <p className="text-deep-charcoal/80 mt-2">
              Clean, legible typography using standard geometric sans-serif fonts.
            </p>
          </div>

          <div className="bg-white/40 p-8 rounded-2xl border border-safari-brown/10 space-y-8">
            <div>
              <p className="text-sm text-deep-charcoal/60 mb-1 uppercase tracking-wider font-semibold">Heading 1</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal leading-tight">
                Experience the Wild Beauty of Yala
              </h1>
            </div>
            
            <div>
              <p className="text-sm text-deep-charcoal/60 mb-1 uppercase tracking-wider font-semibold">Heading 2</p>
              <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal tracking-tight">
                Premium Safari Packages
              </h2>
            </div>
            
            <div>
              <p className="text-sm text-deep-charcoal/60 mb-1 uppercase tracking-wider font-semibold">Heading 3</p>
              <h3 className="text-2xl md:text-3xl font-bold text-deep-charcoal">
                Morning Leopard Tracking
              </h3>
            </div>
            
            <div>
              <p className="text-sm text-deep-charcoal/60 mb-1 uppercase tracking-wider font-semibold">Body Text (Large)</p>
              <p className="text-lg text-deep-charcoal/90 max-w-3xl leading-relaxed">
                Join our expert guides on an unforgettable journey through the largest national park in 
                Sri Lanka. Discover the elusive leopard, majestic elephants, and a dense variety of birdlife.
              </p>
            </div>
            
            <div>
              <p className="text-sm text-deep-charcoal/60 mb-1 uppercase tracking-wider font-semibold">Body Text (Standard)</p>
              <p className="text-base text-deep-charcoal/80 max-w-3xl leading-relaxed">
                Our luxury jeeps provide maximum safety and comfort. Each vehicle is equipped with high-quality 
                suspension and seating designed for the bumpy terrain of the Yala wilderness.
              </p>
            </div>
          </div>
        </section>

        {/* UI Elements Section */}
        <section>
          <div className="mb-8 border-b border-safari-brown/20 pb-4">
            <h2 className="text-3xl font-bold text-deep-charcoal">Buttons & UI Elements</h2>
            <p className="text-deep-charcoal/80 mt-2">
              Clear call-to-actions utilizing accent and secondary colors with subtle hover transitions.
            </p>
          </div>

          <div className="bg-white/40 p-8 rounded-2xl border border-safari-brown/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-deep-charcoal border-b border-safari-brown/10 pb-2">Primary Action</h3>
                <div className="bg-warm-sand p-6 rounded-lg flex gap-4 items-center">
                  <button className="bg-sunset-gold hover:bg-sunset-gold/90 text-soft-beige font-semibold py-3 px-8 rounded-md transition-all active:scale-95 shadow-md hover:shadow-lg">
                    Book Safari Now
                  </button>
                  <p className="text-sm text-deep-charcoal/70">Uses <code>bg-sunset-gold</code> with simple hover</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-deep-charcoal border-b border-safari-brown/10 pb-2">Secondary Action</h3>
                <div className="bg-warm-sand p-6 rounded-lg flex gap-4 items-center">
                  <button className="bg-olive-green hover:bg-olive-green/90 text-soft-beige font-semibold py-3 px-8 rounded-md transition-all active:scale-95 shadow-sm hover:shadow">
                    View Tour Details
                  </button>
                  <p className="text-sm text-deep-charcoal/70">Uses <code>bg-olive-green</code></p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-deep-charcoal border-b border-safari-brown/10 pb-2">Outline / Tertiary</h3>
                <div className="bg-warm-sand p-6 rounded-lg flex gap-4 items-center">
                  <button className="border-2 border-safari-brown text-safari-brown hover:bg-safari-brown hover:text-soft-beige font-semibold py-2.5 px-8 rounded-md transition-all active:scale-95">
                    Learn More
                  </button>
                  <p className="text-sm text-deep-charcoal/70">Uses <code>border-safari-brown</code></p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-soft-beige border-b border-white/20 pb-2 bg-safari-brown -mx-6 -mt-6 px-6 pt-6 rounded-t-lg">Dark Background Action</h3>
                <div className="bg-safari-brown p-6 rounded-b-lg flex gap-4 items-center -mx-6 -mb-6">
                  <button className="bg-sunset-gold hover:bg-warm-sand hover:text-deep-charcoal text-soft-beige font-semibold py-3 px-8 rounded-md transition-all active:scale-95">
                    Contact Us
                  </button>
                  <p className="text-sm text-soft-beige/70">Contrasting on dark BG</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section Example */}
        <section>
          <div className="mb-8 border-b border-safari-brown/20 pb-4">
            <h2 className="text-3xl font-bold text-deep-charcoal">Layout Example</h2>
            <p className="text-deep-charcoal/80 mt-2">
              Combining colors and spacing for a premium, spacious look.
            </p>
          </div>

          <div className="bg-olive-green text-soft-beige rounded-2xl overflow-hidden shadow-xl border border-safari-brown">
            <div className="grid md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold">Why Choose Us</h3>
                <p className="text-soft-beige/90 text-lg leading-relaxed">
                  We offer a unique, immersive experience in the wild. Our experienced guides ensure that
                  every moment is a step closer to nature while prioritizing your safety and comfort.
                </p>
                <div className="pt-4">
                  <button className="bg-sunset-gold hover:bg-sunset-gold/90 text-soft-beige font-semibold py-3 px-8 rounded-md transition-all">
                    Discover More
                  </button>
                </div>
              </div>
              
              <div className="bg-safari-brown relative min-h-[300px] flex items-center justify-center">
                {/* Simulated Image with Overlay */}
                <div className="absolute inset-0 bg-[url('/api/placeholder/800/600')] bg-cover bg-center mix-blend-overlay opacity-50"></div>
                
                {/* Simulated 40-50% overlay using secondary dark (#3E3B2F) per AGENTS.md */}
                <div className="relative z-10 p-8 text-center space-y-4">
                  <p className="text-2xl font-bold">Premium Imagery</p>
                  <p className="text-sm opacity-80">(Hero backgrounds use 40-50% Safari Brown overlay)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
