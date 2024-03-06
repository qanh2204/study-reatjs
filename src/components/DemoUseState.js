import React, { useState } from "react";

const DemoUseState = () => {
  //   const [count, setCount] = useState(0);
  //   return (
  //     <div>
  //       <p>You clicked {count} times</p>
  //       <button onClick={() => setCount(count + 1)}>Click me</button>
  //     </div>
  //   );

  //   const [bgColor, setBgColor] = useState("white");
  //   const changeColor = () => {
  //     setBgColor("black");
  //   };
  //   return (
  //     <div style={{ backgroundColor: bgColor }}>
  //       <button onClick={changeColor}>Change Background Color</button>
  //     </div>
  //   );
  const [color, setColor] = useState(false);
  console.log(color);
  const changeColor = () => {
    setColor((color) => !color);
  };
  return (
    <div style={{ backgroundColor: color ? "red" : "green" }}>
      <button onClick={changeColor}>Change Background Color</button>
    </div>
  );
};

export default DemoUseState;
