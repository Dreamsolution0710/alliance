import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const EdgeGuardCard = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row shadow-[0_0_8px_2px_rgba(0,0,0,0.09)] md:max-h-[480px] md:min-h-[480px] w-full my-[10px] opacity-0 ${
        inView &&
        "opacity-100 animate-fade-up animate-duration-300 animate-ease-linear"
      }`}
    >
      <div className=" group flex justify-center  items-center flex-col md:flex-row">
        <img
          src={"/assets/images/AddProducts/edgeguard_dx.png"}
          height={"480px"}
          className="object-cover h-full w-full"
        />
        <img
          src={"/assets/images/AddProducts/edgeguard_dx_content.png"}
          className="object-cover md:min-w-[450px]"
        />
      </div>
    </div>
  );
};

export default EdgeGuardCard;
