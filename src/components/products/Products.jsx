import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ProductCard from "./ProductCard";
import { Recycle, Hand, Settings } from "lucide-react";

const products = [
  {
    src: "/assets/images/Product1/eg-home.png",
    category: <Recycle className="w-12 h-12" />,
    content: "Films",
  },
  {
    src: "/assets/images/Product1/handfilmhome.png",
    category: <Hand className="w-12 h-12" />,
    content: "Films",
  },
  {
    src: "/assets/images/Product1/handtapehome.png",
    category: <Settings className="w-12 h-12" />,
    content: "Films",
  },
];

const Products = () => {
  return (
    <div>
      <div>
        <div className="lg:py-[116px] py-[50px] bg-[url(/assets/images/download.webp)] bg-cover">
          <div className="flex items-center justify-center">
            <div className="max-w-[1200px] w-auto px-[15px] flex flex-col justify-center items-center">
              <h3 className="lg:text-[44px] text-[30px] text-white uppercase tracking-[0.1em] font-bold">
                Products
              </h3>
              <div className="border-b-4 border-[rgba(255,255,255,0.6)] w-[64px] lg:h-[44px] h-[30px]"></div>
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
                {/* <ArrowRightIcon className="text-[#151515] font-black w-[16px] h-[14px]" />
                <Link
                  to="/products"
                  className="text-[12px] text-[#777777] hover:text-[#54c1e5] uppercase cursor-pointer px-[17px] font-medium leading-[1.5] tracking-[0.13em]"
                >
                  Products
                </Link> */}
                <ArrowRightIcon className="text-[#151515] font-black w-[16px] h-[14px]" />
                <span className="text-[12px] text-[#151515] uppercase font-black px-[17px] leading-[1.5] tracking-[0.13em]">
                  Products
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-[90px]">
        <div className="max-w-[1200px] w-[1200px]">
          <div className="md:grid md:grid-cols-3">
            {products.map((product, index) => (
              <div className="px-[15px]" key={index}>
                <ProductCard
                  src={product.src}
                  icon={product.category}
                  content={product.content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
