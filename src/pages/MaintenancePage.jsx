import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Loader2 } from 'lucide-react';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden font-outfit select-none">
      {/* HUD Background Layers */}
      <div className="hud-vignette opacity-60" />
      <div className="hud-noise opacity-30" />
      <div className="hud-scanline-beam" />
      
      {/* Background HUD Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Rotating Data Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-[500px] h-[500px] border-t-2 border-b-2 border-rose-500/10 rounded-full border-dashed"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-[420px] h-[420px] border-l-2 border-r-2 border-rose-500/5 rounded-full"
        />
        <motion.div 
          animate={{ rotate: 180 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-[300px] h-[300px] border-t-2 border-rose-500/20 rounded-full border-dotted"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Central Core */}
        <div className="relative mb-12 group">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-rose-500/30 blur-3xl rounded-full"
          />
          
          <div className="ks-card !p-8 border-rose-500/40 glow-border bg-black/60 backdrop-blur-2xl rounded-full relative z-10 flex items-center justify-center w-32 h-32">
            <Cpu size={40} className="text-rose-500 animate-pulse" />
            
            {/* Spinning Loader Ring */}
            <div className="absolute inset-0 border-b-2 border-rose-500 rounded-full animate-spin duration-1000" />
          </div>
          
          {/* Outer Orbitals */}
          <div className="absolute -inset-4 border border-rose-500/10 rounded-full animate-pulse" />
        </div>

        {/* Minimalist Branded Text */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-rose-500/20 bg-rose-500/5 backdrop-blur-md">
            <Loader2 size={12} className="text-rose-500 animate-spin" />
            <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.6em]">HURA_GROUP</span>
          </div>

          <div className="space-y-1">
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              PLEASE <span className="text-rose-500">WAIT</span>
            </h1>
            <p className="text-[11px] font-black text-white/30 uppercase tracking-[.8em] pl-[.8em]">
              OPENING_SOON
            </p>
          </div>
        </div>

        {/* Data Stream Decoration */}
        <div className="mt-20 flex gap-12 opacity-20 group">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-rose-500 to-transparent" />
              <div className="text-[8px] font-black text-rose-400 uppercase vertical-text tracking-[0.5em]">0x7F_MOD_{i}</div>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Corner Data Accents */}
      <div className="fixed top-12 left-12 opacity-10 hidden lg:block">
        <p className="text-[9px] font-black text-white uppercase tracking-widest line-clamp-1">NODE_IP: 192.168.0.73</p>
        <p className="text-[9px] font-black text-white uppercase tracking-widest">STATUS: OPTIMIZING_CHUNKS</p>
      </div>
      
      <div className="fixed bottom-12 right-12 opacity-10 hidden lg:block">
        <p className="text-[9px] font-black text-white uppercase tracking-widest text-right">SECTOR: ALPHA_PRIME</p>
        <p className="text-[9px] font-black text-white uppercase tracking-widest text-right">ENCRYPT: HYPER-AES</p>
      </div>
    </div>
  );
}
