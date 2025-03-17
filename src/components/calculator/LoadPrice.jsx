import React, { useState, useEffect } from "react";
import Input from "./Input";
import { useInView } from "react-intersection-observer";
const LoadPrice = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [weight, setWeight] = useState("");
  const [pound, setPound] = useState("");
  const [result, setResult] = useState("");

  const [weightB, setWeightB] = useState("");
  const [poundB, setPoundB] = useState("");
  const [resultB, setResultB] = useState("");
  const [resultS, setResultS] = useState("");
  const [resultP, setResultP] = useState("");

  const validateValue = (value) => {
    if (value === "") {
      return "0.0";
    }
    return value;
  };

  const onCalc = () => {
    let nWeight = parseFloat(validateValue(weight));
    let nPound = parseFloat(validateValue(pound));

    setResult(((nWeight * nPound) / 16.0).toFixed(2));

    let nWeightB = parseFloat(validateValue(weightB));
    let nPoundB = parseFloat(validateValue(poundB));

    setResultB(((nWeightB * nPoundB) / 16.0).toFixed(2));

    setResultS(
      ((nWeightB * nPoundB) / 16.0 - (nWeight * nPound) / 16.0).toFixed(2)
    );
    if (nWeightB === 0 || nPoundB === 0) {
      setResultP("0.00");
    } else {
      setResultP(
        (
          (((nWeightB * nPoundB) / 16.0 - (nWeight * nPound) / 16.0) /
            ((nWeightB * nPoundB) / 16.0)) *
          100
        ).toFixed(2)
      );
    }
  };

  useEffect(() => {
    onCalc();
  }, [weight, pound, weightB, poundB]);

  // const onReset = () => {
  //   setWeight("");
  //   setPound("");
  //   setResult("");

  //   setWeightB("");
  //   setPoundB("");
  //   setResultB("");
  //   setResultS("");
  //   setResultP("");
  // };

  return (
    <div
      className={`p-[30px] flex justify-center items-center flex-col gap-10 opacity-0 ${
        inView &&
        "opacity-100 animate-fade-left animate-duration-300 animate-ease-linear"
      }`}
      ref={ref}
    >
      <div className="flex items-center justify-between  md:min-w-[700px] min-w-[300px] relative">
        <p className="text-[20px] text-[#777777] font-semibold ">
          Weight per Load w/A:
        </p>
        <span className="grow" />
        <Input value={weight} setValue={setWeight} />
        <p className="text-[20px]  text-[#777777] font-semibold ml-[10px]">
          Ounces
        </p>
      </div>
      <div className="flex items-center  md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold ">
          Cost per pound of A:
        </p>
        <span className="grow" />
        <Input value={pound} setValue={setPound} />
        <p className="text-[20px] text-white font-semibold ml-[10px]">Ounces</p>
      </div>
      <div className="flex items-center md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold  ">
          Cost per Load of A:
        </p>
        <span className="grow" />
        {/* <Input value={weight} setValue={setWeight} /> */}
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {result}
        </p>
        <p className="text-[20px] text-white font-semibold ml-[10px]">Ounces</p>
      </div>
      <div className="flex items-center md:min-w-[700px] min-w-[300px] relative">
        <p className="text-[20px] text-[#777777] font-semibold ">
          Weight per Load w/B:
        </p>
        <span className="grow" />
        <Input value={weightB} setValue={setWeightB} />
        <p className="text-[20px]  text-[#777777] font-semibold ml-[10px]">
          Ounces
        </p>
      </div>
      <div className="flex items-center md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold ">
          Cost per pound of B:
        </p>
        <span className="grow" />
        <Input value={poundB} setValue={setPoundB} />
        <p className="text-[20px] text-white font-semibold ml-[10px]">Ounces</p>
      </div>
      <div className="flex items-center md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold ">
          Cost per Load of B:
        </p>
        <span className="grow" />
        {/* <Input value={weight} setValue={setWeight} /> */}
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {resultB}
        </p>
        <p className="text-[20px] text-white font-semibold ml-[10px]">Ounces</p>
      </div>
      <div className="flex items-center md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold ">
          Savings from A to B:
        </p>
        <span className="grow" />
        {/* <Input value={weight} setValue={setWeight} /> */}
        <p className="text-[20px] text-[#777777] text-center min-w-[200px] font-semibold">
          {resultS}
        </p>
        <p className="text-[20px] text-white font-semibold ml-[10px]">Ounces</p>
      </div>
      <div className="flex items-center md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold ">
          Percentage of Savings:
        </p>
        <span className="grow" />
        {/* <Input value={weight} setValue={setWeight} /> */}
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {resultP}
        </p>
        <p className="text-[20px] text-white font-semibold ml-[10px]">Ounces</p>
      </div>
      {/* <div className="text-center md:min-w-[700px] min-w-[300px]">
        {!weight || !thickness || !insideDiameter || !outsideDiameter ? (
          <button
            className="text-[24px] uppercase tracking-[0.075em] text-[#54c1e5] border-2 border-[#54c1e5] w-full p-[15px] font-medium rounded-full hover:bg-[#54c1e5] hover:text-white cursor-pointer"
            onClick={onCalc}
          >
            calculate
          </button>
        ) : (
          <button
            className="text-[24px] uppercase flex justify-center items-center tracking-[0.075em] text-[#54c1e5] border-2 border-[#54c1e5] w-full p-[15px] font-medium rounded-full hover:bg-[#54c1e5] hover:text-white cursor-pointer"
            onClick={onReset}
          >
            <ArrowPathIcon className="w-8 mr-[12px]" />
            retry
          </button>
        )}
      </div> */}
    </div>
  );
};

export default LoadPrice;
