import { useEffect, useState } from "react";
import { AlertCircle, Wifi, WifiOff } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { checkNetworkStatus, isSlowConnection } from "@/utils/imageLoader";

export const NetworkStatus = () => {
  const [status, setStatus] = useState(checkNetworkStatus());

  useEffect(() => {
    const handleOnline = () => setStatus(checkNetworkStatus());
    const handleOffline = () => setStatus(checkNetworkStatus());
    const handleConnectionChange = () => setStatus(checkNetworkStatus());

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    if ((navigator as any).connection) {
      (navigator as any).connection.addEventListener('change', handleConnectionChange);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if ((navigator as any).connection) {
        (navigator as any).connection.removeEventListener('change', handleConnectionChange);
      }
    };
  }, []);

  if (!status.isOnline) {
    return (
      <Alert variant="destructive" className="fixed bottom-4 right-4 z-50 max-w-sm">
        <WifiOff className="h-4 w-4" />
        <AlertTitle>Offline</AlertTitle>
        <AlertDescription>
          You are currently offline. Some features may be limited.
        </AlertDescription>
      </Alert>
    );
  }

  if (isSlowConnection(status.speed)) {
    return (
      <Alert variant="warning" className="fixed bottom-4 right-4 z-50 max-w-sm">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Slow Connection</AlertTitle>
        <AlertDescription>
          Your connection is slow. Images may take longer to load.
        </AlertDescription>
      </Alert>
    );
  }

  return null;
}; 