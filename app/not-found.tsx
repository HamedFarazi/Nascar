import Link from "next/link";
import { GlassCard } from "@/components/glass-card";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center pt-24 px-4">
      <GlassCard className="p-12 max-w-md text-center">
        <div className="text-8xl font-black text-red-500 mb-6">404</div>
        <h1 className="text-4xl font-black text-white mb-4">
          Track Not Found
        </h1>
        <p className="text-gray-300 mb-8 text-lg">
          Looks like you've taken a wrong turn. This page doesn't exist on the
          racing circuit.
        </p>

        <Link
          href="/"
          className="inline-block btn-racing"
        >
          Return to Pit Lane
        </Link>
      </GlassCard>
    </div>
  );
}
