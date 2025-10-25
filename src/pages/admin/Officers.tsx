import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminLayout from "@/components/AdminLayout";

const AdminOfficers = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("admin_logged_in");
    if (!loggedIn) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const [searchTerm, setSearchTerm] = useState("");

  const officers = [
    { id: 1, name: "Rajesh Kumar", badgeId: "MP1234", rank: "Inspector", station: "Colaba", status: "Active" },
    { id: 2, name: "Priya Sharma", badgeId: "MP1235", rank: "Sub-Inspector", station: "Marine Drive", status: "Active" },
    { id: 3, name: "Amit Patel", badgeId: "MP1236", rank: "Constable", station: "Colaba", status: "Active" },
    { id: 4, name: "Sunita Desai", badgeId: "MP1237", rank: "Head Constable", station: "Malabar Hill", status: "Active" },
    { id: 5, name: "Vikram Singh", badgeId: "MP1238", rank: "Constable", station: "Tardeo", status: "Inactive" },
  ];

  const filteredOfficers = officers.filter(officer =>
    officer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    officer.badgeId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">Manage Officers</h1>
        
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or badge ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Officer
          </Button>
        </div>
      </div>

      <div className="glass-card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr className="text-left">
                <th className="p-4 font-bold">Name</th>
                <th className="p-4 font-bold">Badge ID</th>
                <th className="p-4 font-bold">Rank</th>
                <th className="p-4 font-bold">Station</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOfficers.map((officer, index) => (
                <tr 
                  key={officer.id} 
                  className="border-b border-border/50 hover:bg-muted/20 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="p-4">{officer.name}</td>
                  <td className="p-4 font-badge">{officer.badgeId}</td>
                  <td className="p-4">{officer.rank}</td>
                  <td className="p-4">{officer.station}</td>
                  <td className="p-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      officer.status === 'Active' 
                        ? 'bg-success/20 text-success' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {officer.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminOfficers;
