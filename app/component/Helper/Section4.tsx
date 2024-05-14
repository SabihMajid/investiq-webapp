import React from "react";

type Props={
   heading4:string;
}


const Section4 = ({heading4}:Props) => {
  return (
  <div className="text-center p-3">
  <h1 className="text-[22px] md:text-[30px] text-white font-semibold">{heading4}</h1>
 {/* Top Investor Description */}
  <h1 className="text-[15px] mt-1 md:text-[17px] text-white text-opacity-70">
  Investor Champions of Investment: Our Top Investors Lead the Way.
</h1>
</div>
  )
}

export default Section4;
