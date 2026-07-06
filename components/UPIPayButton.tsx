"use client";

import { useMemo, useState } from "react";
import {
  Copy,
  Download,
  Smartphone,
  QrCode,
  Heart,
  ShieldCheck,
  CheckCircle,
  Loader2,
} from "lucide-react";

interface Props {
  amount: number;
}

export default function UPIPayButton({ amount }: Props) {
  const upiId = "abhishekkumar900@ybl";
  const receiver = "OneMealOneHope";

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const isValidAmount = (amt: number) =>
    typeof amt === "number" && !isNaN(amt) && amt > 0;

  const upiUrl = useMemo(() => {
    return `upi://pay?pa=${upiId}&pn=${receiver}&am=${amount}&cu=INR&tn=Donation`;
  }, [amount]);

  const qrUrl = useMemo(() => {
    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
      upiUrl
    )}`;
  }, [upiUrl]);

  const isMobile = () => {
    if (typeof window === "undefined") return false;

    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  const handleDonate = () => {
    if (!isValidAmount(amount)) {
      setStatus("⚠️ Please enter a valid amount.");
      return;
    }

    setLoading(true);
    setStatus("Preparing secure payment...");

    setTimeout(() => {
      if (isMobile()) {
        window.location.href = upiUrl;
      } else {
        setStatus("📱 Scan the QR using any UPI App.");
      }

      setLoading(false);
    }, 800);
  };

  const copyUPI = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setStatus("Unable to copy.");
    }
  };

  const downloadQR = async () => {
    const response = await fetch(qrUrl);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "OneMealOneHope-UPI-QR.png";
    a.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="relative max-w-md mx-auto">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-emerald-400 to-lime-300 blur-3xl opacity-30 rounded-3xl -z-10"/>

      <div className="rounded-3xl bg-white border shadow-2xl backdrop-blur-xl overflow-hidden">

        {/* Header */}

        <div className="bg-gradient-to-r from-green-600 to-emerald-500 p-6 text-center text-white">

          <Heart className="mx-auto mb-2" size={38}/>

          <h2 className="text-2xl font-bold">
            Support One Meal One Hope
          </h2>

          <p className="text-green-100 mt-2">
            Every meal you sponsor gives someone hope.
          </p>

        </div>

        <div className="p-6">

          {/* Amount */}

          <div className="text-center">

            <h3 className="text-gray-500 text-sm">
              Donation Amount
            </h3>

            <h1 className="text-5xl font-bold text-green-600 mt-2">
              ₹{amount}
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Thank you for making a difference ❤️
            </p>

          </div>

          {/* Progress */}

          <div className="mt-6">

            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>Impact Meter</span>
              <span>{Math.min(amount * 2,100)}%</span>
            </div>

            <div className="h-3 rounded-full bg-gray-200 overflow-hidden">

              <div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-700"
                style={{
                  width: `${Math.min(amount * 2,100)}%`,
                }}
              />

            </div>

          </div>

          {/* Donate Button */}

          <button
            onClick={handleDonate}
            disabled={loading}
            className="w-full mt-8 rounded-full py-4 text-white font-bold bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-105 transition shadow-xl flex justify-center items-center gap-2 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18}/>
                Processing...
              </>
            ) : (
              <>
                <Smartphone size={20}/>
                Donate ₹{amount}
              </>
            )}
          </button>

          {/* Status */}

          {status && (
            <div className="mt-4 text-center text-sm text-green-600 font-medium">
              {status}
            </div>
          )}

          {/* QR */}

          <div className="mt-10 text-center">

            <QrCode
              size={28}
              className="mx-auto text-green-600 mb-3"
            />

            <img
              src={qrUrl}
              alt="UPI QR"
              className="mx-auto rounded-xl border shadow-lg hover:scale-105 transition duration-300"
            />

            <p className="text-xs text-gray-500 mt-3">
              Scan using Google Pay, PhonePe, Paytm, BHIM or any UPI App.
            </p>

          </div>

          {/* Buttons */}

          <div className="grid grid-cols-2 gap-3 mt-6">

            <button
              onClick={copyUPI}
              className="rounded-xl border p-3 hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <Copy size={18}/>

              {copied ? "Copied!" : "Copy UPI"}
            </button>

            <button
              onClick={downloadQR}
              className="rounded-xl border p-3 hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <Download size={18}/>
              Download QR
            </button>

          </div>

          {/* UPI */}

          <div className="mt-5 rounded-xl bg-gray-100 p-3 text-center">

            <div className="text-xs text-gray-500">
              UPI ID
            </div>

            <div className="font-semibold text-green-700">
              {upiId}
            </div>

          </div>

          {/* Features */}

          <div className="grid grid-cols-3 mt-8 gap-4 text-center text-xs">

            <div>
              <ShieldCheck
                className="mx-auto text-green-600 mb-1"
                size={22}
              />
              Secure
            </div>

            <div>
              <CheckCircle
                className="mx-auto text-green-600 mb-1"
                size={22}
              />
              Trusted
            </div>

            <div>
              <Heart
                className="mx-auto text-red-500 mb-1"
                size={22}
              />
              Charity
            </div>

          </div>

          {/* Footer */}

          <p className="mt-8 text-center text-xs text-gray-400 leading-6">
            Your contribution directly supports food distribution to
            underprivileged children and families. Every donation matters.
          </p>

        </div>

      </div>

    </div>
  );
}