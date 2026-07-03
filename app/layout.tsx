import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://onemealonehope.vercel.app/"),

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

    // NGOs & Nonprofits
    "Indian NGO",
    "Best NGO in India",
    "Registered NGO",
    "Charitable Trust",
    "Non Government Organization",
    "Social Welfare Organization",
    "Community Service",
    "Volunteer Organization",
    "Public Charity",
    "Nonprofit Foundation",
    "Social Impact",
    "Community Development",
    "Humanitarian Organization",
    "Grassroots Organization",
    "Civil Society Organization",
    "NGO Volunteers",
    "NGO Donation",
    "NGO Projects",
    "NGO Campaigns",
    "NGO Support",

    // Food Donation
    "Donate Meals",
    "Food Bank India",
    "Food Distribution",
    "Meal Donation",
    "Free Food Distribution",
    "Food for Needy",
    "Feed the Hungry",
    "Hunger Relief Program",
    "Community Kitchen",
    "Food Drive",
    "Donate Groceries",
    "Food Assistance",
    "Food Security",
    "Emergency Food Aid",
    "Nutrition Support",
    "Midday Meal Support",
    "Zero Hunger",
    "Food Rescue",
    "Food Sharing",
    "Fight Hunger",

    // Charity
    "Donate Online",
    "Online Charity",
    "Charitable Giving",
    "Make a Donation",
    "Support a Cause",
    "Crowdfunding for Charity",
    "Monthly Donations",
    "Sponsor a Meal",
    "Sponsor a Family",
    "Compassion",
    "Kindness",
    "Giving Back",
    "Acts of Kindness",
    "Social Good",
    "Volunteer for Charity",
    "Help the Poor",
    "Community Outreach",
    "Relief Fund",
    "Donation Campaign",
    "Fundraising",

    // Hunger Relief
    "End Hunger",
    "No One Sleeps Hungry",
    "Feed Children",
    "Feed Families",
    "Malnutrition Relief",
    "Nutrition for Children",
    "Food Assistance Program",
    "Meal Assistance",
    "Poverty Relief",
    "Help Hungry Families",
    "Feed Homeless",
    "Emergency Hunger Relief",
    "Food Crisis Support",
    "Healthy Meals",
    "Community Nutrition",
    "Hunger Awareness",
    "Food Accessibility",
    "Basic Needs Support",
    "Sustainable Food Programs",
    "Ending Food Insecurity",

    // Volunteer
    "Volunteer in India",
    "Volunteer for NGO",
    "Volunteer Opportunities",
    "Food Distribution Volunteer",
    "Serve the Community",
    "Community Volunteers",
    "Youth Volunteers",
    "Volunteer Near Me",
    "Weekend Volunteering",
    "Social Service",
    "NGO Internship",
    "Student Volunteering",
    "Corporate Volunteering",
    "Volunteer Network",
    "Volunteer Program",

    // Donations
    "Donate Money",
    "Donate Clothes",
    "Donate Essentials",
    "Donate Groceries",
    "Donate Ration Kits",
    "Donate to Charity",
    "Support Education",
    "Sponsor Children",
    "Sponsor Education",
    "Donate for Healthcare",
    "Give Back to Society",
    "Help Underprivileged",
    "Support Rural Communities",
    "Donate for Social Cause",
    "Donation for Poor Families",

    // Poverty & Social Welfare
    "Poverty Alleviation",
    "Support Low Income Families",
    "Help Orphans",
    "Help Elderly",
    "Women Empowerment",
    "Child Welfare",
    "Education for All",
    "Healthcare for Poor",
    "Disaster Relief",
    "Relief Work",
    "Social Justice",
    "Community Empowerment",
    "Inclusive Development",
    "Rural Development",
    "Urban Poor Support",

    // India Specific
    "Donate in India",
    "Indian Charity",
    "Indian Nonprofit",
    "Food Charity India",
    "Volunteer India",
    "Best Charity India",
    "Help Poor in India",
    "Donate to NGO India",
    "CSR India",
    "Corporate Social Responsibility",
    "Indian Social Work",
    "Serve India",
    "Support Indian Communities",
    "NGO for Hunger",
    "Food Relief India",

    // Awareness & Advocacy
    "End Poverty",
    "Social Responsibility",
    "Community Care",
    "Human Dignity",
    "Equality",
    "Hope for Everyone",
    "Care for Society",
    "Compassion in Action",
    "Together Against Hunger",
    "Serve Humanity",
    "Building Better Communities",
    "Empowering Lives",
    "Helping Hands",
    "Change Lives",
    "Creating Impact",

    // Related Searches
    "Best Food NGO",
    "Donate Food Online",
    "Food Donation Campaign",
    "NGO Near Me",
    "Charity Near Me",
    "Volunteer Near Me",
    "How to Donate Food",
    "How to Start an NGO",
    "Support Hunger Relief",
    "Donate to Feed Children",
    "Free Meal Program",
    "Community Feeding Program",
    "Food Distribution NGO",
    "Meal Sponsorship",
    "Hunger Free India"
  ],

  authors: [{ name: "One Meal One Hope Team" }],
  creator: "One Meal One Hope",
  publisher: "One Meal One Hope",

  openGraph: {
    title: "One Meal One Hope NGO",
    description:
      "Help us feed lives and spread hope. Every meal matters.",
    url: "https://onemealonehope.vercel.app/",
    siteName: "One Meal One Hope",
    images: [
      {
        url: "/og-image.jpg",
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

        {/* Vercel Analytics */}
        <Analytics />

        {/* Vercel Speed Insights */}
        <SpeedInsights />

      </body>
    </html>
  );
}