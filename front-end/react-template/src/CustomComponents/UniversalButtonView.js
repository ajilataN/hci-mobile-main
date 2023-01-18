import * as React from "react";

const UniversalButtonView = ({ onClick, title }) => {
  const mystyle = {
    color: "white",
    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <button
      onClick={onClick}
      style={mystyle}
      className=" btn bg-danger-subtle border-dark-subtle
       border border-2 "
    >
      <b> {title} </b>
    </button>
  );
};
export default UniversalButtonView;
