import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, Download, FileText } from "lucide-react";
import AcademyCard from "./AcademyCard";
import Youtuber from "./Youtuber";
import HeaderSlot from "../utils/HeaderSlot";

const buttons = ["Ebooks & Sales Presentations", "Videos", "Infographics"];

const ebooks = [
  {
    src: "/assets/images/academy/Download_Stretch_film_101.png",
    title: "Download Stretch film 101",
  },
  {
    src: "/assets/images/academy/Download_Airforce_films_101.png",
    title: "Download Airforce films 101",
  },
];

const videos = [
  {
    src: "nwMV7bjnk2g",
    title: "Edgeguard Busters",
  },
  {
    src: "XLqxWuPV7v0",
    title: "Film Busters Tianium reinforcing",
  },
  {
    src: "EML2XEKFg3A",

    title: "Alliance Corp",
  },
  {
    src: "QDi3v3dCyiI",
    title: "New Brand Alliance",
  },
  {
    src: "UyY76doYKNo",
    title: "GlobalPack Hot Melt",
  },
  {
    src: "myb33TVSeGw",
    title: "Steelflex elevation",
  },
  {
    src: "qn9M5p8Pq8c",
    title: "Bandflex",
  },
  {
    src: "a--gPpXwEok",
    title: "Film Busters #1 Titanium Reforcing",
  },
  {
    src: "LMceutP5rUg",
    title: "Titanium Film Alliance Plastics",
  },
  {
    src: "p-SC2Qq9vd8",
    title: "Airforce Alliance Plastics",
  },
];

const infographics = [
  {
    src: "/assets/images/academy/Edgeguard_DX_Faq’s.png",
    title: "Edgeguard DX Faq",
  },
  {
    src: "/assets/images/academy/SteelFlex_Secure.png",
    title: "SteelFlex Secure",
  },
];

const Academy = () => {
  const [current, setCurrent] = useState(0);
  const [isDownload, setIsDownload] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeaderSlot
        imgSrc={"/assets/images/academy.webp"}
        title={"Alliance Academy"}
        router={[
          {
            title: "home",
            src: "/",
          },
          "alliance academy",
        ]}
      />
      <div className="flex justify-center lg:py-[90px] py-[50px]">
        <div className="max-w-[1200px] w-[1200px] ">
          <div className="md:grid md:grid-cols-4 gap-4 flex flex-col">
            <div className="col-span-3 px-[15px]">
              <div className="flex mb-[50px]">
                <div className="ml-[30px] mb-[50px] lg:block hidden">
                  {/* image */}
                  <img
                    className="w-100"
                    src="/assets/images/academy/academy.png"
                  />
                </div>
                <div className="ml-[30px] mb-[50px] lg:text-left text-center">
                  {/* text */}
                  <p className="text-[#151515] text-[18px] leading-[1.333] tracking-[0.025em] font-norml mb-[20px]">
                    Alliance Academy is a specially designed resource for all of
                    Alliance Plastics’ partners and distributors.
                  </p>
                  <p className="text-[#151515] text-[18px] leading-[1.333] tracking-[0.025em] font-norml mb-[20px]">
                    At Alliance Academy you can find educational information
                    about the packaging industry, special training on our
                    products, marketing training that will give you a cutting
                    edge when making a sale, and so much more, all specially
                    focused on our partners and distributors for your benefit!
                  </p>
                  <p className="text-[#151515] text-[18px] leading-[1.333] tracking-[0.025em] font-norml">
                    At Alliance Plastics we understand that the core of our
                    company are our partners and distributers, because of this
                    we want to supply you with all the best knowledge and tools
                    so you can understand our products and sell more to your
                    benefit!
                  </p>
                </div>
              </div>
              <div className="mb-[50px] flex justify-center items-center">
                <ul className="list-none text-[#777777] text-[14px] uppercase flex flex-col justify-center items-center md:flex-row tracking-[0.1em] leading-[1.33] font-bold">
                  <li
                    className={`px-[25px] mb-[10px] hover:text-[#54c1e5] ${
                      current === 0
                        ? "text-[#54c1e5] border-b-2 md:border-0 border-[#54c1e5]"
                        : ""
                    } transition-all duration-300 ease-linear cursor-pointer`}
                    onClick={() => setCurrent(0)}
                  >
                    Ebooks & Sales Presentations
                  </li>
                  <li
                    className={`px-[25px] mb-[10px] hover:text-[#54c1e5]  cursor-pointer ${
                      current === 1
                        ? "text-[#54c1e5] border-b-2 md:border-0 border-[#54c1e5]"
                        : ""
                    } transition-all duration-300 ease-linear `}
                    onClick={() => setCurrent(1)}
                  >
                    Videos
                  </li>
                  <li
                    className={`px-[25px] mb-[10px] hover:text-[#54c1e5] cursor-pointer ${
                      current === 2
                        ? "text-[#54c1e5] border-b-2 md:border-0 border-[#54c1e5]"
                        : ""
                    } transition-all duration-300 ease-linear`}
                    onClick={() => setCurrent(2)}
                  >
                    Infographics
                  </li>
                </ul>
              </div>
              <div className="flex text-[#151515] justify-center">
                {/* <div className="px-[15px] flex flex-col justify-start"> */}
                <div className="grid md:grid-cols-2 gap-6">
                  {current === 0 &&
                    ebooks.map((book, index) => (
                      <AcademyCard
                        src={book.src}
                        title={book.title}
                        key={index}
                        index={index}
                      />
                    ))}
                  {current === 1 &&
                    videos.map((video, index) => (
                      <div className="bg-[#777777] w-fit">
                        <Youtuber videoId={video.src} key={index} />
                      </div>
                    ))}

                  {current === 2 &&
                    infographics.map((info, index) => (
                      <AcademyCard
                        src={info.src}
                        title={info.title}
                        key={index}
                        index={index}
                      />
                    ))}
                  {/* </div> */}
                </div>
                <div>
                  {/* <div>
                  <div className="lg:block hidden relative mt-[20px]">
                    {buttons.map((button, index) => (
                      <div
                        className={`uppercase border-b-1 border-[#e1e1e1] text-[14px] lg:py-[20px] py-[10px] relative font-medium group`}
                        onClick={() => setCurrent(index)}
                        key={index}
                      >
                        <p>{button}</p>
                        {index === current && (
                          <div className="absolute bottom-0 left-0 border-1  border-[#fee25f] w-[40px]"></div>
                        )}

                        {index !== current && (
                          <div className="absolute w-0 border-1 invisible bottom-0 left-0 border-[#fee25f] transition-all ease-linear duration-500 group-hover:w-[100%] group-hover:visible"></div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="lg:hidden flex justify-center items-center flex-wrap gap-10 mt-[20px]">
                    {buttons.map((button, index) => (
                      <div
                        className={`uppercase border-b-1 border-[#e1e1e1] w-auto text-[14px] py-[10px] relative font-medium group `}
                        onClick={() => setCurrent(index)}
                        key={index}
                      >
                        <p className="cursor-pointer">{button}</p>
                        {index === current && (
                          <div className="absolute bottom-0 left-0 border-1  border-[#fee25f] w-[40px]"></div>
                        )}

                        {index !== current && (
                          <div className="absolute w-0 border-1 invisible bottom-0 left-0 border-[#fee25f] transition-all ease-linear duration-500 group-hover:w-[100%] group-hover:visible"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:px-0 px-[30px]">
              <div className="flex justify-center relative">
                <Link to="/representative">
                  <img
                    src="/assets/images/representative/imgtopbannerblue.jpg"
                    className="object-cover z-[-1]"
                  />
                  <div className="absolute top-0 left-0 rigt-0 bottom-0 cursor-pointer bg-[#151515] z-1"></div>
                </Link>
              </div>
              <Link to="/donwnload">
                <div
                  className="bg-[#54c1e5] text-[#ffffff] hover:bg-[#eeaf5e] hover:text-black flex flex-col lg:flex-row p-[20px] gap-5 justify-center items-center transition-all duration-300 ease-in"
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

export default Academy;
