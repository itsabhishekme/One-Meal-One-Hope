"use client";

import { useState } from "react";
import Link from "next/link";
import UPIPayButton from "@/components/UPIPayButton";

export default function Donate() {
  const upiId = "abhishekkumar900@ybl";

  const [amount, setAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking" | "wallet" | "emi">("upi");

  const parsedAmount = Number(amount);
  const isValid = parsedAmount > 0 && !isNaN(parsedAmount);

  const upiUrl = `upi://pay?pa=${upiId}&pn=OneMealOneHope&am=${parsedAmount}&cu=INR`;

  return (
    <main className="relative overflow-hidden text-gray-900">

      {/* 🌈 BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-emerald-100" />
      <div className="fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#22c55e,transparent_40%)]" />

      {/* HERO */}
      <section className="py-28 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Feed a Life. <span className="text-green-600">Change a Future.</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600">
          Every donation creates impact. Every meal restores dignity.
        </p>
      </section>

      {/* 💰 PRESET DONATIONS */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {[50, 500, 5000].map((amt) => (
          <div
            key={amt}
            onClick={() => setAmount(String(amt))}
            className="cursor-pointer bg-white p-6 rounded-xl shadow hover:scale-105 transition text-center"
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
              className={`p-5 rounded-xl border transition ${
                paymentMethod === method.id
                  ? "bg-green-600 text-white shadow-lg scale-105"
                  : "bg-white hover:shadow"
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
        <div className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-xl text-center">

          <h2 className="text-2xl font-bold">Enter Amount</h2>

          <input
            type="number"
            placeholder="₹ Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-6 w-full px-4 py-3 border rounded-lg text-center text-lg focus:ring-2 focus:ring-green-500"
          />

          {/* Validation */}
          {amount && !isValid && (
            <p className="text-red-500 text-sm mt-3">
              Enter valid amount
            </p>
          )}

          {/* Impact */}
          {isValid && (
            <p className="mt-4 text-green-600 font-medium">
              💚 ₹{parsedAmount} can provide meals
            </p>
          )}

          {/* Progress */}
          {isValid && (
            <div className="mt-4 w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${Math.min(parsedAmount / 50, 100)}%` }}
              />
            </div>
          )}

          {/* PAYMENT AREA */}
          <div className="mt-8">

            {/* UPI */}
            {paymentMethod === "upi" && (
              <>
                <UPIPayButton amount={isValid ? parsedAmount : 100} />

                {isValid && (
                  <div className="mt-8">
                    <p className="font-semibold">Scan & Pay ₹{parsedAmount}</p>

                    <div className="mt-4 flex justify-center">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiUrl)}`}
                        alt="QR"
                        className="rounded-lg shadow"
                      />
                    </div>

                    <p className="text-xs text-gray-500 mt-2">{upiId}</p>
                  </div>
                )}
              </>
            )}

            {/* Other Methods */}
            {paymentMethod !== "upi" && (
              <div className="mt-6 bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-600">
                  {paymentMethod.toUpperCase()} will be enabled soon
                </p>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-16 bg-green-50 text-center">
        <h2 className="text-2xl font-bold">Secure & Transparent</h2>

        <div className="mt-6 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto px-6">
          {["Secure Payments", "Direct Impact", "Full Transparency"].map((t) => (
            <div key={t} className="bg-white p-4 rounded-lg shadow">
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
          className="mt-6 inline-block px-8 py-3 bg-green-600 text-white rounded-full"
        >
          Explore Campaigns
        </Link>
      </section>

    </main>
  );
}