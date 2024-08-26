import React, { Component } from "react";
import Product from "./Product";

class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iphone", price: 90000, quantity: 0 },
      { id: 2, productName: "Camera", price: 50000, quantity: 0 },
      { id: 3, productName: "TV", price: 30000, quantity: 0 },
      { id: 4, productName: "Ipad", price: 99000, quantity: 0 },
      { id: 5, productName: "Samsung", price: 70000, quantity: 0 },
      { id: 6, productName: "Macbook", price: 190000, quantity: 0 },
    ],
  };

  render() {
    return (
      <div>
        <h3>Shopping Cart</h3>
        {this.state.products.map((product) => (
          <Product
            key={product.id}
            {...product}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        ))}
      </div>
    );
  }

  handleIncrement = (id) => {
    let product = this.state.products.find((prod) => prod.id === id);
    let allproducts = [...this.state.products];
    let index = allproducts.indexOf(product);
    allproducts[index].quantity++;
    this.setState({ products: allproducts });
  };

  handleDecrement = (id) => {
    let product = this.state.products.find((prod) => prod.id === id);
    let allproducts = [...this.state.products];
    let index = allproducts.indexOf(product);
    if (allproducts[index].quantity > 0) allproducts[index].quantity--;
    this.setState({ products: allproducts });
  };
}

export default ShoppingCart;
