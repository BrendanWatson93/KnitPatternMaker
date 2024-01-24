import Link from "next/link";
import React from "react";

const patterndesigner = () => {
  return (
    <div>
      <div className="text-center">
        <h1>Select Builder</h1>
      </div>

<div className="">
<div className="text-center grid grid-cols-2">
      <div>
        <h1>create using grid</h1>
        <div className="aspect-[3/2] rounded-md bg-slate-600 basis-1/3"></div>
        <p>a simple grid will be provided with buttons which can be used to make a knitting pattern to follow</p>
        <Link href="/grid-maker">
        <button className="text-black py-1 px-2 text-lg hover:bg-gray-500 hover:text-white rounded-lg bg-white">USE DESIGN GRID</button>
        </Link>
      </div>
    

      <div>
        <h1>use design software</h1>
        <div className="aspect-[3/2] rounded-md bg-slate-600 basis-1/3"></div>
        <p>select a template design, use the cables etc to create a full knitting pattern using software ive designed</p>
        <Link href="/maker">
        <button className="text-black py-1 px-2 text-lg hover:bg-gray-500 hover:text-white rounded-lg bg-white">USE THIS SOFTWARE</button>
        </Link>
      </div>

      </div>
      </div>
    </div>
  );
};

export default patterndesigner;
