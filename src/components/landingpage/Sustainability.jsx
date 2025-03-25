import React from "react";
import { useInView } from "react-intersection-observer";
import PlasticCard from "../utils/PlasticCard";

const sustainability = [
  {
    src: "/assets/images/whychooseus/investingintech.webp",
    title: "Investing in Tech, People & You",
    content:
      "Our investment is in the technology and people and undying thirst to make you win.",
  },
  {
    src: "/assets/images/whychooseus/standout.webp",
    title: "Stand Out, Not Compete",
    content:
      "We want you to have something different and not have to compete against yourself.",
  },
  {
    src: "/assets/images/whychooseus/unmatchedtechnology.webp",
    title: "Unmatched Technology, Your Edge",
    content:
      "You will have something to talk about, a technology that no one else has. ",
  },
];

const Sustainability = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div className="py-[70px]">
      <div className="mb-[50px]" ref={ref}>
        <h2
          className={`uppercase md:text-[38px] text-[28px] text-[#333333] text-center font-bold tracking-[0.075em] opacity-0 ${
            inView &&
            "opacity-100 animate-fade-up animate-duration-300 animate-ease-linear"
          }`}
        >
          Why Us
        </h2>
        <p
          className={`uppercase text-center text-[#1977cc] md:text-[24px] lg:mx-[255px] md:mx-[100px] mx-[20px] font-normal text-[16px] tracking-[0.025em]  opacity-0 ${
            inView &&
            "opacity-100 animate-fade-up animate-duration-300 animate-ease-linear animate-delay-300"
          }`}
        >
          We don’t want you to be normal, we want you to be great!
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="md:grid lg:grid-cols-3 md:grid-cols-2 max-w-[1200px]">
          {sustainability.map((sus, index) => (
            <div className="px-[25px] mb-[20px]" key={index}>
              <PlasticCard
                src={sus.src}
                title={sus.title}
                content={sus.content}
                delay={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
