import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const RainbowNewLogo = () => {
  const [gradient, setGradient] = useState(
    "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)"
  );

  useEffect(() => {
    let hue = 0;
    const interval = setInterval(() => {
      hue = (hue + 20) % 360; // Increased speed by changing hue faster
      setGradient(
        `linear-gradient(90deg, hsl(${hue}, 100%, 60%), hsl(${
          (hue + 60) % 360
        }, 100%, 60%), hsl(${(hue + 120) % 360}, 100%, 60%), hsl(${
          (hue + 180) % 360
        }, 100%, 60%), hsl(${(hue + 240) % 360}, 100%, 60%), hsl(${
          (hue + 300) % 360
        }, 100%, 60%))`
      );
    }, 50); // Reduced interval time for faster color change
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="text-md font-bold"
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }} // Faster animation
      style={{
        backgroundImage: gradient,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
      }}
    >
      new
    </motion.div>
  );
};

export default RainbowNewLogo;
