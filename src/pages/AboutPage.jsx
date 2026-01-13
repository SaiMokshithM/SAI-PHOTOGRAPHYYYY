import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import photographerImage from '../assets/photographer_sai.png';

import { useTheme } from '../contexts/ThemeContext';

const AboutPage = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    return (
        <div className="min-h-screen transition-colors duration-300">
            <Navbar />

            <main className="max-w-6xl mx-auto px-8 py-20">
                <div className="flex flex-col items-center text-center space-y-4 mb-24">
                    <h1 className={`text-4xl md:text-5xl font-serif tracking-widest uppercase ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                        Sai's Photography
                    </h1>
                    <p className={`font-serif italic text-lg ${isLight ? 'text-zinc-500' : 'text-gray-400'}`}>
                        Organic, natural & soulful
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Text Section */}
                    <div className="order-2 md:order-1 space-y-8 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className={`text-3xl font-serif mb-8 tracking-wide ${isLight ? 'text-zinc-800' : 'text-white'}`}>
                                Hello, I'm Sai.
                            </h2>
                            <div className={`space-y-6 font-serif leading-loose text-lg ${isLight ? 'text-zinc-600' : 'text-gray-300'}`}>
                                <p>
                                    Light, love, details, passing moments you'd like to keep. These are the things that motivate me as a photographer right down to my very soul.
                                </p>
                                <p>
                                    My heart can hardly handle the thought of moments fading, and I know yours can't either. I want my images to remind you of the feeling, the smells, the sounds, the warmth, the goosebumps.
                                </p>
                                <p>
                                    I simply document you, your story and what I see in the most organic and sincere way. I encourage you to be silly, be in love, be you, and to let me share in that with you.
                                </p>
                                <p>
                                    I am so glad you are here. I cannot wait to meet you!
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Section */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className={`p-4 shadow-[0_0_30px_rgba(0,0,0,0.05)] ${isLight ? 'bg-white' : 'bg-zinc-800/50'}`}
                        >
                            <img
                                src={photographerImage}
                                alt="Sai - Photographer"
                                className="w-full max-w-md h-auto object-cover grayscale-[10%] contrast-[1.05]"
                            />
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
