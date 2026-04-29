"use client";

import { useState } from "react";

export default function UPIPayButton({ amount }: { amount: number }) {
  const upiId = "abhishekkumar900@ybl";

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const isValidAmount = (amt: number) =>
    typeof amt === "number" && !isNaN(amt) && amt > 0;

  const handleClick = () => {
    if (!isValidAmount(amount)) {
      setStatus("⚠️ Please enter a valid amount");
      return;
    }

    setLoading(true);
    setStatus("🔄 Preparing secure payment...");

    setTimeout(() => {
      const url = `upi://pay?pa=${upiId}&pn=OneMealOneHope&am=${amount}&cu=INR`;
      window.location.href = url;
      setStatus("🚀 Redirecting to your UPI app...");
      setLoading(false);
    }, 700);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">

      {/* 🌈 Glow background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-300 via-emerald-300 to-lime-300 blur-2xl opacity-40 rounded-3xl" />

      {/* Card */}
      <div className="bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-xl border">

        {/* 💡 Impact message */}
        <p className="text-center text-sm text-green-600 font-medium">
          💚 ₹{amount} can help feed someone today
        </p>

        {/* 📊 Progress indicator */}
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all"
            style={{ width: `${Math.min(amount / 50, 100)}%` }}
          />
        </div>

        {/* 🎯 Button */}
        <button
          onClick={handleClick}
          disabled={loading}
          className={`mt-4 w-full py-3 rounded-full text-white font-semibold shadow-lg transition-all duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-105 hover:shadow-2xl"
          }`}
        >
          {loading ? "Processing..." : `Donate ₹${amount}`}
        </button>

        {/* 🔔 Status */}
        {status && (
          <p className="text-center text-xs text-gray-500 mt-3">
            {status}
          </p>
        )}

        {/* 🔒 Trust */}
        <p className="text-center text-[10px] text-gray-400 mt-3">
          🔒 Secure UPI Payment • No hidden charges
        </p>

        {/* 📱 QR fallback */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400">Scan & pay</p>

          <div className="mt-2 flex justify-center">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=upi://pay?pa=${upiId}&pn=OneMealOneHope&cu=INR`}
              alt="UPI QR"
              className="rounded-lg shadow-md hover:scale-105 transition"
            />
          </div>
        </div>

      </div>
    </div>
  );
}