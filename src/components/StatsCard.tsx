import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  delay?: number;
  highlight?: boolean;
}

const StatsCard = ({ icon: Icon, label, value, delay = 0, highlight = false }: StatsCardProps) => {
  return (
    <div
      className={`glass-card rounded-xl p-6 animate-fade-in hover:scale-105 transition-transform ${
        highlight ? "glow-success border-success/20" : ""
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon className={`w-8 h-8 mb-3 ${highlight ? "text-success" : "text-primary"}`} />
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatsCard;
