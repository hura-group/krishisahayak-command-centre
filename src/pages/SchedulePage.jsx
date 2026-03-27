import React, { useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTasks } from '../context/TaskContext';
import { ChevronLeft, ChevronRight, Crosshair, ChevronDown, ChevronUp, Clock, StickyNote, ShieldCheck, Activity, Target } from 'lucide-react';
import ThreeDCard from '../components/ThreeDCard';

function StatusSelect({ status, onChange }) {
  const configs = {
    pending: { bg: 'var(--color-pending-bg)', c: 'var(--color-pending-text)', label: 'PENDING' },
    inprogress: { bg: 'var(--color-inprogress-bg)', c: 'var(--color-inprogress-text)', label: 'ACTIVE' },
    completed: { bg: 'var(--color-completed-bg)', c: 'var(--color-completed-text)', label: 'VERIFIED' },
  };
  return (
    <select value={status} onChange={e => onChange(e.target.value)}
      className="px-3 py-1.5 rounded-lg text-[9px] font-black tracking-widest border border-white/5 outline-none cursor-pointer uppercase"
      style={{ background: configs[status].bg, color: configs[status].c }}>
      <option value="pending">⏳ {configs.pending.label}</option>
      <option value="inprogress">⚡ {configs.inprogress.label}</option>
      <option value="completed">✅ {configs.completed.label}</option>
    </select>
  );
}

export default function SchedulePage() {
  const { member } = useAuth();
  const { fullSchedule, currentDayNumber, currentWeekNumber, WEEK_THEMES, updateTaskStatus, updateTaskNotes, completeWeekTasks } = useTasks();
  const [activeWeek, setActiveWeek] = useState(currentWeekNumber);
  const [expandedDay, setExpandedDay] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const weekDays = useMemo(() => fullSchedule.filter(d => d.weekNumber === activeWeek), [fullSchedule, activeWeek]);

  const weekStats = useMemo(() => {
    let total = 0, done = 0;
    weekDays.forEach(d => {
      const t = d.tasks[member.id];
      if (t) { total++; if (t.status === 'completed') done++; }
    });
    return { total, done };
  }, [weekDays, member.id]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fadeInUp">
      {/* HUD Header */}
      <div className="flex items-center justify-between mb-12">
        <button onClick={() => setActiveWeek(w => Math.max(1, w - 1))} disabled={activeWeek <= 1}
          className="p-4 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all disabled:opacity-5">
          <ChevronLeft size={24} />
        </button>

        <div className="text-center">
           <div className="flex items-center justify-center gap-2 mb-2">
              <Activity size={12} className="ks-gold-text animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Operational Roadmap</span>
           </div>
           <h2 className="text-4xl font-black text-white font-outfit uppercase tracking-tighter">PHASE {activeWeek.toString().padStart(2, '0')}</h2>
           <p className="text-[10px] font-black ks-gold-text mt-2 uppercase tracking-[0.3em]">{WEEK_THEMES[activeWeek - 1]}</p>
        </div>

        <button onClick={() => setActiveWeek(w => Math.min(16, w + 1))} disabled={activeWeek >= 16}
          className="p-4 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all disabled:opacity-5">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Week Progress Bento */}
      <div className="grid lg:grid-cols-4 gap-6 mb-12">
        <ThreeDCard className="lg:col-span-3 !p-8 border-white/5 flex items-center gap-10">
          <div className="flex-1">
            <div className="flex justify-between text-[9px] font-black uppercase tracking-widest mb-4 opacity-40">
              <span>Mission Readiness</span>
              <span className="ks-gold-text">{Math.round((weekStats.done / (weekStats.total || 1)) * 100)}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-black/40 border border-white/5 overflow-hidden p-0.5">
              <div className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] transition-all duration-1000" style={{
                width: weekStats.total ? `${(weekStats.done / weekStats.total) * 100}%` : '0%',
              }} />
            </div>
          </div>
          <div className="text-right border-l border-white/5 pl-10">
            <p className="text-3xl font-black text-white font-outfit leading-none">{weekStats.done}/{weekStats.total}</p>
            <p className="text-[9px] font-black opacity-30 uppercase tracking-widest mt-1">Objectives secured</p>
          </div>
        </ThreeDCard>

        <button onClick={() => setShowConfirm(true)}
          className="ks-card glow-border !p-8 flex flex-col items-center justify-center gap-2 group hover:!border-[var(--color-accent)]/50 transition-all border-white/5 !bg-white/5">
          <ShieldCheck size={28} className="ks-gold-text mb-1" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] ks-gold-text">Validate</span>
        </button>
      </div>

      {/* Unique Timeline Layout */}
      <div className="space-y-4">
        {weekDays.map(day => {
          const task = day.tasks[member.id];
          const isToday = day.dayNumber === currentDayNumber;
          const isExpanded = expandedDay === day.dayNumber;

          return (
            <div key={day.dayNumber} className="relative">
              {isToday && <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-12 bg-[var(--color-accent)] rounded-full blur-[4px] opacity-60" />}
              
              <button
                onClick={() => setExpandedDay(isExpanded ? null : day.dayNumber)}
                className={`w-full group flex items-center gap-8 px-8 py-6 rounded-3xl text-left transition-all border ${isExpanded ? 'border-[var(--color-accent)]/30 bg-white/10' : 'border-white/5 bg-white/5'} hover:border-white/20`}
              >
                <div className="flex flex-col items-center min-w-[60px] border-r border-white/5 pr-8">
                  <span className="text-[10px] font-black opacity-20 tracking-widest">{day.dayName.slice(0, 3).toUpperCase()}</span>
                  <span className={`text-2xl font-black font-outfit ${isToday ? 'ks-gold-text' : 'text-white'}`}>
                    {day.dayNumber.toString().padStart(2, '0')}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-black text-white truncate font-outfit uppercase tracking-tight group-hover:ks-gold-text transition-colors">
                    {task?.title || 'Operational Gap'}
                  </h3>
                  <div className="flex items-center gap-4 mt-1 opacity-30">
                    <span className="text-[9px] font-black uppercase tracking-widest">{task?.category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span className="text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
                       <Clock size={10} /> {task?.timeEstimate} HR DEP
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-6 pl-8 border-l border-white/5">
                   <div className={`w-3 h-3 rounded-full shadow-[0_0_15px_currentColor] ${task?.status === 'completed' ? 'text-emerald-500' : task?.status === 'inprogress' ? 'text-[var(--color-accent)]' : 'text-white/10'}`} style={{ background: 'currentColor' }} />
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                   </div>
                </div>
              </button>

              {isExpanded && task && (
                <ThreeDCard className="mx-6 mt-4 !p-10 !bg-black/40 border-white/5 animate-fadeInUp shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  <div className="flex flex-col lg:flex-row justify-between gap-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] font-black px-4 py-1 bg-white/5 border border-white/10 rounded-lg ks-gold-text uppercase tracking-widest">Protocol {task.id.slice(-4).toUpperCase()}</span>
                        <span className={`text-[10px] font-black px-4 py-1 rounded-lg uppercase tracking-widest ${task.priority === 'high' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-white/5 border border-white/10 opacity-40'}`}>{task.priority} Priority</span>
                      </div>
                      <h4 className="text-3xl font-black text-white font-outfit mb-6 uppercase tracking-tighter">{task.title}</h4>
                      <p className="text-sm opacity-50 leading-relaxed font-medium max-w-2xl">{task.description}</p>
                    </div>
                    
                    <div className="lg:w-1/3 flex flex-col gap-6">
                      <div className="space-y-4">
                        <p className="text-[10px] font-black opacity-30 uppercase tracking-widest">Execution Update</p>
                        <StatusSelect status={task.status} onChange={s => updateTaskStatus(task.id, s)} />
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 opacity-30">
                          <StickyNote size={14} />
                          <span className="text-[10px] font-black uppercase tracking-widest">Intelligence Log</span>
                        </div>
                        <textarea
                          value={task.notes || ''}
                          onChange={e => updateTaskNotes(task.id, e.target.value)}
                          placeholder="Log operational findings..."
                          rows={4}
                          className="w-full px-5 py-4 rounded-2xl text-xs font-semibold bg-black/40 border border-white/5 focus:border-[var(--color-accent)]/30 text-white outline-none transition-all placeholder:opacity-10 resize-none shadow-inner"
                        />
                      </div>
                    </div>
                  </div>
                </ThreeDCard>
              )}
            </div>
          );
        })}
      </div>

      {showConfirm && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-xl" onClick={() => setShowConfirm(false)}>
          <ThreeDCard className="w-full max-w-sm m-4 !p-10 border-white/10 text-center" onClick={e => e.stopPropagation()}>
            <ShieldCheck size={48} className="mx-auto mb-6 ks-gold-text" />
            <h3 className="text-2xl font-black text-white font-outfit mb-4 uppercase tracking-tighter">PHASE TRANSITION</h3>
            <p className="text-sm opacity-40 mb-10 font-medium tracking-tight">
              Are you prepared to lock all objectives for Phase {activeWeek}? This action is permanent and recorded in the mission logs.
            </p>
            <div className="flex gap-4">
              <button onClick={() => setShowConfirm(false)} className="flex-1 py-4 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest">Abort</button>
              <button onClick={() => { completeWeekTasks(activeWeek, member.id); setShowConfirm(false); }}
                className="flex-1 py-4 ks-button-gold text-[10px] font-black uppercase tracking-widest">Validate</button>
            </div>
          </ThreeDCard>
        </div>
      )}
    </div>
  );
}
