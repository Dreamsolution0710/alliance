import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, Download, FileText } from "lucide-react";

// import { FaApple, FaGooglePlay } from "react-icons/fa";
// import ProductCard from "./ProductCard";
// import EdgeDatas from "./../../assets/edgeGuard.json";
import edges from "./../../assets/newProduct/edges.json";
import EdgeGuardCard from "./EdgeGuardCard";
import HeaderSlot from "../utils/HeaderSlot";

const ProductFilms = () => {
  const [current, setCurrent] = useState("all");
  const [isDownload, setIsDownload] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeaderSlot
        imgSrc={"/assets/images/bg-counter-6.jpg"}
        title={"edgeguard"}
        router={[
          {
            title: "home",
            src: "/",
          },
          {
            title: "products",
            src: "/products/edges",
          },
          "edgeguard",
        ]}
      />
      <div className="flex justify-center lg:py-[90px] py-[50px]">
        <div className="max-w-[1200px] w-[1200px] ">
          <div className="lg:grid lg:grid-cols-4 gap-4 flex flex-col items-center lg:items-start">
            <div className="col-span-3 px-[15px]">
              <div className="mb-[50px] flex justify-center items-center flex-col ">
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
                    src="/assets/images/representative/imgtopbannerblue.jpg"
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
                  <div className="flex flex-col items-center justify-center gap-5">
                    <Link
                      to="https://itunes.apple.com/us/app/alliance-plastics/id959236111?mt=8"
                      target="_blank"
                    >
                      <img
                        src="https://www.f-cdn.com/assets/main/en/assets/footer/app-store.svg"
                        className="hover:translate-y-[1%] hover:translate-x-[1%]"
                      />
                    </Link>
                    <Link
                      to="https://play.google.com/store/apps/details?id=com.src.adrien.strechfilm&hl=en"
                      target="_blank"
                    >
                      <img
                        src="https://www.f-cdn.com/assets/main/en/assets/footer/google-play.svg"
                        className="hover:translate-y-[1%] hover:translate-x-[1%]"
                      />
                    </Link>
                  </div>
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
