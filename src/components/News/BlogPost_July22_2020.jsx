import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  Eye,
  MessageSquare,
  Quote,
  SearchIcon,
  User,
} from "lucide-react";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import HeaderSlot from "../utils/HeaderSlot";

const BlogPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderSlot
        imgSrc={"/assets/images/download.webp"}
        title={"Stretch Film Market Information August 2020"}
        router={[
          {
            title: "home",
            src: "/",
          },
          {
            title: "news",
            src: "/",
          },
          "view",
        ]}
      />

      <div className="mt-[100px]">
        <div className="text-[#151515] flex justify-center">
          <div className="max-w-[1200px] lg:w-[1200px]">
            <div className="lg:grid lg:grid-cols-3 flex flex-col">
              <div className="col-span-2 px-[15px] text-center lg:text-left">
                <h3 className="text-[32px] font-bold leading-[1.25] tracking-[0.05em] text-center lg:text-left">
                  Stretch Film Market Information August 2020
                </h3>
                <div className="m-[24px_0px_-20px_-20px] flex items-start flex-col md:flex-row justify-center lg:justify-left">
                  <time
                    className="text-[12px] bg-[#fee25f] uppercase leading-[2] font-bold tracking-[0.1em] rounded-[30px] py-[1px] px-[10px] mb-[20px] ml-[20px] text-center lg:text-left"
                    dateTime="2023-4-30"
                  >
                    July 22, 2020
                  </time>
                  <div className="flex justify-center">
                    <div className="px-[17px] text-[#777777] flex items-center">
                      <User className="mx-2" size={16} />
                      <span>by Ron Grubbs</span>
                    </div>
                    <div className="px-[17px] text-[#777777] flex items-center border-x-1">
                      <Eye className="mx-2" size={16} />
                      <span>348</span>
                    </div>
                    <div className="px-[17px] text-[#777777] flex items-center">
                      <MessageSquare className="mx-2" size={16} />
                      <span>8</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <img
                    src="/assets/images/news/alliance06_2020.jpg"
                    className="mt-[30px] object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="text-[#151515] mt-[30px] text-[15px]">
                    <p className="mt-[20px]">
                      July 22, 2020
                      <br /> Dear Valued Partners:
                    </p>
                    <p className="mt-[20px]">
                      I hope all of you are staying safe as we are all still
                      hopeful for a solution to this ongoing crisis. Everyone
                      here at Alliance Plastics deeply appreciates our
                      distributor partners and hope you all are well and
                      healthy.
                    </p>
                    <p className="mt-[20px]">
                      Due to the price increase from July 1st from all major
                      resin suppliers, we, unfortunately, have to announce an
                      increase on all of our stretch film products. The
                      extraordinary circumstances regarding this increase force
                      us to raise all pricing on Bandflex, Airforce, Titanium,
                      Steelflex, OP & SX2 material by 5 cents per pound
                      effective August 10th, 2020. We realize this date is later
                      than most film suppliers but we wanted to make sure the
                      market was indeed moving toward an increase. We have
                      confirmation that this increase has posted up 5 cents in
                      CDI.
                    </p>
                    <p className="mt-[20px]">
                      We continue to hope this crisis will come to an end soon
                      and we look forward to a day where we can meet with you
                      again. In the meantime, I urge you to contact your CSRs
                      and Sales Representatives to help mitigate this changing
                      market. I am here at your service for any questions or
                      comments you might have.
                    </p>
                    <p className="mt-[20px]">
                      We value your business and thank you for your continued
                      support. Together, we are strong.
                    </p>
                  </div>

                  <div>
                    <p className="my-[20px]">Sincerely</p>
                    <div className="flex">
                      <img
                        src="/assets/images/news/sign_ron.jpg"
                        className="object-cover w-30"
                      />
                    </div>
                  </div>
                  <p>
                    Ron Grubbs,
                    <br /> Jr.President
                  </p>
                  <div className="flex justify-center">
                    <img
                      src="/assets/images/news/elitepartner.jpg"
                      className="mt-[30px] object-cover"
                    />
                  </div>
                </div>

                {/* <div className="flex mt-[30px] md:flex-row flex-col">
                  <Quote className="mr-[15px] text-[#e1e1e1] mt-[-20px] w-16 h-16 min-w-16 " />
                  <p className="text-[24px] leading-[1.375] tracking-[0.075em] italic font-light">
                    The Elite Program is based on loyalty and partnership, and
                    it’s going to be an exclusive club. Our loyalty will be
                    measured in how you won’t run into your competitors with the
                    same thing and how much money we will make you. Our company,
                    creed mentions loyalty:
                  </p>
                </div>
                <div className="m-[45px_0px_-20px_-40px] flex md:flex-row flex-col">
                  <img
                    src="/assets/images/news/partnerprogram-768x606.png"
                    className="ml-[40px] mb-[20px] w-[333px] h-[243px]"
                  />
                  <div className="p-[0px_0px_20px_40px] md:text-left text-center">
                    <p className="italic">
                      We do the things we do because that is who we are.
                      <br /> We invent new concepts because we want to see
                      change. <br />
                      We are loyal because we choose to do the right thing.
                      <br /> That’s the Alliance Way.
                    </p>
                    <p className="mt-[24px]">
                      Do you miss the value in a real partnership? Don’t you
                      wish that a vendor gave you loyalty back? Don’t you wish
                      for someone to have your back? Don’t you wish they
                      wouldn’t sell everyone else and when everyone has the same
                      thing, just how special are you now?
                    </p>
                  </div>
                </div> */}
                <div className="flex bg-[#f3f3f3] border-b-3 border-[#54c1e5] mt-[50px]">
                  <div className="py-[33px] px-[35px] flex items-center w-full">
                    <h6 className="text-[18px] leading-[1.333]">
                      Share this post
                    </h6>
                    <span className="grow" />
                    <div className="flex items-center gap-3 justify-center lg:justify-start">
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
                </div>
              </div>
              <div className="px-[15px] flex justify-center">
                <div className="lg:ml-[40px] ">
                  <div className="mb-[90px] relative lg:mt-0 mt-[50px]">
                    <input
                      type="text"
                      className="bg-[#f3f3f3] px-[15px] py-[16px] pr-[70px] pl-[30px] placeholder-[#9b9b9b] outline-none w-[100%]"
                      placeholder="Search the blog...."
                    />
                    <SearchIcon
                      size={20}
                      className="absolute right-0 bottom-[16px] right-[25px]"
                    />
                  </div>
                  <div>
                    <h6 className="pb-[15px] border-b-1 border-[#e1e1e1] font-normal text-[18px] leading-[1.333] tracking-[0.1em]">
                      Popular Posts
                    </h6>
                    <div>
                      <div className="mt-[30px] mb-[-10px] ml-[-30px] flex">
                        <img
                          className="w-[106px] h-[104px] mb-[10px] ml-[30px] min-w-[106px] min-h-[104px] object-cover"
                          src="/assets/images/news/post-1-370x210.jpg"
                        />
                        <div className="ml-[30px] mb-[10px]">
                          <Link
                            to="/news/blogview202010"
                            className="font-[15px] hover:text-[#54c1e5] leading-[1.6]"
                          >
                            Ron’s Market Review October 2020
                          </Link>
                          <p className="text-[15px] text-[#777777] uppercase">
                            october, 2020
                          </p>
                        </div>
                      </div>
                      <div className="mt-[30px] mb-[-10px] ml-[-30px] flex">
                        <img
                          className="w-[106px] h-[104px] mb-[10px] ml-[30px] min-w-[106px] min-h-[104px] object-cover"
                          src="/assets/images/news/post-2-370x365.jpg"
                        />
                        <div className="ml-[30px] mb-[10px]">
                          <Link
                            to="/news/blogview202009"
                            className="font-[15px] hover:text-[#54c1e5] leading-[1.6]"
                          >
                            Ron’s Market Review September 2020
                          </Link>
                          <p className="text-[15px] text-[#777777] uppercase">
                            September, 2020
                          </p>
                        </div>
                      </div>
                      <div className="mt-[30px] mb-[-10px] ml-[-30px] flex">
                        <img
                          className="w-[106px] h-[104px] mb-[10px] ml-[30px] min-w-[106px] min-h-[104px] object-cover"
                          src="/assets/images/news/post-3-370x210.jpg"
                        />
                        <div className="ml-[30px] mb-[10px]">
                          <Link
                            to="/news/blogview202008"
                            className="font-[15px] hover:text-[#54c1e5] leading-[1.6]"
                          >
                            Ron’s Market Review August 2020
                          </Link>
                          <p className="text-[15px] text-[#777777] uppercase">
                            Auguest, 2020
                          </p>
                        </div>
                      </div>

                      <div className="mt-[30px] mb-[-10px] ml-[-30px] flex">
                        <img
                          className="w-[106px] h-[104px] mb-[10px] ml-[30px] min-w-[106px] min-h-[104px] object-cover"
                          src="/assets/images/news/post-5-370x210.jpg"
                        />
                        <div className="ml-[30px] mb-[10px]">
                          <Link
                            to="/news/blogview20200612"
                            className="font-[15px] hover:text-[#54c1e5] leading-[1.6]"
                          >
                            Stretch Film Market Information June 2020
                          </Link>
                          <p className="text-[15px] text-[#777777] uppercase">
                            June 12, 2020
                          </p>
                        </div>
                      </div>
                      <div className="mt-[30px] mb-[-10px] ml-[-30px] flex">
                        <img
                          className="w-[106px] h-[104px] mb-[10px] ml-[30px] min-w-[106px] min-h-[104px] object-cover"
                          src="/assets/images/news/post-6-370x365.jpg"
                        />
                        <div className="ml-[30px] mb-[10px]">
                          <Link
                            to="/news/blogview202006"
                            className="font-[15px] hover:text-[#54c1e5] leading-[1.6]"
                          >
                            Ron’s Market Review June 2020
                          </Link>
                          <p className="text-[15px] text-[#777777] uppercase">
                            June,2020
                          </p>
                        </div>
                      </div>
                    </div>
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

export default BlogPost;
