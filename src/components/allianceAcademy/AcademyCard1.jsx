import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { XMarkIcon } from "@heroicons/react/24/solid";

const AcademyCard = ({ src, title, index, imgLink }) => {
  const { ref, inView: isInView } = useInView({ threshold: 0.01 });
  const [isOpen, setIsOpen] = useState(false);

  const handleImageModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      <div
        className={`relative flex justify-center group flex-col max-w-[570px] shadow-md shadow-[0_0_8px_0_rgba(0,0,0,0.09)] hover:cursor-pointer ${
          isInView
            ? `animate-fade-right animate-linear animate-duration-700 opacity-100`
            : ""
        }`}
        ref={ref}
        style={{
          animationDelay: isInView ? `${index * 200}ms` : "0ms",
        }}
        onClick={handleImageModal}
      >
        <a className="block overflow-hidden">
          <img
            src={src}
            width={"570px"}
            height={"299px"}
            className="w-[100%] max-w-[570px] max-h-[299px] scale-110 max-w-[100%] object-cover group-hover:scale-100 transition-all duration-200 ease-linear"
          />
        </a>
        <div className="-translate-y-[30px] group-hover:translate-y-0 transition-all duration-200 ease-linear flex justify-center items-center">
          <div className="uppercase py-[30px] px-[15px] w-[80%] max-w-[80%] bg-white flex justify-center items-center">
            <p className="text-[18px] text-[#54c1e5] tracking-[0.1em] text-center">
              {title}
            </p>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-150 overflow-auto"
          onClick={closeModal}
        >
          <div
            className="relative rounded-lg shadow-lg w-[90%] max-w-[800px] max-h-[90vh] flex flex-col items-center overflow-auto mt-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white bg-[#1977cc] rounded-full p-2 hover:cursor-pointer"
              onClick={closeModal}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <img src={imgLink} className="w-full h-auto object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AcademyCard;
