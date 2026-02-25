export interface LeaderboardDriver {
  position: number;
  driverId: number;
  name: string;
  carNumber: number;
  team: string;
  currentLap: number;
  lastLapTime: string;
  gap: string;
}

export const initialLeaderboard: LeaderboardDriver[] = [
  {
    position: 1,
    driverId: 1,
    name: "Chase Elliott",
    carNumber: 9,
    team: "Hendrick Motorsports",
    currentLap: 145,
    lastLapTime: "48.234",
    gap: "Leader",
  },
  {
    position: 2,
    driverId: 2,
    name: "Denny Hamlin",
    carNumber: 11,
    team: "Joe Gibbs Racing",
    currentLap: 145,
    lastLapTime: "48.451",
    gap: "+0.217",
  },
  {
    position: 3,
    driverId: 3,
    name: "Kyle Larson",
    carNumber: 5,
    team: "Hendrick Motorsports",
    currentLap: 145,
    lastLapTime: "48.562",
    gap: "+0.328",
  },
  {
    position: 4,
    driverId: 4,
    name: "Ryan Blaney",
    carNumber: 12,
    team: "Team Penske",
    currentLap: 145,
    lastLapTime: "48.721",
    gap: "+0.487",
  },
  {
    position: 5,
    driverId: 5,
    name: "Brad Keselowski",
    carNumber: 6,
    team: "Team Penske",
    currentLap: 144,
    lastLapTime: "48.834",
    gap: "+1.5 Lap",
  },
  {
    position: 6,
    driverId: 6,
    name: "Chris Buescher",
    carNumber: 17,
    team: "RFK Racing",
    currentLap: 144,
    lastLapTime: "49.012",
    gap: "+1.7 Lap",
  },
];
