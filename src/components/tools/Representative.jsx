import React, { useEffect, useState, useRef } from "react";
import USAMap from "./USAMap";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import HeaderSlot from "../utils/HeaderSlot";
import ContactCard from "./ContactCard";
import profilePic from "/assets/images/representative/yvone.jpg";
import ContactDetailCard from "./ContactDetailCard";
import { motion } from "framer-motion";
import repContact from "/src/assets/representative/rep_contact_list.json";
import csrList from "/src/assets/representative/CSR_list.json";
import { useInView } from "react-intersection-observer";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import "./rep.css";

const options = [
  "Regional Sales Reps",
  "Customer Service Reps",
  "Customer Expreience Reps",
];

const Representative = () => {
  const [selected, setSelected] = useState("Select an option");
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsExpanded(false);
  }, [selected]);

  return (
    <div className="overflow-hidden min-h-[700px]">
      <HeaderSlot
        imgSrc={"/assets/images/representative1.webp"}
        title={"United States of America"}
        router={[
          {
            title: "home",
            src: "/",
          },
          {
            title: "our company",
            src: "/",
          },
          "locate a representative",
        ]}
      />
      <div className="flex justify-center items-center">
        <div className="max-w-[1200px] w-[1200px]">
          <div className="my-[50px]">
            {/* <USAMap /> */}
            <div className="flex  flex-col gap-10">
              <div>
                <motion.div
                  ref={dropdownRef}
                  className="w-full max-w-xs relative mx-[50px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-[#1977cc] font-semibold mb-2">
                    Select an option
                  </label>

                  {/* Dropdown Box with Glitter Effect */}
                  <div
                    className="relative shimmer-dropdown border-2 border-[#1977cc] rounded-xl p-3 text-[#1977cc] 
        font-medium shadow-md cursor-pointer flex justify-between items-center 
        transition-all focus:outline-none focus:ring-2 focus:ring-[#54c1e5]"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {selected}
                    <span
                      className={`text-[#1977cc] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▼
                    </span>
                  </div>

                  {/* Dropdown Options */}
                  {isOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute w-full mt-1 bg-white border-2 border-[#1977cc] rounded-xl shadow-lg 
          overflow-auto max-h-48 z-10 transition-all scrollbar-thin scrollbar-thumb-[#1977cc] scrollbar-track-gray-100"
                    >
                      {options.map((option, index) => (
                        <li
                          key={index}
                          className={`p-3 cursor-pointer transition-all font-semibold text-[#1977cc] 
              hover:bg-[#54c1e5] hover:text-white
              ${selected === option ? "bg-[#1977cc] text-white" : ""}`}
                          onClick={() => {
                            setSelected(option);
                            setIsOpen(false);
                          }}
                        >
                          {option}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </motion.div>
              </div>
              <div className="mx-[50px]">
                {selected !== "Select an option" &&
                  selected !== "Customer Expreience Reps" && (
                    <motion.div
                      ref={ref}
                      className="mt-4 relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`relative px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg shadow-lg overflow-hidden
          hover:scale-105 active:scale-95 shimmer-button`}
                      >
                        <span className="relative flex items-center gap-2">
                          {isExpanded ? "Show Less" : "View More"}
                          {isExpanded ? (
                            <ChevronUpIcon className="w-5 h-5 text-white animate-bounce" />
                          ) : (
                            <ChevronDownIcon className="w-5 h-5 text-white animate-bounce" />
                          )}
                        </span>
                      </button>
                    </motion.div>
                  )}
              </div>
            </div>
            {selected === "Regional Sales Reps" && (
              <>
                {!isExpanded ? (
                  <div className="relative my-[100px]">
                    <motion.div
                      className="flex justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <img src="/assets/images/representative/USA_map.png" />
                    </motion.div>
                    <div className="md:grid md:grid-cols-2 gap-30 flex justify-center items-center flex-col">
                      <motion.div className="lg:absolute lg:top-[40%] lg:-left-[15%]">
                        <ContactCard
                          photo={
                            "/assets/images/representative/representative/russ.png"
                          }
                          name="Russ Vossen"
                          email="russ@allianceplastics.net"
                          phone="(775) 895-6448"
                          bgColor="bg-[#113788]"
                          borderColor="border-[#113788]"
                          delay={1}
                        />
                      </motion.div>
                      <motion.div className="lg:absolute lg:-top-[20%] lg:right-[20%]">
                        <ContactCard
                          photo={
                            "/assets/images/representative/representative/erik.png"
                          }
                          name="Eric Baranczyk"
                          email="eric@allianceplastics.net"
                          phone="(920) 639-1950"
                          bgColor="bg-[#1163C0]"
                          borderColor="border-[#1163C0]"
                          delay={2}
                        />
                      </motion.div>
                      <motion.div className="lg:absolute lg:top-[30%] lg:-right-[15%] ">
                        <ContactCard
                          photo={
                            "/assets/images/representative/representative/marc.png"
                          }
                          name="Marc Delatte"
                          email="marc@allianceplastics.net"
                          phone="(704) 962-7168"
                          bgColor="bg-[#3D85C6]"
                          borderColor="border-[#3D85C6]"
                          delay={3}
                        />
                      </motion.div>
                      <motion.div className="lg:absolute lg:-bottom-[15%] lg:-right-[5%]">
                        <ContactCard
                          photo={
                            "/assets/images/representative/representative/matthew.png"
                          }
                          name="Matt Mondelli"
                          email="matt@allianceplastics.net"
                          phone="(615) 977-7247"
                          bgColor="bg-[#46BFFF]"
                          borderColor="border-[#46BFFF]"
                          delay={4}
                        />
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col justify-center items-center">
                    {repContact.map((oneCsr, index) => (
                      <ContactDetailCard
                        photo={oneCsr.photo}
                        name={oneCsr.name}
                        position={oneCsr.position}
                        email={oneCsr.email}
                        phone={oneCsr.pnumber}
                        delay={index}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
            {selected === "Customer Service Reps" && (
              <>
                {!isExpanded ? (
                  <div className="relative my-[100px]">
                    <motion.div
                      className="flex justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <img src="/assets/images/representative/USA_map2.png" />
                    </motion.div>
                    <div className="md:grid md:grid-cols-2 gap-30 flex justify-center items-center flex-col">
                      <motion.div className="lg:absolute lg:top-[30%] lg:-left-[15%]">
                        <ContactCard
                          photo={
                            "/assets/images/representative/representative/nikki.jpg"
                          }
                          name="Nikki Pressley"
                          email="nikki@allianceplastics.net"
                          phone="(888) 643-1432"
                          bgColor="bg-[#113788]"
                          borderColor="border-[#113788]"
                          delay={1}
                        />
                      </motion.div>
                      <motion.div className="lg:absolute lg:-top-[20%] lg:right-[20%]">
                        <ContactCard
                          photo={
                            "/assets/images/representative/representative/taranew.jpg"
                          }
                          name="Tara Noviello"
                          email="tara@allianceplastics.net"
                          phone="(888) 643-1432"
                          bgColor="bg-[#1163C0]"
                          borderColor="border-[#1163C0]"
                          delay={2}
                        />
                      </motion.div>
                      <motion.div className="lg:absolute lg:bottom-[20%] lg:-right-[10%]">
                        <ContactCard
                          photo={
                            "/assets/images/representative/representative/yvone.jpg"
                          }
                          name="Yvonne Valentin"
                          email="yvonne@allianceplastics.net"
                          phone="(704) 774-0193"
                          bgColor="bg-[#3D85C6]"
                          borderColor="border-[#3D85C6]"
                          delay={3}
                        />
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  <div className="lg:grid lg:grid-cols-2 flex flex-col justify-center items-center">
                    {csrList.map((oneCsr, index) => (
                      <ContactDetailCard
                        photo={oneCsr.photo}
                        name={oneCsr.name}
                        position={oneCsr.position}
                        email={oneCsr.email}
                        phone={oneCsr.pnumber}
                        delay={index}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
            {selected === "Customer Expreience Reps" && (
              <div className="relative my-[100px]">
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <img src="/assets/images/representative/USA_map2.png" />
                </motion.div>
                <div className="md:grid md:grid-cols-2 gap-30 flex justify-center items-center flex-col">
                  <motion.div className="lg:absolute lg:top-[10%] lg:-left-[15%]">
                    <ContactCard
                      photo={
                        "/assets/images/representative/representative/ian.png"
                      }
                      name="Ian Salazar"
                      email="films@allianceplastics.net"
                      phone="(888) 643-1432"
                      bgColor="bg-[#073763]"
                      borderColor="border-[#073763]"
                      delay={1}
                    />
                  </motion.div>
                  <motion.div className="lg:absolute lg:bottom-[10%] lg:-left-[15%]">
                    <ContactCard
                      photo={
                        "/assets/images/representative/representative/karen.png"
                      }
                      name="Karen Cerreño"
                      email="csr3@allianceplastics.net"
                      phone="(888) 643-1432"
                      bgColor="bg-[#113788]"
                      borderColor="border-[#113788]"
                      delay={2}
                    />
                  </motion.div>
                  <motion.div className="lg:absolute lg:-top-[20%] lg:right-[20%]">
                    <ContactCard
                      photo={
                        "/assets/images/representative/representative/Geraldine.jpg"
                      }
                      name="Geraldine Aguilar"
                      email="csr1@allianceplastics.net"
                      phone="(888) 643-1432"
                      bgColor="bg-[#1163C0]"
                      borderColor="border-[#1163C0]"
                      delay={3}
                    />
                  </motion.div>
                  <motion.div className="lg:absolute lg:bottom-[20%] lg:-right-[10%]">
                    <ContactCard
                      photo={
                        "/assets/images/representative/representative/miguel.png"
                      }
                      name="Miguel Heredia"
                      email="csr2@allianceplastics.net"
                      phone="(888) 643-1432"
                      bgColor="bg-[#3D85C6]"
                      borderColor="border-[#3D85C6]"
                      delay={4}
                    />
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Representative;
