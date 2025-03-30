
import { useState, useEffect } from "react";
import { Wifi, WifiOff } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Slide, Fade } from "@/components/ui/transitions";

export const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineAlert, setShowOfflineAlert] = useState(false);
  const [showOnlineAlert, setShowOnlineAlert] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOnlineAlert(true);
      setTimeout(() => setShowOnlineAlert(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineAlert(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      {showOfflineAlert && !isOnline && (
        <Slide direction="up" className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
          <Alert variant="default">
            <WifiOff className="h-4 w-4" />
            <AlertTitle>You are offline</AlertTitle>
            <AlertDescription>
              Check your internet connection to continue using all features.
            </AlertDescription>
          </Alert>
        </Slide>
      )}

      {showOnlineAlert && isOnline && (
        <Fade className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
          <Alert variant="default">
            <Wifi className="h-4 w-4" />
            <AlertTitle>You are back online</AlertTitle>
            <AlertDescription>
              Your internet connection has been restored.
            </AlertDescription>
          </Alert>
        </Fade>
      )}
    </>
  );
};
