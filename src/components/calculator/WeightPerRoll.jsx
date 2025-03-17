import React, { useEffect, useState } from "react";
import Input from "./Input";
import { useInView } from "react-intersection-observer";

const WeightPerRoll = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [thickness, setThickness] = useState("");
  const [rollWeight, setRollWeight] = useState(0);

  useEffect(() => {
    if (!width || !length || !thickness) {
      setRollWeight(0);
      return;
    }
    setRollWeight(((length * width * thickness) / 250000.0).toFixed(5));
  }, [width, length, thickness]);

  return (
    <div
      className={`p-[30px] flex justify-center items-center flex-col gap-10 opacity-0 ${
        inView &&
        "opacity-100 animate-fade-left animate-duration-300 animate-ease-linear"
      }`}
      ref={ref}
    >
      <div className="flex items-center justify-between md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">Width:</p>
        <Input value={width} setValue={setWidth} />
      </div>
      <div className="flex items-center justify-between  md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">Length:</p>
        <Input value={length} setValue={setLength} />
      </div>
      <div className="flex items-center justify-between  md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">Thickness:</p>
        <Input value={thickness} setValue={setThickness} />
      </div>
      <div className="flex items-startjustify-between w-[400px] md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold min-w-[150px]">
          Roll Weight:
        </p>
        <p className="text-[15px] text-[#777777]">
          Net Poly Weight is the weight of the stretch film on a roll. It does
          not include the core weight or any other packaging. for thickness,
          please input the gauge of material for proper calculation.
        </p>
      </div>
      <div className="text-center  md:min-w-[700px] min-w-[300px]">
        <p className="text-[44px] text-[#54c1e5] font-semibold">{rollWeight}</p>
      </div>
    </div>
  );
};

export default WeightPerRoll;
