import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

const slides = [
  {
    title: "WE ARE ALLIANCE PLASITICS",
    text: "Alliance Plastics is a Veteran-Owned company focused on building strong relationships with partners, offering innovative products and services with nationwide reach, integrity, quality, and efficiency.",
    path: "/ourcompany",
    section: "ABOUT US",
  },
  {
    title: "Alliance Academy",
    text: "Alliance Academy offers educational resources, product training, and marketing strategies to help Alliance Plastics' partners and distributors gain valuable knowledge and boost sales for mutual success.",
    path: "/academy",
    section: "ALLIANCE ACADEMY",
  },
  {
    title: "NEWS",
    text: "Sign up to get interesting news and updates delivered to your inbox.",
    path: "/news",
    section: "NEWS",
  },
];

const ToolsComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [ref3, isInview3] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setAnimationKey((prev) => prev + 1);
    // Force animation replay by toggling isInview3
    if (ref3) {
      ref3.disconnect();
      setTimeout(() => ref3.observe(), 50);
    }
  };

  return (
    <div className="relative w-full overflow-hidden flex flex-col lg:flex-row">
      {/* Left Side - Image */}
      <img
        src="/assets/images/bgalliancemenu.jpg"
        width={"500px"}
        height={"300px"}
        className="object-cover lg:w-1/2 w-full"
      />
      <div className="z-[3] lg:w-1/2 flex flex-col-reverse lg:flex-row">
        {/* Middle Side - Text */}
        <div className="w-full lg:w-3/5 bg-gray-100 flex flex-col justify-center p-6">
          <h2
            key={`title-${animationKey}`}
            ref={ref3}
            className={`text-2xl md:text-4xl text-gray-900 opacity-0 tracking-widest text-center lg:text-left transition-all duration-500 ease-in-out ${
              isInview3
                ? "animate-fade-down animate-duration-500 opacity-100 translate-y-0 animate-ease-in-out animate-delay-100"
                : ""
            }`}
          >
            {slides[currentSlide].title}
          </h2>
          <p
            key={`text-${animationKey}`}
            ref={ref3}
            className={`text-gray-700 mt-4 opacity-0 text-center lg:text-left transition-all duration-500 ease-in-out ${
              isInview3
                ? "animate-fade animate-duration-500 opacity-100 translate-y-0 animate-ease-in-out animate-delay-300"
                : ""
            }`}
          >
            {slides[currentSlide].text}
          </p>
          <Link
            key={`link-${animationKey}`}
            to={slides[currentSlide].path}
            ref={ref3}
            className={`flex items-center justify-center lg:justify-start mt-10 group transition-all duration-500 ease-in-out ${
              isInview3
                ? "animate-fade-down animate-ease-in-out animate-duration-500 animate-delay-500"
                : ""
            }`}
          >
            {/* Left Part (Text) */}
            <p className="bg-sky-500 tracking-widest font-bold group-hover:bg-[#54c1e5] text-white px-12 py-6 transition-colors flex items-center lg:text-md max-h-[72px]">
              READ MORE
            </p>
            {/* Right Part (Arrow) */}
            <span className="group-hover:bg-sky-500 bg-[#54c1e5] p-6 transition-colors flex items-center justify-center">
              <ChevronRight
                size={24}
                className="text-white group-hover:animate-shake"
              />
            </span>
          </Link>
        </div>
        {/* Right Side - Navigation (Appears Above Middle Side on Mobile) */}
        <div className="w-full bg-white lg:w-2/5 text-white flex flex-col h-auto">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`relative flex-1 py-4 md:py-6 text-lg font-semibold tracking-widest border-b text-gray-100 border-gray-500 transition-all duration-300 ease-in-out opacity-100 ${
                index === currentSlide
                  ? "bg-gray-600 border-b-gray-500"
                  : "bg-gray-700"
              } hover:bg-gray-600`}
            >
              <p>{slide.section}</p>
              {index === currentSlide && (
                <div className="absolute bottom-[-1px] right-[35%] bg-[#54c1e5] border-2 border-[#54c1e5] w-[30%] transition-all duration-300 ease-in-out transform scale-x-100"></div>
              )}
            </button>
          ))}
        </div>
      </div>
      {/* Wrapper for Right Side & Middle Side - Adjust Order in Mobile */}

      <div className="invisible lg:visible absolute h-full w-[50%] -skew-x-8 top-0 right-[50px] z-[2] bg-gray-100 transition-transform duration-500 ease-in-out"></div>
      <div className="invisible lg:visible absolute  h-full w-[50%] skew-x-30 top-0 right-[-10px] z-[2] bg-gray-100 transition-transform duration-500 ease-in-out"></div>
    </div>
  );
};

export default ToolsComponent;
