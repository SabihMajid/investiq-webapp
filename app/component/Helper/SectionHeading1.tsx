import React from 'react'

type Props ={
    Heading1:string
}


const SectionHeading1 = ({Heading1}:Props) => {
  return (
    <div className="text-center p-3">
    <h1 className="text-[22px] md:text-[30px] text-white font-semibold">{Heading1}</h1>
    {/* About Us Section */}
    <h1 className="text-[15px] mt-1 md:text-[17px] text-white text-opacity-70">
      Experience excellence with us-where quality,innovation,and satisfaction meet.
    </h1>
 </div>
  )
}

export default SectionHeading1