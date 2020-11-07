import React, { Component } from "react";
import axios from "axios";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

import "./style.css";
import CardResults from "./CardResults";
import Back from "../../Components/Back";
export default class PageLogIn extends Component {
  state = {
    results: [],
    searchVal: "",
  };

  handleSearchVal = (e) => {
    const { value } = e.target;
    this.setState({ searchVal: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { searchVal } = this.state;

    axios
      .get("https://api.giphy.com/v1/stickers/search", {
        params: {
          api_key: "wwqHlnqJioLZYlnWmTELaygTiNQ5tZZF",
          q: searchVal,
          limit: 20,
        },
      })
      .then((res) => {
        const { data } = res.data;
        this.setState({ results: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { results, searchVal } = this.state;
    return (
      <>
        <Back />
        <form className="from-search" action="" onSubmit={this.handleSubmit}>
          <Input
            name="search"
            id="search"
            value={searchVal}
            type="text"
            placeholder="Search"
            handleChange={this.handleSearchVal}
            className="input-search"
          />
          <Button type="submit" className="search-btn" name="btn">
            search
          </Button>
        </form>
        {/* <Button
          type="button"
          className="search-btn"
          name="btn"
          handleLogOut={handleLogOut}
        >
          logut
        </Button> */}

        <CardResults results={results} />
      </>
    );
  }
}
