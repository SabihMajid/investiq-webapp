import Image from "next/image";
import React from "react";

// Props type
type Props = {
  image: string;
  tittle: string;
};

const BlogCard = ({ image, tittle }: Props) => {
  return (
    <div>
      {/* image  */}
      <Image
        src={image}
        alt="tittle"
        width={400}
        height={400}
        className="object-cover rounded-3xl"
      />
      <div className=" flex mt-6 items-center space-x-4">
        <span className="text-[15px] text-white text-opacity-60">
          14 March 2024
        </span>
        <span className="text-[15px] text-white text-opacity-60">By Admin</span>
      </div>
      <h1 className="mt-4 cursor-pointer text-xl text-white font-semibold underline">
        {tittle}
      </h1>
      <p className="text-lg cursor-pointer mt-4 text-white underline">
        Read More
      </p>
    </div>
  );
};

export default BlogCard;
