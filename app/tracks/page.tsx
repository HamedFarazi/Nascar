import Link from "next/link";
import { GlassCard } from "@/components/glass-card";
import { tracks } from "@/lib/data/tracks";

export default function TracksPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title text-foreground mb-4">
            NASCAR Tracks
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most iconic racing circuits where legends are made and
            history is written at breathtaking speeds.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <Link key={track.id} href={`/tracks/${track.slug}`}>
              <GlassCard
                image={track.image}
                overlay
                className="h-96 hover:scale-105"
              >
                <div className="h-full flex flex-col justify-end p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
                      {track.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2">
                    {track.name}
                  </h3>
                  <p className="text-gray-200 text-sm mb-6">
                    {track.location}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/20">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400 uppercase tracking-wide">
                        Track Length
                      </span>
                      <span className="text-lg font-bold text-white">
                        {track.length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400 uppercase tracking-wide">
                        Opened
                      </span>
                      <span className="text-lg font-bold text-red-500">
                        {track.yearOpened}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400 uppercase tracking-wide">
                        Capacity
                      </span>
                      <span className="text-lg font-bold text-white">
                        {track.capacity.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
