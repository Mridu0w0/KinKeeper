import React, { use } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast"; 

import {
  FaPhoneAlt,
  FaCommentDots,
  FaVideo,
  FaBellSlash,
  FaArchive,
  FaTrash
} from "react-icons/fa";

const friendPromise = fetch("/FriendsData.json").then((res) => res.json());

const statusColors = {
  "on-track": "bg-green-500",
  "almost due": "bg-yellow-500",
  "overdue": "bg-red-500",
};

const Details = () => {
  const { id } = useParams();
  const friends = use(friendPromise);

  const person = friends.find((f) => f.id === parseInt(id));

  // 1. Put handleInteraction INSIDE the component so it can read `person.name`
  const handleInteraction = (type) => {

    const newEntry = {
        id: Date.now(),
        type: type, 
        title: `${type} with ${person.name}`,
        date: new Date().toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        })
    };

    
    const savedTimeline = JSON.parse(localStorage.getItem('kinkeeper_timeline') || '[]');
    localStorage.setItem('kinkeeper_timeline', JSON.stringify([newEntry, ...savedTimeline]));

   
    toast.success(`${type} logged successfully!`);
  };

  if (!person) return <p className="p-10">Not found</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-20">
      <div className="flex gap-6">
        
        {/* Left */}
        <div className="w-90 max-w-md grid grid-cols-1 bg-base-200 rounded-xl p-6 shadow">
          <div className="w-80 bg-white rounded-xl p-6 text-center shadow ">
            <img
              src={person.picture}
              className="w-20 h-20 rounded-full mx-auto"
              alt={person.name}
            />

            <h3 className="mt-3 font-semibold">{person.name}</h3>

            <div className="flex justify-center gap-2 mt-2">
              <span className={`text-white text-xs px-5 py-1 rounded-full ${statusColors[person.status]}`}>
                {person.status}
              </span>

              <span className="text-xs bg-green-100 text-green-800 px-5 py-1 rounded-full">
                {person.tags[0]}
              </span> 
            </div>

            <p className="text-xs text-gray-500 mt-4">
              {person.bio}
            </p>

            <p className="text-xs text-gray-400 mt-2">
              Preferred: email
            </p>
          </div>

          <div className="mt-4">
            <button className="w-full mt-4 border-transparent bg-white shadow p-2 rounded flex items-center justify-center gap-2 hover:bg-gray-50">
              <FaBellSlash className="text-gray-500" /> Snooze 2 Weeks
            </button>

            <button className="w-full mt-2 border-transparent bg-white shadow p-2 rounded flex items-center justify-center gap-2 hover:bg-gray-50">
              <FaArchive className="text-gray-500" /> Archive
            </button>

            <button className="w-full mt-2 border-transparent bg-white shadow p-2 rounded text-red-500 flex items-center justify-center gap-2 hover:bg-red-50">
              <FaTrash /> Delete
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 space-y-3">
          
          {/* Stats */}
          <div className="flex gap-3 py-5">
            <div className="bg-white p-10 rounded-xl flex-1 shadow text-center">
              <h2 className="text-2xl font-bold">
                {person.days_since_contact}
              </h2>
              <p className="text-sm text-gray-500">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl flex-1 shadow text-center">
              <h2 className="text-2xl font-bold">
                {person.goal}
              </h2>
              <p className="text-sm text-gray-500">
                Goal (Days)
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl flex-1 shadow text-center">
              <h2 className="text-lg font-bold">
                {new Date(person.next_due_date).toLocaleDateString('en-US', {day: 'numeric', month: 'short',  year: 'numeric' })}
              </h2>
              <p className="text-sm text-gray-500">
                Next Due
              </p>
            </div>
          </div>

          {/* Goal */}
          <div className="bg-white p-10 rounded-xl shadow flex items-center justify-between mt-0">
            <div>
              <h4 className="font-semibold text-gray-800">Relationship Goal</h4>
              <p className="text-gray-500 text-sm">
                Connect every {person.goal} days
              </p>
            </div>
            <button className="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-50">Edit</button>
          </div>

          {/* Actions */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mt-6">
            <h4 className="mb-4 font-semibold text-gray-800">Quick Check-In</h4>

            <div className="flex gap-4">
                {/* Call Button */}
                <button 
                    onClick={() => handleInteraction('Call')}
                    className="flex-1 border border-gray-100 shadow-sm p-4 rounded-xl text-center hover:bg-gray-50 hover:shadow-md transition-all cursor-pointer"
                >
                    <FaPhoneAlt className="mx-auto mb-2 text-blue-500" size={18} />
                    <span className="text-sm font-medium text-gray-800">Call</span>
                </button>

                {/* Text Button */}
                <button 
                    onClick={() => handleInteraction('Text')}
                    className="flex-1 border border-gray-100 shadow-sm p-4 rounded-xl text-center hover:bg-gray-50 hover:shadow-md transition-all cursor-pointer"
                >
                    <FaCommentDots className="mx-auto mb-2 text-green-500" size={18} />
                    <span className="text-sm font-medium text-gray-800">Text</span>
                </button>

                {/* Video Button */}
                <button 
                    onClick={() => handleInteraction('Video')}
                    className="flex-1 border border-gray-100 shadow-sm p-4 rounded-xl text-center hover:bg-gray-50 hover:shadow-md transition-all cursor-pointer"
                >
                    <FaVideo className="mx-auto mb-2 text-purple-500" size={18} />
                    <span className="text-sm font-medium text-gray-800">Video</span>
                </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Details;