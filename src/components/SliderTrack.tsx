import React from "react";

const SliderTrack = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <div
    ref={ref}
    className="relative w-full h-6 bg-gray-300 rounded-full"
    {...props}
  >
    {children}
  </div>
));

export default SliderTrack;
