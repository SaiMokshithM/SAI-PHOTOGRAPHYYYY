import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Instagram, Twitter, Facebook, Mail, Heart } from 'lucide-react';

import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const bgClass = isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-black/40 border-white/10';
    const textColor = isLight ? 'text-zinc-800' : 'text-white';
    const subTextColor = isLight ? 'text-zinc-500 hover:text-zinc-900' : 'text-gray-400 hover:text-white';
    const iconBg = isLight ? 'bg-zinc-200 hover:bg-zinc-300 text-zinc-600 hover:text-zinc-900' : 'bg-white/5 hover:bg-white/20 text-gray-400 hover:text-white';

    return (
        <footer className={`${bgClass} backdrop-blur-md border-t mt-auto transition-colors`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <Link to="/gallery" className={`flex items-center gap-2 ${textColor} hover:opacity-80 transition-opacity`}>
                            <Camera size={24} />
                            <span className="font-bold text-xl">Sai's Photography</span>
                        </Link>
                        <p className={`${isLight ? 'text-zinc-500' : 'text-gray-400'} max-w-sm`}>
                            Capturing moments in time, from the subtle beauty of nature to the vibrant energy of city life.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1 space-y-4">
                        <h3 className={`font-semibold ${textColor} text-lg`}>Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/gallery" className={`${subTextColor} transition-colors`}>
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className={`${subTextColor} transition-colors`}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className={`${subTextColor} transition-colors`}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="col-span-1 space-y-4">
                        <h3 className={`font-semibold ${textColor} text-lg`}>Connect</h3>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/sai_photographyyy/?" className={`p-2 ${iconBg} rounded-full transition-all`}>
                                <Instagram size={20} />
                            </a>
                            <a href="https://x.com/_SaiMokshith" className={`p-2 ${iconBg} rounded-full transition-all`}>
                                <Twitter size={20} />
                            </a>
                            <a href="#" className={`p-2 ${iconBg} rounded-full transition-all`}>
                                <Facebook size={20} />
                            </a> 
                            <a href="mailto:contact@example.com" className={`p-2 ${iconBg} rounded-full transition-all`}>
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={`pt-8 border-t ${isLight ? 'border-zinc-200' : 'border-white/10'} flex flex-col md:flex-row justify-between items-center gap-4 text-sm ${isLight ? 'text-zinc-400' : 'text-gray-500'}`}>
                    <p>© 2025 Sai's Photography. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span>Made with</span>
                        <Heart size={14} className="text-red-500 fill-red-500" />
                        <span>and React</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
