import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Phone, Plus, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminLayout from "@/components/AdminLayout";

const AdminStations = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("admin_logged_in");
    if (!loggedIn) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const stations = [
    { name: "Colaba Police Station", address: "Colaba, Mumbai", officers: 45, phone: "022-22150505" },
    { name: "Cuffe Parade Police Station", address: "Cuffe Parade, Mumbai", officers: 38, phone: "022-22184444" },
    { name: "Marine Drive Police Station", address: "Marine Drive, Mumbai", officers: 52, phone: "022-22025555" },
    { name: "Malabar Hill Police Station", address: "Malabar Hill, Mumbai", officers: 41, phone: "022-23643333" },
    { name: "Tardeo Police Station", address: "Tardeo, Mumbai", officers: 48, phone: "022-23518888" },
  ];

  return (
    <AdminLayout>
      <div className="mb-8 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Police Stations</h1>
            <p className="text-muted-foreground">Manage station information</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Station
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {stations.map((station, index) => (
          <div 
            key={station.name}
            className="glass-card rounded-xl p-6 hover:scale-105 transition-transform animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{station.name}</h3>
                  <p className="text-sm text-muted-foreground">{station.address}</p>
                </div>
              </div>
              <Button size="sm" variant="outline">
                <Edit className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground">Officers</p>
                <p className="text-xl font-bold">{station.officers}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-semibold flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  {station.phone}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminStations;
