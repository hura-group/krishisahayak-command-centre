import React from 'react';
import { motion } from 'framer-motion';

export default function HeartParticles() {
  const heartCount = 50; // Balanced for a "cool" but clean look
  const hearts = ['❤️', '💖', '💘', '💝', '💓', '💗'];
  const colors = ['text-rose-500/20', 'text-pink-500/20', 'text-rose-300/20', 'text-rose-400/20', 'text-red-500/20'];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#020617]">
      {[...Array(heartCount)].map((_, i) => {
        const color = colors[i % colors.length];
        const heart = hearts[i % hearts.length];
        const size = Math.random() * 20 + 10;
        
        // Balanced distribution across the whole screen width
        const startX = Math.random() * 100;
        const drift = (Math.random() - 0.5) * 15;
        
        return (
          <motion.div
            key={i}
            className={`absolute ${color}`}
            style={{ fontSize: size }}
            initial={{ 
              x: `${startX}%`, 
              y: '110vh',
              opacity: 0,
              scale: Math.random() * 0.4 + 0.6,
              rotate: Math.random() * 360
            }}
            animate={{ 
              y: '-20vh',
              opacity: [0, 0.5, 0.5, 0],
              rotate: Math.random() * 180,
              x: `${startX + drift}%` 
            }}
            transition={{ 
              duration: Math.random() * 40 + 40, // Much slower, "cool" drift
              repeat: Infinity, 
              delay: Math.random() * 40,
              ease: "linear"
            }}
          >
            {heart}
          </motion.div>
        );
      })}
      
      {/* Dynamic atmospheric wash */}
      <motion.div 
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-tr from-rose-900/10 via-transparent to-purple-900/10" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]/90" />
    </div>
  );
}
