import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { ChevronRight, CircleDot } from "lucide-react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const images = [
  {
    src: "/assets/images/headerslides/allianceslide1.jpg",
    subScript: "Reinforced TITANIUM",
    content: "THE STRONGEST FILM IN THE WORLD",
    link: "/products/films",
  },
  {
    src: "/assets/images/headerslides/allianceslide2.jpg",
    subScript: "",
    content: "A VETERAN OWNED COMPANY",
    link: "/ourcompany",
  },
  {
    src: "/assets/images/headerslides/allianceslide3.jpg",
    subScript: "AIRFORCE VENTED FILMS",
    content: " THE BEST FILMS FOR ANYTHING",
    link: "/products/films",
  },
  {
    src: "/assets/images/headerslides/allianceslideedgeguard.jpg",
    subScript: "Cornerboard EDGEGUARD",
    content: "STRONGEST BOARD ON THE MARKET",
    link: "/products/edges",
  },
  {
    src: "/assets/images/headerslides/allianceslidetapes.jpg",
    subScript: "GLOBALPACK",
    content: "MADE IN USA",
    link: "/products/tapes",
  },
];

const HeaderCarousels = () => {
  const [current, setCurrent] = useState(1);
  const total = images.length;
  const [animates, setAnimates] = useState([
    { ref: null, isInView: false },
    { ref: null, isInView: false },
    { ref: null, isInView: false },
    { ref: null, isInView: false },
    { ref: null, isInView: false },
  ]);

  // Create refs dynamically using useInView()
  const views = animates.map(() => useInView({ threshold: 0.1 }));

  return (
    <div className="relative w-full bg-gray-100 pb-8 lg:pb-24">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        initialSlide={1}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1, // For mobile devices
          },
          768: {
            slidesPerView: 1, // For tablet devices
          },
          1024: {
            slidesPerView: 1.1, // For desktop devices
          },
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        loop={true}
        onSlideChange={(swiper) => {
          setCurrent(swiper.realIndex + 1);
        }}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        speed={700}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="lg:translate-x-[5%]">
            <div>
              <img
                src={image.src}
                className="w-full h-96 lg:h-full object-cover"
                ref={views[index][0]}
              />
              <div
                className={`absolute top-0 left-0 h-full w-full bg-gray-100 lg:w-2/5 flex flex-col text-center lg:text-left lg:p-32 p-10 opacity-0 ${
                  views[index][1]
                    ? `${
                        index % 2 === 0
                          ? `animate-flip-up`
                          : `animate-flip-down`
                      } animate-ease-out animate-duration-700 opacity-90 lg:opacity-100 animate-delay-1000`
                    : ""
                }`}
              >
                <p
                  className={`text-md font-semibold text-gray-900  py-5 ${
                    views[index][1]
                      ? "animate-flip-down animate-ease-out animate-delay-2000 animate-duration-1500"
                      : ""
                  }`}
                >
                  {image.subScript}
                </p>

                {/* Title */}
                <h2
                  className={`lg:text-5xl text-2xl text-gray-900 lg:mt-2  lg:my-3 leading-15 ${
                    views[index][1]
                      ? "animate-fade-left animate-ease-out animate-delay-2000 animate-duration-1500"
                      : ""
                  }`}
                >
                  {image.content}
                </h2>

                {/* Date */}
                {/* <p
                  className={`text-orange-300 font-semibold mt-3 mb-10 ${
                    views[index][1]
                      ? "animate-fade-right animate-ease-out animate-delay-2000 animate-duration-1500"
                      : ""
                  }`}
                >
                  MAY 28, 2023
                </p> */}

                {/* Button */}
                <div className="flex lg:justify-start justify-center">
                  <Link
                    to={image.link}
                    className={`relative flex items-center mt-[30px] lg:w-auto group ${
                      views[index][1]
                        ? "animate-flip-down animate-ease-out animate-delay-2000 animate-duration-1500"
                        : ""
                    }`}
                  >
                    {/* Left Part (Text) */}
                    <p className="bg-sky-500 font-black uppercase group-hover:bg-[#54c1e5] w-full lg:w-auto text-white lg:px-[50px] md:px-[40px] lg:py-[25px] py-[17px] pl-[45px] pr-[95px] flex items-center justify-center text-[14px] tracking-[0.2em] leading-[1.85]">
                      see details
                    </p>

                    {/* Right Part (Arrow) */}
                    <span className="absolute top-0 bottom-0 md:right-[-40px] right-0 bg-[#54c1e5] group-hover:bg-sky-500 flex items-center justify-center px-[20px]">
                      <ChevronRight
                        size={27}
                        className="text-white group-hover:animate-shake"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="lg:hidden flex justify-center mt-8 ">
        {images.map((slide, index) => (
          <CircleDot
            key={index}
            className={`pagination-dot mx-[5px] ${
              index + 1 === current ? "text-[#eea660]" : "text-gray-300"
            }`}
            size={24}
          />
        ))}
      </div>
      <div className="hidden lg:flex lg:items-center lg:gap-3 lg:bg-gray-100 lg:px-18 lg:py-6 lg:absolute lg:bottom-24 lg:right-0 lg:z-50">
        {/* Custom Pagination */}
        <div className="text-gray-400 text-6xl pr-6">
          {String(current).padStart(2, "0")}
          <span className="text-[#54c1e5] text-3xl">
            {" "}
            / {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Custom Navigation */}
        <div className="group">
          <button className="custom-prev w-12 h-12 border rounded-full flex items-center justify-center  shadow text-gray-600 group-hover:border-[#54c1e5]">
            <ArrowLeftIcon className="w-6 h-6 text-gray-900 group-hover:text-[#54c1e5] font-bold" />
          </button>
        </div>
        <div className="group">
          <button className="custom-next w-12 h-12 border rounded-full flex items-center justify-center shadow text-gray-600 group-hover:border-[#54c1e5]">
            <ArrowRightIcon className="w-6 h-6 text-gray-900 group-hover:text-[#54c1e5] font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderCarousels;
