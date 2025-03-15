import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { FaEnvelope, FaFacebookF, FaPhone, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const reps = [
  {
    name: "Gale Marcus",
    photo: "/assets/images/representative/gale.jpg",
    src: "/assets/images/representative/rep_gale.jpg",
    content:
      "Welcome to Alliance Plastics West Coast!/My name is Gale Marcus and it is truly a pleasure to handle Nevada, Utah, Arizona, California, Idaho, Montana, Oregon, Washington & New Mexico!/I give you my commitment in offering a great product, competitive pricing with exceptional service and follow though!/Living in Las Vegas, near our manufacturing warehouse is a convenient an easy commute to your location./ We can keep freight cost down with the proximity and eliminate long lead times./Our innovative Vented Line and DX corner board will keep your clients on technologies cutting edge! I will work with you and focus on the needs of the end user./ Together, we can determine the best product and price point./“If you succeed, we succeed”I look forward to meeting your packaging needs and introducing you to our product line!Here’s a toast to great success and a continued partnership!​",
    social: {
      twitter: "https://twitter.com/AlliancePlastic",
      facebook:
        "https://www.facebook.com/pages/Alliance-Plastics/775908369189871?fref=ts",
      phonenumber: "tel:8186132500",
      email: "gale@allianceplastics.net",
    },
    geography: [
      "Washington",
      "Oregon",
      "California",
      "Nevada",
      "Arizona",
      "Utah",
      "Idaho",
      "Montana",
      "Wyoming",
      "Colorado",
      "New Mexico",
      "North Dakota",
      "South Dakota",
    ],
  },
  {
    name: "Eric Baranczyk",
    photo: "/assets/images/representative/Eric.png",
    src: "/assets/images/representative/rep_eric.jpg",
    content:
      "Based out of Green Bay WI I cover: Wisconsin, Minnesota, North Dakota, South Dakota, Iowa, Nebraska, Missouri, and Kansas.Residing, and growing up in Green Bay, naturally I am a huge Packer fan./ Well, actually a huge football fan in general along with an avid hunter./I have been in packaging for 10+ years./ My specialty is stretch film and stretch equipment./ With the unique and innovative products that Alliance Plastics offers, makes it a perfect place for me to assist companies to be more profitable and deliver their products safely and effectively.​",
    social: {
      twitter: "https://twitter.com/AlliancePlastic",
      facebook:
        "https://www.facebook.com/pages/Alliance-Plastics/775908369189871?fref=ts",
      phonenumber: "tel:9206391950",
      email: "eric@allianceplastics.net",
    },
    geography: [
      "Nebraska",
      "Kansas",
      "Michigan",
      "Wisconsin",
      "Iowa",
      "Missouri",
      "Indiana",
      "Ohio",
      "Illinois",
    ],
  },
  {
    name: "Sarah Lister",
    photo: "/assets/images/representative/sarah.jpg",
    src: "/assets/images/representative/rep_sarah.jpg",
    content:
      "Sarah was born and raised in Florida./ Her grandfather owned and operated a conveyor company specializing in citrus machinery, so she, quite literally, grew up in the manufacturing industry./ She graduated from USF and began her career as a Special Education teacher working with children with behavioral disorders./ During her teaching career she completed a Master’s Degree in Educational Administration./ Looking to expand her horizons, Sarah left the teaching profession to pursue an unexpected opportunity as a Pharmaceutical Sales Representative./ As that industry contracted, she started to look for other opportunities and was intrigued by an offer to join Alliance Plastics./ Sarah has been with Alliance for 7 years and continues to be an important part of the Alliance Team. She currently lives in Clearwater, Florida where she loves to bike, paddleboard, kayak and care for her two yorkies, Stewie and Kelso.​",
    social: {
      twitter: "https://twitter.com/AlliancePlastic",
      facebook:
        "https://www.facebook.com/pages/Alliance-Plastics/775908369189871?fref=ts",
      phonenumber: "tel:8137673525",
      email: "sarah@allianceplastics.net",
    },
    geography: [
      "Texas",
      "Oklahoma",
      "Arkansas",
      "Louisiana",
      "Mississippi",
      "Alabama",
      "Florida",
      "Georgia",
    ],
  },
  {
    name: "Rone Grubbes",
    photo: "/assets/images/representative/ron.jpg",
    src: "/assets/images/representative/bio_ron.jpg",
    content:
      "I grew up an Army Brat and traveled all around the world./ We were accustomed to moving every 2 years. I joined the Army and served in Korea and was called back to active duty for Operation Desert Storm./ After graduating from the University of Louisville, I joined Unisource and then worked for many different stretch film manufacturers./ I had the luxury of being trained by the best of the best and had many great mentors in my life. My most rewarding professional moment was starting Alliance Plastics with my Father who instilled in me the notion of duty, honor and integrity./ My Dad served 4 tours in Vietnam and 30 years in the Army and my Mother survived war torn Korea nearly starving to death. I am truly grateful for the values that they gave me./ At Alliance Plastics, we think differently, we want to make the greatest and most innovative products in what has become a stale and bland industry. We push the limits because we don’t know any other way./ It permeates through our entire staff and what makes me so proud is their pride which is displayed from the products that come off the line to the highest measure we put on customer service.​",
    social: {
      twitter: "https://twitter.com/AlliancePlastic",
      facebook:
        "https://www.facebook.com/pages/Alliance-Plastics/775908369189871?fref=ts",
      phonenumber: "tel:7049421627",
      email: "marc@alliancron@allianceplastics.neteplastics.net",
    },
    geography: ["Alaska", "Hawaii"],
  },
  {
    name: "Marc Delatte",
    photo: "/assets/images/representative/marc.jpg",
    src: "/assets/images/representative/rep_marc.jpg",
    content:
      "Marc and his family reside in Lake Wylie SC, just outside of Charlotte./ 18 years experience in packaging starting with Sealed Air, then Berry Plastics before joining the Alliance plastics team./ True to the Alliance Plastics motto of putting our customer first, Marc brings a overall solution to the table./ Focusing on the right product to ensure the best possible outcome for you and your customer. When not working and traveling, he enjoys football, tailgating, and projects around the house.​",
    social: {
      twitter: "https://twitter.com/AlliancePlastic",
      facebook:
        "https://www.facebook.com/pages/Alliance-Plastics/775908369189871?fref=ts",
      phonenumber: "tel:8034483031",
      email: "marc@allianceplastics.net",
    },
    geography: [
      "South Carolina",
      "North Carolina",
      "Tennessee",
      "Virginia",
      "West Virginia",
      "New Jersey",
      "Maryland",
      "Delaware",
      "Connecticut",
      "New Hampshire",
      "Rhode Island",
      "Vermont",
      "Maine",
      "New York",
      "Massachusetts",
      "Pennsylvania",
      "Kentucky",
    ],
  },
  {
    name: "Yvonne Valentin",
    photo: "/assets/images/representative/yvone.jpg",
    src: "/assets/images/representative/bioplaceholder.jpg",
    content: "​",
    social: {
      twitter: "https://twitter.com/AlliancePlastic",
      facebook:
        "https://www.facebook.com/pages/Alliance-Plastics/775908369189871?fref=ts",
      phonenumber: "tel:8886431432",
      email: "yvonne@allianceplastics.net",
    },
    geography: ["Minnesota"],
  },
];

const USAMap = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [currentRep, setCurrentRep] = useState({});

  // Function to handle click on a state
  const handleClick = (geo) => {
    // Toggle the state selection (or select one)
    if (selectedState === geo.properties.name) {
      setSelectedState(null); // Deselect if already selected
    } else {
      setSelectedState(geo.properties.name); // Select the clicked state
    }
  };

  useEffect(() => {
    console.log(setSelectedState === undefined);
  }, []);
  useEffect(() => {
    if (selectedState) {
      setCurrentRep(
        reps.find(
          (rep) =>
            rep.geography.findIndex((item) => item === selectedState) !== -1
        )
      );
    }
  }, [selectedState]);

  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="w-[100%] flex items-center items-center flex-col bg-[#2196f3] pt-[50px] relative">
        {selectedState ? (
          <div className="text-white text-[44px] uppercase min-h-[50px] font-bold">
            {selectedState}
          </div>
        ) : (
          <div className="text-[#151515] text-[36px] uppercase min-h-[50px] font-medium">
            select State
          </div>
        )}
        <ComposableMap projection="geoAlbersUsa" className="w-[80%]">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  // fill="#FFFFFF"
                  stroke="#1a1a1a"
                  strokeWidth={0.7}
                  onClick={() => handleClick(geo)} // Handle state click
                  fill={
                    selectedState === geo.properties.name
                      ? "#777777"
                      : "#ffffff"
                  } // Apply color based on selection
                  style={{
                    default: {
                      fill:
                        selectedState === geo.properties.name
                          ? "#777777"
                          : "#ffffff", // Selected color
                      outline: "none",
                    },
                    hover: {
                      fill: "#777777",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#777777",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
      <div className="relative">
        {selectedState && (
          <div className="border-t-4 border-[#f3f3f3] group z-1">
            <img src={currentRep.src} width={"1200px"} />
            <div className="absolute pt-[30px] opacity-0 bg-[linear-gradient(to_bottom,_rgba(54,_102,_138,_0.6)_0%,_rgba(49,_89,_120,_0.7)_15%,_rgba(41,_66,_88,_0.8)_30%,_rgba(37,_54,_72,_0.9)_100%)] z-[1] top-0 bottom-0 flex flex-col justify-center px-[15%] left-0 right-0 group-hover:opacity-100 transition-all duration-300 delay-100 ease-linear z-1">
              {currentRep.content !== undefined &&
                currentRep.content
                  .split("/")
                  .map((sentence) => (
                    <p className="lg:text-[24px] text-[18px] text-white text-left tracking-[0.02em] leading-[1.3] ">
                      {sentence}
                    </p>
                  ))}
            </div>
          </div>
        )}
      </div>
      <div
        className={`fixed right-0 bottom-[30%] lg:w-[250px] md:w-[150px] w-[100px] z-5 overflow-hidden  rounded-full border-1 border-white opacity-0 shadow-md shadow-[0_0_8px_0_rgba(0,0,0,1)] group ${
          selectedState
            ? "animate-fade-left animate-duration-300 opacity-100 ease-linear"
            : ""
        }`}
      >
        <img
          src={currentRep.photo}
          width={"250px"}
          className=" group-hover:scale-110 transition-all duration-300 ease-linear"
        />
        <div className="absolute opacity-0 bg-[linear-gradient(to_bottom,_rgba(54,_102,_138,_0.15)_0%,_rgba(49,_89,_120,_0.33)_28%,_rgba(41,_66,_88,_0.7)_76%,_rgba(37,_54,_72,_0.85)_100%)] z-[1] top-0 bottom-0 left-0 right-0 group-hover:opacity-100 transition-all duration-300 delay-100 ease-linear z-1"></div>
        <div className="absolute right-0 bottom-[15%] left-0 flex justify-center items-center flex-col z-2 opacity-0 group-hover:animate-fade-up group-hover:duration-200 group-hover:ease-linear">
          <h5 className="lg:text-[24px] text-[16px] text-white font-bold text-center">
            {currentRep.name}
          </h5>
          <div className="flex items-center lg:gap-3 mt-[20px] justify-center lg:justify-start">
            <Link
              className="hover:text-[#57a4e0]"
              href={
                currentRep.social !== undefined && currentRep.social.facebook
              }
              target="_blank"
            >
              <FaFacebookF className=" m-[5px] p-[-5px] lg:text-[24px] text-[14px]" />
            </Link>
            <Link
              className="hover:text-[#57a4e0]"
              href={
                currentRep.social !== undefined && currentRep.social.twitter
              }
              target="_blank"
            >
              <FaTwitter className="m-[5px] p-[-5px] lg:text-[24px] text-[14px]" />
            </Link>
            <Link
              className="hover:text-[#57a4e0]"
              href={
                currentRep.social !== undefined && currentRep.social.phonenumber
              }
            >
              <FaPhone className="m-[5px] p-[-5px] lg:text-[24px] text-[14px]" />
            </Link>
            <Link
              className="hover:text-[#57a4e0]"
              href={currentRep.social !== undefined && currentRep.social.email}
            >
              <FaEnvelope className="m-[5px] p-[-5px] lg:text-[24px] text-[14px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USAMap;
