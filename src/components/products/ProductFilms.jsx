import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, FileText } from "lucide-react";
import films from "./../../assets/newProduct/films.json";
import NewAddProductCard from "./NewAddProductCard";
import HeaderSlot from "../utils/HeaderSlot";
import EdgeGuardCard from "./EdgeGuardCard";
import EdgeGuardCard1 from "./EdgeGuardCard1";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredFilms =
    current === "all" ? films : films.filter((film) => film.type === current);

  return (
    <div>
      <HeaderSlot
        imgSrc="/assets/images/film.webp"
        title="films"
        router={[
          { title: "home", src: "/" },
          { title: "products", src: "/products/films" },
          "films",
        ]}
      />
      <div className="flex justify-center lg:py-[90px] py-[50px]">
        <div className="max-w-[1200px] w-[1200px]">
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
            </div>
            <div className="flex flex-col gap-5 px-[30px] md:w-[50%] lg:w-[100%] justify-center animate-fade animate-duration-1000 animate-delay-1000 animate-ease-linear">
              <Link to="/representative" className="flex justify-center">
                <img
                  src="/assets/images/representative/imgtopbannerblue.jpg"
                  className="object-cover"
                />
              </Link>
              <Link to="/download">
                <div className="bg-[#54c1e5] text-white hover:bg-[#eeaf5e] hover:text-black flex p-[20px] gap-5 justify-center items-center transition-all duration-300 ease-in">
                  <div className="flex flex-col items-center">
                    <p className="uppercase text-[15px] font-bold">
                      Download Our
                    </p>
                    <p className="uppercase text-[20px] font-extrabold tracking-[0.3em]">
                      Catalog
                    </p>
                  </div>
                  <Download className="w-16 h-16 group-hover:hidden" />
                  <FileText className="w-16 h-16 hidden group-hover:block" />
                </div>
              </Link>
              <div className="group">
                <div className="bg-[#54c1e5] text-white p-[20px] gap-5 flex flex-col items-center hover:bg-[#eea660] hover:text-black transition-all duration-300 ease-linear">
                  <p className="uppercase text-[20px] font-bold">
                    Download Our
                  </p>
                  <p className="uppercase text-[22px] font-extrabold tracking-[0.3em]">
                    Alliance App
                  </p>
                  <div className="flex flex-col items-center gap-5">
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
