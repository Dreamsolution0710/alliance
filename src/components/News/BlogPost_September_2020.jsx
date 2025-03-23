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
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

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
                  Ron’s Market Review September 2020
                </h3>
                <div className="m-[24px_0px_-20px_-20px] flex items-start flex-col md:flex-row justify-center lg:justify-left">
                  <time
                    className="text-[12px] bg-[#fee25f] uppercase leading-[2] font-bold tracking-[0.1em] rounded-[30px] py-[1px] px-[10px] mb-[20px] ml-[20px] text-center lg:text-left"
                    dateTime="2023-4-30"
                  >
                    September, 2020
                  </time>
                  <div className="flex justify-center">
                    <div className="px-[17px] text-[#777777] flex items-center">
                      <User className="mx-2" size={16} />
                      <span>by Ron Grubbs</span>
                    </div>
                    <div className="px-[17px] text-[#777777] flex items-center border-x-1">
                      <Eye className="mx-2" size={16} />
                      <span>4673</span>
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
                    <h5 className=" text-[24px] md:font-bold tracking-[0.075em] font-medium">
                      Resin Market
                    </h5>
                    <div className="text-[#151515] mt-[30px] text-[15px]">
                      <p className="mt-[20px]">
                        How do we influence the world to go up in resin prices?
                        What do we do to disrupt supply? Allow me to introduce
                        you to Hurricane Laura. Oh, she’s elegant in her
                        spiraling dance moves that whipped across the border of
                        Texas and Louisiana, the very brilliant places to put
                        volatile reactors that happen to be below sea level. I’m
                        not a surveyor, but I would have guessed several areas
                        that might have been more suitable for a chemical
                        reactor. Laura is just one of the many hurricanes that
                        appeared during a season that will bring even more. In
                        fact, her sister, Sally, is growing up and will be
                        dancing like a slow-motion ballerina across New Orleans
                        shortly. What does all this mean? It means higher resin
                        prices, even if it seems unwarranted because 30 million
                        Americans are still getting government assistance for
                        help during the pandemic. We will see higher prices
                        sticking around for a while, but just as we suffered
                        through 19 cents of increases, by Christmas, you will be
                        unwrapping several discounts, but not close to the
                        quickness it went up. We go up fast, and we come down in
                        slivers.
                      </p>
                      <div className="flex justify-center">
                        <img
                          src="/assets/images/news/unnamed.png"
                          className="mt-[30px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <h5 className=" text-[24px] md:font-bold tracking-[0.075em] font-medium">
                      Paper Market
                    </h5>
                    <div className="text-[#151515] mt-[30px] text-[15px]">
                      <p>
                        I’m told six weeks is the standard lead time for paper
                        right now. The import market is suffering due to the
                        high cost of ocean freight. Shops and online retailers
                        are getting ready for the onslaught called Christmas
                        (sorry, holiday season). The Cabbage Patch Dolls and
                        Teddy Ruxpins are coming, so that means our goods are
                        last on the priority list (Damn, it’s been a long time
                        since I went Christmas shopping!). Due to this, the cost
                        of international freight moved up sharply, and the
                        competition for containers very expensive. It’s almost
                        as if that darn supply and demand curve I remember from
                        Econ 101 really does work. I have not seen the pricing
                        move on paper, but that constant flow from the river of
                        desperation is now dry; a new wave of arrogance is
                        starting to arise like a millennial demanding lattes in
                        the break room and dog manicures for his workplace. I
                        see an evil smile begin to form on their lips as they
                        are blowing the dust off their old increase letters. We
                        are probably not seeing them pull out the white-out
                        right now to change the date on those increases, but I
                        wouldn’t be shocked if they did finally move forward
                        with an increase in the future. I am certain, and I will
                        bet my Snickers bar on it! You just have to get it out
                        of the vending machine, it’s been stuck in there for a
                        week and I refuse to spend another dollar to get it out.
                      </p>
                      <div className="flex justify-center">
                        <img
                          src="/assets/images/news/snik-1.png"
                          className="mt-[30px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <h5 className=" text-[24px] md:font-bold tracking-[0.075em] font-medium">
                      Ron’s view:
                    </h5>
                    <div className="text-[#151515] mt-[30px] text-[15px]">
                      <p className="mt-[20px]">
                        We had a somber remembrance recently of 19 years ago on
                        9/11 when the world watched with America in horror as we
                        witnessed an attack on our country. The horror turned to
                        patriotism and then anger at the act that was
                        perpetrated against us. For that moment, I imagine, like
                        Pearl Harbor Day, we all collectively joined together,
                        united by our shock, and acted like Americans. Remember,
                        France’s President Chirac said, “Today, we are all
                        Americans.” in the wake of the attacks.
                      </p>
                      <p className="mt-[20px]">
                        The division we feel today seems to make Americans think
                        that the people in California and New York represent the
                        avocado toast eating liberals that vote for socialism
                        over democracy. They represent the educated ivy league
                        elite society that looks down on them. However, when
                        people were trapped in the towers that day on 9/11,
                        whether they graduated from Harvard or were emptying the
                        trash, they all were thinking of their loved ones and
                        calling in those sad and terrible last phone calls to
                        remind them of the love they have for them. The
                        financial planner and the janitor who shared the same
                        fate had the same idea. They just wanted to call their
                        loved ones one last time. I read about how people were
                        huddled together and, knowing they were doomed, would
                        share their cell phones to call loved ones for one last
                        time. I have also learned that you can go through four
                        years of college and get a piece of paper and still not
                        know anything about the world. Earning a degree in
                        physics doesn’t mean you know how to fix a leaky toilet
                        and that the person who saves your home from deadly mold
                        is that technical school graduate making great money for
                        the trade he learned without having to open Tolstoy or
                        Shakespeare. I find it exhausting to argue about
                        politics, so I try to avoid it. Just because I disagree
                        with my family, I would defend them against you to the
                        death because I love them. Just because I did go to
                        college and did get a degree, it doesn’t mean I stopped
                        learning, especially from the folks that I rely on who
                        were not able to go or didn’t want to further their
                        education. Maybe it is because of how I was raised. My
                        Dad never told me I was the greatest. He told me that if
                        I worked hard enough, I could be better, and sometimes
                        that’s all it takes. On the other hand, according to my
                        mom, I am more talented and more handsome than anyone
                        else in this whole wide world, and she’s not biased! I
                        guess what I’m saying is that old adage, “don’t judge
                        someone until you walked a mile in their shoes.” If we
                        can remember what makes us connected, that is a good
                        start.
                      </p>
                      <p className="mt-[20px]">
                        Living in the south, I like biscuits and grits, and
                        people who don’t share my views do as well. I also know
                        that when I meet with my friends (it’s been a while
                        because of the virus) we have deep belly laughs as we
                        talk about crazy times together and in these sessions,
                        even though we have different views, I don’t believe
                        that they want to destroy America, no matter how whacky
                        their ideology. I like my Panthers, even though we lost
                        Cam Newton to the most dreadful team of all, the
                        Patriots. When we talk about the team, the political
                        divide melts away due to our mutual hatred for those
                        damn Patriots. I do enjoy opera, but I also like a
                        Skyline cheese coney with onions and mustard! I prefer
                        hamburger to steak, and no matter how expensive the
                        steak, I top it off with A-1. I also love avocado toast
                        but I’m not an elitist liberal, and I don’t look down on
                        those who do not. As a Veteran, I took an oath when I
                        joined the Army, it didn’t say defend Republican or
                        Democrat; It was a sworn oath to defend the
                        constitution……so help me, God.
                      </p>
                      <p className="mt-[20px]">
                        If we can shed this belief that November 3rd is the
                        Superbowl and it’s a battle between 2 teams, we may
                        realize that no matter what happens, our democracy will
                        survive. We survived civil wars, social unrest
                        repeatedly, World Wars, and even a previous pandemic in
                        1918. Our system shouldn’t be about just one side
                        winning and doing everything it can to punish the other
                        side. No one has ever been won over or healed by this
                        behavior. I think we all should come together and stop
                        yelling at each other and do what the 21st amendment
                        allows us to do; relax and have a drink together. As
                        9/11 showed, we are connected by the same values because
                        we are all Americans.
                      </p>
                      <p className="mt-[20px]">
                        One thing that 2020 has done: it took away our platform
                        for the launch of our SX2 stretch film product line. No
                        one was looking for more change, even though we had a
                        new, exciting product, a 55 nanolayer film that flat out
                        is the best film in the world. Anyone who says otherwise
                        is itching for a fight, and since I am out of shape, I
                        won’t do any fighting. We were so excited about this
                        product line. We paid for high-end tests to be
                        conducted, and you know what? We won! Not a small win or
                        a victory where we lost as many as they did, but we
                        could afford to like the North did to the South in the
                        Civil War – but a huge Texas-Sized can of whoop-ass kind
                        of win!
                      </p>
                      <div className="flex justify-center">
                        <img
                          src="/assets/images/news/bomb-1.png"
                          className="mt-[30px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex mt-[30px] md:flex-row flex-col">
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
                </div>
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
