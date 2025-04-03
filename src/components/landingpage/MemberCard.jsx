import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";

export default function MemberCard({ src, name, position, path }) {
  return (
    <Link to={path}>
      <div className="group flex justify-center">
        <div className="lg:w-[290px] w-[270px] lg:mt-[50px] lg:hover:mt-0  hover:transition-all hover:ease-out hover:duration-500 lg:p-[10px] lg:hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]">
          <div className="w-full ">
            <a href="#">
              <img
                src={src}
                className="h-[230px] object-cover"
                width={"100%"}
                height={"230px"}
              ></img>
            </a>
          </div>
          <div className="pt-[26px] text-center">
            <h6 className="text-[#151515] text-[22px] tracking-wide normal-case font-medium hover:text-[#57a4e0] hover:transition-all hover:ease-in-out hover:duration-500">
              {name}
            </h6>
            <p className="mt-2px text-[18px] text-[#777777] tracking-[0.05em] font-medium min-h-[54px] flex justify-center items-center">
              {position}
            </p>
            <ul className={`flex gap-3 justify-center text-[#151515] mt-[8px]`}>
              <li className="mt-[12px] p-2 bg-[#f5f5f5] hover:bg-[#57a4e0] hover:transition hover:duration-500 hover:ease-in-out hover:text-white group-hover:transition group-hover:duration-500 group-hover:ease-out-in group-hover:animate-fade-up group-hover:animate-duration-200 group-hover:animate-delay-100 group-hover:animate-ease-out-in">
                <Link
                  to={
                    "https://www.facebook.com/pages/Alliance-Plastics/775908369189871?fref=ts"
                  }
                  target="_blank"
                >
                  <FaFacebookF size={14} />
                </Link>
              </li>
              <li className="mt-[12px] p-2 bg-[#f5f5f5]  hover:bg-[#57a4e0] hover:transition hover:duration-500 hover:ease-in-out hover:text-white group-hover:transition group-hover:duration-500 group-hover:ease-out-in group-hover:animate-fade-up group-hover:animate-duration-200 group-hover:animate-delay-150 group-hover:animate-ease-out-in">
                <Link>
                  <FaTwitter size={14} />
                </Link>
              </li>
              <li className="mt-[12px] p-2 bg-[#f5f5f5]  hover:bg-[#57a4e0] hover:transition hover:duration-500 hover:ease-in-out hover:text-white group-hover:transition group-hover:duration-500 group-hover:ease-out-in group-hover:animate-fade-up group-hover:animate-duration-200 group-hover:animate-delay-200 group-hover:animate-ease-out-in">
                <Link>
                  <FaInstagram size={14} />
                </Link>
              </li>
              <li className="mt-[12px] p-2 bg-[#f5f5f5]  hover:bg-[#57a4e0] hover:transition hover:duration-500 hover:ease-in-out hover:text-white group-hover:transition group-hover:duration-500 group-hover:ease-out-in group-hover:animate-fade-up group-hover:animate-duration-200 group-hover:animate-delay-250 group-hover:animate-ease-out-in">
                <Link>
                  <FaGooglePlusG size={14} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}
