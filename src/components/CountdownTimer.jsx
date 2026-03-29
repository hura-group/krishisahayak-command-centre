import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Digit = ({ value }) => (
  <div className="relative inline-flex items-center justify-center w-[0.6em]">
    <AnimatePresence mode="popLayout">
      <motion.span
        key={value}
        initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        exit={{ y: -10, opacity: 0, filter: 'blur(10px)' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="block tabular-nums"
      >
        {value}
      </motion.span>
    </AnimatePresence>
  </div>
);

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

  const TimeUnit = ({ value, label }) => {
    const digits = value.toString().padStart(2, '0').split('');
    
    return (
      <div className="flex flex-col items-center px-4 md:px-6">
        <div className="relative group">
          <div className="absolute inset-0 bg-rose-500/10 blur-2xl rounded-full scale-110 opacity-60 pointer-events-none" />
          <div className="text-6xl md:text-8xl font-black font-outfit text-white flex items-center tracking-tighter drop-shadow-[0_0_20px_rgba(251,113,133,0.3)]">
             {digits.map((d, i) => (
                <Digit key={i} value={d} />
             ))}
          </div>
        </div>
        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white/20 mt-4 italic">
          {label}
        </span>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center space-x-2 md:space-x-4">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="text-3xl md:text-5xl font-black text-rose-500/20 self-start mt-4 select-none">:</div>
      <TimeUnit value={timeLeft.hours} label="Hrs" />
      <div className="text-3xl md:text-5xl font-black text-rose-500/20 self-start mt-4 select-none">:</div>
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <div className="text-3xl md:text-5xl font-black text-rose-500/20 self-start mt-4 select-none">:</div>
      <TimeUnit value={timeLeft.seconds} label="Sec" />
    </div>
  );
};

export default CountdownTimer;
