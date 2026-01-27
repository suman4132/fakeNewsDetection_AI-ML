import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import ThemeToggle from './ThemeToggle';
import { Bell, Search, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const DashboardLayout = () => {
    const { user, loading } = useAuth();
    const [collapsed, setCollapsed] = useState(false);

    if (loading) return null;
    if (!user) return <Navigate to="/login" />;

    return (
        <div className="min-h-screen bg-background text-foreground flex transition-colors duration-300">
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

            <div
                className={`flex-1 flex flex-col transition-all duration-300`}
                style={{ marginLeft: collapsed ? '80px' : '280px' }}
            >
                {/* Top Header */}
                <header className="h-20 bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 sticky top-0 z-30 px-8 flex items-center justify-between transition-colors duration-300">
                    <div className="flex items-center gap-4 bg-gray-100 dark:bg-surface/50 px-4 py-2 rounded-lg border border-gray-200 dark:border-white/5 w-96 transition-colors duration-300">
                        <Search className="w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search analysis history..."
                            className="bg-transparent border-none outline-none text-sm w-full text-foreground placeholder-gray-500"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <ThemeToggle />

                        <button className="relative p-2 text-gray-400 hover:text-foreground transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        </button>

                        <div className="flex items-center gap-3 pl-6 border-l border-gray-200 dark:border-white/10">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-bold text-foreground">{user.name}</p>
                                <p className="text-xs text-gray-400 capitalize">{user.role}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[2px]">
                                <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
                                    <User className="w-5 h-5 text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
