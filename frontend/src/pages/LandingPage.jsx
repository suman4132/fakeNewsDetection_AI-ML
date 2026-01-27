import React, { useRef, useState, useEffect, Suspense } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ShieldCheck, Brain, Zap, FileText, BarChart3, Lock, ChevronRight, Upload, Globe, Cpu, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Scene from '../components/3d/Scene';
import MagneticButton from '../components/ui/MagneticButton';

// --- Text Reveal Component ---
const RevealText = ({ children, delay = 0 }) => {
    return (
        <div className="reveal-text overflow-hidden">
            <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
                viewport={{ once: true }}
                className="block"
            >
                {children}
            </motion.span>
        </div>
    );
};

// --- 3D Card Component (Retained & Enhanced) ---
// --- 3D Card Component (Retained & Enhanced) ---
const Hero3DCard = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set((clientX - left) / width - 0.5);
        y.set((clientY - top) / height - 0.5);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    return (
        <motion.div
            className="perspective-1000 relative z-20"
            onMouseMove={onMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="w-full max-w-lg mx-auto bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden group"
            >
                {/* Noise Texture Overlay on Card */}
                <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

                {/* Glossy Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="flex items-center justify-between mb-8 transform-style-3d translate-z-10 relative">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                        <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400">
                        CONFIDENTIAL_ANALYSIS.json
                    </div>
                </div>

                <div className="space-y-6 transform-style-3d translate-z-20 relative">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-400">Target Source</p>
                            <p className="text-white font-semibold">Viral_News_Article.pdf</p>
                        </div>
                        <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-lg text-xs font-bold border border-red-500/50 animate-pulse">
                            HIGH RISK
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Authenticity Score</span>
                            <span className="text-white font-mono">12.4%</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "12.4%" }}
                                transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-red-600 to-orange-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                            <Globe className="w-5 h-5 text-blue-400 mb-2" />
                            <p className="text-xs text-gray-500">Domain Authority</p>
                            <p className="text-sm font-semibold text-white">Low / Suspicious</p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                            <Activity className="w-5 h-5 text-purple-400 mb-2" />
                            <p className="text-xs text-gray-500">Bot Activity</p>
                            <p className="text-sm font-semibold text-white">Detected (88%)</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/40 font-sans relative">
            <Navbar />

            {/* Global Noise Overlay */}
            <div className="fixed inset-0 z-50 pointer-events-none bg-noise opacity-[0.03]" />

            {/* 3D Scene Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </div>

            {/* Gradient Blobs */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-medium text-gray-300">Neural Engine v2.0 Online</span>
                        </motion.div>

                        <div className="space-y-2">
                            <RevealText>
                                <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                                    Truth in
                                </h1>
                            </RevealText>
                            <RevealText delay={0.1}>
                                <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient-x">
                                        Real Time
                                    </span>
                                </h1>
                            </RevealText>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="text-xl text-gray-400 max-w-xl leading-relaxed"
                        >
                            Detect misinformation instantly with our military-grade NLP engine.
                            Trusted by journalists, researchers, and truth-seekers worldwide.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <Link to="/register">
                                <MagneticButton className="group relative px-8 py-4 bg-white text-black rounded-xl font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors">
                                    Start Detecting
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </MagneticButton>
                            </Link>

                            <Link to="/login">
                                <MagneticButton className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all backdrop-blur-md">
                                    Live Demo
                                </MagneticButton>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="pt-8 flex items-center gap-8 text-sm text-gray-500 font-mono"
                        >
                            <div>// 99.8% ACCURACY</div>
                            <div>// <span className="text-blue-500">50MS</span> LATENCY</div>
                        </motion.div>
                    </div>

                    <div className="relative">
                        <Hero3DCard />
                    </div>
                </div>
            </section>

            {/* Sticky Scroll Section / How It Works */}
            <section className="relative z-10 py-32 px-6 bg-black/50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-24">
                        <RevealText>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Autonomous Verification</h2>
                        </RevealText>
                        <p className="text-gray-400 text-lg max-w-2xl">
                            Our system breaks down every article into atomic claims and cross-references them against a global knowledge graph.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Upload className="w-8 h-8 text-blue-400" />,
                                title: "1. Ingestion",
                                desc: "High-speed parsing of text, images, and metadata from any URL or file source."
                            },
                            {
                                icon: <Brain className="w-8 h-8 text-purple-400" />,
                                title: "2. Cognitive Analysis",
                                desc: "Models detect semantic inconsistencies, emotional manipulation, and bot patterns."
                            },
                            {
                                icon: <FileText className="w-8 h-8 text-cyan-400" />,
                                title: "3. Truth Synthesis",
                                desc: "Generates a comprehensive report with citational evidence and risk scoring."
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="p-8 rounded-3xl bg-black border border-white/10 group hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}     </div >
                </div >
            </section >

            {/* Bento Grid Features */}
            < section className="relative z-10 py-32 px-6" >
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6 auto-rows-[300px]">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="md:col-span-2 row-span-1 md:row-span-2 rounded-3xl p-10 bg-gradient-to-br from-gray-900 to-black border border-white/10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                                <Brain className="w-80 h-80 text-blue-500" />
                            </div>
                            <div className="relative z-10 h-full flex flex-col justify-end">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 border border-blue-500/20">
                                    <Brain className="w-7 h-7 text-blue-400" />
                                </div>
                                <h3 className="text-3xl font-bold mb-3">Deep Learning Core</h3>
                                <p className="text-gray-400 max-w-md text-lg">
                                    Our proprietary transformer models trace narrative origins and detect synthetic text patterns invisible to the human eye.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="rounded-3xl p-8 bg-black border border-white/10 relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Cpu className="w-10 h-10 text-purple-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Real-time Processing</h3>
                            <p className="text-gray-400 text-sm">Analysis completes in under 100ms per request.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="rounded-3xl p-8 bg-black border border-white/10 relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Globe className="w-10 h-10 text-cyan-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Global Source Index</h3>
                            <p className="text-gray-400 text-sm">Cross-referencing against 50M+ verified domains.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="md:col-span-3 lg:col-span-1 rounded-3xl p-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 relative"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                                <span className="font-mono text-sm text-gray-400">LIVE THREAT FEED</span>
                            </div>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-gray-400 border-b border-white/5 pb-2">
                                        <ShieldCheck className="w-4 h-4 text-gray-600" />
                                        <span className="truncate">Suspicious activity detected in region US-EAST-{i}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* Animated CTA Strip */}
            < section className="py-24 border-y border-white/5 bg-white/[0.02] relative overflow-hidden" >
                <div className="absolute inset-0 bg-noise opacity-10" />
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Ready to verify the truth?</h2>
                        <p className="text-gray-400 text-lg">Join 10,000+ researchers keeping the internet safe.</p>
                    </div>

                    <Link to="/register">
                        <div className="group relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-transform duration-300">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-900">
                                Get Started Now
                                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </Link>
                </div>
            </section >

            <Footer />
        </div >
    );
};

export default LandingPage;
