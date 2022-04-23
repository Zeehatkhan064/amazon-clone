import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Navbar from "../Navbar";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Banner />
      <Category />
    </div>
  );
}

export default Home;
