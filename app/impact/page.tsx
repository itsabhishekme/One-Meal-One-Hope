import Link from "next/link";
import type { Metadata } from "next";

/* ✅ SEO (optional but recommended) */
export const metadata: Metadata = {
  title: "Our Impact | One Meal One Hope",
  description:
    "Explore how One Meal One Hope is creating real impact by feeding communities and spreading hope.",
};

/* ✅ IMPORTANT: default export MUST be a function */
export default function ImpactPage() {
  return (
    <main className="relative overflow-hidden text-gray-900 min-h-screen">

      {/* 🌈 BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-emerald-100" />
      <div className="fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_30%_30%,#22c55e,transparent_40%)]" />

      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Our Impact
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          Every meal we serve represents hope, dignity, and change.
          Here’s how your support is transforming lives across communities.
        </p>
      </section>

      {/* 📊 STATS */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            ["10,000+", "Meals Served"],
            ["800+", "Volunteers"],
            ["75+", "Cities Covered"],
          ].map(([num, label], i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-3xl font-bold text-green-600">{num}</h3>
              <p className="text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📖 STORY */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Beyond Numbers</h2>

        <p className="mt-6 text-gray-700 leading-relaxed">
          Impact is not just measured in numbers—it is felt in lives changed.
          A single meal can restore energy, dignity, and hope. Behind every
          statistic is a real human story.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          From children receiving their first proper meal in days to families
          finding relief during difficult times, every action creates a ripple
          effect of positivity and transformation.
        </p>
      </section>

      {/* 📈 GOALS */}
      <section className="py-20 px-6 bg-green-50">
        <h2 className="text-3xl font-bold text-center">Our Current Goals</h2>

        <div className="mt-10 max-w-4xl mx-auto space-y-6">
          {[
            ["Feed 50,000 meals this year", "70%"],
            ["Expand to 100 cities", "60%"],
            ["Support 10,000 families", "80%"],
          ].map(([goal, progress], i) => (
            <div key={i}>
              <p className="font-medium">{goal}</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: progress }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 TESTIMONIAL */}
      <section className="py-20 text-center bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <h2 className="text-2xl font-bold">Voices of Impact</h2>

        <p className="mt-6 max-w-2xl mx-auto italic">
          “The work done by this NGO truly changes lives. Every contribution
          creates visible impact.”
        </p>
      </section>

      {/* 🎯 CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Be Part of the Impact</h2>

        <p className="mt-4 text-gray-600">
          Your support can help us reach more lives and expand our mission.
        </p>

        <Link
          href="/donate"
          className="inline-block mt-8 px-8 py-3 bg-green-600 text-white rounded-full shadow hover:scale-105 transition"
        >
          Donate Now
        </Link>
      </section>

    </main>
  );
}