import React from "react";
import "./Button.css";
const Button = ({ num, click }) => {
  return (
    <button className="ui-change-btn" onClick={() => click(true)}>
      Cart <span>{num}</span>
    </button>
  );
};

export default Button;
