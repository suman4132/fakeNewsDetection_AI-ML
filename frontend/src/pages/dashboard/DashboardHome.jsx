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

const StatCard = ({ title, value, sub, icon: Icon, color }) => (
    <div className="glass-card p-6">
        <div className="flex items-start justify-between mb-4">
            <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{title}</p>
                <h3 className="text-3xl font-bold text-foreground">{value}</h3>
            </div>
            <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-500`}>
                <Icon className="w-6 h-6" />
            </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
            <span className="text-green-500 font-medium flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> {sub}
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
        <div className="space-y-8 text-foreground">
            <div>
                <h1 className="text-3xl font-bold mb-2">Overview</h1>
                <p className="text-gray-500 dark:text-gray-400">Welcome back, {user?.name.split(' ')[0] || 'User'}. Here's what's happening with your model today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Analysed" value="1,284" sub="+12.5%" icon={Activity} color="blue" />
                <StatCard title="Fake Detected" value="432" sub="+8.2%" icon={AlertTriangle} color="red" />
                <StatCard title="Real Verified" value="852" sub="+15.3%" icon={ShieldCheck} color="green" />
                <StatCard title="Avg. Confidence" value="94.2%" sub="+2.1%" icon={Brain} color="purple" />
            </div>

            {/* Charts Section */}
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 glass-card p-6">
                    <h3 className="text-lg font-bold mb-6 text-foreground">Detection Trends</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorReal" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorFake" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke={chartGridStroke} vertical={false} />
                                <XAxis dataKey="name" stroke={chartTextStroke} tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                                <YAxis stroke={chartTextStroke} tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: tooltipBg, border: `1px solid ${chartGridStroke}`, borderRadius: '8px', color: tooltipText }}
                                    itemStyle={{ color: tooltipText }}
                                    labelStyle={{ color: tooltipText }}
                                />
                                <Area type="monotone" dataKey="real" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorReal)" />
                                <Area type="monotone" dataKey="fake" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorFake)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="glass-card p-6">
                    <h3 className="text-lg font-bold mb-6 text-foreground">Recent Reports</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-white/5">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${i % 2 === 0 ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>
                                    {i % 2 === 0 ? <AlertTriangle className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-sm truncate text-foreground">Breaking: Market Crash Predicted...</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">2 mins ago</p>
                                </div>
                                <span className={`text-xs font-bold px-2 py-1 rounded ${i % 2 === 0 ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>
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
