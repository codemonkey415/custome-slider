import React from "react";

interface SliderHandleProps {
  position: number;
  showDroplet: boolean;
  value: number;
}

const SliderHandle: React.FC<SliderHandleProps> = React.forwardRef<
  HTMLDivElement,
  SliderHandleProps
>(({ position, showDroplet, value }, ref) => (
  <div
    ref={ref}
    className={`absolute top-0 border-[2px] border-white transform left-0 w-4 h-6 bg-[#B21BF9] rounded-full cursor-pointer`}
    style={{ left: `${position}px` }}
  >
    {showDroplet && (
      <div className="text-white flex items-center justify-center">{value}</div>
    )}
  </div>
));

export default SliderHandle;
