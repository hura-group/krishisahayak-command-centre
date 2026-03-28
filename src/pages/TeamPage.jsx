import React, { useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTasks } from '../context/TaskContext';
import { MEMBERS_ARRAY } from '../data/members';
import { ShieldCheck, Activity, TrendingUp, Users, Target, Cpu, Globe } from 'lucide-react';
import ThreeDCard from '../components/ThreeDCard';

function MemberCard({ memberData, stats, isYou }) {
  const completionRate = stats.totalTasks > 0 ? Math.round((stats.completedTasks / stats.totalTasks) * 100) : 0;

  return (
    <ThreeDCard className={`!p-0 border-white/5 bg-black/20 overflow-hidden flex flex-col group ${isYou ? 'border-[var(--color-accent)]/40 ring-1 ring-[var(--color-accent)]/10' : ''}`}>
      {/* Card Header HUD */}
      <div className="px-6 py-3 border-b border-white/5 bg-white/5 flex items-center justify-between">
         <span className="text-[8px] font-black uppercase tracking-[0.4em] opacity-30">Node_{memberData.id.slice(0, 4).toUpperCase()}</span>
         {isYou && <span className="text-[8px] font-black ks-gold-text uppercase tracking-widest">PRIMARY_ADMIN</span>}
      </div>

      <div className="p-6 flex-1">
        <div className="flex items-center gap-5 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-2xl border border-white/5 p-0.5"
            style={{ background: `linear-gradient(135deg, ${memberData.colorTheme}, ${memberData.colorDark})` }}>
            <div className="w-full h-full rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
               {memberData.avatarEmoji}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-black text-white truncate font-outfit uppercase tracking-tighter">{memberData.displayName}</h3>
            <div className="flex items-center gap-2 mt-0.5">
               <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
               <p className="text-[8px] font-black opacity-30 uppercase tracking-[0.2em]">{memberData.roleTitle}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-[9px] font-black uppercase tracking-widest mb-2 opacity-50">
              <span>Node_Saturation</span>
              <span className="ks-gold-text">{completionRate}%</span>
            </div>
            <div className="h-1 w-full rounded-full bg-white/5 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] transition-all duration-1000" style={{ width: `${completionRate}%` }} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
            <div className="p-3 bg-black/40">
              <p className="text-[8px] font-black opacity-20 uppercase mb-1">Sector_Sync</p>
              <p className="text-xs font-black text-white font-outfit">{stats.completedTasks}<span className="opacity-20 ml-1">/ {stats.totalTasks}</span></p>
            </div>
            <div className="p-3 bg-black/40">
              <p className="text-[8px] font-black opacity-20 uppercase mb-1">Drift_Sentinel</p>
              <p className="text-xs font-black text-white font-outfit">{stats.weekCompleted}<span className="opacity-20 ml-1">/ {stats.weekTasks}</span></p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Card Footer HUD */}
      <div className="px-6 py-3 border-t border-white/5 flex items-center justify-between bg-white/[0.02]">
         <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/20 flex items-center justify-center">
               <div className="w-0.5 h-0.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <span className="text-[8px] font-black opacity-20 uppercase">Linked</span>
         </div>
         <Activity size={10} className="opacity-10 group-hover:opacity-40 transition-opacity" />
      </div>
    </ThreeDCard>
  );
}

export default function TeamPage() {
  const { member: currentUser } = useAuth();
  const { getMemberStats } = useTasks();

  const membersWithStats = useMemo(() => {
    return MEMBERS_ARRAY.map(m => ({
      member: m,
      stats: getMemberStats(m.id),
      isYou: m.id === currentUser.id
    }));
  }, [getMemberStats, currentUser.id]);

  const totalTeamTasks = membersWithStats.reduce((acc, m) => acc + m.stats.totalTasks, 0);
  const totalTeamCompleted = membersWithStats.reduce((acc, m) => acc + m.stats.completedTasks, 0);
  const teamCompletionRate = totalTeamTasks > 0 ? Math.round((totalTeamCompleted / totalTeamTasks) * 100) : 0;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fadeInUp">
      {/* Unique Header Area */}
      <div className="grid lg:grid-cols-3 gap-10 mb-16 items-end">
        <div className="lg:col-span-2">
           <div className="flex items-center gap-2 mb-4">
              <Activity size={12} className="text-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 leading-none">Global Intel Feed</span>
           </div>
           <h1 className="text-5xl font-black text-white font-outfit tracking-tighter uppercase leading-none">
              Crew <br/> Manifest
           </h1>
           <p className="text-xs font-medium opacity-40 mt-6 max-w-sm leading-relaxed tracking-wide">
             Real-time synchronization for <span className="ks-gold-text">Sentinel-Class</span> operational nodes across global sectors.
           </p>
        </div>
        
        <div className="ks-card glow-border !p-8 !bg-black/40 border-white/10 shadow-2xl">
           <div className="flex items-center justify-between mb-6">
              <span className="text-[9px] font-black ks-gold-text uppercase tracking-[0.3em]">Readiness_Index</span>
              <Globe size={14} className="opacity-20" />
           </div>
           <div className="flex items-end gap-1 mb-4">
              <span className="text-5xl font-black text-white font-outfit leading-none">{teamCompletionRate}</span>
              <span className="text-lg font-black ks-gold-text mb-1">%</span>
           </div>
           <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" style={{ width: `${teamCompletionRate}%` }} />
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {membersWithStats.map(({ member, stats, isYou }) => (
          <MemberCard
            key={member.id}
            memberData={member}
            stats={stats}
            isYou={isYou}
          />
        ))}
      </div>

      {/* Unique Data Placeholder */}
      <div className="mt-20 bento-grid">
         <div className="span-3 ks-card border-dashed !p-12 text-center opacity-30 group hover:opacity-100 transition-all duration-700">
            <Cpu size={48} className="mx-auto mb-8 ks-gold-text opacity-20 group-hover:scale-110 transition-transform duration-1000" />
            <h3 className="text-xl font-black text-white font-outfit mb-3 uppercase tracking-tighter">Velocity_Dynamics Analyzer</h3>
            <p className="text-[10px] font-medium opacity-50 mx-auto max-w-xs tracking-widest leading-relaxed">
               Predictive saturation models for Sentinel Node {member.id.slice(0,3)} are initializing in sector 4.
            </p>
         </div>
         <div className="span-1 ks-card border-dashed flex items-center justify-center opacity-10">
            <Target size={32} />
         </div>
      </div>
    </div>
  );
}
