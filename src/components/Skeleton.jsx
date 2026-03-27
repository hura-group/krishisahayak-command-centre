import React from 'react';

export default function Skeleton({ className, style }) {
  return (
    <div 
      className={`animate-pulse bg-white/5 rounded-lg ${className}`} 
      style={{
        ...style,
        backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)',
        backgroundSize: '200% 100%',
        animation: 'skeleton-loading 1.5s infinite linear',
      }}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="ks-card space-y-4">
      <div className="flex justify-between items-center">
        <Skeleton className="w-24 h-4" />
        <Skeleton className="w-8 h-8 rounded-full" />
      </div>
      <Skeleton className="w-16 h-8" />
      <Skeleton className="w-full h-2 rounded-full" />
    </div>
  );
}
