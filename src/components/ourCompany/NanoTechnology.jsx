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
import { delay, motion } from "framer-motion";

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
  const { ref: summaryRef, inView: summaryInView } = useInView({
    triggerOnce: true, // Trigger animation only once when it enters the viewport
    threshold: 0.3, // Trigger when 20% of the element is in view
  });

  const { ref: historyRef, inView: historyInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const animateInView = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut", delay: 1 },
    },
  };

  const skinLayerAnimateInView = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 1.5 },
    },
  };

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true, // Trigger only once when it enters the view
    threshold: 0.3, // When 10% of the element is visible
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
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (resultInView) setAnimate(true);
  }, [resultInView]);

  return (
    <div className="relative overflow-hidden">
      <HeaderSlot
        imgSrc={"/assets/images/nano67.webp"}
        title={"Elevation 67 Machine Film"}
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
      <div className="flex justify-center bg-white py-[50px]">
        <div className="max-w-[1200px] w-full">
          <div ref={summaryRef}>
            <div className="mt-[50px]">
              <motion.h3
                className="text-white w-fit md:text-[44px] text-[32px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold"
                initial={{
                  opacity: 0,
                  x: -200, // Large movement from top
                  // scale: 0.5, // Start small
                  // rotate: -90, // Start rotated
                }}
                animate={{
                  opacity: summaryInView ? 1 : 0,
                  x: summaryInView ? 0 : -200,
                  // scale: inView ? 1 : 0.5,
                  // rotate: inView ? 0 : -90,
                }}
                transition={{
                  duration: 2.5, // Longer duration for smoother and more dramatic transition
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
                    // rotate: 45, // Start rotated
                  }}
                  animate={{
                    opacity: summaryInView ? 1 : 0,
                    x: summaryInView ? 0 : -300,
                    scale: summaryInView ? 1 : 0.5,
                    // rotate: inView ? 0 : 45,
                  }}
                  transition={{
                    duration: 1, // Longer duration for a dramatic entrance
                    type: "spring", // Spring-based easing for more dynamic movement
                    stiffness: 150, // Even stiffer spring for dramatic effect
                    delay: 0.5, // Slight delay for a staggered effect with the heading
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
                className="flex flex-col gap-5"
                initial="hidden"
                animate={summaryInView ? "visible" : "hidden"}
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
                className="flex flex-col md:w-[40%] w-[100%] gap-[1px] w-[100%]"
                initial="hidden"
                animate={summaryInView ? "visible" : "hidden"}
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
          <div ref={historyRef}>
            <div className="mt-[50px] w-fit">
              <motion.h3
                className="text-white md:text-[44px] text-[32px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold"
                initial={{
                  opacity: 0,
                  x: -200, // Large movement from top
                  // scale: 0.5, // Start small
                  // rotate: -90, // Start rotated
                }}
                animate={{
                  opacity: historyInView ? 1 : 0,
                  x: historyInView ? 0 : -200,
                  // scale: inView ? 1 : 0.5,
                  // rotate: inView ? 0 : -90,
                }}
                transition={{
                  duration: 2.5, // Longer duration for smoother and more dramatic transition
                  type: "spring", // Spring-based easing for more dynamic movement
                  stiffness: 100, // Stiffer spring for a more forceful movement
                }}
              >
                Nanolayer History
              </motion.h3>
            </div>
            <motion.div
              className="md:grid grid-cols-3 gap-10 flex flex-col px-[15px] mt-[30px] relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: historyInView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <ul className="absolute left-[30px] bottom-0 list-disc text-[#151515] text-[22px] hidden lg:block">
                <motion.li
                  initial={{ opacity: 0, x: 50 }} // Start faded out & shifted right
                  animate={{
                    opacity: historyInView ? 1 : 0,
                    x: historyInView ? 0 : 50,
                  }} // Fade in & move to original position
                  transition={{ duration: 0.6, ease: "easeOut", delay: 3 }}
                >
                  Only 20% nanostructure
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 50 }} // Start faded out & shifted right
                  animate={{
                    opacity: historyInView ? 1 : 0,
                    x: historyInView ? 0 : 50,
                  }} // Fade in & move to original position
                  transition={{ duration: 0.6, ease: "easeOut", delay: 3.2 }}
                >
                  2 extruder with 10% each
                </motion.li>
                <motion.li
                  className="font-bold"
                  initial={{ opacity: 0, x: 50 }} // Start faded out & shifted right
                  animate={{
                    opacity: historyInView ? 1 : 0,
                    x: historyInView ? 0 : 50,
                  }} // Fade in & move to original position
                  transition={{ duration: 0.6, ease: "easeOut", delay: 3.5 }}
                >
                  Difficult to use due to high pressure
                </motion.li>
              </ul>
              <div className="flex flex-col gap-5">
                <motion.h5
                  className="text-[#1977cc] uppercase text-[36px] font-bold text-center"
                  initial={{ opacity: 0, y: -50 }} // Start faded out & moved up
                  animate={{
                    opacity: historyInView ? 1 : 0,
                    y: historyInView ? 0 : -50,
                  }} // Fade in & move down
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                >
                  <span className="text-[#1955cc]">5 Extruder</span>
                  <br />
                  27 layer
                </motion.h5>
                <motion.div
                  className="flex flex-col gap-[1px]"
                  initial={{ opacity: 0, y: -50 }} // Start faded out & moved up
                  animate={{
                    opacity: historyInView ? 1 : 0,
                    y: historyInView ? 0 : -50,
                  }} // Fade in & move down
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                >
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
                </motion.div>
              </div>
              <div className="flex flex-col gap-5">
                <motion.h5
                  initial={{ opacity: 0, y: -50 }} // Start faded out & moved up
                  animate={{
                    opacity: historyInView ? 1 : 0,
                    y: historyInView ? 0 : -50,
                  }} // Fade in & move down
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
                  className="text-[#1977cc] uppercase text-[36px] font-bold text-center"
                >
                  <span className="text-[#1955cc]">6 Extruder</span>
                  <br />
                  31 layer
                </motion.h5>
                <motion.div
                  className="flex flex-col gap-[1px]"
                  initial={{ opacity: 0, y: -50 }} // Start faded out & moved up
                  animate={{
                    opacity: historyInView ? 1 : 0,
                    y: historyInView ? 0 : -50,
                  }} // Fade in & move down
                  transition={{ duration: 0.6, ease: "easeOut", delay: 2 }}
                >
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
                </motion.div>
              </div>
              <div className="flex flex-col gap-5">
                <motion.h5
                  className="text-[#1977cc] uppercase text-[36px] font-bold text-center"
                  initial={{ opacity: 0, y: -50 }} // Start faded out & moved up
                  animate={{
                    opacity: historyInView ? 1 : 0,
                    y: historyInView ? 0 : -50,
                  }} // Fade in & move down
                  transition={{ duration: 0.6, ease: "easeOut", delay: 2.5 }}
                >
                  <span className="text-[#1955cc]">7 Extruder</span>
                  <br />
                  33 layer
                </motion.h5>
                <motion.div
                  className="flex flex-col gap-[1px]"
                  initial={{ opacity: 0, y: -50 }} // Start faded out & moved up
                  animate={{
                    opacity: historyInView ? 1 : 0,
                    y: historyInView ? 0 : -50,
                  }} // Fade in & move down
                  transition={{ duration: 0.6, ease: "easeOut", delay: 3 }}
                >
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
                </motion.div>
              </div>
            </motion.div>
            <div>
              <div className="text-[#151515] mt-[50px] flex justify-center items-center flex-col gap-5">
                <motion.p
                  className="text-[32px] w-full md:text-left text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: historyInView ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 4 }}
                >
                  <span className="text-[#1977cc]">55 NANO layer</span> with{" "}
                  <span className="text-[#1977cc]">50% nanostructure</span> was
                  developed in 2016
                </motion.p>
                <motion.h5
                  className="text-[28px] uppercase text-center font-bold bg-[#1977cc] rounded-md py-[10px] px-[20px] w-fit text-white"
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{
                    opacity: historyInView ? 1 : 0,
                    rotateX: historyInView ? 0 : -90,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 4.3 }}
                >
                  High pressure was solved, thus much more flexibility
                </motion.h5>
                <div className="flex w-full justify-center gap-10 flex-col items-center md:flex-row">
                  <motion.div
                    className="border-5 border-[#1999cc] rounded-tr-[30px] rounded-bl-[30px] py-[50px] px-[30px]"
                    initial={{ opacity: 0, x: -150 }} // Start invisible and moved to the right
                    animate={{
                      opacity: historyInView ? 1 : 0,
                      x: historyInView ? 0 : -150,
                    }} // Fade in and move to the original position
                    transition={{ duration: 0.6, ease: "easeOut", delay: 4.5 }}
                  >
                    <h5 className="text-[#1977cc] uppercase text-[36px] font-bold">
                      <span className="text-[#1955cc]">
                        5<br /> Extruder
                      </span>
                      <br />
                      <span>27 layer</span>
                    </h5>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -100 }} // Start invisible and moved to the right
                    animate={{
                      opacity: historyInView ? 1 : 0,
                      x: historyInView ? 0 : -100,
                    }} // Fade in and move to the original position
                    transition={{ duration: 0.6, ease: "easeOut", delay: 4.7 }}
                  >
                    <div className="flex justify-center items-center hidden md:block">
                      <ChevronRightIcon size={48} />
                    </div>
                    <div className="flex justify-center items-center block md:hidden">
                      <ChevronDownIcon size={48} />
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-col md:w-[40%] w-[100%] gap-[1px]"
                    initial={{ opacity: 0, x: -100 }} // Start invisible and moved to the right
                    animate={{
                      opacity: historyInView ? 1 : 0,
                      x: historyInView ? 0 : -100,
                    }} // Fade in and move to the original position
                    transition={{ duration: 0.6, ease: "easeOut", delay: 5 }}
                  >
                    <div className="bg-[#1955cc] text-white text-center text-[18px] p-[10px]">
                      Non cling 10%
                    </div>

                    <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                      Subskin 10%
                    </div>
                    <div className="bg-[#1966cc] text-center text-[18px] relative">
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    </div>
                    <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                      Non cling 10%
                    </div>
                    <div className="bg-[#1966cc] text-center text-[18px] relative">
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                      <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    </div>
                    <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                      Subskin 10%
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div ref={titleRef}>
            <div className="mt-[50px]">
              <motion.h3
                className="text-white w-fit md:text-[44px] text-[32px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold"
                initial={{ opacity: 0, x: -200, scale: 0.8 }}
                animate={{
                  opacity: titleInView ? 1 : 0,
                  x: titleInView ? 0 : -200,
                  scale: titleInView ? 1 : 0.8,
                }}
                transition={{
                  duration: 2.5, // Longer duration for smoother and more dramatic transition
                  type: "spring", // Spring-based easing for more dynamic movement
                  stiffness: 100, // Stiffer spring for a more forceful movement
                }}
              >
                67 Nanolayer Structure
              </motion.h3>

              {/* Description */}
              <motion.div
                className="flex items-center justify-center mt-5" // Reference for intersection observer
                initial={{ opacity: 0 }}
                animate={{ opacity: titleInView ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.3 }}
              >
                <p className="text-[32px] md:w-[70%] md:text-left text-center text-[#151515]">
                  ALLIANCE FILMS is the <b>FIRST</b> company who developed{" "}
                  <span className="text-[#1977cc]">67 nanolayer</span> with{" "}
                  <span className="text-[#1977cc]">
                    70 % nano structure in North America.
                  </span>
                </p>
              </motion.div>
              <div className="flex w-full justify-center items-center gap-10 mt-[50px] flex-col md:flex-row">
                <div className="transition-transform duration-1000 ease-out">
                  <motion.div
                    className="border-5 border-[#1999cc] rounded-tr-[30px] rounded-bl-[30px] py-[50px] px-[30px] w-fit"
                    initial={{ opacity: 0, x: -150 }} // Start invisible and moved to the right
                    animate={{
                      opacity: titleInView ? 1 : 0,
                      x: titleInView ? 0 : -150,
                    }} // Fade in and move to the original position
                    transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
                  >
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
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -150 }} // Start invisible and moved to the right
                    animate={{
                      opacity: titleInView ? 1 : 0,
                      y: titleInView ? 0 : -150,
                    }} // Fade in and move to the original position
                    transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
                  >
                    <img src="/assets/images/nano67/logo.png" width={"200px"} />
                  </motion.div>
                </div>

                <motion.div
                  className="flex justify-center items-center text-[#151515] hidden md:block"
                  initial={{ opacity: 0, x: -100 }} // Start invisible and moved to the right
                  animate={{
                    opacity: titleInView ? 1 : 0,
                    x: titleInView ? 0 : -100,
                  }} // Fade in and move to the original position
                  transition={{ duration: 0.3, ease: "easeOut", delay: 2 }}
                >
                  <ChevronRightIcon size={48} />
                </motion.div>
                <motion.div
                  className="flex justify-center items-center text-[#151515] block md:hidden"
                  initial={{ opacity: 0, y: -100 }} // Start invisible and moved to the right
                  animate={{
                    opacity: titleInView ? 1 : 0,
                    y: titleInView ? 0 : -100,
                  }} // Fade in and move to the original position
                  transition={{ duration: 0.3, ease: "easeOut", delay: 2 }}
                >
                  <ChevronDownIcon size={48} />
                </motion.div>

                <motion.div
                  className="flex flex-col md:w-[40%] w-[100%] gap-[1px]"
                  initial={{ opacity: 0, x: -100 }} // Start invisible and moved to the right
                  animate={{
                    opacity: titleInView ? 1 : 0,
                    x: titleInView ? 0 : -100,
                  }} // Fade in and move to the original position
                  transition={{ duration: 0.6, ease: "easeOut", delay: 2.3 }}
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
            <div className="mt-[50px] w-fit">
              <motion.h3
                className="text-white md:text-[44px] text-[32px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold"
                initial={{
                  opacity: 0,
                  x: -200, // Large movement from top
                  // scale: 0.5, // Start small
                  // rotate: -90, // Start rotated
                }}
                animate={{
                  opacity: inViewBlock ? 1 : 0,
                  x: inViewBlock ? 0 : -200,
                  // scale: inView ? 1 : 0.5,
                  // rotate: inView ? 0 : -90,
                }}
                transition={{
                  duration: 2.5, // Longer duration for smoother and more dramatic transition
                  type: "spring", // Spring-based easing for more dynamic movement
                  stiffness: 100, // Stiffer spring for a more forceful movement
                }}
              >
                FeedBlock
              </motion.h3>
            </div>
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
                >
                  <motion.div
                    className="md:text-[36px] text-[28px] text-[#151515] text-center font-bold"
                    initial={{ opacity: 0, y: -150 }} // Start invisible and moved to the right
                    animate={{
                      opacity: inViewBlock ? 1 : 0,
                      y: inViewBlock ? 0 : -150,
                    }} // Fade in and move to the original position
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.3 + index * 0.7,
                    }}
                  >
                    <p className="tracking-[0.075em]">{item.title}</p>
                    <p className="text-[#1977cc] uppercase">{item.subtitle}</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -100 }} // Start invisible and moved to the right
                    animate={{
                      opacity: inViewBlock ? 1 : 0,
                      y: inViewBlock ? 0 : -100,
                    }} // Fade in and move to the original position
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.5 + index * 0.7,
                    }}
                  >
                    <ChevronDownIcon
                      size={48}
                      className="text-[#151515] font-bold"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -100 }} // Start invisible and moved to the right
                    animate={{
                      opacity: inViewBlock ? 1 : 0,
                      y: inViewBlock ? 0 : -100,
                    }} // Fade in and move to the original position
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.8 + index * 0.7,
                    }}
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

          <div ref={testingResult}>
            <div className="mt-[50px] w-fit">
              <motion.h3
                className="text-white md:text-[32px] text-[24px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold"
                initial={{
                  opacity: 0,
                  x: -200, // Large movement from top
                  // scale: 0.5, // Start small
                  // rotate: -90, // Start rotated
                }}
                animate={{
                  opacity: resultInView ? 1 : 0,
                  x: resultInView ? 0 : -200,
                  // scale: inView ? 1 : 0.5,
                  // rotate: inView ? 0 : -90,
                }}
                transition={{
                  duration: 2.5, // Longer duration for smoother and more dramatic transition
                  type: "spring", // Spring-based easing for more dynamic movement
                  stiffness: 100, // Stiffer spring for a more forceful movement
                }}
              >
                TESTING 12 MICRON
                <br /> 55 LAYER VS. 67 LAYER
              </motion.h3>
            </div>

            <div className="flex gap-10 justify-center items-center mt-[50px] md:flex-row flex-col">
              <ul className="text-[32px] text-[#151515] list-disc ml-[50px]">
                <motion.li
                  className="py-[15px]"
                  initial={{ opacity: 0, x: 50 }} // Start faded out & shifted right
                  animate={{
                    opacity: resultInView ? 1 : 0,
                    x: resultInView ? 0 : 50,
                  }} // Fade in & move to original position
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                >
                  12 micron
                </motion.li>
                <motion.li
                  className="py-[15px]"
                  initial={{ opacity: 0, x: 50 }} // Start faded out & shifted right
                  animate={{
                    opacity: resultInView ? 1 : 0,
                    x: resultInView ? 0 : 50,
                  }} // Fade in & move to original position
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
                >
                  400 m/min
                </motion.li>
                <motion.li
                  className="py-[15px]"
                  initial={{ opacity: 0, x: 50 }} // Start faded out & shifted right
                  animate={{
                    opacity: resultInView ? 1 : 0,
                    x: resultInView ? 0 : 50,
                  }} // Fade in & move to original position
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                >
                  500 m/min
                </motion.li>
                <motion.li
                  className="py-[15px]"
                  initial={{ opacity: 0, x: 50 }} // Start faded out & shifted right
                  animate={{
                    opacity: resultInView ? 1 : 0,
                    x: resultInView ? 0 : 50,
                  }} // Fade in & move to original position
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.25 }}
                >
                  600 m/min
                </motion.li>
              </ul>

              <div
                className={`overflow-x-auto bg-white/80 opacity-0 backdrop-blur-lg shadow-lg rounded-xl max-w-5xl mx-auto ${
                  resultInView
                    ? "animate-flip-down animate-duration-1000 animate-delay-1750 opacity-100 animate-ease-linear"
                    : ""
                }`}
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
              </div>
            </div>
          </div>
          <div ref={chartRef}>
            <div className="mt-[50px] w-fit">
              <motion.h3
                className="text-white md:text-[44px] text-[32px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold"
                initial={{
                  opacity: 0,
                  x: -200, // Large movement from top
                  // scale: 0.5, // Start small
                  // rotate: -90, // Start rotated
                }}
                animate={{
                  opacity: inViewChart ? 1 : 0,
                  x: inViewChart ? 0 : -200,
                  // scale: inView ? 1 : 0.5,
                  // rotate: inView ? 0 : -90,
                }}
                transition={{
                  duration: 2.5, // Longer duration for smoother and more dramatic transition
                  type: "spring", // Spring-based easing for more dynamic movement
                  stiffness: 100, // Stiffer spring for a more forceful movement
                }}
              >
                SML Nano 67-12 micron
              </motion.h3>
            </div>
            <div className="relative overflow-hidden">
              <motion.img
                src="/assets/images/nano67/chart.png"
                className={`px-[15px] opacity-0 ${
                  inViewChart
                    ? "animate-flip-up animate-duration-1000 animate-delay-300 opacity-100 animate-ease-linear"
                    : ""
                }`}
              />
              <div className="flex justify-center items-center">
                {["11% Higher", "16% Higher", "57% Higher"].map(
                  (text, index) => (
                    <div
                      key={index}
                      className="flex items-center md:gap-6 md:px-[20px]"
                    >
                      <motion.img
                        className="md:max-h-[44px] max-h-[22px]"
                        height={"44px"}
                        src="/assets/images/nano67/arrowRight.png"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{
                          opacity: inViewChart ? 1 : 0,
                          x: inViewChart ? 0 : -100,
                        }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: 0.5 + index * 0.7,
                        }}
                      />
                      <motion.p
                        className="bg-[#54c1e5] text-white md:text-[32px] text-[12px] md:p-[20px] font-bold uppercase rounded-lg"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{
                          opacity: inViewChart ? 1 : 0,
                          x: inViewChart ? 0 : -100,
                        }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: 0.7 + index * 0.7,
                        }}
                      >
                        {text}
                      </motion.p>
                    </div>
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
