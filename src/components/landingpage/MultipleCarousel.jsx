import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller, EffectFade, Autoplay } from "swiper/modules";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import "swiper/css";
import "swiper/css/navigation";

export default function DualCarousel() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3; // Number of slides

  const products = [
    { src: "/assets/images/Product1/eg-home.png" },
    { src: "/assets/images/Product1/handfilmhome.png" },
    { src: "/assets/images/Product1/handtapehome.png" },
  ];

  const subScripts = [
    {
      sub: "With our new and innovative cornerboards, you can now protect your goods like never before. Alliance Plastics’ adjusts to industry-specific packaging needs, providing the ideal cornerboards for all types of goods.",
    },
    {
      sub: "Stretch Film is the product that has helped us become the company we are today. Our years of experience in plastic film, accompanied by great investments in research and innovation, guarantee that our customers receive the highest quality stretch film at the best market price possible.",
    },
    {
      sub: "At Alliance Plastics, we pride ourselves in providing tape solutions for every type of need. Tape is what helps industries stick together. Such a basic and important product must always be reliable and of the best quality to ensure that your goods don’t suffer any damages.",
    },
  ];

  // Sync slide index
  useEffect(() => {
    if (firstSwiper) {
      firstSwiper.on("slideChange", () => {
        setCurrentSlide(firstSwiper.realIndex + 1);
      });
    }
  }, [firstSwiper]);

  return (
    <div className="relative w-full flex items-center flex-col md:flex-row">
      {/* First Carousel */}
      <div className="md:w-[50%] w-[100%] h-[300px] md:h-[500px] ">
        <Swiper
          modules={[Navigation, Controller, EffectFade]}
          effect={"fade"}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="w-full h-full"
          speed={2000}
        >
          {products.map((product, index) => (
            <SwiperSlide className="w-full h-full flex" key={index}>
              <img src={product.src} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Second Carousel (Same Height) */}
      <div className="md:w-[50%] w-[100%] h-auto md:h-[500px] flex items-center justify-center bg-gray-600">
        <Swiper
          modules={[Navigation, Controller, Autoplay]}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          speed={2000}
        >
          {subScripts.map((item, index) => (
            <SwiperSlide key={index} className="">
              <div className="lg:ml-[150px] max-w-2xl flex items-center relative">
                <p className="invisible lg:visible absolute left-[-64px] top-0 text-bold tracking-0 leading-[0.88]  text-[160px] text-gray-500 italic">
                  "
                </p>
                <p className="p-5 text-[24px] tracking-[0.075em] font-medium font-normal">
                  {item.sub}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Controls */}
      <div className="invisible lg:visible flex items-center gap-3 bg-gray-100 sm:px-18 sm:py-6 px-2 py-1 absolute bottom-0 right-0 z-50">
        {/* Custom Pagination */}
        <div className="text-gray-400 text-6xl pr-6">
          {String(currentSlide).padStart(2, "0")}
          <span className="text-[#54c1e5] text-3xl">
            {" "}
            / {String(totalSlides).padStart(2, "0")}
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
            <ArrowRightIcon className="w-6 h-6 text-gray-900 hover:text-[#54c1e5] font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
}
