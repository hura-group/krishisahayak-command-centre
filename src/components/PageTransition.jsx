import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} className="relative flex-1 flex flex-col">
        {/* The Transition Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1.5, times: [0, 0.2, 0.8, 1] }}
          className="fixed inset-0 z-[10000] bg-[#020617] flex items-center justify-center pointer-events-none"
        >
          <div className="relative flex items-center justify-center scale-125 md:scale-150">
            {/* Boy */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: -30, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-7xl md:text-8xl filter drop-shadow-[0_0_20px_rgba(225,29,72,0.3)]"
            >
              👦
            </motion.div>

            {/* Heart Pop */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4, type: "spring" }}
              className="text-6xl md:text-7xl z-10"
            >
              ❤️
            </motion.div>

            {/* Girl */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 30, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-7xl md:text-8xl filter drop-shadow-[0_0_20px_rgba(225,29,72,0.3)]"
            >
              👧
            </motion.div>
            
            {/* Loading text below */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: [0, 1, 0] }}
               transition={{ delay: 0.3, duration: 1 }}
               className="absolute -bottom-20 whitespace-nowrap"
            >
               <p className="text-[10px] font-black ks-gold-text tracking-[1em] uppercase">Synchronizing_Heartbeat</p>
            </motion.div>
          </div>
        </motion.div>

        {/* The Actual Content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex-1 flex flex-col"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
