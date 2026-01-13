import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isLight = theme === 'light';

    return (
        <motion.button
            layout
            onClick={toggleTheme}
            className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50 backdrop-blur-md border transition-all duration-300 hover:scale-110 ${isLight
                ? 'bg-white/80 border-zinc-200 text-zinc-900 shadow-zinc-200/50'
                : 'bg-black/60 border-white/10 text-white shadow-black/50'
                }`}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={isLight ? "light" : "dark"}
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                >
                    {isLight ? <Moon size={24} /> : <Sun size={24} />}
                </motion.div>
            </AnimatePresence>
        </motion.button>
    );
};

export default ThemeToggle;
