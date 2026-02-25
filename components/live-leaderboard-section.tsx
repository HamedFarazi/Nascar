"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { LeaderboardTable } from "@/components/leaderboard-table";
import { LiveBadge } from "@/components/live-badge";
import {
  initialLeaderboard,
  type LeaderboardDriver,
} from "@/lib/data/leaderboard";

export function LiveLeaderboardSection() {
  const [drivers, setDrivers] = useState<LeaderboardDriver[]>(
    initialLeaderboard
  );
  const [isRunning, setIsRunning] = useState(true);
  const [previousPositions, setPreviousPositions] = useState<
    Record<number, number>
  >({});
  const [raceProgress, setRaceProgress] = useState(36); // Current lap / total laps * 100
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const simulateRaceUpdate = () => {
    setDrivers((prevDrivers) => {
      const newDrivers = [...prevDrivers];

      // Store previous positions
      const newPreviousPositions: Record<number, number> = {};
      newDrivers.forEach((d) => {
        newPreviousPositions[d.driverId] = d.position;
      });
      setPreviousPositions(newPreviousPositions);

      // Randomly update lap times and positions
      newDrivers.forEach((driver) => {
        // Update lap time (slight variation)
        const baseTime = parseFloat(driver.lastLapTime);
        const variation = (Math.random() - 0.5) * 0.5;
        driver.lastLapTime = (baseTime + variation).toFixed(3);

        // Random chance to advance lap
        if (Math.random() > 0.7) {
          driver.currentLap += 1;
        }
      });

      // Randomly swap adjacent positions (simulate overtakes)
      if (Math.random() > 0.85) {
        const swapIdx = Math.floor(Math.random() * (newDrivers.length - 1));
        const temp = newDrivers[swapIdx].position;
        newDrivers[swapIdx].position = newDrivers[swapIdx + 1].position;
        newDrivers[swapIdx + 1].position = temp;

        newDrivers.sort((a, b) => a.position - b.position);
      }

      // Update gaps
      newDrivers.forEach((driver, idx) => {
        if (idx === 0) {
          driver.gap = "Leader";
        } else {
          const leader = newDrivers[0];
          if (driver.currentLap < leader.currentLap) {
            driver.gap = `+${leader.currentLap - driver.currentLap} Lap`;
          } else {
            const timeGap = (
              parseFloat(driver.lastLapTime) - parseFloat(leader.lastLapTime)
            ).toFixed(3);
            driver.gap = `+${timeGap}`;
          }
        }
      });

      return newDrivers;
    });

    // Update race progress
    setRaceProgress((prev) => {
      const newProgress = prev + 0.5;
      return newProgress > 100 ? 100 : newProgress;
    });
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(simulateRaceUpdate, 3000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const handleReset = () => {
    setDrivers(initialLeaderboard);
    setPreviousPositions({});
    setRaceProgress(36);
    setIsRunning(true);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="section-title text-foreground">
                Live Race Leaderboard
              </h2>
              <LiveBadge />
            </div>
            <p className="text-lg text-muted-foreground">
              Real-time position updates and lap times
            </p>
          </div>

          {/* Control Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="px-4 py-2 rounded-lg glass hover:bg-white/10 transition-all duration-200 text-white font-medium flex items-center gap-2"
              aria-label={isRunning ? "Pause" : "Resume"}
            >
              {isRunning ? (
                <>
                  <Pause className="w-4 h-4" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Resume
                </>
              )}
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-lg glass hover:bg-white/10 transition-all duration-200 text-white font-medium flex items-center gap-2"
              aria-label="Reset"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </div>

        {/* Race Progress Bar */}
        <div className="mb-8 p-6 glass rounded-2xl">
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm text-gray-300 uppercase tracking-wide font-bold">
              Race Progress
            </p>
            <p className="text-2xl font-black text-red-500">
              {Math.floor(raceProgress)}%
            </p>
          </div>
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden border border-white/20">
            <div
              className="h-full bg-gradient-to-r from-red-600 to-red-500 transition-all duration-500 rounded-full"
              style={{ width: `${raceProgress}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Lap {drivers[0]?.currentLap || 145} / 400
          </p>
        </div>

        {/* Leaderboard Container */}
        <div className="glass rounded-2xl overflow-hidden">
          <LeaderboardTable
            drivers={drivers}
            previousPositions={previousPositions}
          />
        </div>

        {/* Info Text */}
        <p className="text-center text-gray-400 text-sm mt-8">
          Simulation updates every 3 seconds. Use Pause/Resume to control the race flow.
        </p>
      </div>
    </section>
  );
}
