import React from "react";
import { useInView } from "react-intersection-observer";

const CalcTypeButton = ({ title, delay, setSelectedTag, selectedTag }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`mt-[20px] relative mt-[20px] cursor-pointer opacity-0 ${
        inView &&
        "opacity-100 animate-fade-right animate-duration-300 animate-ease-linear"
      }`}
      style={{ animationDelay: `${delay * 100}ms` }}
      onClick={() => setSelectedTag(title)}
    >
      <div
        className={`uppercase border-b-1 border-[#e1e1e1] text-[14px] lg:py-[20px] py-[10px] relative font-medium group pl-[5px]`}
      >
        <p>{title}</p>

        {title === selectedTag && (
          <div className="absolute bottom-0 left-0 border-1  border-[#54c1e5] w-[70px]"></div>
        )}

        {title !== selectedTag && (
          <div className="absolute w-0 border-1 invisible bottom-0 left-0 border-[#54c1e5] transition-all ease-linear duration-500 group-hover:w-[100%] group-hover:visible"></div>
        )}
      </div>
    </div>
  );
};

export default CalcTypeButton;
