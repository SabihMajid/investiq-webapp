"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const ReviewSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 754 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 754, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <ReviewCard image="/images/c1.png" name="Hamzah"  />
      <ReviewCard image="/images/c2.png" name="Ukasha"  />
      <ReviewCard image="/images/c3.png" name="Hifza"  />
      <ReviewCard image="/images/c4.png" name="Ezan"  />
    </Carousel>
  );
};

export default ReviewSlider;
