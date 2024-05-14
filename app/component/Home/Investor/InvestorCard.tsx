import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

// Define Props type
type Props = {
  image: string;
  invest: string;
  name: string;
};

const InvestorCard = ({ image, invest, name }: Props) => {
  return (
    <div className="bg-blue-900 p-6">
      {/* Image */}
      <Image
        src={image}
        alt="name"
        width={300}
        height={300}
        className="-my-12 "
      />
      <p className="mt-16 text-white text-lg text-center">{name}</p>
      <p className="mt-2 text-opacity-80 text-base text-green-300 text-center">
        ${invest}
      </p>
      {/* Social icon */}
      <div className="mt-4 text-white flex items-center justify-center space-x-4">
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedin />
        <FaInstagram />
      </div>
    </div>
  );
};

export default InvestorCard;
