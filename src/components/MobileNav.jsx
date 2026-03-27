import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, Target, ShieldCheck } from 'lucide-react';

export default function MobileNav() {
  const navItems = [
    { to: '/dashboard', label: 'CMD', icon: LayoutDashboard },
    { to: '/schedule', label: 'STRAT', icon: Calendar },
    { to: '/team', label: 'PERS', icon: Users },
    { to: '/today', label: 'MSN', icon: Target },
  ];

  return (
    <nav className="md:hidden fixed bottom-6 left-6 right-6 z-[100]">
      <div className="glass rounded-[2rem] border border-white/10 px-4 py-3 flex items-center justify-around shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
        {/* HUD scanline locally for mobile nav */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-20 pointer-events-none" />
        
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1.5 p-3 rounded-2xl transition-all relative ${
                isActive 
                  ? 'text-white translate-y-[-8px]' 
                  : 'text-white/30 hover:text-white/60'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className={`p-2 rounded-xl transition-all ${isActive ? 'bg-[var(--color-accent)]/20 shadow-[0_0_20px_var(--color-accent-glow)] border border-[var(--color-accent)]/30 scale-110' : ''}`}>
                  <item.icon size={20} className={isActive ? 'ks-gold-text' : ''} />
                </div>
                {isActive && (
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] ks-gold-text animate-fadeInUp">
                    {item.label}
                  </span>
                )}
                {isActive && (
                   <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
