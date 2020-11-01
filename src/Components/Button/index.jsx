import React from "react";
import "./style.css";

export default function Button(props) {
  const { children, name } = props;
  return (
    <button className="register-btn" name={name}>
      {children}
    </button>
  );
}
