/**
 * Members Database
 * KrishiSahayak Team: Kartik, Umang, Harsh
 */

export const MEMBERS = {
  kartik: {
    id: 'kartik',
    username: 'kartik',
    password: 'sanjana',
    displayName: 'Kartik',
    roleTitle: 'Elite Product Lead · Hura Group',
    colorTheme: '#D4AF37',
    colorDark: '#B8860B',
    colorGlow: 'rgba(212, 175, 55, 0.2)',
    gradientFrom: '#D4AF37',
    gradientTo: '#020617',
    avatarEmoji: '👑',
    streakCount: 12,
    totalCompleted: 148,
  },
  umang: {
    id: 'umang',
    username: 'umang',
    password: 'devangi',
    displayName: 'Umang',
    roleTitle: 'Systems Architect · Hura Group',
    colorTheme: '#3B82F6',
    colorDark: '#1E40AF',
    colorGlow: 'rgba(59, 130, 246, 0.2)',
    gradientFrom: '#3B82F6',
    gradientTo: '#020617',
    avatarEmoji: '⚡',
    streakCount: 8,
    totalCompleted: 132,
  },
  harsh: {
    id: 'harsh',
    username: 'harsh',
    password: 'pruthvi',
    displayName: 'Harsh',
    roleTitle: 'Intelligence Lead · Hura Group',
    colorTheme: '#10B981',
    colorDark: '#065F46',
    colorGlow: 'rgba(16, 185, 129, 0.2)',
    gradientFrom: '#10B981',
    gradientTo: '#020617',
    avatarEmoji: '🎯',
    streakCount: 15,
    totalCompleted: 156,
  },
};

export const MEMBERS_ARRAY = Object.values(MEMBERS);

export const getMember = (username) => MEMBERS[username] || null;

export const validateLogin = (username, password) => {
  const member = MEMBERS[username];
  if (member && member.password === password) {
    return { success: true, member };
  }
  return { success: false, message: 'Invalid Terminal Credentials.' };
};
