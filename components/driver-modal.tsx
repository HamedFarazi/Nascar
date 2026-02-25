import { useEffect } from "react";
import { X, Trophy } from "lucide-react";

interface Driver {
  id: number;
  name: string;
  number: number;
  team: string;
  wins: number;
  championships: number;
  image: string;
  bio?: string;
  pointsLeader?: boolean;
}

interface DriverModalProps {
  driver: Driver;
  isOpen: boolean;
  onClose: () => void;
}

export function DriverModal({ driver, isOpen, onClose }: DriverModalProps) {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in-up"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl glass rounded-2xl overflow-hidden animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 text-white"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row gap-8 p-8">
          {/* Driver Image */}
          <div className="flex-shrink-0 w-full md:w-64">
            <div className="relative overflow-hidden rounded-xl h-80 md:h-96">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${driver.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Car Number Badge */}
              <div className="absolute bottom-4 left-4 bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-black text-2xl shadow-lg shadow-red-500/50">
                #{driver.number}
              </div>
            </div>
          </div>

          {/* Driver Info */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Header */}
            <div>
              <h2 className="text-4xl font-black text-white mb-2">
                {driver.name}
              </h2>
              <p className="text-lg text-red-400 font-bold uppercase tracking-wide">
                {driver.team}
              </p>

              {/* Status Badge */}
              {driver.pointsLeader && (
                <div className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-red-500/20 px-4 py-2 rounded-full border border-yellow-500/30">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-bold text-yellow-400">
                    Points Leader
                  </span>
                </div>
              )}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 my-8 pt-8 border-t border-white/20">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                  Wins
                </p>
                <p className="text-3xl font-black text-red-500">{driver.wins}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                  Championships
                </p>
                <p className="text-3xl font-black text-white">
                  {driver.championships}
                </p>
              </div>
            </div>

            {/* Bio */}
            {driver.bio && (
              <div className="pt-8 border-t border-white/20">
                <p className="text-gray-300 leading-relaxed">
                  {driver.bio}
                </p>
              </div>
            )}

            {/* Action Button */}
            <button
              onClick={onClose}
              className="mt-8 w-full btn-racing"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
