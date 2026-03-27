import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeartEffect({ active }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div 
          className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 flex gap-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
           {[1, 2, 3].map((i) => (
             <motion.span 
               key={i}
               className="text-red-500 text-lg"
               animate={{ 
                 y: [0, -20, -40], 
                 opacity: [0, 1, 0],
                 scale: [1, 1.2, 0.8],
                 x: [0, (i-2) * 10, (i-2) * 20]
               }}
               transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
             >
               ❤️
             </motion.span>
           ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
