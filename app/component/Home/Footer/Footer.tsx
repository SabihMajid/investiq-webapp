import React from "react";

const Footer = () => {
  return (
    <div className="pt-12 bg-black pb-12">
      {/* Define our Grid System */}
      <div className="w-4/5 mx-auto grid grid-cols-1 border-b-[2.5px] border-b-slate-300 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
        {/* 1st part footer */}
        <div className="lg:mx-auto mx-0">
          {/* Logo */}
          <h1 className="text-[16px] md:text-[25px] font-bold text-white">
            <span className="text-[27px] md:text-[40px] text-yellow-400">
              In
            </span>
            Vest
            <span className="text-[27px] md:text-[40px] text-yellow-400">
              iQ
            </span>
          </h1>
          <p className="text-white text-opacity-60 mt-2">
            This is Investor website Experience 100% Secure Investment Your
            Gateway Financial Confidence.
          </p>
          <p className="mt-4 text-white">support@gmail.com</p>
          <p className="text-red-500 text-xl font-bold mt-2">
            +(92) 123 456 790
          </p>
        </div>
        {/* 2nd part of footer */}
        <div className="lg:mx-auto mx-0">
          <h1 className="text-lg text-white font-semibold mb-6 ">Company</h1>
          <p className="text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed ">
            About
          </p>
          <p className="text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed ">
            Affiliate
          </p>
          <p className="text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed ">
           Career & Culture
          </p>
          <p className="text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed ">
            Blog
          </p>
          <p className="text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed ">
            Press
          </p>
        </div>
        {/* 3rd part of footer */}
        <div className="lg:mx-auto mx-0">
          <h1 className="text-lg text-white font-semibold mb-6 ">Our Information</h1>
          <p className="text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed ">
            Return Policy
          </p>
          <p className="text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed ">
            Privacy Policy
          </p>
          <p className="text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed ">
           Terms & Condition
          </p>
          <p className="text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed ">
            Site Map
          </p>
          <p className="text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed ">
            Store Hours
          </p>
        </div>
        {/* 4th part of footer */}
        <div className="lg:mx-auto mx-0">
          <h1 className="text-lg text-white font-semibold mb-6 ">About Us</h1>
          <p className="text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed ">
            Support Center
          </p>
          <p className="text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed ">
            Customer Support
          </p>
          <p className="text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed ">
           About Us
          </p>
          <p className="text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed ">
            Copyright
          </p>
          <p className="text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed ">
            Popular Campaign
          </p>
        </div>
      </div>
      {/* copyright text */}
      <div className="w-4/5 pt-5 mx-auto mt-4 text-[15px] text-white opacity-75">Copyright © 2024 by Webdev Warriros</div>
    </div>
  );
};

export default Footer;
