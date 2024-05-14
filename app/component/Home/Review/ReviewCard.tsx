import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

// type props
type Props={
    image:string;
    name:string;
}



const ReviewCard = ({image,name}:Props) => {
  return <div className="p-6 m-4 bg-[#032055]">
    {/* review star */}
    <div className="flex items-center space-x-2 mt-4">
        <FaStar className="w-4 h-4 text-yellow-500" />
        <FaStar className="w-4 h-4 text-yellow-500" />
        <FaStar className="w-4 h-4 text-yellow-500" />
        <FaStar className="w-4 h-4 text-yellow-500" />
        <FaStar className="w-4 h-4 text-yellow-500" />
    </div>
    {/* review text */}
    <p className="mt-4 text-white text-opacity-70">This website is a true gem and a necessity for investors. With their assistance, I have optimized my investments in the best possible manner, and I am now loyal to their expertise.</p>
    {/* Profile */}
    <div className="flex  mt-8 items-center space-x-4">
        <div>
            <Image src={image}  alt="name" width={60} height={60}  />
        </div>
        <div>
            <h1 className="text-lg text-white uppercase ">{name}</h1>
            <p className="mt-[0.3rem] text-[15px] text-white text-opacity-70">CEO , GG</p>
        </div>
    </div>
  </div>;
};

export default ReviewCard;
