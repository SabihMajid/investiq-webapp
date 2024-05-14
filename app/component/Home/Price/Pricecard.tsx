import React from "react";

// type
type Props = {
  bg: string;
  days: string;
  percentage: string;
  minInvest: string;
  maxInvest: string;
};

const Pricecard = ({ bg, maxInvest, days, minInvest, percentage }: Props) => {
  return (
    <div className={`${bg} p-6 text-center rounded-lg`}>
      <h1 className="text-[17px] font-bold md:text-[20px] text-white mt-8">
        After {days} days
      </h1>
      <h1 className="w-4/5 mx-auto bg-orange-600 text-white text-[23px] font-bold p-4 rounded-lg  mt-6 ">
        {percentage}%
      </h1>
      <h1 className="mt-4 text-[17px] text-white mb-4">
        {" "}
        Minimum Invest : ${minInvest}{" "}
      </h1>
      <h1 className="mt-4 text-[17px] text-white mb-4">
        Maximum Invest :${maxInvest}{" "}
      </h1>
        <div className="text-center mt-8"> <button className="rounded-md px-10 py-2.5 overflow-hidden group bg-yellow-400 hover:bg-gradient-to-r hover:from-yellow-300 hover:to-red-400 relative text-white  hover:ring-offset-neutral-100 hover:right-0 hover:ring-yellow-500 transition-all ease-linear duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative"> Deposite $</span>
          </button>
          </div>
    </div>
  );
};

export default Pricecard;
