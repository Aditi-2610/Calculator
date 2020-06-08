import React from "react";
import "../App.css";
function Output(props) {
  return (
    <div className="result">
      <p>{props.result}</p>
    </div>
  );
}
export default Output;
