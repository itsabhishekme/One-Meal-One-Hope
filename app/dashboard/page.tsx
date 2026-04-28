"use client";

export default function Dashboard() {
  return (
    <main className="relative overflow-hidden text-gray-900 min-h-screen">

      {/* 🌈 BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-50 via-white to-green-100" />
      <div className="fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_30%_30%,#22c55e,transparent_40%)]" />

      {/* HEADER */}
      <section className="p-10">
        <h1 className="text-4xl font-extrabold">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Monitor campaigns, donations, and overall impact.
        </p>
      </section>

      {/* KPI CARDS */}
      <section className="px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          ["₹1,20,000", "Total Donations"],
          ["15", "Active Campaigns"],
          ["1,200", "Total Donors"],
        ].map(([value, label], i) => (
          <div key={i} className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-green-700">{value}</h3>
            <p className="text-gray-600">{label}</p>
          </div>
        ))}
      </section>

      {/* CAMPAIGN OVERVIEW */}
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-6">Campaign Overview</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            ["Feed 100 Children", "80% funded"],
            ["Village Drive", "65% funded"],
            ["Emergency Relief", "90% funded"],
          ].map(([title, status], i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">{title}</h3>
              <p className="text-gray-600 mt-2">{status}</p>

              {/* Progress Bar */}
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full w-[70%]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECENT DONATIONS */}
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-6">Recent Donations</h2>

        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Campaign</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Rahul", "₹500", "Feed 100 Children", "Today"],
                ["Anita", "₹1000", "Village Drive", "Yesterday"],
                ["Amit", "₹250", "Emergency Relief", "2 days ago"],
              ].map((row, i) => (
                <tr key={i} className="border-t">
                  {row.map((cell, j) => (
                    <td key={j} className="p-4">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ACTIONS */}
      <section className="p-10 grid md:grid-cols-3 gap-6">
        <button className="bg-green-600 text-white py-3 rounded-xl shadow hover:scale-105 transition">
          Create Campaign
        </button>

        <button className="bg-black text-white py-3 rounded-xl shadow hover:scale-105 transition">
          View Reports
        </button>

        <button className="bg-gray-800 text-white py-3 rounded-xl shadow hover:scale-105 transition">
          Manage Users
        </button>
      </section>

      {/* ADMIN PROFILE */}
      <section className="p-10">
        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-6">
          <div className="h-16 w-16 rounded-full bg-green-200" />
          <div>
            <h3 className="font-bold">Admin User</h3>
            <p className="text-gray-600 text-sm">admin@onemealonehope.org</p>
          </div>
        </div>
      </section>

      {/* FINAL NOTE */}
      <section className="p-10 text-center text-gray-600">
        <p>
          This dashboard provides real-time insights into the impact of your NGO.
          Keep tracking, improving, and expanding your reach.
        </p>
      </section>

    </main>
  );
}