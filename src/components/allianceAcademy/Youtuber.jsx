import React, { useState } from "react";
import YouTube from "react-youtube";
import { FaPlay } from "react-icons/fa"; // Font Awesome Play Icon

const Youtuber = ({ videoId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      {/* Thumbnail Container */}
      <div
        className="relative w-full aspect-video cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {/* Thumbnail Image */}
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt="Thumbnail"
          className="w-full h-full object-cover"
        />

        {/* YouTube Style Play Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="flex items-center justify-center w-24 h-15 bg-red-600 rounded-lg shadow-lg opacity-90">
            <FaPlay className="text-white w-8 h-8 ml-1" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 z-150"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-[90vw] max-w-4xl aspect-video bg-black"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <YouTube videoId={videoId} opts={opts} className="w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Youtuber;
