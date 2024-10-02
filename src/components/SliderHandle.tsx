import React from "react";

interface SliderHandleProps {
  value: number;
  position: number;
  showDroplet: boolean;
}

const SliderHandle: React.FC<SliderHandleProps> = React.forwardRef<
  HTMLDivElement,
  SliderHandleProps
>(({ value, position, showDroplet }, ref) => (
  <div
    ref={ref}
    className={`absolute top-0 left-0 w-6 h-6 bg-blue-500 rounded-full cursor-pointer transform -translate-y-2/4 ${
      showDroplet && "text-white flex items-center justify-center"
    }`}
    style={{ left: `${position}px` }}
  >
    {showDroplet && <span className="text-sm">{value}</span>}
  </div>
));

export default SliderHandle;
