import React from "react";
import "./button.styles.scss";

function Button(props) {
  return (
    <button className="btn-animation" onClick={props.click}>
      {props.name}
    </button>
  );
}

export default Button;
