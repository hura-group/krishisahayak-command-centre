/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { SCHEDULE_DATA, getCurrentDayNumber, WEEK_THEMES } from '../data/scheduleData';

const TaskContext = createContext(null);

export const useTasks = () => {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error('useTasks must be used within TaskProvider');
  return ctx;
};

export const TaskProvider = ({ children }) => {
  const { member } = useAuth();
  const [taskStates, setTaskStates] = useState({});
  const [toasts, setToasts] = useState([]);
   const [lastLevel, setLastLevel] = useState(1);
   const [levelUpData, setLevelUpData] = useState(null);
   const [lastSync, setLastSync] = useState(new Date().toISOString());
   const [isSyncing, setIsSyncing] = useState(false);
  
  const currentDayNumber = useMemo(() => getCurrentDayNumber(), []);

  // Load persisted task states from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ks_task_states');
      if (saved) {
        const states = JSON.parse(saved);
        setTaskStates(states);
      }
    } catch (e) {
      console.error('Failed to load task states:', e);
    }
  }, []);

  // Show a toast notification
  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  }, []);

  // Simulated background sync
  const performSync = useCallback(() => {
    setIsSyncing(true);
    setTimeout(() => {
      setLastSync(new Date().toISOString());
      setIsSyncing(false);
    }, 1500);
  }, []);

  // Update a task's status
  const updateTaskStatus = useCallback((taskId, newStatus) => {
    setTaskStates(prev => {
      const updated = {
        ...prev,
        [taskId]: {
          ...(prev[taskId] || {}),
          status: newStatus,
          completedAt: newStatus === 'completed' ? new Date().toISOString() : (prev[taskId]?.completedAt || null),
        },
      };
      localStorage.setItem('ks_task_states', JSON.stringify(updated));
      return updated;
    });

    if (newStatus === 'completed') {
      showToast('Task marked complete! 🎉');
    } else if (newStatus === 'inprogress') {
      showToast('Task in progress ⚡');
    }
  }, [showToast]);

  // Update a task's notes
  const updateTaskNotes = useCallback((taskId, notes) => {
    setTaskStates(prev => {
      const updated = {
        ...prev,
        [taskId]: {
          ...(prev[taskId] || {}),
          notes,
        },
      };
      localStorage.setItem('ks_task_states', JSON.stringify(updated));
      return updated;
    });
  }, []);

  // Update time spent
  const updateTimeSpent = useCallback((taskId, hours) => {
    setTaskStates(prev => {
      const updated = {
        ...prev,
        [taskId]: {
          ...(prev[taskId] || {}),
          timeSpent: hours,
        },
      };
      localStorage.setItem('ks_task_states', JSON.stringify(updated));
      return updated;
    });
  }, []);

  // Get merged task (schedule data + persisted state)
  const getTaskState = useCallback((taskId) => {
    return taskStates[taskId] || {};
  }, [taskStates]);

  // Full schedule with merged states
  const fullSchedule = useMemo(() => {
    return SCHEDULE_DATA.map(day => ({
      ...day,
      tasks: Object.entries(day.tasks).reduce((acc, [memberId, task]) => {
        const state = taskStates[task.id] || {};
        acc[memberId] = {
          ...task,
          status: state.status || 'pending',
          completedAt: state.completedAt || null,
          notes: state.notes || '',
          timeSpent: state.timeSpent || 0,
        };
        return acc;
      }, {}),
    }));
  }, [taskStates]);

  // Current day data
  const currentDayData = useMemo(() => {
    return fullSchedule.find(d => d.dayNumber === currentDayNumber) || null;
  }, [fullSchedule, currentDayNumber]);

  // Current week number
  const currentWeekNumber = useMemo(() => {
    return currentDayData ? currentDayData.weekNumber : Math.ceil(currentDayNumber / 6);
  }, [currentDayData, currentDayNumber]);

  // Stats for a member
  const getMemberStats = useCallback((memberId) => {
    let totalTasks = 0;
    let completedTasks = 0;
    let todayTasks = 0;
    let todayCompleted = 0;
    let weekTasks = 0;
    let weekCompleted = 0;

    fullSchedule.forEach(day => {
      const task = day.tasks[memberId];
      if (!task) return;
      totalTasks++;
      if (task.status === 'completed') completedTasks++;

      if (day.dayNumber === currentDayNumber) {
        todayTasks++;
        if (task.status === 'completed') todayCompleted++;
      }

      if (day.weekNumber === currentWeekNumber) {
        weekTasks++;
        if (task.status === 'completed') weekCompleted++;
      }
    });

    return { totalTasks, completedTasks, todayTasks, todayCompleted, weekTasks, weekCompleted };
  }, [fullSchedule, currentDayNumber, currentWeekNumber]);

  // Streak calculation
  const getStreak = useCallback((memberId) => {
    let streak = 0;
    // Work backwards from current day
    for (let d = currentDayNumber; d >= 1; d--) {
      const day = fullSchedule.find(x => x.dayNumber === d);
      if (!day) break;
      const task = day.tasks[memberId];
      if (!task) break;
      if (task.status === 'completed') {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  }, [fullSchedule, currentDayNumber]);

  // Achievement calculation
  const getMemberAchievements = useCallback((memberId) => {
    const stats = getMemberStats(memberId);
    const streak = getStreak(memberId);
    const achievements = [];

    if (stats.completedTasks >= 1) achievements.push({ id: 'first_task', title: 'Seed Sower', icon: '🌱', desc: 'Completed your first mission' });
    if (stats.completedTasks >= 10) achievements.push({ id: 'ten_tasks', title: 'Dedicated Farmer', icon: '🚜', desc: '10 missions successfully executed' });
    if (stats.completedTasks >= 48) achievements.push({ id: 'halfway', title: 'Halfway Hero', icon: '🏙️', desc: 'Completed half of the 16-week roadmap' });
    if (stats.completedTasks >= 96) achievements.push({ id: 'all_tasks', title: 'Harvest King', icon: '👑', desc: 'Completed the entire 96-day mission control' });
    
    if (streak >= 7) achievements.push({ id: 'streak_7', title: 'Consistent Cultivator', icon: '🔥', desc: '7-day execution streak' });
    if (streak >= 30) achievements.push({ id: 'streak_30', title: 'Unstoppable Force', icon: '⚡', desc: '30-day legendary streak' });

    const xp = (stats.completedTasks * 100) + (streak * 50);
    const level = Math.floor(xp / 1000) + 1;
    const nextLevelXp = level * 1000;
    const currentLevelProgress = ((xp % 1000) / 1000) * 100;

    return { achievements, xp, level, nextLevelXp, currentLevelProgress };
  }, [getMemberStats, getStreak]);

  // Monitor Level Up (Must be after getMemberAchievements)
  useEffect(() => {
    if (!member) return;
    const { level } = getMemberAchievements(member.id);
    if (level > lastLevel) {
      setLevelUpData({ level });
      setLastLevel(level);
    }
  }, [taskStates, member, lastLevel, getMemberAchievements]);

  // Bulk complete for a week
  const completeWeekTasks = useCallback((weekNumber, memberId) => {
    const weekDays = fullSchedule.filter(d => d.weekNumber === weekNumber);
    setTaskStates(prev => {
      const updated = { ...prev };
      weekDays.forEach(day => {
        const task = day.tasks[memberId];
        if (task) {
          updated[task.id] = {
            ...(updated[task.id] || {}),
            status: 'completed',
            completedAt: new Date().toISOString(),
          };
        }
      });
      localStorage.setItem('ks_task_states', JSON.stringify(updated));
      return updated;
    });
    showToast(`All Week ${weekNumber} tasks completed! 🏆`);
  }, [fullSchedule, showToast]);

  return (
    <TaskContext.Provider value={{
      fullSchedule,
      currentDayNumber,
      currentDayData,
      currentWeekNumber,
      updateTaskStatus,
      updateTaskNotes,
      updateTimeSpent,
      getTaskState,
      getMemberStats,
      getMemberAchievements,
      completeWeekTasks,
      toasts,
       showToast,
       levelUpData,
       setLevelUpData,
       lastSync,
       isSyncing,
       performSync,
       WEEK_THEMES,
     }}>
      {children}
    </TaskContext.Provider>
  );
};
