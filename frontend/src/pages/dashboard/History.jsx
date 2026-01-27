import React, { useState } from 'react';
import { Search, Filter, Eye, Trash2 } from 'lucide-react';

const historyData = [
    { id: 1, img: 'news1.jpg', date: '2023-10-24 14:30', prediction: 'Fake', confidence: 98.2, title: 'Aliens land in NYC...' },
    { id: 2, img: 'news2.jpg', date: '2023-10-23 09:15', prediction: 'Real', confidence: 92.5, title: 'Economy grows by 2%...' },
    { id: 3, img: 'news3.jpg', date: '2023-10-22 18:45', prediction: 'Real', confidence: 88.7, title: 'New Tech Released...' },
    { id: 4, img: 'news4.jpg', date: '2023-10-21 11:20', prediction: 'Fake', confidence: 95.1, title: 'Free money for everyone...' },
    { id: 5, img: 'news5.jpg', date: '2023-10-20 16:10', prediction: 'Fake', confidence: 89.3, title: 'Cure for all diseases...' },
];

const History = () => {
    return (
        <div className="space-y-6 text-foreground">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Analysis History</h1>
                    <p className="text-gray-500 dark:text-gray-400">View and manage your past verifications.</p>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-gray-100 dark:bg-surface border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/5 transition-colors">
                        <Filter className="w-5 h-5 text-gray-400" />
                    </button>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-surface border border-gray-200 dark:border-white/10 outline-none focus:border-blue-500 transition-colors w-64 text-sm text-foreground"
                        />
                    </div>
                </div>
            </div>

            <div className="glass-card overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/5">
                            <th className="p-4 font-medium text-gray-500 dark:text-gray-400 text-sm">Date</th>
                            <th className="p-4 font-medium text-gray-500 dark:text-gray-400 text-sm">Title / Content</th>
                            <th className="p-4 font-medium text-gray-500 dark:text-gray-400 text-sm">Prediction</th>
                            <th className="p-4 font-medium text-gray-500 dark:text-gray-400 text-sm">Confidence</th>
                            <th className="p-4 font-medium text-gray-500 dark:text-gray-400 text-sm text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyData.map((item) => (
                            <tr key={item.id} className="border-b border-gray-200 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                                <td className="p-4 text-sm text-gray-500 dark:text-gray-400">{item.date}</td>
                                <td className="p-4 text-sm font-medium text-foreground">{item.title}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${item.prediction === 'Fake' ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'
                                        }`}>
                                        {item.prediction}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 h-1.5 bg-gray-200 dark:bg-surface rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500" style={{ width: `${item.confidence}%` }} />
                                        </div>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">{item.confidence}%</span>
                                    </div>
                                </td>
                                <td className="p-4 text-right">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-1.5 rounded hover:bg-blue-500/20 text-blue-400">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="p-1.5 rounded hover:bg-red-500/20 text-red-400">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;
