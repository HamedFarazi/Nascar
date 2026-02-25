interface Stat {
  label: string;
  value: string | number;
}

interface StatsGridProps {
  stats: Stat[];
  className?: string;
}

export function StatsGrid({ stats, className = "" }: StatsGridProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="glass p-6 text-center hover:glow-sm transition-all"
        >
          <div className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
            {stat.label}
          </div>
          <div className="text-3xl font-black text-white">{stat.value}</div>
        </div>
      ))}
    </div>
  );
}
