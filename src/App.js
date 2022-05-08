import "./App.css";
import Home from "./Home-page/Home";
import ProductList from "./Product-list/ProductList";
import ProductDetails from "./Product-details/ProductDetails";
import SignIn from "./Authentication-page/SignIn";
import SignUp from "./Authentication-page/SignUp";
import Cart from "./Cart-Page/Cart";
import Buy from "./BuyNow-page/Buy";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/authentication-page" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Buy" element={<Buy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
