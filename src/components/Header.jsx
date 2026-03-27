import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, LogOut, Clock, Heart } from 'lucide-react';

export default function Header() {
  const { member, logout, setIsConfirmingLogout } = useAuth();
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    }).toUpperCase();
  };

  const navItems = [
    { to: '/dashboard', label: 'COMMAND' },
    { to: '/schedule', label: 'STRATEGY' },
    { to: '/team', label: 'PERSONNEL' },
    { to: '/today', label: 'MISSION' },
  ];

  return (
    <header className="sticky top-0 z-[100] px-4 py-4 lg:py-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl border border-white/10 px-6 py-3 lg:py-4 flex items-center justify-between relative overflow-hidden">
          {/* Logo Section */}
          <Link to="/dashboard" className="flex items-center gap-4 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-black/20 border border-white/10 p-1.5 transition-all group-hover:border-rose-500/30">
               <img src="/hura_logo.png" alt="Hura Logo" className="w-full h-full object-contain opacity-60 group-hover:opacity-100 mix-blend-screen transition-opacity" 
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
               <div className="hidden w-full h-full items-center justify-center bg-rose-500/20 rounded-lg shadow-[0_0_15px_rgba(225,29,72,0.2)] border border-rose-500/20">
                  <Heart size={20} className="text-rose-500 fill-current" />
               </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs lg:text-sm font-black font-outfit tracking-tighter text-white uppercase leading-none">
                Hura <br className="hidden lg:block"/> Group
              </span>
              <span className="text-[8px] font-black ks-gold-text tracking-[0.2em] uppercase mt-0.5 opacity-60">
                Command_v2
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-black/20 p-1 rounded-xl border border-white/5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${
                    isActive 
                      ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20' 
                      : 'text-white/30 hover:text-white/60'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* HUD Info & User */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex flex-col items-end border-r border-white/5 pr-6">
               <div className="flex items-center gap-2 text-[10px] font-black text-white/40 tracking-widest">
                  <Clock size={12} className="ks-gold-text" />
                  {formatDate(currentTime)}
               </div>
               <span className="text-[9px] font-bold text-white/20 mt-1 uppercase tracking-tighter">
                  {currentTime.toLocaleTimeString('en-US', { hour12: false })} SYS_CLOCK
               </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex flex-col items-end">
                 <span className="text-[10px] font-black text-white font-outfit uppercase tracking-tight">{member.displayName}</span>
                 <span className="text-[8px] font-black text-emerald-500/50 uppercase tracking-widest flex items-center gap-1.5 transition-all">
                    <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" /> OPERATIONAL
                 </span>
              </div>
              
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative group cursor-pointer overflow-hidden">
                 <span className="text-lg group-hover:scale-110 transition-transform">{member.avatarEmoji}</span>
                 <button 
                    onClick={() => setIsConfirmingLogout(true)} 
                    className="absolute inset-0 bg-red-500/90 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity"
                 >
                    <LogOut size={16} />
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
