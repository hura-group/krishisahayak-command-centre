import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, User, Heart, ShieldCheck, ArrowRight, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import HeartParticles from '../components/HeartParticles';
import AuthSuccessAnimation from '../components/AuthSuccessAnimation';
import HeartEffect from '../components/HeartEffect';
import HackedAnimation from '../components/HackedAnimation';
import CountdownTimer from '../components/CountdownTimer';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [authStage, setAuthStage] = useState('login'); // login -> hacked -> success -> dashboard
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isComingSoon, setIsComingSoon] = useState(true);
  const [, setSecretClickCount] = useState(0);
  const { login } = useAuth();
  const navigate = useNavigate();

  // Target Launch Date: 2 days from now
  const LAUNCH_DATE = "2026-03-31T00:00:00Z"; 

  // Hide global HUD on login page
  useEffect(() => {
    const scanlines = document.querySelector('.hud-scanlines');
    const noise = document.querySelector('.noise-overlay');
    if (scanlines) scanlines.style.display = 'none';
    if (noise) noise.style.display = 'none';
    
    return () => {
      if (scanlines) scanlines.style.display = 'block';
      if (noise) noise.style.display = 'block';
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    setTimeout(() => {
      const result = login(username.toLowerCase(), password);
      if (result.success) {
        setAuthStage('hacked');
      } else {
        setError(result.message);
        setIsLoading(false);
      }
    }, 1200);
  };

  const handleHackedComplete = () => {
    setAuthStage('success');
  };

  const handleSuccessComplete = () => {
    navigate('/dashboard');
  };

  const handleSecretBypass = () => {
    setSecretClickCount(prev => {
      const next = prev + 1;
      if (next >= 5) {
        setIsComingSoon(false);
        // Toast-like notification logic could go here
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#020617] font-outfit relative overflow-hidden">
      <HeartParticles />

      <AnimatePresence mode="wait">
        {/* Cinematic Intro Splash Screen */}
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[5000] bg-black flex items-center justify-center overflow-hidden"
          >
             <div className="absolute inset-0">
                <img src="/kissing_scene.png" alt="Kissing Scene" className="w-full h-full object-cover opacity-60 filter brightness-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
             </div>
             
             <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                onClick={() => setShowIntro(false)}
                className="absolute top-10 right-10 z-[5100] w-14 h-14 bg-white/10 hover:bg-rose-600/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-3xl group"
             >
                <X size={28} className="group-hover:rotate-90 transition-transform duration-500" />
             </motion.button>

             <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 flex flex-col items-center gap-8"
             >
                <div className="w-24 h-24 bg-rose-500/10 rounded-full flex items-center justify-center backdrop-blur-3xl border border-rose-500/20 shadow-[0_0_50px_rgba(225,29,72,0.2)]">
                   <Heart size={48} className="text-rose-500 fill-current animate-pulse" />
                </div>
                <h2 className="text-2xl font-black text-rose-50 tracking-[2em] uppercase opacity-60">WAIT</h2>
             </motion.div>

             <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 opacity-20">
                <p className="text-[10px] font-black text-white tracking-[1em] uppercase">Interaction_Required</p>
             </div>
          </motion.div>
        )}

        {/* Post-Login Sequence */}
        {authStage === 'hacked' && (
          <HackedAnimation key="hacked" onComplete={handleHackedComplete} />
        )}
        {authStage === 'success' && (
          <AuthSuccessAnimation key="success" isLogout={true} onComplete={handleSuccessComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {authStage === 'login' && !showIntro && (
          <motion.div 
            key="main-ui"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col w-full min-h-screen relative"
          >
            {/* Header (Logo & Branding) - Fixed at top */}
            <div className="absolute top-0 left-0 w-full p-8 md:p-12 z-20">
               <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-6">
                 <div 
                   onClick={handleSecretBypass}
                   className="w-16 h-16 md:w-20 md:h-20 bg-black/20 border border-white/10 rounded-2xl p-4 flex items-center justify-center backdrop-blur-3xl shadow-2xl group transition-all duration-700 hover:border-rose-500/30 cursor-pointer active:scale-95"
                 >
                    <img src="/hura_logo.png" alt="Logo" className="w-full h-full object-contain filter brightness-110 opacity-70 group-hover:opacity-100 mix-blend-screen transition-all duration-700" />
                 </div>
                 <div className="flex flex-col">
                   <h2 className="text-xl md:text-2xl font-black text-rose-50 tracking-[0.2em] leading-none">HURA <span className="rose-gold-gradient">GROUP</span></h2>
                   <div className="flex items-center gap-2 mt-2">
                       <div className="w-1 h-1 rounded-full bg-rose-500 animate-pulse" />
                       <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.5em]">Secure_Node_Active</p>
                   </div>
                 </div>
               </motion.div>
            </div>

            {isComingSoon ? (
              /* Coming Soon Mode - Centered Layout */
              <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 z-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 via-transparent to-black/60 pointer-events-none" />
                
                {/* Premium Animated Backdrop elements */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  transition={{ duration: 3 }}
                  className="absolute inset-0 flex items-center justify-center -z-10"
                >
                   <div className="w-[80vw] h-[80vw] rounded-full border border-rose-500/20 animate-pulse blur-[100px]" />
                </motion.div>

                <div className="text-center space-y-16 max-w-4xl w-full translate-y-[-5%]">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex items-center justify-center gap-6 mb-12">
                       <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose-500/40" />
                       <span className="text-[10px] md:text-xs font-black ks-gold-text uppercase tracking-[1em] opacity-60">System Initializing</span>
                       <div className="w-16 h-px bg-gradient-to-l from-transparent to-rose-500/40" />
                    </div>
                    
                    <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase italic">
                      Coming <br />
                      <span className="rose-gold-gradient">Soon</span>
                    </h1>
                    
                    <p className="text-[10px] md:text-sm font-black text-white/40 tracking-[0.5em] uppercase mt-12 italic">Arrival_Sequence: Operational</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 1, type: "spring" }}
                    className="mx-auto flex justify-center scale-110 md:scale-150 py-10"
                  >
                     <CountdownTimer targetDate={LAUNCH_DATE} onComplete={() => setIsComingSoon(false)} />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="pt-16 border-t border-white/5 inline-block mx-auto"
                  >
                    <p className="text-[9px] font-black text-rose-500/30 uppercase tracking-[0.8em] font-mono">ENCRYPTED_SIGNAL_STREAMING_BY_HURA_GROUP</p>
                  </motion.div>
                </div>

                <div className="fixed bottom-12 opacity-10 hover:opacity-50 transition-opacity duration-1000 hidden md:block">
                  <p className="text-[8px] font-black tracking-[1em] text-white uppercase italic">Access_Protocol: Restricted</p>
                </div>
              </div>
            ) : (
              /* Standard Login Portal */
              <div className="flex flex-col lg:flex-row w-full flex-1">
                {/* Left Column (Welcome) */}
                <div className="relative w-full lg:w-[55%] min-h-[40vh] lg:min-h-full flex flex-col justify-end p-12 md:p-24 z-10 overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-rose-900/5 pointer-events-none" />
                   <div className="relative z-10">
                     <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3 }} className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter">
                       Welcome <br />
                       <span className="rose-gold-gradient opacity-70">Home.</span>
                     </motion.h1>
                   </div>
                   <div className="relative z-10 opacity-10 flex items-center gap-4 mt-12">
                     <ShieldCheck size={16} className="text-rose-500" />
                     <p className="text-[9px] font-black tracking-[1.5em] text-white uppercase">Command_Terminal_Encrypted</p>
                   </div>
                </div>

                {/* Right Column (Form) */}
                <div className="relative flex-1 min-h-[60vh] lg:min-h-full bg-black/40 backdrop-blur-[100px] flex flex-col justify-center px-12 md:px-24 py-24 z-10 lg:border-l border-white/5 shadow-[-50px_0_150px_rgba(0,0,0,0.5)]">
                  <div className="max-w-md mx-auto w-full space-y-16 relative z-10">
                      <form onSubmit={handleSubmit} className="space-y-14">
                        {error && (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest text-center">
                            {error}
                          </motion.div>
                        )}
                        <div className="space-y-8">
                            <div className="mb-10 text-center lg:text-left">
                               <p className="text-[10px] font-black text-rose-500/40 uppercase tracking-[1em]">AUTHENTICATE</p>
                            </div>
                            <div className="relative group border-b-2 border-white/5 focus-within:border-rose-500 transition-all duration-700">
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-rose-500 transition-colors"><User size={18} /></div>
                              <input type="text" placeholder="IDENTITY" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-transparent py-6 pl-12 text-white text-base font-bold placeholder:text-white/5 focus:outline-none transition-all tracking-[0.2em]" required />
                            </div>
                            <div className="relative group border-b-2 border-white/5 focus-within:border-rose-500 transition-all duration-700">
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-rose-500 transition-colors"><Lock size={18} /></div>
                              <HeartEffect active={isPasswordFocused} />
                              <input type="password" placeholder="SECRET" value={password} onChange={(e) => setPassword(e.target.value)} onFocus={() => setIsPasswordFocused(true)} onBlur={() => setIsPasswordFocused(false)} className="w-full bg-transparent py-6 pl-12 text-white text-base font-bold placeholder:text-white/5 focus:outline-none transition-all tracking-[0.2em]" required />
                            </div>
                        </div>
                        <button type="submit" disabled={isLoading} className="w-full relative group flex items-center justify-between bg-rose-600 font-extrabold py-7 px-10 rounded-[2rem] text-[14px] text-white uppercase tracking-[0.4em] transition-all hover:bg-rose-500 hover:shadow-[0_25px_60px_rgba(225,29,72,0.3)] active:scale-[0.98]">
                            <span className="relative z-10">{isLoading ? 'Validating...' : 'Engaged'}</span>
                            <ArrowRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                            <div className="absolute inset-x-0 bottom-0 h-1.5 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                        </button>
                      </form>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
