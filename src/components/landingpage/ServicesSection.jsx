import React from "react";
import { useInView } from "react-intersection-observer";
import ServiceCard from "../utils/ServiceCard";
import { Link } from "react-router-dom";

const services = [
  {
    src: "/assets/images/AddProducts/bolt-hand.png",
    title: "Hand Films",
    content:
      "We offer standard and high-performance stretch films with excellent puncture and tear resistance, providing a stiffer, stronger design with quiet application and clear optics.",
  },
  {
    src: "/assets/images/AddProducts/steelflex-nano.png",
    title: "Machine Films",
    content:
      "67-layer film options with maximum load containment, sustainable source reduction, and excellent puncture and tear resistance for superior strength and eco-friendly performance.",
  },
  {
    src: "/assets/images/AddProducts/edgeguard.png",
    title: "EdgeGuard",
    content:
      "We offer tints and opaque colors, 6-month or 12-month UVI protection, narrow and wide web options, plus private labeling and branding for customized packaging solutions.",
  },
];

const OurServices = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div className="max-w-[1200px]">
      <div className="mb-[50px]" ref={ref}>
        <h2
          className={`uppercase md:text-[38px] text-[28px] text-[#333333] text-center font-bold tracking-[0.075em] opacity-0 ${
            inView &&
            "opacity-100 animate-fade-up animate-duration-300 animate-ease-linear"
          }`}
        >
          our products
        </h2>
        {/* <p
          className={`uppercase text-center text-[#1977cc] md:text-[22px] lg:mx-[255px] md:mx-[100px] mx-[20px] text-[16px] tracking-[0.025em] font-light opacity-0 ${
            inView &&
            "opacity-100 animate-fade-up animate-duration-300 animate-ease-linear animate-delay-300"
          }`}
        >
          We deliver advanced, eco-friendly stretch film solutions for superior
          protection.
        </p> */}
      </div>
      <div className="flex justify-between gap-4 items-center flex-col md:flex-row">
        {services.map((service, index) => (
          <Link className="px-[15px]" key={index} to={"/products/films"}>
            <ServiceCard
              src={service.src}
              title={service.title}
              delay={index}
              content={service.content}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
