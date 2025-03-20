import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "lucide-react";

import { Card1, Card2 } from "./Card";
import HeaderSlot from "../utils/HeaderSlot";

const pages = [1, 2, 3];

const News = () => {
  const [selectPage, setSelectPage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeaderSlot
        imgSrc={"/assets/images/download.webp"}
        title={"news"}
        router={[
          {
            title: "home",
            src: "/",
          },
          {
            title: "news",
            src: "/news",
          },
          "blog",
        ]}
      />
      <div className="lg:py-[90px] py-[50px] lg:flex justify-center items-center">
        <div className="lg:max-w-[1200px] lg:w-[1200px]">
          <div className="md:grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2">
            <Card1
              src={"/assets/images/news/post-1-370x210.jpg"}
              postDate={"October, 2020"}
              blogTitle={"Ron’s Market Review October 2020"}
              index={0}
              routePath={"/news/blogview202010"}
            />
            <Card2
              src={"/assets/images/news/post-2-370x365.jpg"}
              postDate={"September, 2020"}
              blogTitle={"Ron’s Market Review September 2020"}
              index={1}
              routePath={"/news/blogview202009"}
            />
            <Card1
              routePath={"/news/blogview202008"}
              src={"/assets/images/news/post-3-370x210.jpg"}
              postDate={"August, 2020"}
              blogTitle={"Ron’s Market Review August 2020"}
              index={2}
            />
            <Card2
              routePath={"/news/blogview20200722"}
              src={"/assets/images/news/post-4-370x365.jpg"}
              postDate={"July 22, 2020"}
              blogTitle={"Stretch Film Market Information August 2020"}
              index={3}
            />
            <Card1
              routePath={"/news/blogview20200612"}
              src={"/assets/images/news/post-5-370x210.jpg"}
              postDate={"June 12, 2020"}
              index={4}
              blogTitle={"Stretch Film Market Information June 2020"}
            />
            <Card2
              routePath={"/news/blogview202006"}
              src={"/assets/images/news/post-6-370x365.jpg"}
              postDate={"June, 2020"}
              index={5}
              blogTitle={"Ron’s Market Review June 2020"}
            />
          </div>
          <div className="flex items-center justify-center">
            <ul className="list-none flex px-[70px] lg:max-w-[870px] justify-center items-center lg:w-[870px] text-[#151515] relative transition-all duration-300 ease-linear">
              {pages.map((page, index) => (
                <li
                  key={index}
                  className={`px-[5px] mr-[-1px] text-[18px] cursor-pointer font-medium hover:text-[#54c1e5] ${
                    index === selectPage ? "text-[#54c1e5]" : ""
                  }`}
                  onClick={() => setSelectPage(index)}
                >
                  {page}
                </li>
              ))}
              <li
                className="absolute right-0 px-[5px] mx-[-1px] hover:text-[#54c1e5]"
                onClick={() =>
                  setSelectPage(selectPage === 2 ? 0 : selectPage + 1)
                }
              >
                <ArrowRightIcon size={24} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
