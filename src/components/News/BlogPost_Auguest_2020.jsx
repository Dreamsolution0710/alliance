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
                  to="/"
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
                  Ron’s Market Review August 2020
                </h3>
                <div className="m-[24px_0px_-20px_-20px] flex items-start flex-col md:flex-row justify-center lg:justify-left">
                  <time
                    className="text-[12px] bg-[#fee25f] uppercase leading-[2] font-bold tracking-[0.1em] rounded-[30px] py-[1px] px-[10px] mb-[20px] ml-[20px] text-center lg:text-left"
                    dateTime="2023-4-30"
                  >
                    auguest, 2020
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
                    src="/assets/images/news/alliance06_2020.jpg"
                    className="mt-[30px] object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="mt-[50px]">
                    <h5 className="text-[24px] md:font-bold tracking-[0.075em] font-medium">
                      Resin Market
                    </h5>
                    <div className="text-[#151515] mt-[30px] text-[15px]">
                      <p className="mt-[20px]">
                        Well, well, well. You thought the whooping was over, but
                        as you all can see, it’s not. Resin increased a whopping
                        5 cents per pound, that’s 9 cents in two months. That’s
                        an increase of 15-20% of resin cost during a time of
                        plunging GDP, a shortfall in local, state, and national
                        government spending, and by the way, if you haven’t
                        heard, a global pandemic. I don’t understand the
                        economics of this, but I do understand greed, and I can
                        see that old steam room where all these guys used to
                        meet. It’s abandoned now, and instead, they are all on a
                        ZOOM meeting, with their masks on. It’s not the usual
                        mask, but more like the mask that Darth Vader uses to
                        breathe. These folks, Vader (EXMOB) and Darth Maul (DOW)
                        are deciding from their Death Stars to launch another
                        great outrage, yes, they have yet again, another
                        increase proposed for all of us. If only Yoda were here
                        to say,
                      </p>
                      <div className="flex justify-center">
                        <img
                          src="/assets/images/news/yoda.jpg"
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
                        If you recall my last update, I was crowned the King of
                        Vulgaria. Well, I am back to reclaiming my American
                        citizenship, and after a quarantine for everyone’s
                        safety, I am back and trying to control my language. The
                        paper industry has helped me with this as they have
                        retracted their increases. Unlike the Darkside of Resin,
                        the world of paper has seen a substantially dramatic
                        swing from an increase to a considerable drop in the OCC
                        index. When I asked for a refund on the increase I did
                        pay, the phone went silent. The music on hold was the
                        Simon and Garfunkel song, “Sounds of Silence.”
                      </p>
                      <p className="mt-[20px]">
                        “Hello?” I said into the phone. The person on the other
                        line, who I could tell was still there because his voice
                        said, “I’m sorry; the number you have reached is not in
                        service or is temporarily disconnected. This is a
                        recording.” “Hey Tom, I know it’s you….That’s your
                        voice”. All I heard was Tom pretending to be a
                        recording. He even made that beeping sound…..”I’m sorry;
                        the number you have reached is not in service or is
                        temporarily disconnected. The number you have reached is
                        not in service at this time. This is a recording.
                        GOODBYE.
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
                        When I think of this pandemic, I think about all our
                        hardworking employees and our customers. All of us are
                        deemed essential workers, and in extraordinary
                        circumstances, we all work to make our economy continue
                        to run. I am blown away by the bravery and the will all
                        our team members exhibit. They are truly inspirational.
                      </p>
                      <p className="mt-[20px]">
                        This situation also makes me think of a story from
                        another person who has been a guiding influence; he is
                        none other than Edgar Allen Poe. So, you would say, how
                        does Poe offer any type of inspiration? Edgar wrote a
                        story that I think is compelling today. “The Masque of
                        the Red Death,” is the story of Prince Prospero. The
                        disease known as the Red Death ravished his land. It was
                        a virus that caused the pores to sweat blood, thus
                        making a grotesque image of agony and death,
                      </p>
                      <p className="mt-[20px]">
                        The people who were exposed were the weak, the
                        downtrodden, and the poor. Prince Prospero decided to
                        follow Dr. Fauci’s advice and isolate himself, with his
                        “safer at home” approach, thus shutting out those lowly
                        peasants to deal with the virus alone. However, he did
                        not listen to Dr. Fauci’s other advice; Prince Prospero
                        decided to invite a large gathering of the wealthy and
                        the famous to join him. They, the rich, would wait out
                        this evil virus, and would be protected because they
                        were wealthy and shut away from the poor world below
                        their castle.
                      </p>
                      <p className="mt-[20px]">
                        During their isolation, Prospero’s court held a
                        masquerade ball. The Red Death showed up as itself in
                        the guise of a poor peasant stricken with the disease.
                        People were appalled and outraged, how dare someone show
                        up masquerading as one of the peasants that were dying
                        of this disease. How dare this grotesque smiling figure
                        invade their party. Prince Prospero ordered this
                        imposter to be arrested and unmasked so that they could
                        see who they would hang in the morning. When the guards
                        reached for the creature, it had a phantom form, and
                        they fell dying with the very virus they were trying to
                        avoid. Chaos ensued as the wealthy ran and went room to
                        room, only to drop one by one from the virus.
                      </p>
                      <p className="mt-[20px]">
                        The moral of this story is that we are fighting the same
                        fight today in the form of COVID19. This virus is among
                        us, and the people we are losing first are our weakest
                        and most vulnerable. The long term effects are not
                        really known, and the virus continues to mutate and
                        become harder to fight. We are going to have to use all
                        our scientific might and power to defeat it. COVID19,
                        like the Red Death, is an equal opportunity killer. No
                        matter how we isolate it, if we don’t do the right
                        things, the virus will spread and will invade the lungs
                        of our loved ones. The best defense is the common sense
                        we can use to prevent the spread.
                      </p>
                      <p className="mt-[20px]">
                        I sincerely hope for all of you to stay safe. Please,
                        don’t be a Prince Prospero. Let’s have compassion and do
                        what we can to protect one another. Be a hero today by
                        taking the precaution and steps to save lives. Together
                        we are strong.
                      </p>
                      <p className="mt-[20px]">
                        Wishing you and your families the best of health.
                      </p>
                      <p className="my-[20px]">Remember the guidelines!</p>
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <h5 className="text-[24px] md:font-bold tracking-[0.075em] font-medium text-center">
                      WEAR A MASK
                    </h5>
                    <div className="flex justify-center">
                      <img
                        src="/assets/images/news/ron-1152x1536.jpg"
                        className="mt-[30px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <h5 className="text-[24px] md:font-bold tracking-[0.075em] font-medium text-center">
                      Keep 6 Feet Apart
                    </h5>
                    <div className="flex justify-center">
                      <img
                        src="/assets/images/news/keep6.jpg"
                        className="mt-[30px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <h5 className="text-[24px] md:font-bold tracking-[0.075em] font-medium text-center">
                      Wash your hands frequently
                    </h5>
                    <div className="flex justify-center">
                      <img
                        src="/assets/images/news/hands-1152x1536.jpg"
                        className="mt-[30px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <h5 className="text-[24px] md:font-bold tracking-[0.075em] font-medium text-center">
                      Clean and Disinfect
                    </h5>
                    <div className="flex justify-center">
                      <img
                        src="/assets/images/news/clean-1152x1536.jpg"
                        className="mt-[30px] object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="my-[20px]">Be well my friends! </p>
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
