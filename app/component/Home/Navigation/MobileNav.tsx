import Link from "next/link";
import React from "react";
import { FaXmark } from "react-icons/fa6";

// Props type
type Props = {
  nav: boolean;
  closeNav: any;
};

const MobileNav = ({ closeNav, nav }: Props) => {
  const navOpenStyle = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={
        "transform ${navOpenStyle} transition-all duration-500 after:bg-fixed top-0 left-0 z-[200] h-full right-0 buttom-0 bg-blue-500 lg:hidden"
      }
    >
      {/* close icon */}
     <div>
    
        {" "}
        <FaXmark
          onClick={closeNav}
          className="w-8 h-8 absolute  top-10 text-white z-[202] right-8 hover:text-red-400"
        />
     </div>
      {/* nav Links */}
      <ul className="relative z-[201] space-y-10 flex flex-col items-center justify-center h-screen lg:hidden">
        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-500  transition-all duration-200">
          <Link href="/">Home</Link>
        </li>
        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <Link href="/">About</Link>
        </li>
        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <Link href="/">Investment</Link>
        </li>
        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <Link href="/">Services</Link>
        </li>
        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <Link href="/">Blog</Link>
        </li>
        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
