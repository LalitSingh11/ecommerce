import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div>
        {this.props.price} {this.props.productName}
        <br></br> {this.props.quantity}
        <button
          onClick={() => {
            this.props.onIncrement(this.props.id);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.onDecrement(this.props.id);
          }}
        >
          -
        </button>
        {/* <button>Push</button> */}
      </div>
    );
  }
}

export default Product;
