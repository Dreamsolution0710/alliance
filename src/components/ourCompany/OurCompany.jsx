import { ArrowRightIcon, Gem, Rocket, ShieldCheck } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Autoplay, A11y, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import MemberCard from "../landingpage/MemberCard";
import { useInView } from "./../landingpage/useInView";
import Youtuber from "../allianceAcademy/Youtuber";
import HeaderSlot from "../utils/HeaderSlot";
import teams from "/src/assets/team.json";

const aboutus = [
  {
    title: "a few words about us",
    paragraph1: `Alliance Plastics is a Veteran-Owned Company that takes pride in building strong relationships with our customers and partners. We are dedicated to providing only the best services and products, always with innovation in mind. Our commitment to excellence ensures that our partners receive top-tier solutions designed to meet their evolving needs.`,
    paragraph2: `With our partnership, you can expect nationwide service that delivers with integrity, quality, and efficiency. Alliance Plastics combines innovation with outstanding service, giving you peace of mind knowing you are working with a company driven to stay on the cutting edge of technology.`,
    src: "/assets/images/aboutus/alliancegallery1.jpg",
  },
  {
    title: "Mission Statement",
    paragraph1: `Our mission at Alliance Plastics is to offer the very best in Service, Quality, and the newest Technology. We are committed to providing our products right and right on time, ensuring our Distributor Partners can maximize profitability. By maintaining high standards and leveraging the latest innovations, we strive to deliver exceptional value in every aspect of our business.`,
    paragraph2: `We give our Distributor Partners the advantage of buying in small quantities at volume pricing, making them more efficient and competitive. This approach helps preserve their precious inventory turns and improves cash flow, leading to greater success. We are relentless in our pursuit to be the best and most service-oriented manufacturer, converter, and importer in the industry.`,
    src: "/assets/images/aboutus/alliancegallery3.webp",
  },
  {
    title: "Driving Innovation and Partnership in Distribution",
    paragraph1: `At Alliance Plastics, our goal is to be the preferred distribution partner for our customers by delivering exceptional products and services that strengthen their supply chain. From our beginnings as a film converter, we have evolved into a key resource for our distributor partners, manufacturing 70% of the products we sell. We take pride in offering both custom and stock products with short lead times, product bundling, and low minimum private branding programs—all designed to enhance efficiency and profitability for our partners.`,
    paragraph2: `What sets us apart is our unwavering commitment to customer service and innovation. No other company in our industry provides the same level of tailored solutions and unique, market-leading products. We strive to earn the trust and loyalty of our partners by consistently pushing the boundaries of technology and development. Our mission is to help our distributors stand out from the competition and succeed in an ever-evolving marketplace.`,
    src: "/assets/images/aboutus/alliancegallery4.webp",
  },
  {
    title: "A Legacy of Partnership and Commitment",
    paragraph1: `At Alliance Plastics, our values are deeply rooted in the philosophy of our founder—a belief that true success comes from listening to our customers and serving them with integrity and dedication. He saw how mainstream manufacturers created unnecessary obstacles, prioritizing rigid policies over customer needs. Instead, he envisioned a company that says "yes" to partnership, one that collaborates with distributors and vendors to navigate the ever-changing business landscape. This commitment to flexibility and service has fueled our growth, earning us national recognition and the trust of our valued partners.`,
    paragraph2: `We honor our founder’s legacy by conducting business with honor, duty, and tradition—principles he carried from his 30 years of decorated military service. His unwavering commitment to excellence lives on in everything we do. At Alliance Plastics, we pledge to be the Right Solution for your company, delivering the right products, right on time, and right to your door. Our promise is simple: your success is our priority, and we will continue to uphold the values that built this company from the ground up.`,
    src: "/assets/images/aboutus/alliancegallery6.webp",
  },
  {
    title: "Video introduction",
    paragraph1: "",
    paragraph2: "",
    src: "EML2XEKFg3A",
  },
];

const history = [
  {
    subtitle: "The Vision is Born",
    text: `The foundation of Alliance Plastics was built on a simple yet powerful belief: customers should always come first. Our founder, a decorated military veteran, saw the struggles businesses faced with rigid manufacturers and poor service. Determined to create a company that prioritized partnership and flexibility, he established Alliance Plastics with the mission of saying "yes" to customer needs. His vision laid the groundwork for a company dedicated to service, quality, and innovation.`,
    year: 2004,
  },
  {
    subtitle: "Nationwide Growth and Recognition",
    text: "By listening to our customers and adapting to their needs, Alliance Plastics quickly gained traction in the industry. Our commitment to efficiency, short lead times, and unique product offerings helped us expand across the country. Between 2010 and 2014, we were honored to be recognized by INC Magazine as one of the fastest-growing companies in America for four consecutive years, a testament to our dedication and hard work.",
    year: 2010,
  },
  {
    subtitle: "Manufacturing Expansion",
    text: "What started as a film conversion company had now evolved into a leading manufacturer and distributor. By 2015, we were producing 70% of the products we sold, allowing us to maintain high-quality standards and offer unmatched flexibility to our partners. Our innovative approach introduced features like custom product bundling and private branding programs, further solidifying our position as a key supply chain partner for distributors.",
    year: 2015,
  },
  {
    subtitle: "A Future Built on Innovation",
    text: "Alliance Plastics continues to lead the industry by focusing on innovation and customer-first service. We don’t just sell products—we provide solutions that help our partners stand out in a competitive market. With a relentless commitment to new technology, trust, and loyalty, we strive to be the preferred distribution partner for businesses nationwide. As we move forward, our mission remains unchanged: delivering the right products, at the right time, and right to your door.",
    year: 2023,
  },
];
const colors = [
  { bg: "bg-[#f5f5f5]", text: "text-[#151515]" },
  { bg: "bg-[#54c1e5]", text: "text-white" },
  { bg: "bg-[#fee25f]", text: "text-[#151515]" },
];

const buttons = [
  "About us",
  "Our Mission",
  "Our Goals",
  "Company Values",
  "video",
];

const OurCompany = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectYear, setSelectYear] = useState(2023);
  const [colorIndex, setColorIndex] = useState(0);

  const [ref1, isInView1] = useInView(0.1);
  const [ref2, isInView2] = useInView(0.1);
  const [ref3, isInView3] = useInView(0.1);
  const [ref4, isInView4] = useInView(0.1);
  const [ref5, isInView5] = useInView(0.1);

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
    <div className="overflow-hidden bg-white">
      <HeaderSlot
        imgSrc={"/assets/images/aboutus.webp"}
        title={"about us"}
        router={[
          {
            title: "home",
            src: "/",
          },
          {
            title: "our company",
            src: "/",
          },
          "about us",
        ]}
      />
      <div className="flex items-center justify-center">
        <div className="max-w-[1200px] py-[80px] lg:w-[1200px]">
          <div className="lg:grid lg:grid-cols-4 flex flex-col-reverse text-[#151515]">
            <div className="col-span-3 px-[15px] flex flex-col justify-center">
              <div className="lg:pr-[40px] px-[15px] transition-all duration-300 ease-in-out text-center lg:text-left ">
                <div>
                  <h4 className="uppercase lg:text-[36px] text-[26px] leading-[1.3] font-normal tracking-[0.1em]">
                    {aboutus[currentSlide].title}
                  </h4>
                </div>
                <div>
                  <p className="mt-[22px] text-[#777777] ">
                    {aboutus[currentSlide].paragraph1}
                  </p>
                  <p className="mt-[20px] text-[#777777] ">
                    {aboutus[currentSlide].paragraph2}
                  </p>
                </div>
                <div className="mt-[35px]">
                  {currentSlide === 4 ? (
                    <div className="flex flex-col gap-5">
                      <div className="bg-[#777777] w-full">
                        <Youtuber videoId={aboutus[currentSlide].src} />
                      </div>

                      <div className="bg-[#777777] w-full">
                        <Youtuber videoId={"QDi3v3dCyiI"} />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={aboutus[currentSlide].src}
                      alt="img"
                      className={"w-full object-cover"}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="mb-[50px]">
              <div>
                <h5 className="uppercase lg:text-[24px] text-[20px] leading-[1.25] tracking-[0.2em] font-medium lg:text-left text-center">
                  50+ years of experience
                </h5>
              </div>
              <div className="lg:block hidden mt-[20px] relative mt-[20px]">
                {buttons.map((button, index) => (
                  <div
                    className={`uppercase border-b-1 border-[#e1e1e1] text-[14px] lg:py-[20px] py-[10px] relative font-medium group`}
                    onClick={() => setCurrentSlide(index)}
                    key={index}
                  >
                    <p>{button}</p>
                    {index === currentSlide && (
                      <div className="absolute bottom-0 left-0 border-1  border-[#54c1e5] w-[40px]"></div>
                    )}

                    {index !== currentSlide && (
                      <div className="absolute w-0 border-1 invisible bottom-0 left-0 border-[#54c1e5] transition-all ease-linear duration-500 group-hover:w-[100%] group-hover:visible"></div>
                    )}
                  </div>
                ))}
              </div>

              <div className="lg:hidden flex justify-center items-center flex-wrap gap-10 mt-[20px]">
                {buttons.map((button, index) => (
                  <div
                    className={`uppercase border-b-1 border-[#e1e1e1] w-auto text-[14px] py-[10px] relative font-medium group`}
                    onClick={() => setCurrentSlide(index)}
                    key={index}
                  >
                    <p className="cursor-pointer">{button}</p>
                    {index === currentSlide && (
                      <div className="absolute bottom-0 left-0 border-1  border-[#fee25f] w-[40px]"></div>
                    )}

                    {index !== currentSlide && (
                      <div className="absolute w-0 border-1 invisible bottom-0 left-0 border-[#fee25f] transition-all ease-linear duration-500 group-hover:w-[100%] group-hover:visible"></div>
                    )}
                  </div>
                ))}
              </div>

              <div
                className="lg:mt-[50px] mt-[30px] flex justify-center items-center"
                ref={ref1}
              >
                <Link
                  to="/contactus"
                  className={`uppercase block text-white bg-[#54c1e5] text-[14px] leading-[1.85] lg:px-[90px]  lg:py-[30px] py-[20px] px-[45px] tracking-[0.2em] font-black hover:bg-[#fee25f] hover:text-[#151515] transition-all duration-300 ease-linear ${
                    isInView1
                      ? `animate-fade-up animate-linear animate-duration-700 opacity-100 animate-delay-200`
                      : ""
                  }`}
                >
                  contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] py-[90px] text-[#151515]">
        <div className="flex justify-center items-center">
          <div className="max-w-[1200px] lg:w-[1200px]">
            <div className="lg:grid lg:grid-cols-3" ref={ref2}>
              <div
                className={`lg:grid lg:grid-cols-10 text-center opacity-0 ${
                  isInView2
                    ? `animate-fade-up animate-linear animate-duration-500 opacity-100`
                    : ""
                }`}
              >
                <div className="lg:col-span-3 mt-[4px] flex justify-center">
                  <div
                    className={`flex items-center justify-center lg:w-[99px] lg:h-[99px] w-[70px] h-[70px] lg:min-w-[99px] lg:min-h-[99px] rounded-full lg:ml-[30px] mb-[30px] ${colors[colorIndex].bg} ${colors[colorIndex].text}  transition-all ease-linear duration-700   shadow-md`}
                  >
                    <ShieldCheck size={42} />
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="lg:ml-[30px] mb-[30px] mx-[20px]">
                    <a className="text-[24px] hover:text-[#54c1e5] transition-all ease-in-out duration-300 tracking-[0.05em] leading-[1.25] cursor-pointer font-medium">
                      Integrity
                    </a>
                    <p className="mt-[20px] text-[15px] font-normal">
                      Commitment to honesty and ethical practices in all
                      customer and partner interactions.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`lg:grid lg:grid-cols-10 text-center opacity-0 ${
                  isInView2
                    ? `animate-fade-up animate-linear animate-duration-500 opacity-100 animate-delay-200`
                    : ""
                }`}
              >
                <div className="col-span-3 mt-[4px] flex justify-center">
                  <div
                    className={`flex items-center justify-center lg:w-[99px] lg:h-[99px] w-[70px] h-[70px] lg:min-w-[99px] lg:min-h-[99px] rounded-full lg:ml-[30px] mb-[30px] ${colors[colorIndex].bg} ${colors[colorIndex].text}  transition-all ease-linear duration-700   shadow-md`}
                  >
                    <Rocket size={42} />
                  </div>
                </div>
                <div className="col-span-7">
                  <div className="lg:ml-[30px] mb-[30px] mx-[20px]">
                    <a className="text-[24px] hover:text-[#54c1e5] transition-all ease-in-out duration-300 tracking-[0.05em] leading-[1.25] cursor-pointer font-medium">
                      Innovation
                    </a>
                    <p className="mt-[20px] text-[15px] font-normal">
                      Embracing new ideas and technologies to enhance products
                      and services.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`lg:grid lg:grid-cols-10 text-center opacity-0 ${
                  isInView2
                    ? `animate-fade-up animate-linear animate-duration-500 opacity-100 animate-delay-400`
                    : ""
                }`}
              >
                <div className="col-span-3 mt-[4px] flex justify-center">
                  <div
                    className={`flex items-center justify-center lg:w-[99px] lg:h-[99px] w-[70px] h-[70px] lg:min-w-[99px] lg:min-h-[99px] rounded-full lg:ml-[30px] mb-[30px] ${colors[colorIndex].bg} ${colors[colorIndex].text}  transition-all ease-linear duration-700   shadow-md`}
                  >
                    <Gem size={42} />
                  </div>
                </div>
                <div className="col-span-7">
                  <div className="lg:ml-[30px] mb-[30px] mx-[20px]">
                    <a className="text-[24px] hover:text-[#54c1e5] transition-all ease-in-out duration-300 tracking-[0.05em] leading-[1.25] cursor-pointer font-medium">
                      Quality
                    </a>
                    <p className="mt-[20px] text-[15px] font-normal">
                      Delivering reliable and superior products and services
                      that meet high standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[90px] text-[#151515]">
        <div className="flex justify-center">
          <div className="max-w-[1200px] w-[1200px] px-[15px]">
            <div>
              <h3
                className={`uppercase opacity-0 text-[44px] leading-[1.22727] font-normal tracking-[0.1em] text-center pb-[50px] transition-all duration-200 ease-linear ${
                  isInView4
                    ? `animate-fade animate-linear animate-duration-700 visible animate-delay-300`
                    : ""
                } `}
                ref={ref4}
              >
                our team
              </h3>
            </div>

            <div className="hidden lg:block" ref={ref3}>
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                modules={[A11y, Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: true }}
              >
                {teams.map((member, index) => (
                  <SwiperSlide
                    key={index}
                    className={`transition-all opacity-0 ease-linear ${
                      isInView3
                        ? `animate-fade-right animate-linear animate-duration-700 opacity-100`
                        : ""
                    }`}
                    style={{
                      animationDelay: isInView3 ? `${index * 200}ms` : "0ms",
                      width: "270px",
                      height: "400px",
                    }}
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
            <div className="hidden lg:hidden md:block md:px-[25%]">
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                modules={[A11y, Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: true }}
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
            <div className="md:hidden ">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                modules={[A11y, Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: true }}
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
      <div className="bg-[#f5f5f5] pt-[90px]  pb-[140px] mb-[100px] text-[#151515] relative overflow-hidden">
        <div className="flex justify-center items-center" ref={ref5}>
          <div className="hidden lg:block max-w-[1200px] w-[1200px]">
            <div className="grid grid-cols-2">
              <div className="px-[15px] mb-[60px] w-[500px] min-w-[500px]">
                <div>
                  <h3
                    className={`${
                      isInView5
                        ? `animate-fade-right animate-linear animate-duration-500 opacity-100 animate-delay-100`
                        : ""
                    } uppercase text-[44px] tracking-[0.1em]  w-auto opacity-0`}
                  >
                    Our History
                  </h3>
                </div>
                <div className="mt-[35px] relative">
                  <h5
                    className={`text-[24px] tracking-[0.075em] leading-[1.25] max-w-[88%] opacity-0 ${
                      isInView5
                        ? `animate-fade-right animate-linear animate-duration-500 opacity-100 animate-delay-300`
                        : ""
                    }`}
                  >
                    {
                      history[
                        history.findIndex(
                          (item, index) => item.year === selectYear
                        )
                      ].subtitle
                    }
                  </h5>
                  <p
                    className={`text-[15px] opacity-0 text-[#777777] mt-[30px] max-w-[96%] text-left tracking-[0.075em] ${
                      isInView5
                        ? `animate-fade-right animate-linear animate-duration-500 opacity-100 animate-delay-500`
                        : ""
                    }`}
                  >
                    {
                      history[
                        history.findIndex(
                          (item, index) => item.year === selectYear
                        )
                      ].text
                    }
                  </p>
                </div>
                <div
                  className={`absolute flex opacity-0 items-center justify-between w-full max-w-2xl py-6 right-[60%] ${
                    isInView5
                      ? `animate-fade-right animate-linear animate-duration-200 opacity-100 animate-delay-700`
                      : ""
                  }`}
                >
                  <div className="absolute w-[1000%] right-[15px] bottom-[65px] h-1 bg-[#54c1e5] transform"></div>
                  {history.map((item, index) => (
                    <div
                      key={index}
                      className="relative flex flex-col items-center"
                    >
                      <span
                        className="text-[18px] pt-[54px] tracking-[0.05em] leading-[1] font-medium hover:text-[#54c1e5] cursor-pointer relative flex flex-col items-center transition-all duration-300 ease-linear"
                        onClick={() => setSelectYear(item.year)}
                      >
                        <div
                          className={`w-10 h-10 flex items-center justify-center rounded-full border-4 transition-all duration-300 ease-linear absolute bottom-[25px] border-[#54c1e5] bg-white ${
                            item.year === selectYear ? "visible" : "hidden"
                          }`}
                        >
                          <div className="w-3 h-3 bg-[#54c1e5] rounded-full"></div>
                        </div>

                        {item.year !== selectYear && (
                          <div
                            className={`w-8 h-8 flex items-center justify-center rounded-full border-4 absolute bottom-[28px] ${
                              item.active
                                ? "border-[#54c1e5] bg-white"
                                : "border-[#54c1e5]"
                            } bg-white`}
                            onClick={() => setSelectYear(item.year)}
                          ></div>
                        )}
                        {item.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="px-[15px] mb-[60px] lg:hidden text-center">
            <div>
              <h3 className={`uppercase text-[30px] tracking-[0.1em]  w-auto `}>
                Our History
              </h3>
            </div>
            <div className="mt-[35px] relative">
              <h5
                className={`text-[20px] tracking-[0.075em] leading-[1.25] md:max-w-[88%] ${
                  isInView5
                    ? `animate-fade-right animate-linear animate-duration-700 opacity-100 animate-delay-300`
                    : ""
                }`}
              >
                {
                  history[
                    history.findIndex((item, index) => item.year === selectYear)
                  ].subtitle
                }
              </h5>
              <p
                className={`text-[15px] text-[#777777] mt-[30px] md:max-w-[96%] lg:text-left tracking-[0.075em] ${
                  isInView5
                    ? `animate-fade-right animate-linear animate-duration-700 opacity-100 animate-delay-500`
                    : ""
                }`}
              >
                {
                  history[
                    history.findIndex((item, index) => item.year === selectYear)
                  ].text
                }
              </p>
              <div className="absolute flex items-center justify-between w-full max-w-2xl py-6 ">
                <div className="absolute w-[1000%] right-[15px] bottom-[65px] h-1 bg-[#54c1e5] transform"></div>
                {history.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center"
                  >
                    <span
                      className="text-[18px] pt-[54px] tracking-[0.05em] leading-[1] font-medium hover:text-[#54c1e5] cursor-pointer relative flex flex-col items-center transition-all duration-300 ease-linear"
                      onClick={() => setSelectYear(item.year)}
                    >
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-full border-4 transition-all duration-300 ease-linear absolute bottom-[25px] border-[#54c1e5] bg-white ${
                          item.year === selectYear ? "visible" : "hidden"
                        }`}
                      >
                        <div className="w-3 h-3 bg-[#54c1e5] rounded-full"></div>
                      </div>

                      {item.year !== selectYear && (
                        <div
                          className={`w-8 h-8 flex items-center justify-center rounded-full border-4 absolute bottom-[28px] ${
                            item.active
                              ? "border-[#54c1e5] bg-white"
                              : "border-[#54c1e5]"
                          } bg-white`}
                          onClick={() => setSelectYear(item.year)}
                        ></div>
                      )}
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:block hidden  absolute right-0 top-0 translate-x-[100px]">
          <img src="/assets/images/image-ab.jpg" className="" />
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
