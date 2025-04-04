import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  Building,
  Clock9Icon,
  ClockIcon,
  FootprintsIcon,
  HandCoinsIcon,
  Layers3Icon,
  LeafIcon,
  RecycleIcon,
  SquareDashed,
  Trash2Icon,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import HeaderSlot from "../utils/HeaderSlot";
import M from "materialize-css";

const Commitment = () => {
  const { ref: firstElementRef, inView: firstElementInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 50% of the element is in view
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 50% of the text block is visible
  });

  const { ref: middleRef, inView: middleInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the text block is visible
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: leftSectionRef, inView: leftSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: rightSectionRef, inView: rightSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const iconVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3, // Delay each element's animation in sequence
        duration: 1.2,
        type: "spring",
        stiffness: 100,
        damping: 30,
      },
    }),
  };
  useEffect(() => {
    const elems = document.querySelectorAll(".parallax");
    setTimeout(() => {
      if (window.M && window.M.Parallax) {
        M.Parallax.init(elems);
      }
    }, 0); // Delay initialization
  }, []);

  return (
    <div className=" overflow-hidden ">
      <HeaderSlot
        imgSrc={"/assets/images/sustainable.webp"}
        title={"Coreless Machine film"}
        router={[
          {
            title: "home",
            src: "/",
          },
          {
            title: "our Company",
            src: "/",
          },
          "Coreless machine film",
        ]}
      />

      <div className="flex justify-center py-[50px] relative  bg-white/90 ">
        <div className="parallax">
          <img
            className="absolute bottom-0 filter grayscale contrast-200 z-[-1] min-w-screen left-[50%] object-cover hidden lg:block"
            style={{
              opacity: 1,
              transform: "translate3d(-50%, 350px, 0px)",
            }}
            src="/assets/images/sustainable/beahero.webp"
          ></img>
        </div>
        <div className="max-w-[1200px]">
          <div ref={firstElementRef}>
            <div className="flex justify-center items-center flex-col md:flex-row">
              <motion.p
                className="p-3 bg-green-800 text-white text-[28px] font-bold rounded-md w-fit"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: firstElementInView ? 1 : 0,
                  y: firstElementInView ? 0 : 50,
                }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Be A Hero!
              </motion.p>

              <motion.p
                className="text-[#151515] text-[36px] p-5 font-extrabold"
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: firstElementInView ? 1 : 0,
                  x: firstElementInView ? 0 : -50,
                }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                To Our Planet
              </motion.p>
            </div>
            <div className="flex justify-center items-center">
              <motion.p
                className="p-3 text-[#151515] text-[28px] font-semibold rounded-md w-fit text-center"
                initial={{ opacity: 0, y: 100, x: -100 }} // Start with a large change in position
                animate={{
                  opacity: firstElementInView ? 1 : 0,
                  y: firstElementInView ? 0 : 100, // Move from below
                  x: firstElementInView ? 0 : -100, // Move from the left
                }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                  delay: 1.2,
                }} // Using 'spring' for more dynamic movement
              >
                Sustainable packaging solutions from
              </motion.p>

              <motion.img
                src="/assets/images/logoalliance.png"
                className="hidden lg:block"
                initial={{ opacity: 0, y: -200, x: 200 }} // Large change from the top-right
                animate={{
                  opacity: firstElementInView ? 1 : 0,
                  y: firstElementInView ? 0 : -200, // Move from above
                  x: firstElementInView ? 0 : 200, // Move from the right
                }}
                transition={{
                  duration: 0.5,
                  delay: 1.5, // Add a slight delay for the image to animate after the text
                  type: "spring",
                  stiffness: 100,
                }}
              />
            </div>
          </div>
          <div>
            {/* Title Section with Animation */}
            <motion.h5
              className="text-[32px] font-bold text-white bg-[#1977cc] px-[20px] py-[10px] mt-[50px] rounded-bl-3xl rounded-tr-3xl uppercase text-center md:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: firstElementInView ? 1 : 0,
                y: firstElementInView ? 0 : 50,
              }}
              transition={{ duration: 0.7, delay: 2 }}
            >
              LESS PAPER CORES – LESS CARBON FOOTPRINT
            </motion.h5>

            {/* Advantages Section with Animated Items */}
            <motion.div
              className="relative border-2 border-[#1977cc] rounded-xl md:grid grid-cols-2 grid-rows-3 gap-3 px-[20px] mt-[50px] pt-[50px] pb-[20px]"
              initial={{ opacity: 0, scale: 0.8, x: -100 }}
              animate={{
                opacity: firstElementInView ? 1 : 0,
                scale: firstElementInView ? 1 : 0.8,
                x: firstElementInView ? 0 : -100,
              }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 120,
                delay: 3,
              }}
            >
              <motion.h5
                className="absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] text-[32px] font-bold text-white bg-[#1977cc] px-[20px] py-[10px] uppercase w-fit"
                initial={{ opacity: 0, y: -50 }}
                animate={{
                  opacity: firstElementInView ? 1 : 0,
                  y: firstElementInView ? 0 : -50,
                }}
                transition={{ duration: 0.5, delay: 3.5 }}
              >
                Advantages:
              </motion.h5>

              {/* List Items with Large Change of Position Animation */}
              {[
                { icon: <RecycleIcon />, text: "SUSTAINABLE CONCEPT" },
                { icon: <HandCoinsIcon />, text: "SAVE MONEY (DISPOSAL)" },
                { icon: <Trash2Icon />, text: "NO WASTE" },
                { icon: <FootprintsIcon />, text: "REDUCE CARBON FOOTPRINT" },
                { icon: <SquareDashed />, text: "SAVE SPACE (USED CORES)" },
                { icon: <ClockIcon />, text: "SAVE TIME" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-5 items-center"
                  initial={{ opacity: 0, x: 50, y: 50 }}
                  animate={{
                    opacity: firstElementInView ? 1 : 0,
                    x: firstElementInView ? 0 : 50,
                    y: firstElementInView ? 0 : 50,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 3.7 + 0.3 * (index + 1), // Stagger animation delay
                    type: "spring",
                    stiffness: 80,
                  }}
                >
                  <div className="w-12 h-12 rounded-full min-w-12 text-white bg-[#1977cc] flex justify-center items-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[#1977cc] text-[24px] font-medium">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-[50px] relative  bg-white">
        <div className="max-w-[1200px]">
          <div ref={middleRef}>
            {/* First Image Section with Animation */}
            <motion.div
              className="flex justify-center mt-[50px]"
              initial={{ opacity: 0, y: 150 }}
              animate={{
                opacity: middleInView ? 1 : 0,
                y: middleInView ? 0 : 150,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                delay: 0.5,
              }}
            >
              <img
                src="/assets/images/sustainable/medioambiente-min-1.png"
                width={"450px"}
                className="object-cover lg:max-w-[450px] md:max-w-[300px] min-w-[200px] "
              />
            </motion.div>

            {/* Second Section with Two Images (Sliding and Zoom Effect) */}
            <motion.div
              className="mt-[50px] flex justify-center items-center w-auto"
              initial={{ opacity: 0, x: -200 }}
              animate={{
                opacity: middleInView ? 1 : 0,
                x: middleInView ? 0 : -200,
              }}
              transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
            >
              <motion.img
                src="/assets/images/sustainable/films_left.png"
                className="w-[50%]"
                initial={{ x: -200, scale: 0.8, opacity: 0 }}
                animate={{
                  opacity: middleInView ? 1 : 0,
                  x: middleInView ? 0 : -200,
                  scale: middleInView ? 1 : 0.8,
                }}
                transition={{
                  duration: 1,
                  delay: 1,
                  type: "spring",
                  stiffness: 120,
                }}
              />
              <motion.img
                src="/assets/images/sustainable/films_right.png"
                className="w-[50%]"
                initial={{ x: 200, scale: 0.8, opacity: 0 }}
                animate={{
                  x: middleInView ? 0 : 200,
                  opacity: middleInView ? 1 : 0,
                  scale: middleInView ? 1 : 0.8,
                }}
                transition={{
                  duration: 1,
                  delay: 1,
                  type: "spring",
                  stiffness: 120,
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-[50px] relative bg-white/80">
        <div className="parallax">
          <img
            className="absolute bottom-0 filter grayscale contrast-200 z-[-1] min-w-screen left-[50%] object-cover hidden lg:block"
            style={{
              opacity: 1,
              transform: "translate3d(-50%, 350px, 0px)",
            }}
            src="/assets/images/sustainable/coreless.webp"
          ></img>
        </div>
        <div className="max-w-[1200px]">
          <div className="flex flex-col md:flex-row">
            {/* Left Section with Text and Circles */}
            <motion.div
              ref={textRef}
              className="md:w-[70%] w-[100%] mt-[50px] flex flex-col justify-center items-center"
              initial={{ opacity: 0, x: -200 }}
              animate={{
                opacity: textInView ? 1 : 0,
                x: textInView ? 0 : -200,
              }}
              transition={{
                duration: 1.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              <div className="rounded-bl-[100px] rounded-tr-[100px] bg-[#1977cc] flex flex-col md:flex-row md:justify-end items-end drop-shadow-lg">
                <h2 className="md:text-[44px] text-[28px] text-white font-bold w-[70%]">
                  Retro fit any machine to utilize our Patent Pending CORELESS
                  FILM HOLDER!
                </h2>
              </div>

              {/* Circle section */}
              <motion.div
                className="md:w-[50%] w-[100%] flex flex-col justify-center items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: textInView ? 1 : 0,
                  scale: textInView ? 1 : 0.5,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 120,
                  damping: 25,
                }}
              >
                <div className="flex gap-10 justify-center mt-[50px]">
                  <div className="w-28 h-28 border-28 border-[#aaaaaa] rounded-full bg-white/80"></div>
                  <div className="w-28 h-28 border-22 border-[#aaaaaa] rounded-full bg-white/80">
                    <div className="border-10 border-[#734d45] w-full h-full rounded-full"></div>
                  </div>
                </div>

                <motion.p
                  className="text-[44px] italic text-[#151515] tracking-[0.075em] mt-[50px] text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: textInView ? 1 : 0,
                    y: textInView ? 0 : 50,
                  }}
                  transition={{
                    duration: 1.5,
                    type: "spring",
                    delay: 1.5,
                    stiffness: 100,
                    damping: 30,
                  }}
                >
                  Allows you to use{" "}
                  <span className="text-[#1977cc]">coreless</span> or{" "}
                  <span className="text-[#734D45]">cored</span> machine film on
                  stretch wrappers
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Right Section with Image */}
            <motion.div
              ref={imageRef}
              className="md:w-[30%] w-[100%]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: imageInView ? 1 : 0,
                scale: imageInView ? 1 : 0.8,
              }}
              transition={{
                duration: 1.5,
                delay: 1,
                type: "spring",
                stiffness: 80,
                damping: 25,
              }}
            >
              <div className="flex justify-center items-center">
                <motion.img
                  src="/assets/images/sustainable/Coreless_flim_holder.png"
                  height={"70%"}
                  className="object-cover md:max-h-[700px] max-h-[400px]"
                  initial={{ rotate: 10 }}
                  animate={{
                    rotate: imageInView ? 0 : 10,
                  }}
                  transition={{
                    duration: 1.5,
                    type: "spring",
                    stiffness: 120,
                    damping: 30,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-[50px] bg-white">
        <div className="max-w-[1200px]">
          <div className="flex flex-col md:flex-row">
            {/* Left Section (Images) */}
            <motion.div
              ref={leftSectionRef}
              className="relative md:w-[65%] w-[100%]"
            >
              <motion.img
                src="/assets/images/sustainable/core.png"
                width={"100%"}
                className="object-contain lg:min-w-[700px] hidden md:block"
                initial={{ opacity: 0, x: -500, y: -300 }}
                animate={{
                  opacity: leftSectionInView ? 1 : 0,
                  x: leftSectionInView ? 0 : -500,
                  y: leftSectionInView ? 0 : -300,
                }}
                transition={{ duration: 0.2, delay: 0.3 }}
              />
              <motion.img
                src="/assets/images/sustainable/less_is_more.png"
                className="absolute right-0 bottom-0 hidden md:block"
                initial={{ opacity: 0, x: -500, y: -250 }}
                animate={{
                  opacity: leftSectionInView ? 1 : 0,
                  x: leftSectionInView ? 0 : -500,
                  y: leftSectionInView ? 0 : -250,
                }}
                transition={{ duration: 0.2, delay: 0.7 }}
              />
              <img
                src="/assets/images/sustainable/core-less.png"
                className="md:hidden"
              />
            </motion.div>

            {/* Right Section (Text and Icons) */}
            <motion.div
              ref={rightSectionRef}
              className="md:w-[35%] w-[100%] flex flex-col gap-10 justify-center pl-[50px]"
              initial="hidden"
              animate={rightSectionInView ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.4, delayChildren: 0.5 },
                },
              }}
            >
              <motion.div
                className="flex gap-5 items-center"
                variants={iconVariants}
                custom={0}
              >
                <div className="w-16 h-16 rounded-full min-w-16 text-[#1977cc] border-2 border-[#1977cc] flex justify-center items-center">
                  <HandCoinsIcon />
                </div>
                <div>
                  <p className="text-[#151515] text-[24px] font-medium uppercase">
                    <span className="text-[#1977cc]">Less</span> cost
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-5 items-center"
                variants={iconVariants}
                custom={1}
              >
                <div className="w-16 h-16 rounded-full min-w-16 text-[#1977cc] border-2 border-[#1977cc] flex justify-center items-center">
                  <Trash2Icon />
                </div>
                <div>
                  <p className="text-[#151515] text-[24px] font-medium uppercase">
                    <span className="text-[#1977cc]">less</span> waste
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-5 items-center"
                variants={iconVariants}
                custom={2}
              >
                <div className="w-16 h-16 rounded-full min-w-16 text-[#1977cc] border-2 border-[#1977cc] flex justify-center items-center">
                  <LeafIcon />
                </div>
                <div>
                  <p className="text-[#151515] text-[24px] font-medium uppercase">
                    <span className="text-[#1977cc]">less</span> ENVIRONMENTAL
                    IMPACT
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-5 items-center"
                variants={iconVariants}
                custom={3}
              >
                <div className="w-16 h-16 rounded-full min-w-16 text-[#1977cc] border-2 border-[#1977cc] flex justify-center items-center">
                  <Layers3Icon />
                </div>
                <div>
                  <p className="text-[#151515] text-[24px] font-medium uppercase">
                    <span className="text-[#1977cc]">less</span> PAPER
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-5 items-center"
                variants={iconVariants}
                custom={4}
              >
                <div className="w-16 h-16 rounded-full min-w-16 text-[#1977cc] border-2 border-[#1977cc] flex justify-center items-center">
                  <Building />
                </div>
                <div>
                  <p className="text-[#151515] text-[24px] font-medium uppercase">
                    <span className="text-[#1977cc]">less</span> SPACE
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-5 items-center"
                variants={iconVariants}
                custom={5}
              >
                <div className="w-16 h-16 rounded-full min-w-16 text-[#1977cc] border-2 border-[#1977cc] flex justify-center items-center">
                  <Clock9Icon />
                </div>
                <div>
                  <p className="text-[#151515] text-[24px] font-medium uppercase">
                    <span className="text-[#1977cc]">less</span> TIME
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
