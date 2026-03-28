import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Loader2, Link, Terminal, CheckCircle2, AlertCircle } from 'lucide-react';

export default function MaintenancePage() {
  const activeFixes = [
    { label: 'CORE_ENGINE', status: 'STABLE', detail: 'VITE_V6_NORMALIZED' },
    { label: 'ASSET_CHUNKS', status: 'OPTIMIZING', detail: 'SPLIT_VENDOR_ISOLATION' },
    { label: 'LOGIC_SKEW', status: 'FIXED', detail: 'HOOK_INIT_SEQUENTIAL' },
    { label: 'UI_SHIELD', status: 'ACTIVE', detail: 'HURA_GROUP_UP_DEPL' }
  ];

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
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] border-t-2 border-b-2 border-rose-500/10 rounded-full border-dashed"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute w-[450px] h-[450px] border-l-2 border-r-2 border-rose-500/5 rounded-full"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 flex flex-col items-center max-w-2xl w-full"
      >
        {/* Hura Group Stylized Logo & Identity */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="relative group cursor-crosshair">
            <div className="absolute -inset-4 bg-rose-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-900 flex items-center justify-center p-[2px] shadow-2xl shadow-rose-500/20 rotate-45 group-hover:rotate-90 transition-transform duration-700">
              <div className="w-full h-full bg-[#020617] rounded-[14px] flex items-center justify-center -rotate-45 group-hover:-rotate-90 transition-transform duration-700">
                <Link size={24} className="text-rose-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-sm font-black text-rose-500 uppercase tracking-[1em] mr-[-1em]">HURA GROUP</h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-rose-500/40 to-transparent mt-2" />
          </div>
        </div>

        {/* Central Core Status */}
        <div className="ks-card !p-12 border-rose-500/20 glow-border bg-black/60 backdrop-blur-3xl rounded-[3rem] w-full text-center relative overflow-hidden">
          {/* Subtle Scanning Line */}
          <motion.div 
            animate={{ y: [0, 400, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/[0.03] to-transparent h-1/2 w-full pointer-events-none"
          />

          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                PLEASE <span className="text-rose-500">WAIT</span>
              </h1>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-[1em] pl-[1em]">
                OPENING_SOON
              </p>
            </div>

            {/* Issue Fix Description Log */}
            <div className="space-y-3 pt-8">
              <div className="flex items-center gap-3 justify-center mb-6">
                <Terminal size={14} className="text-rose-500/60" />
                <span className="text-[9px] font-black text-rose-500/60 uppercase tracking-widest">SYSTEM_LOG_v2.04</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-lg mx-auto">
                {activeFixes.map((fix, idx) => (
                  <motion.div 
                    key={fix.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col p-4 rounded-xl bg-white/[0.02] border border-white/5 text-left group hover:border-rose-500/20 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">{fix.label}</span>
                      {fix.status === 'STABLE' || fix.status === 'FIXED' ? (
                        <CheckCircle2 size={10} className="text-rose-500" />
                      ) : (
                        <Loader2 size={10} className="text-rose-500 animate-spin" />
                      )}
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-[10px] font-black text-white group-hover:text-rose-500 transition-colors uppercase tracking-widest">{fix.status}</span>
                      <span className="text-[7px] font-medium text-white/10 uppercase tracking-tighter">{fix.detail}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Auth directive footer */}
        <div className="mt-12 flex flex-col items-center gap-4">
           <div className="flex items-center gap-6 opacity-30">
              <div className="h-[1px] w-12 bg-rose-500" />
              <AlertCircle size={16} className="text-rose-500 animate-pulse" />
              <div className="h-[1px] w-12 bg-rose-500" />
           </div>
           <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.6em]">
             Authorized Access Only // Sector_Alpha Security Bundle
           </p>
        </div>
      </motion.div>
    </div>
  );
}
