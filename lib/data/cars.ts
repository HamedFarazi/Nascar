export interface Car {
  name: string;
  year: number;
  horsepower: number;
  topSpeed: number;
  acceleration: string;
  engine: string;
  specs: {
    weight: string;
    length: string;
    width: string;
    height: string;
    wheelbase: string;
  };
}

export const nextGenCar: Car = {
  name: "NASCAR Next Gen Car",
  year: 2022,
  horsepower: 550,
  topSpeed: 200,
  acceleration: "0-100 mph in ~4.2 seconds",
  engine: "5.8L EFI V8",
  specs: {
    weight: "3,255 lbs",
    length: "203 inches",
    width: "76.3 inches",
    height: "51 inches",
    wheelbase: "115 inches",
  },
};
