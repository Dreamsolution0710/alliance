import React, { useState } from "react";

const CarouselImage = ({ src }) => {
  const [hoverDirection, setHoverDirection] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const getDirection = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const angle = Math.atan2(y, x) * (180 / Math.PI);

    if (angle >= -45 && angle < 45) return "right";
    if (angle >= 45 && angle < 135) return "down";
    if (angle >= -135 && angle < -45) return "up";
    return "left";
  };

  return (
    <div
      className="relative overflow-hidden w-full h-full group"
      onMouseEnter={(e) => {
        setHoverDirection(getDirection(e));
        setIsHovered(true);
      }}
      onMouseLeave={(e) => {
        setHoverDirection("-" + getDirection(e));
        setIsHovered(false);
      }}
    >
      <img
        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-linear"
        src={src}
        alt="carousel"
      />
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-sky-500/50 to-sky-700/50
          transition-transform duration-300 ease-linear ${
            isHovered
              ? hoverDirection === "up"
                ? "translate-y-0"
                : hoverDirection === "down"
                ? "translate-y-0"
                : hoverDirection === "left"
                ? "translate-x-0"
                : "translate-x-0"
              : hoverDirection === "-up"
              ? "-translate-y-full"
              : hoverDirection === "-down"
              ? "translate-y-full"
              : hoverDirection === "-left"
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
      ></div>
    </div>
  );
};

export default CarouselImage;
