import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const NewAddProductCard = ({ mainSrc, markSrc, content, benefits }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row shadow-[0_0_8px_2px_rgba(0,0,0,0.09)] w-full my-[10px] opacity-0 ${
        inView &&
        "opacity-100 animate-fade-up animate-duration-300 animate-ease-linear"
      }`}
    >
      <div className="z-100">
        <button
          className="absolute uppercase top-0 right-0 bg-[#1977cc] border-2 border-[#1977cc] transition-all duration-300 ease-linear pl-10 pr-7 py-3 rounded-bl-full text-[24px] font-bold text-white cursor-pointer hover:bg-white hover:text-[#1977cc] active:translate-y-1 active:transition-x-1"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "back" : "view"}
        </button>
      </div>
      <div className="flex justify-center items-center w-[60%] ">
        <img
          src={mainSrc}
          width={"100%"}
          className={`object-cover h-full w-full min-w-[400px]`}
        />
      </div>
      <div className="m-[30px] text-[#151515] flex flex-col justify-center items-center relative overflow-hidden w-[40%]">
        <img
          src={markSrc}
          width={"100px"}
          className="object-contain absolute top-0 left-0"
        ></img>
        {!isVisible && (
          <div className="flex flex-col gap-5 mt-[30px]">
            <p className="text-wrap text-[18px] tracking-[0.05em] leading-[1.8]">
              {content}
            </p>
          </div>
        )}
        {isVisible && (
          <>
            <h5 className="text-[24px] bg-[#1977cc] w-fit py-[5px] px-[15px] text-white font-medium rounded-xl translate-y-[30px]">
              Features & Benefits
            </h5>
            <div className="flex border-1 border-[#1977cc] rounded-2xl w-full">
              <ul className="list-disc text-[18px] p-[30px]">
                <li className="list-none mt-[10px] "></li>
                {benefits &&
                  benefits.map((benefit, index) => <li>{benefit}</li>)}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewAddProductCard;
