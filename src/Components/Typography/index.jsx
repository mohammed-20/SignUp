import React from "react";
import "./style.css";

export const H1 = (props) => {
  const { children, className } = props;
  return <h1 className={`h1 ${className}`}>{children}</h1>;
};

export const SubTitle = (props) => {
  const { children, className } = props;
  return <p className={`sub-title ${className}`}>{children}</p>;
};
