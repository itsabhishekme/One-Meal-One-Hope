"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">

          {/* BRAND + STORY */}
          <div>
            <h2 className="text-2xl font-bold text-green-500">
              One Meal One Hope
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              One Meal One Hope is a mission-driven NGO dedicated to ending hunger
              by providing meals to those in need. Every donation creates impact,
              restores dignity, and builds a future where no one sleeps hungry.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/campaigns">Campaigns</Link></li>
              <li><Link href="/donate">Donate</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#">FAQs</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
              <li><Link href="#">Refund Policy</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-400 text-sm">
              Get updates on our latest campaigns and impact stories.
            </p>

            <form className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-gray-900 border border-gray-700 text-white"
              />
              <button className="bg-green-600 hover:bg-green-700 py-2 rounded text-white font-semibold">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* IMPACT STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-10 border-b border-gray-800">
          <div>
            <h3 className="text-2xl font-bold text-green-500">10,000+</h3>
            <p className="text-gray-400 text-sm">Meals Served</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-500">800+</h3>
            <p className="text-gray-400 text-sm">Volunteers</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-500">75+</h3>
            <p className="text-gray-400 text-sm">Cities</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-500">100%</h3>
            <p className="text-gray-400 text-sm">Transparency</p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold">
            Be the Reason Someone Eats Today
          </h2>
          <p className="mt-4 text-gray-400">
            Your small contribution can bring a big change.
          </p>

          <Link
            href="/donate"
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-semibold"
          >
            Donate Now
          </Link>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-6 text-gray-400 text-sm mb-6">
          <Link href="#">Instagram</Link>
          <Link href="#">Twitter</Link>
          <Link href="#">Facebook</Link>
          <Link href="#">LinkedIn</Link>
        </div>

        {/* BOTTOM */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} One Meal One Hope NGO. All rights reserved.
        </div>

      </div>
    </footer>
  );
}