import React, { Component } from "react";
import "./style.css";
class Input extends Component {
  render() {
    const {
      handleChange,
      name,
      type,
      value,
      labelTxt,
      placeholder,
    } = this.props;
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
}
export default Input;
