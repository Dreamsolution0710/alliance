import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Important for fade effect
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import {
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
  EffectFade,
  Pagination,
} from "swiper/modules";
import Youtuber from "./../../allianceAcademy/Youtuber";
import HeaderSlot from "../../utils/HeaderSlot";

const Productview = ({
  title,
  description,
  carouselImg,
  contextImg,
  youtubeId,
  headerImg,
  headerTitle,
  router,
  prevLink,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeaderSlot imgSrc={headerImg} title={headerTitle} router={router} />
      <div className="flex justify-center items-center lg:py-[90px] py-[50px] overflow-hidden">
        <div className="max-w-[1200px] w-[1200px] flex flex-col-reverse lg:flex-row">
          <div className="lg:w-5/12 w-auto px-[30px] lg:px-0 text-center md:text-left ">
            <h4 className="uppercase text-[#151515] md:text-[36px] text-[26px] text-center lg:text-left leading-[1.27778] font-medium tracking-[0.1em]  animate-fade-right animate-duration-200 animate-delay-1000 animate-ease-linear">
              {title}
            </h4>
            <div className="mt-[40px] text-[#777777] animate-fade-right animate-duration-200 animate-delay-1300 animate-ease-linear">
              <p>{description}</p>
            </div>
            {/* {console.log(contextImg)} */}
            {contextImg
              ? contextImg.map((context, index) => (
                  <div
                    key={index}
                    className="mt-[30px]  animate-duration-200 animate-delay-1300 animate-ease-linear"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <p className="text-center text-[#151515] text-[26px] font-medium mb-[20px] animate-fade-right">
                      {context.title}
                    </p>
                    <div className="flex justify-center">
                      <img
                        src={context.src}
                        className="animate-fade animate-duration-200 animate-delay-1000 animate-ease-linear"
                      />
                    </div>
                  </div>
                ))
              : ""}
            <div className="flex flex-col items-center lg:items-start animate-fade-up animate-duration-200 animate-delay-2000 animate-ease-linear">
              <div className="ml-[-16px] mb-[-16px] mt-[40px] flex items-start">
                <p className="uppercase mb-[16px] ml-[16px] text-[#151515]">
                  share
                </p>
                <div className="flex items-center gap-3 mb-[16px] ml-[16px] justify-center lg:justify-start text-[#151515]">
                  <Link
                    className="hover:text-[#57a4e0]"
                    to={
                      "https://www.facebook.com/pages/Alliance-Plastics/775908369189871?fref=ts"
                    }
                    target="_blank"
                  >
                    <FaFacebookF className=" m-[5px] p-[-5px]" />
                  </Link>
                  <Link
                    className="hover:text-[#57a4e0]"
                    to={"https://twitter.com/AlliancePlastic"}
                    target="_blank"
                  >
                    <FaTwitter className="m-[5px] p-[-5px]" />
                  </Link>
                  <Link className="hover:text-[#57a4e0]">
                    <FaInstagram className="m-[5px] p-[-5px]" />
                  </Link>
                  <Link className="hover:text-[#57a4e0]">
                    <FaGooglePlusG className="m-[5px] p-[-5px]" />
                  </Link>
                </div>
              </div>
              <div className="w-fit lg:mt-[35px] mt-[20px] uppercase text-white bg-[#54c1e5]  text-[14px] leading-[1.85] lg:px-[55px]  lg:py-[30px] py-[20px] px-[45px] tracking-[0.2em] font-black hover:bg-[#fee25f] hover:text-[#151515] transition-all duration-300 ease-linear">
                <Link to="/contactus" className="px-[15px]">
                  contact us
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-7/12 px-[15px] flex flex-col ">
            <div className="hidden lg:block ">
              <Swiper
                spaceBetween={10}
                fadeEffect={{ crossFade: true }}
                navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
                loop={true}
                effect={"fade"}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[
                  FreeMode,
                  Navigation,
                  Thumbs,
                  Pagination,
                  Autoplay,
                  EffectFade,
                ]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                }}
                className="mySwiper2 animate-fade-left animate-duration-200 animate-delay-1000 animate-ease-linear"
                onSlideChange={(swiper) => {
                  setCurrent(swiper.realIndex + 1);
                }}
              >
                {carouselImg
                  ? carouselImg.map((carou, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={carou}
                          className="object-cover max-h-[374px]"
                          width={"670px"}
                          height={"374px"}
                        />
                      </SwiperSlide>
                    ))
                  : ""}
              </Swiper>
              <div className="border-1 border-[#e1e1e1] border-collapse pl-[30px] py-[26px] mb-[20px] animate-fade-left animate-duration-200 animate-delay-1300 animate-ease-linear">
                <div className="flex items-center gap-3  bottom-24 right-0 z-50 ">
                  {/* Custom Pagination */}
                  <p className="text-[#151515] leading-[22px] tracking-[0.05em] font-normal text-[18px]">
                    {String(current).padStart(2, "0")}
                  </p>
                  <span className="grow" />

                  {/* Custom Navigation */}
                  <div className="flex ">
                    <div className="group">
                      <button className="custom-prev w-16 border-x-1 border-[#e1e1e1] my-[-26px] py-[26px] flex items-center justify-center group-hover:text-[#54c1e5]">
                        <ArrowLeftIcon className="w-6 h-6 text-gray-900 group-hover:text-[#54c1e5] font-bold" />
                      </button>
                    </div>
                    <div className="group">
                      <button className="custom-next w-16 flex items-center justify-center  group-hover:text-[#54c1e5]">
                        <ArrowRightIcon className="w-6 h-6 text-gray-900 hover:text-[#54c1e5] font-bold" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs, Autoplay, Pagination]}
                className="mySwiper animate-fade-left animate-duration-200 animate-delay-1600 animate-ease-linear"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                }}
                loop={true}
              >
                {carouselImg
                  ? carouselImg.map((carou, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={carou}
                          width={"160px"}
                          height={"160px"}
                          className="object-cover min-h-[160px]"
                        />
                      </SwiperSlide>
                    ))
                  : ""}
              </Swiper>
            </div>
            <div className="w-100 lg:hidden">
              <div>
                <Swiper
                  spaceBetween={10}
                  fadeEffect={{ crossFade: true }}
                  navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                  }}
                  loop={true}
                  effect={"fade"}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs, Autoplay, EffectFade]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                  }}
                  className="mySwiper2"
                  onSlideChange={(swiper) => {
                    setCurrent(swiper.realIndex + 1);
                  }}
                >
                  {carouselImg
                    ? carouselImg.map((carou, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={carou}
                            className="object-cover max-h-[374px]"
                            width={"670px"}
                            height={"374px"}
                          />
                        </SwiperSlide>
                      ))
                    : ""}
                </Swiper>
                <div className="border-1 border-[#e1e1e1] border-collapse pl-[30px] py-[26px] mb-[20px]">
                  <div className="flex items-center gap-3  bottom-24 right-0 z-50 ">
                    {/* Custom Pagination */}
                    <p className="text-[#151515] leading-[22px] tracking-[0.05em] font-normal text-[18px]">
                      {String(current).padStart(2, "#")}
                    </p>
                    <span className="grow" />

                    {/* Custom Navigation */}
                    <div className="flex ">
                      <div className="group">
                        <button className="custom-prev w-16 border-x-1 border-[#e1e1e1] my-[-26px] py-[26px] flex items-center justify-center group-hover:text-[#54c1e5]">
                          <ArrowLeftIcon className="w-6 h-6 text-gray-900 group-hover:text-[#54c1e5] font-bold" />
                        </button>
                      </div>
                      <div className="group">
                        <button className="custom-next w-16 flex items-center justify-center  group-hover:text-[#54c1e5]">
                          <ArrowRightIcon className="w-6 h-6 text-gray-900 hover:text-[#54c1e5] font-bold" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={3}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {carouselImg
                    ? carouselImg.map((carou, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={carou}
                            width={"160px"}
                            height={"160px"}
                            className="object-cover min-h-[160px]"
                          />
                        </SwiperSlide>
                      ))
                    : ""}
                </Swiper>
              </div>
            </div>
            {youtubeId
              ? youtubeId.map((id, index) => (
                  <div className="flex justify-center py-[100px] animate-fade-up animate-duration-200 animate-delay-2000 animate-ease-linear">
                    <Youtuber videoId={id} />
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productview;
