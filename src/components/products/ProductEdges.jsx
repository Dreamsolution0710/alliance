import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, Download, FileText } from "lucide-react";

import { FaApple, FaGooglePlay } from "react-icons/fa";
// import ProductCard from "./ProductCard";
// import EdgeDatas from "./../../assets/edgeGuard.json";
import edges from "./../../assets/newProduct/edges.json";
import EdgeGuardCard from "./EdgeGuardCard";

const ProductFilms = () => {
  const [current, setCurrent] = useState("all");
  const [isDownload, setIsDownload] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        <div className="py-[116px] bg-[url(/assets/images/bg-counter-6.jpg)] bg-cover">
          <div className="flex items-center justify-center">
            <div className="max-w-[1200px] w-auto px-[15px] flex flex-col justify-center items-center">
              <h3 className="text-[44px] text-white uppercase tracking-[0.1em] font-bold text-center">
                EdgeGuard
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
                  to="/landing"
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
                  Edgeguard
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
                {/* {current === "all"
                  ? EdgeDatas.map((data, index) => (
                      <ProductCard
                        index={index}
                        src={data.src}
                        title={data.title}
                        description={data.description}
                        intro={data.intro}
                        route={data.route}
                      />
                    ))
                  : EdgeDatas.filter((film) => film.category === current).map(
                      (data, index) => (
                        <ProductCard
                          index={index}
                          src={data.src}
                          title={data.title}
                          description={data.description}
                          intro={data.intro}
                          route={data.route}
                        />
                      )
                    )} */}
                {edges.map((data, index) => (
                  <EdgeGuardCard
                    mainSrc={data.mainSrc}
                    backSrc={data.backSrc}
                    title={data.title}
                    content={data.content}
                  />
                ))}
              </div>
              <div className="flex text-[#151515] justify-center"></div>
            </div>
            <div className="flex flex-col gap-5 md:px-0 px-[30px] md:w-[50%] lg:w-[100%] justify-center  animate-fade animate-duration-1000 animate-delay-1000 animate-ease-linear">
              <div className="flex justify-center">
                <Link to="/representative">
                  <img
                    src="/assets/images/representative/imgtopbannergreen.jpg"
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
                    to=""
                    target="_blank"
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

export default ProductFilms;
