import Link from "next/link";

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-block px-5 py-2 rounded-full bg-black text-white text-sm font-medium mb-6">
            One Meal One Hope NGO
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Terms & Conditions
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Welcome to One Meal One Hope. These Terms & Conditions govern your
            use of our website, platform, mobile applications, volunteer
            systems, donation services, and all related initiatives operated
            by our organization.
          </p>
        </section>

        {/* Intro Box */}
        <section className="mb-14">
          <div className="bg-black text-white rounded-3xl p-10 shadow-2xl">
            <h2 className="text-3xl font-bold mb-5">
              Our Commitment
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              We are committed to building a transparent, ethical, and
              community-driven ecosystem focused on reducing hunger,
              minimizing food waste, and supporting people in need with dignity.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              By accessing or using our services, you acknowledge that you
              have read, understood, and agreed to comply with these Terms
              & Conditions.
            </p>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="space-y-10">

          {/* Acceptance */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-3xl font-bold mb-5">
              1. Acceptance of Terms
            </h2>

            <p className="text-gray-600 leading-8">
              By using One Meal One Hope services, website, or applications,
              you agree to comply with all applicable laws, regulations,
              and organizational policies.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              If you do not agree with any part of these Terms &
              Conditions, you should discontinue the use of our services
              immediately.
            </p>
          </div>

          {/* Donations */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-3xl font-bold mb-5">
              2. Donations & Contributions
            </h2>

            <p className="text-gray-600 leading-8">
              All donations made to One Meal One Hope are voluntary and
              contribute toward food distribution programs, sustainability
              projects, hunger relief initiatives, volunteer coordination,
              and operational support.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-8">
              <div className="bg-gray-50 rounded-2xl p-5">
                ✔ Donations are voluntary
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                ✔ Contributions support humanitarian work
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                ✔ Transparent tracking systems may be used
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                ✔ Funds are used responsibly for NGO operations
              </div>
            </div>

            <p className="text-gray-600 leading-8 mt-8">
              We strive to maintain accountability and transparency in all
              donation-related activities.
            </p>
          </div>

          {/* User Responsibility */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-3xl font-bold mb-5">
              3. User Responsibilities
            </h2>

            <p className="text-gray-600 leading-8">
              Users agree to use the platform respectfully and ethically.
              Any misuse, fraudulent behavior, abusive activity, or attempt
              to compromise the platform’s integrity may result in restricted
              access or legal action where applicable.
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">
              <li>✔ Provide accurate information</li>
              <li>✔ Respect volunteers and communities</li>
              <li>✔ Avoid harmful or unlawful activity</li>
              <li>✔ Do not misuse donation systems</li>
              <li>✔ Maintain respectful communication</li>
            </ul>
          </div>

          {/* Volunteers */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-3xl font-bold mb-5">
              4. Volunteer Participation
            </h2>

            <p className="text-gray-600 leading-8">
              Volunteers play a critical role in our mission. By participating
              in volunteer activities, individuals agree to act responsibly,
              respectfully, and in alignment with the values of One Meal One Hope.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              We reserve the right to suspend or remove volunteer access if
              actions conflict with our ethical standards or community safety.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-3xl font-bold mb-5">
              5. Content & Intellectual Property
            </h2>

            <p className="text-gray-600 leading-8">
              All branding, logos, designs, written content, graphics,
              campaigns, media assets, and digital materials associated
              with One Meal One Hope are protected by intellectual property laws.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              Unauthorized copying, reproduction, distribution, or commercial
              use of our content without permission is prohibited.
            </p>
          </div>

          {/* Third Party */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-3xl font-bold mb-5">
              6. Third-Party Services
            </h2>

            <p className="text-gray-600 leading-8">
              Our platform may integrate third-party services for payments,
              analytics, communication, hosting, or operational purposes.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              We are not directly responsible for external third-party platforms,
              policies, or services beyond our control.
            </p>
          </div>

          {/* Limitation */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-3xl font-bold mb-5">
              7. Limitation of Liability
            </h2>

            <p className="text-gray-600 leading-8">
              One Meal One Hope shall not be held liable for indirect,
              incidental, or consequential damages resulting from the use
              or inability to use our services, systems, or digital platforms.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              While we strive for reliable operations, we cannot guarantee
              uninterrupted access at all times.
            </p>
          </div>

          {/* Updates */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-3xl font-bold mb-5">
              8. Updates to Terms
            </h2>

            <p className="text-gray-600 leading-8">
              We reserve the right to update or modify these Terms &
              Conditions at any time to reflect operational, legal,
              or organizational changes.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              Continued use of our services after updates constitutes
              acceptance of the revised terms.
            </p>
          </div>

          {/* Ethical Statement */}
          <div className="bg-green-50 border border-green-200 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-5 text-green-700">
              Our Ethical Promise
            </h2>

            <p className="text-green-800 leading-8 text-lg">
              One Meal One Hope exists to serve humanity through compassion,
              transparency, and community action. Every decision we make is
              guided by dignity, fairness, and the belief that food should
              never go to waste while people go hungry.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-black text-white rounded-3xl p-10 shadow-2xl">
            <h2 className="text-3xl font-bold mb-5">
              Contact Information
            </h2>

            <p className="text-gray-300 leading-8">
              If you have questions regarding these Terms & Conditions,
              partnerships, donations, or volunteer activities,
              please contact the One Meal One Hope support team
              through our official platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-5">

              <Link href="/contact">
                <button className="bg-green-500 hover:bg-green-600 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold">
                  Contact Support
                </button>
              </Link>

              <Link href="/support">
                <button className="border border-zinc-700 hover:border-green-500 hover:text-green-400 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold">
                  Learn More
                </button>
              </Link>

            </div>
          </div>

        </section>
      </div>
    </main>
  );
}