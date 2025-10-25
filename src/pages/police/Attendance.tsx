import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const PoliceAttendance = () => {
  const navigate = useNavigate();

  const attendanceRecords = [
    { date: "2025-10-25", time: "08:05 AM", location: "Colaba Station", accuracy: "12m", status: "success" },
    { date: "2025-10-24", time: "08:03 AM", location: "Colaba Station", accuracy: "8m", status: "success" },
    { date: "2025-10-23", time: "08:07 AM", location: "Colaba Station", accuracy: "15m", status: "success" },
    { date: "2025-10-22", time: "08:02 AM", location: "Colaba Station", accuracy: "10m", status: "success" },
    { date: "2025-10-21", time: "08:10 AM", location: "Colaba Station", accuracy: "18m", status: "success" },
  ];

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

      <h1 className="text-3xl font-bold mb-8 animate-fade-in">Attendance History</h1>

      <div className="space-y-4">
        {attendanceRecords.map((record, index) => (
          <div 
            key={record.date}
            className="glass-card rounded-xl p-4 animate-fade-in hover:scale-105 transition-transform"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="font-bold">{record.date}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {record.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {record.location}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs px-2 py-1 rounded-full bg-success/20 text-success">
                  ±{record.accuracy}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoliceAttendance;
