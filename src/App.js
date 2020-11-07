import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrevetRoute from "./Components/PrevetRoutre";
import axios from "axios";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PageLogIn from "./pages/PageLogIn";

import "./App.css";

export default class App extends Component {
  state = {
    isAuthenticated: false,
  };

  handleLogin = () => {
    this.setState({ isAuthenticated: true });
  };
  // handleLogOut = () => {
  //   this.setState({ isAuthenticated: false });
  // };
  componentDidMount() {
    axios
      .get("https://fake-api-ahmed.herokuapp.com/v1/user/info")
      .then((res) => {
        this.handleLogin();
      });
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <div className="App">
        <Router>
          <Switch>
            <PrevetRoute isAuthenticated={isAuthenticated} exact path="/">
              <PageLogIn />
            </PrevetRoute>
            <Route path="/SignUp" exact>
              <SignUp handleLogin={this.handleLogin} />
            </Route>
            <Route path="/SignIn" exact>
              <SignIn handleLogin={this.handleLogin} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
