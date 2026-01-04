import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

import { useTheme } from '../contexts/ThemeContext';

const ImageCard = ({ image, onClick }) => {
    const [isLoading, setIsLoading] = useState(true);
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <motion.div
            layoutId={`card-${image.id}`}
            className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-lg break-inside-avoid mb-8 ${isLight ? 'bg-white shadow-xl/5' : 'bg-zinc-800'}`}
            onClick={() => onClick(image)}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            {isLoading && (
                <div className={`absolute inset-0 animate-pulse ${isLight ? 'bg-gray-200' : 'bg-zinc-700'}`} />
            )}

            <div className="relative overflow-hidden">
                <img
                    src={image.url}
                    alt={image.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${isLight ? 'group-hover:scale-105 group-hover:brightness-105' : 'group-hover:scale-110'
                        } ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    loading="lazy"
                    onLoad={() => setIsLoading(false)}
                />

                {/* Overlay used for both themes but customized */}
                <div className={`absolute inset-0 transition-opacity duration-300 flex flex-col justify-end p-6 ${isLight
                    ? 'bg-black/20 opacity-0 group-hover:opacity-100'
                    : 'bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100'
                    }`}>
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {/* Tags & Content */}
                        <div className={isLight ? 'text-white' : 'text-white'}>
                            <span className={`inline-block px-2 py-1 mb-2 text-xs font-medium backdrop-blur-md rounded-full border ${isLight ? 'bg-black/20 border-white/20' : 'bg-white/20 border-white/10'}`}>
                                {image.category}
                            </span>
                            <h3 className="text-xl font-bold font-serif tracking-wide">
                                {image.title}
                            </h3>
                            <div className={`flex items-center gap-2 mt-2 delay-75 ${isLight ? 'text-gray-100' : 'text-gray-300'}`}>
                                <MapPin size={16} />
                                <span className="text-sm font-serif italic">{image.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ImageCard;
