// This is returning div which will display loading animation
import React from "react";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
