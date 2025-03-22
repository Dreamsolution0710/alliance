import React from "react";
import { useInView } from "react-intersection-observer";

const EdgeGuardCard = () => {
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
      <div className="group flex justify-center  items-center">
        <img
          src={"/assets/images/AddProducts/edgeguard_dxl.png"}
          height={"480px"}
          className="object-cover h-full w-full"
        />
        <img
          src={"/assets/images/AddProducts/edgeguard_dxl_content.png"}
          className="object-cover md:min-w-[450px]"
        />
      </div>
      {/* <div className="m-[30px] text-[#151515] flex flex-col relative overflow-hidden">
        <div>
          <h5 className="lg:text-[36px] text-[24px] mb-[20px]">{title}</h5>
          <p className="text-wrap">{content}</p>
        </div>

        {pathView !== "/coming" && (
          <Link
            className="absolute right-0 bottom-0 text-[#151515] hover:text-[#54c1e5]"
            to={pathView}
          >
            View More
          </Link>
        )}
      </div> */}
    </div>
  );
};

export default EdgeGuardCard;
