import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="relative bg-[#150c25]">
  
      <div className="flex justify-center pt-6 pb-10 space-x-12">
      <div className="text-white">logo</div>
        <Link href="/">
          <button className="px-2 text-white font-light rounded-md hover:text-[#1f1137] hover:bg-white">
            Home
          </button>
        </Link>
        <Link href="/cables">
          <button className="px-2 text-white font-light rounded-md hover:text-[#1f1137] hover:bg-white">
            Cables
          </button>
        </Link>
        <Link href="/pattern-designer">
          <button className="px-2 text-white font-light rounded-md hover:text-[#1f1137] hover:bg-white">
            Pattern Designer
          </button>
        </Link>
        <Link href="/blog">
          <button className="px-2 text-white font-light rounded-md hover:text-[#1f1137] hover:bg-white">
            Blog
          </button>
        </Link>

        <div className="text-white">sign in</div>
      </div>
    </div>
  );
};

export default Nav;
