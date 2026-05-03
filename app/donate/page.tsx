"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

export default function Donate() {
  const upiId = "abhishekkumar900@ybl";

  const [amount, setAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<
    "upi" | "card" | "netbanking" | "wallet" | "emi"
  >("upi");

  const [copied, setCopied] = useState(false);

  // ✅ Parse amount safely
  const parsedAmount = useMemo(() => {
    const num = Number(amount);
    return !isNaN(num) && num > 0 ? num : 0;
  }, [amount]);

  const isValid = parsedAmount > 0;

  // ✅ UPI URL (single source of truth)
  const upiUrl = useMemo(() => {
    if (!isValid) return "";
    return `upi://pay?pa=${upiId}&pn=OneMealOneHope&am=${parsedAmount}&cu=INR`;
  }, [parsedAmount, isValid]);

  // ✅ Copy UPI ID
  const copyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="relative overflow-hidden text-gray-900">

      {/* 🌈 BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-emerald-100" />
      <div className="fixed inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_30%_20%,#22c55e,transparent_40%)]" />

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Feed a Life. <span className="text-green-600">Change a Future.</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          Every donation creates impact. Every meal restores dignity.
        </p>
      </section>

      {/* 💰 PRESET AMOUNTS */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {[50, 500, 5000].map((amt) => (
          <div
            key={amt}
            onClick={() => setAmount(String(amt))}
            className="cursor-pointer bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow hover:scale-105 transition text-center border hover:border-green-400"
          >
            <h3 className="text-3xl font-bold text-green-600">₹{amt}</h3>
            <p className="text-gray-500 mt-2">
              {amt === 50 && "Feeds 1 person"}
              {amt === 500 && "Supports a family"}
              {amt === 5000 && "Drives a campaign"}
            </p>
          </div>
        ))}
      </section>

      {/* 💳 PAYMENT METHODS */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Choose Payment Method</h2>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto px-6">
          {[
            { id: "upi", label: "UPI", icon: "📱" },
            { id: "card", label: "Card", icon: "💳" },
            { id: "netbanking", label: "NetBanking", icon: "🏦" },
            { id: "wallet", label: "Wallet", icon: "👛" },
            { id: "emi", label: "Pay Later", icon: "⏳" },
          ].map((method) => (
            <button
              key={method.id}
              onClick={() => setPaymentMethod(method.id as any)}
              className={`p-5 rounded-2xl border transition-all duration-300 ${
                paymentMethod === method.id
                  ? "bg-green-600 text-white shadow-xl scale-105"
                  : "bg-white/70 backdrop-blur hover:shadow"
              }`}
            >
              <div className="text-2xl">{method.icon}</div>
              <p className="mt-2 font-medium">{method.label}</p>
            </button>
          ))}
        </div>
      </section>

      {/* 💳 DONATION BOX */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl text-center border">

          <h2 className="text-2xl font-bold">Enter Amount</h2>

          {/* INPUT */}
          <div className="mt-6 relative">
            <span className="absolute left-4 top-3 text-gray-400 text-lg">₹</span>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-xl text-center text-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Validation */}
          {amount && !isValid && (
            <p className="text-red-500 text-sm mt-3">
              Enter valid amount
            </p>
          )}

          {/* Impact */}
          {isValid && (
            <p className="mt-4 text-green-600 font-medium text-lg">
              💚 ₹{parsedAmount} = {Math.floor(parsedAmount / 50)} meals
            </p>
          )}

          {/* Progress */}
          {isValid && (
            <div className="mt-4 w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-green-500 h-2 transition-all duration-700"
                style={{ width: `${Math.min(parsedAmount / 50, 100)}%` }}
              />
            </div>
          )}

          {/* ✅ UPI QR */}
          {paymentMethod === "upi" && isValid && (
            <div className="mt-10">

              <p className="font-semibold text-lg">
                Scan & Pay ₹{parsedAmount}
              </p>

              <div className="mt-6 flex justify-center">
                <div className="p-6 bg-white rounded-3xl shadow-xl border hover:shadow-2xl transition">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(
                      upiUrl
                    )}`}
                    alt="QR"
                    className="rounded-xl"
                  />
                </div>
              </div>

              {/* UPI + Copy */}
              <div className="mt-4 flex items-center justify-center gap-3">
                <p className="text-sm text-gray-600">{upiId}</p>
                <button
                  onClick={copyUpi}
                  className="px-3 py-1 text-xs bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

            </div>
          )}

          {/* OTHER METHODS */}
          {paymentMethod !== "upi" && (
            <div className="mt-6 bg-gray-100 p-6 rounded-xl">
              <p className="text-gray-600">
                {paymentMethod.toUpperCase()} coming soon 🚀
              </p>
            </div>
          )}

        </div>
      </section>

      {/* TRUST */}
      <section className="py-16 bg-green-50 text-center">
        <h2 className="text-2xl font-bold">Secure & Transparent</h2>

        <div className="mt-6 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto px-6">
          {["Secure Payments", "Direct Impact", "Full Transparency"].map((t) => (
            <div
              key={t}
              className="bg-white p-5 rounded-xl shadow hover:scale-105 transition"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold">Be the Change</h2>

        <Link
          href="/campaigns"
          className="mt-6 inline-block px-10 py-3 bg-green-600 text-white rounded-full shadow-lg hover:scale-105 transition"
        >
          Explore Campaigns
        </Link>
      </section>

    </main>
  );
}