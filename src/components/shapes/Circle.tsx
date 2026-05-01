
// import types
import type { FC } from "react";

// import modules
import { useRef, useEffect } from "react";

// TS types
type Props = {
    value?:number,
    performAnimation?:boolean,
    backgroundColorClass?:string,
    mainColorClass?:string
}

// main component
const Circle : FC<Props> = ({value = 100, performAnimation = false, backgroundColorClass = "bg-zinc-950", mainColorClass = "bg-green-500"}) => {

    const ref = useRef(null);

  useEffect(() => {
    const angle = (value / 100) * 360;
    ref.current.style.mask = `conic-gradient(#000 ${angle}deg, transparent ${angle}deg)`;
    ref.current.style.webkitMask = `conic-gradient(#000 ${angle}deg, transparent ${angle}deg)`;
  }, [value]);

  return (
    <div className="relative w-40 h-40">
      <div className={`absolute inset-0 rounded-full ${backgroundColorClass}`}></div>
      <div
        ref={ref}
        className={`absolute inset-0 rounded-full ${performAnimation ? "scale-120" : ""} ${mainColorClass} transition-all duration-150 ease-in-out`}
        style={{
          mask: "conic-gradient(#000 0deg, transparent 0deg)",
          WebkitMask: "conic-gradient(#000 0deg, transparent 0deg)",
        }}
      ></div>
    </div>
  );
}


// export modules
export default Circle;