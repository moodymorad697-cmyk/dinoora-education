// Reliable image URLs for destinations - Using verified working URLs
export const destinationImages = {
  china: {
    main: "https://images.unsplash.com/photo-1525816483172-a4e15c363980?w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
  },
  malaysia: {
    main: "https://images.unsplash.com/photo-1622365689404-c527e4a9f6c5?w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1606920735127-4d742f0d6d90?w=1200&q=80",
  },
  turkey: {
    main: "https://images.unsplash.com/photo-1541432901045-420879ed75f5?w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=1200&q=80",
  },
};

// Safe image component props
export const getImageProps = (src: string, alt: string) => ({
  src,
  alt,
  loading: "lazy" as const,
  onError: (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    // Try different fallbacks
    if (target.src.includes("photo-1596422847843")) {
      target.src = "https://images.unsplash.com/photo-1604652716112-93762c8c870a?w=1200&q=80";
    } else if (target.src.includes("photo-1527838832700")) {
      target.src = "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=1200&q=80";
    } else {
      // Final fallback - gradient placeholder
      target.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      target.style.minHeight = "300px";
    }
  },
});
