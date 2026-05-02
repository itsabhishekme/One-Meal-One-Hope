"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 }
};

// 🔢 Animated Counter Hook
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

export default function About() {
  const meals = useCounter(10000);
  const volunteers = useCounter(800);
  const cities = useCounter(75);

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-white via-green-50 to-white">

      {/* 🌈 FLOATING BACKGROUND */}
      <div className="absolute w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-20 top-20 left-10"></div>
      <div className="absolute w-96 h-96 bg-emerald-400 rounded-full blur-3xl opacity-20 bottom-20 right-10"></div>

      {/* 🌟 HERO */}
      <section className="py-36 text-center px-6 bg-gradient-to-r from-green-600 to-emerald-500 text-white relative">
        <motion.h1 initial="hidden" animate="show" variants={fadeUp} className="text-6xl font-extrabold">
          Ending Hunger, One Meal at a Time
        </motion.h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto opacity-90">
          We don’t just serve food — we serve dignity, hope, and humanity.
        </p>

        <Link href="/donate" className="inline-block mt-10 px-10 py-4 bg-black rounded-full text-lg shadow-xl hover:scale-110 transition">
          Donate Now ❤️
        </Link>
      </section>

      {/* 📊 LIVE IMPACT */}
      <section className="py-28 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Real-Time Impact</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {[
            ["🍛", meals, "Meals Served"],
            ["🙋‍♂️", volunteers, "Volunteers"],
            ["🌍", cities, "Cities"],
          ].map(([icon, num, label], i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }} className="p-10 bg-white rounded-3xl shadow-xl">
              <div className="text-4xl">{icon}</div>
              <h3 className="text-5xl font-bold text-green-600 mt-3">{num}+</h3>
              <p className="mt-2 text-gray-600">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📖 STORY EXPANDED */}
      <section className="py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp}>
          <h2 className="text-4xl font-bold">Why We Exist</h2>

          <p className="mt-6 text-gray-700">
            Every night, millions sleep hungry — not because food doesn’t exist, but because access doesn’t.
          </p>

          <p className="mt-4 text-gray-700">
            We exist to bridge that gap. To turn surplus into survival. To turn kindness into action.
          </p>

          <p className="mt-4 text-green-600 font-semibold">
            This is not charity — this is humanity.
          </p>
        </motion.div>

        <motion.div className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl shadow-2xl border">
          <h3 className="text-2xl font-bold text-green-700">Our Approach</h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>✔ Local food distribution networks</li>
            <li>✔ Volunteer-driven execution</li>
            <li>✔ Transparent donation tracking</li>
            <li>✔ Sustainable sourcing</li>
          </ul>
        </motion.div>
      </section>

      {/* 🤝 TRUST SECTION */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold">Trusted By People Like You</h2>
        <p className="mt-4 text-gray-600">100% transparency. Real impact.</p>

        <div className="mt-10 flex justify-center gap-10 flex-wrap">
          {["Verified NGO", "Secure Payments", "Impact Reports"].map((item, i) => (
            <div key={i} className="px-6 py-3 bg-green-100 rounded-full text-green-700 font-medium">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ⏳ TIMELINE */}
      <section className="py-28 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center">Our Journey</h2>

        <div className="mt-16 max-w-3xl mx-auto border-l-4 border-green-500 pl-8 space-y-10">
          {[
            ["2022", "Started with 50 meals"],
            ["2023", "Expanded across cities"],
            ["2024", "10,000+ meals milestone"],
            ["2025", "Scaling across India"],
          ].map(([year, text], i) => (
            <div key={i}>
              <h3 className="text-green-600 font-bold">{year}</h3>
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ❓ FAQ */}
      <section className="py-28 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center">FAQs</h2>

        <div className="mt-10 space-y-6">
          {[
            ["Where does my donation go?", "Directly into meals for people in need."],
            ["Is it transparent?", "Yes, we provide regular reports."],
            ["Can I volunteer?", "Absolutely, join us anytime."],
          ].map(([q, a], i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-semibold">{q}</h3>
              <p className="text-gray-600 mt-2">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 FINAL CTA */}
      <section className="py-32 text-center bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <h2 className="text-5xl font-extrabold">You Can Change Someone’s Today</h2>

        <p className="mt-6 text-lg">
          Even ₹10 feeds hope.
        </p>

        <Link href="/donate" className="inline-block mt-10 px-12 py-5 bg-black rounded-full text-lg shadow-xl hover:scale-110 transition">
          Donate Now ❤️
        </Link>
      </section>

    </main>
  );
}