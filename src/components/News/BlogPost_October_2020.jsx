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

const BlogPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="mb-[80px]">
        <div className="py-[116px] bg-[url(/assets/images/download.jpg)] bg-cover">
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
                  Ron’s Market Review October 2020
                </h3>
                <div className="m-[24px_0px_-20px_-20px] flex items-start flex-col md:flex-row justify-center lg:justify-left">
                  <time
                    className="text-[12px] bg-[#fee25f] uppercase leading-[2] font-bold tracking-[0.1em] rounded-[30px] py-[1px] px-[10px] mb-[20px] ml-[20px] text-center lg:text-left"
                    dateTime="2023-4-30"
                  >
                    october, 2020
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
                        Have you ever been in a relationship with someone who,
                        no matter what, they want more? I felt this way with my
                        personal trainer. I am physically done, and he screams
                        at me, “COME ON YOU WEAKLING, GIVE ME ONE MORE!” Another
                        example, I had a friend who flew all the way to
                        Australia, and the girl he was dating was mad because he
                        was flying business class and not first class. This is
                        the same state of the resin world. I think the
                        converters and the fabricators are staring at the resin
                        companies as they put up their demands for 19 cents, and
                        we are all saying, “but I can’t seem to pass on all this
                        to my customers! They are revolting!” The resin
                        producers say, “Yes, you are all revolting. Have you
                        smelled yourselves lately?”
                      </p>
                      <p className="mt-[20px]">
                        The major indexes came out flat, which drew some relief.
                        However, staring down the latest Hurricane coming up
                        towards the mid-central gulf states. This is our 27th
                        such storm, and I have to say, I have never seen us go
                        all the way through the Z’s into the Greek alphabet for
                        names before. Remember, it’s not the wind that hurts us.
                        It’s the water; the water which floods out
                        transportation or knocks out the ability to fix the down
                        power lines. This is what makes the possible shutdowns
                        worse. Let’s just hope we get a TREAT instead of a TRICK
                        this Halloween.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <img
                        src="/assets/images/news/unnamed-1.jpg"
                        className="mt-[30px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <h5 className=" text-[24px] md:font-bold tracking-[0.075em] font-medium">
                      Paper Market
                    </h5>
                    <div className="text-[#151515] mt-[30px] text-[15px]">
                      <p>
                        Recently, we had a conversation with one of our major
                        suppliers on paper. He was nervous about something. I
                        could tell it was about our conversation. He said he
                        wasn’t able to fulfill some of our orders for November
                        and December. I said, “Fine, how many can you fulfill?”
                        He came back with the magic words, “NONE” (nada in
                        Spanish). We are okay, but you can imagine my surprise
                        at the negotiations. I didn’t know it would be the
                        Michael Corleone offer of “nothing.” Then, shortly, came
                        the announcements of $50.00 per ton for URB (uncoated
                        recycled board). All of this during a pandemic. This is
                        as appetizing as eating a potato salad that has been
                        sitting for 5 hours in the hot August Florida sun.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <img
                        src="/assets/images/news/godfather-1536x864.jpg"
                        className="mt-[30px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <h5 className=" text-[24px] md:font-bold tracking-[0.075em] font-medium">
                      Ron’s view:
                    </h5>
                    <div className="text-[#151515] mt-[30px] text-[15px]">
                      <p className="mt-[20px]">
                        Twenty-twenty has been challenging. Do I even need to
                        write that? My network of friends, colleagues, and my
                        family have all been a significant relief from the
                        insanity of a world in a global pandemic and knee-deep
                        in a contentious election.{" "}
                      </p>
                      <p className="mt-[20px]">
                        It’s a good thing I gave up sniffing glue (that would be
                        Elmers from elementary school); otherwise, I could fall
                        into bad old habits. Standing in the corner was torture
                        for a kid who had ADHD.
                      </p>
                      <p className="mt-[20px]">
                        I saw a friend and customer the other day, and
                        instinctively drew out my hand while trying to
                        simultaneously pull it back and made a weird sound from
                        my mouth, “aieahhh.” I threw him a fist bump instead and
                        then focused on the germs we had just exchanged. Another
                        friend tried to give me a hug. When he realized that
                        wasn’t acceptable anymore, both our arms were hanging in
                        the air. As uncomfortable as that felt, at least it was
                        better than my Canadian friend who he says he loves me,
                        as I am sure another man says to another man, perhaps
                        it’s more normal now, but I am old school, and I always
                        say, “I…I…I feel strongly about you as well, but in a
                        heterosexual way!”
                      </p>
                      <p className="mt-[20px]">
                        When going through trying times, I think about my father
                        and mother. He was in the Vietnam War, so I suppose
                        getting shot at is definitely worse than what I could
                        ever tolerate. My mother almost starved to death more
                        than once as she was a child in war-torn Korea. When I
                        was a little boy, she would tell me the story about how
                        they ate her pet rabbit because they were starving, and
                        she cried as she ate the meat. She was still tearing up
                        all those years later as she recounted it. That
                        certainly gives one perspective. So, yeah – I suppose
                        none of us really have it all that bad.
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
                      <p className="mt-[20px]">
                        One of my friends who helped us bring this line together
                        and pushed it with his company asked me, “Hey man, I am
                        the first one to bring this in. Are you going to sell
                        this to everyone now?” I looked at him and said, “You
                        know what, this is a special film. The people that
                        recognize it should get something special. So you know
                        what? No, I will sell it to you well below anyone else”
                        It was there that I decided on our loyalty program,
                        which I call the Elite Program. Our first member of the
                        elite program must be doing well because we are getting
                        calls to go against them; however, our loyalty is
                        paramount, and we would never do this to a FRIEND. I had
                        to think. If someone offered me an exclusive in a region
                        on a 55 Nano-layered film that beat the highest end
                        films in the market at 15-20% less than our friendly
                        competitors with a 3% rebate on top, I would say, “Where
                        do I sign?”
                      </p>
                      <p className="mt-[20px]">
                        Remember what it was like to have someone who had your
                        back? Having something special to sell that is available
                        to no one else, and knowing that when it comes to price
                        advantage, you would be able to control the game. Before
                        the Covid shutdown, I went round and round with someone
                        who continued to tell me that running his current 57
                        gauge private label was the same as my 55 gauge, 55
                        nanolayer film, but he didn’t test the puncture, he
                        didn’t test the cut and weigh, he didn’t test the
                        containment. He just threw it on a machine. My comment
                        was to him, “any film can run on a machine, but do you
                        even care what happens to the load after you take it off
                        the wrapper?” He told me he didn’t care, and I told him,
                        “I can’t wait to go against you in the market.” So, when
                        there is an effective vaccine, and we all can shake
                        hands and clink our glasses again, I will be there to
                        make him realize the difference first hand and show him
                        how wrong he was. I will be doing this with an Elite
                        member in his region soon.
                      </p>
                      <p className="my-[20px]">
                        Don’t believe me? Check out this video of our Steelflex
                        Xtreme 2.0 39ga (10 mic) in action. This film is running
                        at 250% pre stretch with speeds of 65 RPMs. If you don’t
                        believe your eyes, let us show in person.
                      </p>
                      <a className="mt-[20px]">Click to see it in action</a>
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
