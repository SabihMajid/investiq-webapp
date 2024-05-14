import React from 'react'



type Props={
    Advantageheading:string;
}


const Section3 = ({Advantageheading}:Props) => {
  return (
    <div className="text-center p-3">
    <h1 className="text-[22px] md:text-[30px] text-white font-semibold">{Advantageheading}</h1>
   {/* Advantage Description */}
    <h1 className="text-[15px] mt-1 md:text-[17px] text-white text-opacity-70">
    Unveiling the Remarkable Advantages: Explore Our Exclusive Benefits
 </h1>
  </div>
  )
}

export default Section3