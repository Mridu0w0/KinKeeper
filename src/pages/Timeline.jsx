import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaCommentDots, FaVideo, FaHandshake } from 'react-icons/fa';

const Timeline = () => {
    const [history, setHistory] = useState([]);
    // 1. Add a state to keep track of the selected filter
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const savedTimeline = JSON.parse(localStorage.getItem('kinkeeper_timeline') || '[]');
        setHistory(savedTimeline);
    }, []);

    const getIcon = (type) => {
        switch (type) {
            case 'Call': 
                return <FaPhoneAlt className="text-gray-700" size={22} />;
            case 'Text': 
                return <FaCommentDots className="text-gray-400" size={24} />;
            case 'Video': 
                return <FaVideo className="text-gray-600" size={24} />;
            
            default: 
                return <FaCommentDots className="text-gray-400" size={24} />;
        }
    };

    // 2. Filter the history based on the dropdown selection
    const filteredHistory = filter 
        ? history.filter(entry => entry.type === filter) 
        : history; // If no filter is selected (empty string), show all

    return (
        <div className="min-h-screen bg-[#F8F9FB] p-8 md:p-12 font-sans">
            <div className="max-w-4xl mx-auto">
                
                {/* Header */}
                <h1 className="text-4xl font-bold text-[#1E293B] mb-6 tracking-tight">
                    Timeline
                </h1>

                {/* Filter Dropdown */}
                <div className="mb-8 relative w-48">
                    {/* 3. Connect the select element to the state */}
                    <select 
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full appearance-none bg-[#FAFAFA] border border-gray-200 text-gray-500 text-sm rounded-lg px-4 py-2.5 outline-none hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 transition-all cursor-pointer"
                    >
                        <option value="">Filter timeline</option>
                        <option value="Call">Call</option>
                        <option value="Text">Text</option>
                        <option value="Video">Video</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>

                {/* Timeline Entries List */}
                <div className="flex flex-col gap-4">
                    {/* 4. Use the filteredHistory array here instead of the raw history */}
                    {filteredHistory.length === 0 ? (
                        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center text-gray-500">
                            {history.length === 0 
                                ? "No interactions logged yet. Head over to a friend's profile to check in!" 
                                : "No interactions match this filter."}
                        </div>
                    ) : (
                        filteredHistory.map((entry) => {
                            const friendName = entry.title.includes('with') 
                                ? entry.title.split('with')[1].trim() 
                                : "Friend";

                            return (
                                <div 
                                    key={entry.id} 
                                    className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-5 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-all hover:shadow-md"
                                >
                                    <div className="flex-shrink-0 w-12 flex justify-center drop-shadow-sm">
                                        {getIcon(entry.type)}
                                    </div>
                                    
                                    <div className="flex flex-col">
                                        <div className="text-[15px]">
                                            <span className="font-semibold text-[#2D3748]">{entry.type}</span> 
                                            <span className="text-gray-500"> with {friendName}</span>
                                        </div>
                                        <div className="text-sm text-gray-400 mt-0.5 font-medium">
                                            {entry.date}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
                
            </div>
        </div>
    );
};

export default Timeline;