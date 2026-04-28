import Link from "next/link";

export default function About() {
  return (
    <main className="relative overflow-hidden text-gray-900">

      {/* 🌈 BACKGROUND SYSTEM */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-emerald-100" />
      <div className="fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#22c55e,transparent_40%)]" />
      <div className="fixed inset-0 -z-10 opacity-10 bg-[radial-gradient(circle_at_80%_70%,#10b981,transparent_40%)]" />

      {/* HERO */}
      <section className="py-28 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold">
          About One Meal One Hope
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          A movement driven by compassion, built to eliminate hunger, and powered by people who believe in change.
        </p>
      </section>

      {/* LONG STORY */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center">Our Journey</h2>

        <div className="mt-10 space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Hunger is one of the most pressing challenges in our society today.
            Millions of people struggle daily to access even a single meal.
            This reality inspired the creation of One Meal One Hope.
          </p>

          <p>
            What began as a small effort quickly evolved into a larger mission.
            Volunteers joined, communities supported, and donors believed in the vision.
            Together, we transformed small acts into meaningful impact.
          </p>

          <p>
            Today, we are not just serving meals—we are restoring dignity,
            empowering communities, and building a future where hunger no longer exists.
          </p>
        </div>
      </section>

      {/* VALUES GRID */}
      <section className="py-24 px-6 bg-green-50">
        <h2 className="text-4xl font-bold text-center">What We Stand For</h2>

        <div className="mt-12 grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "Compassion",
            "Transparency",
            "Community",
            "Sustainability",
          ].map((value, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow text-center">
              <h3 className="font-bold text-xl">{value}</h3>
              <p className="mt-2 text-gray-600 text-sm">
                We believe in {value.toLowerCase()} as the foundation of our work.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center">Our Growth</h2>

        <div className="mt-12 space-y-8">
          {[
            ["2020", "Started with small local food drives"],
            ["2021", "Expanded to multiple cities"],
            ["2023", "Reached 10,000+ meals milestone"],
            ["2025", "Building sustainable feeding programs"],
          ].map(([year, text], i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="text-green-600 font-bold text-xl">{year}</div>
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT CARDS */}
      <section className="py-24 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center">Real Impact</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ["10,000+", "Meals Provided"],
            ["800+", "Volunteers"],
            ["75+", "Cities"],
          ].map(([num, label], i) => (
            <div key={i} className="p-8 bg-green-50 rounded-xl text-center shadow">
              <h3 className="text-3xl font-bold text-green-700">{num}</h3>
              <p className="text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center">How We Work</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div>
            <h3 className="font-bold text-xl">1. Collect Donations</h3>
            <p className="mt-2 text-gray-600">
              Funds are collected securely from donors.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">2. Prepare Meals</h3>
            <p className="mt-2 text-gray-600">
              Nutritious meals are prepared with care.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">3. Deliver Impact</h3>
            <p className="mt-2 text-gray-600">
              Meals are distributed to those in need.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold">Our Partners</h2>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          We collaborate with organizations, volunteers, and communities
          to maximize our reach and impact.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {["NGO A", "NGO B", "Community Group", "Local Kitchens"].map(
            (partner, i) => (
              <div key={i} className="px-6 py-3 bg-gray-100 rounded-full">
                {partner}
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <h2 className="text-4xl font-bold">Be Part of the Change</h2>
        <p className="mt-4">
          Together, we can eliminate hunger and spread hope.
        </p>

        <Link
          href="/donate"
          className="inline-block mt-8 px-10 py-4 bg-black rounded-full"
        >
          Donate Now
        </Link>
      </section>

    </main>
  );
}