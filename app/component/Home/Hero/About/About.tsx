/* eslint-disable react/no-unescaped-entities */
import SectionHeading from "@/app/component/Helper/SectionHeading";
import React from "react";
import { BiMoney } from "react-icons/bi";
import { BsCheck2Square } from "react-icons/bs";
import { GiSecurityGate } from "react-icons/gi";
import AboutImage from "@/public/images/about.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-20 pb-16 bg-[#001232] ">
      {/* Section Heading */}
      <SectionHeading heading="About Us" />
      {/* Define Grid System */}
      <div className="w-4/5 mt-14 items-center md:mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Text Content */}
        <div>
          <h1 className="text-[19px] md:text-[25px] font-semibold text-white">
            A faster way to do just about anything
          </h1>
          <p className="text-white text-opacity-60 mt-4">
            Experience unmatched efficiency with our solutions. Through our
            offerings, accomplish tasks faster, easier, and better. Consistently
            organized, here you will find the best experience that undoubtedly
            piques your interest
          </p>
          {/* icon List item 1 */}
          <div className="flex mt-8 items-center space-x-4 ">
            {/* icon box */}
            <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center flex-col justify-center">
              <BsCheck2Square className="w-[1.3rem] h-[1.3rem] text-white" />
            </div>
            {/* icon text Content */}
            <div>
              <h1 className="text-[16px] md:text-[22px] text-white font-semibold">
                Licensed & Certified
              </h1>
              <p className="mt-1 text-[15px] text-white text-opacity-70 ">
                {" "}
                "We affirm top-notch standards and qualifications."
              </p>
            </div>
          </div>
          {/* icon List item 2 */}
          <div className="flex mt-8 items-center space-x-4 ">
            {/* icon box */}
            <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center flex-col justify-center">
              <BiMoney className="w-[1.3rem] h-[1.3rem] text-white" />
            </div>
            {/* icon text Content */}
            <div>
              <h1 className="text-[16px] md:text-[22px] text-white font-semibold">
                {" "}
                Saving & Investment
              </h1>
              <p className="mt-1 text-[15px] text-white text-opacity-70 ">
                {" "}
                "We affirm top-notch standards and qualifications."
              </p>
            </div>
          </div>
          {/* icon List item 3 */}
          <div className="flex mt-8 items-center space-x-4 ">
            {/* icon box */}
            <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center flex-col justify-center">
              <GiSecurityGate className="w-[1.3rem] h-[1.3rem] text-white" />
            </div>
            {/* icon text Content */}
            <div>
              <h1 className="text-[16px] md:text-[22px] text-white font-semibold">
                100% Secure Investment
              </h1>
              <p className="mt-1 text-[15px] text-white text-opacity-70 ">
                {" "}
                "We affirm top-notch standards and qualifications."
              </p>
            </div>
          </div>
        </div>
        {/* Image Content */}
        <div>
          {/* Image */}
          <Image
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            src={AboutImage}
            alt="about"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
