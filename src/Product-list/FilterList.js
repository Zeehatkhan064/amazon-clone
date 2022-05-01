import React from "react";
import "./FilterList.css";

function FilterList() {
  return (
    <div className="filter-container">
      <div className="filter-list">
        <div className="header">
          Amazon Prime Test
          <div className="h-text">Prime</div>
        </div>

        <div className="delivery">Pay on Delivery</div>
        <div className="d-text">Eligible for Pay on Delivery</div>

        <div className="brands">Brands </div>
        <div className="brand-list">
          <li>SOFTSPUN</li>
          <li>JOPASU</li>
          <li>jopasu</li>
          <li>SHEEBA</li>
          <li>peedelite</li>
          <li>3M</li>
          <li>HSR</li>
        </div>

        <div className="price">Price </div>
        <div className="price-list">
          <li>Under ₹500</li>
          <li>₹500 - ₹1,000</li>
          <li>₹1,000 - ₹1,500</li>
          <li>₹1,500 - ₹3,000</li>
          <li>Over ₹3,000</li>
        </div>

        <div className="discount">Discount </div>
        <div className="disc-list">
          <li> 10% Off or more</li>
          <li>25% Off or more</li>
          <li>35% Off or more</li>
          <li>50% Off or more</li>
          <li>60% Off or more</li>
          <li>70% Off or more</li>
        </div>
      </div>
    </div>
  );
}

export default FilterList;
