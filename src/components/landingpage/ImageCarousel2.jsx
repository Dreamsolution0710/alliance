import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination, Autoplay } from "swiper/modules";
import CarouselImage from "./CarouselImage";
import ImageModal from "./ImageModal";

const images = [
  {
    src: "/assets/images/horizontal_image/carouse_image1(1).jpeg",
  },
  {
    src: "/assets/images/horizontal_image/carouse_image1(2).jpeg",
  },
  {
    src: "/assets/images/horizontal_image/carouse_image1(3).png",
  },
  {
    src: "/assets/images/horizontal_image/carouse_image1(4).jpeg",
  },
  {
    src: "/assets/images/horizontal_image/carouse_image1(5).jpeg",
  },
  {
    src: "/assets/images/horizontal_image/carouse_image1(6).jpeg",
  },
  {
    src: "/assets/images/horizontal_image/carouse_image1(7).jpeg",
  },
  {
    src: "/assets/images/horizontal_image/carouse_image1(8).jpeg",
  },
  {
    src: "/assets/images/horizontal_image/carouse_image1(9).jpeg",
  },
  {
    src: "/assets/images/horizontal_image/carouse_image1(10).jpeg",
  },
  {
    src: "/assets/images/horizontal_image/carouse_image1(11).webp",
  },
  {
    src: "/assets/images/horizontal_image/carouse_image1(12).webp",
  },
  {
    src: "/assets/images/horizontal_image/carouse_image1(13).webp",
  },
  {
    src: "/assets/images/horizontal_image/carouse_image1(14).webp",
  },
];

const ImageCarousel2 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentIndex(0);
    setModalOpen(false);
  };

  return (
    <div className=" flex items-center justify-center">
      <Swiper
        slidesPerView={1}
        dir="rtl"
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Grid, Pagination, Autoplay]}
        className="w-full px-4"
        breakpoints={{
          640: {
            slidesPerView: 3, // For medium screens (md)
          },
          1024: {
            slidesPerView: 6, // For large screens (lg)
          },
        }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} onClick={() => openModal(index)}>
            <CarouselImage src={item.src} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        images={images}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default ImageCarousel2;
