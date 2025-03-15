import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "../landingpage/useInView";

export const Card1 = ({ src, postDate, blogTitle, index, routePath }) => {
  const [ref, isInView] = useInView(0.01);
  return (
    <div
      className={`px-[15px] lg:pb-[60px] pb-[40px] ${
        isInView
          ? `animate-fade-right animate-linear animate-duration-700 opacity-100`
          : ""
      }`}
      ref={ref}
      style={{
        animationDelay: isInView ? `${index * 200}ms` : "0ms",
      }}
    >
      <div className="relative text-left text-[#151515] bg-white z-[1] shadow-md shadow-[0_0_8px_0_rgba(0,0,0,0.09)] font-medium group">
        <div className="relative block overflow-hidden z-[-1] ">
          <img
            src={src}
            className="lg:w-[370px] lg:h-[210px] w-[100%] will-change-transform transition-all duration-250 ease h-auto group-hover:scale-[110%]"
          />
        </div>
        <div className="py-[10%] px-[13%] md:min-h-[173px] lg:min-h-[155px]">
          <p className="text-[18px] leading-[1.5] tracking-[0.075em]  decoration-[#151515] hover:underline">
            <Link to={routePath}>{blogTitle}</Link>
          </p>
        </div>
        <time
          className="absolute top-[10%] left-[13%] text-[12px] bg-[#54c1e5] uppercase leading-[2] font-bold tracking-[0.1em] z-[1] rounded-[30px] py-[1px] px-[10px]"
          dateTime="2023-4-30"
        >
          {postDate}
        </time>
      </div>
    </div>
  );
};

export const Card2 = ({ src, postDate, blogTitle, index, routePath }) => {
  const [ref, isInView] = useInView(0.01);
  return (
    <div
      className={`px-[15px] pb-[60px] ${
        isInView
          ? `animate-fade-right animate-linear animate-duration-700 opacity-100`
          : ""
      }`}
      ref={ref}
      style={{
        animationDelay: isInView ? `${index * 200}ms` : "0ms",
      }}
    >
      <div className="relative text-left text-[#151515] bg-white z-[1] shadow-md shadow-[0_0_8px_0_rgba(0,0,0,0.09)] font-medium group">
        <div className="relative block overflow-hidden z-[-1] ">
          <div class="absolute bg-[linear-gradient(to_bottom,_rgba(54,_102,_138,_0.15)_0%,_rgba(49,_89,_120,_0.33)_28%,_rgba(41,_66,_88,_0.7)_76%,_rgba(37,_54,_72,_0.85)_100%)] z-[1] top-0 bottom-0 left-0 right-0"></div>
          <img
            src={src}
            className="w-[100%] lg:w-[370px] lg:h-[365px] will-change-transform object-cover transition-all duration-250 ease h-auto z-[0] group-hover:scale-[110%]"
          />
        </div>
        <div className="py-[10%] px-[13%] absolute bottom-0 text-[#ffffff]">
          <p className="text-[18px] leading-[1.5] tracking-[0.075em] decoration-[#ffffff] hover:underline">
            <Link to={routePath}>{blogTitle}</Link>
          </p>
        </div>
        <time
          className="absolute top-[10%] left-[13%] text-[12px] bg-[#54c1e5] uppercase leading-[2] font-bold tracking-[0.1em] z-[1] rounded-[30px] py-[1px] px-[10px]"
          dateTime="2023-4-30"
        >
          {postDate}
        </time>
      </div>
    </div>
  );
};
