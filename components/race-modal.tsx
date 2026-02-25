import { useEffect } from "react";
import { X } from "lucide-react";
import { StatusBadge } from "@/components/status-badge";
import type { Race } from "@/lib/data/schedule";

interface RaceModalProps {
  race: Race;
  isOpen: boolean;
  onClose: () => void;
}

export function RaceModal({ race, isOpen, onClose }: RaceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in-up"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl glass rounded-2xl overflow-hidden animate-fade-in-up max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 text-white"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-4xl font-black text-white">{race.name}</h2>
              <StatusBadge status={race.status} />
            </div>
            <p className="text-lg text-red-400 font-bold uppercase tracking-wide">
              {race.track}
            </p>
          </div>

          {/* Grid Information */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b border-white/20">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                Date
              </p>
              <p className="text-white font-bold">{formatDate(race.date)}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                Location
              </p>
              <p className="text-white font-bold">{race.location}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                Laps
              </p>
              <p className="text-white font-bold text-xl">{race.laps}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                Distance
              </p>
              <p className="text-white font-bold">
                {(race.laps * 2.5).toFixed(0)} mi
              </p>
            </div>
          </div>

          {/* Description */}
          {race.description && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">About This Race</h3>
              <p className="text-gray-300 leading-relaxed">
                {race.description}
              </p>
            </div>
          )}

          {/* Action Button */}
          <button
            onClick={onClose}
            className="w-full btn-racing"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
