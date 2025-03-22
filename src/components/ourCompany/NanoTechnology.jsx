import React, { useEffect, useState } from "react";
import HeaderSlot from "../utils/HeaderSlot";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  Layers3Icon,
  LucideCloudLightning,
  LucideZap,
  TriangleIcon,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const data = [
  {
    extruder: "A 75/33D",
    rows: 2,
    dosing: [1, 4],
    weight: ["99.7", "0.3"],
    material: ["C4", "PPA"],
    density: "0.919",
    thickness: "10.0",
  },
  {
    extruder: "B 90/33D",
    rows: 2,
    dosing: [1, 2],
    weight: ["100", "0"],
    material: ["mLLDPE MFI 4,5", ""],
    density: "0.918",
    thickness: "25.0",
  },
  {
    extruder: "C 90/33D",
    rows: 2,
    dosing: [1, 2],
    weight: ["100", ""],
    material: ["mLLDPE MFI 3,5", ""],
    density: "0.918",
    thickness: "25.0",
  },
  {
    extruder: "D 75/33D",
    rows: 2,
    dosing: [1, 2],
    weight: ["100", ""],
    material: ["mLLDPE MFI 4,5", ""],
    density: "0.918",
    thickness: "10.0",
  },
  {
    extruder: "E 75/33D",
    rows: 2,
    dosing: [1, 2],
    weight: ["100", ""],
    material: ["mLLDPE MFI 3,5", ""],
    density: "0.918",
    thickness: "10.0",
  },
  {
    extruder: "F 90/33D",
    rows: 2,
    dosing: [1, 2],
    weight: ["100", ""],
    material: ["RC-PP", ""],
    density: "0.905",
    thickness: "10.0",
  },
  {
    extruder: "G 75/33D",
    rows: 2,
    dosing: [1, 4],
    weight: ["99.7", "0.3"],
    material: ["Cling", "PPA"],
    density: "0.906",
    thickness: "10.0",
  },
];

const NanoTechnology = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when it enters the viewport
    threshold: 0.2, // Trigger when 20% of the element is in view
  });
  const { ref: advantagesRef, inView: advantagesInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: skinLayerRef, inView: skinLayerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animateInView = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const skinLayerAnimateInView = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true, // Ensures the animation triggers only once when the section comes into view
    threshold: 0.5, // Adjust the threshold as needed (50% visibility)
  });
  const { ref: containerRef, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true, // Trigger only once when it enters the view
    threshold: 0.1, // When 10% of the element is visible
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true, // Trigger animation only once when it enters the viewport
    threshold: 0.2, // Trigger when 20% of the element is in view
  });
  const { ref: refBlock, inView: inViewBlock } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: testingResult, inView: resultInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [animate, setAnimate] = useState(false);

  const { ref: chartRef, inView: inViewChart } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: machineRef, inView: inViewMachine } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (resultInView) setAnimate(true);
  }, [resultInView]);

  return (
    <div className="relative overflow-hidden">
      <HeaderSlot
        imgSrc={"/assets/images/nano67.webp"}
        title={"Nano 67"}
        router={[
          {
            title: "home",
            src: "/",
          },
          {
            title: "our Company",
            src: "/",
          },
          "Nano 67",
        ]}
      />
      <div className="flex justify-center bg-white">
        <div className="max-w-[1200px] w-full">
          <div>
            <div className="mt-[50px]">
              <motion.h3
                ref={ref}
                className="text-white w-fit md:text-[44px] text-[32px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold"
                initial={{
                  opacity: 0,
                  y: -200, // Large movement from top
                  scale: 0.5, // Start small
                  rotate: -90, // Start rotated
                }}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : -200,
                  scale: inView ? 1 : 0.5,
                  rotate: inView ? 0 : -90,
                }}
                transition={{
                  duration: 1.5, // Longer duration for smoother and more dramatic transition
                  type: "spring", // Spring-based easing for more dynamic movement
                  stiffness: 100, // Stiffer spring for a more forceful movement
                }}
              >
                Summary
              </motion.h3>
              <div className="flex items-center justify-center mt-[50px]">
                <motion.p
                  className="md:text-[36px] text-[24px] w-[70%] text-left text-[#151515] tracking-[0.075em]"
                  initial={{
                    opacity: 0,
                    x: -300, // Large movement from the left
                    scale: 0.5, // Start small
                    rotate: 45, // Start rotated
                  }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    x: inView ? 0 : -300,
                    scale: inView ? 1 : 0.5,
                    rotate: inView ? 0 : 45,
                  }}
                  transition={{
                    duration: 2, // Longer duration for a dramatic entrance
                    type: "spring", // Spring-based easing for more dynamic movement
                    stiffness: 150, // Even stiffer spring for dramatic effect
                    delay: 0.3, // Slight delay for a staggered effect with the heading
                  }}
                >
                  NANO <span className="text-[#1977cc]">67 </span> <b>FIRST</b>{" "}
                  in the market and the <b>FIRST</b> with{" "}
                  <span className="text-[#1977cc]">70% nanostructure.</span>
                </motion.p>
              </div>
            </div>
            <div className="flex mt-[50px] gap-10 justify-center flex-col md:flex-row">
              <motion.div
                ref={advantagesRef}
                className="flex flex-col gap-5"
                initial="hidden"
                animate={advantagesInView ? "visible" : "hidden"}
                variants={animateInView}
              >
                <p className="uppercase text-[28px] bg-[#54c1e5] text-white font-bold text-center py-[10px] rounded-lg">
                  Advantages
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 text-[#1977cc] border-2 border-[#1977cc] min-h-16 flex justify-center items-center rounded-full">
                    <LucideZap size={48} />
                  </div>
                  <p className="text-[#151515] text-[28px] font-medium">
                    Higher Tear
                    <br /> propagation
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 text-[#1977cc] border-2 border-[#1977cc] min-h-16 flex justify-center items-center rounded-full">
                    <TriangleIcon size={48} />
                  </div>
                  <p className="text-[#151515] text-[28px] font-medium">
                    Higher Puncture
                    <br /> resistance
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 text-[#1977cc] border-2 border-[#1977cc] min-h-16 flex justify-center items-center rounded-full">
                    <Layers3Icon size={48} />
                  </div>
                  <p className="text-[#151515] text-[32px] font-medium">
                    Higher Ultimate
                  </p>
                </div>
              </motion.div>

              <motion.div
                ref={skinLayerRef}
                className="flex flex-col md:w-[40%] w-[100%] gap-[1px] w-[100%]"
                initial="hidden"
                animate={skinLayerInView ? "visible" : "hidden"}
                variants={skinLayerAnimateInView}
              >
                <div className="bg-[#1955cc] text-white text-center text-[18px] p-[10px]">
                  Skin Layer 10%
                </div>

                <div className="bg-[#1966cc] text-center text-[18px] relative">
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <p className="absolute top-[50%] left-[50%] bg- -translate-x-[50%] -translate-y-[50%] text-[22px] text-white">
                    Nano pack 1
                  </p>
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(255,255,255,0.4)]"></div>
                </div>
                <div className="bg-[#1966cc] text-center text-[18px] relative">
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[22px] text-white">
                    Nano pack 3
                  </p>
                </div>
                <div className="bg-[#1933cc] text-white text-center text-[18px] p-[10px]">
                  Core Layer 10%
                </div>

                <div className="bg-[#1966cc] text-center text-[18px] relative">
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[22px] text-white">
                    Nano pack 4
                  </p>
                </div>
                <div className="bg-[#1966cc] text-center text-[18px] relative">
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <hr className="border-[#1999cc] py-[2px] border-y-1" />
                  <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  text-white text-[22px]">
                    Nano pack 2
                  </p>
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(255,255,255,0.4)]"></div>
                </div>

                <div className="bg-[#1955cc] text-white text-center text-[18px] p-[10px]">
                  Skin Layer 10%
                </div>
              </motion.div>
            </div>
          </div>
          <div>
            <div className="mt-[50px] w-fit">
              <h3 className="text-white md:text-[44px] text-[32px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold">
                Nanolayer History
              </h3>
            </div>
            <motion.div
              ref={sectionRef}
              className="md:grid grid-cols-3 gap-10 flex flex-col px-[15px] mt-[30px] relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: sectionInView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <ul className="absolute left-[30px] bottom-0 list-disc text-[#151515] text-[22px] hidden lg:block">
                <li>Only 20% nanostructure</li>
                <li>2 extruder with 10% each</li>
                <li className="font-bold">
                  Difficult to use due to high pressure
                </li>
              </ul>
              <div className="flex flex-col gap-5">
                <h5 className="text-[#1977cc] uppercase text-[36px] font-bold text-center">
                  <span className="text-[#1955cc]">5 Extruder</span>
                  <br />
                  27 layer
                </h5>
                <div className="flex flex-col gap-[1px]">
                  <div className="bg-[#1955cc] text-white text-center text-[18px] p-[10px]">
                    Skin
                  </div>

                  <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                    Bulk1
                  </div>
                  <div className="bg-[#1966cc] text-center text-[18px]">
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                  </div>
                  <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                    Bulk2
                  </div>
                  <div className="bg-[#1966cc] text-center text-[18px]">
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                  </div>
                  <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                    Bulk3
                  </div>

                  <div className="bg-[#19aacc] text-white text-center text-[18px] p-[10px]">
                    Skin
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h5 className="text-[#1977cc] uppercase text-[36px] font-bold text-center">
                  <span className="text-[#1955cc]">6 Extruder</span>
                  <br />
                  31 layer
                </h5>
                <div className="flex flex-col gap-[1px]">
                  <div className="bg-[#1955cc] text-white text-center text-[18px] p-[10px]">
                    Skin A
                  </div>

                  <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                    Function B
                  </div>
                  <div className="bg-[#1966cc] text-center text-[18px]">
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                  </div>
                  <div className="bg-[#19aacc] text-white text-center text-[18px] p-[10px]">
                    Function C
                  </div>
                  <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                    Function B
                  </div>
                  <div className="bg-[#19aacc] text-white text-center text-[18px] p-[10px]">
                    Function C
                  </div>
                  <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                    Function B
                  </div>
                  <div className="bg-[#19aacc] text-white text-center text-[18px] p-[10px]">
                    Function C
                  </div>
                  <div className="bg-[#1966cc] text-center text-[18px]">
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                  </div>
                  <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                    Function B
                  </div>

                  <div className="bg-[#19bbcc] text-white text-center text-[18px] p-[10px]">
                    Skin D
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h5 className="text-[#1977cc] uppercase text-[36px] font-bold text-center">
                  <span className="text-[#1955cc]">7 Extruder</span>
                  <br />
                  33 layer
                </h5>
                <div className="flex flex-col gap-[1px]">
                  <div className="bg-[#1955cc] text-white text-center text-[18px] p-[10px]">
                    Skin A @ 8% vol.
                  </div>

                  <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                    Function B + Trim @ 7%
                  </div>
                  <div className="bg-[#1966cc] text-center text-[18px]">
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                  </div>
                  <div className="bg-[#19aacc] text-white text-center text-[18px] p-[10px]">
                    Function C + Trim @ 7%
                  </div>
                  <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                    Function B + Trim @ 7%
                  </div>
                  <div className="bg-[#19aacc] text-white text-center text-[18px] p-[10px]">
                    Function C + Trim @ 7%
                  </div>
                  <div className="bg-[#1933cc] text-white text-center text-[18px] p-[10px]">
                    Core (F) @ 8% vol.
                  </div>
                  <div className="bg-[#19aacc] text-white text-center text-[18px] p-[10px]">
                    Function C + Trim @ 7%
                  </div>
                  <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                    Function B + Trim @ 7%
                  </div>
                  <div className="bg-[#19aacc] text-white text-center text-[18px] p-[10px]">
                    Function C + Trim @ 7%
                  </div>
                  <div className="bg-[#1966cc] text-center text-[18px]">
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                  </div>
                  <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                    Function B + Trim @ 7%
                  </div>

                  <div className="bg-[#19bbcc] text-white text-center text-[18px] p-[10px]">
                    Skin G @ 8% vol.
                  </div>
                </div>
              </div>
            </motion.div>
            <div>
              <motion.div
                ref={containerRef}
                className="text-[#151515] mt-[50px] flex justify-center items-center flex-col gap-5"
                initial={{ opacity: 0, y: 100, scale: 0.8 }} // Start position and smaller scale
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 100, // Large change in vertical position
                  scale: isInView ? 1 : 0.8, // Scale up to normal size
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut", // Stronger, bolder easing
                }}
              >
                <p className="text-[32px] w-full md:text-left text-center">
                  <span className="text-[#1977cc]">55 NANO layer</span> with{" "}
                  <span className="text-[#1977cc]">50% nanostructure</span> was
                  developed in 2016
                </p>
                <h5 className="text-[28px] uppercase text-center font-bold bg-[#1977cc] rounded-md py-[10px] px-[20px] w-fit text-white">
                  High pressure was solved, thus much more flexibility
                </h5>
                <div className="flex w-full justify-center gap-10 flex-col items-center md:flex-row">
                  <div className="border-5 border-[#1999cc] rounded-tr-[30px] rounded-bl-[30px] py-[50px] px-[30px]">
                    <h5 className="text-[#1977cc] uppercase text-[36px] font-bold">
                      <span className="text-[#1955cc]">
                        5<br /> Extruder
                      </span>
                      <br />
                      <span>27 layer</span>
                    </h5>
                  </div>
                  <div className="flex justify-center items-center hidden md:block">
                    <ChevronRightIcon size={48} />
                  </div>
                  <div className="flex justify-center items-center block md:hidden">
                    <ChevronDownIcon size={48} />
                  </div>
                  <motion.div
                    className="flex flex-col md:w-[40%] w-[100%] gap-[1px]"
                    initial={{ opacity: 0, y: 100, scale: 0.8 }} // Start with bigger offset and smaller scale
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : 100, // Large change in vertical position
                      scale: isInView ? 1 : 0.8, // Scale to full size
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: 0.3, // Delay for a staggered effect
                    }}
                  >
                    <div className="bg-[#1955cc] text-white text-center text-[18px] p-[10px]">
                      Non cling 10%
                    </div>

                    <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                      Subskin 10%
                    </div>
                    <motion.div
                      className="bg-[#1966cc] text-center text-[18px] relative"
                      initial={{ opacity: 0, x: -100, scale: 0.8 }} // Start position and smaller scale
                      animate={{
                        opacity: isInView ? 1 : 0,
                        x: isInView ? 0 : -100, // Large horizontal movement from the left
                        scale: isInView ? 1 : 0.8, // Scale up to full size
                      }}
                      transition={{
                        duration: 1.2,
                        ease: "easeOut",
                        delay: 0.6,
                      }}
                    >
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    </motion.div>
                    <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                      Non cling 10%
                    </div>
                    <motion.div
                      className="bg-[#1966cc] text-center text-[18px] relative"
                      initial={{ opacity: 0, x: -100, scale: 0.8 }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        x: isInView ? 0 : -100, // Large change in horizontal position
                        scale: isInView ? 1 : 0.8,
                      }}
                      transition={{
                        duration: 1.2,
                        ease: "easeOut",
                        delay: 0.9,
                      }}
                    >
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    </motion.div>
                    <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                      Subskin 10%
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
          <div>
            <div className="mt-[50px]">
              <motion.h3
                className="text-white w-fit md:text-[44px] text-[32px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold"
                ref={titleRef} // Reference for intersection observer
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                animate={{
                  opacity: titleInView ? 1 : 0,
                  x: titleInView ? 0 : -100,
                  scale: titleInView ? 1 : 0.8,
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                67 Nanolayer Structure
              </motion.h3>

              {/* Description */}
              <motion.div
                className="flex items-center justify-center mt-5"
                ref={textRef} // Reference for intersection observer
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: textInView ? 1 : 0,
                  y: textInView ? 0 : 50,
                }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <p className="text-[32px] md:w-[70%] md:text-left text-center text-[#151515]">
                  ALLIANCE FILMS is the <b>FIRST</b> company who developed{" "}
                  <span className="text-[#1977cc]">67 nanolayer</span> with{" "}
                  <span className="text-[#1977cc]">
                    70 % nano structure in North America.
                  </span>
                </p>
              </motion.div>
              <div
                ref={ref1}
                className="flex w-full justify-center items-center gap-10 mt-[50px] flex-col md:flex-row"
              >
                <motion.div
                  className="transition-transform duration-1000 ease-out"
                  initial={{ opacity: 0, scale: 0.8, x: -100 }}
                  animate={{
                    opacity: inView1 ? 1 : 0,
                    scale: inView1 ? 1 : 0.8,
                    x: inView1 ? 0 : -100,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 25 }}
                >
                  <div className="border-5 border-[#1999cc] rounded-tr-[30px] rounded-bl-[30px] py-[50px] px-[30px] w-fit">
                    <h5 className="text-[#1977cc] uppercase text-[36px] text-right font-bold">
                      <b className="text-[#151515]">
                        SML
                        <br /> PowerCast
                        <br /> XL
                        <br />
                      </b>
                      7 Extruder
                      <br /> 67 layer
                    </h5>
                  </div>
                  <div>
                    <img src="/assets/images/nano67/logo.png" width={"200px"} />
                  </div>
                </motion.div>

                <motion.div
                  className="flex justify-center items-center text-[#151515] hidden md:block"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{
                    opacity: inView1 ? 1 : 0,
                    y: inView1 ? 0 : -50,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 25 }}
                >
                  <ChevronRightIcon size={48} />
                </motion.div>
                <motion.div
                  className="flex justify-center items-center text-[#151515] block md:hidden"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{
                    opacity: inView1 ? 1 : 0,
                    y: inView1 ? 0 : -50,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 25 }}
                >
                  <ChevronDownIcon size={48} />
                </motion.div>

                <motion.div
                  className="flex flex-col md:w-[40%] w-[100%] gap-[1px]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 50,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 25 }}
                >
                  <div className="bg-[#1955cc] text-white text-center text-[18px] p-[10px]">
                    Skin Layer 10%
                  </div>

                  <div className="bg-[#1966cc] text-center text-[18px] relative">
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <p className="absolute top-[50%] left-[50%] bg- -translate-x-[50%] -translate-y-[50%] text-[22px] text-white">
                      Nano pack 1
                    </p>
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(255,255,255,0.4)]"></div>
                  </div>
                  <div className="bg-[#1966cc] text-center text-[18px] relative">
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[22px] text-white ">
                      Nano pack 3
                    </p>
                  </div>

                  <div className="bg-[#1933cc] text-white text-center text-[18px] p-[10px]">
                    Core Layer 10%
                  </div>

                  <div className="bg-[#1966cc] text-center text-[18px] relative">
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[22px] text-white">
                      Nano pack 4
                    </p>
                  </div>
                  <div className="bg-[#1966cc] text-center text-[18px] relative">
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <hr className="border-[#1999cc] py-[2px] border-y-1" />
                    <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  text-white text-[22px]">
                      Nano pack 2
                    </p>
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(255,255,255,0.4)]"></div>
                  </div>

                  <div className="bg-[#1955cc] text-white text-center text-[18px] p-[10px]">
                    Skin Layer 10%
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div ref={refBlock}>
            <motion.div
              className="mt-[50px] w-fit"
              initial={{ opacity: 0, y: -50 }}
              animate={{
                opacity: inViewBlock ? 1 : 0,
                y: inViewBlock ? 0 : -50,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-white md:text-[44px] text-[32px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold">
                FleedBlock
              </h3>
            </motion.div>
            <div className="md:grid grid-cols-2 gap-10 mt-[50px] flex flex-col items-center justify-center">
              {[
                {
                  title: "Conversational 55 layer",
                  subtitle: "single feedblock",
                  imgSrc: "/assets/images/nano67/55layerfleedblock.png",
                },
                {
                  title: "SML Nano 67 layer",
                  subtitle: "Double feedblock",
                  imgSrc: "/assets/images/nano67/67layerfeedblock.png",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex justify-center items-center flex-col gap-5"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: inViewBlock ? 1 : 0,
                    y: inViewBlock ? 0 : 50,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.3,
                    ease: "easeOut",
                  }}
                >
                  <div className="md:text-[36px] text-[28px] text-[#151515] text-center font-bold">
                    <p className="tracking-[0.075em]">{item.title}</p>
                    <p className="text-[#1977cc] uppercase">{item.subtitle}</p>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: inViewBlock ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                  >
                    <ChevronDownIcon
                      size={48}
                      className="text-[#151515] font-bold"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: inViewBlock ? 1 : 0,
                      scale: inViewBlock ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <img src={item.imgSrc} alt={item.subtitle} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-[50px]" ref={machineRef}>
            <motion.img
              src="/assets/images/nano67/nano67bg.png"
              initial={{ x: -200, opacity: 0, scale: 0.5 }}
              animate={inViewMachine ? { x: 0, opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full h-auto"
            />
          </div>

          <div>
            <motion.div
              ref={testingResult}
              initial={{ opacity: 0, x: -300 }}
              animate={
                animate
                  ? {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 1, ease: "easeOut" },
                    }
                  : {}
              }
              className="mt-[50px] w-fit"
            >
              <h3 className="text-white md:text-[32px] text-[24px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold">
                TESTING 12 MICRON
                <br /> 55 LAYER VS. 67 LAYER
              </h3>
            </motion.div>

            <div className="flex gap-10 justify-center items-center mt-[50px] md:flex-row flex-col">
              <motion.ul
                initial={{ opacity: 0, x: -100 }}
                animate={
                  animate
                    ? {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 1, delay: 0.3 },
                      }
                    : {}
                }
                className="text-[32px] text-[#151515] list-disc ml-[50px]"
              >
                <li className="py-[15px]">12 micron</li>
                <li className="py-[15px]">400 m/min</li>
                <li className="py-[15px]">500 m/min</li>
                <li className="py-[15px]">600 m/min</li>
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  animate
                    ? {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 1, delay: 0.5 },
                      }
                    : {}
                }
                className="overflow-x-auto bg-white/80 backdrop-blur-lg shadow-lg rounded-xl max-w-5xl mx-auto"
              >
                <table className="min-w-full border border-gray-300 text-xs sm:text-sm text-gray-700">
                  <thead className="bg-gradient-to-r from-gray-800 to-gray-600 text-white">
                    <tr>
                      <th className="px-3 py-2 border border-gray-500 text-left uppercase tracking-wider">
                        Extruder
                      </th>
                      <th className="px-3 py-2 border border-gray-500 text-left uppercase tracking-wider">
                        Dosing Station
                      </th>
                      <th className="px-3 py-2 border border-gray-500 text-left uppercase tracking-wider">
                        Weight Ratio (%)
                      </th>
                      <th className="px-3 py-2 border border-gray-500 text-left uppercase tracking-wider">
                        Producer Material
                      </th>
                      <th className="px-3 py-2 border border-gray-500 text-left uppercase tracking-wider">
                        Density (g/cm³)
                      </th>
                      <th className="px-3 py-2 border border-gray-500 text-left uppercase tracking-wider">
                        Thickness Ratio (%)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300">
                    {data.map((row, index) =>
                      row.dosing.map((dosing, i) => (
                        <motion.tr
                          key={`${index}-${i}`}
                          initial={{ opacity: 0, y: 50 }}
                          animate={
                            animate
                              ? {
                                  opacity: 1,
                                  y: 0,
                                  transition: { duration: 0.5, delay: 0.2 * i },
                                }
                              : {}
                          }
                          className="odd:bg-gray-800 even:bg-gray-700 text-white hover:bg-blue-500 hover:shadow-[0_0_8px_#3b82f6] transition-all duration-300"
                        >
                          {i === 0 && (
                            <td
                              rowSpan={row.rows}
                              className="px-3 py-2 border border-gray-500 text-center font-semibold bg-gray-600"
                            >
                              {row.extruder}
                            </td>
                          )}
                          <td className="px-3 py-2 border border-gray-500 text-center">
                            {dosing}
                          </td>
                          <td className="px-3 py-2 border border-gray-500 text-center">
                            {row.weight[i]}
                          </td>
                          <td className="px-3 py-2 border border-gray-500">
                            {row.material[i]}
                          </td>
                          {i === 0 && (
                            <>
                              <td
                                rowSpan={row.rows}
                                className="px-3 py-2 border border-gray-500 text-center bg-gray-600"
                              >
                                {row.density}
                              </td>
                              <td
                                rowSpan={row.rows}
                                className="px-3 py-2 border border-gray-500 text-center bg-gray-600"
                              >
                                {row.thickness}
                              </td>
                            </>
                          )}
                        </motion.tr>
                      ))
                    )}
                  </tbody>
                </table>
              </motion.div>
            </div>
          </div>
          <div>
            <div className="mt-[50px] w-fit">
              <h3 className="text-white md:text-[44px] text-[32px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold">
                SML Nano 67-12 micron
              </h3>
            </div>
            <div ref={chartRef} className="relative overflow-hidden">
              <motion.img
                src="/assets/images/nano67/chart.png"
                className="px-[15px]"
                initial={{ opacity: 0, x: -100 }}
                animate={inViewChart ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              <div className="flex gap-6 justify-center items-center">
                {["11% Higher", "16% Higher", "57% Higher"].map(
                  (text, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center md:gap-6 md:px-[20px]"
                      initial={{ opacity: 0, y: 50 }}
                      animate={inViewChart ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2,
                        ease: "easeOut",
                      }}
                    >
                      <img
                        className="md:max-h-[44px] max-h-[22px]"
                        height={"44px"}
                        src="/assets/images/nano67/arrowRight.png"
                      />
                      <p className="bg-[#54c1e5] text-white md:text-[32px] text-[12px] md:p-[20px] font-bold uppercase rounded-lg">
                        {text}
                      </p>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NanoTechnology;
