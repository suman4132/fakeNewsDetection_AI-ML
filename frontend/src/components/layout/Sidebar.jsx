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
            className="h-screen fixed left-0 top-0 z-40 bg-white dark:bg-surface border-r border-gray-200 dark:border-white/10 flex flex-col transition-all duration-300 shadow-xl"
        >
            {/* Logo Area */}
            <div className={`h-20 flex items-center ${collapsed ? 'justify-center' : 'px-8'} border-b border-gray-200 dark:border-white/5`}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                        <BrainCircuit className="text-white w-6 h-6" />
                    </div>
                    {!collapsed && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xl font-bold font-sans text-foreground tracking-wide"
                        >
                            Veritas<span className="text-blue-500">AI</span>
                        </motion.span>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 py-8 flex flex-col gap-2 px-4 overflow-y-auto w-full">
                <p className={`text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider ${collapsed ? 'text-center' : 'px-4'}`}>
                    {collapsed ? 'Menu' : 'Main Menu'}
                </p>

                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/dashboard'}
                        className={({ isActive }) => `
              flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden whitespace-nowrap
              ${isActive
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-foreground'
                            }
              ${collapsed ? 'justify-center' : ''}
            `}
                    >
                        <item.icon className="w-5 h-5 shrink-0" />
                        {!collapsed && <span className="font-medium">{item.label}</span>}

                        {/* Active Indicator Strip */}
                        {({ isActive }) => isActive && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
                        )}
                    </NavLink>
                ))}
            </div>

            {/* Footer / Logout */}
            <div className="p-4 border-t border-gray-200 dark:border-white/5">
                <button
                    onClick={handleLogout}
                    className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-colors ${collapsed ? 'justify-center' : ''}`}
                >
                    <LogOut className="w-5 h-5 shrink-0" />
                    {!collapsed && <span className="font-medium">Logout</span>}
                </button>
            </div>

            {/* Collapse Toggle */}
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="absolute -right-3 top-24 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg border border-white dark:border-surface hover:scale-110 transition-transform z-50"
            >
                {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
            </button>
        </motion.div>
    );
};

export default Sidebar;
