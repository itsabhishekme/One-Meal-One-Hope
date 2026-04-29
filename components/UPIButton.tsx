"use client";

import { useState } from "react";

export default function UPIButton() {
  const upiId = "abhishekkumar900@ybl";

  const [amount, setAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handlePayment = (amt: number) => {
    if (!amt || amt <= 0 || isNaN(amt)) {
      setStatus("⚠️ Please enter a valid amount");
      return;
    }

    setLoading(true);
    setStatus("🔄 Preparing secure payment...");

    setTimeout(() => {
      const url = `upi://pay?pa=${upiId}&pn=OneMealOneHope&am=${amt}&cu=INR`;
      window.location.href = url;
      setStatus("🚀 Redirecting to your UPI app...");
      setLoading(false);
    }, 800);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">

      {/* 🌈 MULTI-LAYER BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-300 via-emerald-300 to-lime-300 blur-3xl opacity-40 rounded-3xl" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,#22c55e,transparent_40%)] opacity-20 rounded-3xl" />

      {/* CARD */}
      <div className="bg-white/90 backdrop-blur-xl p-7 rounded-3xl shadow-2xl border border-gray-200">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-gray-800">
            Donate via UPI
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            100% secure • Instant • Trusted across India
          </p>
        </div>

        {/* 💚 IMPACT MESSAGE */}
        <div className="mt-5 text-center text-sm text-green-600 font-medium">
          💚 ₹{amount} can help feed someone in need
        </div>

        {/* 📊 IMPACT BAR */}
        <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all"
            style={{ width: `${Math.min(amount / 50, 100)}%` }}
          />
        </div>

        {/* PRESET BUTTONS */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {[50, 100, 500, 1000, 2000, 5000].map((amt) => (
            <button
              key={amt}
              onClick={() => {
                setAmount(amt);
                setCustomAmount("");
                setStatus("");
              }}
              className={`py-2 rounded-full font-medium transition-all duration-200 ${
                amount === amt
                  ? "bg-green-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 hover:bg-green-100"
              }`}
            >
              ₹{amt}
            </button>
          ))}
        </div>

        {/* CUSTOM INPUT */}
        <div className="mt-6">
          <input
            type="number"
            placeholder="Enter custom amount"
            value={customAmount}
            onChange={(e) => {
              const value = e.target.value;
              setCustomAmount(value);
              setAmount(Number(value));
              setStatus("");
            }}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        {/* CTA BUTTON */}
        <button
          onClick={() => handlePayment(amount)}
          disabled={loading}
          className={`mt-6 w-full py-3 text-white font-semibold rounded-full shadow-xl transition-all duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-105 hover:shadow-2xl"
          }`}
        >
          {loading ? "Processing..." : `Pay ₹${amount} via UPI`}
        </button>

        {/* STATUS */}
        {status && (
          <p className="text-center text-sm text-gray-600 mt-4">
            {status}
          </p>
        )}

        {/* 🔒 TRUST */}
        <div className="mt-6 text-center text-xs text-gray-400">
          🔒 Payments handled securely via UPI apps
        </div>

        {/* QR SECTION */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">Scan & pay instantly</p>

          <div className="mt-4 flex justify-center">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?pa=${upiId}&pn=OneMealOneHope&cu=INR`}
              alt="UPI QR"
              className="rounded-xl shadow-lg hover:scale-105 transition"
            />
          </div>

          <p className="mt-2 text-xs text-gray-400">
            UPI ID: {upiId}
          </p>
        </div>

        {/* EXTRA TRUST */}
        <div className="mt-6 border-t pt-4 text-center text-xs text-gray-500 space-y-1">
          <p>✔ Transparent donation usage</p>
          <p>✔ Trusted by hundreds of donors</p>
          <p>✔ Supporting real communities daily</p>
        </div>

      </div>
    </div>
  );
}