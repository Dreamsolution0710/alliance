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
    src: "/assets/images/1200x1600image/image1.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image2.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image3.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image4.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image5.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image7.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image8.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image9.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image10.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image11.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image12.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image14.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image15.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image16.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image17.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image18.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image19.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image20.jpg",
  },
  {
    src: "/assets/images/1200x1600image/image21.jpg",
  },
];

const ImageCarousel = () => {
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
        slidesPerView={5}
        grid={{
          rows: 2,
          fill: true,
        }}
        spaceBetween={10}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Grid, Pagination, Autoplay]}
        className="w-full h-[100vh] px-4"
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

export default ImageCarousel;
