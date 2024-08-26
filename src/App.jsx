import { Component } from "react";
import { NavBar } from "./Navbar";
import CustomerList from "./CustomerList";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/customers" element={<CustomerList />}></Route>
            <Route path="/cart" element={<ShoppingCart />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
