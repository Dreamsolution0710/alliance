import React, { useEffect, useState } from "react";

const Input = ({
  label,
  type,
  id,
  message,
  value,
  setValue,
  isVisible,
  setIsVisible,
  oneVisible,
  setOneVisible
}) => {
  

  const onValidate = () => {
    setOneVisible(false);
    if (value) {
      setIsVisible(false);
      return;
    }
    setIsVisible(true);
  };

  const onFocusValidate = () => {
    setOneVisible(false);
    if (!value) {
      setIsVisible(true);
      return;
    }
    setIsVisible(false);
  };

  useEffect(() => {
    setIsVisible(false);
  }, [value]);

  return (
    <div className={`relative mt-[18px] `}>
      {(isVisible || oneVisible) && (
        <label
          htmlFor={id}
          className="absolute text-[#777777] top-[30px] cursor-text right-0 left-0 px-[25px] text-[15px] leading-[26px] tracking-[0.075em] text-left z-[9] transition duration-250 will-change-transform translate-y-[-50%]"
        >
          {label}
        </label>
      )}
      {isVisible && (
        <span className="absolute right-[8px] top-0 z-[11] mt-[2px] text-[9px] text-[#f5543f]">
          {message}
        </span>
      )}
      <input
        id={id}
        type={type}
        onFocus={() => onFocusValidate()}
        onBlur={() => onValidate()}
        value={value}
        onChange={(e) => {
          onFocusValidate();
          setValue(e.target.value);
        }}
        className={`block w-full min-h-[60px] py-[16px] px-[25px] text-[15px] leading-[26px] tracking-[0.075em] bg-white text-[#777777] border-1 border-[#e1e1e1] transition-all duration-300 ease-in-out outline-none ${
          isVisible ? "border-[#f5543f]" : ""
        }`}
      />
    </div>
  );
};

export default Input;
