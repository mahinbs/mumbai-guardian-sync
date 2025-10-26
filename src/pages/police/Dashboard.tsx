import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shield, QrCode, Clock, MapPin, Flame, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import GlowingOrb from "@/components/GlowingOrb";
import StatsCard from "@/components/StatsCard";
import MobileContainer from "@/components/MobileContainer";

const PoliceDashboard = () => {
  const navigate = useNavigate();
  const [officerName, setOfficerName] = useState("");
  const [badgeId, setBadgeId] = useState("");
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("police_logged_in");
    if (!loggedIn) {
      navigate("/police/login");
      return;
    }
    setOfficerName(localStorage.getItem("officer_name") || "Officer");
    setBadgeId(localStorage.getItem("badge_id") || "XXXX");
    setAttendanceMarked(localStorage.getItem("attendance_today") === "true");
  }, [navigate]);

  const handleAttendance = () => {
    setAttendanceMarked(true);
    localStorage.setItem("attendance_today", "true");
    toast.success("Attendance marked successfully!", {
      description: "GPS location verified",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("police_logged_in");
    navigate("/police/login");
  };

  return (
    <MobileContainer>
      <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold">{officerName}</h1>
          <p className="text-muted-foreground font-badge">Badge #{badgeId}</p>
        </div>
        <Button variant="outline" size="icon" onClick={handleLogout}>
          <LogOut className="w-4 h-4" />
        </Button>
      </div>

      {/* Attendance Orb */}
      <div className="flex justify-center mb-12">
        <GlowingOrb 
          status={attendanceMarked ? "marked" : "active"} 
          onTap={handleAttendance}
        />
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 gap-4 mb-8">
        <StatsCard
          icon={Clock}
          label="Current Shift"
          value="08:00 - 16:00"
          delay={0}
        />
        <StatsCard
          icon={MapPin}
          label="Duty Post"
          value="Colaba Station"
          delay={100}
        />
        <StatsCard
          icon={Flame}
          label="Streak"
          value="15 Days"
          delay={200}
          highlight
        />
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 gap-4">
        <Link to="/police/qr-id">
          <div className="glass-card rounded-xl p-6 hover:scale-105 transition-transform cursor-pointer glow-primary">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <QrCode className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">View QR ID</h3>
                <p className="text-sm text-muted-foreground">Dynamic identity verification</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/police/attendance">
          <div className="glass-card rounded-xl p-6 hover:scale-105 transition-transform cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold">Attendance History</h3>
                <p className="text-sm text-muted-foreground">View past records</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
    </MobileContainer>
  );
};

export default PoliceDashboard;
