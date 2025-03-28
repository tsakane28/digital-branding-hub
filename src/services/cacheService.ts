
// Key for storing cache timestamp
const CACHE_TIMESTAMP_KEY = 'rsrvd_cache_timestamp';
// Cache duration in milliseconds (24 hours)
const CACHE_DURATION = 24 * 60 * 60 * 1000;

// List of assets to preload
const assetsToPreload = [
  '/logo.png',
  '/about_thumb_1.jpg',
  '/about_thumb_2.jpg',
  '/branding.jpg',
  '/graphic_design.jpg',
  '/video_production.jpg',
  '/hangover.png',
  '/velvet.png',
  '/backpack.png',
  '/hoodie.png',
  // Add other important images here
];

/**
 * Preloads an image and returns a promise that resolves when the image is loaded
 */
const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = () => {
      console.warn(`Failed to preload image: ${src}`);
      resolve(); // Resolve anyway to not block the loading process
    };
  });
};

/**
 * Checks if cache is still valid
 */
export const isCacheValid = (): boolean => {
  const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
  if (!timestamp) return false;
  
  const cachedTime = parseInt(timestamp, 10);
  const now = Date.now();
  
  return now - cachedTime < CACHE_DURATION;
};

/**
 * Preloads all assets and caches them
 */
export const preloadAssets = async (
  progressCallback: (progress: number) => void
): Promise<void> => {
  let loaded = 0;
  const total = assetsToPreload.length;
  
  // Create an array of promises for all assets
  const promises = assetsToPreload.map(async (asset) => {
    await preloadImage(asset);
    loaded++;
    progressCallback((loaded / total) * 100);
  });
  
  // Wait for all assets to load
  await Promise.all(promises);
  
  // Update cache timestamp
  localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
};

/**
 * Warms up the browser cache by touching all critical routes
 */
export const warmupRoutes = async (): Promise<void> => {
  const routes = [
    '/',
    '/about',
    '/services',
    '/portfolio',
    '/contact'
  ];
  
  // Fetch all routes to warm up the cache
  await Promise.all(
    routes.map(route => 
      fetch(route, { method: 'HEAD' })
        .catch(err => console.warn(`Failed to warm up route: ${route}`, err))
    )
  );
};
