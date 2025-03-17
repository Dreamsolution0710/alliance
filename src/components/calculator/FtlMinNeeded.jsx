import React, { useEffect, useState } from "react";
import Input from "./Input";
import { useInView } from "react-intersection-observer";

const FtlMinNeeded = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (!weight) {
      setResult(0);
      return;
    }
    setResult((weight / 100.0).toFixed(2));
  }, [weight]);
  return (
    <div
      className={`p-[30px] flex justify-center items-center flex-col gap-10 opacity-0 ${
        inView &&
        "opacity-100 animate-fade-left animate-duration-300 animate-ease-linear"
      }`}
      ref={ref}
    >
      <div className="flex items-center justify-between md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">
          Weight of Load:
        </p>
        <Input value={weight} setValue={setWeight} />
      </div>
      <div className="flex items-center justify-between md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">
          Min FTL required:
        </p>
        <p className="text-[24px] text-[#777777] font-semibold text-center min-w-[200px]">
          {result}
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:items-start items-center justify-between w-[400px] md:min-w-[700px] min-w-[300px] gap-5">
        <img
          src="/assets/images/calc/FTL_min.webp"
          width={"250px"}
          height={"270px"}
          className="object-cover min-w-[250px]"
        />
        <p className="text-[18px] text-[#777777] tracking-[0.075em]">
          Force to Load is the total force applied to your load at a given
          point. It's produced by a wrap force, or tightness, multiplied by the
          number of stretch film revolutions. Using the right amount of stretch
          film containment force can be the difference between your products
          getting from point A to point B in one piece, or damaged. It is
          essential that you know the right amount of force to load you need.
          This easy multiplier helps you do this.
        </p>
      </div>
    </div>
  );
};

export default FtlMinNeeded;
