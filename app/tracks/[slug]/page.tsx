import { notFound } from "next/navigation";
import { GlassCard } from "@/components/glass-card";
import { StatsGrid } from "@/components/stats-grid";
import { tracks } from "@/lib/data/tracks";

interface TrackDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tracks.map((track) => ({
    slug: track.slug,
  }));
}

export async function generateMetadata(props: TrackDetailPageProps) {
  const params = await props.params;
  const track = tracks.find((t) => t.slug === params.slug);

  if (!track) {
    return {
      title: "Track Not Found",
    };
  }

  return {
    title: `${track.name} - NASCAR`,
    description: track.description,
  };
}

export default async function TrackDetailPage(props: TrackDetailPageProps) {
  const params = await props.params;
  const track = tracks.find((t) => t.slug === params.slug);

  if (!track) {
    notFound();
  }

  const stats = [
    { label: "Track Length", value: track.length },
    { label: "Type", value: track.type },
    { label: "Year Opened", value: track.yearOpened },
    { label: "Capacity", value: track.capacity.toLocaleString() },
    { label: "Record Speed", value: `${track.recordSpeed} mph` },
    { label: "Location", value: track.location },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      {/* Hero Banner */}
      <div className="relative h-96 w-full overflow-hidden mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${track.image})` }}
        />
        <div className="gradient-overlay" />

        {/* Floating Info Card */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 w-11/12 max-w-2xl">
          <GlassCard className="p-8">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
              {track.name}
            </h1>
            <p className="text-lg text-gray-200">{track.description}</p>
          </GlassCard>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        {/* Stats Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-foreground mb-8">
            Track Details
          </h2>
          <StatsGrid stats={stats} />
        </div>

        {/* History Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <GlassCard className="p-8 h-full">
              <h2 className="text-3xl font-black text-white mb-6">History</h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                {track.history}
              </p>

              <div className="space-y-4 pt-6 border-t border-white/20">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Track Type
                  </h3>
                  <p className="text-gray-400">{track.type}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Established
                  </h3>
                  <p className="text-gray-400">
                    This legendary track has been racing since {track.yearOpened}
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Quick Facts */}
          <GlassCard className="p-8 h-fit">
            <h3 className="text-2xl font-black text-white mb-6">Quick Facts</h3>

            <div className="space-y-6">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                  Length
                </p>
                <p className="text-2xl font-bold text-red-500">
                  {track.length}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                  Capacity
                </p>
                <p className="text-2xl font-bold text-white">
                  {track.capacity.toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                  Record Speed
                </p>
                <p className="text-2xl font-bold text-white">
                  {track.recordSpeed} mph
                </p>
              </div>

              <div className="pt-4 border-t border-white/20">
                <a
                  href={`/tracks`}
                  className="block w-full text-center py-3 rounded-lg bg-red-500 text-white font-bold hover:bg-red-600 transition-colors"
                >
                  Back to Tracks
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
