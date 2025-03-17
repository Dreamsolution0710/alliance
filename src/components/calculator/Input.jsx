import React from "react";

const Input = ({ value, setValue }) => {
  return (
    <input
      placeholder="0.0"
      min={0}
      type="number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="p-[15px] border-1 border-[#f3f3f3] outline-none drop-shadow-lg text-center w-full md:max-w-[200px] text-[18px] text-[#777777] tracking-[0.075em] rounded-md focus:border-[#777777] transition-all duration-300 ease-linear"
    />
  );
};

export default Input;
