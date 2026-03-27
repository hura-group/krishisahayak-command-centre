/**
 * Schedule Data Generator
 * Combines week data files and generates the full 96-day, 288-task schedule.
 * Project Start: March 16, 2026 (Monday)
 */

import { WEEKS_1_8 } from './weeks1to8.js';
import { WEEKS_9_16 } from './weeks9to16.js';

export const PROJECT_START_DATE = new Date('2026-03-16');

export const WEEK_THEMES = [
  'Foundation, Environment & Architecture',
  'Authentication, Onboarding & Farmer Profile',
  'Core Dashboard, Navigation & Home Screen',
  'Real-Time Weather Module',
  'Live Market Price (Mandi) Module',
  'Farmer News Feed & Government Schemes',
  'AI Pest & Disease Detection Module',
  'Marketplace — Buy, Sell & Equipment Rental',
  'Community Feed & Real-Time Chat',
  'Expense Tracker, Leaderboard & Gamification',
  'Push Notifications & Advanced Settings',
  'Multilingual Support & Offline-First Mode',
  'UI Polish, Animations & Global Quality Finish',
  'Testing — Unit, Integration, E2E & UAT',
  'Bug Fixes, Performance & App Store Prep',
  'Deployment, Launch & Investor Readiness',
];

const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const ALL_WEEKS = { ...WEEKS_1_8, ...WEEKS_9_16 };

/**
 * Generate the complete schedule with actual calendar dates.
 * Mon-Sat working days, Sunday rest.
 */
function generateSchedule() {
  const schedule = [];
  const currentDate = new Date(PROJECT_START_DATE);

  for (let week = 1; week <= 16; week++) {
    for (let dayOfWeek = 1; dayOfWeek <= 6; dayOfWeek++) {
      const dayNumber = (week - 1) * 6 + dayOfWeek;
      const dateStr = currentDate.toISOString().split('T')[0];
      const dayName = DAY_NAMES[dayOfWeek - 1];
      const isSaturday = dayOfWeek === 6;

      const weekData = ALL_WEEKS[week];
      const dayData = weekData?.[dayOfWeek];

      const tasks = {};
      const memberMapping = { 'kartik': 'membera', 'umang': 'memberb', 'harsh': 'memberc' };
      
      for (const [newId, oldId] of Object.entries(memberMapping)) {
        const taskDef = dayData?.[oldId];
        if (taskDef) {
          tasks[newId] = {
            id: `w${week}d${dayOfWeek}_${newId}`,
            title: taskDef.title,
            description: taskDef.description,
            category: taskDef.category,
            priority: taskDef.priority,
            timeEstimate: taskDef.timeEstimate,
            status: 'pending',
            completedAt: null,
            notes: '',
            timeSpent: 0,
          };
        }
      }

      schedule.push({
        dayNumber,
        weekNumber: week,
        weekTheme: WEEK_THEMES[week - 1],
        date: dateStr,
        dayName,
        isSaturday,
        tasks,
      });

      // Advance date: skip Sunday
      currentDate.setDate(currentDate.getDate() + 1);
      if (currentDate.getDay() === 0) {
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }
  }

  return schedule;
}

export const SCHEDULE_DATA = generateSchedule();

/**
 * Get the current project day based on today's date.
 */
export function getCurrentDayNumber() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(PROJECT_START_DATE);
  start.setHours(0, 0, 0, 0);

  if (today < start) return 0; // Project hasn't started

  let workingDays = 0;
  const cursor = new Date(start);

  while (cursor <= today) {
    if (cursor.getDay() !== 0) { // Not Sunday
      workingDays++;
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return Math.min(96, Math.max(1, workingDays));
}

/**
 * Get a project calendar entry by actual date string (YYYY-MM-DD).
 */
export function getDayByDate(dateStr) {
  return SCHEDULE_DATA.find(d => d.date === dateStr);
}

/**
 * Get days for a specific week.
 */
export function getWeekDays(weekNumber) {
  return SCHEDULE_DATA.filter(d => d.weekNumber === weekNumber);
}
