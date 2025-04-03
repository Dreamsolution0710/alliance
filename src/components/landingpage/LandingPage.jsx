import { useState, useEffect } from "react";
import { useInView } from "./../landingpage/useInView";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import M from "materialize-css";

import "./style.css";
import HeaderCarousels from "./HeaderCarousels";
// import MultipleCarousel from "./MultipleCarousel";
import MemberCard from "./MemberCard";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ToolsComponent from "./ToolsComponent";
import ServicesSection from "./ServicesSection";
import ImageCarousel1 from "./ImageCarousel1";
import ImageCarousel2 from "./ImageCarousel2";
import teams from "/src/assets/team.json";
import Sustainability from "./Sustainability";

const colors = ["bg-gray-100", "bg-sky-300", "bg-orange-300"];

export default function LandingPage() {
  const [colorIndex, setColorIndex] = useState(0);

  const [ref4, isInview4] = useInView(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const elems = document.querySelectorAll(".parallax");
    setTimeout(() => {
      if (window.M && window.M.Parallax) {
        M.Parallax.init(elems);
      }
    }); // Delay initialization
  }, []);

  return (
    <div className="relative z-10 overflow-hidden">
      <HeaderCarousels className="mySwiper1" />
      <div className="flex justify-center items-center bg-white py-[70px]">
        <ServicesSection />
      </div>

      <div className="flex justify-center items-center bg-[rgba(255,255,255,0.8)] relative">
        <div className="parallax">
          <img
            className="absolute left-[50%] bottom-0  z-[-1] min-w-screen  object-cover hidden lg:block"
            style={{
              opacity: 1,
              transform: "translate3d(-50%, 353.071px, 0px)",
            }}
            src="/assets/images/background.webp"
          ></img>
        </div>
        <Sustainability />
      </div>
      <ToolsComponent />
      {/* our team*/}

      <div className="bg-white/80 relative">
        <div className="parallax">
          <img
            className="absolute  bottom-0 object-cover z-[-1] min-w-screen left-[50%] filter grayscale contrast-200 max-h-[800px] hidden lg:block"
            style={{
              opacity: 1,
              transform: "translate3d(-50%, 353px, 0px)",
            }}
            height={"800px"}
            src="/assets/images/teambg.jpg"
          ></img>
        </div>
        <div className="hidden lg:flex lg:justify-center lg:py-[70px]">
          <div className="max-w-[1200px]">
            <div
              className="grid grid-cols-4 gap-5 flex flex-col text-left"
              ref={ref4}
            >
              {/* Team's header */}
              <div className="mb-[30px] px-[15px] w-auto mt-[30px] w-full text-[#151515]">
                <div>
                  <h2 className="text-4xl font-bold uppercase tracking-wide relative">
                    Our Team
                  </h2>
                  <h6
                    className={`${
                      isInview4
                        ? "animate-fade-left animate-duration-300 animate-ease-in-out animate-delay-200"
                        : ""
                    } uppercase text-[#1977cc] mt-[22px] tracking-[0.05em] leading-[1.33333] text-xl font-medium`}
                  >
                    Dedicated Packaging Experts
                  </h6>
                  <p
                    className={`text-[#777777] mt-[24px] text-[18px] ${
                      isInview4
                        ? "animate-fade-right animate-duration-300 animate-ease-in-out animate-delay-500 text-lg"
                        : ""
                    }`}
                  >
                    Alliance Plastics delivers service, quality, and
                    innovation—offering flexible solutions and strong
                    partnerships for distributors.
                  </p>
                </div>
                <div className={`flex gap-4 mt-[35px]`}>
                  <div className="z-[2]">
                    <div
                      className={`relative group ${
                        isInview4
                          ? "animate-fade-right animate-duration-700 animate-ease-in-out animate-delay-500"
                          : ""
                      }`}
                    >
                      <Link
                        to="/contactus"
                        className="lg:w-20 lg:h-18 w-16 h-16 border-2 flex items-center justify-center border-gray-800 "
                      >
                        <EnvelopeIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-800 group-hover:scale-0  transition-all duration-300 hover:invisible" />
                      </Link>
                      <Link
                        to="/contactus"
                        className=" invisible absolute bottom-0 uppercase h-18 text-[15px] font-bold flex items-center w-0 bg-white justify-center border-2 border-gray-800 text-gray-800 group-hover:visible group-hover:delay-100 group-hover:w-[168px] group-hover:transition-width group-hover:ease-in-out group-hover:duration-500"
                      >
                        <p className="z-[1] opacity-0 transition-all hover:text-[#57a4e0] duration-200 group-hover:opacity-100 group-hover:invisible group-hover:delay-400 group-hover:visible">
                          contact us
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`flex z-[1] gap-4 ${
                      isInview4
                        ? "animate-fade-left animate-duration-700 animate-ease-in-out animate-delay-500"
                        : ""
                    }`}
                  >
                    <div className="group z-[-1]">
                      <button className="custom-prev1 lg:w-18 lg:h-18 w-16 h-16 border-2 flex items-center justify-center border-gray-800 group-hover:border-[#57a4e0] group-hover:bg-[#57a4e0] group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
                        <ArrowLeftIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-800 group-hover:text-white group-hover:transition-all group-hover:ease-in-out group-hover:duration-300" />
                      </button>
                    </div>
                    <div className="group">
                      <button className="custom-next1 lg:w-18  lg:h-18 w-16 h-16 border-2 flex items-center justify-center border-gray-800 group-hover:border-[#57a4e0]  group-hover:bg-[#57a4e0] group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
                        <ArrowRightIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-800 group-hover:text-white group-hover:transition-all group-hover:ease-in-out group-hover:duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Team's carousel */}
              <div className="col-span-3 w-auto mx-[-30px] mt-[-40px] mb-[-30px] px-[30px] pt-[40px] pb-[30px]">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={10}
                  modules={[Pagination, A11y, Navigation]}
                  navigation={{
                    nextEl: ".custom-next1",
                    prevEl: ".custom-prev1",
                  }}
                >
                  {teams.map((member, index) => (
                    <SwiperSlide
                      key={index}
                      style={{ width: "270px", height: "400px" }}
                    >
                      <MemberCard
                        position={member.position}
                        name={member.name}
                        src={member.src}
                        email={member.email}
                        path={member.path}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex flex-col text-center">
            <div className="my-[30px] px-[15px] w-auto">
              <div>
                <h3 className="uppercase text-[#151515] lg:text-[44px] text-[30px] leading-[1.22727] font-normal tracking-[0.1em]">
                  our team
                </h3>
                <h6 className="uppercase text-[#eeaF520] mt-[22px] font-normal tracking-[0.05em] text-[#eeaf5e] leading-[1.33333]">
                  Dedicated Packaging Experts
                </h6>
                <p className="text-[#777777] mt-[24px] text-[15px] tracking-widest">
                  Alliance Plastics delivers service, quality, and
                  innovation—offering flexible solutions and strong partnerships
                  for distributors.
                </p>
              </div>
              <div className="flex gap-5 mt-[35px] justify-center">
                <div>
                  <div className="relative group">
                    <button className="uppercase h-15 text-[12px] font-bold flex items-center bg-white justify-center border-2 border-gray-800 text-gray-800 w-[115px]">
                      <p className="transition-color duration-200 delay-300 hover:text-[#57a4e0]">
                        contact us
                      </p>
                    </button>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="group">
                    <button className="custom-prev1 lg:w-18 lg:h-18 w-15 h-15 border-2 flex items-center justify-center border-gray-800 group-hover:border-[#57a4e0] group-hover:bg-[#57a4e0] group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
                      <ArrowLeftIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-800 group-hover:text-white group-hover:transition-all group-hover:ease-in-out group-hover:duration-300" />
                    </button>
                  </div>
                  <div className="group">
                    <button className="custom-next1 lg:w-18 lg:h-18 w-15 h-15 border-2 flex items-center justify-center border-gray-800 group-hover:border-[#57a4e0]  group-hover:bg-[#57a4e0] group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
                      <ArrowRightIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-800 group-hover:text-white group-hover:transition-all group-hover:ease-in-out group-hover:duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-[30px]">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                modules={[Pagination, A11y, Navigation]}
                navigation={{
                  nextEl: ".custom-next1",
                  prevEl: ".custom-prev1",
                }}
              >
                {teams.map((member, index) => (
                  <SwiperSlide
                    key={index}
                    // style={{ width: "270px", height: "365px" }}
                  >
                    <MemberCard
                      position={member.position}
                      name={member.name}
                      src={member.src}
                      email={member.email}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[70px] flex flex-col gap-2 bg-white">
        <ImageCarousel1 />
        <ImageCarousel2 />
      </div>
      {/* <div className="pb-[100px]">
        <div>
          <h1 className="text-gray-900 uppercase text-4xl text-center mb-20">
            Our Products
          </h1>
          </div>
        <MultipleCarousel />
      </div> */}
    </div>
  );
}
