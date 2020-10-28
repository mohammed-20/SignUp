import React from "react";
import "./style.css";

export default function Button(props) {
  const { children, handleClick, name } = props;
  return (
    <button className="register-btn" onClick={handleClick} name={name}>
      {children}
    </button>
  );
}
