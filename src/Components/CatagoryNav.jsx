import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "../Css/CatagoryNav.css";

const CatagoryNav = ({ products, displayProducts, setDisplayProducts }) => {
  const product = products;

  const handleCategory = (e) => {
    const category = e.target.textContent.toLowerCase();

    if (["all", "men", "women", "kids"].includes(category)) {
      setDisplayProducts(category === "all" ? product : product.filter((item) => item.gender === category));
    } else if (["all", "t-shirts", "shirts", "sarees", "chudis", "pants"].includes(category)) {
      setDisplayProducts(category === "all" ? product : product.filter((item) => item.cloth === category));
    } else if (["below 500 /-", "below 800 /-", "below 1000 /-", "above 1000 /-"].includes(category)) {
      let maxPrice;
      if (category === "below 500 /-") maxPrice = 500;
      else if (category === "below 800 /-") maxPrice = 800;
      else if (category === "below 1000 /-") maxPrice = 1000;
      else maxPrice = Infinity;

      setDisplayProducts(product.filter((item) => item.price <= maxPrice));
    }
  };

  return (
    <>
      <div className="" style={{ display: "flex", flexDirection: "column" }}>
        <ul className="">
          <li></li>
          <li></li>
        </ul>
        <ul className="">
          <li className="py-2">By Gender</li>
          <li className="filtItem" onClick={handleCategory}>All</li>
          <li className="filtItem" onClick={handleCategory}>Men</li>
          <li className="filtItem" onClick={handleCategory}>Women</li>
          <li className="filtItem" onClick={handleCategory}>Kids</li>
        </ul>
        <hr />
        <ul className="">
          <li className="py-2">By Clothes</li>
          <li className="filtItem" onClick={handleCategory}>All</li>
          <li className="filtItem" onClick={handleCategory}>T-Shirts</li>
          <li className="filtItem" onClick={handleCategory}>Shirts</li>
          <li className="filtItem" onClick={handleCategory}>Sarees</li>
          <li className="filtItem" onClick={handleCategory}>Pants</li>
          <li className="filtItem" onClick={handleCategory}>Chudis</li>
        </ul>
        <hr />
        <ul className="">
          <li className="py-2">By Price</li>
          <li className="filtItem" onClick={handleCategory}>All</li>
          <li className="filtItem" onClick={handleCategory}>Below 500 /-</li>
          <li className="filtItem" onClick={handleCategory}>Below 800 /-</li>
          <li className="filtItem" onClick={handleCategory}>Below 1000 /-</li>
          <li className="filtItem" onClick={handleCategory}>Above 1000 /-</li>
        </ul>
        {/* <form>
            <select>
            <option>Select</option>
                <option>Below 500</option>
                <option>Below 600</option>
                <option>Below 800</option>
                <option>Below 1000</option>
            </select>
        </form> */}
      </div>
    </>
  );
};

export default CatagoryNav;
