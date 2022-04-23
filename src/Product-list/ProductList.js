import React from "react";
import FilterList from "./FilterList";
import List from "./List";
import Product from "./Product";
import Navbar from "../Navbar";
import "./Product-list.css";
import request from "../request";

function ProductList() {
  return (
    <div className="App">
      <Navbar />
      <div class="product-list-container">
        <div className="Filter-container">
          <FilterList />
        </div>
        <div className="Product-container">
          <Product fetchUrl={request.fetchProductList} />
        </div>
        <List />
      </div>
    </div>
  );
}

export default ProductList;
