"use client";

import { useState } from "react";

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHandsHelping,
  FaHeart,
  FaCheckCircle,
  FaSpinner,
  FaArrowRight,
  FaUsers,
  FaUtensils,
  FaGlobe,
} from "react-icons/fa";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  occupation: string;
  experience: string;
  availability: string;
  motivation: string;
};

export default function VolunteerForm() {
  const [loading, setLoading] = useState<boolean>(false);

  const [success, setSuccess] = useState<boolean>(false);

  const [error, setError] = useState<string>("");

  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    occupation: "",
    experience: "",
    availability: "",
    motivation: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (
      !form.fullName ||
      !form.email ||
      !form.phone ||
      !form.city ||
      !form.occupation ||
      !form.experience ||
      !form.availability ||
      !form.motivation
    ) {
      setError("Please fill all fields.");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter valid email.");
      return false;
    }

    if (form.phone.length < 10) {
      setError("Phone number must be valid.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    setSuccess(false);

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);

        setForm({
          fullName: "",
          email: "",
          phone: "",
          city: "",
          occupation: "",
          experience: "",
          availability: "",
          motivation: "",
        });
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);

      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start px-6">

        {/* LEFT SIDE */}
        <div className="lg:sticky lg:top-24">

          {/* BADGE */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm font-semibold mb-8">

            <FaHeart />

            MAKE REAL IMPACT

          </div>

          {/* TITLE */}
          <h2 className="text-5xl md:text-6xl font-black leading-tight">

            Together We
            <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-lime-300 bg-clip-text text-transparent">
              Can Feed Hope
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl">
            Volunteers are the heart of One Meal One Hope.
            Help distribute meals, support communities,
            and become part of a movement changing lives.
          </p>

          {/* FEATURE CARDS */}
          <div className="mt-14 grid sm:grid-cols-2 gap-6">

            {[
              {
                icon: FaUtensils,
                title: "Food Drives",
                desc: "Serve nutritious meals.",
              },
              {
                icon: FaUsers,
                title: "Community Support",
                desc: "Support local families.",
              },
              {
                icon: FaHandsHelping,
                title: "Volunteer Events",
                desc: "Participate in NGO campaigns.",
              },
              {
                icon: FaGlobe,
                title: "Create Impact",
                desc: "Help society grow stronger.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-6 hover:-translate-y-2 transition-all duration-500"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-green-500/10 to-transparent" />

                <div className="relative z-10">

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-xl shadow-green-500/20">

                    <item.icon className="text-2xl text-white" />

                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* FORM */}
        <div className="relative">

          {/* GLOW */}
          <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-[40px]" />

          {/* CARD */}
          <div className="relative rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl p-8 md:p-10 shadow-2xl">

            {/* HEADER */}
            <div className="flex items-center gap-5 mb-12">

              <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/20">

                <FaHandsHelping className="text-white text-3xl" />

              </div>

              <div>

                <h3 className="text-4xl font-black">
                  Volunteer Form
                </h3>

                <p className="text-gray-400 mt-2">
                  Fill your details to join our mission
                </p>

              </div>

            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >

              {/* NAME */}
              <InputField
                icon={<FaUser />}
                label="Full Name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />

              {/* EMAIL */}
              <InputField
                icon={<FaEnvelope />}
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

              {/* PHONE */}
              <InputField
                icon={<FaPhoneAlt />}
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />

              {/* CITY */}
              <InputField
                icon={<FaMapMarkerAlt />}
                label="City"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />

              {/* OCCUPATION */}
              <InputField
                label="Occupation"
                name="occupation"
                value={form.occupation}
                onChange={handleChange}
                placeholder="Student / Working Professional"
              />

              {/* EXPERIENCE */}
              <SelectField
                label="Volunteer Experience"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                options={[
                  "Beginner",
                  "Intermediate",
                  "Experienced",
                ]}
              />

              {/* AVAILABILITY */}
              <SelectField
                label="Availability"
                name="availability"
                value={form.availability}
                onChange={handleChange}
                options={[
                  "Weekends",
                  "Weekdays",
                  "Full Time",
                  "Part Time",
                ]}
              />

              {/* TEXTAREA */}
              <div>

                <label className="text-sm text-gray-400 mb-3 block">
                  Why Do You Want To Volunteer?
                </label>

                <textarea
                  name="motivation"
                  rows={5}
                  value={form.motivation}
                  onChange={handleChange}
                  placeholder="Write your motivation..."
                  className="w-full px-5 py-5 rounded-2xl bg-black/30 border border-white/10 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition resize-none"
                />

              </div>

              {/* ERROR */}
              {error && (
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-red-400">
                  {error}
                </div>
              )}

              {/* SUCCESS */}
              {success && (
                <div className="flex items-center gap-3 text-green-400 bg-green-500/10 border border-green-500/20 rounded-2xl px-5 py-4">
                  <FaCheckCircle />
                  Volunteer form submitted successfully!
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className={`group w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3
                ${
                  loading
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/30"
                }`}
              >

                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Become Volunteer
                    <FaArrowRight className="group-hover:translate-x-1 transition" />
                  </>
                )}

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

/* INPUT FIELD */
function InputField({
  icon,
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: any) {
  return (
    <div>

      <label className="text-sm text-gray-400 mb-3 block">
        {label}
      </label>

      <div className="relative">

        {icon && (
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-green-400">
            {icon}
          </div>
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full ${
            icon ? "pl-14" : "pl-5"
          } pr-5 py-5 rounded-2xl bg-black/30 border border-white/10 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition`}
        />

      </div>

    </div>
  );
}
/* SELECT FIELD */
function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: any) {
  return (
    <div>

      <label className="text-sm text-gray-400 mb-3 block">
        {label}
      </label>

      <div className="relative">

        <select
          name={name}
          value={value}
          onChange={onChange}
          className="
            w-full
            appearance-none
            rounded-2xl
            border
            border-white/10
            bg-black/40
            backdrop-blur-xl
            px-5
            py-5
            pr-14
            text-white
            outline-none
            transition-all
            duration-300
            focus:border-green-500
            focus:ring-2
            focus:ring-green-500/20
            hover:border-green-500/30
            cursor-pointer
          "
        >

          <option
            value=""
            className="bg-[#111] text-gray-400"
          >
            Select option
          </option>

          {options.map((item: string, i: number) => (
            <option
              key={i}
              value={item}
              className="bg-[#111] text-white"
            >
              {item}
            </option>
          ))}

        </select>

        {/* CUSTOM ARROW */}
        <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-green-400">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>

        </div>

      </div>

    </div>
  
  );
}