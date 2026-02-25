"use client";

import { ArrowUp, ArrowDown } from "lucide-react";
import type { LeaderboardDriver } from "@/lib/data/leaderboard";

interface LeaderboardTableProps {
  drivers: LeaderboardDriver[];
  previousPositions?: Record<number, number>;
}

export function LeaderboardTable({
  drivers,
  previousPositions = {},
}: LeaderboardTableProps) {
  const getPositionChange = (driverId: number, currentPosition: number) => {
    const previousPosition = previousPositions[driverId];
    if (previousPosition === undefined || previousPosition === currentPosition) {
      return null;
    }
    return previousPosition > currentPosition ? "up" : "down";
  };

  const getLeaderAccent = (position: number) => {
    switch (position) {
      case 1:
        return "bg-gradient-to-r from-yellow-500/10 to-transparent border-l-2 border-yellow-500";
      case 2:
        return "bg-gradient-to-r from-gray-400/10 to-transparent border-l-2 border-gray-400";
      case 3:
        return "bg-gradient-to-r from-orange-600/10 to-transparent border-l-2 border-orange-600";
      default:
        return "";
    }
  };

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/20 bg-white/5">
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wide">
                Pos
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wide">
                Driver
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wide">
                Car #
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wide">
                Team
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wide">
                Lap
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wide">
                Last Time
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wide">
                Gap
              </th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => {
              const change = getPositionChange(driver.driverId, driver.position);
              return (
                <tr
                  key={driver.driverId}
                  className={`border-b border-white/10 hover:bg-white/5 transition-all duration-300 ${getLeaderAccent(
                    driver.position
                  )}`}
                >
                  <td className="px-6 py-4 text-white font-black text-lg">
                    {driver.position}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold">
                        {driver.name}
                      </span>
                      {change && (
                        <span
                          className={`transition-all ${
                            change === "up"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {change === "up" ? (
                            <ArrowUp className="w-4 h-4" />
                          ) : (
                            <ArrowDown className="w-4 h-4" />
                          )}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-black">
                      {driver.carNumber}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300 text-sm">
                    {driver.team}
                  </td>
                  <td className="px-6 py-4 text-white font-bold">
                    {driver.currentLap}
                  </td>
                  <td className="px-6 py-4 text-white font-mono">
                    {driver.lastLapTime}s
                  </td>
                  <td
                    className={`px-6 py-4 font-bold ${
                      driver.gap === "Leader"
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    {driver.gap}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {drivers.map((driver) => {
          const change = getPositionChange(driver.driverId, driver.position);
          return (
            <div
              key={driver.driverId}
              className={`glass rounded-lg p-4 ${getLeaderAccent(
                driver.position
              )}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-black text-sm">
                    {driver.position}
                  </div>
                  <div>
                    <p className="text-white font-bold">{driver.name}</p>
                    <p className="text-xs text-gray-400">{driver.team}</p>
                  </div>
                </div>
                {change && (
                  <span
                    className={
                      change === "up" ? "text-green-400" : "text-red-400"
                    }
                  >
                    {change === "up" ? (
                      <ArrowUp className="w-5 h-5" />
                    ) : (
                      <ArrowDown className="w-5 h-5" />
                    )}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-3 gap-3 text-sm">
                <div>
                  <p className="text-xs text-gray-400">Car #</p>
                  <p className="text-white font-bold">{driver.carNumber}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Lap</p>
                  <p className="text-white font-bold">{driver.currentLap}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Gap</p>
                  <p
                    className={
                      driver.gap === "Leader"
                        ? "text-yellow-400 font-bold"
                        : "text-gray-300"
                    }
                  >
                    {driver.gap}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
