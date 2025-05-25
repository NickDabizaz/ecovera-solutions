// Performance utilities for Ecovera Solutions

// Preload critical images
export const preloadImages = (imageUrls: string[]) => {
  if (typeof window !== 'undefined') {
    imageUrls.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }
};

// Lazy load intersection observer
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    return new IntersectionObserver(callback, {
      rootMargin: '50px',
      threshold: 0.1,
      ...options,
    });
  }
  return null;
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  } else {
    fn();
  }
};

// Debounce function for performance
export const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Critical resource hints
export const addResourceHints = () => {
  if (typeof document !== 'undefined') {
    // Preconnect to important domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    preconnectDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }
};

// Image optimization helper
export const getOptimizedImageProps = (src: string, alt: string, priority = false) => ({
  src,
  alt,
  quality: 90,
  priority,
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  style: {
    width: '100%',
    height: 'auto',
  },
});

// Web Vitals reporting
export const reportWebVitals = (metric: {
  id: string;
  name: string;
  value: number;
  delta: number;
  entries: PerformanceEntry[];
}) => {
  if (process.env.NODE_ENV === 'production') {
    // In production, you could send this to analytics
    console.log('Web Vital:', metric);
  }
};
