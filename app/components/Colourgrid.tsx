import React, { useState } from "react";

const Colourgrid = ({
  setSelectedColour,
}: {
  setSelectedColour: (colour: string) => void;
}) => {
  const [colourGridOpen, setcolourGridOpen] = useState(false);

  // const handleColorSelection = (colour: string) => {
  //   Selectedcolour();
  // }

  return (
    <div>
      <button
        className="px-3 py-2 text-white text-opacity-70 rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800"
        onClick={() => setcolourGridOpen(!colourGridOpen)}
      >
        COLOUR
      </button>
      {colourGridOpen && (
        <div className="grid w-32 h-72 grid-rows-10 grid-cols-3">
          {/* 
            each row includes
                1-greyscale
                2-red
                3-orange
                4-yellow
                5-green
                6-blue
                7-teal
                8-pink
                9-violet
                10-brown
            */}
          <div className="grid w-32 h-72 grid-rows-10 grid-cols-3">
            <div
              onClick={() => setSelectedColour("white")}
              className="bg-white"
              id="white"
            ></div>

            <div className="bg-gray-500" id="gray-500"></div>
            <div className="bg-black" id="black"></div>

            <div className="bg-yellow-900" id="yellow-900"></div>
            <div className="bg-yellow-950" id="yellow-950"></div>
            <div className="bg-orange-950" id="orange-950"></div>

            <div className="bg-pink-400" id="pink-400"></div>
            <div className="bg-pink-500" id="pink-500"></div>
            <div className="bg-pink-700" id="pink-700"></div>

            <div className="bg-red-400" id="red-400"></div>
            <div className="bg-red-500" id="red-500"></div>
            <div className="bg-red-800" id="red-800"></div>

            <div className="bg-orange-400" id="orange-400"></div>
            <div className="bg-orange-500" id="orange-500"></div>
            <div className="bg-orange-700" id="orange-700"></div>

            <div className="bg-yellow-300" id="yellow-300"></div>
            <div className="bg-yellow-500" id="yellow-500"></div>
            <div className="bg-yellow-700" id="yellow-700"></div>

            <div className="bg-green-400" id="green-400"></div>
            <div className="bg-green-500" id="green-500"></div>
            <div className="bg-green-700" id="green-700"></div>

            <div className="bg-cyan-400" id="cyan-400"></div>
            <div className="bg-cyan-500" id="cyan-500"></div>
            <div className="bg-cyan-700" id="cyan-700"></div>

            <div className="bg-blue-400" id="blue-400"></div>
            <div className="bg-blue-500" id="blue-500"></div>
            <div className="bg-blue-700" id="blue-700"></div>

            <div className="bg-violet-400" id="violet-400"></div>
            <div className="bg-violet-500" id="violet-500"></div>
            <div className="bg-violet-700" id="violet-700"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Colourgrid;
