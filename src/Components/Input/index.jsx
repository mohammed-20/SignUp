import React from "react";
import "./style.css";

export default function Input(props) {
  const { handleChange, name, type, value, labelTxt, placeholder } = props;
  return (
    <div className="form-style">
      <label htmlFor={name} className="adress-input">
        {labelTxt}
      </label>
      <input
        className="input-form"
        name={name}
        type={type}
        id={name}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
