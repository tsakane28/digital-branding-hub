import { PortfolioItem } from "@/types/portfolio";
import { ShopItem } from "@/types/shop";

interface ImageLoadStatus {
  loaded: boolean;
  error: boolean;
  progress: number;
}

const imageCache = new Map<string, ImageLoadStatus>();

export const preloadImage = (src: string): Promise<ImageLoadStatus> => {
  // Check if image is already cached
  if (imageCache.has(src)) {
    return Promise.resolve(imageCache.get(src)!);
  }

  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const status = { loaded: true, error: false, progress: 100 };
      imageCache.set(src, status);
      resolve(status);
    };
    img.onerror = () => {
      const status = { loaded: false, error: true, progress: 0 };
      imageCache.set(src, status);
      resolve(status);
    };
    img.src = src;
  });
};

export const preloadPortfolioImages = async (items: PortfolioItem[]) => {
  const imagePromises = items.map(item => preloadImage(item.image));
  return Promise.all(imagePromises);
};

export const preloadShopImages = async (items: ShopItem[]) => {
  const imagePromises = items.map(item => preloadImage(item.image));
  return Promise.all(imagePromises);
};

export const checkNetworkStatus = () => {
  if (!navigator.onLine) {
    return { isOnline: false, type: 'offline' };
  }
  
  const connection = (navigator as any).connection;
  if (connection) {
    return {
      isOnline: true,
      type: connection.effectiveType || '4g',
      speed: connection.downlink || 0
    };
  }
  
  return { isOnline: true, type: 'unknown' };
};

export const isSlowConnection = (speed: number) => {
  return speed < 1; // Less than 1 Mbps is considered slow
}; 