import React, { useState, useEffect } from "react";
import "./Product.css";
import axios from "../axios";
import request from "../request";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Product() {
  let navigate = useNavigate();
  function AddToCLick() {
    navigate("/cart");
  }

  function ClickToBuy() {
    navigate("/Buy");
  }

  const [item, setItem] = useState({});
  const [showImg, setShowImg] = useState(0);
  const paramsData = new useParams();

  const baseURL = "https://asos2.p.rapidapi.com";

  let params = {
    id: paramsData?.id,
    lang: "en-US",
    store: "US",
    sizeSchema: "US",
    currency: "USD",
  };

  useEffect(() => {
    console.log("paramsData", paramsData);
    async function fetchData() {
      const res = await axios.get(request?.fetchProductDetail, {
        params: params,
      });
      setItem(res.data);
      const mainImage = `https://${item?.media?.images[0]?.url}`;
      setShowImg(mainImage);
      console.log(item);
      return res;
    }
    fetchData();
  }, []);

  function showProductMainImage(url) {
    console.log(url);
    setShowImg(`https://${url}`);
  }

  return (
    <>
      <div className="product-detail-container">
        <div className="detail">
          <div className="product-detail">
            {item?.media?.images?.map((img, i) => (
              <>
                <div className="product-details">
                  <ul className="image-list">
                    <li key={item}>
                      <img
                        src={`https://${img.url}`}
                        onClick={() => showProductMainImage(img.url)}
                      />
                    </li>
                  </ul>
                </div>
              </>
            ))}
          </div>
          <div className="img-detail">
            <img className="show-img" src={showImg} />
          </div>

          <div className="detail-container">
            <div className="name">{item?.name}</div>

            <div className="tag">Special price </div>
            <p className="p-tag">
              Deal of the Day :
              <span className="p-text">{item?.price?.current?.text}</span>
              <div>
                <del>{item?.price?.previous?.text}</del>
              </div>
            </p>

            <div className="offer">Available offers </div>
            <div className="offers">
              <ul>
                <li>Amazon Pay Later?</li>
                <li>
                  Special PriceGet extra 26% off (price inclusive of
                  discount)T&C
                </li>

                <li>
                  Partner OfferSign up for Amazon Pay Later and get Amazon Gift
                  Card worth ₹100
                </li>
              </ul>
            </div>

            <p className="type">
              Type :-<p className="type-text">{item?.productType?.name}</p>
            </p>
            <div className="gender">
              Gender :-
              <p className="gender-text">
                {" "}
                {item?.gender} {item.pdpLayout}
              </p>
            </div>
          </div>

          <div className="cart-container">
            <div className="c-text">{item?.price?.current?.text}</div>
            <div className="cart-text">
              FREE delivery: Saturday, April 30 Details
            </div>
            <div className="cart-text">In stock.</div>
            <div className="cart-text">
              Sold by ETrade Online and Fulfilled by Amazon.
            </div>
            <div className="cart-text">
              Item arrives in packaging that reveals what’s inside and can’t be
              hidden. If this is a gift, consider shipping to a different
              address.
            </div>
            <button className="cart-btn" type="button" onClick={AddToCLick}>
              Add to Cart
            </button>
            <button className="buy-btn" type="button" onClick={ClickToBuy}>
              Buy Now
            </button>
            <button className="Add-btn" type="button">
              Add to Wish List
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
