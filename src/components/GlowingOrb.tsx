import { CheckCircle } from "lucide-react";

interface GlowingOrbProps {
  status: "inactive" | "active" | "marked";
  onTap: () => void;
}

const GlowingOrb = ({ status, onTap }: GlowingOrbProps) => {
  const getOrbStyles = () => {
    switch (status) {
      case "marked":
        return "bg-gradient-to-br from-success to-success/60 glow-success cursor-default";
      case "active":
        return "bg-gradient-to-br from-primary to-primary/60 glow-primary animate-pulse-glow cursor-pointer hover:scale-110";
      default:
        return "bg-gradient-to-br from-muted to-muted/60 cursor-default";
    }
  };

  return (
    <button
      onClick={status === "active" ? onTap : undefined}
      disabled={status !== "active"}
      className={`relative w-64 h-64 rounded-full transition-all duration-300 ${getOrbStyles()}`}
    >
      {status === "marked" ? (
        <CheckCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-white animate-scale-in" />
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-white text-xl font-bold">
            {status === "active" ? "Tap to Mark" : "Attendance"}
          </p>
        </div>
      )}
    </button>
  );
};

export default GlowingOrb;
