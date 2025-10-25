import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

interface DynamicQRProps {
  data: any;
}

const DynamicQR = ({ data }: DynamicQRProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const generateQR = async () => {
      if (canvasRef.current) {
        const qrData = JSON.stringify({ ...data, timestamp: Date.now() });
        await QRCode.toCanvas(canvasRef.current, qrData, { width: 300, margin: 2 });
      }
    };

    generateQR();
    const interval = setInterval(() => {
      setCountdown((prev) => (prev === 1 ? 30 : prev - 1));
      if (countdown === 1) generateQR();
    }, 1000);

    return () => clearInterval(interval);
  }, [data, countdown]);

  return (
    <div className="relative">
      <canvas ref={canvasRef} className="mx-auto rounded-lg" />
      <div className="absolute top-2 right-2 w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center">
        <span className="text-white text-xs font-bold">{countdown}s</span>
      </div>
    </div>
  );
};

export default DynamicQR;
