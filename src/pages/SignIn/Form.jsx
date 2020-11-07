import React, { Component } from "react";
import axios from "axios";
import SignIn_Validate, {
  fieldScema,
} from "../../Components/Utiles/SignIn_Validate";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import * as T from "../../Components/Typography";
import { Link, withRouter } from "react-router-dom";
import "./style.css";
const insstate = { email: "", password: "", errors: {}, error: "" };
class Form extends Component {
  state = insstate;

  handleChange = (e) => {
    const { value, name } = e.target;
    const validate = () => {
      fieldScema(name)
        .validate(value)
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
    this.setState({ [name]: value }, validate);
  };

  validateForm = (data) => {
    SignIn_Validate.validate(data, { abortEarly: false })
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
    const { email, password, error } = this.state;
    this.validateForm({ email, password });
    if (!error) {
      axios
        .post("https://fake-api-ahmed.herokuapp.com/v1/auth/login", {
          email,
          password,
        })
        .then((res) => {
          this.props.handleLogin();
          this.props.history.push("/");
        })
        .catch((err) => {
          let error = err.response.data.error;
          this.setState({ error });
        });
    }
  };

  render() {
    const { email, password, errors, error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name="email"
          type="email"
          placeholder="Write your email"
          id="email"
          labelTxt="Your email*"
          value={email}
          error={errors.email}
          className="input-form "
        />
        <Input
          handleChange={this.handleChange}
          name="password"
          type="password"
          placeholder="Password"
          id="password"
          labelTxt="Password*"
          value={password}
          error={errors.password}
          className="input-form "
        />
        <Button type="submit" className="register-btn">
          login
        </Button>
        {error && <span>{error}</span>}
        <T.SubTitle>
          {["Don’t have an account? ", <Link to="/SignUp"> Register </Link>]}
        </T.SubTitle>
      </form>
    );
  }
}
export default withRouter(Form);
