"use client";

import Link from "next/link";
import { useState, useRef, useCallback, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const activeRef = useRef("beranda");

  // Smooth scroll handler using native API
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      activeRef.current = href.replace("#", "");
      setActiveSection(href.replace("#", ""));
      setIsMenuOpen(false);
    }
  }, []);

  // Check if section is active
  const isActive = (section: string) => activeSection === section;

  // Intersection Observer for active nav state
  useEffect(() => {
    const sections = [
      { id: "beranda", ref: null as HTMLElement | null },
      { id: "layanan", ref: null as HTMLElement | null },
      { id: "booking", ref: null as HTMLElement | null },
      { id: "galeri", ref: null as HTMLElement | null },
      { id: "kontak", ref: null as HTMLElement | null },
    ];

    // Get section elements
    sections.forEach((section) => {
      section.ref = document.querySelector(`#${section.id}`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (activeRef.current !== sectionId) {
              activeRef.current = sectionId;
              setActiveSection(sectionId);
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section.ref) observer.observe(section.ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-4 z-50 px-6">
      <nav className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md border-4 border-primary/20 rounded-full px-6 lg:px-8 py-3 flex items-center justify-between shadow-lg relative">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-xl tracking-tight text-primary">
            Dokter Khitan
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-semibold text-sm uppercase tracking-wider">
          <Link
            href="#beranda"
            onClick={(e) => handleNavClick(e, "#beranda")}
            className={`transition-all duration-300 ${
              isActive("beranda") 
                ? "text-primary underline underline-offset-4 decoration-2" 
                : "hover:text-primary"
            }`}
          >
            Beranda
          </Link>
          <Link
            href="#layanan"
            onClick={(e) => handleNavClick(e, "#layanan")}
            className={`transition-all duration-300 ${
              isActive("layanan") 
                ? "text-primary underline underline-offset-4 decoration-2" 
                : "hover:text-primary"
            }`}
          >
            Layanan
          </Link>
          <Link
            href="#booking"
            onClick={(e) => handleNavClick(e, "#booking")}
            className={`transition-all duration-300 ${
              isActive("booking") 
                ? "text-primary underline underline-offset-4 decoration-2" 
                : "hover:text-primary"
            }`}
          >
            Pendaftaran
          </Link>
          <Link
            href="#galeri"
            onClick={(e) => handleNavClick(e, "#galeri")}
            className={`transition-all duration-300 ${
              isActive("galeri") 
                ? "text-primary underline underline-offset-4 decoration-2" 
                : "hover:text-primary"
            }`}
          >
            Galeri
          </Link>
          <Link
            href="#kontak"
            onClick={(e) => handleNavClick(e, "#kontak")}
            className={`transition-all duration-300 ${
              isActive("kontak") 
                ? "text-primary underline underline-offset-4 decoration-2" 
                : "hover:text-primary"
            }`}
          >
            Kontak
          </Link>
        </div>

        <Link
          href="#booking"
          onClick={(e) => handleNavClick(e, "#booking")}
          className="hidden lg:block bg-primary text-white px-6 py-2.5 rounded-full font-bold shadow-sticker hover:translate-y-1 hover:shadow-none transition-all"
        >
          Booking Sekarang!
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-icons text-3xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 p-4 bg-white rounded-3xl shadow-xl border-4 border-primary/20 flex flex-col gap-2 lg:hidden">
            <Link
              href="#beranda"
              onClick={(e) => handleNavClick(e, "#beranda")}
              className={`px-4 py-3 rounded-xl font-bold transition-colors ${
                isActive("beranda") 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-primary/5 text-gray-600"
              }`}
            >
              Beranda
            </Link>
            <Link
              href="#layanan"
              onClick={(e) => handleNavClick(e, "#layanan")}
              className={`px-4 py-3 rounded-xl font-bold transition-colors ${
                isActive("layanan") 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-primary/5 text-gray-600"
              }`}
            >
              Layanan
            </Link>
            <Link
              href="#booking"
              onClick={(e) => handleNavClick(e, "#booking")}
              className={`px-4 py-3 rounded-xl font-bold transition-colors ${
                isActive("booking") 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-primary/5 text-gray-600"
              }`}
            >
              Pendaftaran
            </Link>
            <Link
              href="#galeri"
              onClick={(e) => handleNavClick(e, "#galeri")}
              className={`px-4 py-3 rounded-xl font-bold transition-colors ${
                isActive("galeri") 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-primary/5 text-gray-600"
              }`}
            >
              Galeri
            </Link>
            <Link
              href="#kontak"
              onClick={(e) => handleNavClick(e, "#kontak")}
              className={`px-4 py-3 rounded-xl font-bold transition-colors ${
                isActive("kontak") 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-primary/5 text-gray-600"
              }`}
            >
              Kontak
            </Link>
            <button
              onClick={(e) => handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#booking")}
              className="w-full bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-sticker mt-2"
            >
              Booking Sekarang!
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
