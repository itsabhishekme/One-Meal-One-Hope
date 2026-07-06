"use client";

import { FormEvent, useState } from "react";

const presetAmounts = [100, 250, 500, 1000, 2500, 5000];

export default function DonationForm() {
  const [amount, setAmount] = useState<number | "">("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAmountSelect = (value: number) => {
    setAmount(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    if (!anonymous) {
      if (!name.trim()) {
        alert("Please enter your name.");
        return;
      }

      if (!email.trim()) {
        alert("Please enter your email.");
        return;
      }
    }

    setLoading(true);

    try {
      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log({
        amount,
        name,
        email,
        phone,
        anonymous,
        message,
        paymentMethod,
      });

      setSuccess(true);

      setAmount("");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setAnonymous(false);
      setPaymentMethod("UPI");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-xl border border-green-300 bg-green-50 p-8 text-center">
        <h2 className="text-3xl font-bold text-green-700">
          ❤️ Thank You!
        </h2>

        <p className="mt-4 text-gray-600">
          Your donation has been received successfully.
        </p>

        <button
          onClick={() => setSuccess(false)}
          className="mt-6 rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
        >
          Donate Again
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl bg-white p-8 shadow-lg"
    >
      <div>
        <h2 className="text-3xl font-bold">
          Make a Donation
        </h2>

        <p className="mt-2 text-gray-500">
          Every contribution helps us make a meaningful impact.
        </p>
      </div>

      {/* Preset Amounts */}
      <div>
        <label className="mb-3 block font-semibold">
          Choose Amount
        </label>

        <div className="grid grid-cols-3 gap-3">
          {presetAmounts.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleAmountSelect(item)}
              className={`rounded-lg border p-3 font-semibold transition ${
                amount === item
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              ₹{item}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Amount */}
      <div>
        <label className="mb-2 block font-medium">
          Custom Amount
        </label>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) =>
            setAmount(Number(e.target.value))
          }
          className="w-full rounded-lg border p-3 focus:border-green-600 focus:outline-none"
        />
      </div>

      {/* Anonymous */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
        />

        <span>Donate anonymously</span>
      </div>

      {!anonymous && (
        <>
          <div>
            <label className="mb-2 block">
              Full Name
            </label>

            <input
              className="w-full rounded-lg border p-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="mb-2 block">
              Email Address
            </label>

            <input
              type="email"
              className="w-full rounded-lg border p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@email.com"
            />
          </div>

          <div>
            <label className="mb-2 block">
              Phone Number
            </label>

            <input
              type="tel"
              className="w-full rounded-lg border p-3"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 9876543210"
            />
          </div>
        </>
      )}

      {/* Message */}
      <div>
        <label className="mb-2 block">
          Message (Optional)
        </label>

        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Leave a message..."
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Payment Method */}
      <div>
        <label className="mb-3 block font-medium">
          Payment Method
        </label>

        <div className="grid grid-cols-2 gap-3">
          {["UPI", "Credit Card", "Debit Card", "Net Banking"].map(
            (method) => (
              <button
                key={method}
                type="button"
                onClick={() => setPaymentMethod(method)}
                className={`rounded-lg border p-3 ${
                  paymentMethod === method
                    ? "bg-green-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {method}
              </button>
            )
          )}
        </div>
      </div>

      {/* Summary */}
      <div className="rounded-lg bg-gray-50 p-4">
        <div className="flex justify-between">
          <span>Donation Amount</span>
          <strong>₹{amount || 0}</strong>
        </div>

        <div className="mt-2 flex justify-between">
          <span>Payment Method</span>
          <strong>{paymentMethod}</strong>
        </div>
      </div>

      {/* Submit */}
      <button
        disabled={loading}
        className="w-full rounded-lg bg-green-600 py-4 text-lg font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Processing Donation..." : "❤️ Donate Now"}
      </button>

      <p className="text-center text-sm text-gray-500">
        Your payment is encrypted and processed securely.
      </p>
    </form>
  );
}