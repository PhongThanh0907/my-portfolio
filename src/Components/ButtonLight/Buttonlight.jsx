import React from "react";
import "./buttonlight.styles.scss";

const Buttonlight = (props) => {
  return (
    <div className="buttonlight">
    <a  href={props.id}>
      {props.name}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
    </div>
  );
};

export default Buttonlight;
