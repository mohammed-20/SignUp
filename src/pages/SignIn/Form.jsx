import React, { Component } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import * as T from "../../Components/Typography";
import "./style.css";
const insstate = { email: "", password: "" };
class Form extends Component {
  state = insstate;
  handleChange = (e) => {
    const { value, name } = e.target;
    let _value = value;

    this.setState({ [name]: _value });
  };

  render() {
    const { email, password } = this.state;
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
          labelTxt="Password*"
          value={password}
        />

        <Button type="Button">login</Button>
        <T.SubTitle>
          {[
            "Don’t have an account? ",
            <a href="#" name="SignUp" onClick={this.props.handleClick}>
              {" "}
              Register{" "}
            </a>,
          ]}
        </T.SubTitle>
      </form>
    );
  }
}
export default Form;
