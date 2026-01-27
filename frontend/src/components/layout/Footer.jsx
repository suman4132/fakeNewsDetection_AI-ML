import React from 'react';
import { BrainCircuit, Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative bg-[#050505] pt-24 pb-12 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    <div className="md:col-span-5 space-y-8">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <BrainCircuit className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">
                                Veritas<span className="text-blue-500">AI</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-lg max-w-sm">
                            The world's most advanced autonomous misinformation detection system. Built for the era of deepfakes and synthetic media.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Github, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2 md:col-start-7">
                        <h4 className="text-white font-bold mb-6">Platform</h4>
                        <ul className="space-y-4">
                            {['Features', 'Live Analysis', 'API Access', 'Enterprise'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1 group">
                                        {item}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-white font-bold mb-6">Research</h4>
                        <ul className="space-y-4">
                            {['Methodology', 'White Papers', 'Dataset v2.0', 'Accuracy metrics'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1 group">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1 group">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">© 2026 VeritasAI Research Group. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-gray-500 text-sm font-mono">ALL SYSTEMS OPERATIONAL</span>
                    </div>
                </div>

                {/* Big Background Text */}
                <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[15rem] font-bold text-white/[0.02] pointer-events-none whitespace-nowrap select-none">
                    VERITAS AI
                </h1>
            </div>
        </footer>
    );
};

export default Footer;
