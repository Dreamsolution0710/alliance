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

export default function ImageModal({ isOpen, onClose, images, currentIndex }) {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable background scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling when modal closes
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [isOpen]);

  useEffect(() => {
    if (mainSwiper && thumbsSwiper) {
      mainSwiper.controller.control = thumbsSwiper;
      thumbsSwiper.controller.control = mainSwiper;
    }
  }, [mainSwiper, thumbsSwiper]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-[90px] bottom-0 left-0 right-0 flex items-center justify-center z-[150]">
      <div className="relative shadow-lg p-4 w-full h-full flex flex-col bg-gradient-to-b from-sky-500/50 to-sky-700/50 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-2 pb-2">
          <span className="font-semibold"></span>
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
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs, Mousewheel, Controller]}
          className="w-1/3 mt-[10px]"
          mousewheel={true}
          freeMode={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-32 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
