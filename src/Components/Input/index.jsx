import React from "react";
import "./style.css";

export default function Input(props) {
  const {
    handleChange,
    name,
    type,
    value,
    labelTxt,
    placeholder,
    error,
    className,
  } = props;
  return (
    <div className="form-style">
      <label htmlFor={name} className="adress-input">
        {labelTxt}
      </label>
      <input
        className={`${className} ${error && "error"} `}
        name={name}
        type={type}
        id={name}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
      {error && <div className="error-messages">{error}</div>}
    </div>
  );
}
