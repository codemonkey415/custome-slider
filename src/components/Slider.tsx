import React, { useState, useEffect, useRef } from "react";

interface SliderProps {
  min: number;
  max: number;
  initialValue: number;
  showMinMaxValues?: boolean;
  showDroplet?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  initialValue,
  showMinMaxValues = true,
  showDroplet = true,
}) => {
  const [value, setValue] = useState(initialValue);
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handlePosition = (value: number) => {
    const sliderWidth = sliderRef.current?.offsetWidth ?? 0;
    const handleWidth = handleRef.current?.offsetWidth ?? 0;
    const percentage = (value - min) / (max - min);
    return Math.min(
      Math.max((sliderWidth - handleWidth) * percentage, 0),
      sliderWidth - handleWidth
    );
  };

  const snapValue = (x: number) => {
    const sliderWidth = sliderRef.current?.offsetWidth ?? 0;
    const handleWidth = handleRef.current?.offsetWidth ?? 0;
    const percentage = Math.min(
      Math.max(x / (sliderWidth - handleWidth), 0),
      1
    );
    const newValue = Math.round(percentage * (max - min)) + min;
    setValue(newValue);
  };

  const onMouseDrag = (event: MouseEvent) => {
    const sliderLeft = sliderRef.current?.getBoundingClientRect().left ?? 0;
    const position = event.clientX - sliderLeft;
    snapValue(position);
  };

  const onTouchDrag = (event: TouchEvent) => {
    const sliderLeft = sliderRef.current?.getBoundingClientRect().left ?? 0;
    const position = event.touches[0].clientX - sliderLeft;
    snapValue(position);
  };

  const handleDragStart = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    if (event.type === "mousedown") {
      document.addEventListener("mousemove", onMouseDrag);
      document.addEventListener("mouseup", handleDragEnd);
    } else if (event.type === "touchstart") {
      document.addEventListener("touchmove", onTouchDrag);
      document.addEventListener("touchend", handleDragEnd);
    }
  };

  const handleDragEnd = () => {
    document.removeEventListener("mousemove", onMouseDrag);
    document.removeEventListener("mouseup", handleDragEnd);
    document.removeEventListener("touchmove", onTouchDrag);
    document.removeEventListener("touchend", handleDragEnd);
  };

  return (
    <div className="w-full max-w-md mx-auto my-4">
      <div className="flex justify-between mb-2 items-center gap-2">
        <span
          className={`font-bold text-xl ${
            showMinMaxValues ? "visible" : "invisible"
          }`}
        >
          {min}
        </span>
        <div
          ref={sliderRef}
          className="relative w-full h-6 bg-gray-300 rounded-full"
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
        >
          <div className="relative">
            <div
              ref={handleRef}
              className={`absolute top-0 border-[2px] border-white transform left-0 w-4 h-6 bg-[#B21BF9] rounded-full cursor-pointer ${
                showDroplet && "text-white flex items-center justify-center"
              }`}
              style={{ left: `${handlePosition(value)}px` }}
            ></div>
            {/* Water Drop */}
            {showDroplet && (
              <div
                className="flex justify-center items-center h-8 w-8 absolute top-5 -translate-x-1/4 cursor-pointer"
                style={{
                  marginTop: "10px",
                  left: `${handlePosition(value)}px`,
                }}
              >
                <div className="water-drop h-8 w-8" />
                <span className="text-white font-bold absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  {value}
                </span>
              </div>
            )}
            {/* Water Drop End */}
          </div>
        </div>
        <span
          className={`font-bold text-xl ${
            showMinMaxValues ? "visible" : "invisible"
          }`}
        >
          {max}
        </span>
      </div>
    </div>
  );
};

export default Slider;
