import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination, Autoplay } from "swiper/modules";
import CarouselImage_1 from "./CarouselImage_1";
import ImageModal from "./ImageModal";

const images = [
  {
    src: "/assets/images/vertical_image/carousel_image2(1).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(2).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(3).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(4).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(5).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(6).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(7).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(8).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(9).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(10).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(12).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(13).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(14).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(15).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(16).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(17).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(18).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(19).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(20).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(21).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(23).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(22).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(24).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(25).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(26).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(27).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(28).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(29).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(30).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(31).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(32).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(33).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(34).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(35).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(36).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(37).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(38).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(39).jpeg",
  },
  {
    src: "/assets/images/vertical_image/carousel_image2(40).jpeg",
  },
];

const ImageCarousel1 = () => {
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
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Grid, Pagination, Autoplay]}
        className="w-full px-4"
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 5, // For medium screens (md)
          },
          1024: {
            slidesPerView: 10, // For large screens (lg)
          },
        }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} onClick={() => openModal(index)}>
            <CarouselImage_1 src={item.src} />
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

export default ImageCarousel1;
