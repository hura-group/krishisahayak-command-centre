import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import ToastContainer from './components/ToastContainer';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import SchedulePage from './pages/SchedulePage';
import TodayPage from './pages/TodayPage';
import TeamPage from './pages/TeamPage';

import HackedAnimation from './components/HackedAnimation';
import LogoutConfirmation from './components/LogoutConfirmation';
import SplineBackground from './components/SplineBackground';
import LevelUpAnimation from './components/LevelUpAnimation';
import { AnimatePresence } from 'framer-motion';
import { useTasks } from './context/TaskContext';

function AppContent() {
  const { 
    member, logout,
    isConfirmingLogout, setIsConfirmingLogout,
    isLoggingOut, setIsLoggingOut
  } = useAuth();
  const { levelUpData, setLevelUpData } = useTasks();

  // Exit Intent Listener
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (member && e.clientY <= 0 && !isConfirmingLogout && !isLoggingOut) {
        setIsConfirmingLogout(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [member, isConfirmingLogout, isLoggingOut, setIsConfirmingLogout]);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 font-outfit relative">
      {/* HUD Overlays */}
      <div className="hud-vignette" />
      <div className="hud-noise" />
      <div className="hud-scanline-beam" />
      
      {/* 3D Backdrop (Condition: Logged In & No Prank Active) */}
      {member && !isLoggingOut && !isConfirmingLogout && <SplineBackground />}

      {/* Global Prank Overlays (Simplified for Logout) */}
      <AnimatePresence mode="wait">
        {isConfirmingLogout && (
          <LogoutConfirmation 
            key="logout-confirm"
            onConfirm={() => {
              setIsConfirmingLogout(false);
              setIsLoggingOut(true);
            }} 
            onCancel={() => setIsConfirmingLogout(false)} 
          />
        )}
        
        {isLoggingOut && (
          <HackedAnimation 
            key="logout-hacked"
            mode="logout"
            onComplete={logout} 
          />
        )}

        {levelUpData && (
          <LevelUpAnimation 
            key="level-up"
            level={levelUpData.level}
            onComplete={() => setLevelUpData(null)} 
          />
        )}
      </AnimatePresence>

      <div className="content-overlay flex-1 flex flex-col relative z-20">
        {member && <Header />}
        
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 md:pb-8">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="/schedule" element={<ProtectedRoute><SchedulePage /></ProtectedRoute>} />
            <Route path="/today" element={<ProtectedRoute><TodayPage /></ProtectedRoute>} />
            <Route path="/team" element={<ProtectedRoute><TeamPage /></ProtectedRoute>} />
            <Route path="*" element={<Navigate to={member ? '/dashboard' : '/login'} replace />} />
          </Routes>
        </main>

        {member && <MobileNav />}
        {member && <ToastContainer />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <AppContent />
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
}
