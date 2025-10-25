import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import DynamicQR from "@/components/DynamicQR";

const PoliceQRID = () => {
  const navigate = useNavigate();
  const [officerName, setOfficerName] = useState("");
  const [badgeId, setBadgeId] = useState("");
  const [rank, setRank] = useState("Police Constable");
  const [station, setStation] = useState("Colaba Police Station");

  useEffect(() => {
    const loggedIn = localStorage.getItem("police_logged_in");
    if (!loggedIn) {
      navigate("/police/login");
      return;
    }
    setOfficerName(localStorage.getItem("officer_name") || "Officer");
    setBadgeId(localStorage.getItem("badge_id") || "XXXX");
  }, [navigate]);

  return (
    <div className="min-h-screen p-6">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/police/dashboard")}
        className="mb-6 animate-fade-in"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 animate-fade-in">Digital ID Card</h1>
        <p className="text-center text-muted-foreground mb-8 animate-fade-in">Show this to citizens for verification</p>

        <div className="glass-card rounded-2xl p-8 animate-scale-in">
          {/* QR Code */}
          <DynamicQR data={{ officerName, badgeId, rank, station }} />

          {/* Officer Details */}
          <div className="mt-8 space-y-3 text-center">
            <div>
              <p className="text-sm text-muted-foreground">Officer Name</p>
              <p className="text-lg font-bold">{officerName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Badge ID</p>
              <p className="text-lg font-bold font-badge">{badgeId}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Rank</p>
              <p className="text-lg font-semibold">{rank}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Station</p>
              <p className="text-lg font-semibold">{station}</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-xs text-center text-muted-foreground">
              ✓ This QR code refreshes every 30 seconds for security
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliceQRID;
