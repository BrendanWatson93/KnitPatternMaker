import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="relative bg-black">
  
      <div className="flex justify-center pt-6 pb-2 space-x-12 border-opacity-70% border-b">
      <div className="text-white text-opacity-70 font-bold">logo</div>
        <Link href="/">
          <button className="px-3 py-1 text-white text-opacity-70  rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
            Home
          </button>
        </Link>
        <Link href="/cables&stitches">
          <button className="px-3 py-1 text-white text-opacity-70 rounded-md  hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
            Cables & Stitches
          </button>
        </Link>
        <Link href="/pattern-designer">
          <button className="px-3 py-1 text-white text-opacity-70 rounded-md  hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
            Pattern Designer
          </button>
        </Link>
        <Link href="/tutorials">
          <button className="px-3 py-1 text-white text-opacity-70 rounded-md  hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
            Tutorials
          </button>
        </Link>

        <button className="bg-gradient-to-br from-blue-600 to-violet-800  px-3 py-1 text-white font-semibold rounded-md hover:text-black hover:font-semibold">sign in</button>
      </div>
    </div>
  );
};

export default Nav;
