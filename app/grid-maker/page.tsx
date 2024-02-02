"use client";

import React, { useState } from "react";
import Grid from "../components/grid";

const GridMaker = () => {
  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(5);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-black">
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

          <button
            className="text-center bg-gradient-to-br from-blue-600 to-violet-800  px-3 py-1 text-white font-semibold rounded-md hover:text-[#1f1137] hover:bg-white hover:font-semibold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

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

      <div className="grid grid-cols-2">
        <div className="max-w-[15%] flex">
          <div className="bg-black space-x-4 border-opacity-70% border-r text-center ">
            {/* explanation of each option somewhere - perhaps in the box on click? or in a dropdown? */}
            <button className="px-3 py-1 text-white text-opacity-70  rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
              TOOLS
            </button>
            <button className="px-3 py-1 text-white text-opacity-70  rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
              SELECT
            </button>
            <button className="px-3 py-1 text-white text-opacity-70  rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
              SYMBOLS
            </button>
            <button className="px-3 py-1 text-white text-opacity-70  rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
              BACKGROUND COLOUR SELECT
            </button>
            <button className="px-3 py-1 text-white text-opacity-70  rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
              COLOUR SELECT{" "}
            </button>
            <button className="px-3 py-1 text-white text-opacity-70  rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
              DRAW TOOLS
            </button>
            <button className="px-3 py-1 text-white text-opacity-70  rounded-md hover:text-white hover:bg-gradient-to-br from-blue-600 to-violet-800">
              ZOOM + / -
            </button>
          </div>

          <div className="px-2 py-2 w-fu">
            <Grid width={width} height={height} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridMaker;
