"use client";

import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-4 gap-10 border-b border-gray-800 pb-12">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-bold text-green-500 tracking-wide">
              One Meal One Hope
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              A mission-driven NGO dedicated to ending hunger by providing meals
              to those in need. Every donation restores dignity and builds hope.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-green-500 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-green-500 transition">About Us</Link></li>
              <li><Link href="/campaigns" className="hover:text-green-500 transition">Campaigns</Link></li>
              <li><Link href="/donate" className="hover:text-green-500 transition">Donate</Link></li>
              <li><Link href="/contact" className="hover:text-green-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Support
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-green-500 transition">FAQs</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition">Refund Policy</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Stay Connected
            </h3>
            <p className="text-gray-400 text-sm">
              Get updates on campaigns & impact stories.
            </p>

            <form className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-green-500"
              />
              <button className="bg-green-600 hover:bg-green-700 py-2 rounded text-white font-semibold transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* IMPACT STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-12 border-b border-gray-800">
          {[
            { value: "10,000+", label: "Meals Served" },
            { value: "800+", label: "Volunteers" },
            { value: "75+", label: "Cities" },
            { value: "100%", label: "Transparency" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-2xl font-bold text-green-500">
                {item.value}
              </h3>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center py-14">
          <h2 className="text-3xl font-bold">
            Be the Reason Someone Eats Today
          </h2>
          <p className="mt-4 text-gray-400">
            Your small contribution can create real change.
          </p>

          <Link
            href="/donate"
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 px-10 py-3 rounded-full font-semibold transition shadow-lg hover:shadow-green-500/30"
          >
            Donate Now
          </Link>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 mb-8">
          {[
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaFacebook />, link: "#" },
            { icon: <FaLinkedin />, link: "#" },
          ].map((social, i) => (
            <Link
              key={i}
              href={social.link}
              className="text-gray-400 text-xl p-3 rounded-full border border-gray-700 hover:border-green-500 hover:text-green-500 transition transform hover:scale-110"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} One Meal One Hope NGO. All rights reserved.
        </div>

      </div>
    </footer>
  );
}