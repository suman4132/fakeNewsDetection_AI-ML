import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, BrainCircuit, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Register = () => {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);

        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            await register({ name, email, password });
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            alert('Registration Failed: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[100px]" />

            <div className="w-full max-w-md relative z-10 glass-card p-8 md:p-10">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-block mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center mx-auto shadow-lg shadow-blue-500/20">
                            <BrainCircuit className="text-white w-7 h-7" />
                        </div>
                    </Link>
                    <h2 className="text-2xl font-bold mb-2 text-foreground">Create Account</h2>
                    <p className="text-gray-400 text-sm">Join the research network for free</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-300">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Dr. Alex Smith"
                                className="w-full bg-surface border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-foreground placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-300">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="email"
                                placeholder="researcher@university.edu"
                                className="w-full bg-surface border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-foreground placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-300">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-surface border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-foreground placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-300">Confirm Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-surface border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-foreground placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Get Started <ArrowRight className="w-4 h-4" /></>}
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-gray-400">
                    Already have an account? <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium">Sign in</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
