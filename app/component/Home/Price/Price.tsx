import React from "react";
import SectionHeading2 from "../../Helper/SectionHeading2";
import Pricecard from "./Pricecard";

const Price = () => {
  return (
    <div className="pt-20 pb-16 bg-[#5507e1] ">
      {/* Section heading */}
      <SectionHeading2 Heading2="Our Pricing" />
      {/* Define grid system */}
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
        {/* Price Card 1 */}
        <div data-aos="fade-right" 
            data-aos-anchor-placement="top-center">
          <Pricecard
            bg="bg-teal-600"
            days="20"
            percentage="100"
            minInvest="100"
            maxInvest="1000"
          />
        </div>
        {/* Price Card 2 */}
        <div data-aos="fade-right" data-aos-delay="200"
            data-aos-anchor-placement="top-center">
          <Pricecard
            bg="bg-red-900"
            days="40"
            percentage="400"
            minInvest="400"
            maxInvest="4000"
          />
        </div>
        {/* rice Card 3 */}
        <div data-aos="fade-right" data-aos-delay="400"
            data-aos-anchor-placement="top-center">
          <Pricecard
            bg="bg-green-800"
            days="50"
            percentage="500"
            minInvest="500"
            maxInvest="5000"
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
