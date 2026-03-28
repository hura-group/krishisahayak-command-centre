import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import ToastContainer from './components/ToastContainer';
import { AnimatePresence, motion } from 'framer-motion';
import { useTasks } from './context/TaskContext';

// Lazy load components
const LoginPage = lazy(() => import('./pages/LoginPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const SchedulePage = lazy(() => import('./pages/SchedulePage'));
const TodayPage = lazy(() => import('./pages/TodayPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));

const HackedAnimation = lazy(() => import('./components/HackedAnimation'));
const LogoutConfirmation = lazy(() => import('./components/LogoutConfirmation'));
const SplineBackground = lazy(() => import('./components/SplineBackground'));
const LevelUpAnimation = lazy(() => import('./components/LevelUpAnimation'));

// Loader component for suspense
const PageLoader = () => (
  <div className="flex-1 flex flex-col items-center justify-center p-12">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center gap-6"
    >
      <div className="w-12 h-12 border-2 border-rose-500/20 border-t-rose-500 rounded-full animate-spin" />
      <p className="text-[10px] font-black text-rose-500/40 uppercase tracking-[1em]">INITIALIZING_NODE</p>
    </motion.div>
  </div>
);

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
      <Suspense fallback={null}>
        {member && !isLoggingOut && !isConfirmingLogout && <SplineBackground />}
      </Suspense>

      {/* Global Prank Overlays (Simplified for Logout) */}
      <AnimatePresence mode="wait">
        {isConfirmingLogout && (
          <Suspense fallback={null}>
            <LogoutConfirmation 
              key="logout-confirm"
              onConfirm={() => {
                setIsConfirmingLogout(false);
                setIsLoggingOut(true);
              }} 
              onCancel={() => setIsConfirmingLogout(false)} 
            />
          </Suspense>
        )}
        
        {isLoggingOut && (
          <Suspense fallback={null}>
            <HackedAnimation 
              key="logout-hacked"
              mode="logout"
              onComplete={logout} 
            />
          </Suspense>
        )}

        {levelUpData && (
          <Suspense fallback={null}>
            <LevelUpAnimation 
              key="level-up"
              level={levelUpData.level}
              onComplete={() => setLevelUpData(null)} 
            />
          </Suspense>
        )}
      </AnimatePresence>

      <div className="content-overlay flex-1 flex flex-col relative z-20">
        {member && <Header />}
        
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 md:pb-8">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
              <Route path="/schedule" element={<ProtectedRoute><SchedulePage /></ProtectedRoute>} />
              <Route path="/today" element={<ProtectedRoute><TodayPage /></ProtectedRoute>} />
              <Route path="/team" element={<ProtectedRoute><TeamPage /></ProtectedRoute>} />
              <Route path="*" element={<Navigate to={member ? '/dashboard' : '/login'} replace />} />
            </Routes>
          </Suspense>
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
