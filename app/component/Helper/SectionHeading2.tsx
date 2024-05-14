import React from "react";

type Props = {
  Heading2: string;
};

const SectionHeading2 = ({ Heading2 }: Props) => {
  return  <div className="text-center p-3">
  <h1 className="text-[22px] md:text-[30px] text-white font-semibold">{Heading2}</h1>
  {/* Features Section */}
  <h1 className="text-[25px] mt-1 md:text-[17px] text-white text-opacity-70">
  Great prices, tailored offers, hassle-free. Lets make your dreams a reality!
  </h1>
</div>
};

export default SectionHeading2;
