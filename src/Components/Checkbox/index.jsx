import React from "react";

export default function Checkbox(props) {
  const { checked, handleChange, name, type, labelTxt } = props;
  return (
    <div className="checkbox">
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={name}>{labelTxt}</label>
    </div>
  );
}
