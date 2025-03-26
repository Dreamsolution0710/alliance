import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, FileText } from "lucide-react";
import films from "./../../assets/newProduct/films.json";
import NewAddProductCard from "./NewAddProductCard";
import HeaderSlot from "../utils/HeaderSlot";
import EdgeGuardCard from "./EdgeGuardCard";
import EdgeGuardCard1 from "./EdgeGuardCard1";
import VideoModal from "../utils/VideoModal";

const categories = [
  "all",
  "hand",
  "machine",
  "sustainable",
  "specialty",
  "edgeguard",
];

const ProductFilms = () => {
  const [current, setCurrent] = useState("all");
  const [isDownload, setIsDownload] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredFilms =
    current === "all" ? films : films.filter((film) => film.type === current);

  return (
    <div>
      <HeaderSlot
        imgSrc={"/assets/images/film.webp"}
        title={"Our Products"}
        router={[
          {
            title: "home",
            src: "/",
          },
          "Productssss",
        ]}
      />
      <div className="flex justify-center lg:py-[90px] py-[50px] bg-white">
        <div className="max-w-[1200px] w-[1200px] ">
          <div className="lg:grid lg:grid-cols-5 gap-4 flex flex-col items-center lg:items-start">
            <div className="col-span-4 px-[15px]">
              <div className="mb-[50px] flex flex-col items-center">
                <ul className="list-none text-[#777] text-[14px] uppercase flex flex-wrap justify-center tracking-[0.1em] leading-[1.33] font-bold">
                  {categories.map((category) => (
                    <li
                      key={category}
                      className={`px-[25px] mb-[10px] hover:text-[#54c1e5] cursor-pointer transition-all duration-300 ease-linear ${
                        current === category
                          ? "text-[#54c1e5] border-b-2 md:border-0 border-[#54c1e5]"
                          : ""
                      }`}
                      onClick={() => setCurrent(category)}
                    >
                      {category.replace(/(^|\s)\S/g, (char) =>
                        char.toUpperCase()
                      )}
                    </li>
                  ))}
                </ul>
                {filteredFilms.map((film, index) => (
                  <NewAddProductCard key={index} {...film} current={current} />
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
                      <Download className="w-12 h-12" />
                    </div>
                  ) : (
                    <div className="group-hover:animate-duration-300 group-hover:animate-ease-linear">
                      <FileText className="w-12 h-12" />
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
