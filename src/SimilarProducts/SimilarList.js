import React, { useState, useEffect } from "react";
import CommonItem from "../SharedProduct/CommonItem";
import "./SimilarList.css";
import axios from "../axios";
import { useParams } from "react-router-dom";

function SimilarList({ fetchUrl }) {
  const [productListData, setProductListData] = useState([]);
  const paramsData = new useParams();

  const baseURL = "https://asos2.p.rapidapi.com";

  let params = {
    id: "9851612",
    store: "US",
    sizeSchema: "US",
    currency: "USD",
    lang: "en-US",
  };
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl, {
        params: params,
      });
      const products = response?.data.products;
      setTimeout(() => {
        if (products?.length) {
          setProductListData([...products]);
          console.log(productListData);
        }
      }, 0);
      return response;
    }

    const data = fetchData();
    console.log(data);
  }, [fetchUrl]);

  return (
    <div className="App">
      <CommonItem />
      <div className="raw">
        <h2>Products related to this item</h2>
      </div>
      <div className="row-container">
        {productListData?.map((elem) => (
          <>
            <img
              className="row-item"
              src={`https://${elem?.product?.images[0]?.url}`}
            />
            <div className="img-text">
              {elem.product?.name}
              <del className="color">{elem.product.price?.previous?.text}</del>
              <div className="pri-text">
                {elem.product.price?.current?.text}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default SimilarList;
