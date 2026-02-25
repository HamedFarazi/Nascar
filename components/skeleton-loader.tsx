export function SkeletonLoader() {
  return (
    <div className="card-glass">
      <div className="space-y-4">
        <div className="h-40 bg-white/10 rounded-lg animate-pulse" />
        <div className="h-6 bg-white/10 rounded-lg w-3/4 animate-pulse" />
        <div className="h-4 bg-white/10 rounded-lg w-1/2 animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 bg-white/10 rounded-lg animate-pulse" />
          <div className="h-4 bg-white/10 rounded-lg w-5/6 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 3 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonLoader key={i} />
      ))}
    </div>
  );
}
