import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";
import { useInView } from "../landingpage/useInView";
import { Link } from "react-router-dom";

const Footer = () => {
  const [ref, isInview] = useInView(0.01);

  const handleCall = () => {
    window.location.href = "tel:+18886431432";
  };
  const handleEmail = () => {
    window.location.href = "mailto:info@allianceplastics.net";
  };

  return (
    <footer className="bg-[#3F4959] py-[80px] flex justify-center overflow-hidden">
      {/* <div className="container"> */}
      <div className=" max-w-[1200px] w-full z-[1] " ref={ref}>
        <div className="lg:mt-0 lg:mr-[-15px] lg:mb-[-60px] lg:ml-0">
          <div className="flex justify-center flex-col lg:flex-row text-center lg:text-left items-center lg:items-start">
            {/* Get in Touch */}
            <div className="mb-[60px] px-[20px] w-full lg:max-w-[300px] flex flex-col">
              <h5
                className={`tracking-[0.2em] leading-[1.25] font-roboto text-[24px] text-white ${
                  isInview
                    ? "animate-fade-down animate-duration-1000 animate-ease-in-out"
                    : ""
                }`}
              >
                GET IN TOUCH
              </h5>
              <ul className=" mt-[38px]">
                <li
                  className={`mt-[24px] ${
                    isInview
                      ? "animate-fade-left animate-duration-1000 animate-ease-in-out animate-delay-200"
                      : ""
                  }`}
                >
                  <p className="text-[12px] font-semibold leading-8 font-medium tracking-[0.2em] uppercase text-white/20">
                    Free Consultation
                  </p>
                  <Link
                    onClick={handleCall}
                    className="text-[18px] font-semibold tracking-[0.1em] text-white hover:text-[#54c1e5] whitespace-nowrap no-underline transition-all duration-300 ease-in-out cursor-pointer"
                  >
                    +1 888-643-1432
                  </Link>
                </li>
                <li
                  className={`mt-[24px]  ${
                    isInview
                      ? "animate-fade-left animate-duration-1000 animate-ease-in-out animate-delay-300"
                      : ""
                  }`}
                >
                  <p className="text-[12px] font-semibold leading-8 font-medium tracking-[0.2em] uppercase text-white/20">
                    Office
                  </p>
                  <Link
                    to="/contactus"
                    className="text-[15px] font-semibold tracking-[0.1em] text-white hover:text-[#54c1e5] whitespace-nowrap no-underline transition-all duration-300 ease-in-out cursor-pointer"
                  >
                    Rock Hill, SC. Green Bay, WI.
                    <br /> Dallas, TX. Las Vegas, NV.
                  </Link>
                </li>
                <li
                  className={`mt-[24px] ${
                    isInview
                      ? "animate-fade-left animate-duration-1000 animate-ease-in-out animate-delay-400"
                      : ""
                  }`}
                >
                  <p className="text-[12px] font-semibold leading-8 font-medium tracking-[0.2em] uppercase text-white/20">
                    E-mail
                  </p>
                  <Link
                    onClick={handleEmail}
                    className="text-[15px] hover:text-[#54c1e5] font-semibold tracking-[0.1em] whitespace-nowrap no-underline transition-all duration-300 ease-in-out cursor-pointer"
                  >
                    info@allianceplastics.net
                  </Link>
                </li>
              </ul>
              <hr className="mt-[30px] border-[rgba(255,255,255,0.13)]" />
              <ul className="flex gap-3 justify-center lg:justify-start">
                <li className="mt-[12px] p-3 bg-[rgba(255,255,255,0.1)] hover:bg-[#54c1e5] transition duration-300 ease-in-out">
                  <Link
                    to={
                      "https://www.facebook.com/pages/Alliance-Plastics/775908369189871?fref=ts"
                    }
                    target="_blank"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="mt-[12px] p-3 bg-[rgba(255,255,255,0.1)]  hover:bg-[#54c1e5] transition duration-300 ease-in-out">
                  <Link
                    to={"https://twitter.com/AlliancePlastic"}
                    target="_blank"
                  >
                    <FaTwitter />
                  </Link>
                </li>
                <li className=" mt-[12px] p-3 bg-[rgba(255,255,255,0.1)]  hover:bg-[#54c1e5] transition duration-300 ease-in-out">
                  <Link to={"https://www.youtube.com/user/allianceplastics1"}>
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
            </div>
            <span className="grow"></span>
            {/* Popular News */}
            <div className="mb-[60px] px-[15px]  lg:text-left w-full max-w-[400px] text-center">
              <h5
                className={`tracking-[0.2em] leading-[1.25] font-roboto text-[24px] text-white ${
                  isInview
                    ? "animate-fade-down animate-duration-1000 animate-ease-in-out"
                    : ""
                }`}
              >
                POPULAR NEWS
              </h5>
              <div className="mt-[38px]">
                <Link to={"/news/blogview20200612"}>
                  <div className="flex items-center mb-[-10px] ml-[-30px] mt-[24px] flex-col lg:flex-row">
                    <div className="mb-[10px] ml-[30px] overflow-hidden">
                      <img
                        src="/assets/images/news/post-5-370x210.jpg"
                        alt="news"
                        className={`w-[115px] h-[89px] object-cover min-w-[115px] min-h-[89px] hover:scale-120 transition-all duration-300 ease-linear ${
                          isInview
                            ? "animate-fade animate-duration-1000 animate-ease-in-out animate-delay-200"
                            : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`mb-[10px] ml-[30px] ${
                        isInview
                          ? "animate-fade-left animate-duration-1000 animate-ease-in-out animate-delay-200"
                          : ""
                      }`}
                    >
                      <p className="text-lg leading-[0.75rem] m-0 hover:text-[#54c1e5] text-[15px] leading-[1.6] font-semibold">
                        Stretch Film Market Information
                      </p>
                      <p className="text-[#54c1e5] text-[15px]">
                        June 12, 2020
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="/news/blogview202006">
                  <div className="flex items-center mb-[-10px] ml-[-30px] mt-[24px] flex-col lg:flex-row">
                    <div
                      className={`mb-[10px] ml-[30px] overflow-hidden ${
                        isInview
                          ? "animate-fade animate-duration-1000 animate-ease-in-out animate-delay-400"
                          : ""
                      }`}
                    >
                      <img
                        src="/assets/images/news/post-6-370x365.jpg"
                        alt="news"
                        className="w-[115px] h-[89px] object-cover min-w-[115px] min-h-[89px] transition-all duration-300 ease-linear  hover:scale-120 "
                      />
                    </div>
                    <div
                      className={`mb-[10px] ml-[30px] ${
                        isInview
                          ? "animate-fade-left animate-duration-1000 animate-ease-in-out animate-delay-600"
                          : ""
                      }`}
                    >
                      <p className="text-lg leading-[0.75rem] m-0 hover:text-[#54c1e5] text-[15px] leading-[1.6] font-semibold">
                        Together We are Stronger
                      </p>
                      <p className="text-[#54c1e5] text-[15px]">June, 2020</p>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Newsletter Signup */}

              <p
                className={`text-[15px] text-[rgba(255,255,255,0.4)] mt-[32px]  font-semibold ${
                  isInview
                    ? "animate-fade-down animate-duration-1000 animate-ease-in-out animate-delay-400"
                    : ""
                }`}
              >
                Sign up today for tips and the latest news
              </p>
              <div
                className={`flex mt-[8px] mb-[16px] min-w-[px]  ${
                  isInview
                    ? "animate-fade-up animate-duration-1000 animate-ease-in-out animate-delay-400"
                    : ""
                }`}
              >
                <input
                  type="email"
                  placeholder="Enter your E-mail"
                  className="bg-[rgba(255,255,255,0.15)] block w-full placeholder-white  min-h-[60px] p-[16px_25px] text-[15px] font-normal leading-[26px] tracking-[0.075em] text-white focus:border-1 focus:border-[#e1e1e1] outline-none focus:border-[#e1e1e1] transition-all duration-300 ease-in-out"
                />
                <button
                  className="bg-[#54c1e5] px-4 rounded-none hover:bg-[#eea660] transition-all duration-300 ease-in-out"
                  onClick={handleEmail}
                >
                  <IoIosPaperPlane className="text-white text-3xl" />
                </button>
              </div>
            </div>
            <span className="grow"></span>

            {/* Company Info */}

            <div className="relative flex justify-center">
              <div className="mb-[60px] px-[15px]  lg:text-left w-full max-w-[270px] flex flex-col">
                <h3
                  className={`text-2xl  mb-4 flex items-center flex justify-center lg:justify-start ${
                    isInview
                      ? "animate-fade-right animate-duration-1000 animate-ease-in-out"
                      : ""
                  }`}
                >
                  <img src="/assets/images/logowhiteall.png" />
                </h3>
                {/* <p
                  className={`text-[rgba(255,255,255,0.4)] mb-4 font-semibold text-[15px] mt-[38px]  ${
                    isInview
                      ? "animate-fade animate-duration-1000 animate-ease-in-out animate-delay-200"
                      : ""
                  }`}
                >
                  developing an excellent relationship with our customers and
                  partners.
                </p> */}
                <ul
                  className={`list-none lg:grid lg:grid-cols-2 gap-2 flex flex-wrap justify-center mt-[44px] mb-[-20px] uppercase ${
                    isInview
                      ? "animate-fade animate-duration-1000 animate-ease-in-out animate-delay-500"
                      : ""
                  }`}
                >
                  <li>
                    <Link
                      to="/"
                      className="text-[14px] font-semibold mb-20px px-1 hover:text-[#54c1e5]"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/aboutus"
                      className="text-[14px] font-semibold mb-20px px-1 hover:text-[#54c1e5]"
                    >
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/news"
                      className="text-[14px] font-semibold mb-20px px-1 hover:text-[#54c1e5]"
                    >
                      NEWS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contactus"
                      className="text-[14px] font-semibold mb-20px hover:text-[#54c1e5] px-1"
                    >
                      CONTACT US
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/academy"
                      className="text-[14px] font-semibold mb-20px hover:text-[#54c1e5] px-1"
                    >
                      Alliance Academy
                    </Link>
                  </li>
                </ul>
                {/* Bottom Footer */}

                <div className="flex flex-col items-center justify-center mt-[50px] gap-5">
                  <Link
                    to="https://itunes.apple.com/us/app/alliance-plastics/id959236111?mt=8"
                    target="_blank"
                  >
                    <img src="https://www.f-cdn.com/assets/main/en/assets/footer/app-store.svg" />
                  </Link>
                  <Link
                    to="https://play.google.com/store/apps/details?id=com.src.adrien.strechfilm&hl=en"
                    target="_blank"
                  >
                    <img src="https://www.f-cdn.com/assets/main/en/assets/footer/google-play.svg" />
                  </Link>
                </div>

                <p className=" text-[rgba(255,255,255,0.4)] font-semibold text-[15px] mt-[50px]">
                  © 2025 Alliance Plastics.{" "}
                  {/* <Link to="" className="underline-none">
                    Privacy policy
                  </Link> */}
                </p>
              </div>
              {/* <div className="lg:absolute lg:bottom-0 lg:left-[-20px] lg:h-full lg:w-[1000%] lg:bg-[#47505f] lg:z-[-1]"></div> */}
              <div className="lg:absolute lg:bottom-[-100px] lg:left-[-20px] lg:h-[150%] lg:w-[1000%] lg:bg-[#47505f] lg:z-[-1] "></div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
