import React from "react";
import "../App.css";
const Next = props => {
  
  return (
    <div className="next">
      <button onClick={props.onClick}>&#10095;</button>
    </div>
  );
};
export default Next;
