import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { Button } from "./ui/button";

interface QRScannerProps {
  onScan: (data: string) => void;
  onClose: () => void;
}

const QRScanner = ({ onScan, onClose }: QRScannerProps) => {
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    const scanner = new Html5Qrcode("qr-reader");
    scannerRef.current = scanner;

    scanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      (decodedText) => {
        onScan(decodedText);
        scanner.stop();
      },
      () => {}
    );

    return () => {
      if (scanner.isScanning) scanner.stop();
    };
  }, [onScan]);

  return (
    <div className="glass-card rounded-xl p-6 animate-scale-in">
      <div id="qr-reader" className="rounded-lg overflow-hidden mb-4" />
      <Button onClick={onClose} variant="outline" className="w-full">
        Cancel
      </Button>
    </div>
  );
};

export default QRScanner;
