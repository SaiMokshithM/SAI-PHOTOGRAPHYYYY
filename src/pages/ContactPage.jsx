import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { useTheme } from '../contexts/ThemeContext';

const ContactPage = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Determine API base URL
        const API_BASE_URL = import.meta.env.VITE_API_URL || '';

        try {
            const response = await fetch(`${API_BASE_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Thank you for your message! We will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Network error. Please check your connection and try again.');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Construct Gmail Compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=contact@example.com&su=Photography%20Inquiry`;

    return (
        <div className="min-h-screen transition-colors duration-300">
            <Navbar />

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className={`text-4xl md:text-5xl font-serif tracking-widest uppercase mb-6 ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                        Get in Touch
                    </h1>
                    <p className={`font-serif italic text-xl max-w-2xl mx-auto ${isLight ? 'text-zinc-500' : 'text-gray-400'}`}>
                        Interested in collaboration or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info & Gmail Link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className={`p-10 rounded-2xl border shadow-sm ${isLight ? 'bg-zinc-50 border-zinc-100' : 'bg-white/5 border-white/10'}`}>
                            <h2 className={`text-2xl font-serif tracking-wide mb-8 ${isLight ? 'text-zinc-800' : 'text-white'}`}>Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className={`p-4 rounded-xl shadow-sm border ${isLight ? 'bg-white border-zinc-100' : 'bg-white/10 border-white/5'}`}>
                                        <Mail className={isLight ? 'text-zinc-700' : 'text-gray-200'} size={24} />
                                    </div>
                                    <div>
                                        <h3 className={`font-serif text-lg font-medium mb-1 ${isLight ? 'text-zinc-900' : 'text-white'}`}>Email</h3>
                                        <p className={`${isLight ? 'text-zinc-600' : 'text-gray-400'} mb-3`}>saimokshith2006@gmail.com</p>
                                        <div className="flex flex-wrap gap-3">
                                            <a
                                                href={gmailUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-sm font-medium text-white transition-colors"
                                            >
                                                <Mail size={16} />
                                                Open in Gmail
                                            </a>
                                            <a
                                                href="mailto:contact@example.com"
                                                className={`inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${isLight
                                                    ? 'bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-700'
                                                    : 'bg-white/10 border-white/10 hover:bg-white/20 text-gray-200'}`}
                                            >
                                                Default App
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className={`p-4 rounded-xl shadow-sm border ${isLight ? 'bg-white border-zinc-100' : 'bg-white/10 border-white/5'}`}>
                                        <Phone className={isLight ? 'text-zinc-700' : 'text-gray-200'} size={24} />
                                    </div>
                                    <div>
                                        <h3 className={`font-serif text-lg font-medium mb-1 ${isLight ? 'text-zinc-900' : 'text-white'}`}>Phone</h3>
                                        <p className={isLight ? 'text-zinc-600' : 'text-gray-400'}>9347804324</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className={`p-4 rounded-xl shadow-sm border ${isLight ? 'bg-white border-zinc-100' : 'bg-white/10 border-white/5'}`}>
                                        <MapPin className={isLight ? 'text-zinc-700' : 'text-gray-200'} size={24} />
                                    </div>
                                    <div>
                                        <h3 className={`font-serif text-lg font-medium mb-1 ${isLight ? 'text-zinc-900' : 'text-white'}`}>Location</h3>
                                        <p className={isLight ? 'text-zinc-600' : 'text-gray-400'}>Badvel, YSR district</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className={`space-y-6 p-10 rounded-2xl border shadow-[0_0_40px_rgba(0,0,0,0.03)] ${isLight ? 'bg-white border-zinc-100' : 'bg-white/5 border-white/10'}`}>
                            <div>
                                <label htmlFor="name" className={`block text-sm font-medium mb-2 font-serif ${isLight ? 'text-zinc-600' : 'text-gray-300'}`}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 transition-all ${isLight
                                        ? 'bg-zinc-50 border-zinc-200 focus:ring-zinc-400 focus:border-zinc-400 text-zinc-900 placeholder-zinc-400'
                                        : 'bg-white/5 border-white/10 focus:ring-white/30 focus:border-white/30 text-white placeholder-gray-500'}`}
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className={`block text-sm font-medium mb-2 font-serif ${isLight ? 'text-zinc-600' : 'text-gray-300'}`}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 transition-all ${isLight
                                        ? 'bg-zinc-50 border-zinc-200 focus:ring-zinc-400 focus:border-zinc-400 text-zinc-900 placeholder-zinc-400'
                                        : 'bg-white/5 border-white/10 focus:ring-white/30 focus:border-white/30 text-white placeholder-gray-500'}`}
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className={`block text-sm font-medium mb-2 font-serif ${isLight ? 'text-zinc-600' : 'text-gray-300'}`}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 transition-all resize-none ${isLight
                                        ? 'bg-zinc-50 border-zinc-200 focus:ring-zinc-400 focus:border-zinc-400 text-zinc-900 placeholder-zinc-400'
                                        : 'bg-white/5 border-white/10 focus:ring-white/30 focus:border-white/30 text-white placeholder-gray-500'}`}
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <button
                                type="submit"
                                className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-medium tracking-wide rounded-lg transition-all transform hover:scale-[1.01] ${isLight
                                    ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                                    : 'bg-white text-black hover:bg-gray-100'}`}
                            >
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
