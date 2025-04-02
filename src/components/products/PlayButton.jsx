import { DocumentPlusIcon, PlayIcon } from "@heroicons/react/24/solid";
import { useState, useContext } from "react";
import VideoContext from "./VideoContext";

const PlayButton = ({ videoUrl }) => {
  const { setVideoLink, setIsOpen } = useContext(VideoContext);

  const handleOpen = () => {
    setVideoLink(videoUrl);
    setIsOpen(true);
  };
  return (
    <div className="flex gap-5">
      {videoUrl && (
        <div
          className="relative  border-2 border-[#1977cc] group-hover:border-white rounded-full flex justify-center items-center w-16 h-16 group-hover:cursor-pointer bg-white group-hover:bg-transparent transition-all duration-300 ease-linear"
          onClick={handleOpen}
        >
          <PlayIcon className="w-6 h-6 text-[#1977cc] group-hover:text-white transition-all duration-300 ease-linear" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 rounded-full opacity-75 group-hover:animate-ping group-hover:bg-white transition-all duration-300 ease-linear"></span>
          </span>
        </div>
      )}
      {/* {pdfUrl && (
        <div
          className="relative group border-2 border-[#1977cc] rounded-full flex justify-center items-center w-16 h-16 hover:cursor-pointer bg-white"
          onClick={handlePDF}
        >
          <DocumentPlusIcon className="w-8 h-8 text-[#1977cc] hover:text-[#54c1e5]" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 rounded-full opacity-75 group-hover:animate-ping group-hover:bg-[#54c1e5]"></span>
          </span>
        </div>
      )} */}
    </div>
  );
};

export default PlayButton;
