import React, { useState, useEffect } from "react";
import { ChevronRight, MailIcon, MapPin, PhoneIcon } from "lucide-react";
import Input from "./Input";
import Textarea from "./Textarea";
import { useInView } from "../landingpage/useInView";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Commet, OrbitProgress, ThreeDot } from "react-loading-indicators";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MapCard } from "./MapCard";
import {
  BuildingOfficeIcon,
  BriefcaseIcon,
  TruckIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import HeaderSlot from "../utils/HeaderSlot";
// const urls = [
//   {
//     src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.963683739017!2d-80.9635551!3d34.9575189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88568672e093de53%3A0xdcc5d59fab31d3d1!2s2805%20Commerce%20Dr%2C%20Rock%20Hill%2C%20SC%2029730%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1730312184882!5m2!1ses-419!2smx",
//   },
//   {
//     src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2854.290618046908!2d-88.188412!3d44.324532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8803aa3e1f058723%3A0xb8319d2ee59d18d6!2s490%20Quality%20Ct%2C%20Kaukauna%2C%20WI%2054130%2C%20EE.%20UU.!5e0!3m2!1ses!2smx!4v1730313976174!5m2!1ses!2smx",
//   },
//   {
//     src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.786734226835!2d-115.0716917!3d36.2446743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8dd5e35c72f7f%3A0xaa5b1b2ee2ac10f4!2s4680%20Calimesa%20St%2C%20Las%20Vegas%2C%20NV%2089115%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1730314123357!5m2!1ses-419!2smx",
//   },
//   {
//     src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.233388754071!2d-96.8797558!3d32.6798388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9058f1564abb%3A0x2f4999b84b048cff!2s5556%20Red%20Bird%20Center%20Dr%2C%20Dallas%2C%20TX%2075237%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1730314186060!5m2!1ses-419!2smx",
//   },
// ];
const locations = [
  {
    center: {},
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.963683739017!2d-80.9635551!3d34.9575189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88568672e093de53%3A0xdcc5d59fab31d3d1!2s2805%20Commerce%20Dr%2C%20Rock%20Hill%2C%20SC%2029730%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1730312184882!5m2!1ses-419!2smx",
    role: "AP Corporate and Manufacturing",
    position: "2805 Commerce Drive Rock Hill, SC 29730",
    icon: BuildingOfficeIcon,
  },
  {
    center: {},
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2854.290618046908!2d-88.188412!3d44.324532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8803aa3e1f058723%3A0xb8319d2ee59d18d6!2s490%20Quality%20Ct%2C%20Kaukauna%2C%20WI%2054130%2C%20EE.%20UU.!5e0!3m2!1ses!2smx!4v1730313976174!5m2!1ses!2smx",
    role: "AP Manufacturing and Distribution",
    position: "4680 Calimesa St Las Vegas, NV 89115",
    icon: BriefcaseIcon,
  },
  {
    center: {},
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.786734226835!2d-115.0716917!3d36.2446743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8dd5e35c72f7f%3A0xaa5b1b2ee2ac10f4!2s4680%20Calimesa%20St%2C%20Las%20Vegas%2C%20NV%2089115%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1730314123357!5m2!1ses-419!2smx",
    role: "AP Distribution",
    position: "1836 Sal St. Green Bay, WI 54302",
    icon: TruckIcon,
  },
  {
    center: {},
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.233388754071!2d-96.8797558!3d32.6798388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9058f1564abb%3A0x2f4999b84b048cff!2s5556%20Red%20Bird%20Center%20Dr%2C%20Dallas%2C%20TX%2075237%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1730314186060!5m2!1ses-419!2smx",
    role: "AP Distribution",
    position: "4653 Mint Way, Dallas, TX 75236",
    icon: CubeIcon,
  },
];

const ContactUs = () => {
  const [ref, isInView] = useInView(0.01);
  const [ref1, isInView1] = useInView(0.01);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isSubject, setIsSubject] = useState(false);
  const [isContent, setIsContent] = useState(false);

  const [oneVisible1, setOneVisible1] = useState(true);
  const [oneVisible2, setOneVisible2] = useState(true);
  const [oneVisible3, setOneVisible3] = useState(true);
  const [oneVisible4, setOneVisible4] = useState(true);
  const handleCall = () => {
    window.location.href = "tel:+18886431432";
  };
  const handleEmail = () => {
    window.location.href = "mailto:info@allianceplastics.net";
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = () => {
    if (!onValidate()) {
      return;
    }

    setIsLoading(true);
    axios
      .post("http://localhost/upgrade/server.php", {
        from: email,
        subject,
        content: content.replace(/\n/g, "<br>"),
        name,
      })
      .then((res) => {
        toast.success("Email sent successfully!", {
          // position: toast.POSITION.TOP_CENTER,
          autoClose: 3000, // Close after 5 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        onFormat();
      })
      .catch((err) => {
        toast.error("Failed to send email.", {
          // position: toast.POSITION.TOP_CENTER,
          autoClose: 3000, // Close after 5 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        setIsLoading(false);
        console.log(err);
      });
  };

  const onFormat = () => {
    setContent("");
    setEmail("");
    setName("");
    setSubject("");
    setIsLoading(false);
    setOneVisible1(true);
    setOneVisible2(true);
    setOneVisible3(true);
    setOneVisible4(true);
  };

  // useEffect(() => {
  //   if (!validateEmail(email)) {
  //     setIsEmail(true);
  //   }
  // }, [email]);

  const onValidate = () => {
    if (name && email && subject && content) {
      return true;
    } else {
      if (!name) {
        setIsName(true);
      }
      if (!email) {
        setIsEmail(true);
      }
      if (!subject) {
        setIsSubject(true);
      }
      if (!content) {
        setIsContent(true);
      }
    }
    return false;
  };

  return (
    <div className="bg-white">
      {isLoading && (
        <div className="fixed z-5 w-[100%] h-[100%] bg-[#5455] ">
          <div className="fixed top-[400px] left-[50%]">
            <Commet color={["#33CCCC"]} size="large" textColor="" />
          </div>
        </div>
      )}
      <div>
        <HeaderSlot
          imgSrc={"/assets/images/contactus.webp"}
          title={"Contact Us"}
          router={[
            {
              title: "home",
              src: "/",
            },
            "Contact us",
          ]}
        />
        <div className="py-[80px] text-[#151515] flex justify-center" ref={ref}>
          <div className="lg:w-[1200px] lg:max-w-[1200px]  px-[15px] pb-[50px] lg:grid lg:grid-cols-4 flex flex-col justify-center">
            <div className="lg:col-span-3 lg:pr-[128px]">
              <div className="flex mb-[24px] flex-col lg:flex-row">
                <div className="lg:pl-[24px]">
                  <img
                    src="/assets/images/team/ron.jpg"
                    className={`w-[99px] h-[99px] min-w-[99px] min-h-[99px] object-cover rounded-full ${
                      isInView
                        ? "animate-fade animate-duration-1000 animate-ease-in-out"
                        : ""
                    }`}
                  />
                </div>
                <div className="lg:ml-[24px] flex flex-col">
                  <div>
                    <p
                      className={`text-[24px] font-light italic text-clip tracking-[0.075em]  ${
                        isInView
                          ? "animate-fade-left animate-duration-1000 animate-ease-in-out"
                          : ""
                      }`}
                    >
                      Contact Us! We'll get in touch as soon as possible.
                    </p>
                  </div>
                  <span className="grow" />
                  <div
                    className={`text-[14px] tracking-[0.1em] ${
                      isInView
                        ? "animate-fade-left animate-duration-1000 animate-ease-in-out animate-delay-200"
                        : ""
                    }`}
                  >
                    <a
                      href="#"
                      className="hover:text-[#eea660] uppercase  transition-all ease-in-out duration-300 font-semibold"
                    >
                      Ron Grubbs
                    </a>
                    <span>,</span>
                    <span className="text-[#54c1e5]">President</span>
                  </div>
                </div>
              </div>
              <div className="mt-[30px]">
                <div
                  className={`${
                    isInView
                      ? "animate-fade-down animate-duration-1000 animate-ease-in-out animate-delay-200"
                      : ""
                  }`}
                >
                  <div className="grid grid-cols-2 gap-5">
                    <Input
                      label="Your Name*"
                      type="text"
                      id="name"
                      message="The text field is required."
                      value={name}
                      setValue={setName}
                      isVisible={isName}
                      setIsVisible={setIsName}
                      oneVisible={oneVisible1}
                      setOneVisible={setOneVisible1}
                    />
                    <Input
                      label="Your Email*"
                      type="email"
                      id="email"
                      message="The text field is required."
                      value={email}
                      setValue={setEmail}
                      setIsVisible={setIsEmail}
                      isVisible={isEmail}
                      oneVisible={oneVisible2}
                      setOneVisible={setOneVisible2}
                    />
                  </div>
                  <Input
                    label="Your Subject*"
                    type="text"
                    id="subject"
                    message="The text field is required."
                    value={subject}
                    isVisible={isSubject}
                    setIsVisible={setIsSubject}
                    setValue={setSubject}
                    oneVisible={oneVisible3}
                    setOneVisible={setOneVisible3}
                  />
                  <Textarea
                    label="Your Content*"
                    type="text-area"
                    id="content"
                    message="The text field is required."
                    value={content}
                    setIsVisible={setIsContent}
                    isVisible={isContent}
                    setValue={setContent}
                    oneVisible={oneVisible4}
                    setOneVisible={setOneVisible4}
                  />
                </div>
                <div
                  className={`flex lg:justify-start ${
                    isInView
                      ? "animate-fade-up animate-duration-1000 animate-ease-in-out animation-delay-1200"
                      : ""
                  }`}
                >
                  <button
                    className={`relative flex items-center mt-[30px] lg:w-auto w-full group`}
                    onClick={() => onSubmit()}
                  >
                    {/* Left Part (Text) */}
                    <p className="bg-sky-500 font-black uppercase group-hover:bg-[#54c1e5] w-full lg:w-auto text-white lg:px-[50px] md:px-[40px] lg:py-[25px] py-[17px] pl-[45px] pr-[95px] flex items-center justify-center text-[14px] tracking-[0.2em] leading-[1.85]">
                      get in touch
                    </p>

                    {/* Right Part (Arrow) */}
                    <span className="absolute top-0 bottom-0 lg:right-[-40px] right-0 bg-[#54c1e5] group-hover:bg-sky-500 flex items-center justify-center px-[20px]">
                      <ChevronRight
                        size={27}
                        className="text-white group-hover:animate-shake"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:border-l-1 border-0 h-fit border-[#e1e1e1] lg:pl-[40px] mt-[50px] lg:mt-0 lg:px-0 px-[15px] text-center lg:text-left">
              <div className="border-b-1 border-[#e1e1e1] pb-[30px]">
                <p className="uppercase font-bold text-[13px] text-[#151515] tracking-[0.1em]">
                  get social
                </p>
                <div className="flex items-center gap-3 mt-[20px] justify-center lg:justify-start">
                  <Link
                    className="hover:text-[#57a4e0]"
                    to={
                      "https://www.facebook.com/pages/Alliance-Plastics/775908369189871?fref=ts"
                    }
                    target="_blank"
                  >
                    <FaFacebookF className=" m-[5px] p-[-5px]" />
                  </Link>
                  <Link
                    className="hover:text-[#57a4e0]"
                    to={"https://twitter.com/AlliancePlastic"}
                    target="_blank"
                  >
                    <FaTwitter className="m-[5px] p-[-5px]" />
                  </Link>
                  <Link
                    className="hover:text-[#57a4e0]"
                    to={"https://www.youtube.com/user/allianceplastics1"}
                    target="_blank"
                  >
                    <FaYoutube className="m-[5px] p-[-5px]" />
                  </Link>
                </div>
              </div>
              <div className="border-b-1 border-[#e1e1e1] py-[30px]">
                <p className="uppercase font-bold text-[14px] text-[#151515] tracking-[0.075em] leading-[1.6]">
                  phone
                </p>
                <div className="mt-[20px] flex items-center gap-3 justify-center lg:justify-start">
                  <PhoneIcon className="text-[#57a4e0] " size={18} />
                  <button
                    onClick={handleCall}
                    className="text-[#151515] text-[15spx] tracking-[0.1em] hover:text-[#57a4e0] transition-all duration-300 ease-in-out cursor-pointer"
                  >
                    +1 888-643-1432
                  </button>
                </div>
              </div>
              <div className=" py-[30px]">
                <p className="uppercase font-bold text-[14px] text-[#151515] tracking-[0.075em] leading-[1.6]">
                  e-mail
                </p>
                <div className="mt-[20px] flex items-center gap-3 justify-center lg:justify-start">
                  <MailIcon className="text-[#57a4e0]" size={18} />
                  <button
                    onClick={handleEmail}
                    className="cursor-pointer text-[#151515] text-[15px] tracking-[0.1em] hover:text-[#57a4e0] transition-all duration-300 ease-in-out"
                  >
                    info@allianceplastics.net
                  </button>
                </div>
              </div>
              {/* <div className="pt-[30px] text-center lg:text-left">
              <p className="uppercase font-bold text-[14px] text-[#151515] tracking-[0.075em] leading-[1.6] ">
                Address
              </p>
              <div className="mt-[20px] flex items-center gap-3">
                <MapPin className="text-[#57a4e0] min-w-4 min-h-4" size={18} />
                <a className="text-[#151515] text-[15px] tracking-[0.1em] hover:text-[#57a4e0] transition-all duration-300 ease-in-out">
                  Rock Hill, SC. Green Bay, WI. Dallas, TX. Las Vegas, NV.
                </a>
              </div>
            </div> */}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-[1200px] w-[1200px]">
            <div>
              <h3
                className={`uppercase invisible text-[#151515] text-[44px] leading-[1.22727] font-normal tracking-[0.1em] text-center pb-[50px] transition-all duration-200 ease-linear ${
                  isInView1
                    ? `animate-fade animate-linear animate-duration-700 visible animate-delay-300`
                    : ""
                } `}
                ref={ref1}
              >
                Locations
              </h3>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 ">
              {locations.map((item, index) => (
                <MapCard
                  // center={item.center}
                  role={item.role}
                  position={item.position}
                  Icon={item.icon}
                  url={item.src}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
