import React, { useEffect, useState } from "react";
import Input from "./Input";
import { useInView } from "react-intersection-observer";

const EdgeguardDxl = () => {
  const [cost, setCost] = useState("");
  const [pieceUsage, setPieceUsage] = useState("");
  const [pcsPerSkid, setPcsPerSkid] = useState("");

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
      <div className="flex items-center justify-between md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">Cost/Bd:</p>
        <Input value={cost} setValue={setCost} />
      </div>
      <div className="flex items-center justify-between md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">DX Savings:</p>
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {!cost ? "0.0" : (cost * 0.22).toFixed(4)}
        </p>
      </div>
      <div className="flex items-center justify-between md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">
          Pcs per Skid:
        </p>
        <Input value={pcsPerSkid} setValue={setPcsPerSkid} />
      </div>
      <div className="flex items-center justify-between md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">
          Gallons of Water Saved:
        </p>
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {!pieceUsage || !pcsPerSkid
            ? "0.0"
            : ((pieceUsage / pcsPerSkid) * 2 * 1200).toFixed(2)}
        </p>
      </div>
      <div className="flex items-center justify-between md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">
          Trees Saved per Month:
        </p>
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {!pieceUsage || !pcsPerSkid
            ? "0.0"
            : ((pieceUsage / pcsPerSkid) * 2).toFixed(2)}
        </p>
      </div>
      <div className="flex items-center justify-between md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">
          Piece Usage/Mo:
        </p>
        <Input value={pieceUsage} setValue={setPieceUsage} />
      </div>

      <div className="flex items-center justify-between md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">
          Annual Savings:
        </p>
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          ${!pieceUsage || !cost ? "0.0" : pieceUsage * cost * 12 * 0.22}
        </p>
      </div>
      <div className="flex items-center justify-between md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">
          Current Annual Cost:
        </p>
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          ${!pieceUsage || !cost ? "0.0" : pieceUsage * cost * 12}
        </p>
      </div>
      <div className="flex items-center justify-between md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">
          Proposed Annual Cost:
        </p>
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          $
          {!pieceUsage || !cost
            ? "0.0"
            : pieceUsage * cost * 12 - pieceUsage * cost * 12 * 0.22}
        </p>
      </div>
      <div className="flex items-center justify-between md:min-w-[700px] min-w-[300px]">
        <p className="text-[20px] text-[#777777] font-semibold">
          Cost Savings/Year
        </p>
        <p className="text-[20px] text-[#777777] font-semibold text-center min-w-[200px]">
          {!pieceUsage || !cost
            ? "0.0"
            : (
                ((pieceUsage * cost * 12 * 0.22) / (pieceUsage * cost * 12)) *
                100
              ).toFixed(1)}
          %
        </p>
      </div>
    </div>
  );
};

export default EdgeguardDxl;
