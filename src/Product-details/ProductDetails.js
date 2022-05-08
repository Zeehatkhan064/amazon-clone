import React from "react";
import Product from "./Product";
import ProductPurchase from "./ProductPurchase";
import SimilarList from "../SimilarProducts/SimilarList";
import Navbar from "../Navbar";
import request from "../request";

function ProductDetails() {
  return (
    <div className="App">
      <Navbar />
      <Product />
      <ProductPurchase />
      <SimilarList fetchUrl={request?.fetchProductSimilarities} />
    </div>
  );
}

export default ProductDetails;
