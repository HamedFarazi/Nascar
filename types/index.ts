export interface Track {
  id: string;
  name: string;
  location: string;
  length: number; // miles
  type: "Oval" | "Superspeedway" | "Road Course";
  yearOpened: number;
  image: string;
  slug: string;
  description: string;
  history: string;
}

export interface Driver {
  id: string;
  name: string;
  team: string;
  carNumber: number;
  wins: number;
  image: string;
  points: number;
}

export interface Car {
  id: string;
  name: string;
  year: number;
  horsepower: number;
  topSpeed: number;
  weight: number;
  engine: string;
  acceleration: string;
  image: string;
  specs: {
    label: string;
    value: string;
  }[];
}
