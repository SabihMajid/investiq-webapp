import React from "react";

type Props={
    heading:string;
}

const SectionHeading = ({heading}:Props) => {
  return <div className="text-center p-3">
    <h1 className="text-[22px] md:text-[30px] text-white font-semibold">{heading}</h1>
   {/* 100% Secure  Description */}
    <h1 className="text-[15px] mt-1 md:text-[17px] text-white text-opacity-70">
INvestor provides investors at all levels with the tools and resources for success.
 </h1>
  </div>;
};

export default SectionHeading;
