export type RaceStatus = "upcoming" | "live" | "completed";

export interface Race {
  id: number;
  name: string;
  track: string;
  location: string;
  date: string;
  laps: number;
  status: RaceStatus;
  description?: string;
}

export const raceSchedule: Race[] = [
  {
    id: 1,
    name: "Daytona 500",
    track: "Daytona International Speedway",
    location: "Daytona Beach, FL",
    date: "2026-02-15",
    laps: 200,
    status: "upcoming",
    description:
      "The most prestigious stock car racing event in the world. The Daytona 500 is held annually and is known for its high speeds and thrilling finishes.",
  },
  {
    id: 2,
    name: "Las Vegas Grand Prix",
    track: "Las Vegas Motor Speedway",
    location: "Las Vegas, NV",
    date: "2026-03-01",
    laps: 267,
    status: "upcoming",
    description:
      "High-speed racing under the bright lights of Las Vegas. This race showcases the cutting-edge technology and precision of modern NASCAR.",
  },
  {
    id: 3,
    name: "Bristol Night Race",
    track: "Bristol Motor Speedway",
    location: "Bristol, TN",
    date: "2026-03-15",
    laps: 500,
    status: "upcoming",
    description:
      "One of the most intense races on the circuit. The Bristol Motor Speedway is known for tight racing and close finishes.",
  },
  {
    id: 4,
    name: "Charlotte 600",
    track: "Charlotte Motor Speedway",
    location: "Concord, NC",
    date: "2026-04-10",
    laps: 400,
    status: "upcoming",
    description:
      "The longest race of the NASCAR season. Charlotte 600 tests endurance and strategy with pit crew performance being critical.",
  },
  {
    id: 5,
    name: "Talladega Super Speedway",
    track: "Talladega Superspeedway",
    location: "Talladega, AL",
    date: "2026-05-02",
    laps: 188,
    status: "upcoming",
    description:
      "One of the fastest racetracks in the world. Talladega is known for drafting and unpredictable finishes that keep fans on edge.",
  },
  {
    id: 6,
    name: "Coca-Cola 600",
    track: "Charlotte Motor Speedway",
    location: "Concord, NC",
    date: "2026-05-24",
    laps: 400,
    status: "upcoming",
    description:
      "Memorial Day Weekend classic. This race has produced some of the most memorable moments in NASCAR history.",
  },
];
