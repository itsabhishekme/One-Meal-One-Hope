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

      {/* ============================
      IMPACT SECTION
============================= */}

      <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">

        {/* Background Blur */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-flex items-center rounded-full bg-green-500/20 px-5 py-2 text-green-200 font-semibold">
              🌍 Creating Lasting Impact
            </span>

            <h2 className="mt-6 text-5xl font-black text-white">
              Every Donation Changes Lives
            </h2>

            <p className="mt-6 text-lg text-green-100 leading-8">
              Together with thousands of generous supporters, we provide food,
              education, healthcare, and emergency relief to vulnerable communities.
              Every contribution creates hope for a brighter tomorrow.
            </p>

          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mt-20">

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 text-center shadow-xl">
              <div className="text-5xl">🍽</div>
              <h3 className="mt-5 text-5xl font-black text-white">
                120K+
              </h3>
              <p className="mt-2 text-green-100">
                Meals Distributed
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 text-center shadow-xl">
              <div className="text-5xl">👨‍👩‍👧‍👦</div>
              <h3 className="mt-5 text-5xl font-black text-white">
                18K+
              </h3>
              <p className="mt-2 text-green-100">
                Families Supported
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 text-center shadow-xl">
              <div className="text-5xl">🏥</div>
              <h3 className="mt-5 text-5xl font-black text-white">
                320+
              </h3>
              <p className="mt-2 text-green-100">
                Medical Camps
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 text-center shadow-xl">
              <div className="text-5xl">❤️</div>
              <h3 className="mt-5 text-5xl font-black text-white">
                9,500+
              </h3>
              <p className="mt-2 text-green-100">
                Active Donors
              </p>
            </div>

          </div>

          {/* Impact Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mt-24">

            {/* Card 1 */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 shadow-xl hover:-translate-y-2 transition">

              <div className="text-5xl">🍛</div>

              <h3 className="mt-6 text-3xl font-bold text-white">
                Daily Feeding
              </h3>

              <p className="mt-4 text-green-100 leading-7">
                Fresh, nutritious meals are prepared every day and delivered to
                children, elderly people, and families living below the poverty line.
              </p>

              <div className="mt-8">

                <div className="flex justify-between text-green-100">
                  <span>Goal Achieved</span>
                  <span>92%</span>
                </div>

                <div className="mt-3 h-3 rounded-full bg-white/20">

                  <div className="h-full w-[92%] rounded-full bg-green-400"></div>

                </div>

              </div>

            </div>

            {/* Card 2 */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 shadow-xl hover:-translate-y-2 transition">

              <div className="text-5xl">🚑</div>

              <h3 className="mt-6 text-3xl font-bold text-white">
                Emergency Relief
              </h3>

              <p className="mt-4 text-green-100 leading-7">
                During floods, earthquakes, and humanitarian crises, our volunteers
                rapidly distribute food, drinking water, medicine, and emergency kits.
              </p>

              <div className="mt-8">

                <div className="flex justify-between text-green-100">
                  <span>Preparedness</span>
                  <span>87%</span>
                </div>

                <div className="mt-3 h-3 rounded-full bg-white/20">

                  <div className="h-full w-[87%] rounded-full bg-blue-400"></div>

                </div>

              </div>

            </div>

            {/* Card 3 */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 shadow-xl hover:-translate-y-2 transition">

              <div className="text-5xl">🌱</div>

              <h3 className="mt-6 text-3xl font-bold text-white">
                Sustainable Change
              </h3>

              <p className="mt-4 text-green-100 leading-7">
                Beyond food, we empower families through education, skill development,
                farming support, and self-employment opportunities.
              </p>

              <div className="mt-8">

                <div className="flex justify-between text-green-100">
                  <span>Long-Term Impact</span>
                  <span>95%</span>
                </div>

                <div className="mt-3 h-3 rounded-full bg-white/20">

                  <div className="h-full w-[95%] rounded-full bg-yellow-400"></div>

                </div>

              </div>

            </div>

            {/* Card 4 */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 shadow-xl hover:-translate-y-2 transition">

              <div className="text-5xl">🎓</div>

              <h3 className="mt-6 text-3xl font-bold text-white">
                Education Support
              </h3>

              <p className="mt-4 text-green-100 leading-7">
                Scholarships, school meals, books, uniforms, and digital learning
                ensure every child has access to quality education.
              </p>

            </div>

            {/* Card 5 */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 shadow-xl hover:-translate-y-2 transition">

              <div className="text-5xl">💧</div>

              <h3 className="mt-6 text-3xl font-bold text-white">
                Clean Water
              </h3>

              <p className="mt-4 text-green-100 leading-7">
                Safe drinking water projects reduce disease and improve the health of
                thousands of rural families every year.
              </p>

            </div>

            {/* Card 6 */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 shadow-xl hover:-translate-y-2 transition">

              <div className="text-5xl">🤝</div>

              <h3 className="mt-6 text-3xl font-bold text-white">
                Community Development
              </h3>

              <p className="mt-4 text-green-100 leading-7">
                Working hand-in-hand with local communities to build sustainable,
                resilient, and self-sufficient villages.
              </p>

            </div>

          </div>

          {/* Why Your Donation Matters */}
          <div className="mt-24 rounded-3xl bg-white/10 backdrop-blur-xl p-12">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              <div>

                <h2 className="text-4xl font-bold text-white">
                  Why Every Contribution Matters
                </h2>

                <p className="mt-6 text-green-100 leading-8">
                  Even a small donation can provide meals, healthcare, education,
                  and emergency assistance to someone in need. Together we build
                  stronger, healthier communities.
                </p>

                <ul className="mt-8 space-y-4 text-green-100">
                  <li>✅ 100% Transparent Fund Usage</li>
                  <li>✅ Tax Benefit Eligible</li>
                  <li>✅ Secure Online Payments</li>
                  <li>✅ Real-Time Campaign Updates</li>
                  <li>✅ Verified NGO Operations</li>
                </ul>

              </div>

              <div className="rounded-3xl bg-green-500/20 p-10">

                <h3 className="text-3xl font-bold text-white">
                  Together We Can End Hunger
                </h3>

                <p className="mt-5 text-green-100 leading-8">
                  Join thousands of supporters helping us create a future where no
                  child sleeps hungry.
                </p>

                <button className="mt-8 rounded-xl bg-white px-8 py-4 text-lg font-bold text-green-700 transition hover:scale-105">
                  ❤️ Donate Today
                </button>

              </div>

            </div>

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