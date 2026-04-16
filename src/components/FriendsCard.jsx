import React, { use, Suspense } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate

const friendPromise = fetch('/FriendsData.json').then((res) => res.json());

const statusStyles = {
  "on-track":   "bg-green-100 text-green-800 border border-green-300",
  "almost due": "bg-yellow-100 text-yellow-800 border border-yellow-300",
  "overdue":    "bg-red-100 text-red-800 border border-red-300",
};

const statusLabels = {
  "on-track":   "On-Track",
  "almost due": "Almost Due",
  "overdue":    "Overdue",
};

const tagStyles = {
  "work":         "bg-green-100 text-green-800",
  "family":       "bg-yellow-100 text-yellow-800",
  "hobby":        "bg-purple-100 text-purple-800",
  "travel":       "bg-blue-100 text-blue-800",
  "gaming":       "bg-pink-100 text-pink-800",
  "close friend": "bg-emerald-100 text-emerald-800",
  "college":      "bg-violet-100 text-violet-800",
  "childhood":    "bg-orange-100 text-orange-800",
  "hometown":     "bg-teal-100 text-teal-800",
  "mentor":       "bg-sky-100 text-sky-800",
  "professional": "bg-cyan-100 text-cyan-800",
  "gym":          "bg-fuchsia-100 text-fuchsia-800",
  "neighbor":     "bg-gray-100 text-gray-700",
  "music":        "bg-rose-100 text-rose-800",
  "concerts":     "bg-pink-100 text-pink-800",
};

const getTagStyle = (tag) =>
  tagStyles[tag.toLowerCase()] ?? "bg-gray-100 text-gray-600";

const FriendsCard = () => {
  const friends = use(friendPromise);
  const navigate = useNavigate(); // 2. Initialize the hook

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {friends.map((friend) => (
          <div
            key={friend.id}
            // 3. Add onClick handler passing the friend's ID to the URL
            onClick={() => navigate(`/details/${friend.id}`)}
            // 4. Added 'cursor-pointer' and a slight scale on hover for better UX
            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 flex flex-col items-center text-center p-6 gap-3 cursor-pointer"
          >
            {/* Avatar */}
            <img
              src={`${friend.picture}?w=120&h=120&fit=crop&crop=face`}
              alt={friend.name}
              className="w-20 h-20 rounded-full object-cover"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(friend.name)}&size=80&background=e0f2fe&color=0369a1`;
              }}
            />

            {/* Name */}
            <p className="font-semibold text-gray-900 text-base leading-tight">
              {friend.name}
            </p>

            {/* Days since contact */}
            <p className="text-xs text-gray-400">
              {friend.days_since_contact}d ago
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-1">
              {friend.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-[10px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full ${getTagStyle(tag)}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Status badge */}
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[friend.status] ?? "bg-gray-100 text-gray-600 border border-gray-200"}`}
            >
              {statusLabels[friend.status] ?? friend.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function FriendsSection() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center p-20">
          <span className="loading loading-spinner loading-lg text-success"></span>
        </div>
      }
    >
      <FriendsCard />
    </Suspense>
  );
}