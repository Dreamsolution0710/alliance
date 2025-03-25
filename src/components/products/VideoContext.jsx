// VideoContext.js
import { createContext, useState } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videoLink, setVideoLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VideoContext.Provider
      value={{ videoLink, setVideoLink, isOpen, setIsOpen }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContext;
