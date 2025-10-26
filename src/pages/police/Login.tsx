import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import MobileContainer from "@/components/MobileContainer";

const PoliceLogin = () => {
  const navigate = useNavigate();
  const [badgeId, setBadgeId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Demo login - accept any credentials
    setTimeout(() => {
      localStorage.setItem("police_logged_in", "true");
      localStorage.setItem("officer_name", "Officer " + badgeId);
      localStorage.setItem("badge_id", badgeId);
      toast.success("Login successful!");
      navigate("/police/dashboard");
    }, 800);
  };

  return (
    <MobileContainer>
      <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 border-2 border-primary mb-4 animate-float">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Police Officer Login</h1>
          <p className="text-muted-foreground">Enter your credentials</p>
        </div>

        <form onSubmit={handleLogin} className="glass-card rounded-2xl p-8 animate-scale-in">
          <div className="space-y-4">
            <div>
              <Label htmlFor="badge">Badge ID</Label>
              <Input
                id="badge"
                type="text"
                placeholder="Enter badge number"
                value={badgeId}
                onChange={(e) => setBadgeId(e.target.value)}
                required
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full mt-6" 
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </div>
          <p className="text-xs text-center text-muted-foreground mt-6">
            Demo: Use any badge ID and password
          </p>
        </form>
      </div>
    </div>
    </MobileContainer>
  );
};

export default PoliceLogin;
