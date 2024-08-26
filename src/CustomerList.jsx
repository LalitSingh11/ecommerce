import React, { Component } from "react";

export default class CustomerList extends Component {
  state = {
    pageTitle: "Customers",
    count: 4,
    customers: [
      { id: 1, name: "Lalit", Age: 23 },
      { id: 2, name: "Munish", Age: 24 },
      { id: 3, name: "Love", Age: 23 },
      { id: 4, name: "Fardeen", Age: 21 },
    ],
  };
  render() {
    return (
      <>
        <h2>{this.state.pageTitle}</h2>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClick}>Refresh</button>

        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust, index) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>
                    {cust.Age}{" "}
                    <button
                      onClick={() => {
                        this.handleUpdateButton(cust, index);
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
  handleClick = () => {
    this.setState({
      count: 7,
    });
  };
}
