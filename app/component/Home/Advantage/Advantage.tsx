import React from "react";
import Section3 from "../../Helper/Section3";
import advantagImage from "@/public/images/advantage.png";
import Image from "next/image";

const Advantage = () => {
  return (
    <div className="pt-20 pb-16 bg-[#001232]">
      {/* Section Heading */}
      <Section3 Advantageheading="Our Advantage" />
      {/* Define grid System */}
      <div className="w-4/5 mt-14 items-center md:mt-20  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {/* Text Content */}
        <div className="">
          <h1 className="text-lg md:text-2xl font-semibold text-white">
            We are Offering 100% Guarantee.
          </h1>
          <p className="text-white text-opacity-60 mt-4">
            Our 100% satisfaction guarantee reflects our unwavering commitment
            to delivering excellence. We take pride in our products/services and
            are confident you will love them.{" "}
          </p>
          <p className="text-white text-opacity-60 mt-4">
            However, if for any reason you are not completely satisfied, rest
            assured, we will do whatever it takes to make it right, no questions
            asked. Your peace of mind is our priority.{" "}
          </p>
        </div>
        {/* Image Content */}
        <div data-aos="zoom-out" data-aos-anchor-placement="top-center">
          <Image src={advantagImage} alt="Advantage" />
        </div>
      </div>
    </div>
  );
};

export default Advantage;
