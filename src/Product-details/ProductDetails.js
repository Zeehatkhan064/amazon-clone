import React from "react";
import Product from "./Product";
import ProductPurchase from "./ProductPurchase";
import Navbar from "../Navbar";

function ProductDetails() {
  return (
    <div className="App">
      <Navbar />
      <Product />
      <ProductPurchase />
    </div>
  );
}

export default ProductDetails;
