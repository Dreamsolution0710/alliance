import React, { useState } from "react";
import "./custom.css";
const ConverterInput = ({ value, setValue }) => {
  const [selected, setSelected] = useState(true);

  return (
    <div className="md:max-w-[400px] relative group">
      <input
        placeholder="0.0"
        type="number"
        min="0"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`p-[15px] border-1 border-[#f3f3f3] outline-none drop-shadow-lg text-left min-w-[400px] text-[18px] text-[#777777] tracking-[0.075em] transition-all duration-300 ease-linear focus:border-[#777777]`}
      />
      <div className="absolute right-[50%] top-0 my-[15px] border-l-1 border-[#777777] text-white h-[30px]"></div>
      <select
        className={`p-[15px] absolute right-0 mr-[15px] outline-none drop-shadow-lg text-right min-w-[200px] text-[18px] text-[#777777] tracking-[0.075em]  transition-all duration-300 ease-linear  cursor-pointer`}
      >
        
      </select>
    </div>
  );
};

export default ConverterInput;
