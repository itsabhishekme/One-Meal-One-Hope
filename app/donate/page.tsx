import DonationForm from "@/components/DonationForm";
import Link from "next/link";

export default function Donate() {
  return (
    <main className="relative overflow-hidden text-gray-900">

      {/* 🌈 BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-emerald-100" />
      <div className="fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_80%_20%,#22c55e,transparent_40%)]" />

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Make a Difference Today
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          Your donation is more than just money—it is a lifeline for someone in need.
          With your support, we provide meals, restore dignity, and create hope.
        </p>
      </section>

      {/* IMPACT STATS */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            ["₹50", "Feeds 1 person"],
            ["₹500", "Feeds a family"],
            ["₹5000", "Supports a campaign"],
          ].map(([amount, label], i) => (
            <div key={i} className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-green-700">{amount}</h3>
              <p className="text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DONATION FORM */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-center">Donate Now</h2>
          <p className="mt-4 text-center text-gray-600">
            Every contribution counts. Choose your amount and make an impact.
          </p>

          <div className="mt-8">
            <DonationForm />
          </div>
        </div>
      </section>

      {/* WHY DONATE */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Why Your Donation Matters</h2>

        <p className="mt-6 text-gray-700 leading-relaxed">
          Hunger is not just about food—it’s about dignity, survival, and opportunity.
          Your donation helps us reach the most vulnerable communities and provide
          consistent support where it’s needed most.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Every meal served is a step toward a better future. Together, we can
          ensure that no one sleeps hungry.
        </p>
      </section>

      {/* TRANSPARENCY */}
      <section className="py-24 bg-green-50 px-6">
        <h2 className="text-4xl font-bold text-center">Transparency & Trust</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div>
            <h3 className="text-xl font-bold">Secure Payments</h3>
            <p className="mt-2 text-gray-600">
              Your donations are processed securely.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Direct Impact</h3>
            <p className="mt-2 text-gray-600">
              Funds go directly toward food and distribution.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Regular Updates</h3>
            <p className="mt-2 text-gray-600">
              Stay informed about how your donation is used.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 text-center bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <h2 className="text-3xl font-bold">Donor Voices</h2>
        <p className="mt-6 max-w-2xl mx-auto italic">
          “Donating here gives me confidence that my contribution is truly making a difference.”
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold">Be the Change</h2>
        <p className="mt-4 text-gray-600">
          Your support can transform lives—one meal at a time.
        </p>

        <Link
          href="/campaigns"
          className="inline-block mt-8 px-10 py-4 bg-green-600 text-white rounded-full shadow-xl hover:scale-105 transition"
        >
          Explore Campaigns
        </Link>
      </section>

    </main>
  );
}