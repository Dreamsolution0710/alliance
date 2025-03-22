import React, { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const ScrollUpTo = () => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY); //positionUpdate the state with the current scroll position
  };

  const scrollToTop = () => {
    let start = window.scrollY; // Start position
    const duration = 400; // Duration of the scroll in milliseconds
    const step = Math.ceil(start / (duration / 16)); // Calculate the decrement for each frame
    let currentPosition = start;

    const scroll = () => {
      if (currentPosition > 0) {
        currentPosition -= step; // Reduce the current position
        window.scrollTo(0, currentPosition < 0 ? 0 : currentPosition); // Scroll to the current position
        // window.scrollTo(0, 0); // Scroll to the current position
        requestAnimationFrame(scroll); // Request the next frame
      }
    };

    requestAnimationFrame(scroll); // Start the scrolling animation1
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div className="bg-white">
      <button
        className={`invisible ${
          scrollY < 500 ? "" : "visible"
        } z-100 fixed w-16 h-16 rounded-full bg-[#57a4e0] flex items-center md:bottom-8 md:right-16 bottom-4 right-8 justify-center hover:bg-[#eea660] transition-all duration-300 ease-in-out`}
        onClick={scrollToTop}
      >
        <ArrowUpIcon className="text-white w-8 h-8" />
      </button>
      ;
    </div>
  );
};

export default ScrollUpTo;
