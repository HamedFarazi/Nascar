"use client";

import { useEffect, useState, useMemo } from "react";
import { StatusBadge } from "@/components/status-badge";
import { CountdownTimer } from "@/components/countdown-timer";
import { RaceModal } from "@/components/race-modal";
import { raceSchedule, type Race } from "@/lib/data/schedule";
import { ChevronDown } from "lucide-react";

type SortOrder = "asc" | "desc";

export function RaceScheduleSection() {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [filterStatus, setFilterStatus] = useState<"all" | "upcoming" | "live" | "completed">("all");
  const [selectedRace, setSelectedRace] = useState<Race | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const nextUpcomingRace = useMemo(() => {
    return raceSchedule.find((race) => race.status === "upcoming");
  }, []);

  const sortedAndFilteredRaces = useMemo(() => {
    let races = raceSchedule.filter((race) => {
      if (filterStatus === "all") return true;
      return race.status === filterStatus;
    });

    races.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    return races;
  }, [sortOrder, filterStatus]);

  useEffect(() => {
    if (selectedRace) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedRace]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground mb-4">
            2026 NASCAR Race Schedule
          </h2>
          <p className="text-lg text-muted-foreground">
            Mark your calendar for the most exciting races of the season
          </p>
        </div>

        {/* Next Race Spotlight */}
        {nextUpcomingRace && (
          <div className="mb-12 glass rounded-2xl p-8 border border-red-500/30 bg-gradient-to-r from-red-500/5 to-transparent glow-accent">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-red-400 text-sm font-bold uppercase tracking-widest mb-2">
                  Next Race
                </p>
                <h3 className="text-4xl font-black text-white mb-4">
                  {nextUpcomingRace.name}
                </h3>
                <p className="text-gray-300 mb-4">{nextUpcomingRace.track}</p>
                <p className="text-sm text-gray-400">
                  {nextUpcomingRace.location} • {nextUpcomingRace.laps} Laps
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-4">
                  Race Starts In
                </p>
                <CountdownTimer targetDate={nextUpcomingRace.date} />
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          {/* Sort Button */}
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="px-4 py-2 rounded-lg glass hover:bg-white/10 transition-all duration-200 text-white text-sm font-medium flex items-center gap-2"
          >
            Sort: {sortOrder === "asc" ? "Earliest" : "Latest"}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                sortOrder === "desc" ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Filter Buttons */}
          <div className="flex gap-2 overflow-x-auto">
            {["all", "upcoming", "live", "completed"].map((status) => (
              <button
                key={status}
                onClick={() =>
                  setFilterStatus(
                    status as "all" | "upcoming" | "live" | "completed"
                  )
                }
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 text-sm font-medium ${
                  filterStatus === status
                    ? "bg-red-500/20 text-red-400 border border-red-500/50"
                    : "glass text-gray-300 hover:text-white"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Table */}
        <div className="glass rounded-2xl overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20 bg-white/5">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wide">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wide">
                    Race Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wide">
                    Track
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wide">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wide">
                    Laps
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wide">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedAndFilteredRaces.map((race) => (
                  <tr
                    key={race.id}
                    onClick={() => setSelectedRace(race)}
                    className={`border-b border-white/10 hover:bg-white/5 transition-all duration-200 cursor-pointer group ${
                      race.id === nextUpcomingRace?.id
                        ? "bg-red-500/10"
                        : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-white font-medium">
                      {formatDate(race.date)}
                    </td>
                    <td className="px-6 py-4 text-white font-bold group-hover:text-red-400 transition-colors">
                      {race.name}
                    </td>
                    <td className="px-6 py-4 text-gray-300">{race.track}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm">
                      {race.location}
                    </td>
                    <td className="px-6 py-4 text-white font-semibold">
                      {race.laps}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={race.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4 p-4">
            {sortedAndFilteredRaces.map((race) => (
              <button
                key={race.id}
                onClick={() => setSelectedRace(race)}
                className={`glass rounded-lg p-4 hover:bg-white/10 transition-all duration-200 cursor-pointer w-full text-left ${
                  race.id === nextUpcomingRace?.id ? "bg-red-500/10" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                      {formatDate(race.date)}
                    </p>
                    <h3 className="text-lg font-bold text-white">
                      {race.name}
                    </h3>
                  </div>
                  <StatusBadge status={race.status} />
                </div>

                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                      Track
                    </p>
                    <p className="text-gray-200">{race.track}</p>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        Location
                      </p>
                      <p className="text-gray-200">{race.location}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        Laps
                      </p>
                      <p className="text-white font-semibold">{race.laps}</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Race Modal */}
        {selectedRace && (
          <RaceModal
            race={selectedRace}
            isOpen={!!selectedRace}
            onClose={() => setSelectedRace(null)}
          />
        )}
      </div>
    </section>
  );
}
