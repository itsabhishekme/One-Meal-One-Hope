import Image from "next/image";

interface CampaignCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  raised: number;
  goal: number;
  donors: number;
  daysLeft: number;
}

export default function CampaignCard({
  title,
  description,
  image,
  category,
  raised,
  goal,
  donors,
  daysLeft,
}: CampaignCardProps) {
  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Campaign Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div>
          <h3 className="line-clamp-2 text-2xl font-bold text-gray-900">
            {title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
            {description}
          </p>
        </div>

        {/* Progress */}
        <div>
          <div className="mb-2 flex justify-between text-sm font-medium">
            <span>Raised</span>
            <span>{progress.toFixed(0)}%</span>
          </div>

          <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-green-600 transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4 border-y py-4 text-center">
          <div>
            <p className="text-xl font-bold text-green-700">
              ₹{raised.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">Raised</p>
          </div>

          <div>
            <p className="text-xl font-bold text-blue-700">
              ₹{goal.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">Goal</p>
          </div>

          <div>
            <p className="text-xl font-bold text-red-600">{daysLeft}</p>
            <p className="text-xs text-gray-500">Days Left</p>
          </div>
        </div>

        {/* Donors */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">{donors}</p>
            <p className="text-sm text-gray-500">Supporters</p>
          </div>

          <div className="text-right">
            <p className="text-lg font-semibold">
              ₹{(goal - raised).toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">Still Needed</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="flex-1 rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700">
            ❤️ Donate Now
          </button>

          <button className="rounded-xl border border-gray-300 px-5 py-3 transition hover:bg-gray-100">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}