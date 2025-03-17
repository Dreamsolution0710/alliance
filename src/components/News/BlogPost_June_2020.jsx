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
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Youtuber from "../allianceAcademy/Youtuber";

const BlogPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="mb-[80px]">
        <div className="py-[116px] bg-[url(/assets/images/download.webp)] bg-cover">
          <div className="flex items-center justify-center">
            <div className="max-w-[1200px] w-auto px-[15px] flex flex-col justify-center items-center">
              <h3 className="text-[44px] text-white uppercase tracking-[0.1em] font-bold">
                News
              </h3>
              <div className="border-b-4 border-[rgba(255,255,255,0.6)] w-[64px] h-[44px]"></div>
            </div>
          </div>
        </div>
        <div className="py-[20px] bg-[#f3f3f3]">
          <div className="flex item-center justify-center">
            <div className="max-w-[1200px] flex justify-center items-center">
              <div className="flex items-center">
                <Link
                  to="/landing"
                  className="text-[12px] text-[#777777] hover:text-[#54c1e5] uppercase cursor-pointer px-[17px] font-medium leading-[1.5] tracking-[0.13em]"
                >
                  home
                </Link>
                <ArrowRightIcon className="text-[#151515] font-black w-[16px] h-[14px]" />
                <Link
                  to="/news"
                  className="text-[12px] text-[#777777] hover:text-[#54c1e5] uppercase cursor-pointer px-[17px] font-medium leading-[1.5] tracking-[0.13em]"
                >
                  news
                </Link>
                <ArrowRightIcon className="text-[#151515] font-black w-[16px] h-[14px]" />
                <span className="text-[12px] text-[#151515] uppercase font-black px-[17px] leading-[1.5] tracking-[0.13em]">
                  view
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-[#151515] flex justify-center">
          <div className="max-w-[1200px] lg:w-[1200px]">
            <div className="lg:grid lg:grid-cols-3 flex flex-col">
              <div className="col-span-2 px-[15px] text-center lg:text-left">
                <h3 className="text-[32px] font-bold leading-[1.25] tracking-[0.05em] text-center lg:text-left">
                  Ron’s Market Review June 2020
                </h3>
                <div className="m-[24px_0px_-20px_-20px] flex items-start flex-col md:flex-row justify-center lg:justify-left">
                  <time
                    className="text-[12px] bg-[#fee25f] uppercase leading-[2] font-bold tracking-[0.1em] rounded-[30px] py-[1px] px-[10px] mb-[20px] ml-[20px] text-center lg:text-left"
                    dateTime="2023-4-30"
                  >
                    june, 2020
                  </time>
                  <div className="flex justify-center">
                    <div className="px-[17px] text-[#777777] flex items-center">
                      <User className="mx-2" size={16} />
                      <span>by Ron Grubbs</span>
                    </div>
                    <div className="px-[17px] text-[#777777] flex items-center border-x-1">
                      <Eye className="mx-2" size={16} />
                      <span>2043</span>
                    </div>
                    <div className="px-[17px] text-[#777777] flex items-center">
                      <MessageSquare className="mx-2" size={16} />
                      <span>3</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <img
                    src="/assets/images/news/june2020Alliance.jpg"
                    className="mt-[30px] object-cover"
                  />
                </div>
                <h3 className="text-[32px] mt-[20px] font-bold leading-[1.25] tracking-[0.05em] text-center lg:text-left">
                  Together We Are Stronger!
                </h3>
                <div className="text-left">
                  <div className="mt-[50px]">
                    <h5 className="text-[24px] md:font-bold tracking-[0.075em] font-medium">
                      Resin Market
                    </h5>
                    <div className="text-[#151515] mt-[30px] text-[15px]">
                      <p className="mt-[20px]">
                        Do you all remember one of the best Christmas movies of
                        all time? Not It’s A Wonderful Life. Not, Christmas
                        Story. No, I am talking about DIE HARD. I stated it
                        would take a miracle for the resin to not slide or fall.
                        With the pandemic raging around the world, with many
                        parts of the country still closed and with our economy
                        showing signs of losing 25-30 points down in GDP, how
                        could a product that is in such oversupply be able to
                        keep control of their pricing? As Hans Gruber said, “You
                        asked for miracles, Theo, I give you the FBI”. Ron
                        Grubbs will say differently, “You ask for miracles,
                        ___________(fill in the name of whoever you are), I give
                        you ExxonMobil and Dow, the EMD.
                      </p>
                      <p className="mt-[20px]">
                        Resin, which I stated was going down another 4 cents
                        last month, amazingly showed flat in both indexes and it
                        cost me my bet with a group of folks, which by the way,
                        all of you are going to get 100 pennies in protest even
                        if it costs me two thousand pennies to ship it to you!
                        Expect an increase of 4 cents, you heard me correctly,
                        you will see this coming in the next month. I think the
                        miracle will continue. Anyone want to bet me 100
                        pennies?
                      </p>
                      <div className="flex justify-center">
                        <img
                          src="/assets/images/news/resinmarket.jpg"
                          className="mt-[30px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <h5 className="text-[24px] md:font-bold tracking-[0.075em] font-medium">
                      Paper Market
                    </h5>
                    <div className="text-[#151515] mt-[30px] text-[15px]">
                      <p className="mt-[20px]">
                        I made a pledge to curse less, I was trying to set an
                        example for my 18 and 21-year-old daughters. They seem
                        to have inherited that trait that has been a long Grubbs
                        tradition. I believe my Dad is a descendant of Vulgaria.
                        Many of his family members are tried and true
                        Vulgarians. However, as I am receiving higher bills for
                        paper and not a “pass-through” amount but the whole
                        amount of the $50.00 increase. Citing my no cursing
                        pledge, my last conversation with them looked like a Mad
                        Libs Baptist version.
                      </p>
                      <p className="mt-[20px]">PAPER MAD LIBS</p>
                      <p className="mt-[20px]">
                        You are all a bunch of (FUDGING) human beings. Telling
                        me you have to pass on the full amount of the increase
                        is a bunch of (FIDDLESTICKS). (GOSH DARNIT) you are
                        going to see what happens when you are in need of help,
                        I wouldn’t even (WASHING) on you if you were on fire.
                        You guys can kiss my (BUMPKIN). Don’t try to act
                        empathetic, you don’t give a (DAGNABBIT) bit about me or
                        our customers.
                      </p>
                      <p className="mt-[20px]">
                        Honestly, the conversation went something like this. I
                        have to admit that after the puzzling awkwardness of the
                        phone call, I confess I would have to put about 10
                        dollars in the swear jar in the end. I just couldn’t
                        pull it off because being that I am a Vulgarian like my
                        Father and his Father before him, I am afraid that my
                        translation sounded less effective so I had to change
                        tactics and speak naturally. You see they didn’t seem to
                        have a Google Translate app for the above so the
                        conversation crossed into the borders of Vulgaria and
                        the people at the checkpoint didn’t just stamp my
                        passport, they made me King. I am so DUCKING angry that
                        the Paper Industry made me break my pledge to clean up
                        my language. They really are a bunch of SHIRT HEADS.
                        (Auto-correct is turned on).
                      </p>
                      <div className="flex justify-center">
                        <img
                          src="/assets/images/news/paper.jpg"
                          className="mt-[30px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <h5 className="text-[24px] md:font-bold tracking-[0.075em] font-medium">
                      Ron’s view:
                    </h5>
                    <div className="text-[#151515] mt-[30px] text-[15px]">
                      <p className="mt-[20px]">
                        It seems our world is on fire right now. I don’t know if
                        this is going to end soon, but I would like to believe
                        in a little bit of what Paul McCartney said when he was
                        asked why he was such an optimist. Sir Paul replied,
                        “it’s because the good people still outnumber the bad
                        people.” I hope he’s right. My Dad would have another
                        statement, one which was equally as prophetic and seems
                        to be appropriate here. Dad would say, “Son, no matter
                        how bad the storm, it will always blow over, and then no
                        matter what the damage, we can rebuild.”
                      </p>
                      <p className="mt-[20px]">
                        I know that in my world, growing up an Army brat, the
                        world was much different. It was based on green, silver,
                        and gold, not skin color. We grew up with friends of all
                        different skin colors and like me, being that the US
                        Army is an internationally deployed force, we are mixed.
                        I was never deeply aware of race or inequities until I
                        had to go to a public school for the first time in my
                        life. Beforehand, my life was shuttling conveniently
                        walkable streets to our Department of Defense schools.
                      </p>
                      <p className="mt-[20px]">
                        In Daleville, Alabama, my first ever public school, I
                        was asked if I was a migrant farmer on my first day. I
                        was required to take Alabama history, and may I say, the
                        Civil War was a different subject matter than I
                        recalled. Much of the old glory was emblazoned on every
                        page except the ending which was the same as those other
                        history books taught in DOD schools. The end result for
                        the Confederacy was the same, but the pageantry and
                        slightly different perspective on causation were
                        definitely played out in a cinematic glorified version.
                      </p>
                      <p className="mt-[20px]">
                        I was teased and called awful names when I told the
                        other students that I was Amer-Asian: Korean Mother,
                        American White Father. I felt bullied like so many
                        before us and after. My Father tried to make it better
                        by telling me I was the combination of the very best of
                        the East and the West, but it still pained me to see my
                        tormentors. I have to confess, I did take the situation
                        in my own hands; I won some and lost some, but I stood
                        up for myself and the bullying stopped. I then made a
                        point to try and to stand up for those who couldn’t or
                        were unable to fight back. I continued to win some and
                        lose some but I took the power away from the bullies
                        because I didn’t fear them and I learned soon enough, I
                        could beat them with words instead of just fists. See,
                        ignorance has no race, no education level and it has no
                        class. It’s a malignant tumor that if not treated can
                        spread.
                      </p>
                      <p className="mt-[20px]">
                        We identify ourselves as Americans and that we are
                        united in these United States of America. America is a
                        nation full of opportunities. We enjoy open spaces,
                        beautiful landscapes, and best of all, diverse cultures.
                        This country has issues to deal with and we will deal
                        with them. We have to remember that what makes us great
                        is our differences, our ability to cross-pollinate and
                        to blend. Our constitution gives us all the Bill of
                        Rights, a document that has been called the most perfect
                        document. We know it’s not perfect, but we have to
                        strive to find that perfection because trying is what
                        makes us Americans. This strife, this virus, this time
                        is a storm that will blow over us and as Paul McCartney
                        said, “the good people still outnumber the bad people”
                        if that is true, then we can assess the damage and fix
                        the problems. I hope you all stay safe. Let’s weather
                        this storm together.
                      </p>
                      <div className="flex justify-center">
                        <img
                          src="/assets/images/news/alliance06_2020.jpg"
                          className="mt-[30px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <h5 className="text-[24px] md:font-bold tracking-[0.075em] font-medium text-center">
                      Can your Film do this? Steelflex Xtreme 2.0 55 layers of
                      AWESOMENESS!
                    </h5>
                    <div className="flex justify-center scale-150 py-[100px] ">
                      <Youtuber videoId={"vuo_AibRMA4"} />
                    </div>
                  </div>
                  <div>
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
                      <Link className="hover:text-[#57a4e0]">
                        <FaInstagram className="m-[5px] p-[-5px]" />
                      </Link>
                      <Link className="hover:text-[#57a4e0]">
                        <FaGooglePlusG className="m-[5px] p-[-5px]" />
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
                          src="/assets/images/news/post-4-370x365.jpg"
                        />
                        <div className="ml-[30px] mb-[10px]">
                          <Link
                            to="/news/blogview20200722"
                            className="font-[15px] hover:text-[#54c1e5] leading-[1.6]"
                          >
                            Stretch Film Market Information August 2020
                          </Link>
                          <p className="text-[15px] text-[#777777] uppercase">
                            july 22, 2020
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
