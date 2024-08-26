import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  render() {
    return (
      <>
        <h2> Login</h2>
        <div className="form-group form-row">
          <label className="col-lg-4">Email</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
              console.log(this.state.email);
            }}
          />
        </div>
        <div className="form-group form-row">
          <label className="col-lg-4">Password</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
              console.log(this.state.password);
            }}
          />
        </div>
        <div>
          <button className="btn btn-primary" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </>
    );
  }

  onLoginClick = async () => {
    console.log(this.state);

    var response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.email,
        password: this.state.password,
        // expiresInMins: 60, // optional
      }),
    });
    var result = await response.json();
    if (result.id) alert("Hurray");
  };
}
