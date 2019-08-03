import React from "react";
import "../App.css";
const Previous = props => {
  
  return (
    <div className="previous">
      <button onClick={props.onClick}>&#10094;</button>
    </div>
  );
};
export default Previous;
