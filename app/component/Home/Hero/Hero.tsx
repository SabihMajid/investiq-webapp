import React from "react";
import HeroImage from "@/public/images/hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="lg:h-[88vh] bg-[#62269d] md:h-[88vh] sm:h-[75vh] h-[70vh] flex items-center justify-center flex-col ">
      {/* define grid system */}
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-4/5 mx-auto ">
        {/* text Content */}
        <div className="col-span-2">
          <h1
            data-aos="fade-left"
            className="text-[27px] md:text-[35px] lg:text-[45px] mb-4 font-bold text-white leading-[2.4rem] md:leading-[4rem] space-x-8"
          >
            100% Secure <span className="text-yellow-300">Investment</span> Plan
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            className="md:text-[18px] text-[16px] mb-8 text-white opacity-90 font-sans   "
          >
            This is an Investor website Experience 100% Secure Investment: Your
            Gateway To Financial Confidence and Stability.
          </p>
          {/* Input box */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="w-full h-14 relative rounded-full bg-black "
          >
            {/* Input */}
            <input
              type="text"
              placeholder="Please enter your email"
              className="bg-transparent h-full ml-8 text-white outline-none w-[90%]  "
            />
          </div>
          {/* Submit Button */}
          <button  data-aos="zoom-out"
            data-aos-delay="600" className="px-4 py-2 w-[40%] bg-blue-500 hover:bg-yellow-500 transition-all duration-200 rounded-full mt-4 text-white">
            Submit
          </button>
        </div>
        {/* image Content */}
        <div  data-aos="fade-left"
            data-aos-delay="800" className="col-span-3  hidden sm:block mx-auto">
          {/* Image */}
          <Image src={HeroImage} alt="Hero" className="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
