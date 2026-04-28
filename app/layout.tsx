import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://onemealonehope.org"),

  title: {
    default: "One Meal One Hope NGO | Feed Lives, Spread Hope",
    template: "%s | One Meal One Hope",
  },

  description:
    "One Meal One Hope is a mission-driven NGO focused on feeding the hungry and creating real impact. Donate today and become part of the change.",

  keywords: [
    "NGO India",
    "food donation",
    "charity",
    "feed poor",
    "non profit organization",
    "hunger relief",
    "donate food India",
  ],

  authors: [{ name: "One Meal One Hope Team" }],
  creator: "One Meal One Hope",
  publisher: "One Meal One Hope",

  openGraph: {
    title: "One Meal One Hope NGO",
    description:
      "Help us feed lives and spread hope. Every meal matters.",
    url: "https://onemealonehope.org",
    siteName: "One Meal One Hope",
    images: [
      {
        url: "/og-image.jpg", // add inside /public
        width: 1200,
        height: 630,
        alt: "One Meal One Hope NGO",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "One Meal One Hope NGO",
    description:
      "Feed lives. Spread hope. Donate now and make a difference.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-white via-gray-50 to-green-50 text-gray-900 antialiased">

        {/* Navbar */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="min-h-screen max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}