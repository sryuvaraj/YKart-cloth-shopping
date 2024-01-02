import Home from "./Components/Home";
import Nav from "./Components/Nav";
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import RoutersHeadComponent from "./Routers/RoutersHeadComponent";
import CatagoryNav from "./Components/CatagoryNav";
import DisplayProducts from "./Components/DisplayProducts";
import Login from "./Components/Login";
import Products from "./Components/Products";
import ContactPage from "./Components/Contact";
import About from "./Components/About";
import Cart from "./Components/Cart";

function App() {
  const [dispalyProducts, setDisplayProducts] = useState([]);
  const [displayCartProducts, setDisplayCartProducts] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "pantOne",
      brand: "perter england",
      cloth: "t-shirts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZBN8_rYIEpeZVaG3g1PnkxLUykb21nwQxg&usqp=CAU",
      price: 400,
      gender: "men",
    },

    {
      id: 2,
      name: "pantOne",
      brand: "perter england",
      cloth: "t-shirts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64EzBf-hqOWJ1EjbZHxb2o_52hGbPAZ8DYQ&usqp=CAU",
      price: 700,
      gender: "men",
    },
    {
      id: 3,
      name: "pantOne",
      brand: "perter england",
      cloth: "pants",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQweY-Osc9zvG_LU26TQhnLbUayRo-exOgXIw&usqp=CAU",
      price: 900,
      gender: "men",
    },
    {
      id: 4,
      name: "pantOne",
      brand: "perter england",
      cloth: "pants",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFJcbg_7h62xQ8cfRWhGYEJ6tR9yhTwiyBfWgODYzFcrvJXD5pho-Yc4vhYBngF7xrj8&usqp=CAU",
      price: 1100,
      gender: "men",
    },
    {
      id: 5,
      name: "pantOne",
      brand: "perter england",
      cloth: "shirts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvxFVNa7_4KlH1lCkkLIuezfiOQolb56bZKDVyWVNwI-NVxU1cENMgjVnAD4cVLlEA_g&usqp=CAU",
      price: 400,
      gender: "men",
    },
    {
      id: 6,
      name: "pantOne",
      brand: "perter england",
      cloth: "shirts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0yR4h9IZ6WOoGOZbViW9mYJuNlEBfqRdSw&usqp=CAU",
      price: 700,
      gender: "men",
    },
    {
      id: 7,
      name: "pantOne",
      brand: "perter england",
      cloth: "chudis",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfV4KJ6Gh3l14Tx8WeeFDkw7BRZELgb1FH5w&usqp=CAU",
      price: 900,
      gender: "women",
    },
    {
      id: 8,
      name: "pantOne",
      brand: "perter england",
      cloth: "chudis",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxiRh1I1sgWSbW4koPDEMb0t5L_gOhmB8KA&usqp=CAU",
      price: 1100,
      gender: "women",
    },
    {
      id: 9,
      name: "pantOne",
      brand: "perter england",
      cloth: "chudis",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzMYPvdsWvhnJmce5bnrIeqUgraS-0wGygA&usqp=CAU",
      price: 400,
      gender: "women",
    },
    {
      id: 10,
      name: "pantOne",
      brand: "perter england",
      cloth: "sarees",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjih5TDl18_0U3q6Tl7s9LP3VYHfeUoLRlOA&usqp=CAU",
      price: 700,
      gender: "women",
    },
    {
      id: 11,
      name: "pantOne",
      brand: "perter england",
      cloth: "sarees",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-XFK4kU7gFKJN7_4Qji-IXFLQFZiUEa-yQ&usqp=CAU",
      price: 900,
      gender: "women",
    },
    {
      id: 12,
      name: "pantOne",
      brand: "perter england",
      cloth: "sarees",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkG8O5-cM5l3I46X8lkkxC-1kBYFE890N8A&usqp=CAU",
      price: 1100,
      gender: "women",
    },
    {
      id: 13,
      name: "pantOne",
      brand: "perter england",
      cloth: "sarees",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXVRg13B3iVpa5zvuyqG7zGxvAlGStmM-RrA&usqp=CAU",
      price: 400,
      gender: "kids",
    },
    {
      id: 14,
      name: "pantOne",
      brand: "perter england",
      cloth: "pants",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1cuHoJxlnUzsKPH9JpPqFFTEJToeLumoFQ&usqp=CAU",
      price: 700,
      gender: "kids",
    },
    {
      id: 15,
      name: "pantOne",
      brand: "perter england",
      cloth: "shirts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ismSr2BUPFY08uRKZvbje9Qe3bOqyubovw&usqp=CAU",
      price: 900,
      gender: "kids",
    },
    {
      id: 16,
      name: "pantOne",
      brand: "perter england",
      cloth: "pants",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBs7VLWNxKQLlZEnn5Ie3dj-t0xpGsM0uLmA&usqp=CAU",
      price: 1100,
      gender: "kids",
    },
    {
      id: 17,
      name: "pantOne",
      brand: "perter england",
      cloth: "chudis",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU43uP6jvegf-3BoKW_UlUQjtAJhLcX2hl0g&usqp=CAU",
      price: 400,
      gender: "kids",
    },
    {
      id: 18,
      name: "pantOne",
      brand: "perter england",
      cloth: "t-shirts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgdJsRoB2GxXoovIcypneeMcgPcQtIcUWfQ&usqp=CAU",
      price: 700,
      gender: "kids",
    },
    {
      id: 19,
      name: "pantOne",
      brand: "perter england",
      cloth: "shirts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUalyxTgHR7MxsZsejCFHS4QWulL8m3bEblg&usqp=CAU",
      price: 900,
      gender: "kids",
    },

    {
      id: 20,
      name: "pantOne",
      brand: "perter england",
      cloth: "pants",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7n9p81HWFZA3tavvZCx7Uplo_AiFlJur0-g&usqp=CAU",
      price: 1100,
      gender: "kids",
    },
  ]);
  return (
    <div className="App">
      <div className="pt-3 bg-light">
        <Nav cartCount={cartCount} setCartCount={setCartCount} />
      </div>
      <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products products={products}
        dispalyProducts={dispalyProducts}
        setDisplayProducts={setDisplayProducts}
        displayCartProducts={displayCartProducts}
        setDisplayCartProducts={setDisplayCartProducts}
        setCartCount={setCartCount} 
        cartCount={cartCount} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="cart" element={<Cart displayCartProducts = {displayCartProducts} setDisplayCartProducts={setDisplayCartProducts} cartCount={cartCount} setCartCount={setCartCount} />}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
