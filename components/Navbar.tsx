"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Heart,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✨ Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔒 Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Campaigns", href: "/campaigns" },
    { name: "Impact", href: "/impact" },
    { name: "Stories", href: "/stories" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* 🌟 HEADER */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl border-b border-green-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        {/* ✨ Glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-0 top-0 h-44 w-44 rounded-full bg-green-300/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-emerald-300/20 blur-3xl" />
        </div>

        <nav className="max-w-7xl mx-auto h-[78px] px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* ✅ HIDE LOGO WHEN MENU OPEN */}
          <Link
            href="/"
            className={`relative flex items-center gap-3 z-50 transition-all duration-300 ${
              open
                ? "opacity-0 pointer-events-none scale-90"
                : "opacity-100 scale-100"
            }`}
          >
            {/* Logo */}
            <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white shadow-md border border-green-100 overflow-hidden">
              <Image
                src="/favicon.ico"
                alt="Logo"
                width={34}
                height={34}
                className="object-contain"
                priority
              />
            </div>

            {/* Text */}
            <div className="flex flex-col leading-none">
              <span className="text-[1.25rem] sm:text-2xl font-black tracking-tight bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent">
                One Meal
              </span>

              <span className="text-[0.95rem] sm:text-xl font-bold text-gray-900">
                One Hope
              </span>
            </div>
          </Link>

          {/* 🖥️ Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 font-medium hover:text-green-600 transition-all duration-300 group"
              >
                {item.name}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* 💚 Desktop Donate */}
          <div className="hidden md:flex">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold shadow-lg shadow-green-200 hover:scale-105 transition-all duration-300"
            >
              <Heart size={18} fill="white" />

              Donate Now
            </Link>
          </div>

          {/* 📱 Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className={`md:hidden relative z-[70] h-11 w-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
              open
                ? "bg-green-600 text-white shadow-lg"
                : "bg-white/90 backdrop-blur-xl border border-green-100 text-gray-900"
            }`}
          >
            {open ? (
              <X size={24} strokeWidth={2.5} />
            ) : (
              <Menu size={24} strokeWidth={2.5} />
            )}
          </button>
        </nav>
      </header>

      {/* 📱 MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[84%] max-w-sm bg-white transition-transform duration-500 shadow-2xl border-l border-green-100 flex flex-col ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          {/* 🌈 Header */}
          <div className="relative px-6 pt-24 pb-8 border-b border-green-100 bg-gradient-to-b from-green-50 to-white overflow-hidden">
            
            {/* Glow */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-green-100/50 to-emerald-100/40 blur-2xl" />

            {/* Mobile Brand */}
            <div className="relative z-10 flex items-center gap-4">
              
              {/* Logo */}
              <div className="flex items-center justify-center w-[70px] h-[70px] rounded-2xl bg-white border border-green-100 shadow-md overflow-hidden flex-shrink-0">
                <Image
                  src="/favicon.ico"
                  alt="Logo"
                  width={42}
                  height={42}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <h2 className="text-[2rem] font-black leading-none bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  One Meal
                </h2>

                <p className="text-[1.7rem] font-bold text-gray-900 leading-none mt-1">
                  One Hope
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  Every meal can bring hope ❤️
                </p>
              </div>
            </div>
          </div>

          {/* 📚 Nav Links */}
          <div className="flex-1 overflow-y-auto px-6 py-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group"
              >
                <div className="flex items-center justify-between py-5 border-b border-gray-100">
                  <span className="text-[1.05rem] font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    {item.name}
                  </span>

                  <ChevronRight
                    size={18}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-green-600"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* 💚 Bottom CTA */}
          <div className="p-5 border-t border-green-100 bg-white">
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg font-semibold shadow-xl shadow-green-200 hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              <Heart size={20} fill="white" />

              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}