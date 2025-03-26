import { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import ReactPlayer from "react-player";
import VideoContext from "../products/VideoContext";

const VideoModal = () => {
  const { videoLink, isOpen, setIsOpen } = useContext(VideoContext);
  const [videoSize, setVideoSize] = useState({ width: 1280, height: 720 });

  useEffect(() => {
    if (!videoLink) return;

    const video = document.createElement("video");
    video.src = `${videoLink}`;
    video.onloadedmetadata = () => {
      setVideoSize({ width: video.videoWidth, height: video.videoHeight });
    };
  }, [videoLink]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center z-[150]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="relative flex items-center justify-center"
        style={{
          width: `${videoSize.width}px`,
          height: `${videoSize.height}px`,
          maxWidth: "90vw",
          maxHeight: "90vh",
        }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-white z-10 bg-black/50 p-2 rounded-full hover:cursor-pointer"
        >
          <X size={30} />
        </button>
        <ReactPlayer
          url={`${videoLink}`}
          playing
          controls
          width="100%"
          height="100%"
        />
      </motion.div>
    </div>
  );
};

export default VideoModal;
