import React from "react";

interface SliderControlsProps {
  minValue: number;
  maxValue: number;
  initialValue: number;
  debouncedInitialValue: number;
  debouncedMaxValue: number;
  setMinValue: (value: number) => void;
  setMaxValue: (value: number) => void;
  setInitialValue: (value: number) => void;
  showMinMaxValues: boolean;
  setShowMinMaxValues: (value: boolean) => void;
  showDroplet: boolean;
  setShowDroplet: (value: boolean) => void;
}

const SliderControls: React.FC<SliderControlsProps> = ({
  minValue,
  maxValue,
  initialValue,
  debouncedInitialValue,
  debouncedMaxValue,
  setMinValue,
  setMaxValue,
  setInitialValue,
  showMinMaxValues,
  setShowMinMaxValues,
  showDroplet,
  setShowDroplet,
}) => {
  const onChangeMaxVal = (val: number) => {
    if (val <= minValue) {
      setMaxValue(val);
    } else {
      setMaxValue(val);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 items-center">
      <div className="flex gap-2 items-center">
        <span>Min: </span>
        <input
          type="number"
          value={minValue}
          min={0}
          max={maxValue - 1}
          onChange={(e) => {
            const value = Number(e.target.value);
            value < maxValue && setMinValue(value);
          }}
          className="border rounded p-1 w-20"
        />
      </div>
      <div className="flex gap-2 items-center">
        <span>Max: </span>
        <input
          type="number"
          value={maxValue}
          min={minValue + 1}
          onBlur={(e) => {
            let value = Number(e.target.value);
            value <= minValue && setMaxValue(debouncedMaxValue);
          }}
          onChange={(e) => {
            const value = Number(e.target.value);
            onChangeMaxVal(value);
          }}
          className="border rounded p-1 w-20"
        />
      </div>
      <div className="flex gap-2 items-center">
        <span>Initial: </span>
        <input
          type="number"
          value={initialValue}
          min={minValue}
          max={maxValue}
          onBlur={(e) => {
            let value = Number(e.target.value);
            (value > maxValue || value < minValue) &&
              setInitialValue(debouncedInitialValue);
          }}
          onChange={(e) => {
            // Number(e.target.value) <= maxValue &&
            setInitialValue(Number(e.target.value));
          }}
          className="border rounded p-1"
        />
      </div>
      <div className="flex gap-2 items-center">
        <label>
          <input
            type="checkbox"
            checked={showMinMaxValues}
            onChange={() => setShowMinMaxValues(!showMinMaxValues)}
          />
          Show Min/Max Values
        </label>
      </div>
      <div className="flex gap-2 items-center">
        <label>
          <input
            type="checkbox"
            checked={showDroplet}
            onChange={() => setShowDroplet(!showDroplet)}
          />
          Show Droplet
        </label>
      </div>
    </div>
  );
};

export default SliderControls;
