import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Input from "./Input";

// Debounce function with useCallback & useRef to prevent infinite loops
const useDebounce = (callback, delay) => {
  const timer = useRef(null);

  return useCallback(
    (...args) => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};

const MetricConversion = () => {
  const [inch1, setInch1] = useState("");
  const [inch2, setInch2] = useState("");
  const [mm, setMM] = useState("");
  const [cm, setCM] = useState("");
  const [ft, setFT] = useState("");
  const [meter, setMeter] = useState("");
  const [lb, setLB] = useState("");
  const [kg, setKG] = useState("");
  const [gauge, setGauge] = useState("");
  const [micron, setMicron] = useState("");

  // useEffect(() => {
  //   !inch1 || inch1 == 0 ? setMM(0) : setMM((inch1 * 25.4).toFixed(2));
  // }, [inch1]);

  // useEffect(() => {
  //   !mm || mm == 0 ? setInch1(0) : setInch1((mm / 25.4).toFixed(2));
  // }, [mm]);

  // useEffect(() => {
  //   !inch2 || inch2 == 0 ? setCM(0) : setCM((inch2 * 2.54).toFixed(2));
  // }, [inch2]);

  // useEffect(() => {
  //   !cm || cm == 0 ? setInch2(0) : setInch2((mm / 2.54).toFixed(2));
  // }, [cm]);

  // useEffect(() => {
  //   !ft || ft == 0 ? setMeter(0) : setMeter((ft * 0.3048).toFixed(2));
  // }, [ft]);

  // useEffect(() => {
  //   !meter || meter == 0 ? setFT(0) : setFT((meter / 0.3048).toFixed(2));
  // }, [meter]);

  // useEffect(() => {
  //   !lb || lb == 0 ? setKG(0) : setKG((lb * 0.453592).toFixed(2));
  // }, [lb]);

  // useEffect(() => {
  //   !kg || kg == 0 ? setLB(0) : setLB((kg / 0.453592).toFixed(2));
  // }, [kg]);

  // useEffect(() => {
  //   !gauge || gauge == 0
  //     ? setMicron(0)
  //     : setMicron((gauge * 0.25375).toFixed(2));
  // }, [gauge]);

  // useEffect(() => {
  //   !micron || micron == 0
  //     ? setGauge(0)
  //     : setGauge((micron / 0.25375).toFixed(2));
  // }, [micron]);

  // Debounce the state setters
  const debouncedSetMM = useDebounce(setMM, 1000);
  const debouncedSetInch1 = useDebounce(setInch1, 1000);
  const debouncedSetCM = useDebounce(setCM, 1000);
  const debouncedSetInch2 = useDebounce(setInch2, 1000);
  const debouncedSetMeter = useDebounce(setMeter, 1000);
  const debouncedSetFT = useDebounce(setFT, 1000);
  const debouncedSetKG = useDebounce(setKG, 1000);
  const debouncedSetLB = useDebounce(setLB, 1000);
  const debouncedSetMicron = useDebounce(setMicron, 1000);
  const debouncedSetGauge = useDebounce(setGauge, 1000);

  useEffect(() => {
    if (!inch1 || inch1 == 0) debouncedSetMM(0);
    else debouncedSetMM((inch1 * 25.4).toFixed(2));
  }, [inch1]);

  useEffect(() => {
    if (!mm || mm == 0) debouncedSetInch1(0);
    else debouncedSetInch1((mm / 25.4).toFixed(2));
  }, [mm]);

  useEffect(() => {
    if (!inch2 || inch2 == 0) debouncedSetCM(0);
    else debouncedSetCM((inch2 * 2.54).toFixed(2));
  }, [inch2]);

  useEffect(() => {
    if (!cm || cm == 0) debouncedSetInch2(0);
    else debouncedSetInch2((cm / 2.54).toFixed(2));
  }, [cm]);

  useEffect(() => {
    if (!ft || ft == 0) debouncedSetMeter(0);
    else debouncedSetMeter((ft * 0.3048).toFixed(2));
  }, [ft]);

  useEffect(() => {
    if (!meter || meter == 0) debouncedSetFT(0);
    else debouncedSetFT((meter / 0.3048).toFixed(2));
  }, [meter]);

  useEffect(() => {
    if (!lb || lb == 0) debouncedSetKG(0);
    else debouncedSetKG((lb * 0.453592).toFixed(2));
  }, [lb]);

  useEffect(() => {
    if (!kg || kg == 0) debouncedSetLB(0);
    else debouncedSetLB((kg / 0.453592).toFixed(2));
  }, [kg]);

  useEffect(() => {
    if (!gauge || gauge == 0) debouncedSetMicron(0);
    else debouncedSetMicron((gauge * 0.25375).toFixed(2));
  }, [gauge]);

  useEffect(() => {
    if (!micron || micron == 0) debouncedSetGauge(0);
    else debouncedSetGauge((micron / 0.25375).toFixed(2));
  }, [micron]);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div className="flex justify-center">
      <div
        className={`p-[30px] flex  flex-col gap-10 opacity-0 max-w-[700px] ${
          inView &&
          "opacity-100 animate-fade-left animate-duration-300 animate-ease-linear"
        }`}
        ref={ref}
      >
        <div className="grid grid-cols-5">
          <div className="flex items-center col-span-2 justify-start">
            <Input value={inch1} setValue={setInch1} />
            <p className="text-[20px]  text-[#777777] font-semibold ml-[10px]">
              in
            </p>
          </div>
          <div className="flex justify-center items-center">
            <ArrowsRightLeftIcon className="w-10 text-[#777777]" />
          </div>
          <div className="flex items-center col-span-2">
            <Input value={mm} setValue={setMM} />
            <p className="text-[20px]  text-[#777777] font-semibold ml-[10px]">
              mm
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="flex items-center col-span-2">
            <Input value={inch2} setValue={setInch2} />
            <p className="text-[20px]  text-[#777777] font-semibold ml-[10px]">
              in
            </p>
          </div>
          <div className="flex justify-center items-center">
            <ArrowsRightLeftIcon className="w-10 text-[#777777]" />
          </div>
          <div className="flex items-center col-span-2">
            <Input value={cm} setValue={setCM} />
            <p className="text-[20px]  text-[#777777] font-semibold ml-[10px]">
              cm
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="flex items-center col-span-2">
            <Input value={ft} setValue={setFT} />
            <p className="text-[20px]  text-[#777777] font-semibold ml-[10px]">
              ft
            </p>
          </div>
          <div className="flex justify-center items-center">
            <ArrowsRightLeftIcon className="w-10 text-[#777777]" />
          </div>
          <div className="flex items-center col-span-2">
            <Input value={meter} setValue={setMeter} />
            <p className="text-[20px]  text-[#777777] font-semibold ml-[10px]">
              meters
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="flex items-center col-span-2">
            <Input value={lb} setValue={setLB} />
            <p className="text-[20px]  text-[#777777] font-semibold ml-[10px]">
              lb
            </p>
          </div>
          <div className="flex justify-center items-center">
            <ArrowsRightLeftIcon className="w-10 text-[#777777]" />
          </div>
          <div className="flex items-center col-span-2">
            <Input value={kg} setValue={setKG} />
            <p className="text-[20px]  text-[#777777] font-semibold ml-[10px]">
              kg
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="flex items-center col-span-2">
            <Input value={gauge} setValue={setGauge} />
            <p className="text-[20px]  text-[#777777] font-semibold ml-[10px]">
              Gauge
            </p>
          </div>
          <div className="flex justify-center items-center">
            <ArrowsRightLeftIcon className="w-10 text-[#777777]" />
          </div>
          <div className="flex items-center col-span-2">
            <Input value={micron} setValue={setMicron} />
            <p className="text-[20px]  text-[#777777] font-semibold ml-[10px]">
              micron
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricConversion;
