import React from "react";
import { Link } from "react-router-dom";
import GoogleMapsComponent from "./GoogleMapsComponents";
import { useInView } from "../landingpage/useInView";

// const center = {
//   lat: 37.7749, // Latitude (Example: San Francisco)
//   lng: -122.4194, // Longitude
// };

export const MapCard = ({ position, role, url, Icon, index, center }) => {
  // console.log(center, position, role, Icon);
  const [ref, isInView] = useInView(0.01);
  return (
    <div
      className={`px-[15px] lg:pb-[60px]  opacity-0 pb-[40px] ${
        isInView
          ? `animate-fade-right animate-linear animate-duration-700 opacity-100`
          : ""
      }`}
      style={{
        animationDelay: isInView ? `${index * 200}ms` : "0ms",
      }}
      ref={ref}
    >
      <div className="relative text-left text-[#151515] bg-white z-[1] shadow-md shadow-[0_0_8px_0_rgba(0,0,0,0.09)] font-medium group">
        <div className="relative block overflow-hidden z-[-1] w-[100%] h-60 bg-[#e1e1e1] flex items-center justify-center ">
          <GoogleMapsComponent center={url} />
        </div>
        <div className="flex ml-[-20px] mb-[-30px] pt-[10px] pr-[20px]">
          <div className="ml-[20px] mb-[30px]">
            {Icon && <Icon className="w-10  h-10 text-[#151515]" />}
          </div>
          <div className="ml-[20px] mb-[30px] flex flex-col gap-5">
            <Link className="text-[18px] leading-[1.5] tracking-[0.075em] text-[#151515] hover:text-[#54c1e5] transition-all duration-300 ease-linear min-h-[54px] flex items-center">
              {role}
            </Link>
            <p className="text-[15px] leading-[1.5] tracking-[0.075em] text-[#54c1e5]">
              {position}
            </p>
          </div>
        </div>
        {/* <p
          className="absolute top-[10%] left-[13%] text-[12px] bg-[#fee25f] uppercase leading-[2] font-bold tracking-[0.1em] z-[1] rounded-[30px] py-[1px] px-[10px]"
          dateTime="2023-4-30"
        >
            {short_location}
        </p> */}
      </div>
    </div>
  );
};
