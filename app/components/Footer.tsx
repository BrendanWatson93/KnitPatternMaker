import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full  bg-[#150c25] bottom-0">
      <div className="box-content bg-white"></div>

      <div className="py-8 flex justify-center space-x-3">
        <button className="px-2 text-white font-semibold rounded-md hover:text-[#5d34a5] hover:bg-white hover:font-semibold">HOME</button>
        <button className="px-2 text-white font-semibold rounded-md hover:text-[#5d34a5] hover:bg-white hover:font-semibold">About</button>
        <button className="px-2 text-white font-semibold rounded-md hover:text-[#5d34a5] hover:bg-white hover:font-semibold">FAQs</button>
        <button className="px-2 text-white font-semibold rounded-md hover:text-[#5d34a5] hover:bg-white hover:font-semibold">Social Links</button>
      </div>
    </div></div>
  );
};

export default Footer;
