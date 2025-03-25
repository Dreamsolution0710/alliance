import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, FileText } from "lucide-react";
import films from "./../../assets/newProduct/films.json";
import NewAddProductCard from "./NewAddProductCard";
import HeaderSlot from "../utils/HeaderSlot";
import EdgeGuardCard from "./EdgeGuardCard";
import EdgeGuardCard1 from "./EdgeGuardCard1";

const ProductFilms = () => {
  const [current, setCurrent] = useState("all");
  const [isDownload, setIsDownload] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeaderSlot
        imgSrc={"/assets/images/film.webp"}
        title={"films"}
        router={[
          {
            title: "home",
            src: "/",
          },
          {
            title: "products",
            src: "/products/films",
          },
          "films",
        ]}
      />
      <div className="flex justify-center lg:py-[90px] py-[50px]">
        <div className="max-w-[1200px] w-[1200px] ">
          <div className="lg:grid lg:grid-cols-5 gap-4 flex flex-col items-center lg:items-start">
            <div className="col-span-4 px-[15px]">
              <div className="mb-[50px] flex justify-center items-center flex-col ">
                <ul className="list-none text-[#777777] text-[14px] uppercase flex flex-col justify-center items-center md:flex-row tracking-[0.1em] leading-[1.33] font-bold animate-flip-up animate-duration-200 animate-delay-1000 animate-ease-in">
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
                      current === "hand"
                        ? "text-[#54c1e5] border-b-2 md:border-0 border-[#54c1e5]"
                        : ""
                    } transition-all duration-300 ease-linear `}
                    onClick={() => setCurrent("hand")}
                  >
                    Hand Films
                  </li>
                  <li
                    className={`px-[25px] mb-[10px] hover:text-[#54c1e5] cursor-pointer ${
                      current === "machine"
                        ? "text-[#54c1e5] border-b-2 md:border-0 border-[#54c1e5]"
                        : ""
                    } transition-all duration-300 ease-linear`}
                    onClick={() => setCurrent("machine")}
                  >
                    Machine films
                  </li>
                  <li
                    className={`px-[25px] mb-[10px] hover:text-[#54c1e5] cursor-pointer ${
                      current === "sustainable"
                        ? "text-[#54c1e5] border-b-2 md:border-0 border-[#54c1e5]"
                        : ""
                    } transition-all duration-300 ease-linear`}
                    onClick={() => setCurrent("sustainable")}
                  >
                    Sustainable
                  </li>
                  <li
                    className={`px-[25px] mb-[10px] hover:text-[#54c1e5] cursor-pointer ${
                      current === "specialty"
                        ? "text-[#54c1e5] border-b-2 md:border-0 border-[#54c1e5]"
                        : ""
                    } transition-all duration-300 ease-linear`}
                    onClick={() => setCurrent("specialty")}
                  >
                    Specialty
                  </li>
                  <li
                    className={`px-[25px] mb-[10px] hover:text-[#54c1e5] cursor-pointer ${
                      current === "edgeguard"
                        ? "text-[#54c1e5] border-b-2 md:border-0 border-[#54c1e5]"
                        : ""
                    } transition-all duration-300 ease-linear`}
                    onClick={() => setCurrent("edgeguard")}
                  >
                    Edgeguard
                  </li>
                </ul>
                {current === "all"
                  ? films.map((film, index) => (
                      <NewAddProductCard
                        key={index}
                        mainSrc={film.mainSrc}
                        markSrc={film.markSrc}
                        content={film.content}
                        benefits={film.benefits}
                        current={current}
                      />
                    ))
                  : films
                      .filter((film) => film.type === current)
                      .map((film, index) => (
                        <NewAddProductCard
                          key={index}
                          mainSrc={film.mainSrc}
                          markSrc={film.markSrc}
                          content={film.content}
                          benefits={film.benefits}
                          current={current}
                        />
                      ))}
                {(current === "sustainable" ||
                  current === "edgeguard" ||
                  current === "all") && (
                  <div className="flex flex-col">
                    <EdgeGuardCard />
                    <EdgeGuardCard1 />
                  </div>
                )}
              </div>
              <div className="flex text-[#151515] justify-center"></div>
            </div>
            <div className="flex flex-col gap-5 md:px-0 px-[30px] md:w-[50%] lg:w-[100%] justify-center animate-fade animate-duration-1000 animate-delay-1000 animate-ease-linear">
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
