import React from "react";
// import ReactPlayer from "react-player/youtube";
import YouTube from "react-youtube";

const Youtuber = ({ videoId }) => {
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    console.log("Player is ready");
  };

  const onError = (event) => {
    console.error("Error occurred:", event);
  };
  return (
    <div className="w-full aspect-video">
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        onError={onError}
        className="w-full h-full"
      />
    </div>
  );
};

export default Youtuber;
