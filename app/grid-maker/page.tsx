"use client";

import React, { useState, useEffect } from "react";
import Grid from "../components/grid";
import Colourgrid from "../components/Colourgrid";

const GridMaker = () => {
  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(5);
  const [selectedColour, setSelectedcolour] = useState("");
  useEffect(() => {
    console.log("Selected colour: ", selectedColour);
  }
  , [selectedColour]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-black max-w-[100vw] overflow-hidden">
      <h1 className="text-white text-5xl text-center pt-8">Design Grid</h1>
      {/* hide this h1 when submit button is pressed */}
      <div className="flex justify-center">
        <h1 className="text-white py-6 text-center text-opacity-70 max-w-[70%]">
          Welcome to the grid knit designer. Here you can draw your own knitting
          charts using colour and symbols to produce your own designs. To begin,
          please select the size of the knit grid you would like to use - This
          can also be edited later using the toolbar
        </h1>
        
      </div>

{/* Create a grid based on the numbers in the width and height inputs*/}
      <div className="flex justify-center pb-8">
        <form onSubmit={handleFormSubmit}>
          <label className="text-white text-opacity-70 px-2 ">
            Width:
            <input
              className="text-black px-2"
              type="number"
              value={width}
              onChange={(e) => setWidth(parseInt(e.target.value))}
            />
          </label>
          <label className="text-white text-opacity-70 px-2">
            Height:
            <input
              className="text-black px-2"
              type="number"
              value={height}
              onChange={(e) => setHeight(parseInt(e.target.value))}
            />
          </label>
        </form>
      </div>

{/* Top toolbar for the grid */}
      <div>
        <div className="bg-black border-opacity-70% border-b border-t space-x-12 flex justify-center py-2">
          <button className="px-3 py-1 text-white text-opacity-70  rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
            New
          </button>
          <button className="px-3 py-1 text-white text-opacity-70  rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
            Save
          </button>
          <button className="px-3 py-1 text-white text-opacity-70  rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
            Undo
          </button>
          <button className="px-3 py-1 text-white text-opacity-70  rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
            Clear All
          </button>
        </div>
      </div>


{/* Leftside toolbar - all tools for editing the grid */}
      <div className="flex ">

          <div className="bg-black space-x-4 border-opacity-70% border-r text-center ">
            {/* explanation of each option somewhere - perhaps in the box on click? or in a dropdown? */}
            <button className="px-3 py-2 text-white text-opacity-70 rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
              TOOLS
            </button>
            <div className="border-b border-white border-opacity-70"></div>
            <button className="px-3 py-2 text-white text-opacity-70  rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
              SELECT
            </button>
            <div className="border-b border-white border-opacity-70"></div>
            <button className="px-3 py-2 text-white text-opacity-70  rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
              SYMBOLS
            </button>
            <div className="border-b border-white border-opacity-70"></div>
            <button className="px-3 py-2 text-white text-opacity-70  rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
              BACKGROUND
            </button>

            <div className="border-b border-white border-opacity-70"></div>
            <Colourgrid setSelectedColour={setSelectedcolour} />
           

            <div className="border-b border-white border-opacity-70"></div>
            <button className="px-3 py-2 text-white text-opacity-70  rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
              DRAW TOOLS
            </button>
            <div className="border-b border-white border-opacity-70"></div>
            <button className="px-3 py-2 text-white text-opacity-70  rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
              ZOOM + / -
            </button>
            <div className="border-b border-white border-opacity-70"></div>
          </div>

          <div className="px-2 overflow-auto py-2 w-full flex">

              <Grid width={width} height={height} />
  
          </div>

     
      </div>
    </div>
  );
};

export default GridMaker;
