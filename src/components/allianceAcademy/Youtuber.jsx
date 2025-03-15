import React from "react";
// import ReactPlayer from "react-player/youtube";
import YouTube from "react-youtube";

const Youtuber = ({ videoId }) => {
  const opts = {
    height: "300px",
    width: "300px",
    playerVars: {
      autoplay: 0, // Auto-play the video
    },
  };

  const onReady = (event) => {
    console.log("Player is ready");
  };

  const onError = (event) => {
    console.error("Error occurred:", event);
  };
  return (
    <div className="flex justify-center">
      {/* <a className="overflow-hidden max-w-[570px]"> */}
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        onError={onError}
      />
      {/* </a> */}
      {/* <div className=" -translate-y-[30px] group-hover:translate-y-0 transition-all duration-200 ease-linear flex justify-center items-center">
        <div className="uppercase py-[30px] px-[15px] w-[80%] max-w-[80%] bg-white flex justify-center items-center ">
          <p className="text-[18px] text-[#54c1e5] tracking-[0.1em] text-center">
            {title}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Youtuber;
