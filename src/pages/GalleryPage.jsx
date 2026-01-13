import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../data/images';
import ImageCard from '../components/ImageCard';
import Modal from '../components/Modal';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GalleryPage = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(images.map(img => img.category))];

    const filteredImages = useMemo(() => {
        return selectedCategory === 'All'
            ? images
            : images.filter(img => img.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="min-h-screen transition-colors duration-300">
            <Navbar />

            <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4 mb-12"
                >
                    <h1 className={`text-4xl md:text-5xl font-serif tracking-widest uppercase ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                        Gallery Collection
                    </h1>
                    <p className={`font-serif italic text-xl ${isLight ? 'text-zinc-500' : 'text-gray-400'}`}>
                        A curated journey through light and shadow
                    </p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-serif tracking-wide transition-all ${selectedCategory === category
                                ? (isLight ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900') + ' shadow-lg transform scale-105'
                                : (isLight ? 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200' : 'bg-white/10 text-gray-300 hover:bg-white/20')
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <motion.div
                    layout
                    className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
                >
                    <AnimatePresence>
                        {filteredImages.map((image) => (
                            <motion.div
                                key={image.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ImageCard
                                    image={image}
                                    onClick={setSelectedImage}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredImages.length === 0 && (
                    <div className="text-center py-20 text-zinc-400 font-serif italic">
                        No images found in this category.
                    </div>
                )}
            </main>

            <Modal
                selectedImage={selectedImage}
                onClose={() => setSelectedImage(null)}
            />
            <Footer />
        </div>
    );
};

export default GalleryPage;
