import React, { useEffect, useState } from "react";
import Slider from "./components/Slider";

function App() {
  const [minValue, setMinValue] = useState(50);
  const [maxValue, setMaxValue] = useState(150);
  const [initialValue, setInitialValue] = useState(78);
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

  return (
    <div className="App">
      <header className="mt-20">
        <h1 className="text-2xl font-bold text-center mb-4">
          Customizable Slider
        </h1>
        <div>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="flex gap-2 items-center">
                <span>Min: </span>
                <input
                  type="number"
                  value={minValue}
                  onChange={(e) => setMinValue(Number(e.target.value))}
                  className="border rounded p-1 w-20"
                />
              </div>
              <div className="flex gap-2 items-center">
                <span>Max: </span>
                <input
                  type="number"
                  value={maxValue}
                  onChange={(e) => setMaxValue(Number(e.target.value))}
                  className="border rounded p-1 w-20"
                />
              </div>
              <div className="flex gap-2 items-center">
                <span>Initial: </span>
                <input
                  type="number"
                  value={initialValue}
                  max={maxValue}
                  onChangeCapture={(e) => {
                    console.log(e);
                  }}
                  onChange={(e) => {
                    Number(e.target.value) <= maxValue &&
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
