import { Link } from "react-router-dom";
import { QrCode, MapPin, Phone, Shield } from "lucide-react";
import MobileContainer from "@/components/MobileContainer";

const CitizenHome = () => {
  const features = [
    {
      title: "Verify Officer",
      description: "Scan QR code to verify police identity",
      icon: QrCode,
      path: "/citizen/verify",
      gradient: "from-primary to-primary/60",
      glow: "glow-primary",
    },
    {
      title: "Nearby Police",
      description: "Find police stations near you",
      icon: MapPin,
      path: "/citizen/nearby",
      gradient: "from-success to-success/60",
      glow: "glow-success",
    },
    {
      title: "Emergency SOS",
      description: "Quick access to emergency services",
      icon: Phone,
      path: "/citizen/sos",
      gradient: "from-accent to-accent/60",
      glow: "glow-accent",
    },
  ];

  return (
    <MobileContainer>
      <div className="min-h-screen p-6">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/20 border-2 border-success mb-4 animate-float">
          <Shield className="w-10 h-10 text-success" />
        </div>
        <h1 className="text-4xl font-bold mb-2">Citizen Services</h1>
        <p className="text-muted-foreground">Mumbai Police at your service</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {features.map((feature, index) => (
          <Link
            key={feature.title}
            to={feature.path}
            className="group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`glass-card rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${feature.glow} hover:shadow-2xl animate-scale-in`}>
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </MobileContainer>
  );
};

export default CitizenHome;
