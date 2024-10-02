import React from "react";

interface SliderLabelsProps {
  min: number;
  max: number;
}

const SliderLabels: React.FC<SliderLabelsProps> = ({ min, max }) => (
  <div className="flex justify-between mb-2">
    <span>{min}</span>
    <span>{max}</span>
  </div>
);

export default SliderLabels;
