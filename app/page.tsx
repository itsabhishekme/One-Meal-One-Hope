import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden text-gray-900">

      {/* 🌈 GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-emerald-100" />
      <div className="fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#22c55e,transparent_40%)]" />

      {/* HERO */}
      <section className="min-h-[95vh] flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            One Meal One Hope
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            A mission-driven NGO dedicated to ending hunger by ensuring that
            every individual has access to at least one meal a day. Your support
            is not just a donation—it is a lifeline, a moment of relief, and a
            step toward a better future.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="px-8 py-3 bg-black text-white rounded-full shadow-lg hover:scale-105 transition">
              Donate Now
            </Link>
            <Link href="/campaigns" className="px-8 py-3 bg-green-600 text-white rounded-full hover:scale-105 transition">
              Explore Campaigns
            </Link>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl w-full">
          {[
            ["10,000+", "Meals Served"],
            ["800+", "Volunteers"],
            ["75+", "Cities Covered"],
          ].map(([num, text], i) => (
            <div key={i} className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-green-700">{num}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🌍 LONG STORY SECTION */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Why Hunger Still Exists</h2>

        <p className="mt-8 text-gray-700 leading-relaxed text-lg">
          Hunger is not just about the absence of food—it is about inequality,
          lack of opportunity, and systemic challenges that prevent millions
          from accessing basic necessities. In many parts of India, families
          struggle daily to secure even a single meal.
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed text-lg">
          One Meal One Hope was created to bridge this gap. We believe that no
          act of kindness is too small. Every contribution creates a ripple
          effect, touching lives in ways that go beyond what we can see.
        </p>
      </section>

      {/* 📊 IMPACT */}
      <section className="py-24 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="p-8 bg-white rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">Daily Meals</h3>
            <p className="mt-4 text-gray-600">
              Nutritious meals served every day to underserved communities.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">Emergency Relief</h3>
            <p className="mt-4 text-gray-600">
              Immediate food support during disasters and crises.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">Sustainable Change</h3>
            <p className="mt-4 text-gray-600">
              Programs designed to eliminate hunger long-term.
            </p>
          </div>
        </div>
      </section>

      {/* 📖 EXTENDED STORY */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Our Journey</h2>

        <p className="mt-6 text-gray-700 leading-relaxed">
          What started as a small initiative has grown into a movement powered
          by compassion. Volunteers, donors, and communities come together to
          ensure that no one is left behind.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Every meal served is a story of hope. Every smile we see is a reminder
          that change is possible when people unite for a common cause.
        </p>
      </section>

      {/* 💬 TESTIMONIAL */}
      <section className="py-24 text-center bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <h2 className="text-3xl font-bold">Voices of Change</h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg italic">
          “Supporting One Meal One Hope has been one of the most meaningful
          decisions of my life. It’s not just charity—it’s humanity.”
        </p>
      </section>

      {/* 🎯 FINAL CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold">Be the Reason Someone Eats Today</h2>
        <p className="mt-4 text-gray-600">
          Your contribution can create a real difference.
        </p>

        <Link
          href="/donate"
          className="inline-block mt-8 px-10 py-4 bg-green-600 text-white rounded-full shadow-xl hover:scale-105 transition"
        >
          Start Donating
        </Link>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center">FAQs</h2>

        <div className="mt-10 space-y-6">
          <div>
            <h3 className="font-bold">How is my donation used?</h3>
            <p className="text-gray-600">
              Directly for food preparation and distribution.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Is my payment secure?</h3>
            <p className="text-gray-600">
              Yes, we use trusted and secure gateways.
            </p>
          </div>

          <div>
            <h3 className="font-bold">How can I volunteer?</h3>
            <p className="text-gray-600">
              Join our mission through the contact page.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}