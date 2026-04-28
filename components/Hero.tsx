"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">

      {/* 🌈 BACKGROUND SYSTEM */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-700 to-lime-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[3px]" />

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center text-center px-6 text-white">
        
        <div className="max-w-5xl">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Feed a Life.{" "}
            <span className="text-yellow-300">Change a Future.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            One Meal One Hope is more than just an NGO—it is a movement powered by compassion, humanity, and action.
            Every single day, millions of people struggle with hunger. Through your support, we ensure that at least one meal reaches those who need it most.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="px-8 py-3 bg-black rounded-full shadow-xl hover:scale-105 transition">
              Donate Now
            </Link>
            <Link href="/campaigns" className="px-8 py-3 bg-white text-green-700 rounded-full hover:scale-105 transition">
              View Campaigns
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              ["10,000+", "Meals Provided"],
              ["800+", "Volunteers"],
              ["75+", "Cities"],
            ].map(([num, label], i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
                <h3 className="text-3xl font-bold">{num}</h3>
                <p className="text-sm text-gray-200">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✨ EXTENDED STORY SECTION */}
      <section className="relative z-10 py-24 px-6 text-center text-white max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold">Why This Mission Matters</h2>

        <p className="mt-8 text-lg leading-relaxed text-gray-100">
          Hunger is not just a lack of food—it is a lack of opportunity, dignity, and hope. 
          At One Meal One Hope, we believe that solving hunger begins with small, consistent actions.
          A single meal may seem insignificant, but to someone who hasn’t eaten all day, it means everything.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-gray-100">
          Our mission is rooted in the belief that change doesn’t come from one big act—it comes from thousands of small acts of kindness.
          Every donor, every volunteer, and every supporter becomes part of a larger ecosystem of compassion.
        </p>
      </section>

      {/* 📊 IMPACT SECTION */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-white text-center">
          
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg shadow-xl">
            <h3 className="text-2xl font-bold">Daily Feeding</h3>
            <p className="mt-4 text-gray-200">
              Fresh meals prepared and delivered daily to underserved communities.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg shadow-xl">
            <h3 className="text-2xl font-bold">Emergency Relief</h3>
            <p className="mt-4 text-gray-200">
              Immediate response to hunger during disasters and crises.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg shadow-xl">
            <h3 className="text-2xl font-bold">Sustainable Change</h3>
            <p className="mt-4 text-gray-200">
              Long-term programs designed to eliminate hunger at its roots.
            </p>
          </div>

        </div>
      </section>

      {/* 💬 TESTIMONIAL */}
      <section className="relative z-10 py-24 px-6 text-center text-white max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">Voices of Impact</h2>

        <p className="mt-8 text-lg italic text-gray-100">
          “This initiative changed how I see giving. It’s not about how much you give,
          but how many lives you touch.”
        </p>
      </section>

      {/* 🎯 FINAL CTA */}
      <section className="relative z-10 py-24 text-center text-white">
        <h2 className="text-4xl font-bold">Be the Reason Someone Eats Today</h2>
        <p className="mt-4 text-lg text-gray-200">
          Your contribution creates real change—one meal at a time.
        </p>

        <Link
          href="/donate"
          className="inline-block mt-8 px-10 py-4 bg-black rounded-full text-white font-semibold shadow-xl hover:scale-105 transition"
        >
          Start Donating
        </Link>
      </section>

    </div>
  );
}