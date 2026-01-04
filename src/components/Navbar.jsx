import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Camera, LogOut } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';


const Navbar = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const isLight = theme === 'light';

    const textColor = isLight ? 'text-zinc-800' : 'text-white';
    const linkColor = isLight ? 'text-zinc-600 hover:text-zinc-900' : 'text-gray-300 hover:text-white';
    const bgClass = isLight ? 'bg-white/80 border-zinc-200' : 'bg-black/20 border-white/10';
    const buttonClass = isLight ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900' : 'bg-white/10 hover:bg-white/20 text-white';

    return (
        <nav className={`${bgClass} backdrop-blur-md border-b sticky top-0 z-40 transition-colors`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/gallery" className={`flex items-center gap-2 ${textColor} hover:opacity-80 transition-opacity`}>
                        <Camera size={24} />
                        <span className="font-bold text-xl">Sai's Photography</span>
                    </Link>

                    <div className="flex items-center gap-6">
                        <Link to="/gallery" className={`${linkColor} transition-colors`}>
                            Gallery
                        </Link>
                        <Link to="/about" className={`${linkColor} transition-colors`}>
                            About
                        </Link>
                        <Link to="/contact" className={`${linkColor} transition-colors`}>
                            Contact
                        </Link>



                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
