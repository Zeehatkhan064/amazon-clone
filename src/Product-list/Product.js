import React, { useState, useEffect } from "react";
import "./Product.css";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

function Product({ fetchUrl }) {
  let navigate = useNavigate();
  function handleOnClick(id) {
    navigate(`/product-details/${id}`);
  }

  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(false);

  const baseURL = "https://asos2.p.rapidapi.com";

  let params = {
    store: "US",
    offset: "0",
    categoryId: "4209",
    limit: "48",
    country: "US",
    sort: "freshness",
    currency: "USD",
    sizeSchema: "US",
    lang: "en-US",
  };

  useEffect(() => {
    async function fetchData() {
      setLoader(true);
      const request = await axios.get(fetchUrl, { params: params });
      setLoader(false);
      setList(request.data);
      // console.log(list);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="p-container">
      <div className="product-name">{list?.categoryName}</div>
      <div className="product-container">
        {loader ? (
          <h2>Loading....</h2>
        ) : (
          <>
            {list?.products?.map((elem) => (
              <div className="products">
                <img
                  className="product-img"
                  onClick={() => handleOnClick(elem?.id)}
                  src={`http://${elem?.imageUrl}`}
                />
                <div className="product-text">{elem.brandName}</div>
                {/* <div className="p-name">{elem?.name}</div> */}
                <div className="p-color">{elem?.colour}</div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Product;
