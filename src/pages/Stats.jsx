import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Stats = () => {
    const [chartData, setChartData] = useState([]);

    // Custom colors matching the Figma design
    const COLORS = {
        Text: '#8B5CF6',  // Purple
        Call: '#2B4D3C',  // Dark Green
        Video: '#5BA85E'  // Medium/Light Green
    };

    useEffect(() => {
        // Read from the same localStorage used in the Details and Timeline pages
        const savedTimeline = JSON.parse(localStorage.getItem('kinkeeper_timeline') || '[]');

        const counts = { Text: 0, Call: 0, Video: 0 };
        
        savedTimeline.forEach(entry => {
            if (counts[entry.type] !== undefined) {
                counts[entry.type]++;
            }
        });

        let data = [
            { name: 'Text', value: counts.Text },
            { name: 'Call', value: counts.Call },
            { name: 'Video', value: counts.Video }
        ];

        // If no data is logged yet, show placeholder data so the chart is visible for the UI design
        if (data.every(d => d.value === 0)) {
            data = [
                { name: 'Text', value: 40 },
                { name: 'Call', value: 35 },
                { name: 'Video', value: 25 }
            ];
        }

        setChartData(data);
    }, []);

    // Custom Legend to match the design's specific gray text and layout
    const renderCustomLegend = (props) => {
        const { payload } = props;
        return (
            <ul className="flex justify-center gap-6 mt-4">
                {payload.map((entry, index) => (
                    <li key={`item-${index}`} className="flex items-center text-sm text-gray-500 font-medium">
                        <span 
                            className="w-2.5 h-2.5 rounded-full mr-2" 
                            style={{ backgroundColor: entry.color }}
                        ></span>
                        {entry.value}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="min-h-screen bg-[#F8F9FB] p-8 md:p-12 font-sans">
            <div className="max-w-5xl mx-auto">
                
                {/* Heading */}
                <h1 className="text-4xl font-bold text-[#1E293B] mb-8 tracking-tight">
                    Friendship Analytics
                </h1>

                {/* Card Container */}
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-50 p-8">
                    
                    {/* Subheading */}
                    <h2 className="text-[#2B4D3C] text-lg font-medium mb-8">
                        By Interaction Type
                    </h2>

                    {/* Chart Area */}
                    <div className="w-full h-80 flex justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={90}
                                    outerRadius={120}
                                    paddingAngle={5} // Creates the gaps between slices
                                    cornerRadius={8} // Creates the rounded edges on the slices
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell 
                                            key={`cell-${index}`} 
                                            fill={COLORS[entry.name]} 
                                        />
                                    ))}
                                </Pie>
                                <Tooltip 
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                                    itemStyle={{ color: '#1E293B', fontWeight: 500 }}
                                />
                                <Legend content={renderCustomLegend} verticalAlign="bottom" />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Stats;