"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

export default function Donate() {
  const upiId = "abhishekkumar900@ybl";

  const MIN_AMOUNT = 50;
  const MAX_AMOUNT = 500000;

  const [amount, setAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<
    "upi" | "card" | "netbanking" | "wallet" | "emi"
  >("upi");

  const [copied, setCopied] = useState(false);

  // 💡 Smart parsing
  const parsedAmount = useMemo(() => {
    const num = Number(amount);
    if (isNaN(num)) return 0;
    if (num < MIN_AMOUNT) return num;
    if (num > MAX_AMOUNT) return MAX_AMOUNT;
    return num;
  }, [amount]);

  const isValid =
    parsedAmount >= MIN_AMOUNT && parsedAmount <= MAX_AMOUNT;

  const meals = Math.floor(parsedAmount / 50);
  const peopleImpacted = Math.floor(meals / 3);

  const upiUrl = useMemo(() => {
    if (!isValid) return "";
    return `upi://pay?pa=${upiId}&pn=OneMealOneHope&am=${parsedAmount}&cu=INR`;
  }, [parsedAmount, isValid]);

  const copyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="relative overflow-hidden text-gray-900">

      {/* 🌈 PREMIUM BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-emerald-100" />
      <div className="fixed inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_20%_30%,#22c55e,transparent_40%)] animate-pulse" />
      <div className="fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_80%_70%,#10b981,transparent_40%)] animate-pulse" />

      {/* HERO */}
      <section className="py-28 text-center px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Feed a Life.
          <br />
          <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 bg-clip-text text-transparent animate-gradient">
            Change a Future.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          Every rupee becomes food, dignity, and hope.
        </p>
      </section>

      {/* 💰 PRESET */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {[50, 500, 5000].map((amt) => (
          <div
            key={amt}
            onClick={() => setAmount(String(amt))}
            className="group cursor-pointer bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl border hover:border-green-400 transition-all hover:-translate-y-3"
          >
            <h3 className="text-4xl font-bold text-green-600 group-hover:scale-110 transition">
              ₹{amt}
            </h3>
            <p className="text-gray-500 mt-3">
              {amt === 50 && "Feeds 1 person"}
              {amt === 500 && "Supports a family"}
              {amt === 5000 && "Runs a campaign"}
            </p>
          </div>
        ))}
      </section>

      {/* 💳 METHODS */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold">Select Payment</h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-5 max-w-5xl mx-auto px-6">
          {[
            { id: "upi", label: "UPI", icon: "📱" },
            { id: "card", label: "Card", icon: "💳" },
            { id: "netbanking", label: "Bank", icon: "🏦" },
            { id: "wallet", label: "Wallet", icon: "👛" },
            { id: "emi", label: "Later", icon: "⏳" },
          ].map((method) => (
            <button
              key={method.id}
              onClick={() => setPaymentMethod(method.id as any)}
              className={`p-5 rounded-2xl transition-all duration-300 ${
                paymentMethod === method.id
                  ? "bg-green-600 text-white shadow-xl scale-110"
                  : "bg-white/70 backdrop-blur hover:shadow-lg"
              }`}
            >
              <div className="text-2xl">{method.icon}</div>
              <p className="mt-2 text-sm">{method.label}</p>
            </button>
          ))}
        </div>
      </section>

      {/* 💎 CARD */}
      <section className="py-28 px-6">
        <div className="max-w-xl mx-auto bg-white/70 backdrop-blur-2xl p-12 rounded-[2rem] shadow-2xl border text-center">

          <h2 className="text-3xl font-bold mb-6">Enter Amount</h2>

          {/* INPUT */}
          <div className="relative mt-6">
            <span className="absolute left-4 top-3 text-gray-400 text-lg">₹</span>
            <input
              type="number"
              placeholder="50 - 500000"
              value={amount}
              min={MIN_AMOUNT}
              max={MAX_AMOUNT}
              onChange={(e) => {
                let value = e.target.value;

                if (Number(value) < 0) value = "";
                if (Number(value) > MAX_AMOUNT)
                  value = String(MAX_AMOUNT);

                setAmount(value);
              }}
              onBlur={() => {
                if (!amount) return;
                let num = Number(amount);
                if (num < MIN_AMOUNT) setAmount(String(MIN_AMOUNT));
                if (num > MAX_AMOUNT) setAmount(String(MAX_AMOUNT));
              }}
              className="w-full pl-10 py-4 rounded-xl text-center text-xl border focus:ring-2 focus:ring-green-500 outline-none shadow-inner"
            />
          </div>

          {/* VALIDATION */}
          {amount && !isValid && (
            <p className="text-red-500 mt-3 animate-pulse">
              Amount must be ₹50 – ₹500000
            </p>
          )}

          {/* IMPACT */}
          {isValid && (
            <div className="mt-6 space-y-2">
              <p className="text-green-600 text-xl font-semibold">
                💚 {meals} meals created
              </p>
              <p className="text-gray-500 text-sm">
                👨‍👩‍👧 Helps ~ {peopleImpacted} people
              </p>
            </div>
          )}

          {/* PROGRESS */}
          {isValid && (
            <div className="mt-4 h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-3 bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-700"
                style={{
                  width: `${Math.min(parsedAmount / 50, 100)}%`,
                }}
              />
            </div>
          )}

          {/* QR */}
          {paymentMethod === "upi" && isValid && (
            <div className="mt-10">

              <p className="font-semibold text-lg mb-4">
                Scan to Pay ₹{parsedAmount}
              </p>

              <div className="flex justify-center">
                <div className="p-6 bg-white rounded-3xl shadow-xl hover:scale-105 transition">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
                      upiUrl
                    )}`}
                    alt="QR"
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-center gap-3">
                <p className="text-sm text-gray-600">{upiId}</p>
                <button
                  onClick={copyUpi}
                  className="text-xs px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          )}

          {/* OTHER */}
          {paymentMethod !== "upi" && (
            <div className="mt-6 text-gray-500">
              {paymentMethod.toUpperCase()} coming soon 🚀
            </div>
          )}
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 text-center bg-green-50">
        <h2 className="text-2xl font-bold">Secure & Transparent</h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
          {["Secure Payments", "Direct Impact", "Transparency"].map((t) => (
            <div
              key={t}
              className="bg-white p-6 rounded-xl shadow hover:scale-105 transition"
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
          className="mt-6 inline-block px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:scale-105 transition"
        >
          Explore Campaigns
        </Link>
      </section>
    </main>
  );
}