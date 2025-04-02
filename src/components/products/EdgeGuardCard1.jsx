import React from "react";
import { useInView } from "react-intersection-observer";
import PlayButton from "./PlayButton";

const imageStyles =
  "object-cover max-w-[412px] min-w-[280px] max-h-[450px] min-h-[280px] sm:min-w-[350px] sm:min-h-[350px] md:min-w-[412px] md:min-h-[450px]";

const EdgeGuardCard = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden bg-white w-full my-4 transition-opacity duration-500 ease-in-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="relative group">
          <img
            src="/assets/images/AddProducts/edgeguard_dx.png"
            height="450"
            className={`${imageStyles} `}
            alt="Edge Guard DXL"
          />
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <PlayButton
              videoUrl={""}
              pdfUrl={"Edgeguard DX brochure 2024.pdf"}
            />
          </div>
        </div>

        <img
          src="/assets/images/AddProducts/edgeguard_dx_content1.png"
          className="pl-[20px] object-cover w-full sm:w-auto md:min-w-[450px]"
          alt="Edge Guard DXL Content"
        />
      </div>
    </div>
  );
};

export default EdgeGuardCard;
