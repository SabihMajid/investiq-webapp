import React from "react";
import Section5 from "../../Helper/Section5";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="pt-20 pb-16 bg-[#001232]">
      {/* Section Heading */}
      <Section5 heading5="Latest Blog" />
      {/* Define the grid System */}
      <div className="w-4/5 mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog Card Component 1 */}
        <div data-aos="zoom-out" 
            data-aos-anchor-placement="top-center">
          <BlogCard
            image="/images/b1.jpg"
            tittle="10 Reason to invest For Your Future"
          />
        </div>
        {/* Blog Card Component 2 */}
        <div data-aos="zoom-out" data-aos-delay="200"
            data-aos-anchor-placement="top-center">
          <BlogCard
            image="/images/b2.jpg"
            tittle="5 Reason to invest For Your Future"
          />
        </div>
        {/* Blog Card Component 3 */}
        <div data-aos="zoom-out" data-aos-delay="400"
            data-aos-anchor-placement="top-center">
          <BlogCard
            image="/images/b3.jpg"
            tittle="7 Reason to invest For Your Future"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
