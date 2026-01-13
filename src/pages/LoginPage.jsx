import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, RefreshCw } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import loginBg from '../assets/login_bg.png';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [userCaptcha, setUserCaptcha] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const generateCaptcha = () => {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCaptcha(result);
        setUserCaptcha('');
        setError('');
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (userCaptcha !== captcha) {
            setError('Incorrect captcha. Please try again.');
            generateCaptcha();
            setLoading(false);
            return;
        }

        const result = await login(email, password);

        if (result.success) {
            navigate('/gallery');
        } else {
            setError(result.message);
            generateCaptcha();
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${loginBg})` }}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-md p-8 bg-white/10 border border-white/20 rounded-2xl shadow-2xl backdrop-blur-md"
            >
                <div className="flex flex-col items-center mb-8">
                    <div className="p-3 bg-white/20 rounded-full mb-4">
                        <Camera size={32} className="text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
                    <p className="text-zinc-300 mt-2">Sign in to view Sai's Photography</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Security Check</label>
                        <div className="flex items-center gap-4">
                            <div
                                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-center select-none tracking-[0.5em] text-xl font-bold"
                                style={{
                                    backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%, transparent)',
                                    backgroundSize: '20px 20px'
                                }}
                            >
                                {captcha}
                            </div>
                            <button
                                type="button"
                                onClick={generateCaptcha}
                                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                                title="Refresh Captcha"
                            >
                                <RefreshCw size={20} />
                            </button>
                        </div>
                        <input
                            type="text"
                            value={userCaptcha}
                            onChange={(e) => setUserCaptcha(e.target.value)}
                            className="w-full mt-2 px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                            placeholder="Enter the characters above"
                            required
                        />
                        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {loading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-zinc-400">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-white font-medium hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
