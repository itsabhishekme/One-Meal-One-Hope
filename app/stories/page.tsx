import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories of Hope | One Meal One Hope",
  description:
    "Real stories of lives transformed through One Meal One Hope. See the impact of your support.",
};

export default function StoriesPage() {
  return (
    <main className="relative overflow-hidden text-gray-900">

      {/* 🌈 BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-emerald-100" />
      <div className="fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_25%_30%,#22c55e,transparent_40%)]" />
      <div className="fixed inset-0 -z-10 opacity-10 bg-[radial-gradient(circle_at_80%_70%,#10b981,transparent_40%)]" />

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Stories of Hope
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          Behind every meal is a story. Behind every donation is a life changed.
          These are the real voices of people whose lives have been touched by
          One Meal One Hope.
        </p>
      </section>

      {/* 📖 FEATURED STORY */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
          <h2 className="text-3xl font-bold">A Meal That Changed Everything</h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Ramesh, a daily wage worker, struggled to provide meals for his family.
            Some days, they had to sleep hungry. When our volunteers reached his
            community, something changed.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            A single meal gave him the strength to keep going. Today, he not only
            supports his family but also volunteers with us to help others.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            This is what impact looks like—not just food, but hope restored.
          </p>
        </div>
      </section>

      {/* 📚 STORIES GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">More Stories</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "From Hunger to Hope",
              text: "A child who once struggled now smiles with confidence.",
            },
            {
              title: "A Community United",
              text: "Volunteers came together to feed an entire village.",
            },
            {
              title: "Small Act, Big Change",
              text: "One donation helped transform multiple lives.",
            },
            {
              title: "Festival of Giving",
              text: "Meals shared during festivals brought joy to many families.",
            },
            {
              title: "Helping Hands",
              text: "Young volunteers stepping up to make a difference.",
            },
            {
              title: "New Beginnings",
              text: "A fresh start for families in need.",
            },
          ].map((story, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-bold text-xl">{story.title}</h3>
              <p className="mt-3 text-gray-600">{story.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 TESTIMONIAL SECTION */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-center px-6">
        <h2 className="text-3xl font-bold">Voices from the Ground</h2>

        <div className="mt-10 max-w-3xl mx-auto space-y-6">
          <p className="italic">
            “This initiative didn’t just feed us—it gave us hope.”
          </p>
          <p className="italic">
            “I never imagined a simple meal could change my life so much.”
          </p>
        </div>
      </section>

      {/* 📖 LONG STORY SECTION (SEO + DEPTH) */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Why Stories Matter</h2>

        <p className="mt-6 text-gray-700 leading-relaxed">
          Stories are more powerful than numbers. While statistics show scale,
          stories show humanity. They remind us that behind every number is a
          person, a family, and a life.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          When you donate, you become part of these stories. You become part of
          someone’s journey from struggle to stability, from hunger to hope.
        </p>
      </section>

      {/* 🎯 CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold">Be Part of the Next Story</h2>

        <p className="mt-4 text-gray-600">
          Your contribution can create a story of hope for someone in need.
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