import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full  bg-black bottom-0">
      <div className="box-content bg-white"></div>

      <div className="py-8 flex border-opacity-70% border-t justify-center space-x-3">
        <button className="px-2 text-white text-opacity-70 rounded-md  hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">HOME</button>
        <button className="px-2 text-white text-opacity-70 rounded-md  hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">About</button>
        <button className="px-2 text-white text-opacity-70 rounded-md  hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">FAQs</button>
        <button className="px-2 text-white text-opacity-70 rounded-md  hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">Social Links</button>
      </div>
    </div></div>
  );
};

export default Footer;
