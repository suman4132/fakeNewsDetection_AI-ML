import React from 'react';
import { BrainCircuit, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <BrainCircuit className="text-blue-500 w-8 h-8" />
                            <span className="text-2xl font-bold text-white">Veritas<span className="text-blue-500">AI</span></span>
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            Advanced machine learning system for real-time fake news detection and misinformation analysis. Built for trust and transparency in the digital age.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Features</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">How it Works</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">API Access</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Research</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Methodology</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Datasets</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Accuracy Metrics</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Publications</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2026 VeritasAI. Research Project.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
