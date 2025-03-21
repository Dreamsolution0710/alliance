import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, Download, FileText } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import ProductCard from "./ProductCard";
import tapeData from "./../../assets/tape_products.json";

const ProductTapes = () => {
  const [current, setCurrent] = useState("all");
  const [isDownload, setIsDownload] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        <div className="py-[116px] bg-[url(/assets/images/producttape.png)] bg-cover">
          <div className="flex items-center justify-center">
            <div className="max-w-[1200px] w-auto px-[15px] flex flex-col justify-center items-center">
              <h3 className="text-[44px] text-white uppercase tracking-[0.1em] font-bold text-center">
                tapes
              </h3>
              <div className="border-b-4 border-[rgba(255,255,255,0.6)] w-[64px] h-[44px]"></div>
            </div>
          </div>
        </div>
        <div className="py-[20px] bg-[#f3f3f3]">
          <div className="flex item-center justify-center">
            <div className="max-w-[1200px] flex justify-center items-center">
              <div className="flex items-center">
                <Link
                  to="/"
                  className="text-[12px] text-[#777777] hover:text-[#54c1e5] uppercase cursor-pointer px-[17px] font-medium leading-[1.5] tracking-[0.13em]"
                >
                  home
                </Link>
                <ArrowRightIcon
                  size={12}
                  className="text-[#151515] font-black"
                />
                <Link className="text-[12px] text-[#777777] hover:text-[#54c1e5] uppercase cursor-pointer px-[17px] font-medium leading-[1.5] tracking-[0.13em]">
                  Products
                </Link>
                <ArrowRightIcon
                  size={12}
                  className="text-[#151515] font-black"
                />
                <span className="text-[12px] text-[#151515] uppercase font-black px-[17px] leading-[1.5] tracking-[0.13em]">
                  tapes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:py-[90px] py-[50px]">
        <div className="max-w-[1200px] w-[1200px] ">
          <div className="lg:grid lg:grid-cols-4 gap-4 flex flex-col items-center lg:items-start">
            <div className="col-span-3 px-[15px]">
              <div className="mb-[50px] flex justify-center items-center flex-col ">
                <ul className="list-none text-[#777777] text-[14px] uppercase flex flex-col  animate-flip-up animate-duration-200 animate-delay-1000 animate-ease-in justify-center items-center md:flex-row tracking-[0.1em] leading-[1.33] font-bold">
                  <li
                    className={`px-[25px] mb-[10px] hover:text-[#54c1e5] ${
                      current === "all"
                        ? "text-[#54c1e5] border-b-2 md:border-0 border-[#54c1e5]"
                        : ""
                    } transition-all duration-300 ease-linear cursor-pointer`}
                    onClick={() => setCurrent("all")}
                  >
                    All
                  </li>
                  <li
                    className={`px-[25px] mb-[10px] hover:text-[#54c1e5]  cursor-pointer ${
                      current === 1
                        ? "text-[#54c1e5] border-b-2 md:border-0 border-[#54c1e5]"
                        : ""
                    } transition-all duration-300 ease-linear `}
                    onClick={() => setCurrent("hand")}
                  >
                    Hand Films
                  </li>
                  <li
                    className={`px-[25px] mb-[10px] hover:text-[#54c1e5] cursor-pointer ${
                      current === 2
                        ? "text-[#54c1e5] border-b-2 md:border-0 border-[#54c1e5]"
                        : ""
                    } transition-all duration-300 ease-linear`}
                    onClick={() => setCurrent("machine")}
                  >
                    Machine films
                  </li>
                </ul>
                {current === "all"
                  ? tapeData.map((data, index) => (
                      <ProductCard
                        index={index}
                        src={data.src}
                        title={data.title}
                        description={data.description}
                        intro={data.intro}
                        route={data.route}
                      />
                    ))
                  : tapeData
                      .filter((film) => film.category === current)
                      .map((data, index) => (
                        <ProductCard
                          route={data.route}
                          index={index}
                          src={data.src}
                          title={data.title}
                          description={data.description}
                          intro={data.intro}
                        />
                      ))}
              </div>
              <div className="flex text-[#151515] justify-center"></div>
            </div>
            <div className="flex flex-col gap-5 md:px-0 px-[30px] md:w-[50%] lg:w-[100%] justify-center  animate-fade animate-duration-1000 animate-delay-1000 animate-ease-linear">
              <div className="flex justify-center">
                <Link to="/representative">
                  <img
                    src="/assets/images/representative/imgtopbannerred.jpg"
                    className="object-cover"
                  />
                </Link>
              </div>
              <Link to="/donwnload">
                <div
                  className="bg-[#54c1e5] text-[#ffffff] hover:bg-[#eeaf5e] hover:text-black flex p-[20px] gap-5 justify-center items-center transition-all duration-300 ease-in"
                  onMouseEnter={() => setIsDownload(true)}
                  onMouseLeave={() => setIsDownload(false)}
                >
                  <div className="flex flex-col items-center group-hover:animate-fade-up group-hover:animate-duration-300 group-hover:animate-ease-linear">
                    <p className="uppercase text-[15px] font-bold text-center">
                      download our
                    </p>
                    <p className="uppercase text-[20px] font-extrabold tracking-[0.3em] text-center">
                      catalog
                    </p>
                  </div>
                  {isDownload ? (
                    <div className="">
                      <Download className="w-16 h-16" />
                    </div>
                  ) : (
                    <div className="group-hover:animate-duration-300 group-hover:animate-ease-linear">
                      <FileText className="w-16 h-16" />
                    </div>
                  )}
                </div>
              </Link>
              <div className="group">
                <div className="bg-[#54c1e5] text-[#ffffff] p-[20px] gap-5 flex flex-col justify-center items-center group-hover:bg-[#eea660] group-hover:text-black transition-all duration-300 ease-linear">
                  <div className="flex flex-col items-center group-hover:animate-fade-up group-hover:animate-duration-300 group-hover:animate-ease-linear">
                    <p className="uppercase text-[20px] font-bold text-center">
                      download our
                    </p>
                    <p className="uppercase text-[22px] font-extrabold tracking-[0.3em] text-center">
                      alliance app
                    </p>
                  </div>
                  <Link
                    to="https://apps.apple.com/us/app/alliance-plastics/id959236111"
                    target="_blank"
                    className="flex items-center text-white gap-5 hover:text-[#151515] "
                  >
                    <FaApple className="w-[40px] h-[40px]" />
                    <p className="text-[24px] font-bold text-justify">
                      App Store
                    </p>
                  </Link>
                  <Link
                    target="_blank"
                    to=""
                    className="flex items-center text-white gap-5 hover:text-[#151515]  "
                  >
                    <FaGooglePlay className="w-[40px] h-[40px]" />
                    <p className="text-[24px] font-bold text-justify">
                      Google Play
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTapes;
