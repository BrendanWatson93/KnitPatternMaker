// components/Grid.js
import React, { useEffect, useState } from "react";

const Grid = ({ width, height }: { width: number; height: number }) => {
    const handleCellClick = (rowIndex: number, colIndex: number) => {
      console.log(`You clicked on cell (${rowIndex}, ${colIndex})`);
    };
  
    return (
      <div className="flex flex-col gap-y-1">
        {Array.from({ length: height }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-x-1">
            {Array.from({ length: width }).map((_, colIndex) => (
              <div
                key={colIndex+rowIndex}
                className="w-[20px] h-[20px] bg-white hover:cursor-pointer"
                onClick={() => handleCellClick(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
  );
};

export default Grid;
