import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import CalcTypeButton from "./CalcTypeButton";
import WeightPerRoll from "./WeightPerRoll";
import RollDiameter from "./RollDiameter";
import LoadPrice from "./LoadPrice";
import FtlMinNeeded from "./FtlMinNeeded";
import Edgeguarddx from "./Edgeguarddx";
import EdgeguardDxl from "./EdgeguardDxl";
import Emissions from "./Emissions";
import MetricConversion from "./MetricConversion";

const buttons = [
  "weight per roll",
  "roll diameter",
  "load price",
  "ftl min needed",
  "edgeguard dx",
  "edgeguard dxl",
  "co2 emissions",
  "metric conversion",
];
const components = {
  "weight per roll": WeightPerRoll,
  "roll diameter": RollDiameter,
  "load price": LoadPrice,
  "ftl min needed": FtlMinNeeded,
  "edgeguard dx": Edgeguarddx,
  "edgeguard dxl": EdgeguardDxl,
  "co2 emissions": Emissions,
  "metric conversion": MetricConversion,
};

const Calculator = () => {
  const [selectedTag, setSelectedTag] = useState("");
  const SelectedComponent = components[selectedTag];

  useEffect(() => {
    setSelectedTag("weight per roll");
  }, []);
  return (
    <div className="overflow-hidden">
      <div>
        <div className="relative lg:py-[116px] py-[50px] bg-[url(/assets/images/calculator.webp)] bg-cover">
          <div className="flex items-center justify-center">
            <div className="max-w-[1200px] w-auto px-[15px] flex flex-col justify-center items-center">
              <h3 className="lg:text-[44px] text-[30px] text-white uppercase tracking-[0.1em] font-bold z-2">
                Calculator
              </h3>
              <div className="border-b-4 border-[rgba(255,255,255,0.6)] w-[64px] lg:h-[44px] h-[30px] z-2"></div>
            </div>
          </div>
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.15)] z-1"></div>
        </div>
        <div className="py-[20px] bg-[#f3f3f3]">
          <div className="flex item-center justify-center">
            <div className="max-w-[1200px] flex justify-center items-center">
              <div className="flex items-center">
                <Link
                  to="/landing"
                  className="text-[12px] text-[#777777] hover:text-[#54c1e5] uppercase cursor-pointer px-[17px] font-medium leading-[1.5] tracking-[0.13em]"
                >
                  home
                </Link>
                <ArrowRightIcon className="text-[#151515] font-black w-[16px] h-[14px]" />
                <span className="text-[12px] text-[#151515] uppercase font-black px-[17px] leading-[1.5] tracking-[0.13em]">
                  Calculator
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-[#151515] py-[90px]">
        <div className="max-w-[1200px] w-full">
          <div className="lg:grid lg:grid-cols-4 lg:gap-5 flex flex-col">
            <div className="lg:flex lg:flex-col lg:px-0 md:grid md:grid-cols-4 md:px-[30px] grid grid-cols-2 px-[20px]">
              {buttons.map((button, index) => (
                <div key={index}>
                  <CalcTypeButton
                    title={button}
                    delay={index}
                    setSelectedTag={setSelectedTag}
                    selectedTag={selectedTag}
                  />
                </div>
              ))}
            </div>
            <div className="lg:col-span-3">
              {SelectedComponent && <SelectedComponent />}
              {/* <ConverterInput /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
