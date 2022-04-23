import "./App.css";
import Home from "./Home-page/Home";
import ProductList from "./Product-list/ProductList";
import SignIn from "./Authentication-page/SignIn";
import SignUp from "./Authentication-page/SignUp";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
