import React from "react";
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
import HeaderSlot from "../utils/HeaderSlot";

const Commitment = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className=" overflow-hidden">
      {/* <div className="bg-[url(/assets/images/headerslides/headerslide3.png)] bg-no-repeat  fixed  z-[-1] w-[1000%] h-[1000%]"></div> */}
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

      <div className="flex justify-center pt-[50px] relative  bg-white">
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
          <div>
            <h5 className="text-[32px] font-bold text-white bg-[#1977cc] px-[20px] py-[10px] rounded-bl-3xl rounded-tr-3xl uppercase text-center md:text-left">
              LESS PAPER CORES – LESS CARBON FOOTPRINT
            </h5>

            <div className="relative border-2 border-[#1977cc] rounded-xl md:grid grid-cols-2 grid-rows-3 gap-3 px-[20px] mt-[50px] pt-[50px] pb-[20px]">
              <h5 className="absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] text-[32px] font-bold text-white bg-[#1977cc] px-[20px] py-[10px] uppercase w-fit">
                Advatages:
              </h5>
              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 rounded-full min-w-12 text-white bg-[#1977cc] flex justify-center items-center">
                  <RecycleIcon />
                </div>
                <div className="">
                  <p className="text-[#1977cc] text-[24px] font-medium">
                    SUSTAINABLE CONCEPT
                  </p>
                </div>
              </div>
              <div className="flex  gap-5 items-center">
                <div className="w-12 h-12 rounded-full min-w-12 text-white bg-[#1977cc] flex justify-center items-center">
                  <HandCoinsIcon className="" />
                </div>
                <div className=" ">
                  <p className="text-[#1977cc] text-[24px] font-medium">
                    SAVE MONEY (DISPOSAL)
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center ">
                <div className="w-12 h-12 rounded-full min-w-12 text-white bg-[#1977cc] flex justify-center items-center">
                  <Trash2Icon />
                </div>
                <div className=" ">
                  <p className="text-[#1977cc] text-[24px] font-medium">
                    NO WASTE
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 rounded-full min-w-12 text-white  bg-[#1977cc] flex justify-center items-center">
                  <FootprintsIcon />
                </div>
                <div className=" ">
                  <p className="text-[#1977cc] text-[24px] font-medium">
                    REDUCE CARBON FOOTPRINT
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 rounded-full min-w-12 text-white bg-[#1977cc] flex justify-center items-center">
                  <SquareDashed />
                </div>
                <div className=" ">
                  <p className="text-[#1977cc] text-[24px] font-medium">
                    SAVE SPACE (USED CORES)
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 rounded-full min-w-12 text-white bg-[#1977cc] flex justify-center items-center">
                  <ClockIcon />
                </div>
                <div className="">
                  <p className="text-[#1977cc] text-[24px] font-medium">
                    SAVE TIME
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={"/assets/images/sustainable/medioambiente-min-1.png"}
              width={"450px"}
              className="object-cover lg:max-w-[450px] md:max-w-[300px] min-w-[200px]"
            />
          </div>
          <div className="mt-[50px] flex justify-center items-center w-auto">
            <img
              src="/assets/images/sustainable/films_left.png"
              className="w-[50%]"
            />
            <img
              src="/assets/images/sustainable/films_right.png"
              className="w-[50%]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-[1200px]">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[70%] w-[100%] mt-[50px] flex flex-col justify-center items-center ">
              <div className="rounded-bl-[100px] rounded-tr-[100px] bg-[#1977cc] flex flex-col md:flex-row md:justify-end items-end drop-shadow-lg">
                <h2 className="md:text-[44px] text-[28px] text-white font-bold w-[70%]">
                  Retro fit any machine to utilize our Patent Pending CORELESS
                  FILM HOLDER!
                </h2>
              </div>
              <div className="md:w-[50%] w-[100%] flex flex-col justify-center items-center">
                <div className="flex gap-10 justify-center mt-[50px]">
                  <div className="w-28 h-28 border-28 border-[#c1c1c1] rounded-full bg-white"></div>
                  <div className="w-28 h-28 border-22 border-[#c1c1c1] rounded-full bg-white">
                    <div className="border-10 border-[#734d45] w-full h-full rounded-full"></div>
                  </div>
                </div>
                <p className="text-[44px] italic text-[#151515] tracking-[0.075em] mt-[50px] text-center">
                  Allows you to use{" "}
                  <span className="text-[#1977cc]">coreless</span> or{" "}
                  <span className="text-[#734D45]">cored</span> machine film on
                  stretch wrappers
                </p>
              </div>
            </div>
            <div className="md:w-[30%] w-[100%]">
              <div className="flex justify-center items-center">
                <img
                  src="/assets/images/sustainable/Coreless_flim_holder.png"
                  height={"70%"}
                  className="object-cover md:max-h-[700px] max-h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[50px]">
        <div className="max-w-[1200px]">
          <div className="flex flex-col md:flex-row ">
            <div className="relative md:w-[65%] w-[100%]">
              <img
                src="/assets/images/sustainable/core.png"
                width={"100%"}
                className="object-contain lg:min-w-[700px] hidden md:block"
              />
              <img
                src="/assets/images/sustainable/less_is_more.png"
                className="absolute right-0 bottom-0 hidden md:block"
              />
              <img
                src="/assets/images/sustainable/core-less.png"
                className="md:hidden"
              />
            </div>
            <div className="md:w-[35%] w-[100%] flex flex-col gap-10 justify-center pl-[50px]">
              <div className="flex gap-5 items-center">
                <div className="w-16 h-16 rounded-full min-w-16 text-[#1977cc] border-2 border-[#1977cc] flex justify-center items-center">
                  <HandCoinsIcon />
                </div>
                <div className="">
                  <p className="text-[#151515] text-[24px] font-medium uppercase">
                    <span className="text-[#1977cc]">Less</span> cost
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-16 h-16 rounded-full min-w-16 text-[#1977cc] border-2 border-[#1977cc] flex justify-center items-center">
                  <Trash2Icon />
                </div>
                <div className="">
                  <p className="text-[#151515] text-[24px] font-medium uppercase">
                    <span className="text-[#1977cc]">less</span> waste
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-16 h-16 rounded-full min-w-16 text-[#1977cc] border-2 border-[#1977cc] flex justify-center items-center">
                  <LeafIcon />
                </div>
                <div className="">
                  <p className="text-[#151515] text-[24px] font-medium uppercase">
                    <span className="text-[#1977cc]">less</span> ENVIRONMENTAL
                    IMPACT
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-16 h-16 rounded-full min-w-16 text-[#1977cc] border-2 border-[#1977cc] flex justify-center items-center">
                  <Layers3Icon />
                </div>
                <div className="">
                  <p className="text-[#151515] text-[24px] font-medium uppercase">
                    <span className="text-[#1977cc]">less</span> PAPER
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-16 h-16 rounded-full min-w-16 text-[#1977cc] border-2 border-[#1977cc] flex justify-center items-center">
                  <Building />
                </div>
                <div className="">
                  <p className="text-[#151515] text-[24px] font-medium uppercase">
                    <span className="text-[#1977cc]">less</span> SPACE
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-16 h-16 rounded-full min-w-16 text-[#1977cc] border-2 border-[#1977cc] flex justify-center items-center">
                  <Clock9Icon />
                </div>
                <div className="">
                  <p className="text-[#151515] text-[24px] font-medium uppercase">
                    <span className="text-[#1977cc]">less</span> TIME
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
