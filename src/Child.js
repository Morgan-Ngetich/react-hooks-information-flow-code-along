import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, divColor }) {
  //console.log(onChangeColor)
  const handleClick = () => {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }

  return (
  <div
    onClick={handleClick}
    className="child" 
    style={{ backgroundColor: divColor }} 
  />
  );
  
}

export default Child;
