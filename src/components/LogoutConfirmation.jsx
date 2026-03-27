import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Heart, LogOut } from 'lucide-react';

export default function LogoutConfirmation({ onConfirm, onCancel }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[8000] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 blur-[150px] rounded-full" />
      </div>

      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="max-w-md w-full bg-[#0d0d12] border border-white/10 rounded-[2.5rem] p-12 text-center relative z-10 shadow-2xl"
      >
        <div className="w-20 h-20 bg-rose-500/10 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-rose-500/20">
           <ShieldAlert size={36} className="text-rose-500" />
        </div>

        <h3 className="text-2xl font-black text-white tracking-widest uppercase mb-6">Secure Exit</h3>
        <p className="text-white/40 text-[11px] font-black tracking-[0.5em] uppercase leading-relaxed mb-12">
           Are you sure you want to terminate your session in the Command Centre?
        </p>

        <div className="flex flex-col gap-4">
           <button
             onClick={onConfirm}
             className="w-full bg-rose-600 hover:bg-rose-500 text-white font-black py-6 rounded-2xl tracking-[0.5em] uppercase transition-all flex items-center justify-center gap-4 hover:shadow-[0_20px_40px_rgba(225,29,72,0.3)] group"
           >
              <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
              Abandon Session
           </button>
           <button
             onClick={onCancel}
             className="w-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white font-black py-6 rounded-2xl tracking-[0.5em] uppercase transition-all"
           >
              Remain Secure
           </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 opacity-10">
           <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
           <p className="text-[8px] font-black uppercase tracking-[0.4em]">Hura_Protocol_v4.2</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
