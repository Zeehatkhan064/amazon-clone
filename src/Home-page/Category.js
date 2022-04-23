import React from "react";
import "./Category.css";
import { useNavigate } from "react-router-dom";

function Category() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/product-list");
  }

  function signIn() {
    navigate("/authentication-page");
  }

  return (
    <div className="Category-container">
      <div className="Category">
        <div className="heading-container">
          <div className="heading">
            Top rated, premium quality...
            <div className="category-img">
              <img
                className="img"
                onClick={handleClick}
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Home_1x._SY116_CB627275939_.jpg"
              />

              <img
                className="img"
                onClick={handleClick}
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Furn_1x._SY116_CB627275939_.jpg"
              />
              <img
                className="img"
                onClick={handleClick}
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/DE_1x._SY116_CB627275939_.jpg"
              />
              <img
                className="img"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg"
                onClick={handleClick}
              />

              <div className="more">see more</div>
            </div>
          </div>
        </div>

        <div className="heading-container">
          <div className="heading">
            Summer essentials for car & bike
            <div className="category-img">
              <img
                className="c-img"
                onClick={handleClick}
                src="https://m.media-amazon.com/images/I/41kwH0GpHPL._SR210,210_.jpg"
              />
              <img
                className="c-img"
                onClick={handleClick}
                src="https://m.media-amazon.com/images/I/41vb7+aKV4L._SR210,210_.jpg"
              />
              <img
                className="c-img"
                onClick={handleClick}
                src="https://m.media-amazon.com/images/I/41HToieSG2L._SR210,210_.jpg"
              />
              <img
                className="c-img"
                onClick={handleClick}
                src="https://m.media-amazon.com/images/I/41VxLFNBQoL._SR210,210_.jpg"
              />
            </div>
          </div>
        </div>

        <div className="heading-container">
          <div className="heading">
            Up to 70% off | Clearance store
            <div className="category-img">
              <img
                className="image"
                onClick={handleClick}
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
              />
            </div>
          </div>
        </div>

        <div className="heading-container">
          <div className="heading">
            Sign in for your best experience
            <button className="sign-btn" type="button" onClick={signIn}>
              Sign in Securely
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
