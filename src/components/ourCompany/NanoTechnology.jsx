import React from "react";
import HeaderSlot from "../utils/HeaderSlot";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  Layers3Icon,
  LucideCloudLightning,
  LucideZap,
  TriangleIcon,
} from "lucide-react";

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
  return (
    <div className="relative overflow-hidden">
      <HeaderSlot
        imgSrc={"/assets/images/nano67.webp"}
        title={"Nano 67"}
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
      <div className="flex justify-center bg-white">
        <div className="max-w-[1200px] w-full">
          <div>
            <div className="mt-[50px]">
              <h3 className="text-white w-fit md:text-[44px] text-[32px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold">
                Summary
              </h3>
              <div className="flex items-center justify-center mt-[50px]">
                <p className="md:text-[36px] text-[24px] w-[70%] text-left text-[#151515] tracking-[0.075em] ">
                  NANO <span className="text-[#1977cc]">67 </span> <b>FIRST</b>{" "}
                  in the market and the <b>FIRST</b> with{" "}
                  <span className="text-[#1977cc]">70% nanostructure.</span>
                </p>
              </div>
            </div>
            <div className="flex mt-[50px] gap-10 justify-center flex-col md:flex-row">
              <div className="flex flex-col gap-5">
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
              </div>
              <div className="flex flex-col md:w-[40%] w-[100%] gap-[1px] w-[100%]">
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
              </div>
            </div>
          </div>
          <div>
            <div className="mt-[50px] w-fit">
              <h3 className="text-white md:text-[44px] text-[32px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold">
                Nanolayer History
              </h3>
            </div>
            <div className="md:grid grid-cols-3 gap-10 flex flex-col px-[15px] mt-[30px] relative">
              <ul className="absolute left-[30px] bottom-0 list-disc text-[#151515] text-[22px] hidden lg:block">
                <li>Only 20% nanostructure</li>
                <li>2 extruder with 10% each</li>
                <li className="font-bold">
                  Difficult to use due to high pressure
                </li>
              </ul>
              <div className="flex flex-col gap-5">
                <h5 className="text-[#1977cc] uppercase text-[36px] font-bold text-center">
                  <span className="text-[#1955cc]">5 Extruder</span>
                  <br />
                  27 layer
                </h5>
                <div className="flex flex-col gap-[1px]">
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
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h5 className="text-[#1977cc] uppercase text-[36px] font-bold text-center">
                  <span className="text-[#1955cc]">6 Extruder</span>
                  <br />
                  31 layer
                </h5>
                <div className="flex flex-col gap-[1px]">
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
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h5 className="text-[#1977cc] uppercase text-[36px] font-bold text-center">
                  <span className="text-[#1955cc]">7 Extruder</span>
                  <br />
                  33 layer
                </h5>
                <div className="flex flex-col gap-[1px]">
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
                </div>
              </div>
            </div>
            <div className="text-[#151515] mt-[50px] flex justify-center items-center flex-col gap-5">
              <p className="text-[32px] w-full md:text-left text-center">
                <span className="text-[#1977cc]">55 NANO layer</span> with{" "}
                <span className="text-[#1977cc]">50% nanostructure</span> was
                developed in 2016
              </p>
              <h5 className="text-[28px] uppercase text-center font-bold bg-[#1977cc] rounded-md py-[10px] px-[20px] w-fit text-white">
                High pressure was solved, thus much more flexibility
              </h5>
              <div className="flex w-full justify-center gap-10 flex-col items-center md:flex-row">
                <div className=" border-5 border-[#1999cc] rounded-tr-[30px] rounded-bl-[30px] py-[50px] px-[30px]">
                  <h5 className="text-[#1977cc] uppercase text-[36px] font-bold ">
                    <span className="text-[#1955cc] ">
                      5<br /> Extruder
                    </span>
                    <br />
                    <span>27 layer</span>
                  </h5>
                </div>
                <div className="flex justify-center items-center hidden md:block">
                  <ChevronRightIcon size={48} />
                </div>
                <div className="flex justify-center items-center block md:hidden">
                  <ChevronDownIcon size={48} />
                </div>
                <div className="flex flex-col md:w-[40%] w-[100%]  gap-[1px]">
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
                    <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] md:font-bold text-white w-fit">
                      25 Alternating NanoLayers
                    </p>
                  </div>

                  <div className="bg-[#1933cc] text-white text-center text-[18px] p-[10px]">
                    Core (F) @ 8% vol.
                  </div>

                  <div className="bg-[#1966cc] text-center text-[18px] relative">
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <hr className="border-[#1999cc] py-[1px] border-y-1" />
                    <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-bold text-white">
                      25 Alternating NanoLayers
                    </p>
                  </div>
                  <div className="bg-[#1988cc] text-white text-center text-[18px] p-[10px]">
                    Subskin 10%
                  </div>

                  <div className="bg-[#19bbcc] text-white text-center text-[18px] p-[10px]">
                    Cling 10%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-[50px]">
              <h3 className="text-white w-fit md:text-[44px]  text-[32px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold">
                67 Nanolayer Structure
              </h3>
              <div className="flex items-center justify-center">
                <p className="text-[32px] md:w-[70%] md:text-left text-center text-[#151515]">
                  ALLIANCE FILMS is the <b>FIRST</b> company who developed{" "}
                  <span className="text-[#1977cc]">67 nanolayer</span> with{" "}
                  <span className="text-[#1977cc]">
                    70 % nano structure in North America.
                  </span>
                </p>
              </div>
              <div className="flex w-full justify-center items-center gap-10 mt-[50px] flex-col md:flex-row">
                <div>
                  <div className=" border-5 border-[#1999cc] rounded-tr-[30px] rounded-bl-[30px] py-[50px] px-[30px] w-fit">
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
                  </div>
                  <div>
                    <img src="/assets/images/nano67/logo.png" width={"200px"} />
                  </div>
                </div>
                <div className="flex justify-center items-center text-[#151515] hidden md:block">
                  <ChevronRightIcon size={48} />
                </div>
                <div className="flex justify-center items-center text-[#151515] block md:hidden">
                  <ChevronDownIcon size={48} />
                </div>
                <div className="flex flex-col md:w-[40%] w-[100%]  gap-[1px]">
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
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-[50px] w-fit">
              <h3 className="text-white md:text-[44px] text-[32px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold">
                FleedBlock
              </h3>
            </div>
            <div className="md:grid grid-cols-2 gap-10 mt-[50px] flex flex-col items-center justify-center">
              <div className="flex justify-center items-center flex-col gap-5">
                <div className="md:text-[36px] text-[28px] text-[#151515] text-center font-bold">
                  <p className="tracking-[0.075em]">Conversational 55 layer</p>
                  <p className="text-[#1977cc] uppercase">single feedblock</p>
                </div>
                <div className="flex justify-center items-center text-[#151515] font-bold">
                  <ChevronDownIcon size={48} />
                </div>
                <div>
                  <img src="/assets/images/nano67/55layerfleedblock.png" />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col gap-5">
                <div className="md:text-[36px] text-[28px] text-[#151515] text-center text-center font-bold">
                  <p className="tracking-[0.1em]">SML Nano 67 layer</p>
                  <p className="text-[#1977cc] uppercase">Double feedblock</p>
                </div>
                <div className="flex justify-center items-center text-[#151515] font-bold">
                  <ChevronDownIcon size={48} />
                </div>
                <div>
                  <img src="/assets/images/nano67/67layerfeedblock.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[50px]">
            <img src="/assets/images/nano67/nano67bg.png"></img>
          </div>

          <div>
            <div className="mt-[50px] w-fit">
              <h3 className="text-white md:text-[32px] text-[24px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold">
                TESTING 12 MICRON
                <br /> 55 LAYER VS. 67 LAYER
              </h3>
            </div>
            <div className="flex gap-10 justify-center items-center mt-[50px] md:flex-row flex-col">
              <ul className="text-[32px] text-[#151515] list-disc ml-[50px]">
                <li className="py-[15px]">12 micron</li>
                <li className="py-[15px]">400 m/min</li>
                <li className="py-[15px]"> 500 m/min</li>
                <li className="py-[15px]">600 m/min</li>
              </ul>
              <div className="overflow-x-auto bg-white/80 backdrop-blur-lg shadow-lg rounded-xl max-w-5xl mx-auto">
                <table className="min-w-full border border-gray-300 text-xs sm:text-sm text-gray-700">
                  {/* Frosted Glass Header with Subtle Gradient */}
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

                  {/* Table Content with Glassmorphism & Neon Hover */}
                  <tbody className="divide-y divide-gray-300">
                    {data.map((row, index) =>
                      row.dosing.map((dosing, i) => (
                        <tr
                          key={`${index}-${i}`}
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
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-[50px] w-fit">
              <h3 className="text-white md:text-[44px] text-[32px] bg-[#1977cc] px-[20px] py-[5px] border-l-[15px] border-[#54c1e5] rounded-tr-[50px] uppercase tracking-[0.075em] font-bold">
                SML Nano 67-12 micron
              </h3>
            </div>
            <div className="">
              <img
                src="/assets/images/nano67/chart.png"
                className="px-[15px]"
              />
              <div className="flex gap-6 justify-center items-center">
                <div className="flex items-center md:gap-6 md:px-[20px]">
                  <img
                    className="md:max-h-[44px] max-h-[22px]"
                    height={"44px"}
                    src="/assets/images/nano67/arrowRight.png"
                  />
                  <p className="bg-[#54c1e5] text-white md:text-[32px] text-[12px] md:p-[20px] font-bold uppercase rounded-lg">
                    11% Higher
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <img
                    className="md:max-h-[44px] max-h-[22px]"
                    height={"44px"}
                    src="/assets/images/nano67/arrowRight.png"
                  />
                  <p className="bg-[#54c1e5] text-white md:text-[32px] text-[12px]  md:p-[20px] font-bold uppercase rounded-lg">
                    16% Higher
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <img
                    className="md:max-h-[44px] max-h-[22px]"
                    height={"44px"}
                    src="/assets/images/nano67/arrowRight.png"
                  />
                  <p className="bg-[#54c1e5] text-white md:text-[32px] text-[12px] md:p-[20px] font-bold uppercase rounded-lg">
                    57% Higher
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

export default NanoTechnology;
