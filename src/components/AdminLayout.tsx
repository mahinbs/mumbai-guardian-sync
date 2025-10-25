import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, CheckCircle, MapPin, LogOut } from "lucide-react";
import { Button } from "./ui/button";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin_logged_in");
    navigate("/admin/login");
  };

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
    { icon: Users, label: "Officers", path: "/admin/officers" },
    { icon: CheckCircle, label: "Attendance", path: "/admin/attendance" },
    { icon: MapPin, label: "Stations", path: "/admin/stations" },
  ];

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 glass-card border-r border-border p-6 hidden lg:block">
        <div className="mb-8">
          <h2 className="text-xl font-bold">Admin Portal</h2>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors">
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </div>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-destructive/10 transition-colors w-full text-left"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default AdminLayout;
