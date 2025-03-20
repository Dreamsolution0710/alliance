import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";

const images = [
  {
    src: "/assets/images/headerslides/headerslide1.webp",
    alt: "Slide 1",
    subScript: "Alliance Plastics – A Foundation of Trust",
    content: " Built on service, reliability, lasting partnerships",
  },
  {
    src: "/assets/images/headerslides/headerslide2.jpg",
    alt: "Slide 2",
    subScript: "Strategically Located for Efficiency",
    content:
      "Our facility ensures fast, reliable delivery, seamless operations",
  },
  {
    src: "/assets/images/headerslides/headerslide3.jpg",
    alt: "Slide 3",
    subScript: "Cutting-Edge Manufacturing Technology",
    content: "North america's, 1st 67-layer, stretch films",
  },
  // {
  //   src: "/assets/images/headerslides/headerslide4.jpg",
  //   alt: "Slide 4",
  //   subScript: "GLOBALPACK",
  //   content: "MADE IN USA",
  // },
];

const SCROLL_DELAY = 2000; // Increased delay to prevent accidental scrolling
const TRANSITION_SPEED = 1800; // Slower transition for smoother effect
const SCROLL_SENSITIVITY = 0.1; // Reduced sensitivity for better control

const HeaderCarousels = () => {
  const [allowPageScroll, setAllowPageScroll] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const swiperRef = useRef(null);
  const scrollTimeout = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 80% of the element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleWheel = (event) => {
      const swiper = swiperRef.current?.swiper;

      if (allowPageScroll || isScrolling || !swiper) return; // Allow normal scrolling when applicable
      event.preventDefault();

      setIsScrolling(true);

      if (event.deltaY > 0) {
        if (swiper.isEnd) {
          setAllowPageScroll(true); // Unlock page scrolling when at the last slide
        } else {
          swiper.slideNext();
        }
      } else {
        swiper.slidePrev();
      }

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, SCROLL_DELAY);
    };

    if (!allowPageScroll) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout.current);
    };
  }, [allowPageScroll, isScrolling]);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden relative">
      <Swiper
        ref={swiperRef}
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={{
          forceToAxis: true,
          sensitivity: SCROLL_SENSITIVITY,
          releaseOnEdges: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={TRANSITION_SPEED}
        modules={[Mousewheel, Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onReachEnd={() => {
          setTimeout(() => setAllowPageScroll(true), 500);
        }}
        className="h-screen"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={`${index}-${activeIndex}`}
            className="flex items-center justify-center h-screen"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover absolute top-0 left-0"
            />
            <div
              className={`absolute top-0  lg:bottom-[100%] px-[20px] lg:right-[55%] lg:left-[10%] flex flex-col justify-center items-center bg-gradient-to-b from-sky-500/50 to-sky-700/50 transition-all duration-700 opacity-0 ease-in-out ${
                isInView ? "animate-flip-down opacity-100" : ""
              }`}
              style={{
                animationFillMode: "forwards",
                animationDelay: "500ms",
                animationDuration: "1200ms",
              }}
              onAnimationEnd={(e) => {
                e.target.style.bottom = "0";
                setTimeout(() => {
                  e.target.style.bottom = "30%";
                }, 500);
              }}
            >
              <p
                className="text-lg md:text-2xl font-bold uppercase py-5 text-white bg-clip-text bg-gradient-to-r from-white to-white/80 tracking-[0.15em] transform hover:scale-105 transition-all duration-500 ease-in-out font-poppins opacity-0 animate-fade-up text-center"
                style={{
                  animationDelay: "1700ms",
                  animationDuration: "800ms",
                  animationFillMode: "forwards",
                }}
              >
                {image.subScript}
              </p>
              <h2
                className="lg:text-4xl md:text-3xl uppercase text-3xl font-extrabold text-center lg:mt-3 lg:my-4 leading-relaxed text-white bg-clip-text bg-gradient-to-r from-white to-white/80 tracking-[0.1em] transform hover:scale-105 transition-all duration-500 ease-in-out font-playfair opacity-0 animate-fade-up"
                style={{
                  animationDelay: "2500ms",
                  animationDuration: "800ms",
                  animationFillMode: "forwards",
                }}
              >
                {image.content &&
                  image.content.split(",").map((item, index) => (
                    <>
                      {item}
                      <br />
                    </>
                  ))}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {!allowPageScroll && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-amber-200 font-poppins text-lg animate-bounce">
          Scroll down ↓
        </div>
      )}

      {/* Dummy Page Content Below */}
      <div className="h-[100vh] bg-gray-900 text-white flex items-center justify-center text-3xl">
        Page Content Below
      </div>
    </div>
  );
};

export default HeaderCarousels;
