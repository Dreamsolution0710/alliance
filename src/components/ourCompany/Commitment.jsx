import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import HeaderSlot from "../utils/HeaderSlot";

const Commitment = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="overflow-hidden">
      <HeaderSlot
        imgSrc={"/assets/images/sustainable.webp"}
        title={"Learn About Our Commitment To Duty"}
        router={[
          {
            title: "home",
            src: "/",
          },
          {
            title: "our Company",
            src: "/",
          },
          "Sustainability",
        ]}
      />
      <div className="flex justify-center mt-[50px]">
        <div className="max-w-[1200px]">
          <div>
            <div className="flex justify-center items-center flex-col md:flex-row">
              <p className="p-3 bg-green-800 text-white text-[28px] font-bold rounded-md w-fit">
                Be A Hero!
              </p>
              <p className=" text-[#151515] text-[36px] p-5 font-extrabold">
                To Our Planet
              </p>
            </div>
            <div className="flex justify-center items-center">
              <p className="p-3 text-[#151515] text-[28px] font-semibold rounded-md w-fit text-center">
                Sustainable packaging solutions from
              </p>
              <img
                src="/assets/images/logoalliance.png"
                className="hidden lg:block"
              />
            </div>
          </div>
          <div
            ref={ref}
            className={`flex flex-col md:flex-row  md:max-h-[480px] md:min-h-[480px] mb-[50px] w-full my-[10px] opacity-0 ${
              inView &&
              "opacity-100 animate-fade-up animate-duration-300 animate-ease-linear"
            }`}
          >
            <div className="p-[15px]flex justify-center items-center">
              <img
                src={"/assets/images/sustainable/medioambiente-min-1.png"}
                width={"450px"}
                className="object-cover md:min-w-[450px]"
              />
            </div>
            <div className="m-[30px] text-[#151515] flex flex-col relative overflow-hidden">
              <div>
                <h5 className="lg:text-[36px] text-[24px] mb-[40px]">
                  What Does Sustaiinability Mean In Secondary Packaging?
                </h5>
                <p className="text-wrap text-[18px]">
                  Many if not all sustainability initiatives mention NET ZERO by
                  a certain date or reduction of plastic in their packaging.
                  Unfortunately there is no way around the using plastics in
                  secondary packaging and the movement of material.
                  <br />
                  <br /> When it comes to plastic you typically lose performance
                  and add cost to your operations. Paper becomes the darling of
                  packaging because it is seen as more renewable and easier to
                  recycle.
                </p>
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col my-[50px]" ref={ref}>
            <div
              className={`flex flex-col items-center opacity-0 ${
                inView &&
                "opacity-100 animate-fade-right animate-duration-200 animate-ease-linear animate-delay-1000"
              }`}
            >
              <img src="/assets/images/sustainable/sustainability-icon.png" />
              <p className="text-[#151515] text-center">
                Our products are packed with sustainable solutions that can
                reduce waste, CO2 emission, without sacrificing profitability.
              </p>
            </div>
            <div
              className={`flex flex-col items-center opacity-0 ${
                inView &&
                "opacity-100 animate-fade-left animate-duration-200 animate-ease-linear animate-delay-1000"
              }`}
            >
              <img src="/assets/images/sustainable/sustainability-icon2.png" />
              <p className="text-[#151515] text-center">
                Our commitment to performance and reduction of total waste is
                our driving force behind our products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
