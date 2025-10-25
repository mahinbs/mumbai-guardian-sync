import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const CitizenNearby = () => {
  const navigate = useNavigate();

  const stations = [
    { name: "Colaba Police Station", distance: "1.2 km", phone: "022-22150505", lat: 18.9067, lng: 72.8147 },
    { name: "Cuffe Parade Police Station", distance: "2.5 km", phone: "022-22184444", lat: 18.9144, lng: 72.8120 },
    { name: "Marine Drive Police Station", distance: "3.8 km", phone: "022-22025555", lat: 18.9432, lng: 72.8236 },
    { name: "Malabar Hill Police Station", distance: "4.2 km", phone: "022-23643333", lat: 18.9474, lng: 72.7984 },
    { name: "Tardeo Police Station", distance: "5.1 km", phone: "022-23518888", lat: 18.9689, lng: 72.8177 },
  ];

  return (
    <div className="min-h-screen p-6">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/citizen/home")}
        className="mb-6 animate-fade-in"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <h1 className="text-3xl font-bold mb-2 animate-fade-in">Nearby Police Stations</h1>
      <p className="text-muted-foreground mb-8 animate-fade-in">Find the nearest police station</p>

      <div className="space-y-4">
        {stations.map((station, index) => (
          <div 
            key={station.name}
            className="glass-card rounded-xl p-4 animate-fade-in hover:scale-105 transition-transform"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-lg">{station.name}</h3>
                <p className="text-sm text-muted-foreground">{station.distance} away</p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-success/20 text-success">
                Open 24/7
              </span>
            </div>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                className="flex-1"
                onClick={() => window.open(`tel:${station.phone}`, '_blank')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="flex-1"
                onClick={() => window.open(`https://www.google.com/maps?q=${station.lat},${station.lng}`, '_blank')}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Navigate
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitizenNearby;
