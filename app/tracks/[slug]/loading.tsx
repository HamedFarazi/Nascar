import { SkeletonGrid } from "@/components/skeleton-loader";
import { GlassCard } from "@/components/glass-card";

export default function TrackLoading() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      {/* Hero Banner Skeleton */}
      <div className="h-96 bg-white/10 mb-12 rounded-2xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        {/* Stats Grid */}
        <div className="mb-16">
          <div className="h-10 bg-white/10 rounded-lg w-40 mb-8 animate-pulse" />
          <SkeletonGrid count={6} />
        </div>

        {/* History Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <GlassCard className="p-8 space-y-4">
              <div className="h-8 bg-white/10 rounded-lg w-32 animate-pulse" />
              <div className="space-y-3">
                <div className="h-4 bg-white/10 rounded-lg animate-pulse" />
                <div className="h-4 bg-white/10 rounded-lg animate-pulse" />
                <div className="h-4 bg-white/10 rounded-lg w-5/6 animate-pulse" />
              </div>
            </GlassCard>
          </div>

          <div className="h-96 bg-white/10 rounded-2xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}
