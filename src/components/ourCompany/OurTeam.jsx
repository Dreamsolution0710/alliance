import React from "react";
import HeaderSlot from "../utils/HeaderSlot";
import { Link } from "react-router-dom";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

const OurTeam = ({ name, photo, bio, email, phone, content, position }) => {
  const handleCall = () => {
    window.location.href = `tel:+1${phone}`;
  };
  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="overflow-hidden bg-white">
      <HeaderSlot
        imgSrc={"/assets/images/teammember.webp"}
        title={name}
        router={[
          { title: "home", src: "/" },
          { title: "Our Company", src: "/" },
          { title: "About Us", src: "/aboutus" },
          `${name}`,
        ]}
      />
      <div className="flex justify-center items-center py-12 bg-gray-50">
        <div className="max-w-[1200px] w-full px-6 lg:px-0">
          <div className="my-12">
            <div className="flex flex-col justify-center gap-12">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white min-w-[405px]">
                  <img
                    src={photo}
                    className="w-full min-w-[405px] group-hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
                    alt={`${name}`}
                  />
                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end pb-6 p-4">
                    <div className="text-center text-white text-[24px] font-semibold">
                      {position}
                    </div>
                    <div className="flex gap-6 justify-center items-center mt-4">
                      <Link
                        className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-200 transition-all duration-300 ease-in-out"
                        onClick={handleEmail}
                      >
                        <EnvelopeIcon className="w-6 h-6 text-gray-700 hover:text-[#1977cc]" />
                      </Link>
                      <Link
                        className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-200 transition-all duration-300 ease-in-out"
                        onClick={handleCall}
                      >
                        <PhoneIcon className="w-6 h-6 text-gray-700 hover:text-[#1977cc]" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-[#151515] text-[18px] relative w-full flex justify-center items-center bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  {content ? content : "No Content"}
                </div>
              </div>
              <div className="flex justify-center">
                <hr className="border-t border-gray-300 w-[70%]" />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={bio}
                  className="w-full rounded-xl shadow-md"
                  alt="Bio"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
