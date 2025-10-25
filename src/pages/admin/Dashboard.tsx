import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Users, CheckCircle, Clock, Target, Shield, MapPin, Key, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatsCard from "@/components/StatsCard";
import AdminLayout from "@/components/AdminLayout";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("admin_logged_in");
    if (!loggedIn) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <AdminLayout>
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Mumbai Police Management System</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard icon={Users} label="Total Officers" value="1,245" delay={0} />
        <StatsCard icon={CheckCircle} label="Present Today" value="1,128" delay={100} highlight />
        <StatsCard icon={Clock} label="Pending" value="117" delay={200} />
        <StatsCard icon={Target} label="Avg. Accuracy" value="±10m" delay={300} />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Link to="/admin/officers">
          <div className="glass-card rounded-xl p-6 hover:scale-105 transition-transform cursor-pointer glow-primary">
            <Users className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-bold">Manage Officers</h3>
            <p className="text-sm text-muted-foreground mt-1">Add, edit, view officers</p>
          </div>
        </Link>

        <Link to="/admin/attendance">
          <div className="glass-card rounded-xl p-6 hover:scale-105 transition-transform cursor-pointer glow-success">
            <CheckCircle className="w-8 h-8 text-success mb-3" />
            <h3 className="font-bold">Attendance</h3>
            <p className="text-sm text-muted-foreground mt-1">View reports & logs</p>
          </div>
        </Link>

        <Link to="/admin/stations">
          <div className="glass-card rounded-xl p-6 hover:scale-105 transition-transform cursor-pointer glow-secondary">
            <MapPin className="w-8 h-8 text-secondary mb-3" />
            <h3 className="font-bold">Stations</h3>
            <p className="text-sm text-muted-foreground mt-1">Manage police stations</p>
          </div>
        </Link>

        <div className="glass-card rounded-xl p-6 hover:scale-105 transition-transform cursor-pointer">
          <Key className="w-8 h-8 text-accent mb-3" />
          <h3 className="font-bold">QR Keys</h3>
          <p className="text-sm text-muted-foreground mt-1">Security management</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass-card rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[
            { action: "Officer #MP1234 marked attendance", time: "2 mins ago", status: "success" },
            { action: "New officer profile created", time: "15 mins ago", status: "info" },
            { action: "QR key rotated successfully", time: "1 hour ago", status: "success" },
            { action: "Attendance report exported", time: "2 hours ago", status: "info" },
          ].map((activity, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
              <div className={`w-2 h-2 rounded-full ${activity.status === 'success' ? 'bg-success' : 'bg-primary'}`} />
              <div className="flex-1">
                <p className="text-sm">{activity.action}</p>
              </div>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
