"use client";

import {
  useEffect,
  useId,
  useMemo,
  useState,
  FormEvent,
  ChangeEvent,
} from "react";

/* ================= TYPES ================= */
type FormData = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

/* ================= PAGE ================= */
export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    document.body.style.overflow =
      status === "success" ? "hidden" : "auto";
  }, [status]);

  /* VALIDATION */
  const isValid = useMemo(() => {
    return (
      form.name.trim().length > 0 &&
      /\S+@\S+\.\S+/.test(form.email) &&
      form.message.trim().length > 0
    );
  }, [form]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;

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
    <main className="relative min-h-screen text-gray-900 overflow-x-hidden">

      {/* 🌈 BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-emerald-100" />
      <div className="fixed inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_10%_10%,#22c55e,transparent_40%)]" />

      {/* 🎉 SUCCESS MODAL */}
      {status === "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-lg">
          <div className="bg-white rounded-3xl p-10 text-center shadow-2xl animate-[fadeIn_0.4s_ease]">

            <div className="text-5xl mb-4 animate-bounce">✅</div>

            <h2 className="text-3xl font-bold text-green-600">
              Message Sent
            </h2>

            <p className="mt-3 text-gray-600">
              Thanks for reaching out. We’ll reply soon.
            </p>

            <button
              onClick={() => setStatus("idle")}
              className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg hover:scale-105 transition"
            >
              Send Again
            </button>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="pt-28 pb-14 text-center px-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
          Let’s Connect
        </h1>
        <p className="mt-5 text-gray-600 text-lg">
          Share your thoughts, ideas, or questions
        </p>
      </section>

      {/* FORM */}
      <section className="px-4 pb-28">
        <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-2xl p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/40">

          {status === "error" && (
            <div className="mb-6 p-4 rounded-xl bg-red-100 text-red-600 text-center">
              ❌ Something went wrong
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-10">

            <FloatingInput
              label="Your Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              type="text"
              icon="👤"
            />

            <FloatingInput
              label="Your Email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              type="email"
              icon="📧"
            />

            <FloatingTextarea
              label="Your Message"
              value={form.message}
              onChange={(v) => setForm({ ...form, message: v })}
              icon="💬"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={!isValid || status === "loading"}
              className={`w-full py-4 rounded-xl font-semibold text-white transition ${
                isValid
                  ? "bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-[1.02] shadow-lg"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              {status === "loading"
                ? "Sending..."
                : "Send Message 🚀"}
            </button>

          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center pb-10 text-gray-500 text-sm">
        Built with care • Your message matters
      </footer>
    </main>
  );
}

/* ================= INPUT ================= */
function FloatingInput({
  label,
  value,
  onChange,
  type,
  icon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  icon: string;
}) {
  const id = useId();

  return (
    <div className="relative group">
      <span className="absolute left-4 top-5 text-gray-400 group-focus-within:text-green-600 transition">
        {icon}
      </span>

      <input
        id={id}
        type={type}
        value={value}
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        placeholder=" "
        className="peer w-full border border-gray-300 pl-12 pr-4 pt-6 pb-2 rounded-xl outline-none focus:border-green-500 bg-white/70 transition"
      />

      <label
        htmlFor={id}
        className={`absolute left-12 text-gray-500 transition-all ${
          value ? "top-2 text-sm" : "top-5 text-base"
        } peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600`}
      >
        {label}
      </label>
    </div>
  );
}

/* ================= TEXTAREA ================= */
function FloatingTextarea({
  label,
  value,
  onChange,
  icon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  icon: string;
}) {
  const id = useId();

  return (
    <div className="relative group">
      <span className="absolute left-4 top-5 text-gray-400 group-focus-within:text-green-600 transition">
        {icon}
      </span>

      <textarea
        id={id}
        rows={5}
        value={value}
        required
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        placeholder=" "
        className="peer w-full border border-gray-300 pl-12 pr-4 pt-6 pb-2 rounded-xl outline-none focus:border-green-500 resize-none bg-white/70 transition"
      />

      <label
        htmlFor={id}
        className={`absolute left-12 text-gray-500 transition-all ${
          value ? "top-2 text-sm" : "top-5 text-base"
        } peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600`}
      >
        {label}
      </label>
    </div>
  );
}