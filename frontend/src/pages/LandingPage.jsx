import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Brain, Zap, FileText, BarChart3, Lock, ChevronRight, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-blue-500/30 transition-colors duration-300">
            <Navbar />

            {/* Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[0%] right-[-10%] w-[30%] h-[30%] bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[40%] left-[20%] w-[20%] h-[20%] bg-cyan-600/10 rounded-full blur-[80px]" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-4">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">AI Model v2.0 Live</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                            AI-Powered <br />
                            <span className="text-gradient">Fake News Detection</span>
                        </h1>

                        <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                            Instantly verify the credibility of news articles using state-of-the-art Natural Language Processing and Deep Learning models.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/register" className="btn-primary group flex items-center justify-center gap-2">
                                Get Started
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/login" className="btn-outline flex items-center justify-center gap-2">
                                Live Demo
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center gap-6 text-gray-500 text-sm font-semibold">
                            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-blue-500" /> 98% Accuracy</span>
                            <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-purple-500" /> Real-time Analysis</span>
                        </div>
                    </motion.div>

                    {/* Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 glass-card p-6 md:p-8 animate-float">
                            <div className="flex items-center justify-between mb-6 border-b border-gray-200 dark:border-white/10 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs text-gray-400 font-mono">analysis_result.json</div>
                            </div>

                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Status:</span>
                                    <span className="text-green-500 font-bold">Completed</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Prediction:</span>
                                    <span className="text-red-500 font-bold bg-red-500/10 px-2 py-0.5 rounded">FAKE_NEWS</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Confidence:</span>
                                    <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div className="w-[92%] h-full bg-gradient-to-r from-red-500 to-orange-500" />
                                    </div>
                                    <span className="text-foreground">92.4%</span>
                                </div>

                                <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                                    <p className="text-gray-500 mb-2">// Key Indicators Found</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-500 dark:text-blue-300 text-xs">Sensationalism</span>
                                        <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-500 dark:text-blue-300 text-xs">Biased Language</span>
                                        <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-500 dark:text-blue-300 text-xs">Unverified Source</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements (Decorative) */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                            className="absolute -top-12 -right-12 glass p-4 rounded-xl z-0 hidden md:block"
                        >
                            <Brain className="w-8 h-8 text-purple-400" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                            className="absolute -bottom-8 -left-8 glass p-4 rounded-xl z-20 hidden md:block"
                        >
                            <ShieldCheck className="w-8 h-8 text-blue-400" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* How it Works */}
            <section id="how-it-works" className="relative z-10 py-24 bg-gray-50/50 dark:bg-surface/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">How it Works</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Our advanced system processes information in three simple steps to ensure you get accurate verifications in seconds.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Upload className="w-8 h-8 text-blue-400" />,
                                title: "1. Upload Content",
                                desc: "Paste a URL or upload a screenshot of the news article you want to verify."
                            },
                            {
                                icon: <Brain className="w-8 h-8 text-purple-400" />,
                                title: "2. AI Analysis",
                                desc: "Our deep learning models analyze text patterns, sources, and cross-reference data."
                            },
                            {
                                icon: <FileText className="w-8 h-8 text-cyan-400" />,
                                title: "3. Get Results",
                                desc: "Receive a detailed report with a credibility score and key risk factors."
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="glass-card p-8 text-center hover:bg-white/60 dark:hover:bg-surface/80 transition-colors group"
                            >
                                <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-surface rounded-2xl flex items-center justify-center mb-6 border border-gray-200 dark:border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-400">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="relative z-10 py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed for <br />Research & Speed</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Built with the latest advancements in Machine Learning, our platform isn't just a prototype—it's a robust tool designed for high accuracy and minimal latency.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "Transformer-based NLP Models",
                                    "Real-time Multimodal Analysis",
                                    "Historical Data Tracking",
                                    "Secure & Private Processing"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <ShieldCheck className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <span className="text-lg text-gray-500 dark:text-gray-200">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <div className="glass-card p-6 aspect-square flex flex-col justify-center items-center text-center">
                                    <BarChart3 className="w-10 h-10 text-blue-400 mb-4" />
                                    <h4 className="font-bold">Analytics</h4>
                                </div>
                                <div className="glass-card p-6 aspect-square flex flex-col justify-center items-center text-center bg-blue-600/10 border-blue-500/30">
                                    <Brain className="w-10 h-10 text-gray-800 dark:text-white mb-4" />
                                    <h4 className="font-bold text-gray-800 dark:text-white">Neural Net</h4>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="glass-card p-6 aspect-square flex flex-col justify-center items-center text-center bg-purple-600/10 border-purple-500/30">
                                    <Lock className="w-10 h-10 text-gray-800 dark:text-white mb-4" />
                                    <h4 className="font-bold text-gray-800 dark:text-white">Secure</h4>
                                </div>
                                <div className="glass-card p-6 aspect-square flex flex-col justify-center items-center text-center">
                                    <Zap className="w-10 h-10 text-yellow-400 mb-4" />
                                    <h4 className="font-bold">Fast</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;
