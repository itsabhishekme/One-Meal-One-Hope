"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  FormEvent,
  ChangeEvent,
} from "react";

/* =========================
   Types
========================= */
type FormData = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

/* =========================
   Page
========================= */
export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [showToast, setShowToast] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow =
      status === "success" ? "hidden" : "auto";
  }, [status]);

  // Auto-hide toast
  useEffect(() => {
    if (status === "error") {
      setShowToast(true);
      const t = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(t);
    }
  }, [status]);

  const isValid = useMemo(() => {
    return (
      form.name.trim().length > 1 &&
      /\S+@\S+\.\S+/.test(form.email) &&
      form.message.trim().length > 5
    );
  }, [form]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data?.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="relative min-h-screen text-gray-900 overflow-x-hidden">

      {/* 🌈 BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-green-100" />
      <div className="fixed inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_15%_20%,#22c55e,transparent_40%)]" />
      <div className="fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_85%_80%,#16a34a,transparent_40%)]" />

      {/* 🔔 ERROR TOAST */}
      {showToast && (
        <div className="fixed top-6 right-6 z-[999] animate-[fadeIn_0.3s_ease]">
          <div className="bg-red-500 text-white px-5 py-3 rounded-xl shadow-lg">
            ❌ Something went wrong. Please try again.
          </div>
        </div>
      )}

      {/* 🎉 SUCCESS MODAL */}
      {status === "success" && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-md px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center w-full max-w-md animate-[fadeIn_0.35s_ease]">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100 shadow-inner">
              <span className="text-4xl animate-bounce">✅</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-green-600">
              Message Sent
            </h2>

            <p className="mt-3 text-gray-600">
              Thanks for reaching out. We’ll get back to you shortly.
            </p>

            <button
              onClick={() => setStatus("idle")}
              className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg hover:scale-105 transition"
            >
              Send Another
            </button>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="pt-28 pb-16 text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
          Let’s Connect
        </h1>
        <p className="mt-5 text-gray-600 max-w-xl mx-auto text-base sm:text-lg">
          Share your thoughts, ideas, or questions — we’re here to listen.
        </p>
      </section>

      {/* FORM CARD */}
      <section className="pb-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-2xl p-6 sm:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/50">

          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Send a Message
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-8"
            noValidate
          >
            <FloatingInput
              label="Your Name"
              icon={<UserIcon />}
              value={form.name}
              onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              type="text"
            />

            <FloatingInput
              label="Your Email"
              icon={<MailIcon />}
              value={form.email}
              onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              type="email"
            />

            <FloatingTextarea
              label="Your Message"
              icon={<ChatIcon />}
              value={form.message}
              onChange={(v) => setForm((f) => ({ ...f, message: v }))}
            />

            <button
              type="submit"
              disabled={status === "loading" || !isValid}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition flex justify-center items-center disabled:opacity-60"
            >
              {status === "loading" ? (
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5" />
              ) : (
                "Send Message 🚀"
              )}
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

/* =========================
   Floating Input
========================= */
type InputProps = {
  label: string;
  value: string;
  type: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
};

function FloatingInput({
  label,
  value,
  onChange,
  type,
  icon,
}: InputProps) {
  const id = useId();
  const isActive = value.length > 0;

  return (
    <div className="relative group">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition">
        {icon}
      </div>

      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        placeholder=" "
        className="peer w-full border border-gray-300 rounded-xl pl-10 pr-4 pt-6 pb-2 text-sm bg-white/70 focus:bg-white focus:border-green-500 outline-none transition shadow-sm"
      />

      <label
        htmlFor={id}
        className={`absolute left-10 transition-all text-gray-500 pointer-events-none
          ${isActive ? "top-2 text-sm" : "top-5 text-base"}
          peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600`}
      >
        {label}
      </label>

      <div className="absolute inset-0 rounded-xl opacity-0 group-focus-within:opacity-100 transition pointer-events-none ring-2 ring-green-400/20" />
    </div>
  );
}

/* =========================
   Floating Textarea
========================= */
type TextareaProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
};

function FloatingTextarea({
  label,
  value,
  onChange,
  icon,
}: TextareaProps) {
  const id = useId();
  const isActive = value.length > 0;

  return (
    <div className="relative group">
      <div className="absolute left-3 top-5 text-gray-400 group-focus-within:text-green-600 transition">
        {icon}
      </div>

      <textarea
        id={id}
        required
        rows={5}
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        placeholder=" "
        className="peer w-full border border-gray-300 rounded-xl pl-10 pr-4 pt-6 pb-2 text-sm bg-white/70 focus:bg-white focus:border-green-500 outline-none resize-none transition shadow-sm"
      />

      <label
        htmlFor={id}
        className={`absolute left-10 transition-all text-gray-500 pointer-events-none
          ${isActive ? "top-2 text-sm" : "top-5 text-base"}
          peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600`}
      >
        {label}
      </label>

      <div className="absolute inset-0 rounded-xl opacity-0 group-focus-within:opacity-100 transition pointer-events-none ring-2 ring-green-400/20" />
    </div>
  );
}

/* =========================
   Icons (inline SVG)
========================= */
function UserIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
      <path
        d="M12 12a5 5 0 1 0-0.001-10.001A5 5 0 0 0 12 12Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
      <path
        d="M4 6h16v12H4z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
      <path
        d="M21 12c0 4.418-4.03 8-9 8a9.94 9.94 0 0 1-4-.8L3 20l1.2-3.6A7.6 7.6 0 0 1 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}