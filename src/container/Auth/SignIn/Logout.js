import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("token");
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <h1> See you Again</h1>
        <Link to="/"> Login Again </Link>
      </div>
    );
  }
}
