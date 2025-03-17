import React, { useState } from "react";
import Input from "./Input";
import { useInView } from "react-intersection-observer";

const Emissions = () => {
  const [weightA, setWeightA] = useState("");
  const [weightB, setWeightB] = useState("");
  const [pirFilm, setPirFilm] = useState("");
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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
          Weight of film A per pallet:
        </p>
        <span className="grow" />
        <Input value={weightA} setValue={setWeightA} />
        <p className="text-[20px]  text-[#777777] font-semibold ml-[10px]">
          Ounces
        </p>
      </div>
      <div className="flex items-center md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold  ">
          CO2 value per pallet:
        </p>
        <span className="grow" />
        {/* <Input value={weight} setValue={setWeight} /> */}
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {!weightA
            ? "0.0"
            : ((2.5 / 2.0246 / 16) * parseFloat(weightA)).toFixed(2)}
        </p>
        <p className="text-[20px] text-white font-semibold ml-[10px]">Ounces</p>
      </div>
      <div className="flex items-center md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold  ">
          Emmissions per pound of film:
        </p>
        <span className="grow" />
        {/* <Input value={weight} setValue={setWeight} /> */}
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {(2.5 / 2.0246).toFixed(2)}
        </p>
        <p className="text-[20px] text-white font-semibold ml-[10px]">Ounces</p>
      </div>
      <div className="border-1 border-[#e1e1e1] md:min-w-[700px] min-w-[300px]"></div>
      <div className="flex items-center justify-between  md:min-w-[700px] min-w-[300px] relative">
        <p className="text-[20px] text-[#777777] font-semibold ">
          Weight of film B per pallet:
        </p>
        <span className="grow" />
        <Input value={weightB} setValue={setWeightB} />
        <p className="text-[20px]  text-[#777777] font-semibold ml-[10px]">
          Ounces
        </p>
      </div>
      <div className="flex items-center md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold  ">
          CO2 value per pallet:
        </p>
        <span className="grow" />
        {/* <Input value={weight} setValue={setWeight} /> */}
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {!weightB
            ? "0.0"
            : ((2.5 / 2.0246 / 16) * parseFloat(weightB)).toFixed(2)}
        </p>
        <p className="text-[20px] text-white font-semibold ml-[10px]">Ounces</p>
      </div>
      <div className="flex items-center md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold  ">
          CO2 value per pallet:
        </p>
        <span className="grow" />
        {/* <Input value={weight} setValue={setWeight} /> */}
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {(2.5 / 2.0246).toFixed(2)}
        </p>
        <p className="text-[20px] text-white font-semibold ml-[10px]">Ounces</p>
      </div>
      <div className="border-1 border-[#e1e1e1] md:min-w-[700px] min-w-[300px]"></div>
      <div className="flex items-center md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold  ">
          Emmissions Savings from A to B:
        </p>
        <span className="grow" />
        {/* <Input value={weight} setValue={setWeight} /> */}
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {!isNaN(parseFloat(weightB)) && !isNaN(parseFloat(weightA))
            ? (
                (2.5 / 2.0246 / 16) * parseFloat(weightA) -
                (2.5 / 2.0246 / 16) * parseFloat(weightB)
              ).toFixed(2)
            : "0.0"}
        </p>
        <p className="text-[20px] text-white font-semibold ml-[10px]">Ounces</p>
      </div>
      <div className="flex items-center md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold  ">
          Percentage of Savings:
        </p>
        <span className="grow" />
        {/* <Input value={weight} setValue={setWeight} /> */}
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {!isNaN(parseFloat(weightB)) && !isNaN(parseFloat(weightA))
            ? (
                (((2.5 / 2.0246 / 16) * parseFloat(weightA) -
                  (2.5 / 2.0246 / 16) * parseFloat(weightB)) /
                  ((2.5 / 2.0246 / 16) * parseFloat(weightA))) *
                100
              ).toFixed(2)
            : "0.0"}
          %
        </p>
        <p className="text-[20px] text-white font-semibold ml-[10px]">Ounces</p>
      </div>
      <div className="border-1 border-[#e1e1e1] md:min-w-[700px] min-w-[300px]"></div>
      <div className="flex items-center justify-between  md:min-w-[700px] min-w-[300px] relative">
        <p className="text-[20px] text-[#777777] font-semibold ">
          Withe a 30% PIR or PCR Film on Pallet A:
        </p>
        <span className="grow" />
        <Input value={pirFilm} setValue={setPirFilm} />
        <p className="text-[20px]  text-[#777777] font-semibold ml-[10px]">
          Ounces
        </p>
      </div>
      <div className="flex items-center md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold  ">
          CO2 value for Film A:
        </p>
        <span className="grow" />
        {/* <Input value={weight} setValue={setWeight} /> */}
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {!isNaN(parseFloat(pirFilm))
            ? ((2.43 / 2.2046 / 16) * parseFloat(pirFilm)).toFixed(3)
            : "0.0"}
          %
        </p>
        <p className="text-[20px] text-white font-semibold ml-[10px]">Ounces</p>
      </div>
      <div className="flex items-center md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold  ">
          Emmissions per pound:
        </p>
        <span className="grow" />
        {/* <Input value={weight} setValue={setWeight} /> */}
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {(2.43 / 2.2046).toFixed(3)}
        </p>
        <p className="text-[20px] text-white font-semibold ml-[10px]">Ounces</p>
      </div>
      <div className="border-1 border-[#e1e1e1] md:min-w-[700px] min-w-[300px]"></div>
      <div className="flex items-center md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold  ">
          Emmission Savings on PIR/PCR Film:
        </p>
        <span className="grow" />
        {/* <Input value={weight} setValue={setWeight} /> */}
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {!isNaN(parseFloat(pirFilm)) && !isNaN(parseFloat(weightA))
            ? (
                (2.5 / 2.0246 / 16) * parseFloat(weightA) -
                (2.43 / 2.2046 / 16) * parseFloat(pirFilm)
              ).toFixed(2)
            : "0.0"}
        </p>
        <p className="text-[20px] text-white font-semibold ml-[10px]">Ounces</p>
      </div>
      <div className="flex items-center md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold  ">
          Percentage of Savings on PIR/PCR:
        </p>
        <span className="grow" />
        {/* <Input value={weight} setValue={setWeight} /> */}
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {!isNaN(parseFloat(weightB)) && !isNaN(parseFloat(weightA))
            ? (
                (((2.5 / 2.0246 / 16) * parseFloat(weightA) -
                  (2.43 / 2.2046 / 16) * parseFloat(pirFilm)) /
                  ((2.5 / 2.0246 / 16) * parseFloat(weightA))) *
                100
              ).toFixed(2)
            : "0.0"}
        </p>
        <p className="text-[20px] text-white font-semibold ml-[10px]">Ounces</p>
      </div>
      <div className="flex items-center md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold  ">
          Emmisstions per pound:
        </p>
        <span className="grow" />
        {/* <Input value={weight} setValue={setWeight} /> */}
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {(2.43 / 2.2046).toFixed(3)}
        </p>
        <p className="text-[20px] text-white font-semibold ml-[10px]">Ounces</p>
      </div>
      <div className="border-1 border-[#e1e1e1] md:min-w-[700px] min-w-[300px]"></div>
    </div>
  );
};

export default Emissions;
