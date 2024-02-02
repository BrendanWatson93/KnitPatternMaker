import Link from "next/link";
import React from "react";

const patterndesigner = () => {
  return (
    <div className="min-h-[90vh] bg-black">
      <h1 className="text-white text-center pt-8 pb-4 text-4xl font-light">
        Select Builder
      </h1>

      <div className="grid grid-cols-2 gap-2">
      <div className="text-center justify-items-center  px-8">
        <div className="text-center p-4  bg-gradient-to-br from-blue-600 to-violet-800 rounded-3xl ">
          <h1 className="text-white text-3xl pb-2 font-light">Create using grid</h1>
          <div className="aspect-[3/2] rounded-md bg-slate-600 basis-1/3"></div>
          <p className="text-white py-2 text-opacity-70">
            a simple grid will be provided with buttons which can be used to
            make a knitting pattern to follow
          </p>
          <Link href="/grid-maker">
            <button className="bg-violet-400 px-3 py-1 text-white font-semibold rounded-md hover:text-[#1f1137] hover:bg-white hover:font-semibold">
              USE THIS SOFTWARE
            </button>
          </Link>
        </div>
      </div>

      <div className="text-center justify-items-center gap-8 px-8">
        <div className="text-center p-4 bg-gradient-to-br from-blue-600 to-violet-800 rounded-3xl ">
          <h1 className="text-white text-3xl pb-2 font-light">
            use design software
          </h1>
          <div className="aspect-[3/2] rounded-md bg-slate-600 basis-1/3"></div>
          <p className="text-white py-2 text-opacity-70">
            select a template design, use the cables etc to create a full
            knitting pattern using software ive designed
          </p>
          <Link href="/maker">
            <button className="bg-violet-400 px-3 py-1 text-white font-semibold rounded-md hover:text-[#1f1137] hover:bg-white hover:font-semibold">
              USE THIS SOFTWARE
            </button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default patterndesigner;
