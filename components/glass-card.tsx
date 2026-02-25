import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  image?: string;
  overlay?: boolean;
}

export function GlassCard({
  children,
  className = "",
  onClick,
  image,
  overlay = true,
}: GlassCardProps) {
  return (
    <div
      className={`card-glass ${image ? "relative overflow-hidden" : ""} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          {overlay && <div className="gradient-overlay" />}
        </>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
