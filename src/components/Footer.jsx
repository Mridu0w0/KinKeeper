import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#2A4D3E] text-white pt-16 pb-8 px-6 font-sans">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                
                {/* Header / Title */}
                <h1 className="text-5xl font-bold mb-4 tracking-tight">
                    KeenKeeper
                </h1>
                
                {/* Subtitle / Description */}
                <p className="text-gray-300 text-sm md:text-base max-w-2xl mb-10">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                
                {/* Social Links Section */}
                <div className="mb-12 flex flex-col items-center">
                    <h3 className="text-lg font-medium mb-4">Social Links</h3>
                    <div className="flex gap-4">
                        <a href="#" className="bg-white text-[#2A4D3E] w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors shadow-sm">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="bg-white text-[#2A4D3E] w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors shadow-sm">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="#" className="bg-white text-[#2A4D3E] w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors shadow-sm">
                            <FaXTwitter size={18} />
                        </a>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-white/10 mb-6"></div>

                {/* Bottom Copyright & Legal Links */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;