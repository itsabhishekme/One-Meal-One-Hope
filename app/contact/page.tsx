"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-gray-900">

      {/* 🌈 BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-green-100" />
      <div className="fixed inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_10%_10%,#22c55e,transparent_40%)]" />
      <div className="fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_90%_90%,#16a34a,transparent_40%)]" />

      {/* 🎉 SUCCESS OVERLAY */}
      {status === "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-xl">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-md animate-[fadeIn_0.4s_ease]">

            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
              <span className="text-4xl animate-bounce">✅</span>
            </div>

            <h2 className="text-3xl font-bold text-green-600">
              Message Delivered
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Your message has been successfully sent.  
              We truly appreciate you reaching out and will respond shortly.
            </p>

            <button
              onClick={() => setStatus("idle")}
              className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg hover:scale-105 transition"
            >
              Send Another Message
            </button>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
          Let’s Connect
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto">
          Share your thoughts, ideas, or questions — we’re here to listen and respond.
        </p>
      </section>

      {/* FORM */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-white/40">

          <h2 className="text-3xl font-bold text-center mb-10">
            Send a Message
          </h2>

          {/* ERROR */}
          {status === "error" && (
            <div className="mb-6 p-4 rounded-xl bg-red-100 border border-red-300 text-red-600 text-center animate-[shake_0.3s]">
              ❌ Something went wrong. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* NAME */}
            <div className="relative">
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="peer w-full border-b-2 border-gray-300 py-3 placeholder-transparent focus:border-green-500 outline-none"
                placeholder="Name"
              />
              <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                peer-focus:-top-3 peer-focus:text-sm peer-focus:text-green-600">
                Your Name
              </label>
            </div>

            {/* EMAIL */}
            <div className="relative">
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="peer w-full border-b-2 border-gray-300 py-3 placeholder-transparent focus:border-green-500 outline-none"
                placeholder="Email"
              />
              <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                peer-focus:-top-3 peer-focus:text-sm peer-focus:text-green-600">
                Your Email
              </label>
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="peer w-full border-b-2 border-gray-300 py-3 placeholder-transparent focus:border-green-500 outline-none"
                placeholder="Message"
              />
              <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                peer-focus:-top-3 peer-focus:text-sm peer-focus:text-green-600">
                Your Message
              </label>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg hover:scale-[1.02] transition flex justify-center items-center"
            >
              {status === "loading" ? (
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
              ) : (
                "Send Message 🚀"
              )}
            </button>

          </form>
        </div>
      </section>

      {/* FOOTER */}
      <div className="text-center pb-10 text-gray-500 text-sm">
        Built with care • Your message matters
      </div>

    </main>
  );
}