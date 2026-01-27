import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    UploadCloud,
    History,
    BrainCircuit,
    LogOut,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const Sidebar = ({ collapsed, setCollapsed }) => {
    const navigate = useNavigate();
    const { logout } = useAuth(); // Connect to auth context

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: UploadCloud, label: 'Upload News', path: '/dashboard/upload' },
        { icon: History, label: 'History', path: '/dashboard/history' },
        { icon: BrainCircuit, label: 'About Model', path: '/dashboard/about' },
    ];

    return (
        <motion.div
            initial={false}
            animate={{ width: collapsed ? '80px' : '280px' }}
            className="h-screen fixed left-0 top-0 z-40 bg-white/80 dark:bg-[#050508]/80 backdrop-blur-xl border-r border-gray-200 dark:border-white/5 flex flex-col transition-all duration-300 shadow-2xl"
        >
            {/* Logo Area */}
            <div className={`h-24 flex items-center ${collapsed ? 'justify-center' : 'px-8'} border-b border-gray-200 dark:border-white/5`}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20 dark:shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                        <BrainCircuit className="text-white w-6 h-6" />
                    </div>
                    {!collapsed && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl font-bold font-sans text-foreground tracking-wide"
                        >
                            Veritas<span className="text-indigo-600 dark:text-indigo-500">AI</span>
                        </motion.span>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 py-8 flex flex-col gap-2 px-4 overflow-y-auto w-full">
                <p className={`text-xs font-bold text-gray-500 dark:text-gray-500 mb-4 uppercase tracking-wider ${collapsed ? 'text-center' : 'px-4'}`}>
                    {collapsed ? '●' : 'Main Menu'}
                </p>

                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/dashboard'}
                        className={({ isActive }) => `
              flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden whitespace-nowrap
              ${isActive
                                ? 'bg-indigo-50 dark:bg-indigo-600/10 text-indigo-600 dark:text-white shadow-sm dark:shadow-[0_0_20px_rgba(99,102,241,0.15)] border border-indigo-100 dark:border-indigo-500/20'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-foreground border border-transparent hover:border-gray-200 dark:hover:border-white/5'
                            }
              ${collapsed ? 'justify-center' : ''}
            `}
                    >
                        <item.icon className={`w-5 h-5 shrink-0 transition-colors ${collapsed ? '' : ''}`} />
                        {!collapsed && <span className="font-medium text-sm">{item.label}</span>}

                        {/* Active Glow Bar */}
                        {({ isActive }) => isActive && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-600 dark:bg-indigo-500 rounded-r-full" />
                        )}
                    </NavLink>
                ))}
            </div>

            {/* Footer / Logout */}
            <div className="p-4 border-t border-gray-200 dark:border-white/5">
                <button
                    onClick={handleLogout}
                    className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600 dark:text-red-400 dark:hover:bg-red-500/10 dark:hover:text-red-300 transition-colors ${collapsed ? 'justify-center' : ''}`}
                >
                    <LogOut className="w-5 h-5 shrink-0" />
                    {!collapsed && <span className="font-medium text-sm">Logout</span>}
                </button>
            </div>

            {/* Collapse Toggle */}
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="absolute -right-3 top-28 w-6 h-6 bg-white dark:bg-[#0A0A0F] border border-gray-200 dark:border-white/10 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-foreground hover:scale-110 transition-all z-50 shadow-md"
            >
                {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
            </button>
        </motion.div>
    );
};

export default Sidebar;
