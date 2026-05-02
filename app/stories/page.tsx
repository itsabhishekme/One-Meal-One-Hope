import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories of Hope | One Meal One Hope",
  description:
    "Real stories of transformation, dignity, and survival through food support.",
};

export default function StoriesPage() {
  return (
    <main className="relative overflow-hidden text-gray-900">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-emerald-100" />

      {/* HERO */}
      <section className="py-32 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          Stories That <span className="text-green-600">Stay Forever</span>
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          These are not just stories — they are lives rebuilt, hope restored,
          and dignity returned through one simple act: a meal.
        </p>
      </section>

      {/* FEATURE STORY */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/story1.jpg"
            alt="Featured Story"
            fill
            className="object-cover hover:scale-110 transition duration-700"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold">
            One Meal. One Turning Point.
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Hunger is silent — but its impact is loud.  
            Ramesh faced uncertainty every day, unsure if his family would eat.
          </p>

          <p className="mt-4 text-gray-700">
            One meal didn’t fix everything. But it gave him strength.
            Strength became action. Action became change.
          </p>

          <p className="mt-6 text-green-700 font-semibold text-xl">
            Today, he feeds others.
          </p>
        </div>
      </section>

      {/* FULL WIDTH IMAGE STORY */}
      <section className="relative h-[500px] mx-6 rounded-3xl overflow-hidden shadow-xl">
        <Image
          src="/images/story-banner.jpg"
          alt="Story Banner"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Hunger is Invisible. Impact is Not.
            </h2>
            <p className="mt-4 text-white max-w-2xl mx-auto">
              Millions struggle silently. Your support gives them a voice.
            </p>
          </div>
        </div>
      </section>

      {/* STORY GRID */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Real Stories of Change
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {stories.map((story, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="relative h-60">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{story.title}</h3>
                <p className="mt-3 text-gray-600">{story.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY STRIP (NEW SECTION) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold">
              A Meal Restores More Than Hunger
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
              It restores confidence. It restores dignity.  
              It reminds people they are not forgotten.
            </p>

            <p className="mt-4 text-gray-600">
              When someone eats, they don’t just survive — they begin again.
            </p>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/story3.jpg"
              alt="Hope"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-28 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-center px-6">
        <h2 className="text-4xl font-bold">Voices of Humanity</h2>

        <p className="mt-10 text-2xl italic max-w-3xl mx-auto">
          “That meal gave me strength to work again and feed my children.”
        </p>

        <p className="mt-6 text-lg font-semibold">— A Father</p>
      </section>

      {/* LONG FORM CONTENT */}
      <section className="py-28 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          The Truth About Hunger
        </h2>

        <div className="mt-10 space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Hunger is not always visible. It hides behind silence,
            behind tired eyes, behind missed opportunities.
          </p>

          <p>
            A child who doesn’t eat cannot focus.  
            A worker who doesn’t eat cannot perform.
          </p>

          <p>
            A single meal changes that — instantly.
          </p>

          <p className="font-semibold text-green-700">
            And that change creates a ripple across entire lives.
          </p>
        </div>
      </section>

    </main>
  );
}

/* STORIES */
const stories = [
  {
    title: "A Child Found Strength",
    text: "Regular meals helped regain focus and energy in school.",
    image: "/images/child.jpg",
  },
  {
    title: "A Mother Rebuilt Life",
    text: "Food support gave her the strength to stand again.",
    image: "/images/mother.jpg",
  },
  {
    title: "Village United",
    text: "Meals created unity and hope across a struggling community.",
    image: "/images/village.jpg",
  },
];