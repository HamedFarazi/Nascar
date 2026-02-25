# NASCAR Premium Web Application

A stunning, high-performance NASCAR web application built with Next.js 16, TypeScript, Tailwind CSS, and glassmorphism design patterns.

## Features

### 🎨 Design System
- **Glassmorphism UI**: Frosted glass effects with backdrop blur and transparency
- **Dark/Light Mode**: Smooth theme switching with next-themes
- **Racing Aesthetic**: Bold red accents (#ef4444), charcoal blacks, and pure whites
- **Responsive Design**: Mobile-first approach with responsive grids and typography
- **Smooth Animations**: Hover effects, scale transitions, and glow shadows

### 📄 Pages

#### Home Page
- Full-width hero section with racing imagery and dark gradient overlay
- Bold "Experience the Speed of NASCAR" headline
- Featured tracks showcase in glassmorphism cards
- Features section highlighting key NASCAR experiences
- Call-to-action sections with gradient buttons

#### Tracks Page
- Grid layout displaying all NASCAR tracks
- Track cards with:
  - Background images with overlay
  - Glass effect content boxes
  - Track details (length, type, capacity, year opened)
  - Hover animations and glow effects
- Click navigation to track detail pages

#### Track Detail Page
- Large banner image with gradient fade
- Floating glass info panel
- Comprehensive stats grid
- Historical information
- Quick facts sidebar
- Record speeds and venue capacity
- Dynamic routing with [slug] parameters

#### Drivers Page
- Interactive driver cards with glass design
- Search functionality by name or number
- Team filter dropdown
- Live filtering with smooth transitions
- Driver stats (wins, championships)
- Points leader badge system
- Responsive grid layout

#### Cars Page
- Next Gen car showcase
- Performance specifications
- Technical features section
- Full specifications grid
- Key innovations highlighted
- Stats cards with accent colors
- Timeline and generation info

### 🧩 Reusable Components

- **GlassCard**: Versatile glassmorphism card component with optional images and overlays
- **RacingButton**: CTA button with gradient racing aesthetic and hover states
- **HeroSection**: Full-width hero with background image, overlay, and CTA
- **Navbar**: Fixed navigation with logo, links, and theme toggle
- **SkeletonLoader**: Loading state placeholders with animated glass design
- **StatsGrid**: Flexible stats display in responsive grid layout

### 🛠 Technical Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS v4** - Utility-first styling
- **next-themes** - Dark/light mode management
- **lucide-react** - Icon library
- **Mock Data** - JSON-based driver, track, and car data

### 📁 Project Structure

```
app/
├── page.tsx                 # Home page
├── layout.tsx              # Root layout with theme provider
├── globals.css             # Global styles and design tokens
├── tracks/
│   ├── page.tsx            # Tracks listing
│   └── [slug]/
│       ├── page.tsx        # Track detail page
│       └── loading.tsx     # Loading skeleton
├── drivers/
│   └── page.tsx            # Drivers with search & filter
├── cars/
│   └── page.tsx            # Next Gen car showcase
└── not-found.tsx           # 404 page

components/
├── navbar.tsx              # Navigation bar
├── glass-card.tsx          # Glassmorphism card
├── racing-button.tsx       # CTA button
├── hero-section.tsx        # Hero section
├── stats-grid.tsx          # Stats display
└── skeleton-loader.tsx     # Loading placeholders

lib/
└── data/
    ├── tracks.ts           # Track data and interfaces
    ├── drivers.ts          # Driver data and interfaces
    └── cars.ts             # Car data and interfaces
```

### 🎯 Design Tokens

**Colors:**
- Primary: Racing Red (#ef4444)
- Background: Near Black (oklch 0.07)
- Foreground: Near White (oklch 0.96)
- Glass: White 10% opacity with backdrop blur

**Typography:**
- Hero Title: 5xl-6xl, font-black
- Section Title: 4xl-5xl, font-black
- Body: lg, text-balance
- Tracking: Wide on labels

**Effects:**
- Glassmorphism: bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl
- Glow: shadow-lg shadow-red-500/50
- Scale: hover:scale-105 with transition-all

## Getting Started

### Installation

```bash
pnpm install
# or
npm install
# or
yarn install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
pnpm build
pnpm start
```

## Performance Highlights

- **SSG for Dynamic Routes**: Track detail pages are pre-generated for instant loading
- **Smooth Animations**: Optimized CSS transitions and hover states
- **Responsive Images**: Background images scale efficiently across devices
- **Glass Effects**: Backdrop-blur optimized for performance
- **Component Reusability**: DRY principle with shared component patterns

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- Driver statistics dashboard
- Track records and statistics
- Live race updates
- Driver profiles with detailed stats
- Merchandise section
- News and blog
- User accounts and favorites
- Comment and rating system

## License

This project is open source and available for portfolio use.

---

**Built with ❤️ for NASCAR fans and frontend enthusiasts.**
