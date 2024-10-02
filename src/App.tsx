import React, { useEffect, useState } from "react";
import Slider from "./components/Slider";
import SliderControls from "./components/SliderControls";

function App() {
  const [minValue, setMinValue] = useState(50);
  const [maxValue, setMaxValue] = useState(150);
  const [initialValue, setInitialValue] = useState(78);
  const [debouncedMinValue, setDebouncedMinValue] = useState(78);
  const [debouncedMaxValue, setDebouncedMaxValue] = useState(78);
  const [debouncedInitialValue, setDebouncedInitialValue] = useState(78);
  const [showMinMaxValues, setShowMinMaxValues] = useState(true);
  const [showDroplet, setShowDroplet] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (initialValue >= minValue && initialValue <= maxValue)
        setDebouncedInitialValue(initialValue);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [initialValue]);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     if (minValue < maxValue) setDebouncedMinValue(minValue);
  //   }, 300);
  //   return () => clearTimeout(timeoutId);
  // }, [minValue]);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     if (maxValue > minValue) setDebouncedMaxValue(maxValue);
  //   }, 300);
  //   return () => clearTimeout(timeoutId);
  // }, [maxValue]);

  useEffect(() => {
    const handleInitialValueBasedOnMinMax = () => {
      if (
        !(
          debouncedInitialValue <= maxValue && debouncedInitialValue >= minValue
        )
      ) {
        let value = Math.floor((minValue + maxValue) / 2);
        setDebouncedInitialValue(value);
        setInitialValue(value);
      }
    };

    handleInitialValueBasedOnMinMax();
  }, [minValue, maxValue]);

  return (
    <div className="App">
      <header className="mt-20">
        <h1 className="text-2xl font-bold text-center mb-4">
          Customizable Slider
        </h1>
        <div>
          <div className="max-w-2xl mx-auto">
            <SliderControls
              minValue={minValue}
              maxValue={maxValue}
              initialValue={initialValue}
              setMinValue={setMinValue}
              setMaxValue={setMaxValue}
              setInitialValue={setInitialValue}
              showMinMaxValues={showMinMaxValues}
              setShowMinMaxValues={setShowMinMaxValues}
              showDroplet={showDroplet}
              setShowDroplet={setShowDroplet}
            />
            <Slider
              min={minValue}
              max={maxValue}
              initialValue={debouncedInitialValue}
              showMinMaxValues={showMinMaxValues}
              showDroplet={showDroplet}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
