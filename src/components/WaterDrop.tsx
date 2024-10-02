import React from "react";

interface WaterDropProps {
  position: number;
  value: number;
}

const WaterDrop: React.FC<WaterDropProps> = ({ position, value }) => (
  <div
    className="flex justify-center items-center h-8 w-8 absolute top-5 -translate-x-1/4 cursor-pointer"
    style={{ marginTop: "10px", left: `${position}px` }}
  >
    <div className="water-drop h-8 w-8" />
    <span className="text-white font-bold absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
      {value}
    </span>
  </div>
);

export default WaterDrop;
