import React, { use, Suspense } from 'react';

// Fetch the promise outside the component
const friendsPromise = fetch('/FriendsData.json').then((res) => res.json());

const StatsDashboard = () => {
    // 1. Fetch data dynamically using 'use' hook
    const friends = use(friendsPromise);

    // 2. Perform calculations based on the provided JSON data structure
    const totalFriends = friends.length;
    const onTrackCount = friends.filter(f => f.status === 'on-track').length;
    
    // "Need Attention" is considered anything not 'on-track'
    const needAttentionCount = friends.filter(f => f.status !== 'on-track').length;
    
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const interactionsThisMonthCount = friends.filter(f => {
        const dueDate = new Date(f.next_due_date);
        return dueDate.getMonth() === currentMonth && dueDate.getFullYear() === currentYear;
    }).length;

    // 3. Define the stats data structure, omitting icons and icon colors
    const stats = [
        { value: totalFriends, label: "Total Friends" },
        { value: onTrackCount, label: "On Track"},
        { value: needAttentionCount, label: "Need Attention" },
        { value: interactionsThisMonthCount, label: "Interactions This Month" }
    ];

    return (
        <div className="p-10 bg-base-200">
            
            {/* Top Header Section */}
            <div className="text-center mb-6">
                <h2 className="text-5xl font-bold text-gray-800">Friends to keep close in your life</h2>
                <p className="text-gray-600  text-lg font-small m-3">Your personal shelf of meaningful connections. Browse, tend, and nurture the </p>
                        <p className='mb-4 text-gray-600  text-lg font-small'>relationships that matter most.</p>
                <button className="btn bg-green-800 text-white rounded-2 px-6 shadow-sm">
                    + Add Friend
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="card bg-base-100 shadow-sm border border-gray-100 py-10 px-6 flex flex-col justify-center items-center text-center rounded-2xl">
                        {/* Changed: flex-row to flex-col, added justify-center, text-center, and increased padding (py-10) */}
                        <div>
                            {/* Value on top, label on bottom - centered */}
                            <h3 className="text-4xl font-bold text-gray-800 leading-none mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-sm font-semibold text-gray-500">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function FriendsStatsSection() {
    return (
        // Handling asynchronous data loading
        <Suspense fallback={
            <div className="p-10 bg-base-200 grid grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-32 bg-gray-200 animate-pulse rounded-2xl border border-gray-100 p-6 flex flex-col items-center justify-center gap-2">
                        <div className="h-8 bg-gray-300 rounded w-1/3"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    </div>
                ))}
            </div>
        }>
            <StatsDashboard />
        </Suspense>
    );
}