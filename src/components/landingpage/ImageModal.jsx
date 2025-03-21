import { useEffect, useState, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/controller";
import {
  Navigation,
  Mousewheel,
  Thumbs,
  FreeMode,
  Controller,
} from "swiper/modules";
import "./style.css";

export default function ImageModal({ isOpen, onClose, images, currentIndex }) {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle scroll lock and swiper cleanup
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable background scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling when modal closes
      // Cleanup Swiper instances when modal closes
      if (mainSwiper) {
        mainSwiper.destroy();
        setMainSwiper(null);
      }
      if (thumbsSwiper) {
        thumbsSwiper.destroy();
        setThumbsSwiper(null);
      }
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
      // Ensure Swiper instances are destroyed on unmount
      if (mainSwiper) mainSwiper.destroy();
      if (thumbsSwiper) thumbsSwiper.destroy();
    };
  }, [isOpen, mainSwiper, thumbsSwiper]);

  useEffect(() => {
    if (mainSwiper && thumbsSwiper) {
      mainSwiper.controller.control = thumbsSwiper;
      thumbsSwiper.controller.control = mainSwiper;
    }
  }, [mainSwiper, thumbsSwiper]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-[90px] right-0 left-0 bottom-0 flex items-center justify-center z-150!">
      <div className="relative shadow-lg p-4 w-full h-full flex flex-col bg-[rgba(255,255,255,0.7)] overflow-y-auto">
        {/* Header */}
        <div className="absolute right-[16px] top-[16px] z-200">
          <button className="p-2 rounded hover:bg-gray-200" onClick={onClose}>
            <XMarkIcon className="w-8 h-8 text-black" />
          </button>
        </div>
        {/* Main Swiper */}
        <Swiper
          onSwiper={setMainSwiper}
          initialSlide={currentIndex}
          navigation={true}
          modules={[Navigation, Mousewheel, Thumbs, Controller]}
          className="w-full flex-1"
          mousewheel={true}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          initialSlide={currentIndex}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          spaceBetween={10}
          slidesPerView={8}
          centeredSlides={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs, Mousewheel, Controller]}
          className="w-full mt-[10px] bg-[rgba(22,22,22,0.5)] p-4 rounded-md "
          mousewheel={true}
          breakpoints={{
            640: {
              slidesPerView: 12, // For medium screens (md)
            },
            1024: {
              slidesPerView: 18, // For large screens (lg)
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className={`object-contain ${
                  index === activeIndex ? "border-2 border-white " : ""
                }`}
              />
              {index === activeIndex ? (
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-sky-500/50 to-sky-700/50" />
              ) : (
                ""
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
