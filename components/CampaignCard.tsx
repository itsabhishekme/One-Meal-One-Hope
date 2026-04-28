export default function CampaignCard({ title }: { title: string }) {
  return (
    <div className="border p-6 rounded shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2">Help us reach this goal.</p>
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Support
      </button>
    </div>
  );
}