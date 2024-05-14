import React from "react";

type Props={
    heading5:string;
 }

const Section5 = ({heading5}:Props) => {
  return  (
    <div className="text-center p-3">
    <h1 className="text-[22px] md:text-[30px] text-white font-semibold">{heading5}</h1>
   {/* Top Investor Description */}
    <h1 className="text-[15px] mt-1 md:text-[17px] text-white text-opacity-70">
    Stay Informed, Stay Ahead: Delve into Our Latest Blogs for Cutting-Edge Insights
  </h1>
  </div>
    )
};

export default Section5;
