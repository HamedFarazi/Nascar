import { GlassCard } from "@/components/glass-card";
import { StatsGrid } from "@/components/stats-grid";
import { nextGenCar } from "@/lib/data/cars";
import { Zap, Gauge, Car } from "lucide-react";

export default function CarsPage() {
  const performanceStats = [
    { label: "Horsepower", value: `${nextGenCar.horsepower} HP` },
    { label: "Top Speed", value: `${nextGenCar.topSpeed} mph` },
    { label: "Engine", value: nextGenCar.engine },
  ];

  const specsArray = [
    { label: "Weight", value: nextGenCar.specs.weight },
    { label: "Length", value: nextGenCar.specs.length },
    { label: "Width", value: nextGenCar.specs.width },
    { label: "Height", value: nextGenCar.specs.height },
    { label: "Wheelbase", value: nextGenCar.specs.wheelbase },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/80" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <div className="max-w-3xl">
            <h1 className="hero-title text-white mb-6">
              NASCAR Next Gen Car
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              The cutting-edge race car engineered for maximum performance,
              featuring state-of-the-art technology and precision engineering.
            </p>

            <div className="inline-block bg-gradient-racing text-white px-6 py-2 rounded-full font-bold">
              Introduced {nextGenCar.year}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Performance Specs */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-foreground mb-8">
            Performance Specs
          </h2>
          <StatsGrid stats={performanceStats} />
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <GlassCard className="p-8">
            <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-red-500/20 mb-6">
              <Zap className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Acceleration
            </h3>
            <p className="text-gray-300 mb-4">{nextGenCar.acceleration}</p>
            <p className="text-sm text-gray-400">
              Lightning-fast acceleration from 0 to 100 mph
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-red-500/20 mb-6">
              <Gauge className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Top Speed
            </h3>
            <p className="text-gray-300 mb-4">{nextGenCar.topSpeed} mph</p>
            <p className="text-sm text-gray-400">
              Capable of sustained high-speed performance
            </p>
          </GlassCard>

          <GlassCard className="p-8">
  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-red-500/20 mb-6">
    <Car className="w-8 h-8 text-red-500" />
  </div>
  <h3 className="text-2xl font-bold text-white mb-4">Engine</h3>
  <p className="text-gray-300 mb-4">{nextGenCar.engine}</p>
  <p className="text-sm text-gray-400">
    Produces {nextGenCar.horsepower} HP of raw power
  </p>
</GlassCard>
        </div>

        {/* Full Specifications */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Specs Grid */}
          <div>
            <h2 className="text-3xl font-black text-foreground mb-8">
              Full Specifications
            </h2>
            <StatsGrid stats={specsArray} className="h-full" />
          </div>

          {/* Technical Details */}
          <GlassCard className="p-8">
            <h3 className="text-3xl font-black text-white mb-8">
              Technical Innovation
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-red-500 mb-2 uppercase tracking-wide">
                  Aerodynamics
                </h4>
                <p className="text-gray-300">
                  Optimized body design for minimal drag and maximum downforce,
                  enabling superior handling and stability.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-red-500 mb-2 uppercase tracking-wide">
                  Suspension
                </h4>
                <p className="text-gray-300">
                  Advanced independent suspension system with precision-tuned
                  components for optimal cornering and braking.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-red-500 mb-2 uppercase tracking-wide">
                  Powertrain
                </h4>
                <p className="text-gray-300">
                  Race-engineered 5.8L EFI V8 engine producing {nextGenCar.horsepower} HP,
                  delivering incredible acceleration and power.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-red-500 mb-2 uppercase tracking-wide">
                  Braking System
                </h4>
                <p className="text-gray-300">
                  High-performance braking system with fade-resistant
                  components for consistent stopping power in extreme
                  conditions.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-red-500 mb-2 uppercase tracking-wide">
                  Safety Features
                </h4>
                <p className="text-gray-300">
                  State-of-the-art safety cage, fire suppression system, and
                  impact-absorbing structures protecting drivers at all speeds.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Timeline */}
        <GlassCard className="p-8 mb-16">
          <h3 className="text-3xl font-black text-white mb-8">Generation</h3>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-racing flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-black">{nextGenCar.year}</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Next Gen Era</h4>
                <p className="text-gray-400">
                  The Next Gen car was introduced in 2022, representing a
                  revolutionary shift in NASCAR technology with new
                  aerodynamics, suspension, and powertrain innovations.
                </p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
