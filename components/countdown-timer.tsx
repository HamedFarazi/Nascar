"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

export function CountdownTimer({ targetDate }: CountdownProps) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
          ),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-2 sm:gap-4">
      <div className="flex flex-col items-center">
        <span className="text-2xl sm:text-3xl font-black text-red-500">
          {countdown.days}
        </span>
        <span className="text-xs text-gray-400 uppercase tracking-wide">
          Days
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl sm:text-3xl font-black text-red-500">
          {countdown.hours}
        </span>
        <span className="text-xs text-gray-400 uppercase tracking-wide">
          Hours
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl sm:text-3xl font-black text-red-500">
          {countdown.minutes}
        </span>
        <span className="text-xs text-gray-400 uppercase tracking-wide">
          Mins
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl sm:text-3xl font-black text-red-500">
          {countdown.seconds}
        </span>
        <span className="text-xs text-gray-400 uppercase tracking-wide">
          Secs
        </span>
      </div>
    </div>
  );
}
