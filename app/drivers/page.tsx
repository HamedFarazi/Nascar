"use client";

import { useState, useMemo } from "react";
import { GlassCard } from "@/components/glass-card";
import { DriverModal } from "@/components/driver-modal";
import { drivers } from "@/lib/data/drivers";
import { Search, Trophy } from "lucide-react";

const teams = Array.from(new Set(drivers.map((d) => d.team)));

type Driver = (typeof drivers)[0];

export default function DriversPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<string>("all");
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);

  const filteredDrivers = useMemo(() => {
    return drivers.filter((driver) => {
      const matchesSearch =
        driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        driver.number.toString().includes(searchTerm);

      const matchesTeam =
        selectedTeam === "all" || driver.team === selectedTeam;

      return matchesSearch && matchesTeam;
    });
  }, [searchTerm, selectedTeam]);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title text-foreground mb-4">
            NASCAR Drivers
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the elite drivers competing for glory and championships on the
            track.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search drivers by name or number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
            />
          </div>

          {/* Team Filter */}
          <select
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            className="px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-red-500 transition-all cursor-pointer"
          >
            <option value="all">All Teams</option>
            {teams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {filteredDrivers.length} driver{filteredDrivers.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Drivers Grid */}
        {filteredDrivers.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDrivers.map((driver) => (
              <button
                key={driver.id}
                onClick={() => setSelectedDriver(driver)}
                className="text-left transition-all duration-300"
              >
                <GlassCard className="p-6 hover:scale-105 cursor-pointer h-full">
                {/* Driver Image Placeholder */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div
                    className="w-full h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${driver.image})` }}
                  />
                  <div className="absolute top-3 right-3 bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-black text-lg">
                    {driver.number}
                  </div>

                  {driver.pointsLeader && (
                    <div className="absolute top-3 left-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Trophy className="w-3 h-3" /> Leader
                    </div>
                  )}
                </div>

                {/* Driver Info */}
                <h3 className="text-2xl font-black text-white mb-2">
                  {driver.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4 uppercase tracking-wide">
                  {driver.team}
                </p>

                {/* Stats */}
                <div className="space-y-3 pt-4 border-t border-white/20">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400 uppercase tracking-wide">
                      Wins
                    </span>
                    <span className="text-lg font-bold text-red-500">
                      {driver.wins}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400 uppercase tracking-wide">
                      Championships
                    </span>
                    <span className="text-lg font-bold text-white">
                      {driver.championships}
                    </span>
                  </div>

                  {driver.pointsLeader && (
                    <div className="flex justify-between items-center bg-gradient-to-r from-yellow-500/20 to-red-500/20 -mx-6 px-6 py-3 rounded-lg border border-yellow-500/30">
                      <span className="text-xs text-gray-300 uppercase tracking-wide">
                        Status
                      </span>
                      <span className="text-sm font-bold text-yellow-400">
                        Points Leader
                      </span>
                    </div>
                  )}
                </div>
                </GlassCard>
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <GlassCard className="p-12 max-w-md mx-auto">
              <p className="text-xl text-gray-300 mb-4">No drivers found</p>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </GlassCard>
          </div>
        )}

        {/* Driver Modal */}
        {selectedDriver && (
          <DriverModal
            driver={selectedDriver}
            isOpen={!!selectedDriver}
            onClose={() => setSelectedDriver(null)}
          />
        )}
      </div>
    </div>
  );
}
