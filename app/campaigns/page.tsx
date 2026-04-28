import CampaignCard from "@/components/CampaignCard";
import Link from "next/link";

export default function Campaigns() {
  return (
    <main className="relative overflow-hidden text-gray-900">

      {/* 🌈 BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-emerald-100" />
      <div className="fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#22c55e,transparent_40%)]" />

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Our Campaigns
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          Every campaign is a step toward eliminating hunger. Choose a cause,
          contribute, and be part of a movement that transforms lives.
        </p>
      </section>

      {/* IMPACT STATS */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            ["10,000+", "Meals Delivered"],
            ["500+", "Campaigns Completed"],
            ["75+", "Cities Covered"],
          ].map(([num, label], i) => (
            <div key={i} className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-green-700">{num}</h3>
              <p className="text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAMPAIGNS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center">Active Campaigns</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <CampaignCard title="Feed 100 Children" />
          <CampaignCard title="Village Food Drive" />
          <CampaignCard title="Emergency Hunger Relief" />
          <CampaignCard title="School Meal Program" />
          <CampaignCard title="Urban Hunger Support" />
          <CampaignCard title="Festival Food Donation" />
        </div>
      </section>

      {/* HOW CAMPAIGNS WORK */}
      <section className="bg-green-50 py-24 px-6 text-center">
        <h2 className="text-4xl font-bold">How Our Campaigns Work</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-bold">1. Identify Need</h3>
            <p className="mt-2 text-gray-600">
              We identify communities facing food shortages.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">2. Launch Campaign</h3>
            <p className="mt-2 text-gray-600">
              Fundraising campaigns are launched for specific needs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">3. Deliver Impact</h3>
            <p className="mt-2 text-gray-600">
              Meals are prepared and distributed with transparency.
            </p>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Why Campaigns Matter</h2>

        <p className="mt-6 text-gray-700 leading-relaxed">
          Each campaign is designed to address a specific need. Whether it’s
          feeding children, supporting disaster victims, or helping families
          during difficult times, every campaign creates meaningful impact.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          By contributing to a campaign, you are directly participating in a
          solution. You are not just donating—you are creating change.
        </p>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-center">
        <h2 className="text-3xl font-bold">Supporter Voices</h2>
        <p className="mt-6 max-w-2xl mx-auto italic">
          “Supporting these campaigns gave me a sense of purpose. Knowing that my
          contribution helped someone eat is truly priceless.”
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold">Start Making an Impact Today</h2>
        <p className="mt-4 text-gray-600">
          Choose a campaign and contribute to a better future.
        </p>

        <Link
          href="/donate"
          className="inline-block mt-8 px-10 py-4 bg-green-600 text-white rounded-full shadow-xl hover:scale-105 transition"
        >
          Donate Now
        </Link>
      </section>

    </main>
  );
}