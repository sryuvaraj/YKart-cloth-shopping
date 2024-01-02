import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
const bgImage = {
  backgroundImage: 'url("https://images.pexels.com/photos/6310923/pexels-photo-6310923.jpeg?auto=compress&cs=tinysrgb&w=600")',
  backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat", 
  color:"white"
}
const Nav = ({cartCount, setCartCount}) => {
  return (
    <>
      <div className="row" style={{ display: "flex", alignItems: "center"}} id="topNav">
        <ul className="col-md-1">
          <li id="logo">
            <h2>YKart</h2>
          </li>
        </ul>
        <ul className="col-md-5" id="topNavList">
          <li></li>
          <li><Link className="topNavItems" to="/">Home</Link></li>
          <li><Link className="topNavItems" to="/products">Products</Link></li>
          <li><Link className="topNavItems" to="/about">About</Link></li>
          <li><Link className="topNavItems" to="/contact">Contact</Link></li>
        </ul>
        <ul className="col-md-4" id="topNavList"></ul>
        <ul className="col-md-2" id="cartList">
          {/* <li><Link to="/login">Login</Link></li> */}
          <li>
            <Link to="/cart">Cart</Link>
            <p>{cartCount}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
