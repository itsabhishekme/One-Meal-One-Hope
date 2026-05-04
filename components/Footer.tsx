"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaCheckCircle,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Auto hide success
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setEmail("");
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative bg-black text-white pt-24 pb-12 px-6 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-green-700/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-extrabold text-green-500 tracking-wide">
              One Meal One Hope
            </h2>
            <p className="mt-5 text-gray-400 text-sm leading-relaxed">
              A mission-driven NGO dedicated to ending hunger by providing meals
              to those in need. Every donation restores dignity and builds hope.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Campaigns", href: "/campaigns" },
                { name: "Donate", href: "/donate" },
                { name: "Contact", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-green-500 transition hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">
              Support
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["FAQs", "Privacy Policy", "Terms & Conditions", "Refund Policy"].map(
                (item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="hover:text-green-500 transition hover:translate-x-1 inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* 💎 NEWSLETTER PREMIUM */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">
              Stay Connected
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get updates on campaigns & impact stories.
            </p>

            <form
              onSubmit={handleSubmit}
              className="relative flex flex-col gap-4 p-5 rounded-2xl border border-gray-800 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,150,0.05)]"
            >

              {/* Floating Input */}
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 pt-6 pb-2 rounded-lg bg-black/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />

                <label
                  className={`absolute left-4 transition-all text-gray-400 text-sm
                    ${
                      focused || email
                        ? "top-1 text-xs text-green-400"
                        : "top-3"
                    }`}
                >
                  Enter your email
                </label>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className={`relative overflow-hidden py-3 rounded-lg font-semibold transition-all duration-300
                ${
                  loading
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-500 to-green-600 hover:scale-[1.02] shadow-lg hover:shadow-green-500/30"
                }`}
              >
                {loading ? "Subscribing..." : "Subscribe"}

                {/* Shine */}
                {!loading && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-700" />
                )}
              </button>

              {/* Success */}
              {success && (
                <div className="flex items-center gap-2 text-green-400 text-sm animate-fade-in">
                  <FaCheckCircle />
                  Successfully subscribed!
                </div>
              )}

              {/* Error */}
              {error && (
                <p className="text-red-400 text-sm animate-fade-in">
                  ⚠️ {error}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* IMPACT */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-14 border-b border-gray-800">
          {[
            { value: "10,000+", label: "Meals Served" },
            { value: "800+", label: "Volunteers" },
            { value: "75+", label: "Cities" },
            { value: "100%", label: "Transparency" },
          ].map((item, i) => (
            <div key={i} className="hover:scale-105 transition">
              <h3 className="text-3xl font-bold text-green-500">
                {item.value}
              </h3>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center py-16">
          <h2 className="text-4xl font-bold">
            Be the Reason Someone Eats Today
          </h2>
          <p className="mt-4 text-gray-400">
            Your small contribution can create real change.
          </p>

          <Link
            href="/donate"
            className="inline-block mt-8 bg-gradient-to-r from-green-500 to-green-600 px-12 py-3 rounded-full font-semibold transition hover:scale-105 shadow-lg hover:shadow-green-500/40"
          >
            Donate Now
          </Link>
        </div>

        {/* SOCIAL */}
        <div className="flex justify-center gap-6 mb-10">
          {[FaInstagram, FaTwitter, FaFacebook, FaLinkedin].map(
            (Icon, i) => (
              <Link
                key={i}
                href="#"
                className="text-gray-400 text-xl p-3 rounded-full border border-gray-700 hover:border-green-500 hover:text-green-500 transition transform hover:scale-110 hover:shadow-green-500/30"
              >
                <Icon />
              </Link>
            )
          )}
        </div>

        {/* FOOTER */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} One Meal One Hope NGO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}