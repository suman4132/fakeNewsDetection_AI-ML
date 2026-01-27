import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ShieldCheck, AlertTriangle, Activity, TrendingUp, Brain } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const data = [
    { name: 'Mon', real: 40, fake: 24 },
    { name: 'Tue', real: 30, fake: 13 },
    { name: 'Wed', real: 20, fake: 58 },
    { name: 'Thu', real: 27, fake: 39 },
    { name: 'Fri', real: 18, fake: 48 },
    { name: 'Sat', real: 23, fake: 38 },
    { name: 'Sun', real: 34, fake: 43 },
];

const StatCard = ({ title, value, sub, icon: Icon, color, trend }) => (
    <div className="glass-card p-6 relative overflow-hidden group">
        <div className={`absolute -right-6 -top-6 p-8 rounded-full bg-${color}-500/10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="relative z-10 flex items-start justify-between mb-4">
            <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1 tracking-wide">{title}</p>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight transition-colors">{value}</h3>
            </div>
            <div className={`p-3 rounded-xl bg-${color}-50 dark:bg-gradient-to-br dark:from-${color}-500/20 dark:to-${color}-500/5 text-${color}-600 dark:text-${color}-400 border border-${color}-100 dark:border-${color}-500/20 transition-colors`}>
                <Icon className="w-6 h-6" />
            </div>
        </div>

        <div className="relative z-10 flex items-center gap-2 text-sm">
            <span className={`${trend >= 0 ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20' : 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 border-red-100 dark:border-red-500/20'} font-medium flex items-center gap-1 px-2 py-0.5 rounded-lg border`}>
                <TrendingUp className={`w-3 h-3 ${trend < 0 && 'rotate-180'}`} /> {Math.abs(trend)}%
            </span>
            <span className="text-gray-500 dark:text-gray-400">vs last week</span>
        </div>
    </div>
);

const DashboardHome = () => {
    const { user } = useAuth();
    const { theme } = useTheme();

    const chartGridStroke = theme === 'dark' ? '#334155' : '#e2e8f0';
    const chartTextStroke = theme === 'dark' ? '#94a3b8' : '#64748b';
    const tooltipBg = theme === 'dark' ? '#1e293b' : '#ffffff';
    const tooltipText = theme === 'dark' ? '#fff' : '#0f172a';

    return (
        <div className="space-y-8 text-foreground transition-colors duration-500">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                        Overview
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Welcome back, <span className="text-indigo-600 dark:text-indigo-400 font-medium">{user?.name.split(' ')[0] || 'User'}</span>.
                        System status: <span className="text-emerald-500 dark:text-emerald-400 font-medium">Operational</span>
                    </p>
                </div>
                <div className="flex gap-2">
                    <div className="px-4 py-2 bg-indigo-50 border border-indigo-100 dark:bg-indigo-500/10 dark:border-indigo-500/20 rounded-lg text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                        Last Updated: Now
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Analyzed" value="1,284" trend={12.5} icon={Activity} color="indigo" />
                <StatCard title="Fake Detected" value="432" trend={-8.2} icon={AlertTriangle} color="red" />
                <StatCard title="Real Verified" value="852" trend={15.3} icon={ShieldCheck} color="emerald" />
                <StatCard title="Accuracy Score" value="94.2%" trend={2.1} icon={Brain} color="purple" />
            </div>

            {/* Charts Section */}
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 glass-card p-6 border border-gray-200 dark:border-white/5">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-lg font-bold text-foreground">Detection Trends</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">7-day analysis performance</p>
                        </div>
                        <select className="bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg text-sm px-3 py-1 text-gray-700 dark:text-gray-400 outline-none focus:border-indigo-500 transition-colors">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                        </select>
                    </div>

                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorReal" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorFake" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke={chartGridStroke} opacity={0.4} vertical={false} />
                                <XAxis dataKey="name" stroke={chartTextStroke} tick={{ fontSize: 12 }} tickLine={false} axisLine={false} dy={10} />
                                <YAxis stroke={chartTextStroke} tick={{ fontSize: 12 }} tickLine={false} axisLine={false} dx={-10} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: tooltipBg,
                                        border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                                        borderRadius: '12px',
                                        color: tooltipText,
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                                    }}
                                    cursor={{ stroke: chartGridStroke, strokeWidth: 2 }}
                                    itemStyle={{ color: tooltipText }}
                                    labelStyle={{ color: tooltipText }}
                                />
                                <Area type="monotone" dataKey="real" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorReal)" />
                                <Area type="monotone" dataKey="fake" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorFake)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="glass-card p-6 border border-gray-200 dark:border-white/5">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-foreground">Live Feed</h3>
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    </div>

                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="group flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-white/5">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${i % 2 === 0 ? 'bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400' : 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'}`}>
                                    {i % 2 === 0 ? <AlertTriangle className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-sm truncate text-gray-700 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">Global Market Crash...</h4>
                                    <p className="text-xs text-gray-500">2 mins ago • Source: Twitter</p>
                                </div>
                                <span className={`text-[10px] font-bold px-2 py-1 rounded-md border ${i % 2 === 0 ? 'bg-red-50 border-red-200 text-red-600 dark:bg-red-500/5 dark:border-red-500/20 dark:text-red-400' : 'bg-emerald-50 border-emerald-200 text-emerald-600 dark:bg-emerald-500/5 dark:border-emerald-500/20 dark:text-emerald-400'}`}>
                                    {i % 2 === 0 ? 'FAKE' : 'REAL'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
