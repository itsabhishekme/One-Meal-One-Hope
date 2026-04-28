"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✨ Scroll effect (premium feel)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b"
          : "bg-transparent"
      }`}
    >
      {/* 🌈 Glow background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-200/30 via-white/20 to-emerald-200/30 blur-2xl opacity-70" />

      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-extrabold text-green-600 group-hover:scale-105 transition">
            One Meal
          </span>
          <span className="text-2xl font-bold text-gray-900 group-hover:scale-105 transition">
            One Hope
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-green-600 transition">Home</Link>
          <Link href="/about" className="hover:text-green-600 transition">About</Link>
          <Link href="/campaigns" className="hover:text-green-600 transition">Campaigns</Link>
          <Link href="/impact" className="hover:text-green-600 transition">Impact</Link>
          <Link href="/stories" className="hover:text-green-600 transition">Stories</Link>
          <Link href="/contact" className="hover:text-green-600 transition">Contact</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/donate"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Donate Now
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-900"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* 📱 MOBILE MENU */}
      {open && (
        <div className="md:hidden relative px-6 py-6 bg-white/95 backdrop-blur-xl border-t shadow-lg">
          
          <div className="flex flex-col gap-5 text-gray-800 font-medium">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/campaigns" onClick={() => setOpen(false)}>Campaigns</Link>
            <Link href="/impact" onClick={() => setOpen(false)}>Impact</Link>
            <Link href="/stories" onClick={() => setOpen(false)}>Stories</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            {/* Divider */}
            <div className="border-t pt-4 mt-2" />

            {/* CTA */}
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="bg-green-600 text-white text-center py-3 rounded-full shadow-lg"
            >
              Donate Now
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}