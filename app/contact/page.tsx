"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <main className="relative overflow-hidden text-gray-900">

      {/* 🌈 BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-emerald-100" />
      <div className="fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_80%_20%,#22c55e,transparent_40%)]" />

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <h1 className="text-5xl font-extrabold">Get in Touch</h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700">
          Have questions, ideas, or want to contribute? We’d love to hear from you.
          Every message matters and helps us grow stronger together.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        
        <div className="p-6 bg-white/70 backdrop-blur rounded-xl shadow">
          <h3 className="font-bold text-xl">Email</h3>
          <p className="mt-2 text-gray-600">support@onemealonehope.org</p>
        </div>

        <div className="p-6 bg-white/70 backdrop-blur rounded-xl shadow">
          <h3 className="font-bold text-xl">Phone</h3>
          <p className="mt-2 text-gray-600">+91 799-118-5414</p>
        </div>

        <div className="p-6 bg-white/70 backdrop-blur rounded-xl shadow">
          <h3 className="font-bold text-xl">Location</h3>
          <p className="mt-2 text-gray-600">India</p>
        </div>

      </section>

      {/* CONTACT FORM */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-center">Send a Message</h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <textarea
              placeholder="Your Message"
              required
              rows={5}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* STORY / SUPPORT TEXT */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">We’re Here to Help</h2>

        <p className="mt-6 text-gray-700 leading-relaxed">
          Whether you’re looking to donate, volunteer, partner with us, or simply
          learn more about our mission, we’re always open to connecting with you.
          Every message we receive is an opportunity to build stronger
          relationships and expand our impact.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Our team works tirelessly to respond to every query, ensuring that your
          voice is heard and valued.
        </p>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center">Frequently Asked Questions</h2>

        <div className="mt-10 space-y-6">
          <div>
            <h3 className="font-bold">How can I donate?</h3>
            <p className="text-gray-600">
              Visit our donation page and choose a campaign.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Can I volunteer?</h3>
            <p className="text-gray-600">
              Yes, we welcome volunteers. Contact us to get started.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Do you provide updates?</h3>
            <p className="text-gray-600">
              Yes, we regularly share updates about campaigns and impact.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <h2 className="text-4xl font-bold">Let’s Create Change Together</h2>
        <p className="mt-4">
          Reach out today and be part of something meaningful.
        </p>
      </section>

    </main>
  );
}