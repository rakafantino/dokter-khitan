"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            href="#"
            className="text-primary hover:scale-105 transition-transform"
          >
            Beranda
          </Link>
          <Link
            href="#layanan"
            className="hover:text-primary transition-colors"
          >
            Layanan
          </Link>
          <Link
            href="#booking"
            className="hover:text-primary transition-colors"
          >
            Pendaftaran
          </Link>
          <Link href="#galeri" className="hover:text-primary transition-colors">
            Galeri
          </Link>
        </div>

        <Link
          href="#booking"
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
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 hover:bg-primary/5 rounded-xl font-bold text-primary transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="#layanan"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 hover:bg-primary/5 rounded-xl font-bold text-gray-600 transition-colors"
            >
              Layanan
            </Link>
            <Link
              href="#booking"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 hover:bg-primary/5 rounded-xl font-bold text-gray-600 transition-colors"
            >
              Pendaftaran
            </Link>
            <Link
              href="#galeri"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 hover:bg-primary/5 rounded-xl font-bold text-gray-600 transition-colors"
            >
              Galeri
            </Link>
            <Link
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 hover:bg-primary/5 rounded-xl font-bold text-gray-600 transition-colors"
            >
              Artikel
            </Link>
            <Link
              href="#kontak"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 hover:bg-primary/5 rounded-xl font-bold text-gray-600 transition-colors"
            >
              Kontak
            </Link>
            <button className="w-full bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-sticker mt-2">
              Booking Sekarang!
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
