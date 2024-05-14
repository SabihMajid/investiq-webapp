import React from "react";
import Section4 from "../../Helper/Section4";
import InvestorCard from "./InvestorCard";

const Investor = () => {
  return (
    <div className="pt-20 pb-16 bg-[#032055]">
      {/* Section Heading */}
      <Section4 heading4="Our Top Investers" />
      {/* Define grid System */}
      <div className="w-4/5 mt-16 mx-auto grid gap-12 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 ">
        {/* Investor Profile Card 1 */}
        <div data-aos="zoom-in" 
            data-aos-anchor-placement="top-center">
          <InvestorCard
            image="/images/i1.jpg"
            invest="84567867"
            name="Hamzah"
          />
        </div>
        {/* Investor Profile Card 2 */}
        <div data-aos="zoom-in" data-aos-delay="200"
            data-aos-anchor-placement="top-center">
          <InvestorCard image="/images/i2.jpg" invest="79567867" name="Hifza" />
        </div>
        {/* Investor Profile Card 3 */}
        <div data-aos="zoom-in" data-aos-delay="400"
            data-aos-anchor-placement="top-center">
          <InvestorCard
            image="/images/i3.jpg"
            invest="80567867"
            name="Ukasha"
          />
        </div>
        {/* Investor Profile Card 4 */}
        <div data-aos="zoom-in" data-aos-delay="600"
            data-aos-anchor-placement="top-center">
          <InvestorCard image="/images/i4.jpg" invest="54567867" name="Ezan" />
        </div>
      </div>
    </div>
  );
};

export default Investor;
