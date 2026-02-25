import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { GlassCard } from "@/components/glass-card";
import { RaceScheduleSection } from "@/components/race-schedule-section";
import { LiveLeaderboardSection } from "@/components/live-leaderboard-section";
import { tracks } from "@/lib/data/tracks";

export default function Home() {
  const featuredTracks = tracks.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        title="Experience the Speed of NASCAR"
        description="Dive into the world of high-octane racing, legendary drivers, and the ultimate test of automotive performance."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop"
        ctaText="Explore Tracks"
        ctaHref="/tracks"
      />

      {/* Featured Tracks Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-foreground mb-4">
              Featured Tracks
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover the most iconic racing venues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTracks.map((track) => (
              <Link key={track.id} href={`/tracks/${track.slug}`}>
                <GlassCard
                  image={track.image}
                  overlay
                  className="h-80 hover:scale-105"
                >
                  <div className="h-full flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-black text-white mb-2">
                      {track.name}
                    </h3>
                    <p className="text-gray-200 text-sm mb-4">
                      {track.location}
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">
                          Length
                        </p>
                        <p className="text-lg font-bold text-white">
                          {track.length}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">
                          Type
                        </p>
                        <p className="text-lg font-bold text-red-500">
                          {track.type}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tracks"
              className="inline-block btn-racing"
            >
              View All Tracks
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-foreground mb-12 text-center">
            Experience NASCAR
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Legendary Drivers",
                description:
                  "Meet the most talented drivers in motorsports pushing their limits on every lap.",
                icon: "👤",
                href: "/drivers",
              },
              {
                title: "Iconic Tracks",
                description:
                  "From Daytona to Talladega, experience the most challenging racing circuits.",
                icon: "🏁",
                href: "/tracks",
              },
              {
                title: "Next Gen Performance",
                description:
                  "Discover the cutting-edge technology behind modern NASCAR racing cars.",
                icon: "⚡",
                href: "/cars",
              },
            ].map((feature, index) => (
              <Link key={index} href={feature.href}>
                <GlassCard className="p-8 h-full cursor-pointer transition-all duration-300 group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Race Schedule */}
      <RaceScheduleSection />

      {/* Live Leaderboard */}
      <LiveLeaderboardSection />

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-racing opacity-10" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="section-title text-foreground mb-6">
            Ready for Maximum Speed?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Explore everything NASCAR has to offer. From drivers to cars to
            legendary tracks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tracks" className="btn-racing">
              Browse Tracks
            </Link>
            <Link href="/drivers" className="btn-racing-outline">
              View Drivers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
