import Link from "next/link";

type Campaign = {
  id: string;
  title: string;
  description: string;
  raised: number;
  goal: number;
  image: string;
};

const campaigns: Campaign[] = [
  {
    id: "feed-children",
    title: "Feed 100 Children",
    description: "Provide nutritious meals to underprivileged children.",
    raised: 35000,
    goal: 50000,
    image: "/images/child-meal.jpg",
  },
  {
    id: "village-drive",
    title: "Village Food Drive",
    description: "Deliver food supplies to remote villages.",
    raised: 42000,
    goal: 80000,
    image: "/images/village.jpg",
  },
  {
    id: "emergency",
    title: "Emergency Hunger Relief",
    description: "Immediate food support during crises.",
    raised: 60000,
    goal: 100000,
    image: "/images/emergency.jpg",
  },
  {
    id: "school",
    title: "School Meal Program",
    description: "Daily meals for students to improve education.",
    raised: 25000,
    goal: 70000,
    image: "/images/school.jpg",
  },
  {
    id: "urban",
    title: "Urban Hunger Support",
    description: "Support homeless communities in cities.",
    raised: 30000,
    goal: 60000,
    image: "/images/urban.jpg",
  },
  {
    id: "festival",
    title: "Festival Food Donation",
    description: "Ensure no one sleeps hungry during festivals.",
    raised: 15000,
    goal: 40000,
    image: "/images/festival.jpg",
  },

  // ⭐ NEW 7TH CAMPAIGN
  {
    id: "women-support",
    title: "Women & Child Nutrition",
    description: "Special nutrition support for women & infants.",
    raised: 20000,
    goal: 90000,
    image: "/images/women.jpg",
  },
];

export default function Campaigns() {
  return (
    <main className="relative overflow-hidden text-gray-900">

      {/* 🌈 BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-emerald-100" />
      <div className="fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#22c55e,transparent_40%)]" />

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
          One Meal. One Hope.
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          Just ₹50 can feed one person. Choose a campaign and make an immediate impact.
        </p>
      </section>

      {/* IMPACT BADGES */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            ["🍽", "10,000+", "Meals Served"],
            ["❤️", "2,500+", "Donors"],
            ["📍", "75+", "Cities"],
            ["🚀", "100%", "Transparency"],
          ].map(([icon, num, label], i) => (
            <div key={i} className="bg-white/70 p-6 rounded-xl shadow">
              <div className="text-2xl">{icon}</div>
              <h3 className="text-xl font-bold text-green-700">{num}</h3>
              <p className="text-gray-600 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAMPAIGNS */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-center">Active Campaigns</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {campaigns.map((c) => {
            const progress = Math.min((c.raised / c.goal) * 100, 100);
            const remaining = c.goal - c.raised;
            const meals = Math.floor(c.raised / 50);

            return (
              <div
                key={c.id}
                className="group bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition"
              >
                {/* IMAGE */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-700">
                    {c.title}
                  </h3>

                  <p className="mt-2 text-gray-600 text-sm">
                    {c.description}
                  </p>

                  {/* PROGRESS */}
                  <div className="mt-5">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-3"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div className="flex justify-between text-sm mt-2 text-gray-600">
                      <span>₹{c.raised.toLocaleString()}</span>
                      <span>Goal ₹{c.goal.toLocaleString()}</span>
                    </div>

                    {/* 🔥 IMPORTANT ADDITION */}
                    <div className="mt-2 text-xs text-red-500 font-semibold">
                      ₹{remaining.toLocaleString()} still required
                    </div>

                    <div className="mt-1 text-xs text-green-600">
                      🍽 {meals} meals served
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/donate?campaign=${c.id}`}
                    className="block mt-6 text-center w-full py-3 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition"
                  >
                    Support This Campaign ❤️
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold">Your Small Help = Someone’s Meal</h2>
        <p className="mt-4 text-gray-600">
          Don't wait. Hunger doesn't.
        </p>

        <Link
          href="/donate"
          className="inline-block mt-8 px-12 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full shadow-xl hover:scale-110 transition"
        >
          Donate Now 🚀
        </Link>
      </section>

    </main>
  );
}