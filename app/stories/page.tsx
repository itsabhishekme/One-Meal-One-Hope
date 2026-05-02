import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Stories of Hope | Real Impact Stories | Hunger to Hope Transformation | One Meal One Hope",
  description:
    "Read powerful real-life stories of hunger, survival, and transformation. Discover how one meal can change lives, restore dignity, and create lasting impact.",
  keywords: [
    "hunger stories",
    "charity impact stories",
    "food donation impact",
    "real life transformation stories",
    "feeding poor India",
    "NGO success stories",
  ],
};

export default function StoriesPage() {
  return (
    <main className="relative overflow-hidden text-gray-900">

      {/* 🌈 BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-emerald-100" />

      {/* HERO */}
      <section className="py-32 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          Stories That <span className="text-green-600">Change Lives</span>
        </h1>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Behind every meal is a story of survival, courage, and transformation.
          These are not just stories—they are proof that small acts can create
          extraordinary change.
        </p>
      </section>

      {/* FEATURE STORY */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="h-96 rounded-3xl bg-gradient-to-br from-green-400 to-emerald-600 shadow-2xl animate-pulse" />

        <div>
          <h2 className="text-4xl font-bold">
            When One Meal Changed Everything
          </h2>

          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              Ramesh was a daily wage worker, uncertain if he would earn enough
              to feed his family. Every day was a gamble between survival and hunger.
            </p>

            <p>
              Hunger slowly drained his energy, confidence, and hope.
              It wasn't just about food—it was about losing control over life itself.
            </p>

            <p>
              One meal changed that. Not because it solved everything—
              but because it gave him strength to try again.
            </p>

            <p className="font-semibold text-green-700 text-xl">
              Today, Ramesh feeds others in his community.
            </p>
          </div>
        </div>
      </section>

      {/* STORY GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          More Stories of Transformation
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {stories.map((story, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-bold">{story.title}</h3>
              <p className="mt-3 text-gray-600">{story.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LONG FORM STORY (SEO BOOST) */}
      <section className="py-28 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          The Reality of Hunger in India
        </h2>

        <div className="mt-10 space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Hunger is not always visible—but it is everywhere. Millions struggle
            daily without access to proper nutrition. It affects children’s education,
            adults’ productivity, and entire communities' future.
          </p>

          <p>
            When a person is hungry, they are not just missing food—they are missing
            opportunity, stability, and dignity.
          </p>

          <p>
            A single meal can restore more than energy—it restores belief.
            Belief that tomorrow can be better.
          </p>

          <p>
            These stories are living proof that even the smallest action
            can ripple into life-changing transformation.
          </p>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 bg-green-600 text-white text-center px-6">
        <blockquote className="text-2xl italic max-w-3xl mx-auto">
          “Hunger steals dreams. One meal gives them back.”
        </blockquote>
      </section>

      {/* IMPACT */}
      <section className="py-24 text-center bg-white">
        <h2 className="text-4xl font-bold">Our Impact So Far</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {impact.map((item, i) => (
            <div key={i}>
              <h3 className="text-5xl font-bold text-green-600">
                {item.value}
              </h3>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ (SEO GOLD) */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          {faq.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{item.q}</h3>
              <p className="text-gray-600 mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center">
        <h2 className="text-5xl font-bold">
          Be Part of Someone’s Story
        </h2>

        <p className="mt-6 text-gray-600 text-lg">
          Every donation creates a new beginning.
        </p>

        <Link
          href="/donate"
          className="inline-block mt-10 px-14 py-5 bg-green-600 text-white text-lg rounded-full shadow-xl hover:scale-110 transition"
        >
          Donate Now
        </Link>
      </section>

    </main>
  );
}

/* STORIES */
const stories = [
  {
    title: "A Child Who Found Strength",
    text: "Regular meals helped a child regain focus, energy, and confidence in school.",
  },
  {
    title: "A Mother Who Didn't Give Up",
    text: "Food support allowed her to provide for her children and rebuild her life.",
  },
  {
    title: "A Community That Rose Together",
    text: "Consistent meals united a struggling village and created collective strength.",
  },
];

/* IMPACT */
const impact = [
  { value: "10K+", label: "Meals Served" },
  { value: "500+", label: "Families Helped" },
  { value: "100+", label: "Volunteers" },
];

/* FAQ */
const faq = [
  {
    q: "How does my donation help?",
    a: "Your donation directly funds meals for individuals and families in need.",
  },
  {
    q: "Who receives the meals?",
    a: "Underprivileged communities, daily wage workers, and children across India.",
  },
  {
    q: "Is my contribution transparent?",
    a: "Yes, we ensure full transparency and measurable impact tracking.",
  },
];