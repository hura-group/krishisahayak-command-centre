import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTasks } from '../context/TaskContext';
import { Calendar, TrendingUp, Clock, ShieldCheck, Zap, Target, Activity, Coffee } from 'lucide-react';
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
      className="px-3 py-1.5 rounded-lg text-[9px] font-black tracking-widest border border-white/5 outline-none cursor-pointer uppercase transition-all hover:border-[var(--color-accent)]/30"
      style={{ background: configs[status].bg, color: configs[status].color }}
    >
      <option value="pending">⏳ PENDING</option>
      <option value="inprogress">⚡ ACTIVE</option>
      <option value="completed">✅ VERIFIED</option>
    </select>
  );
}

export default function DashboardPage() {
  const { member } = useAuth();
  const { currentDayNumber, currentDayData, currentWeekNumber, WEEK_THEMES, updateTaskStatus, getMemberStats, getMemberAchievements } = useTasks();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const stats = useMemo(() => getMemberStats(member.id), [getMemberStats, member.id]);
  const gamification = useMemo(() => getMemberAchievements(member.id), [getMemberAchievements, member.id]);
  
  const progressPercent = stats.totalTasks > 0 ? Math.round((stats.completedTasks / stats.totalTasks) * 100) : 0;
  const todayTask = currentDayData?.tasks[member.id];

  const bentoItems = [
    {
      id: 'hero',
      className: 'span-2 row-2',
      content: (
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40">System Node: Alpha-7</span>
            </div>
            <h1 className="text-4xl font-black font-outfit tracking-tighter text-white mb-2 leading-none uppercase">
              Command <br/> Centre
            </h1>
            <p className="text-xs font-bold ks-gold-text tracking-widest uppercase opacity-80">
              Phase {currentDayNumber} · {WEEK_THEMES[currentWeekNumber - 1]}
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest opacity-40">
              <span>Mission Readiness</span>
              <span className="ks-gold-text">{progressPercent}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-black/40 border border-white/5 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] animate-pulse" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'stats-xp',
      className: 'span-1',
      content: (
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center justify-between opacity-30">
            <Zap size={16} className="ks-gold-text" />
            <span className="text-[8px] font-black tracking-widest">RANK</span>
          </div>
          <p className="text-3xl font-black text-white font-outfit leading-none mt-2">L{gamification.level}</p>
          <p className="text-[8px] font-black ks-gold-text tracking-widest uppercase mt-1">{gamification.xp} XP SECURED</p>
        </div>
      )
    },
    {
      id: 'stats-tasks',
      className: 'span-1',
      content: (
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center justify-between opacity-30">
            <Activity size={16} className="text-emerald-500" />
            <span className="text-[8px] font-black tracking-widest">QUOTA</span>
          </div>
          <p className="text-3xl font-black text-white font-outfit leading-none mt-2">{stats.completedTasks}/{stats.totalTasks}</p>
          <p className="text-[8px] font-black opacity-30 tracking-widest uppercase mt-1">OBJECTIVES</p>
        </div>
      )
    },
    {
      id: 'today-focus',
      className: 'span-2 row-2',
      content: todayTask ? (
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[9px] font-black px-2 py-0.5 rounded bg-white/5 border border-white/10 uppercase tracking-widest opacity-40">Strategic Focus</span>
              <StatusBadge status={todayTask.status} onChange={(s) => updateTaskStatus(todayTask.id, s)} />
            </div>
            <h3 className="text-xl font-black text-white font-outfit uppercase tracking-tight mb-3">
              {todayTask.title}
            </h3>
            <p className="text-xs opacity-40 line-clamp-3 font-medium leading-relaxed">
              {todayTask.description}
            </p>
          </div>
          <Link to="/today" className="mt-6 flex items-center justify-between group/link">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] ks-gold-text">Initialize Deployment</span>
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center ks-gold-text group-hover/link:translate-x-1 transition-transform border border-white/5">
               <TrendingUp size={14} />
            </div>
          </Link>
        </div>
      ) : (
        <div className="h-full flex flex-col items-center justify-center opacity-20 py-10">
           <Coffee size={32} className="mb-4" />
           <p className="text-[9px] font-black uppercase tracking-widest">No active deployments</p>
        </div>
      )
    },
    {
      id: 'achievements',
      className: 'span-2',
      content: (
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
          {gamification.achievements.length > 0 ? gamification.achievements.map(ach => (
            <div key={ach.id} className="flex-shrink-0 flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
              <span className="text-xl">{ach.icon}</span>
              <div className="min-w-0">
                <p className="text-[10px] font-black text-white truncate uppercase tracking-tighter">{ach.title}</p>
                <p className="text-[8px] font-bold opacity-20 uppercase tracking-tighter">Verified</p>
              </div>
            </div>
          )) : (
            <p className="text-[9px] font-black opacity-20 uppercase tracking-widest mx-auto">Awaiting Distinguished Service</p>
          )}
        </div>
      )
    },
  ];

  if (loading) return <div className="max-w-6xl mx-auto px-6 py-12 animate-pulse space-y-6">
    <div className="h-32 bg-white/5 rounded-3xl" />
    <div className="grid grid-cols-4 gap-6 h-64">
       <div className="col-span-2 bg-white/5 rounded-3xl" />
       <div className="col-span-2 bg-white/5 rounded-3xl" />
    </div>
  </div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fadeInUp">
      <div className="bento-grid">
        {bentoItems.map((item) => (
          <ThreeDCard key={item.id} className={`${item.className} !p-6 flex flex-col glow-border border-white/5 !bg-black/20`}>
            {item.content}
          </ThreeDCard>
        ))}
      </div>
      
      {/* HUD Quick Access */}
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'MAP', to: '/schedule', icon: Calendar },
          { label: 'INTEL', to: '/team', icon: TrendingUp },
          { label: 'PROTOCOL', to: '/schedule', icon: ShieldCheck },
          { label: 'ACCESS', to: '/today', icon: Target },
        ].map((btn, i) => (
          <Link key={i} to={btn.to} className="ks-card !py-4 flex flex-col items-center justify-center group hover:!border-[var(--color-accent)]/30 transition-all border-white/5">
            <btn.icon size={16} className="mb-2 opacity-20 group-hover:opacity-100 group-hover:ks-gold-text transition-all" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-30 group-hover:opacity-100">{btn.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
