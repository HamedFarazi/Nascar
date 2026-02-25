export interface Driver {
  id: string;
  slug: string;
  name: string;
  number: number;
  team: string;
  image: string;
  wins: number;
  championships: number;
  pointsLeader: boolean;
}

export const drivers: Driver[] = [
  {
    id: "1",
    slug: "chase-elliott",
    name: "Chase Elliott",
    number: 9,
    team: "Hendrick Motorsports",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    wins: 18,
    championships: 1,
    pointsLeader: true,
  },
  {
    id: "2",
    slug: "denny-hamlin",
    name: "Denny Hamlin",
    number: 11,
    team: "Joe Gibbs Racing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    wins: 53,
    championships: 0,
    pointsLeader: false,
  },
  {
    id: "3",
    slug: "joey-logano",
    name: "Joey Logano",
    number: 22,
    team: "Team Penske",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    wins: 35,
    championships: 3,
    pointsLeader: false,
  },
  {
    id: "4",
    slug: "kyle-larson",
    name: "Kyle Larson",
    number: 5,
    team: "Hendrick Motorsports",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    wins: 45,
    championships: 1,
    pointsLeader: false,
  },
  {
    id: "5",
    slug: "ryan-blaney",
    name: "Ryan Blaney",
    number: 12,
    team: "Team Penske",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    wins: 7,
    championships: 0,
    pointsLeader: false,
  },
  {
    id: "6",
    slug: "chris-buescher",
    name: "Chris Buescher",
    number: 17,
    team: "Roush Fenway Racing",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    wins: 3,
    championships: 0,
    pointsLeader: false,
  },
];
