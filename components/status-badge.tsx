import type { RaceStatus } from "@/lib/data/schedule";

interface StatusBadgeProps {
  status: RaceStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusConfig = {
    upcoming: {
      bg: "bg-green-500/20",
      text: "text-green-400",
      label: "Upcoming",
      icon: "●",
    },
    live: {
      bg: "bg-yellow-500/20",
      text: "text-yellow-400",
      label: "Live",
      icon: "●",
      animation: "animate-pulse",
    },
    completed: {
      bg: "bg-blue-500/20",
      text: "text-blue-400",
      label: "Completed",
      icon: "✓",
    },
  };

  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text} ${config.animation || ""}`}
    >
      <span className={config.icon === "●" ? config.animation ? "animate-pulse" : "" : ""}>
        {config.icon}
      </span>
      {config.label}
    </span>
  );
}
