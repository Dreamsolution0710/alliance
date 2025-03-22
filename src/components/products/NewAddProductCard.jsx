import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const NewAddProductCard = ({
  mainSrc,
  markSrc,
  content,
  benefits,
  current,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsVisible(false);
  }, [current]);

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col md:flex-row shadow-[0_0_8px_2px_rgba(0,0,0,0.09)] w-full my-[10px]"
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 100,
      }}
      transition={{
        opacity: { duration: 0.5 },
        y: { type: "spring", stiffness: 100, damping: 25 },
      }}
    >
      <div className="absolute top-0 right-0 z-10">
        <button
          className="uppercase bg-[#1977cc] border-2 border-[#1977cc] transition-all duration-300 ease-linear pl-10 pr-7 py-3 rounded-bl-full text-[24px] font-bold text-white cursor-pointer hover:bg-white hover:text-[#1977cc] active:translate-y-1 active:transition-x-1"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "back" : "view"}
        </button>
      </div>

      <div className="flex justify-center items-center w-[60%] ">
        <img
          src={mainSrc}
          width={"100%"}
          className={`object-cover h-full w-full min-w-[400px]`}
        />
      </div>

      <div className="m-[30px] text-[#151515] flex flex-col justify-center items-center relative overflow-hidden w-[40%]">
        <img
          src={markSrc}
          width={"100px"}
          className="object-contain absolute top-0 left-0"
        />

        {/* Content Animation - shown when 'back' is clicked */}
        <motion.div
          className="flex flex-col gap-5 mt-[30px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: !isVisible ? 1 : 0, // Show content when not visible
            y: !isVisible ? 0 : 20, // Slide up when showing content
          }}
          transition={{ duration: 0.5 }}
        >
          {!isVisible && (
            <p className="text-wrap text-[18px] tracking-[0.05em] leading-[1.8]">
              {content}
            </p>
          )}
        </motion.div>

        {/* Features & Benefits Animation - shown when 'view' is clicked */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isVisible ? 1 : 0, // Show features when visible
            y: isVisible ? 0 : 20, // Slide up when showing features
          }}
          transition={{ duration: 0.5 }}
        >
          {isVisible && (
            <>
              <h5 className="text-[24px] bg-[#1977cc] w-fit py-[5px] px-[15px] text-white font-medium rounded-xl translate-y-[30px]">
                Features & Benefits
              </h5>
              <div className="flex border-1 border-[#1977cc] rounded-2xl w-full">
                <ul className="list-disc text-[18px] p-[30px]">
                  {benefits &&
                    benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                </ul>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewAddProductCard;
