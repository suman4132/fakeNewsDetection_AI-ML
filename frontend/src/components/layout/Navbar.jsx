import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
                            <BrainCircuit className="text-white w-6 h-6" />
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                            Veritas<span className="text-blue-500">AI</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">How it Works</a>
                        <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Features</a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About</a>

                        <div className="flex items-center gap-4">
                            <Link to="/login" className="text-white font-medium hover:text-blue-400 transition-colors">
                                Login
                            </Link>
                            <Link to="/register" className="btn-primary py-2 px-5 text-sm rounded-lg">
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface border-b border-white/10"
                    >
                        <div className="px-4 py-6 space-y-4">
                            <a href="#how-it-works" className="block text-gray-300 hover:text-white">How it Works</a>
                            <a href="#features" className="block text-gray-300 hover:text-white">Features</a>
                            <a href="#about" className="block text-gray-300 hover:text-white">About</a>
                            <hr className="border-white/10" />
                            <Link to="/login" className="block text-white">Login</Link>
                            <Link to="/register" className="block btn-primary text-center">Get Started</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
