import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileContainer from "@/components/MobileContainer";

const CitizenSOS = () => {
  const navigate = useNavigate();
  const [pulsing, setPulsing] = useState(false);

  const handleSOS = (number: string) => {
    setPulsing(true);
    setTimeout(() => {
      window.open(`tel:${number}`, '_blank');
      setPulsing(false);
    }, 1000);
  };

  return (
    <MobileContainer>
      <div className="min-h-screen p-6 flex flex-col">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/citizen/home")}
        className="mb-6 animate-fade-in self-start"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-accent">Emergency SOS</h1>
          <p className="text-muted-foreground">Quick access to emergency services</p>
        </div>

        {/* Giant SOS Button */}
        <div className="relative mb-12">
          <button
            onClick={() => handleSOS("100")}
            className={`relative w-64 h-64 rounded-full bg-gradient-to-br from-accent to-accent/60 hover:scale-110 transition-transform ${pulsing ? 'animate-pulse-glow' : ''}`}
          >
            {/* Pulsing Rings */}
            <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping"></div>
            <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Button Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <AlertCircle className="w-20 h-20 text-white mb-4" />
              <span className="text-4xl font-bold text-white font-badge">SOS</span>
              <span className="text-sm text-white/80 mt-2">Press for help</span>
            </div>
          </button>
        </div>

        {/* Quick Actions */}
        <div className="w-full max-w-md space-y-3">
          <Button 
            onClick={() => handleSOS("100")}
            size="lg" 
            variant="outline"
            className="w-full"
          >
            <Phone className="w-5 h-5 mr-3" />
            <div className="text-left flex-1">
              <p className="font-bold">Police (100)</p>
              <p className="text-xs text-muted-foreground">Mumbai Police Control Room</p>
            </div>
          </Button>

          <Button 
            onClick={() => handleSOS("112")}
            size="lg" 
            variant="outline"
            className="w-full"
          >
            <Phone className="w-5 h-5 mr-3" />
            <div className="text-left flex-1">
              <p className="font-bold">Emergency (112)</p>
              <p className="text-xs text-muted-foreground">National Emergency Number</p>
            </div>
          </Button>

          <Button 
            onClick={() => handleSOS("1091")}
            size="lg" 
            variant="outline"
            className="w-full"
          >
            <Phone className="w-5 h-5 mr-3" />
            <div className="text-left flex-1">
              <p className="font-bold">Women Helpline (1091)</p>
              <p className="text-xs text-muted-foreground">24x7 Women Safety</p>
            </div>
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-8">
          Your location will be shared automatically when you call
        </p>
      </div>
    </div>
    </MobileContainer>
  );
};

export default CitizenSOS;
