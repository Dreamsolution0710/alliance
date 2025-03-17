import React, { useEffect, useState } from "react";
import Input from "./Input";
import { toast } from "react-toastify";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useInView } from "react-intersection-observer";

const RollDiameter = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [length, setLength] = useState("");
  const [thickness, setThickness] = useState("");
  const [insideDiameter, setInsideDiameter] = useState("");
  const [outsideDiameter, setOutsideDiameter] = useState("");

  //   useEffect(() => {
  //     onCalc();
  //   }, [thickness, length, insideDiameter, outsideDiameter]);

  const validateValue = (value) => {
    if (value === "") {
      return "0.0";
    }
    return value;
  };

  const onCalc = () => {
    console.log(length, "", thickness, "", insideDiameter, "", outsideDiameter);

    let nLength = parseFloat(validateValue(length)) * 12.0;
    let nThickness = parseFloat(validateValue(thickness));
    let nInSide = parseFloat(validateValue(insideDiameter)) / 2.0;
    let nOutSide = parseFloat(validateValue(outsideDiameter)) / 2.0;

    if (nThickness === 0 || nLength === 0 || nInSide === 0 || nOutSide === 0) {
      if (nThickness === 0) {
        if (nLength === 0 || nInSide === 0 || nOutSide === 0) {
          toast.error("Error:You need to input 3 values", {
            // position: toast.POSITION.TOP_CENTER,
            autoClose: 3000, // Close after 5 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
          return;
        } else if (nOutSide < nInSide) {
          toast.error(
            "Error:Outside Diameter must bigger than Inside Diameter",
            {
              // position: toast.POSITION.TOP_CENTER,
              autoClose: 3000, // Close after 5 seconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
            }
          );
          return;
        } else {
          setThickness(
            (
              ((nOutSide * nOutSide - nInSide * nInSide) * Math.PI) /
              nLength
            ).toFixed(2)
          );
        }
      } else if (nLength === 0) {
        if (nThickness === 0 || nInSide === 0 || nOutSide === 0) {
          toast.error("Error:You need to input 3 values", {
            // position: toast.POSITION.TOP_CENTER,
            autoClose: 3000, // Close after 5 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
          return;
        } else if (nOutSide < nInSide) {
          toast.error(
            "Error:Outside Diameter must bigger than Inside Diameter",
            {
              // position: toast.POSITION.TOP_CENTER,
              autoClose: 3000, // Close after 5 seconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
            }
          );
          return;
        } else {
          setLength(
            (
              ((nOutSide * nOutSide - nInSide * nInSide) * Math.PI) /
              nThickness /
              12.0
            ).toFixed(2)
          );
        }
      } else if (nInSide === 0) {
        if (nLength === 0 || nThickness === 0 || nOutSide === 0) {
          toast.error("Error:You need to input 3 values", {
            // position: toast.POSITION.TOP_CENTER,
            autoClose: 3000, // Close after 5 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
          return;
        }
        let result = Math.sqrt(
          nOutSide * nOutSide - (nLength * nThickness) / Math.PI
        );
        setInsideDiameter((result * 2.0).toFixed(2));
      } else {
        if (nLength === 0 || nInSide === 0 || nThickness === 0) {
          toast.error("Error:You need to input 3 values", {
            // position: toast.POSITION.TOP_CENTER,
            autoClose: 3000, // Close after 5 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
          return;
        }
        let result2 = Math.sqrt(
          nInSide * nInSide + (nLength * nThickness) / Math.PI
        );
        setOutsideDiameter((2.0 * result2).toFixed(2));
      }
    } else {
      toast.error("Error:You need to input 3 values", {
        // position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // Close after 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  const onReset = () => {
    console.log(length, "", thickness, "", insideDiameter, "", outsideDiameter);
    setThickness("");
    setLength("");
    setInsideDiameter("");
    setOutsideDiameter("");
  };

  return (
    <div
      className={`p-[30px] flex justify-center items-center flex-col gap-10 opacity-0 ${
        inView &&
        "opacity-100 animate-fade-left animate-duration-300 animate-ease-linear"
      }`}
      ref={ref}
    >
      <div className="flex items-center justify-between md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">Thickness:</p>
        <span className="grow-9" />
        <Input value={thickness} setValue={setThickness} />
        <p className="text-[20px] text-[#777777] font-semibold ml-[10px]">in</p>
      </div>
      <div className="flex items-center justify-between md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">length:</p>
        <span className="grow-9" />
        <Input value={length} setValue={setLength} />
        <p className="text-[20px] text-[#777777] font-semibold ml-[10px]">ft</p>
      </div>
      <div className="flex items-center justify-between md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">
          Inside Diameter:
        </p>
        <span className="grow-9" />
        <Input value={insideDiameter} setValue={setInsideDiameter} />
        <p className="text-[20px] text-[#777777] font-semibold ml-[10px]">in</p>
      </div>
      <div className="flex items-center justify-between md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">
          Outside Diameter:
        </p>
        <span className="grow-9" />
        <Input value={outsideDiameter} setValue={setOutsideDiameter} />
        <p className="text-[20px] text-[#777777] font-semibold ml-[10px]">in</p>
      </div>
      <div className="flex items-center justify-center md:min-w-[700px] min-w-[300px]">
        <img
          src="/assets/images/calc/roll.webp"
          width={"200px"}
          height={"180px"}
          className="object-fit"
        />
      </div>

      <div className="text-center md:min-w-[700px] min-w-[300px]">
        {!length || !thickness || !insideDiameter || !outsideDiameter ? (
          <button
            className="text-[24px] uppercase tracking-[0.075em] text-[#54c1e5] border-2 border-[#54c1e5] w-full p-[15px] font-medium rounded-full hover:bg-[#54c1e5] hover:text-white cursor-pointer"
            onClick={onCalc}
          >
            calculate
          </button>
        ) : (
          <>
            <button
              className="text-[24px] uppercase flex justify-center items-center tracking-[0.075em] text-[#54c1e5] border-2 border-[#54c1e5] w-full p-[15px] font-medium rounded-full hover:bg-[#54c1e5] hover:text-white cursor-pointer"
              onClick={onReset}
            >
              <ArrowPathIcon className="w-8 mr-[12px]" />
              retry
            </button>
            <p className="text-center text-[#f5543f] text-[20px]">
              You need to input 3 values
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default RollDiameter;
