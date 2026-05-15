import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Privacy Policy
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            At <span className="font-semibold">One Meal One Hope</span>,
            we value trust, dignity, and transparency. This Privacy Policy
            explains how we collect, use, store, and protect your personal
            information while supporting our mission to fight hunger and
            food insecurity through sustainable community-driven solutions.
          </p>
        </div>

        {/* Intro Banner */}
        <div className="bg-black text-white rounded-3xl p-8 md:p-12 shadow-2xl mb-14">
          <h2 className="text-3xl font-bold mb-4">
            Our Commitment
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            Every interaction with our platform is built on respect and
            responsibility. Whether you donate, volunteer, partner with us,
            or simply explore our mission, your privacy matters deeply to us.
          </p>
        </div>

        {/* Main Sections */}
        <section className="space-y-10">

          {/* Information We Collect */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold mb-4">
              1. Information We Collect
            </h2>

            <p className="leading-8 text-gray-600">
              We may collect personal information when you interact with our
              website, mobile application, donation system, volunteer forms,
              or support channels.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Full name and contact information</li>
              <li>✔ Email address and phone number</li>
              <li>✔ Donation and transaction details</li>
              <li>✔ Volunteer registration information</li>
              <li>✔ Device and browser analytics</li>
              <li>✔ Feedback, messages, or inquiries</li>
            </ul>
          </div>

          {/* How We Use Data */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold mb-4">
              2. How We Use Your Information
            </h2>

            <p className="leading-8 text-gray-600 mb-6">
              Your information helps us improve operations, manage food
              distribution efforts, and maintain transparent communication
              with supporters and communities.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-gray-50 rounded-2xl p-5">
                Process donations securely
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                Coordinate volunteers and campaigns
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                Share project and impact updates
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                Improve platform performance
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                Prevent fraud or misuse
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                Build transparent donation systems
              </div>
            </div>
          </div>

          {/* Transparency */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold mb-4">
              3. Donation Transparency
            </h2>

            <p className="leading-8 text-gray-600">
              Transparency is central to our mission. We strive to ensure
              that every contribution is tracked ethically and used
              responsibly to support food rescue, meal distribution,
              sustainability projects, and community outreach programs.
            </p>

            <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-6">
              <p className="text-green-700 font-medium leading-7">
                We believe accountability builds trust, and trust fuels
                meaningful change.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold mb-4">
              4. Security & Protection
            </h2>

            <p className="leading-8 text-gray-600">
              We implement modern security practices to protect your
              personal data against unauthorized access, misuse, loss,
              disclosure, or alteration.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Secure donation handling systems</li>
              <li>✔ Protected communication channels</li>
              <li>✔ Limited internal data access</li>
              <li>✔ Regular monitoring and maintenance</li>
            </ul>
          </div>

          {/* Third Party */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold mb-4">
              5. Third-Party Services
            </h2>

            <p className="leading-8 text-gray-600">
              We may use trusted third-party services for payment processing,
              analytics, hosting, communication, or operational support.
              These providers are expected to maintain strict privacy and
              security standards.
            </p>
          </div>

          {/* Cookies */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold mb-4">
              6. Cookies & Analytics
            </h2>

            <p className="leading-8 text-gray-600">
              Our website may use cookies and analytics tools to improve user
              experience, monitor platform performance, and understand how
              visitors interact with our services.
            </p>
          </div>

          {/* User Rights */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold mb-4">
              7. Your Rights
            </h2>

            <p className="leading-8 text-gray-600">
              You have the right to request access, correction, or deletion
              of your personal information, subject to applicable laws and
              operational requirements.
            </p>
          </div>

          {/* Policy Updates */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold mb-4">
              8. Policy Updates
            </h2>

            <p className="leading-8 text-gray-600">
              We may update this Privacy Policy periodically to reflect
              changes in our services, technology, legal obligations, or
              organizational practices.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-black text-white rounded-3xl p-10 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Contact Us
            </h2>

            <p className="text-gray-300 leading-8">
              If you have questions regarding this Privacy Policy or how
              your information is handled, please reach out to our support
              team through the official One Meal One Hope platform.
            </p>

            <div className="mt-8">
              <Link href="/contact">
                <button className="bg-green-500 hover:bg-green-600 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold">
                  Contact Support
                </button>
              </Link>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}