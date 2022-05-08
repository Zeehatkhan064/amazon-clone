import React from "react";
import Navbar from "../Navbar";
import AddToCart from "./AddToCart";

function Cart() {
  return (
    <div className="cart">
      <AddToCart />
      <Navbar />
    </div>
  );
}

export default Cart;
