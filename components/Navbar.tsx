"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

import { trackEvent } from "@/lib/analytics";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Safari Packages", href: "/safari" },
    { name: "Tours", href: "/tours" },
    { name: "Places to Stay", href: "/stay" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-olive-green/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <div className="flex items-center">
              <div className={`relative transition-all duration-300 ${isScrolled
                ? "w-15 h-15 md:w-18 md:h-18"
                : "w-18 h-18 md:w-28 md:h-28"
                }`}>
                <Image
                  src="/images/logo-new.png"
                  alt="Yala Safari Jeeps Logo"
                  fill
                  sizes="(max-width: 768px) 80px, 128px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] font-bold uppercase tracking-widest transition-all relative group flex flex-col items-center ${isActive
                    ? "text-sunset-gold"
                    : (isScrolled ? "text-soft-beige hover:text-sunset-gold" : "text-white hover:text-sunset-gold")
                    }`}
                >
                  {link.name}
                  {/* Modern Underline Indicator */}
                  <span className={`h-0.5 bg-sunset-gold transition-all duration-300 absolute -bottom-2 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                </Link>
              );
            })}
            <Link
              href="/booking"
              data-event="book_now_click"
              onClick={() => trackEvent("book_now_click", { location: "navbar" })}
              className="bg-sunset-gold hover:bg-sunset-gold/90 text-soft-beige px-6 py-2.5 rounded text-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow hover:shadow-lg"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled || mobileMenuOpen ? 'bg-soft-beige' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled || mobileMenuOpen ? 'bg-soft-beige' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 transition-all ${isScrolled || mobileMenuOpen ? 'bg-soft-beige' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </header>

      {/* Mobile Navigation - Moved outside header to avoid stacking/blur conflicts */}
      <div
        className={`fixed inset-0 bg-[#3E3B2F] z-[100] transition-all duration-500 ease-in-out flex flex-col ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          } lg:hidden`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center px-6 py-6 w-full border-b border-white/10 bg-[#3E3B2F]">
          <div className="relative w-24 h-24">
            <Image
              src="/images/logo-new.png"
              alt="Yala Safari Jeeps Logo"
              fill
              sizes="96px"
              className="object-contain"
            />
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-soft-beige p-2 hover:text-sunset-gold transition-colors"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="flex-1 flex flex-col items-center justify-center gap-6 px-6 py-10 overflow-y-auto w-full bg-[#3E3B2F]">
          {navLinks.map((link, idx) => {
            const isActive = link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-2xl font-black uppercase tracking-tight transition-all ${isActive ? "text-sunset-gold scale-110" : "text-soft-beige hover:text-sunset-gold"
                  }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/booking"
            data-event="book_now_click"
            onClick={() => {
              trackEvent("book_now_click", { location: "mobile_menu" });
              setMobileMenuOpen(false);
            }}
            className="mt-6 bg-sunset-gold text-deep-charcoal px-10 py-4 rounded-full text-base font-black uppercase tracking-widest shadow-[0_20px_50px_rgba(208,122,63,0.3)] hover:scale-105 active:scale-95 transition-all"
          >
            Book Now
          </Link>

          {/* Mobile Menu Footer Info */}
          <div className="mt-auto w-full border-t border-white/5 pt-10 pb-8 flex flex-col items-center gap-4 bg-[#3E3B2F]">
            <p className="text-warm-sand/40 text-[10px] font-bold uppercase tracking-[0.4em]">
              Contact our Experts
            </p>
            <a
              href={siteConfig.contact.phoneHref}
              data-event="phone_click"
              onClick={() => trackEvent("phone_click", { location: "mobile_menu" })}
              className="text-soft-beige text-xl font-bold tracking-widest hover:text-sunset-gold transition-colors"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
