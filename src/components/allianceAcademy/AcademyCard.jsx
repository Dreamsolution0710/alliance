import React from "react";
import { useInView } from "../landingpage/useInView";

const AcademyCard = ({ src, title, index, file }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(`/assets/pdf/${file}`);
      if (!response.ok) throw new Error("Failed to download PDF");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${file}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };
  const [ref, isInView] = useInView(0.01);
  return (
    <div
      className={`relative flex justify-center group flex-col  max-w-[570px] shadow-md shadow-[0_0_8px_0_rgba(0,0,0,0.09)] hover:cursor-pointer ${
        isInView
          ? `animate-fade-right animate-linear animate-duration-700 opacity-100`
          : ""
      }`}
      ref={ref}
      onClick={handleDownload}
      style={{
        animationDelay: isInView ? `${index * 200}ms` : "0ms",
      }}
    >
      <a className="block overflow-hidden">
        <img
          src={src}
          width={"570px"}
          height={"299px"}
          className="w-[100%] max-w-[570px] max-h-[299px] scale-110 max-w-[100%] object-cover group-hover:scale-100 transition-all duration-200 ease-linear"
        />
      </a>
      <div className=" -translate-y-[30px] group-hover:translate-y-0 transition-all duration-200 ease-linear flex justify-center items-center">
        <div className="uppercase py-[30px] px-[15px] w-[80%] max-w-[80%] bg-white flex justify-center items-center ">
          <p className="text-[18px] text-[#54c1e5] tracking-[0.1em] text-center">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademyCard;
