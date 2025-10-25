import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Download, Calendar, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminLayout from "@/components/AdminLayout";

const AdminAttendance = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("admin_logged_in");
    if (!loggedIn) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const attendanceData = [
    { officer: "Rajesh Kumar", badgeId: "MP1234", date: "2025-10-25", time: "08:05 AM", status: "Present", accuracy: "12m" },
    { officer: "Priya Sharma", badgeId: "MP1235", date: "2025-10-25", time: "08:03 AM", status: "Present", accuracy: "8m" },
    { officer: "Amit Patel", badgeId: "MP1236", date: "2025-10-25", time: "-", status: "Absent", accuracy: "-" },
    { officer: "Sunita Desai", badgeId: "MP1237", date: "2025-10-25", time: "08:07 AM", status: "Present", accuracy: "15m" },
    { officer: "Vikram Singh", badgeId: "MP1238", date: "2025-10-25", time: "08:10 AM", status: "Present", accuracy: "10m" },
  ];

  return (
    <AdminLayout>
      <div className="mb-8 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Attendance Reports</h1>
            <p className="text-muted-foreground">Track officer attendance and punctuality</p>
          </div>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>

        <div className="flex gap-4 mb-6">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Today
          </Button>
          <Button variant="outline">This Week</Button>
          <Button variant="outline">This Month</Button>
        </div>
      </div>

      <div className="glass-card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr className="text-left">
                <th className="p-4 font-bold">Officer</th>
                <th className="p-4 font-bold">Badge ID</th>
                <th className="p-4 font-bold">Date</th>
                <th className="p-4 font-bold">Time</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold">Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record, index) => (
                <tr 
                  key={index} 
                  className="border-b border-border/50 hover:bg-muted/20 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="p-4">{record.officer}</td>
                  <td className="p-4 font-badge">{record.badgeId}</td>
                  <td className="p-4">{record.date}</td>
                  <td className="p-4">{record.time}</td>
                  <td className="p-4">
                    <span className={`flex items-center gap-2 text-xs px-2 py-1 rounded-full w-fit ${
                      record.status === 'Present' 
                        ? 'bg-success/20 text-success' 
                        : 'bg-destructive/20 text-destructive'
                    }`}>
                      {record.status === 'Present' ? (
                        <CheckCircle className="w-3 h-3" />
                      ) : (
                        <XCircle className="w-3 h-3" />
                      )}
                      {record.status}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">±{record.accuracy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAttendance;
