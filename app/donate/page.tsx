import DonationForm from "@/components/DonationForm";
import Link from "next/link";
import UPIPayButton from "@/components/UPIPayButton";

export default function Donate() {
  const upiId = "abhishekkumar900@ybl";

  return (
    <main className="relative overflow-hidden text-gray-900">

      {/* 🌈 BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-emerald-100" />
      <div className="fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_30%_30%,#22c55e,transparent_40%)]" />

      {/* HERO */}
      <section className="py-32 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Feed a Life. <span className="text-green-600">Change a Future.</span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
          Every contribution you make becomes a meal, a smile, and a new chance at life.
        </p>
      </section>

      {/* 💰 DONATION CARDS */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {[
          ["₹50", "Feeds 1 person", 50],
          ["₹500", "Supports a family", 500],
          ["₹5000", "Drives a campaign", 5000],
        ].map(([amount, label, value], i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-xl text-center hover:scale-105 transition"
          >
            <h3 className="text-4xl font-bold text-green-700">{amount}</h3>
            <p className="mt-3 text-gray-600">{label}</p>

            <UPIPayButton amount={value as number} />
          </div>
        ))}
      </section>

      {/* 📊 IMPACT VISUAL */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Your Impact in Action</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            ["10,000+", "Meals Served"],
            ["800+", "Volunteers"],
            ["75+", "Cities"],
          ].map(([num, text], i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-green-600">{num}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💳 DONATION FORM */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center">Custom Donation</h2>

          <div className="mt-10">
            <DonationForm />
          </div>

          <div className="mt-6 text-center">
            <UPIPayButton amount={100} />
          </div>
        </div>
      </section>

      {/* 📱 QR */}
      <section className="py-32 text-center">
        <h2 className="text-4xl font-bold">Scan & Pay</h2>

        <div className="mt-8 flex justify-center">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=${upiId}&pn=OneMealOneHope&cu=INR`}
            alt="UPI QR"
            className="rounded-xl shadow-xl hover:scale-105 transition"
          />
        </div>

        <p className="mt-4 text-gray-500">{upiId}</p>
      </section>

      {/* 💬 TESTIMONIAL */}
      <section className="py-32 text-center bg-green-600 text-white">
        <h2 className="text-3xl font-bold">Real Impact</h2>

        <p className="mt-6 max-w-2xl mx-auto italic">
          “Your contribution is not just money—it’s a second chance at life.”
        </p>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <h2 className="text-4xl font-bold">Be the Change</h2>

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