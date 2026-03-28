import React, { useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTasks } from '../context/TaskContext';
import { Target, Clock, ShieldCheck, Activity, ChevronRight, Zap, TrendingUp, AlertCircle } from 'lucide-react';
import ThreeDCard from '../components/ThreeDCard';

function StatusBadge({ status, onChange }) {
  const configs = {
    pending: { label: 'PENDING', bg: 'var(--color-pending-bg)', color: 'var(--color-pending-text)' },
    inprogress: { label: 'ACTIVE', bg: 'var(--color-inprogress-bg)', color: 'var(--color-inprogress-text)' },
    completed: { label: 'VERIFIED', bg: 'var(--color-completed-bg)', color: 'var(--color-completed-text)' },
  };

  return (
    <select
      value={status}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 rounded-xl text-[10px] font-black tracking-[0.2em] border border-white/5 outline-none cursor-pointer uppercase transition-all bg-black/40"
      style={{ color: configs[status].color }}
    >
      <option value="pending">⏳ {configs.pending.label}</option>
      <option value="inprogress">⚡ {configs.inprogress.label}</option>
      <option value="completed">✅ {configs.completed.label}</option>
    </select>
  );
}

export default function TodayPage() {
  const { member } = useAuth();
  const { currentDayData, currentDayNumber, currentWeekNumber, WEEK_THEMES, updateTaskStatus, updateTaskNotes } = useTasks();

  const task = useMemo(() => currentDayData?.tasks[member.id], [currentDayData, member.id]);

  if (!task) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center animate-fadeInUp">
        <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/5 flex items-center justify-center mx-auto mb-8 opacity-20 group hover:opacity-100 transition-opacity">
           <Zap size={32} />
        </div>
        <h2 className="text-3xl font-black text-white font-outfit uppercase tracking-tighter mb-4">No Active Deployment</h2>
        <p className="text-xs font-medium opacity-30 uppercase tracking-[0.2em]">All sectors currently stabilized for Day {currentDayNumber}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fadeInUp">
      {/* Unique Deployment Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <div>
           <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-black px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> LIVE_DEPLOYMENT
              </span>
              <span className="text-[10px] font-black opacity-30 uppercase tracking-[0.4em]">Sector_PH-{currentDayNumber}</span>
           </div>
           <h1 className="text-5xl font-black text-white font-outfit tracking-tighter uppercase leading-none">
              Strategic <br/> Objective
           </h1>
        </div>
        
        <div className="flex gap-4">
           <div className="ks-card !p-6 !bg-black/20 border-white/5 flex flex-col items-center min-w-[140px]">
              <Clock size={16} className="ks-gold-text mb-2 opacity-50" />
              <span className="text-xl font-black text-white font-outfit">{task.timeEstimate}H</span>
              <span className="text-[8px] font-black opacity-20 uppercase tracking-widest mt-1">Allocation</span>
           </div>
           <ThreeDCard className="!p-6 !bg-black/20 border-white/5 flex flex-col items-center min-w-[140px]">
              <AlertCircle size={16} className="text-red-500 mb-2 opacity-50" />
              <span className="text-xl font-black text-white font-outfit uppercase">{task.priority}</span>
              <span className="text-[8px] font-black opacity-20 uppercase tracking-widest mt-1">Risk_Level</span>
           </ThreeDCard>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Intel Board */}
        <ThreeDCard className="lg:col-span-2 !p-12 !bg-black/40 border-white/10 glow-border">
          <div className="flex items-center justify-between mb-10">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl shadow-inner">
                   {member.avatarEmoji}
                </div>
                <div>
                   <p className="text-[10px] font-black opacity-30 uppercase tracking-widest">Operator_ID</p>
                   <p className="text-sm font-black text-white font-outfit uppercase">{member.displayName}</p>
                </div>
             </div>
             <StatusBadge status={task.status} onChange={(s) => updateTaskStatus(task.id, s)} />
          </div>

          <h2 className="text-4xl font-black text-white font-outfit mb-8 uppercase tracking-tighter leading-tight drop-shadow-2xl">
            {task.title}
          </h2>

          <div className="p-8 rounded-2xl bg-black/40 border border-white/5 mb-10">
             <div className="flex items-center gap-2 mb-4 opacity-30">
                <ShieldCheck size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Deployment Parameters</span>
             </div>
             <p className="text-sm font-medium opacity-50 leading-relaxed max-w-2xl">
                {task.description}
             </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { label: 'STATUS', val: task.status.toUpperCase(), c: 'text-emerald-500' },
               { label: 'SECTOR', val: 'SENTINEL-1', c: 'text-white/40' },
               { label: 'WEEK', val: currentWeekNumber, c: 'text-white/40' },
               { label: 'TYPE', val: task.category.toUpperCase(), c: 'ks-gold-text' },
             ].map((m, i) => (
               <div key={i} className="flex flex-col border-l border-white/5 pl-4">
                  <span className="text-[8px] font-black opacity-20 uppercase tracking-[0.2em] mb-1">{m.label}</span>
                  <span className={`text-[10px] font-black font-outfit tracking-wider ${m.c}`}>{m.val}</span>
               </div>
             ))}
          </div>
        </ThreeDCard>

        {/* Intelligence Logging */}
        <div className="space-y-8">
          <ThreeDCard className="!p-8 !bg-black/20 border-white/5">
             <div className="flex items-center gap-3 mb-6 opacity-30">
                <TrendingUp size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Intel Log</span>
             </div>
             <textarea
                value={task.notes || ''}
                onChange={(e) => updateTaskNotes(task.id, e.target.value)}
                placeholder="Initialize intelligence recording..."
                rows={10}
                className="w-full px-6 py-6 rounded-2xl bg-black/40 border border-white/5 focus:border-[var(--color-accent)]/30 text-white text-xs font-semibold outline-none transition-all placeholder:opacity-5 resize-none shadow-inner"
             />
             <div className="mt-4 flex items-center justify-between px-2">
                <span className="text-[8px] font-black opacity-10 uppercase">E2E Secure</span>
                <span className="text-[8px] font-black opacity-10 uppercase">Autosaved</span>
             </div>
          </ThreeDCard>

          <div className="ks-card !p-8 !bg-white/5 border-dashed flex flex-col items-center text-center opacity-40 group hover:opacity-100 transition-all duration-700">
             <Activity size={24} className="mb-4 ks-gold-text opacity-20 group-hover:scale-110 transition-transform duration-700" />
             <p className="text-[9px] font-black uppercase tracking-[0.3em] leading-relaxed">
                Objective Validation <br/> Required for Phase {currentDayNumber}
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
