import React from "react";
import { useInView } from "react-intersection-observer";

const PlasticCard = ({ src, title, content, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`flex justify-center group flex-col  max-w-[570px] shadow-md shadow-[0_0_8px_2px_rgba(0,0,0,0.09)] opacity-0 ${
        inView &&
        "opacity-100 animate-fade-up animate-duration-300 animate-ease-linear"
      } `}
      style={{
        animationDelay: `${delay * 300}ms`,
      }}
    >
      <div className="block relative overflow-hidden">
        <img
          src={src}
          width={"570px"}
          height={"570px"}
          className="w-[100%] max-w-[570px] max-h-[570px] scale-110 object-cover group-hover:scale-100 transition-all duration-200 ease-linear"
        />
        <div className="opacity-0 hover:opacity-100 absolute top-0 right-0 bottom-0 top-0 hover:bg-[rgba(0,0,0,0.6)] w-full transition-all duration-300 ease-linear hover:animate-fade flex justify-center items-center cursor-pointer">
          <p className=" text-center text-white text-[24px] p-[15px]">
            {content}
          </p>
        </div>
      </div>
      <div className=" -translate-y-[30px] group-hover:translate-y-0 transition-all duration-200 ease-linear flex justify-center items-center overflow-hidden">
        <div className="uppercase py-[30px] px-[15px] w-[80%] group-hover:w-[100%]  bg-white flex justify-center items-center group-hover:animate-ping transition-all duration-300  ease-linear  md:min-h-[114px] rounded-sm">
          <p className="text-[18px] lg:text-[16px] text-[#1977cc] tracking-[0.1em] text-center font-semibold">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlasticCard;
