import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Cpu, Terminal, Zap } from 'lucide-react';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden font-outfit">
      {/* Background HUD Effects */}
      <div className="hud-vignette opacity-50" />
      <div className="hud-noise opacity-20" />
      
      {/* Animated Hex Grid or similar subtle pattern could go here */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full relative z-10"
      >
        <div className="ks-card !p-12 border-rose-500/20 glow-border bg-black/40 backdrop-blur-xl rounded-[2.5rem] text-center">
          {/* Hura Group Branding */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
              <Cpu size={20} className="text-rose-500 animate-pulse" />
            </div>
            <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.5em]">HURA_GROUP_OPERATIONS</span>
          </div>

          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-rose-500/20 blur-3xl rounded-full" />
            <ShieldAlert size={64} className="text-rose-500 relative z-10 mx-auto" />
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">
            System <br/> <span className="text-rose-500">Recalibration</span>
          </h1>
          
          <p className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-12 max-w-sm mx-auto leading-relaxed">
            The KrishiSahayak Command Centre is currently undergoing a scheduled intelligence purge and core optimization.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-left">
              <Terminal size={14} className="text-rose-500/40 mb-3" />
              <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">STATUS</p>
              <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest">OFFLINE</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-left">
              <Zap size={14} className="text-rose-500/40 mb-3" />
              <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">DIRECTIVE</p>
              <p className="text-[10px] font-black text-white uppercase tracking-widest leading-tight">WAITING_FOR_UPLINK</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />
            <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">
              Authorized by Sector_Alpha
            </p>
          </div>
        </div>

        {/* Floating Accents */}
        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-rose-500/10 rounded-tr-[3rem] pointer-events-none" />
        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-rose-500/10 rounded-bl-[3rem] pointer-events-none" />
      </motion.div>
    </div>
  );
}
