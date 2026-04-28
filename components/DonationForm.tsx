"use client";

import { useState } from "react";

export default function DonationForm() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Donated ₹${amount}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full"
      />
      <button className="bg-black text-white px-4 py-2">
        Donate Now
      </button>
    </form>
  );
}