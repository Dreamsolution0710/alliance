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
import HeaderSlot from "../utils/HeaderSlot";

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
    <div className="overflow-hidden bg-white">
      <HeaderSlot
        imgSrc={"/assets/images/calculator.webp"}
        title={"calculator"}
        router={[
          {
            title: "home",
            src: "/",
          },
          {
            title: "OUR company",
            src: "/",
          },
          "calculator",
        ]}
      />
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
