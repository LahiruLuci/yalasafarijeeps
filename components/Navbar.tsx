"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Safari Packages", href: "/safari" },
    { name: "Tours", href: "/tours" },
    { name: "Places to Stay", href: "/stay" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-olive-green/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <div className="flex items-center">
            <div className="relative w-32 h-10 md:w-44 md:h-14">
              <Image
                src="/images/logo-2.png"
                alt="Yala Safari Jeeps Logo"
                fill
                sizes="(max-width: 768px) 128px, 176px"
                className="object-contain brightness-0 invert"
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
                className={`text-[13px] font-bold uppercase tracking-widest transition-all relative group flex flex-col items-center ${
                  isActive 
                    ? "text-sunset-gold" 
                    : (isScrolled ? "text-soft-beige hover:text-sunset-gold" : "text-white hover:text-sunset-gold")
                }`}
              >
                {link.name}
                {/* Modern Underline Indicator */}
                <span className={`h-0.5 bg-sunset-gold transition-all duration-300 absolute -bottom-2 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            );
          })}
          <Link
            href="/booking"
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

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-safari-brown z-40 transition-transform duration-300 ease-in-out flex flex-col justify-center items-center ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.href === "/" 
                ? pathname === "/" 
                : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-2xl font-bold transition-all ${
                    isActive ? "text-sunset-gold" : "text-soft-beige hover:text-sunset-gold"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/booking"
              className="mt-4 bg-sunset-gold text-soft-beige px-8 py-3 rounded text-lg font-bold uppercase tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
