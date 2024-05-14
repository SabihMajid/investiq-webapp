import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";

// props type
type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  return (
    <div className="h-[12vh] bg-gray-600 shadow-md">
      <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh]">
        {/* logo */}
        <h1 className="text-[16px] md:text-[25px] font-bold text-white">
          <span className="text-[27px] md:text-[40px] text-yellow-400">In</span>
          Vest<span className="text-[27px] md:text-[40px] text-yellow-400">iQ</span>
        </h1>
        {/* Nav Link */}
        <ul className="hidden lg:flex items-center space-x-10">
          <li className="text-[17px] font-semibold  cursor-pointer transition-all duration-200 text-white hover:text-yellow-300">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
            <Link href="/">About</Link>
          </li>
          <li className="text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
            <Link href="/">Investment</Link>
          </li>
          <li className="text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
            <Link href="/">Services</Link>
          </li>
          <li className="text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
            <Link href="/">Blog</Link>
          </li>
          <li className="text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
            <Link href="/">Contact</Link>
          </li>
        </ul>
        {/* Login Button and Navbar Menu */}
        <div className="flex items-center space-x-5">
          {/* Login Button */}
          <button className="rounded-md px-10 py-2.5 overflow-hidden group bg-yellow-400 hover:bg-gradient-to-r hover:from-yellow-300 hover:to-red-400 relative text-white  hover:ring-offset-neutral-100 hover:right-0 hover:ring-yellow-500 transition-all ease-linear duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative"> Login </span>
          </button>
          {/* Burger Menu */}
          <FaBars
            onClick={openNav}
            className="w-8 h-8 text-white cursor-pointer lg:hidden "
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
