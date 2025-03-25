import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const imageStyles =
  "object-cover w-full sm:max-w-[412px] sm:min-w-[412px] sm:max-h-[450px] sm:min-h-[450px] rounded-t-lg sm:rounded-none";

const NewAddProductCard = ({
  mainSrc,
  markSrc,
  content,
  benefits,
  current,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    setIsVisible(false);
  }, [current]);

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col sm:flex-row shadow-md w-full my-[10px] bg-white rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{
        opacity: { duration: 0.5 },
        y: { type: "spring", stiffness: 100, damping: 25 },
      }}
    >
      <div className="absolute top-0 right-0 z-10">
        <button
          className="uppercase bg-[#1977cc] border-2 border-[#1977cc] transition-all duration-300 ease-linear px-6 py-2 rounded-bl-full text-lg font-bold text-white cursor-pointer hover:bg-white hover:text-[#1977cc] active:translate-y-1"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "Back" : "View"}
        </button>
      </div>

      <img src={mainSrc} className={imageStyles} alt="Product" />

      <div className="md:m-[20px] my-[20px] text-[#151515] flex flex-col justify-center items-center relative overflow-hidden w-full px-[15px] sm:px-[20px]">
        <img
          src={markSrc}
          width="120"
          className="object-contain absolute top-0 left-0 max-h-[40px]"
          alt="Mark"
        />

        <motion.div
          className="flex flex-col gap-4 mt-[40px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 0 : 1, y: isVisible ? 20 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {!isVisible && (
            <p className="text-wrap text-[16px] sm:text-[18px] tracking-wide leading-[1.6]">
              {content}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          {isVisible && (
            <div>
              <h5 className="text-lg sm:text-xl bg-[#1977cc] w-fit py-2 px-4 text-white font-medium rounded-lg translate-y-[20px]">
                Features & Benefits
              </h5>
              <div className="border border-[#1977cc] rounded-xl w-auto px-[15px] pb-[15px] pt-[25px] sm:px-[20px] sm:pb-[20px] sm:pt-[30px] bg-gray-50">
                <ul className="list-disc text-[16px] sm:text-[18px] px-[10px] space-y-1">
                  {benefits?.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewAddProductCard;
