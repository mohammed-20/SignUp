import React, { Component } from "react";

import axios from "axios";
import SignUp_Validate, {
  fieldScema,
} from "../../Components/Utiles/SignUp_Validate";
import Input from "../../Components/Input";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";
import OrText from "../../Components/OrText";
import GoogleButton from "../../Components/Button/GoogleBtn";
import { withRouter } from "react-router-dom";
import "./style.css";

const insstate = {
  email: "",
  password: "",
  rePassword: "",
  checked: "",
  errors: {
    email: "",
    password: "",
    rePassword: "",
    checked: "",
  },
  error: "",
};

class Form extends Component {
  state = insstate;
  handleChange = (e) => {
    const { value, name, checked } = e.target;
    let _value = value;
    if (name === "checked") {
      _value = checked;
    }

    const validate = () => {
      const { password } = this.state;
      fieldScema(name, password)
        .validate(_value)
        .then(() => {
          this.setState((prevState) => {
            const { errors } = prevState;
            return { errors: { ...errors, [name]: "" } };
          });
        })
        .catch((err) => {
          this.setState((prevState) => {
            const { errors } = prevState;
            return { errors: { ...errors, [name]: err.message } };
          });
        });
    };
    this.setState({ [name]: _value }, validate);
  };
  validateForm = (data) => {
    SignUp_Validate.validate(data, { abortEarly: false })
      .then(() => {
        this.setState({ errors: {}, error: "" });
      })
      .catch((err) => {
        const errors = {};
        err.inner.forEach(({ message, path }) => {
          errors[path] = message;
        });
        this.setState({ errors, error: "check the fields above" });
      });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, rePassword, checked, error } = this.state;
    this.validateForm({ email, password, rePassword, checked });
    if (!error) {
      axios
        .post("https://fake-api-ahmed.herokuapp.com/v1/auth/signup", {
          email,
          password,
        })
        .then((res) => {
          const user = res.data;
          console.log(user);
          this.props.handleLogin();
          this.props.history.push("/");
        })
        .catch((err) => {
          console.log(err.response.data.error);
          let error = err.response.data.error;
          if (error.includes("duplicate")) {
            error = "Email already exists";
          }
          this.setState({ error });
        });
    }
  };

  render() {
    const { email, password, checked, rePassword, errors, error } = this.state;
    return (
      <form className="content-form form-include" onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name="email"
          type="email"
          placeholder="Enter email address"
          id="email"
          labelTxt="Enter email*"
          value={email}
          error={errors.email}
          className="input-form"
        />
        <Input
          handleChange={this.handleChange}
          name="password"
          type="password"
          placeholder="Password"
          id="password"
          labelTxt="password*"
          value={password}
          error={errors.password}
          className="input-form"
        />
        <Input
          handleChange={this.handleChange}
          name="rePassword"
          type="password"
          placeholder="Repeat password"
          id="rePassword"
          labelTxt="Repeat password*"
          value={rePassword}
          error={errors.rePassword}
          className="input-form"
        />
        <Checkbox
          checked={checked}
          handleChange={this.handleChange}
          name="checked"
          type="checkbox"
          labelTxt="I agree to terms & conditions"
          error={errors.checked}
        />
        <Button type="submt" className="register-btn">
          Register Account
        </Button>
        {error && <span>{error}</span>}
        <OrText />
        <GoogleButton />
      </form>
    );
  }
}
export default withRouter(Form);
