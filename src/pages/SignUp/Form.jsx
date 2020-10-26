import React, { Component } from "react";

import Input from "../../Components/Input";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";

import "./style.css";
const insstate = { email: "", password: "", rePassword: "", checked: "" };

class Form extends Component {
  state = insstate;
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleClick = (e) => {
    e.preventDefault();
    alert("Your request has been sent");
  };

  render() {
    const { email, password, checked, rePassword } = this.state;
    return (
      <form className="content-form form-include">
        <Input
          handleChange={this.handleChange}
          name="email"
          type="email"
          placeholder="Enter email address"
          id="email"
          labelTxt="Enter email*"
          value={email}
        />
        <Input
          handleChange={this.handleChange}
          name="password"
          type="password"
          placeholder="Password"
          id="password"
          labelTxt="password*"
          value={password}
        />
        <Input
          handleChange={this.handleChange}
          name="rePassword"
          type="password"
          placeholder="Repeat password"
          id="rePassword"
          labelTxt="Repeat password*"
          value={rePassword}
        />
        <Checkbox
          checked={checked}
          handleChange={this.handleChange}
          name="checked"
          type="checkbox"
          labelTxt="I agree to terms & conditions"
        />

        <Button handleClick={this.handleClick} />
      </form>
    );
  }
}
export default Form;
