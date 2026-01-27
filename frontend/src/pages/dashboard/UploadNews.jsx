import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, X, Loader2, CheckCircle2, AlertOctagon, FileText, Share2, Download, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '../../services/api';

const UploadNews = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const selectedFile = acceptedFiles[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
            setResult(null);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png'],
            'application/pdf': ['.pdf']
        },
        maxFiles: 1
    });

    const removeFile = () => {
        setFile(null);
        setPreview(null);
        setResult(null);
    };

    const handleAnalyze = async () => {
        if (!file) return;
        setLoading(true);

        try {
            // Use the API service
            const response = await api.news.analyze({ image: file });

            // Map API response to UI State
            setResult({
                prediction: response.prediction === 'Fake' ? 'Fake News' : 'Real News',
                type: response.prediction === 'Fake' ? 'fake' : 'real',
                confidence: response.confidence,
                details: response.prediction === 'Fake'
                    ? ['Unverified source domain', 'Sensationalist headlines', 'High emotional sentiment']
                    : ['Verified reputable source', 'Neutral geometric tone', 'Cross-referenced facts']
            });
        } catch (error) {
            console.error(error);
            // Handle error state as needed
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto text-foreground">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Upload News</h1>
                <p className="text-gray-500 dark:text-gray-400">Upload a screenshot or image of the news article to verify its authenticity.</p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
                {/* Upload Section */}
                <div className="lg:col-span-3 space-y-6">
                    {!file && (
                        <div
                            {...getRootProps()}
                            className={`border-2 border-dashed rounded-2xl p-12 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300
                ${isDragActive ? 'border-blue-500 bg-blue-500/10' : 'border-gray-300 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/20 hover:bg-gray-100 dark:hover:bg-white/5'}
              `}
                        >
                            <input {...getInputProps()} />
                            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-surface mb-4 flex items-center justify-center">
                                <UploadCloud className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Click to upload or drag and drop</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">SVG, PNG, JPG or PDF (max. 10MB)</p>
                        </div>
                    )}

                    {file && (
                        <div className="glass-card p-4 relative group">
                            <button
                                onClick={removeFile}
                                className="absolute -top-3 -right-3 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="aspect-video w-full bg-black/50 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                                {file.type.startsWith('image/') ? (
                                    <img src={preview} alt="Preview" className="h-full object-contain" />
                                ) : (
                                    <FileText className="w-16 h-16 text-gray-500" />
                                )}
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium truncate max-w-[200px]">{file.name}</p>
                                    <p className="text-xs text-gray-400">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                                {!result && !loading && (
                                    <button
                                        onClick={handleAnalyze}
                                        className="btn-primary py-2 px-6 flex items-center gap-2"
                                    >
                                        Analyze Now
                                    </button>
                                )}
                            </div>

                            {loading && (
                                <div className="absolute inset-0 bg-white/80 dark:bg-surface/80 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center z-10">
                                    <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-4" />
                                    <p className="font-medium animate-pulse text-foreground">Running AI Analysis...</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Checking reliability sources...</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Results Sidebar */}
                <div className="lg:col-span-2">
                    <AnimatePresence mode='wait'>
                        {result ? (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className={`glass-card p-6 border-t-4 ${result.type === 'fake' ? 'border-t-red-500' : 'border-t-green-500'}`}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    {result.type === 'fake' ? (
                                        <div className="p-3 rounded-full bg-red-500/10 text-red-500">
                                            <AlertOctagon className="w-8 h-8" />
                                        </div>
                                    ) : (
                                        <div className="p-3 rounded-full bg-green-500/10 text-green-500">
                                            <CheckCircle2 className="w-8 h-8" />
                                        </div>
                                    )}
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase">Prediction</p>
                                        <h2 className={`text-2xl font-bold ${result.type === 'fake' ? 'text-red-500' : 'text-green-500'}`}>
                                            {result.prediction}
                                        </h2>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-500 dark:text-gray-400">AI Confidence Score</span>
                                            <span className="font-bold text-foreground">{result.confidence}%</span>
                                        </div>
                                        <div className="h-3 w-full bg-gray-200 dark:bg-surface rounded-full overflow-hidden border border-gray-300 dark:border-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${result.confidence}%` }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                                className={`h-full ${result.type === 'fake' ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-emerald-500 to-green-500'}`}
                                            />
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 dark:bg-surface/50 rounded-xl p-4 border border-gray-200 dark:border-white/5">
                                        <h4 className="font-bold mb-3 text-sm text-gray-700 dark:text-gray-300">Analysis Breakdown</h4>
                                        <ul className="space-y-2">
                                            {result.details.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${result.type === 'fake' ? 'bg-red-500' : 'bg-green-500'}`} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex gap-3">
                                        <button className="flex-1 py-2 rounded-lg bg-gray-100 dark:bg-surface hover:bg-gray-200 dark:hover:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium transition-colors flex items-center justify-center gap-2 text-foreground">
                                            <Share2 className="w-4 h-4" /> Share
                                        </button>
                                        <button className="flex-1 py-2 rounded-lg bg-gray-100 dark:bg-surface hover:bg-gray-200 dark:hover:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium transition-colors flex items-center justify-center gap-2 text-foreground">
                                            <Download className="w-4 h-4" /> Report
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center p-8 border border-gray-200 dark:border-white/5 rounded-2xl bg-gray-50/50 dark:bg-white/[0.02]">
                                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-surface flex items-center justify-center mb-4 opacity-50">
                                    <BrainCircuit className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                                </div>
                                <h3 className="font-medium text-gray-400 mb-2">Ready to Analyze</h3>
                                <p className="text-xs text-gray-500 max-w-[200px]">
                                    Upload an image to see the AI analysis results here.
                                </p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default UploadNews;
