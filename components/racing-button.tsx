import Link from "next/link";
import { ReactNode } from "react";

interface RacingButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
}

export function RacingButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: RacingButtonProps) {
  const baseClass =
    variant === "primary"
      ? "btn-racing"
      : "btn-racing-outline";

  if (href) {
    return (
      <Link href={href} className={`inline-block ${baseClass} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${className}`}
    >
      {children}
    </button>
  );
}
