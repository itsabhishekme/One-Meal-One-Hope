"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Play } from "lucide-react";

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
          ? "bg-white/80 backdrop-blur-2xl shadow-xl border-b border-green-100"
          : "bg-transparent"
      }`}
    >
      {/* 🌈 Glow background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-200/30 via-white/20 to-emerald-200/30 blur-3xl opacity-80" />

      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 🌿 LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-extrabold text-green-600 group-hover:scale-105 transition duration-300">
              One Meal
            </span>

            <span className="text-2xl font-bold text-gray-900 group-hover:scale-105 transition duration-300">
              One Hope
            </span>
          </div>
        </Link>

        {/* 🖥️ DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link
            href="/"
            className="hover:text-green-600 transition duration-300 hover:scale-105"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-green-600 transition duration-300 hover:scale-105"
          >
            About
          </Link>

          <Link
            href="/campaigns"
            className="hover:text-green-600 transition duration-300 hover:scale-105"
          >
            Campaigns
          </Link>

          <Link
            href="/impact"
            className="hover:text-green-600 transition duration-300 hover:scale-105"
          >
            Impact
          </Link>

          <Link
            href="/stories"
            className="hover:text-green-600 transition duration-300 hover:scale-105"
          >
            Stories
          </Link>

          <Link
            href="/contact"
            className="hover:text-green-600 transition duration-300 hover:scale-105"
          >
            Contact
          </Link>
        </div>

        {/* 🚀 CTA */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Donate Button */}
          <Link
            href="/donate"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-2.5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Donate Now
          </Link>

          {/* Google Play Button */}
          <Link
            href="https://upbc408cdvxl36a8.public.blob.vercel-storage.com/app-debug.apk"
            target="_blank"
            className="group flex items-center gap-2 border border-green-200 bg-white/90 hover:bg-green-50 text-gray-800 px-5 py-2.5 rounded-full shadow-md transition-all duration-300 hover:scale-105 backdrop-blur-xl"
          >
            {/* Google Play Icon */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 via-emerald-500 to-lime-400 flex items-center justify-center shadow-md">
              <Play
                size={16}
                className="text-white fill-white ml-0.5"
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-[10px] text-gray-500">
                Get it on
              </span>

              <span className="text-sm font-semibold group-hover:text-green-700 transition">
                Google Play
              </span>
            </div>
          </Link>
        </div>

        {/* 📱 MOBILE BUTTON */}
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
        <div className="md:hidden relative px-6 py-6 bg-white/95 backdrop-blur-2xl border-t border-green-100 shadow-2xl">
          
          <div className="flex flex-col gap-5 text-gray-800 font-medium">
            
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link href="/campaigns" onClick={() => setOpen(false)}>
              Campaigns
            </Link>

            <Link href="/impact" onClick={() => setOpen(false)}>
              Impact
            </Link>

            <Link href="/stories" onClick={() => setOpen(false)}>
              Stories
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            {/* Divider */}
            <div className="border-t pt-4 mt-2 border-green-100" />

            {/* Donate CTA */}
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-3 rounded-full shadow-lg"
            >
              Donate Now
            </Link>

            {/* Google Play CTA */}
            <Link
              href="https://upbc408cdvxl36a8.public.blob.vercel-storage.com/app-debug.apk"
              target="_blank"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-3 border border-green-200 bg-green-50 hover:bg-green-100 text-gray-800 py-3 rounded-full shadow-md transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 via-emerald-500 to-lime-400 flex items-center justify-center shadow">
                <Play
                  size={18}
                  className="text-white fill-white ml-0.5"
                />
              </div>

              <div className="flex flex-col leading-tight text-left">
                <span className="text-[10px] text-gray-500">
                  Download from
                </span>

                <span className="text-sm font-semibold text-green-700">
                  Google Play
                </span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}