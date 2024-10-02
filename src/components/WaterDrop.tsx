import React from "react";
import "../index.css"; // Make sure this is pointing to the CSS file containing .water-drop

interface WaterDropProps {
  value: number;
}

const WaterDrop: React.FC<WaterDropProps> = ({ value }) => {
  return (
    <div className="flex justify-center items-center h-8 w-8 relative">
      <div className="water-drop h-8 w-8" />
      <span className="w-full h-full absolute top-1/2 left-1/2 transform -translate-y-1/3">
        {value}
      </span>
    </div>
  );
};

export default WaterDrop;
