import { useEffect, useState, useRef } from "react";

export function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current); // ✅ Stop observing only on unmount
    };
  }, [threshold]);

  return [ref, isInView];
}
