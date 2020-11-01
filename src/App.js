import React, { Component } from "react";

import SignIn from "./pages/SignIn";
import SingUp from "./pages/SignUp";
import "./App.css";

export default class App extends Component {
  state = {
    route: "SignIn",
  };
  handleClick = (e) => {
    e.preventDefault();
    const { name } = e.target;
    console.log(name);
    this.setState({
      route: name,
    });
  };

  render() {
    const { route } = this.state;
    if (route === "SignIn") {
      return (
        <div className="App">
          <SignIn handleClick={this.handleClick} />
        </div>
      );
    }
    if (route === "SignUp") {
      return (
        <div className="App">
          <SingUp handleClick={this.handleClick} />
        </div>
      );
    }
  }
}
