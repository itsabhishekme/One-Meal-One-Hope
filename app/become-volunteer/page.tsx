import VolunteerForm from "../../components/VolunteerForm";

import {
  FaHeart,
  FaHandsHelping,
  FaUsers,
  FaUtensils,
  FaGlobe,
  FaArrowRight,
  FaShieldAlt,
  FaLeaf,
  FaCheckCircle,
  FaHandHoldingHeart,
  FaStar,
} from "react-icons/fa";

const impactCards = [
  {
    icon: FaUtensils,
    title: "Food Distribution",
    desc: "Help distribute nutritious meals to underprivileged families and communities in need.",
  },
  {
    icon: FaUsers,
    title: "Volunteer Network",
    desc: "Collaborate with passionate volunteers creating positive social impact.",
  },
  {
    icon: FaGlobe,
    title: "Community Outreach",
    desc: "Support awareness drives, campaigns, and humanitarian initiatives.",
  },
  {
    icon: FaHandsHelping,
    title: "Support Missions",
    desc: "Participate in NGO activities, relief programs, and community events.",
  },
];

const stats = [
  {
    number: "10K+",
    label: "Meals Served",
  },
  {
    number: "850+",
    label: "Volunteers",
  },
  {
    number: "75+",
    label: "Cities Reached",
  },
  {
    number: "100%",
    label: "Transparency",
  },
];

const values = [
  "Compassion & Humanity",
  "Transparency & Trust",
  "Community Empowerment",
  "Creating Sustainable Impact",
];

export default function BecomeVolunteerPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020202] text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* GRADIENT LAYERS */}
        <div className="absolute top-[-250px] left-[-200px] w-[900px] h-[900px] bg-green-500/10 blur-[220px] rounded-full" />

        <div className="absolute bottom-[-300px] right-[-200px] w-[900px] h-[900px] bg-emerald-500/10 blur-[220px] rounded-full" />

        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-lime-500/5 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* FLOATING PARTICLES */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-green-400 rounded-full animate-pulse" />

        <div className="absolute top-60 right-32 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />

        <div className="absolute bottom-40 left-1/3 w-4 h-4 bg-lime-300 rounded-full animate-pulse" />

        <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-ping" />

      </div>

      {/* ================= HERO ================= */}
      <section className="relative px-6 pt-32 pb-28">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT CONTENT */}
            <div className="relative z-10">

              {/* BADGE */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-green-500/20 bg-green-500/10 backdrop-blur-xl text-green-400 text-sm font-semibold mb-8 shadow-lg shadow-green-500/10">

                <FaHeart />

                JOIN OUR VOLUNTEER COMMUNITY

              </div>

              {/* HEADING */}
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-tight tracking-tight">

                Together We
                <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-lime-300 bg-clip-text text-transparent">
                  Feed Hope
                </span>

              </h1>

              {/* DESCRIPTION */}
              <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-2xl">
                Become part of a mission dedicated to feeding families,
                empowering communities, and creating meaningful social change
                through compassion and action.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5 mt-12">

                <button className="group relative overflow-hidden inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-green-500/30">

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10" />

                  <span className="relative z-10 flex items-center gap-3">

                    Become Volunteer

                    <FaArrowRight className="group-hover:translate-x-1 transition" />

                  </span>

                </button>

                <button className="group inline-flex items-center gap-3 border border-white/10 bg-white/[0.03] backdrop-blur-xl px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-white/[0.06] hover:border-green-500/30 transition-all duration-500">

                  Learn More

                </button>

              </div>

              {/* TRUST ITEMS */}
              <div className="grid sm:grid-cols-3 gap-5 mt-16">

                {[
                  {
                    icon: FaShieldAlt,
                    title: "Trusted NGO",
                  },
                  {
                    icon: FaLeaf,
                    title: "Healthy Meal Programs",
                  },
                  {
                    icon: FaCheckCircle,
                    title: "Verified Impact",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 hover:-translate-y-1 transition-all duration-500"
                  >

                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-xl shadow-green-500/20">

                      <item.icon className="text-white" />

                    </div>

                    <p className="mt-4 font-semibold text-gray-200">
                      {item.title}
                    </p>

                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT VISUAL CARDS */}
            <div className="grid sm:grid-cols-2 gap-6">

              {impactCards.map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 hover:-translate-y-3 transition-all duration-500"
                >

                  {/* HOVER */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-500/10 to-transparent" />

                  <div className="relative z-10">

                    {/* ICON */}
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/20">

                      <item.icon className="text-3xl text-white" />

                    </div>

                    {/* TITLE */}
                    <h3 className="mt-8 text-2xl font-bold">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= IMPACT SECTION ================= */}
      <section className="relative px-6 pb-28">

        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-3xl p-12 md:p-16">

            {/* INNER GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,150,0.12),transparent_40%)]" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT */}
              <div>

                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm font-semibold mb-8">

                  <FaHandHoldingHeart />

                  CREATE REAL IMPACT

                </div>

                <h2 className="text-5xl md:text-6xl font-black leading-tight">

                  Small Actions.
                  <span className="block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                    Big Change.
                  </span>

                </h2>

                <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-2xl">
                  Every volunteer contributes to something meaningful —
                  from feeding children to supporting communities in crisis.
                  Together, we create hope and opportunity.
                </p>

                {/* VALUES */}
                <div className="mt-10 grid sm:grid-cols-2 gap-5">

                  {values.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                    >

                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">

                        <FaStar className="text-white" />

                      </div>

                      <p className="font-medium text-gray-200">
                        {item}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

              {/* RIGHT STATS */}
              <div className="grid grid-cols-2 gap-6">

                {stats.map((item, i) => (
                  <div
                    key={i}
                    className="group rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 text-center hover:-translate-y-2 transition-all duration-500"
                  >

                    <h3 className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                      {item.number}
                    </h3>

                    <p className="mt-4 text-gray-400 text-lg">
                      {item.label}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FORM SECTION ================= */}
      <section className="relative px-6 pb-32">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-20">

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm font-semibold mb-6">

              ❤️ VOLUNTEER APPLICATION

            </div>

            <h2 className="text-5xl md:text-6xl font-black">

              Start Your
              <span className="block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Journey Today
              </span>

            </h2>

            <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Fill out the application form below and become part
              of a movement changing lives every single day.
            </p>

          </div>

          {/* FORM */}
          <VolunteerForm />

        </div>

      </section>

    </main>
  );
}