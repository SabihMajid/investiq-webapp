import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import { FaMoneyBill, FaPiggyBank } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import SectionHeading1 from "../../Helper/SectionHeading1";

const Feature = () => {
  return (
    <div className="pt-20 pb-16 bg-[#032055]">
      {/* Section Heading */}
      <SectionHeading1 Heading1="Why Choose Us"    />
      {/* Define Grid system */}
      <div className="w-4/5 mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 items-center">
        {/* First Feature Card */}
        <div  data-aos="fade-left"
            data-aos-anchor-placement="top-center">
          <div className="p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-orange-700 rounded-md shadow-md ">
            {/* icon */}
            <FaMoneyBill className="mx-auto mt-8 w-16 h-16 text-white " />
            <h1 className="text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold   ">
              Fast Profit
            </h1>
            <p className="text-center text-white text-opacity-70">
              Unlock the potential  for  rapid financial gains by  partnering with us  fast profit in investment !
            </p>
          </div>
        </div>
        {/* Second Feature Card */}
        <div data-aos="fade-left" data-aos-delay="200"
            data-aos-anchor-placement="top-center">
          <div className="p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-red-700 rounded-md shadow-md ">
            {/* icon */}
            <FaPiggyBank className="mx-auto mt-8 w-16 h-16 text-white " />
            <h1 className="text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold   ">
              Instant Withdraw
            </h1>
            <p className="text-center text-white text-opacity-70">
          Seize the moment with lightning-fast withdrawals-Join us for instant transactions now!
            </p>
          </div>
        </div>
        {/* Third Feature Card */}
        <div data-aos="fade-left" data-aos-delay="400"
            data-aos-anchor-placement="top-center">
          <div className="p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-green-700 rounded-md shadow-md ">
            {/* icon */}
            <FaMoneyBillTransfer className="mx-auto mt-8 w-16 h-16 text-white " />
            <h1 className="text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold   ">
             Multi-Currency
            </h1>
            <p className="text-center text-white text-opacity-70">
              Experience instant withdrawals in multiple currencies with our multi-currency feature!
            </p>
          </div>
        </div>
        {/* Four Feature Card */}
        <div data-aos="fade-left" data-aos-delay="600"
            data-aos-anchor-placement="top-center">
          <div className="p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-indigo-900 rounded-md shadow-md ">
            {/* icon */}
            <BiSupport className="mx-auto mt-8 w-16 h-16 text-white " />
            <h1 className="text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold   ">
              Customer Support
            </h1>
            <p className="text-center text-white text-opacity-70">
            For top-notch customer support we have got your back every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
