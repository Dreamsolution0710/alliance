import React, { useEffect } from "react";
import USAMap from "./USAMap";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

const Representative = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <div className="py-[116px] bg-[url(/assets/images/bg-counter-6.jpg)] bg-cover">
          <div className="flex items-center justify-center">
            <div className="max-w-[1200px] w-auto px-[15px] flex flex-col justify-center items-center">
              <h3 className="text-[44px] text-white uppercase tracking-[0.1em] font-bold text-center">
                UNIted states of America
              </h3>
              <div className="border-b-4 border-[rgba(255,255,255,0.6)] w-[64px] h-[44px]"></div>
            </div>
          </div>
        </div>
        <div className="py-[20px] bg-[#f3f3f3]">
          <div className="flex item-center justify-center">
            <div className="max-w-[1200px] flex justify-center items-center">
              <div className="flex items-center">
                <Link
                  to="/"
                  className="text-[12px] text-[#777777] hover:text-[#54c1e5] uppercase cursor-pointer px-[17px] font-medium leading-[1.5] tracking-[0.13em]"
                >
                  home
                </Link>
                <ArrowRightIcon
                  size={12}
                  className="text-[#151515] font-black"
                />
                <span className="text-[12px] text-[#151515] uppercase font-black px-[17px] leading-[1.5] tracking-[0.13em]">
                  find-represntative
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-[1200px] w-[1200px]">
          <div className="my-[50px]">
            <USAMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Representative;
