import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CountdownTimer = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);
      
      if (remaining.days === 0 && remaining.hours === 0 && remaining.minutes === 0 && remaining.seconds === 0) {
        clearInterval(timer);
        if (onComplete) onComplete();
      }
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center px-4 md:px-6">
      <div className="relative group">
        <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0, filter: 'blur(10px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: -20, opacity: 0, filter: 'blur(10px)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="text-5xl md:text-7xl font-bold font-outfit ks-gold-text block tabular-nums"
          >
            {value.toString().padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-text-muted mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center justify-center space-x-2 md:space-x-4">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="text-3xl md:text-5xl font-bold text-accent/30 self-start mt-2">:</div>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="text-3xl md:text-5xl font-bold text-accent/30 self-start mt-2">:</div>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <div className="text-3xl md:text-5xl font-bold text-accent/30 self-start mt-2">:</div>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
