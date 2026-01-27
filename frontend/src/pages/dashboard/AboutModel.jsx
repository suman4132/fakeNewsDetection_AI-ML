import React from 'react';
import { Network, Database, Layers, Cpu } from 'lucide-react';

const AboutModel = () => {
    return (
        <div className="max-w-5xl mx-auto space-y-12 text-foreground">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Model Architecture</h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    A technical overview of the machine learning pipeline powering VeritasAI, designed for high-accuracy misinformation detection.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card p-8">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Network className="text-blue-500" /> Core Architecture
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                        The system utilizes a Hybrid Neural Network architecture combining <strong>CNN</strong> (Convolutional Neural Networks) for visual analysis and <strong>Bi-LSTM</strong> (Bidirectional Long Short-Term Memory) for textual sequence processing.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> BERT Embeddings for semantic understanding
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> ResNet-50 for image feature extraction
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Multi-head Attention Mechanism
                        </li>
                    </ul>
                </div>

                <div className="glass-card p-8 bg-blue-50/50 dark:bg-blue-600/5 border-blue-100 dark:border-blue-500/10">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Database className="text-purple-500" /> Training Data
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                        The model was trained on the <strong>FakeNewsNet</strong> and <strong>LIAR</strong> datasets, comprised of over 50,000 labeled news articles and social media posts.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 dark:bg-surface p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-foreground mb-1">50k+</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest">Samples</div>
                        </div>
                        <div className="bg-gray-100 dark:bg-surface p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-foreground mb-1">96.3%</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest">Validation Acc.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="glass-card p-8">
                <h3 className="text-xl font-bold mb-8">Processing Pipeline</h3>
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 hidden md:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                        {[
                            { icon: Layers, title: "Input Preprocessing", desc: "Tokenization & Normalization" },
                            { icon: Cpu, title: "Feature Extraction", desc: "Vectorization of text/image" },
                            { icon: Network, title: "Inference", desc: "Model Prediction" },
                            { icon: Database, title: "Classification", desc: "Real/Fake Output" }
                        ].map((step, i) => (
                            <div key={i} className="bg-gray-100 dark:bg-surface border border-gray-200 dark:border-white/10 p-6 rounded-xl text-center hover:-translate-y-1 transition-transform duration-300 shadow-xl">
                                <div className="w-12 h-12 mx-auto bg-gray-200 dark:bg-background rounded-lg flex items-center justify-center mb-4 text-blue-500">
                                    <step.icon />
                                </div>
                                <h4 className="font-bold mb-2">{step.title}</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutModel;
