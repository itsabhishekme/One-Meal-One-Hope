"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaGooglePlay,
  FaApple,
  FaHeart,
  FaHandsHelping,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
  FaGlobe,
  FaLeaf,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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
      setError("Please enter valid email");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setEmail("");
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-green-500/10 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-emerald-500/10 blur-[180px] rounded-full" />

        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-lime-400/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      </div>

      <div className="relative z-10">

        {/* HERO CTA */}
        <section className="max-w-7xl mx-auto px-6 pt-24">

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-3xl p-10 md:p-16">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,150,0.15),transparent_40%)]" />

            <div className="relative z-10 max-w-4xl">

              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-semibold mb-8">
                <FaHeart />
                Together We Can Change Lives
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight">

                Feed Hope.
                <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-lime-300 bg-clip-text text-transparent">
                  Nourish Humanity.
                </span>

              </h1>

              <p className="mt-8 text-lg text-gray-300 max-w-2xl leading-relaxed">
                One Meal One Hope is dedicated to ending hunger and restoring dignity.
                Every donation creates real impact for families in need.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <Link
                  href="/donate"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/30"
                >
                  Donate Now
                  <FaArrowRight className="group-hover:translate-x-1 transition" />
                </Link>

                <Link
                  href="/become-volunteer"
                  className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.03] px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-white/[0.06] transition-all duration-300"
                >
                  Become Volunteer
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* FEATURES */}
        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {[
              {
                icon: FaHandsHelping,
                title: "Community Support",
                desc: "Helping underprivileged families with food and care.",
              },
              {
                icon: FaShieldAlt,
                title: "Full Transparency",
                desc: "Track every donation and see where your support goes.",
              },
              {
                icon: FaLeaf,
                title: "Healthy Meals",
                desc: "Providing nutritious meals prepared with care.",
              },
              {
                icon: FaGlobe,
                title: "Nationwide Reach",
                desc: "Serving communities across multiple cities and villages.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-8 hover:-translate-y-3 transition-all duration-500"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-green-500/10 to-transparent" />

                <div className="relative z-10">

                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/20">

                    <item.icon className="text-3xl text-white" />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* APP DOWNLOAD */}
        <section className="border-y border-white/10 bg-white/[0.02]">

          <div className="max-w-7xl mx-auto px-6 py-24">

            <div className="text-center">

              <div className="inline-block px-5 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm font-semibold mb-6">
                MOBILE APP AVAILABLE
              </div>

              <h2 className="text-5xl md:text-6xl font-black">
                Download Our NGO App
              </h2>

              <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Donate instantly, explore campaigns, volunteer nearby,
                and track the impact you create directly from your phone.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-14">

                {/* GOOGLE PLAY */}
                <Link
                  href="https://play.google.com/store"
                  target="_blank"
                  className="group w-full md:w-auto flex items-center gap-5 bg-white text-black px-10 py-5 rounded-3xl hover:scale-105 transition-all duration-300 shadow-2xl"
                >

                  <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                    <FaGooglePlay className="text-4xl text-green-600" />
                  </div>

                  <div className="text-left">
                    <p className="text-sm text-gray-600">
                      GET IT ON
                    </p>

                    <h4 className="text-2xl font-black">
                      Google Play
                    </h4>
                  </div>

                </Link>

                {/* APPLE */}
                <Link
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  className="group w-full md:w-auto flex items-center gap-5 bg-zinc-900 border border-white/10 px-10 py-5 rounded-3xl hover:scale-105 transition-all duration-300 shadow-2xl"
                >

                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                    <FaApple className="text-4xl text-white" />
                  </div>

                  <div className="text-left">
                    <p className="text-sm text-gray-400">
                      DOWNLOAD ON THE
                    </p>

                    <h4 className="text-2xl font-black">
                      App Store
                    </h4>
                  </div>

                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* STATS */}
        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              { value: "10K+", label: "Meals Served" },
              { value: "850+", label: "Volunteers" },
              { value: "75+", label: "Cities Reached" },
              { value: "100%", label: "Transparency" },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center rounded-[30px] border border-white/10 bg-white/[0.03] p-10 hover:-translate-y-2 transition-all duration-300"
              >

                <h3 className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  {item.value}
                </h3>

                <p className="mt-4 text-gray-400 text-lg">
                  {item.label}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* MAIN FOOTER */}
        <section className="border-t border-white/10">

          <div className="max-w-7xl mx-auto px-6 py-20">

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

              {/* BRAND */}
              <div>

                <div className="flex items-center gap-4">


                  <div>
                    <h2 className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                      One Meal One Hope
                    </h2>

                    <p className="text-xs tracking-[4px] uppercase text-gray-500 mt-1">
                      NGO FOUNDATION
                    </p>
                  </div>

                </div>

                <p className="mt-8 text-gray-400 leading-relaxed">
                  Together we can build a world where no one sleeps hungry.
                  Every contribution matters and every meal changes a life.
                </p>

                <div className="flex gap-4 mt-8">

                  {[
                    FaInstagram,
                    FaTwitter,
                    FaFacebook,
                    FaLinkedin,
                    FaYoutube,
                  ].map((Icon, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all duration-300 hover:-translate-y-2"
                    >
                      <Icon className="text-xl" />
                    </Link>
                  ))}

                </div>

              </div>

              {/* LINKS */}
              <div>

                <h3 className="text-2xl font-bold mb-8">
                  Quick Links
                </h3>

                <ul className="space-y-5">

                  {[
                    "Home",
                    "About",
                    "Campaigns",
                    "Donate",
                    "Volunteers",
                    "Contact",
                  ].map((item, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-green-400 transition flex items-center gap-3 group"
                      >
                        <span className="w-0 group-hover:w-4 h-[2px] bg-green-500 transition-all duration-300" />
                        {item}
                      </Link>
                    </li>
                  ))}

                </ul>

              </div>

              {/* CONTACT */}
              <div>

                <h3 className="text-2xl font-bold mb-8">
                  Contact Info
                </h3>

                <div className="space-y-6">

                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-green-400 mt-1" />
                    <p className="text-gray-400">
                      Bengaluru, Karnataka, India
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <FaEnvelope className="text-green-400" />
                    <p className="text-gray-400">
                      support@onemealonehope.org
                    </p>
                  </div>

                </div>

              </div>

              {/* NEWSLETTER */}
              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Stay Updated
                </h3>

                <p className="text-gray-400 mb-8 leading-relaxed">
                  Subscribe for updates, impact stories, and latest campaigns.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  <div className="relative">

                    <input
                      type="email"
                      value={email}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-6 pt-7 pb-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <label
                      className={`absolute left-6 transition-all duration-300 text-gray-500
                      ${focused || email
                          ? "top-2 text-xs text-green-400"
                          : "top-5 text-sm"
                        }`}
                    >
                      Enter your email
                    </label>

                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-5 rounded-2xl font-bold transition-all duration-300
                    ${loading
                        ? "bg-gray-700"
                        : "bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/30"
                      }`}
                  >
                    {loading ? "Please wait..." : "Subscribe Now"}
                  </button>

                  {success && (
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <FaCheckCircle />
                      Successfully subscribed!
                    </div>
                  )}

                  {error && (
                    <p className="text-red-400 text-sm">
                      ⚠️ {error}
                    </p>
                  )}

                </form>

              </div>

            </div>

            {/* BOTTOM */}
            <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-gray-500">

              <p>
                © {new Date().getFullYear()} One Meal One Hope NGO.
                All rights reserved.
              </p>

              <div className="flex items-center gap-6">

                <Link
                  href="/privacy-policy"
                  className="hover:text-green-400 transition"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms-and-conditions"
                  className="hover:text-green-400 transition"
                >
                  Terms & Conditions
                </Link>

                <Link
                  href="/support"
                  className="hover:text-green-400 transition"
                >
                  Support
                </Link>

              </div>

            </div>

          </div>

        </section>

      </div>

    </footer>
  );
}