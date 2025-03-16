import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const NewAddProductCard = ({
  mainSrc,
  markSrc,
  content,
  benefits,
  backSrc,
  pathView,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row shadow-[0_0_8px_2px_rgba(0,0,0,0.09)] md:max-h-[480px] md:min-h-[480px] w-full my-[10px] opacity-0 ${
        inView &&
        "opacity-100 animate-fade-up animate-duration-300 animate-ease-linear"
      }`}
    >
      <div className="p-[15px] group flex justify-center items-center">
        <img
          src={mainSrc}
          width={"450px"}
          className={`object-cover md:min-w-[450px] ${
            backSrc ? "group-hover:hidden" : ""
          }`}
        />

        <img
          src={backSrc}
          width={"450px"}
          alt="Coming soon"
          className={`object-cover md:min-w-[450px] hidden  ${
            backSrc ? "group-hover:block" : ""
          }`}
        />
      </div>
      <div className="m-[30px] text-[#151515] flex flex-col gap-1 relative overflow-hidden">
        <div>
          <img src={markSrc} width={"50%"}></img>
          <p className="text-wrap">{content}</p>
        </div>
        <div>
          <h5 className="text-[24px]">Features & Benefits</h5>
          <ul className="list-disc pl-[20px]">
            {benefits && benefits.map((benefit, index) => <li>{benefit}</li>)}
          </ul>
        </div>
        {pathView !== "/coming" && (
          <Link
            className="absolute right-0 bottom-0 text-[#151515] hover:text-[#54c1e5]"
            to={pathView}
          >
            View More
          </Link>
        )}
      </div>
    </div>
  );
};

export default NewAddProductCard;
