export function LiveBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-500 text-sm font-bold uppercase tracking-widest">
      <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse" />
      Live
    </div>
  );
}
