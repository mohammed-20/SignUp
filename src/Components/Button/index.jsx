import React from "react";
import "./style.css";

export default function Button(props) {
  const { children, name, className } = props;
  return (
    <button className={className} name={name}>
      {children}
    </button>
  );
}
