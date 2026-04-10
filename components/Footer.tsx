"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-charcoal text-soft-beige pt-20 pb-8 relative overflow-hidden border-t-[8px] border-sunset-gold">
      
      {/* Decorative large animal watermark in the background */}
      <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none w-[600px] h-[600px]">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 20.5v-3c0-1.1-.9-2-2-2H8c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h3c1.1 0 2-.9 2-2V4.5c0-.83.67-1.5 1.5-1.5h1c1.1 0 2 .9 2 2v3c0 1.1.9 2 2 2h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-3c-1.1 0-2 .9-2 2v3c0 .83-.67 1.5-1.5 1.5h-1c-1.1 0-2-.9-2-2z" />
          {/* Abstract paw/elephant shape concept could be here, using generic shape for impact */}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="inline-block">
              {/* If logo is preferred, we use the image from navbar but styled for dark bg */}
              <div className="flex items-center">
                <div className="relative w-48 h-12">
                  <Image
                    src="/images/logo-2.png"
                    alt="Yala Safari Jeeps Logo"
                    fill
                    sizes="(max-width: 768px) 192px, 192px"
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </Link>
            <p className="text-warm-sand/70 leading-relaxed max-w-sm mt-4">
              At Yala Safari Jeeps, we are more than just a safari company; we are your dedicated companions in exploring the untamed beauty of Yala National Park and beyond.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sunset-gold hover:border-sunset-gold hover:text-deep-charcoal transition-all duration-300 transform hover:-translate-y-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sunset-gold hover:border-sunset-gold hover:text-deep-charcoal transition-all duration-300 transform hover:-translate-y-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sunset-gold hover:border-sunset-gold hover:text-deep-charcoal transition-all duration-300 transform hover:-translate-y-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sunset-gold hover:border-sunset-gold hover:text-deep-charcoal transition-all duration-300 transform hover:-translate-y-1">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M9.667,14.667V9.333L15,12L9.667,14.667z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-6">
            <h4 className="text-white font-bold text-lg border-b-2 border-sunset-gold pb-2 inline-block self-start">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Safari Packages', 'Places to Stay', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-warm-sand/80 hover:text-sunset-gold transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-sunset-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-white font-bold text-lg border-b-2 border-sunset-gold pb-2 inline-block self-start">Our Services</h4>
            <ul className="flex flex-col gap-3">
              {['Yala Safari', 'Udawalawe Safari', 'Bundala Safari', 'Lunugamwehera Safari', 'Whale Watching'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-warm-sand/80 hover:text-sunset-gold transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-sunset-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-white font-bold text-lg border-b-2 border-sunset-gold pb-2 inline-block self-start">Contact Info</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 text-warm-sand/80">
                <svg className="w-5 h-5 text-sunset-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Yala National Park, Sri Lanka</span>
              </li>
              <li className="flex items-start gap-3 text-warm-sand/80">
                <svg className="w-5 h-5 text-sunset-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:info@yalasafarijeeps.com" className="hover:text-sunset-gold transition-colors">info@yalasafarijeeps.com</a>
              </li>
              <li className="flex items-start gap-3 text-warm-sand/80">
                <svg className="w-5 h-5 text-sunset-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:+94722112222" className="hover:text-sunset-gold transition-colors">+94 72 211 22 22</a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Global Copyright Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-warm-sand/50 font-medium">
          <p>© {currentYear} Yala Safari Jeeps. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-sunset-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-sunset-gold transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
