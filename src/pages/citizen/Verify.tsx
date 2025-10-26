import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import QRScanner from "@/components/QRScanner";
import MobileContainer from "@/components/MobileContainer";

const CitizenVerify = () => {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleScan = (data: string) => {
    try {
      const parsed = JSON.parse(data);
      setResult({ status: "valid", ...parsed });
      setScanning(false);
    } catch {
      setResult({ status: "invalid" });
      setScanning(false);
    }
  };

  const startScan = () => {
    setResult(null);
    setScanning(true);
  };

  return (
    <MobileContainer>
      <div className="min-h-screen p-6">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/citizen/home")}
        className="mb-6 animate-fade-in"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <h1 className="text-3xl font-bold text-center mb-8 animate-fade-in">Verify Officer</h1>

      {!scanning && !result && (
        <div className="max-w-md mx-auto text-center">
          <div className="glass-card rounded-2xl p-12 animate-scale-in">
            <Camera className="w-24 h-24 mx-auto mb-6 text-primary animate-float" />
            <h2 className="text-xl font-bold mb-4">Scan Officer's QR Code</h2>
            <p className="text-muted-foreground mb-8">
              Point your camera at the officer's digital ID to verify their identity
            </p>
            <Button onClick={startScan} size="lg" className="w-full">
              Start Scanning
            </Button>
          </div>
        </div>
      )}

      {scanning && (
        <div className="max-w-md mx-auto">
          <QRScanner onScan={handleScan} onClose={() => setScanning(false)} />
        </div>
      )}

      {result && (
        <div className="max-w-md mx-auto animate-scale-in">
          {result.status === "valid" && (
            <div className="glass-card rounded-2xl p-8 border-2 border-success">
              <CheckCircle className="w-16 h-16 mx-auto mb-6 text-success animate-scale-in" />
              <h2 className="text-2xl font-bold text-center mb-6 text-success">Valid Officer</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="text-lg font-bold">{result.officerName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Badge ID</p>
                  <p className="text-lg font-bold font-badge">{result.badgeId}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Rank</p>
                  <p className="text-lg font-semibold">{result.rank}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Station</p>
                  <p className="text-lg font-semibold">{result.station}</p>
                </div>
              </div>
              <Button onClick={startScan} variant="outline" className="w-full mt-8">
                Scan Another
              </Button>
            </div>
          )}
          {result.status === "invalid" && (
            <div className="glass-card rounded-2xl p-8 border-2 border-destructive">
              <XCircle className="w-16 h-16 mx-auto mb-6 text-destructive animate-scale-in" />
              <h2 className="text-2xl font-bold text-center mb-4 text-destructive">Invalid QR Code</h2>
              <p className="text-center text-muted-foreground mb-8">
                This QR code is not recognized. Please report suspicious activity.
              </p>
              <Button onClick={startScan} variant="outline" className="w-full">
                Try Again
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
    </MobileContainer>
  );
};

export default CitizenVerify;
