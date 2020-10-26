import React, { Component } from "react";

class Checkbox extends Component {
  render() {
    const { checked, handleChange, name, type, labelTxt } = this.props;
    return (
      <form className="checkbox">
        <input
          type={type}
          name={name}
          checked={checked}
          onChange={handleChange}
        />
        <label htmlFor={name}>{labelTxt}</label>
      </form>
    );
  }
}
export default Checkbox;
