import React, { Component } from "react";

import Input from "../../Components/Input";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";
import * as T from "../../Components/Typography";
import "./style.css";
const insstate = { email: "", password: "", checked: "", checked1: "" };
class Form extends Component {
  state = insstate;
  handleChange = (e) => {
    const { value, name, checked, checked1 } = e.target;
    let _value = value;
    if (name === "checked") {
      _value = checked;
    } else if (name === "checked1") {
      _value = checked1;
    }
    this.setState({ [name]: _value });
  };

  render() {
    const { email, password, checked, checked1 } = this.state;
    return (
      <form>
        <Input
          handleChange={this.handleChange}
          name="email"
          type="email"
          placeholder="Write your email"
          id="email"
          labelTxt="Your email*"
          value={email}
        />
        <Input
          handleChange={this.handleChange}
          name="password"
          type="password"
          placeholder="Password"
          id="password"
          labelTxt="Choose a password*"
          value={password}
        />
        <Checkbox
          checked={checked}
          handleChange={this.handleChange}
          name="checked"
          type="checkbox"
          labelTxt={["I agree to ", <a href="#">terms & conditions</a>]}
        />
        <Checkbox
          checked={checked1}
          handleChange={this.handleChange}
          name="checked1"
          type="checkbox"
          labelTxt="I’d like being informed about latest news and tips"
        />
        <Button
          type="Button"
          handleClick={this.props.handleClick}
          name="SignUp"
        >
          Sign up for free
        </Button>
        <T.SubTitle>
          {["Do you already have an account? ", <a href="#">Log in</a>]}
        </T.SubTitle>
      </form>
    );
  }
}
export default Form;
