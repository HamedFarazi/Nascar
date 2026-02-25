export interface Track {
  id: string;
  slug: string;
  name: string;
  location: string;
  length: string;
  type: "Oval" | "Superspeedway" | "Road Course";
  yearOpened: number;
  image: string;
  description: string;
  history: string;
  capacity: number;
  recordSpeed: number;
}

export const tracks: Track[] = [
  {
    id: "1",
    slug: "daytona",
    name: "Daytona International Speedway",
    location: "Daytona Beach, Florida",
    length: "2.5 miles",
    type: "Superspeedway",
    yearOpened: 1959,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    description: "The Most Famous Race Track in the World",
    history:
      "Home to the legendary Daytona 500, this 2.5-mile superspeedway opened in 1959 and has been the crown jewel of motorsports ever since. Known for its high-speed racing and intense competition.",
    capacity: 101915,
    recordSpeed: 210.2,
  },
  {
    id: "2",
    slug: "talladega",
    name: "Talladega Superspeedway",
    location: "Talladega, Alabama",
    length: "2.66 miles",
    type: "Superspeedway",
    yearOpened: 1969,
    image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&h=600&fit=crop",
    description: "The Fastest Track on the NASCAR Circuit",
    history:
      "Talladega Superspeedway is the fastest track on the NASCAR circuit. Its high banked turns and long straightaways create some of the most competitive racing in the sport.",
    capacity: 100000,
    recordSpeed: 212.809,
  },
  {
    id: "3",
    slug: "charlotte",
    name: "Charlotte Motor Speedway",
    location: "Concord, North Carolina",
    length: "1.5 miles",
    type: "Oval",
    yearOpened: 1960,
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=600&fit=crop",
    description: "America's Home for Racing",
    history:
      "Charlotte Motor Speedway has evolved into one of NASCAR's most important venues. Hosting two premier NASCAR races annually, it combines speed with precision driving.",
    capacity: 110000,
    recordSpeed: 205.034,
  },
];
