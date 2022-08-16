import React from "react";
import "./loading.styles.scss";

const Loading = (props) => {
  return (
    <div className="ring">
      {props.name}
      <span className="loading_ring"></span>
    </div>
  );
};

export default Loading;
