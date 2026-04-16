import React from 'react';
// Using the specific import you requested
import { Link, useNavigate } from 'react-router'; 
import { FaExclamationTriangle, FaArrowLeft, FaHome } from 'react-icons/fa';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
            <div className="max-w-md text-center">
                {/* Visual Icon */}
                <div className="flex justify-center mb-6">
                    <div className="p-6 bg-green-100 rounded-full text-green-800">
                        <FaExclamationTriangle size={64} />
                    </div>
                </div>

                {/* Text Content */}
                <h1 className="text-9xl font-black text-green-800 opacity-10">404</h1>
                <h2 className="text-3xl font-bold text-green-800 mt-[-2rem] mb-4">
                    Lost in the Roots?
                </h2>
                <p className="text-gray-600 mb-8 font-medium">
                    The branch you're looking for doesn't exist in our tree. 
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* Using the Link component from 'react-router' */}
                    <Link 
                        to="/" 
                        className="btn btn-success text-white px-8 shadow-md hover:shadow-lg transition-all"
                    >
                        <FaHome className="mr-2" /> Back to Home
                    </Link>
                    
                    <button 
                        onClick={() => navigate(-1)} 
                        className="btn btn-outline border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800"
                    >
                        <FaArrowLeft className="mr-2" /> Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;