import React from "react";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ src, title, content, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      style={{
        animationDelay: `${delay * 300}ms`,
      }}
      className={`opacity-0 ${
        inView &&
        "opacity-100 animate-fade-right animate-duration-300 animate-ease-linear"
      } p-[15px] mb-[10px] bg-white w-fit max-w-[350px] shadow-[0_0_8px_2px_rgba(0,0,0,0.09)] group `}
    >
      <img
        src={src}
        width={"320px"}
        height={"210px"}
        className="object-cover lg:min-w-[320px] min-h-[210px] mb-[10px] transition-all ease-linear duration-500 transform group-hover:rotate-y-180"
      />
      <div>
        <h5 className="text-[#1977cc] text-[22px] mb-[10px] text-center">
          {title}
        </h5>
        {/* <p className="text-center text-[15px] text-[#555555] tracking-[0.025em] min-h-[115px] ">
          {content}
        </p> */}
      </div>
    </div>
  );
};

export default ServiceCard;
