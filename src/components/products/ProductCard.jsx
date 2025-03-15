import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ index, src, title, description, intro, route }) => {
  return (
    <div
      className={`flex flex-col ${
        index % 2 == 0
          ? "md:flex-row animate-fade-right animate-duration-300 animate-ease-in animate-delay-1000"
          : "md:flex-row-reverse animate-fade-left animate-duration-300 animate-ease-in animate-delay-1000"
      } shadow-md shadow-[0_0_10px_0_rgba(0,0,0,0.15)] md:h-[200px] md:min-h-[200px] my-[10px] overflow-hidden text-wrap`}
    >
      <div className="flex justify-center group">
        <img
          src={src}
          width={"325px"}
          height={"200px"}
          className="min-h-[200px] min-w-[325px] group-hover:hidden transition-all duration-300 ease-linear"
        />
        <img
          src={intro}
          width={"325px"}
          height={"200px"}
          className="min-h-[200px] min-w-[325px] hidden group-hover:block transition-all duration-300 ease-linear"
        />
      </div>
      <div className="p-[30px] relative text-[#151515]">
        <h5 className="text-[24px] uppercase">{title}</h5>
        {/* <div className="mt-[20px] flex items-center justify-center"> */}
        <p className="mt-[20px] text-[18px] text-[#777777] font-normal leading-[1.65] tracking-[0.075em] max-h-[90px] overflow-hidden">
          {description}
        </p>
        {/* </div> */}

        <Link
          to={route}
          className="bg-[#54c1e5] tracking-[0.075em] text-white font-medium rounded-full absolute bottom-[25px] right-[25px] py-[5px] px-[15px] hover:bg-[#eea660] hover:text-[#151515]"
        >
          view more
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
