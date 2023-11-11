import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor(); //Initial value for color state
  const [color, setColor] = useState(randomColor);
  //console.log("Color is:", color) => //RandomColors
  const [childrenColor, setChildrenColor] = useState("#FFF")
  //console.log("The color is:", childrenColor) => //#FFF

  const handleChangeColor = (newChildColor) => {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);// upadte color state to a new value
    setChildrenColor(newChildColor)
  }
 

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColor} divColor={childrenColor} /> 
      <Child onChangeColor={handleChangeColor} divColor={childrenColor} />
    </div>
  );
}

export default Parent;
