import React from "react";

export default function Home() {
  return (
    <div className="min-h-[90vh] bg-[#150c25]">
      <div className="text-white text-5xl font-light">TESTING TEXT</div>
      <div className="grid grid-cols-2 justify-items-center gap-8 px-8">


        <div className="w-full text-center p-6 border border-[#5d34a5] bg-gradient-to-br from-[#482980] to-[#291749] rounded-3xl">
          {" "}
          <p className="text-white text-3xl font-light">HEADINGS</p>
          <p className="text-white py-2 text-opacity-70">
            TESTING TEXT COLOURS
          </p>
          <button className="bg-violet-400 px-3 py-1 text-white font-semibold rounded-md hover:text-[#1f1137] hover:bg-white hover:font-semibold">
            TEST BUTTON
          </button>
        </div>

          <div className="w-full text-center p-6 border border-[#5d34a5] bg-gradient-to-br from-[#482980] to-[#291749] rounded-3xl">
            {" "}
            <p className="text-white text-3xl font-light">HEADINGS</p>
            <p className="text-white py-2 text-opacity-70">
              TESTING TEXT COLOURS
            </p>
            <button className="bg-violet-400 px-3 py-1 text-white font-semibold rounded-md hover:text-[#1f1137] hover:bg-white hover:font-semibold">
              TEST BUTTON
            </button>
          </div>


      </div>
    </div>
  );
}

// bg-white rounded-lg p-8 bg-opacity-30 backdrop-filter backdrop-blur-lg
// bg-gradient-to-br from-[#5d34a5] to-[#482980]
