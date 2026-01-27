import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "How it Works", href: "#how-it-works" },
        { name: "Features", href: "#features" },
        { name: "Methodology", href: "#methodology" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
                    ? 'bg-[#050505]/80 backdrop-blur-xl border-white/10 py-2'
                    : 'bg-transparent border-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo Area */}
                    <Link to="/" className="flex items-center gap-2 group relative z-50">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                            <BrainCircuit className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">
                            Veritas<span className="text-blue-500">AI</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center bg-white/5 backdrop-blur-md rounded-full border border-white/5 px-6 py-2">
                        <div className="flex items-center gap-8 mr-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300 transform -translate-x-1/2 group-hover:translate-x-0" />
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-3 pl-8 border-l border-white/10">
                            <Link to="/login" className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
                                Login
                            </Link>
                            <Link to="/register">
                                <MagneticButton className="btn-primary py-2 px-5 text-sm rounded-full flex items-center gap-2">
                                    Get Started
                                    <ArrowRight className="w-3 h-3" />
                                </MagneticButton>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden z-50">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-3xl font-bold text-gray-300 hover:text-white"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col gap-4 mt-8 w-64"
                            >
                                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-4 border border-white/10 rounded-xl text-white hover:bg-white/5 transition-colors">
                                    Login
                                </Link>
                                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                                    <button className="w-full btn-primary py-4 rounded-xl">Get Started</button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
