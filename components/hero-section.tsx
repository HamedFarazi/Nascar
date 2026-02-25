import { ReactNode } from "react";
import { RacingButton } from "./racing-button";

interface HeroSectionProps {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
  children?: ReactNode;
}

export function HeroSection({
  title,
  description,
  image,
  ctaText,
  ctaHref,
  ctaOnClick,
  children,
}: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark Gradient Overlay */}
      <div className="gradient-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-title text-white mb-6">{title}</h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          {children && <div className="mb-8">{children}</div>}

          <RacingButton href={ctaHref} onClick={ctaOnClick}>
            {ctaText}
          </RacingButton>
        </div>
      </div>
    </section>
  );
}
