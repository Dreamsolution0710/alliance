import { useState, useEffect, useRef } from "react";
import { useInView } from "./../landingpage/useInView";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import {
  BoxesIcon,
  ChevronRight,
  Handshake,
  LightbulbIcon,
  Settings,
  TagsIcon,
  Truck,
} from "lucide-react";
import "./style.css";
import HeaderCarousels from "./HeaderCarousels";
import MultipleCarousel from "./MultipleCarousel";
import MemberCard from "./MemberCard";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const teams = [
  {
    src: "/assets/images/team/ron.jpg",
    position: "President",
    name: "Ron Grubbs",
    email: "ron@allianceplastics.net",
  },
  {
    src: "/assets/images/team/Gale-Marcus-AP.png",
    position: "West coast manager",
    name: "Gale marcus",
    email: "gale@allianceplastics.net",
  },
  {
    src: "/assets/images/team/erik.png",
    position: "Regional sales manager ",
    name: "Eric Baranczyk",
    email: "eric@allianceplastics.net",
  },
  {
    src: "/assets/images/team/sarah.jpg",
    position: "Regional sales manager",
    name: "Sarah Lister",
    email: "lisa@allianceplastics.net",
  },
  {
    src: "/assets/images/team/marcd.jpg",
    position: "Regional sales manager",
    name: "Marc Delatte",
    email: "marc@allianceplastics.net",
  },
  {
    src: "/assets/images/team/danielrivas.jpg",
    position: "Quality control",
    name: "Daniel Rivas",
    email: "",
  },
  {
    src: "/assets/images/team/nikki.jpg",
    position: "Customer service representative",
    name: "Nikki Pressley",
    email: "nikki@allianceplastics.net",
  },
  {
    src: "/assets/images/team/Geraldine.jpg",
    position: "Customer Support Specialist",
    name: "Geraldine Aguilar",
    email: "csr1@allianceplastics.net",
  },
  {
    src: "/assets/images/team/lucas.jpg",
    position: "Maintenance manager",
    name: "Lucas Russell",
    email: "lucas@allianceplastics.net",
  },
  {
    src: "/assets/images/team/roco.jpg",
    position: "Distribution manager, rock hill",
    name: "Rocco Burgos",
    email: "rburgos@allianceplastics.net",
  },
  {
    src: "/assets/images/team/taranew.jpg",
    position: "Csr, midwest region",
    name: "Tara Wilson",
    email: "tara@allianceplastics.net",
  },
  {
    src: "/assets/images/team/donlong.jpg",
    position: "Facility manager",
    name: "Don Long",
    email: "don@allianceplastics.net",
  },
  {
    src: "/assets/images/team/yvone.jpg",
    position: "Regional sales manager",
    name: "Yvonne Valentin",
    email: "yvonne@allianceplastics.net",
  },
  {
    src: "/assets/images/team/michaela.jpg",
    position: "Logistics",
    name: "Michaela Skinner",
    email: "",
  },
  {
    src: "/assets/images/team/nicole.jpg",
    position: "Customer service representative",
    name: "Nicole Whitlock",
    email: "",
  },
  {
    src: "/assets/images/team/alfonso.jpg",
    position: "Plant manager, rock hill",
    name: "Alfonso Perilla",
    email: "alfonso@allianceplastics.net",
  },
  {
    src: "/assets/images/team/hector.jpg",
    position: "1st shift edgeguard lead",
    name: "Hector Cerda",
    email: "",
  },
  {
    src: "/assets/images/team/abel.jpg",
    position: "Vented film supervisor",
    name: "Abel DeJesus",
    email: "",
  },
];
const colors = ["bg-gray-100", "bg-sky-300", "bg-orange-300"];

const services = [
  {
    title: "Custom & Stock Product Manufacturing",
    description:
      "We manufacture 70% of the products we sell, offering both custom and stock solutions with short lead times.",
    icon: Settings,
  },
  {
    title: "Private Branding Programs",
    description:
      "Our 1-case minimum private branding program allows distributors to offer exclusive products under their own brand.",
    icon: TagsIcon,
  },
  {
    title: "Product Bundling Solutions",
    description:
      "We provide bundling options to streamline supply chain management and enhance product offerings.",
    icon: BoxesIcon,
  },
  {
    title: "Nationwide Distribution",
    description:
      "We ensure fast and efficient nationwide delivery, meeting distributor needs with reliability.",
    icon: Truck,
  },
  {
    title: "Innovative Product Development",
    description:
      "We create unique, cutting-edge products to help our partners stand out in the market.",
    icon: LightbulbIcon,
  },
  {
    title: "Veteran-Owned, Customer-First Approach",
    description:
      "As a Veteran-Owned company, we prioritize integrity, trust, and long-term partnerships with our clients.",
    icon: Handshake,
  },
];
const slides = [
  {
    title: "WE ARE ALLIANCE PLASITICS",
    text: "Alliance Plastics is a Veteran-Owned company focused on building strong relationships with partners, offering innovative products and services with nationwide reach, integrity, quality, and efficiency.",
    path: "/ourcompany",
    section: "ABOUT US",
  },
  {
    title: "Alliance Academy",
    text: "Alliance Academy offers educational resources, product training, and marketing strategies to help Alliance Plastics' partners and distributors gain valuable knowledge and boost sales for mutual success.",
    path: "/academy",
    section: "ALLIANCE ACADEMY",
  },
  {
    title: "NEWS",
    text: "Sign up to get interesting news and updates delivered to your inbox.",
    path: "/news",
    section: "NEWS",
  },
];

export default function LandingPage() {
  const [colorIndex, setColorIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [ref1, isInview1] = useInView(0.1);
  const [ref2, isInview2] = useInView(0.3);
  const [ref3, isInview3] = useInView(0.1);
  const [ref4, isInview4] = useInView(0.1);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-white z-10">
      <HeaderCarousels className="mySwiper1" />
      <div className="py-12 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={ref1}
            className={`text-4xl uppercase my-12 text-center opacity-0 tracking-wide ${
              isInview1
                ? "animate-fade-up animate-duration-700 opacity-100 animate-ease-linear"
                : ""
            }`}
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 " ref={ref2}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-16 opacity-0 border-gray-100 group hover:scale-101 transition-all ease-in-out duration-300 hover:border-none hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.03)] hover:bg-white hover:z-10 ${
                  index === 0
                    ? " border-b border-r "
                    : index === 1
                    ? "border-l border-b border-r "
                    : index === 2
                    ? "border-l border-b"
                    : index === 3
                    ? "border-t border-r"
                    : index === 4
                    ? "border-l border-t border-r"
                    : index === 5
                    ? "border-l border-t"
                    : ""
                } ${
                  isInview2
                    ? "animate-fade-right animate-duration-300 opacity-100 translate-y-0 animate-ease-out"
                    : ""
                }`}
                style={{
                  animationDelay: isInview2 ? `${index * 200}ms` : "0ms",
                }}
              >
                <div
                  className={`flex items-center justify-center w-20 h-20 text-3xl rounded-full border border-gray-200 shadow-lg ${colors[colorIndex]} transition duration-700 ease-in-out`}
                >
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold group-hover:text-[#54c1e5] tracking-wide min-h-[96px]">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 group-hover:text-[#54c1e5]">
                  {service.description}
                </p>
                {/* <a
                  href="#"
                  className="mt-4 inline-block text-orange-300 font-medium hover:underline hover:text-black"
                >
                  <div className="flex items-center group">
                    <span>Read More</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full lg:h-[500px] relative overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-auto md:w-1/2 relative overflow-hidden  z-[1]">
          <div
            className="bg-[url(/assets/images/bgalliancemenu.jpg)] bgCustom 
                    animation-bgPos"
          ></div>
        </div>
        {/* Wrapper for Right Side & Middle Side - Adjust Order in Mobile */}
        <div className="flex flex-col-reverse lg:flex-row w-full md:w-1/2 z-[3]">
          {/* Middle Side - Text */}
          <div className="w-full lg:w-3/5 bg-gray-100 flex flex-col justify-center p-6 lg:pl-16 lg:pr-32">
            <h2
              ref={ref3}
              className={`text-2xl md:text-4xl text-gray-900 opacity-0 tracking-widest text-center lg:text-left ${
                isInview3
                  ? "animate-fade-down animate-duration-200 opacity-100 translate-y-0 animate-ease-out animate-delay-100"
                  : ""
              }`}
            >
              {slides[currentSlide].title}
            </h2>
            <p
              ref={ref3}
              className={`text-gray-700 mt-4 opacity-0 text-center lg:text-left ${
                isInview3
                  ? "animate-fade animate-duration-300 opacity-100 translate-y-0 animate-ease-out animate-delay-300"
                  : ""
              }`}
            >
              {slides[currentSlide].text}
            </p>
            <Link
              to={slides[currentSlide].path}
              ref={ref3}
              className={`flex items-center justify-center lg:justify-start mt-10 group ${
                isInview3
                  ? "animate-fade-down animate-ease-out animate-duration-300 animate-delay-500"
                  : ""
              }`}
            >
              {/* Left Part (Text) */}
              <p className="bg-sky-500 tracking-widest font-bold group-hover:bg-[#54c1e5] text-white px-12 py-6 transition-colors flex items-center text-md">
                READ MORE
              </p>
              {/* Right Part (Arrow) */}
              <span className="group-hover:bg-sky-500 bg-[#54c1e5] p-6 transition-colors flex items-center justify-center">
                <ChevronRight
                  size={24}
                  className="text-white group-hover:animate-shake"
                />
              </span>
            </Link>
            {/* <div class="w-full h-full bg-gray-800 clip-slant"></div> */}
          </div>
          {/* Right Side - Navigation (Appears Above Middle Side on Mobile) */}
          <div className="w-full lg:w-2/5 bg-white text-white flex flex-col ">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative flex-1 py-4 md:py-6 text-lg font-semibold tracking-widest border-b text-gray-100 border-gray-500 transition opacity-100 ${
                  index === currentSlide
                    ? "bg-gray-600 border-b-gray-500"
                    : "bg-gray-700"
                } hover:bg-gray-600 `}
              >
                <p>{slide.section}</p>
                {index == currentSlide && (
                  <div className="absolute bottom-[-1px] right-[35%] bg-[#54c1e5] border-2 border-[#54c1e5] w-[30%]"></div>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="invisible lg:visible absolute h-[500px] w-[50%] -skew-x-8 top-0 right-[50px] z-[2] bg-gray-100 "></div>
        <div className="invisible lg:visible absolute h-[500px] w-[50%] skew-x-30 top-0 right-[-10px] z-[2] bg-gray-100 "></div>
      </div>

      {/* our team*/}
      <div>
        <div className="hidden lg:flex lg:justify-center lg:my-[100px]">
          <div className="max-w-[1200px]">
            <div
              className="grid grid-cols-4 gap-5 flex flex-col text-left"
              ref={ref4}
            >
              {/* Team's header */}
              <div className="mb-[30px] px-[15px] w-auto mt-[30px] w-full">
                <div>
                  <h3
                    className={`uppercase text-[#151515] text-[44px] leading-[1.22727] font-normal tracking-[0.1em] ${
                      isInview4
                        ? "animate-fade-right animate-duration-300 animate-ease-in-out"
                        : ""
                    }`}
                  >
                    our team
                  </h3>
                  <h6
                    className={`${
                      isInview4
                        ? "animate-fade-left animate-duration-300 animate-ease-in-out animate-delay-200"
                        : ""
                    } uppercase text-[#54c1e5] mt-[22px] font-normal tracking-[0.05em] leading-[1.33333]`}
                  >
                    Dedicated Packaging Experts
                  </h6>
                  <p
                    className={`text-[#777777] mt-[24px] text-[15px] ${
                      isInview4
                        ? "animate-fade-right animate-duration-300 animate-ease-in-out animate-delay-500"
                        : ""
                    }`}
                  >
                    Alliance Plastics is a dedicated team focused on service,
                    quality, and innovation, providing flexible solutions and
                    strong partnerships to support distributor success.
                  </p>
                </div>
                <div className={`flex gap-4 mt-[35px]`}>
                  <div className="z-[2]">
                    <div
                      className={`relative group ${
                        isInview4
                          ? "animate-fade-right animate-duration-700 animate-ease-in-out animate-delay-500"
                          : ""
                      }`}
                    >
                      <Link
                        to="/contactus"
                        className="lg:w-20 lg:h-18 w-16 h-16 border-2 flex items-center justify-center border-gray-800 "
                      >
                        <EnvelopeIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-800 group-hover:scale-0  transition-all duration-300 hover:invisible" />
                      </Link>
                      <Link
                        to="/contactus"
                        className=" invisible absolute bottom-0 uppercase h-18 text-[15px] font-bold flex items-center w-0 bg-white justify-center border-2 border-gray-800 text-gray-800 group-hover:visible group-hover:delay-100 group-hover:w-[168px] group-hover:transition-width group-hover:ease-in-out group-hover:duration-500"
                      >
                        <p className="z-[1] opacity-0 transition-all hover:text-[#57a4e0] duration-200 group-hover:opacity-100 group-hover:invisible group-hover:delay-400 group-hover:visible">
                          contact us
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`flex z-[1] gap-4 ${
                      isInview4
                        ? "animate-fade-left animate-duration-700 animate-ease-in-out animate-delay-500"
                        : ""
                    }`}
                  >
                    <div className="group z-[-1]">
                      <button className="custom-prev1 bg-white lg:w-18 lg:h-18 w-16 h-16 border-2 flex items-center justify-center border-gray-800 group-hover:border-[#57a4e0] group-hover:bg-[#57a4e0] group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
                        <ArrowLeftIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-800 group-hover:text-white group-hover:transition-all group-hover:ease-in-out group-hover:duration-300" />
                      </button>
                    </div>
                    <div className="group">
                      <button className="custom-next1 lg:w-18 bg-white lg:h-18 w-16 h-16 border-2 flex items-center justify-center border-gray-800 group-hover:border-[#57a4e0]  group-hover:bg-[#57a4e0] group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
                        <ArrowRightIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-800 group-hover:text-white group-hover:transition-all group-hover:ease-in-out group-hover:duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Team's carousel */}
              <div className="col-span-3 w-auto mx-[-30px] mt-[-40px] mb-[-30px] px-[30px] pt-[40px] pb-[30px]">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={10}
                  modules={[Pagination, A11y, Navigation]}
                  navigation={{
                    nextEl: ".custom-next1",
                    prevEl: ".custom-prev1",
                  }}
                >
                  {teams.map((member, index) => (
                    <SwiperSlide
                      key={index}
                      style={{ width: "270px", height: "365px" }}
                    >
                      <MemberCard
                        position={member.position}
                        name={member.name}
                        src={member.src}
                        email={member.email}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex flex-col text-center">
            <div className="my-[30px] px-[15px] w-auto">
              <div>
                <h3 className="uppercase text-[#151515] lg:text-[44px] text-[30px] leading-[1.22727] font-normal tracking-[0.1em]">
                  our team
                </h3>
                <h6 className="uppercase text-[#eeaF520] mt-[22px] font-normal tracking-[0.05em] text-[#eeaf5e] leading-[1.33333]">
                  professional mining management
                </h6>
                <p className="text-[#777777] mt-[24px] text-[15px] tracking-widest">
                  Minerals is a team of dedicated mining professionals with more
                  than 20 years of experience
                </p>
              </div>
              <div className="flex gap-5 mt-[35px] justify-center">
                <div>
                  <div className="relative group">
                    <button className="uppercase h-15 text-[12px] font-bold flex items-center bg-white justify-center border-2 border-gray-800 text-gray-800 w-[115px]">
                      <p className="transition-color duration-200 delay-300 hover:text-[#57a4e0]">
                        contact us
                      </p>
                    </button>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="group">
                    <button className="custom-prev1 lg:w-18 lg:h-18 w-15 h-15 border-2 flex items-center justify-center border-gray-800 group-hover:border-[#57a4e0] group-hover:bg-[#57a4e0] group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
                      <ArrowLeftIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-800 group-hover:text-white group-hover:transition-all group-hover:ease-in-out group-hover:duration-300" />
                    </button>
                  </div>
                  <div className="group">
                    <button className="custom-next1 lg:w-18 lg:h-18 w-15 h-15 border-2 flex items-center justify-center border-gray-800 group-hover:border-[#57a4e0]  group-hover:bg-[#57a4e0] group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
                      <ArrowRightIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-800 group-hover:text-white group-hover:transition-all group-hover:ease-in-out group-hover:duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-[30px]">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                modules={[Pagination, A11y, Navigation]}
                navigation={{
                  nextEl: ".custom-next1",
                  prevEl: ".custom-prev1",
                }}
              >
                {teams.map((member, index) => (
                  <SwiperSlide
                    key={index}
                    // style={{ width: "270px", height: "365px" }}
                  >
                    <MemberCard
                      position={member.position}
                      name={member.name}
                      src={member.src}
                      email={member.email}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-[100px]">
        <div>
          <h1 className="text-gray-900 uppercase text-4xl text-center mb-20">
            Our Products
          </h1>
        </div>
        <MultipleCarousel />
      </div>
    </div>
  );
}
