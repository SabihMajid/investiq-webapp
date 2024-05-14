import React from "react";
import SectionReview from "../../Helper/SectionReview";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return <div className="pt-20 pb-16 bg-[#6a15e1]">
    {/* Sectiom Heading */}
    <SectionReview  heading5="Client Reviews" />
    {/* REview Slider */}
    <div className="w-4/5 mt-16 mx-auto">
        {/* Review Slider Component */}
        <ReviewSlider/>
    </div>
  </div>;
};

export default Review;
