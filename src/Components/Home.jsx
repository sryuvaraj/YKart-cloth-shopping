import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ContactPage from "./Contact";
import "../Css/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faRotateLeft, faTable, faTag, faTruck} from '@fortawesome/free-solid-svg-icons';
import Nav from "./Nav";

const Home = ({ cartCount, setCartCount}) => {
  const bgImage = {
    backgroundColor:"white",
    backgroundImage:
       'url("data:image/jpeg;base64,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")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "rgb(55,30,79)",
    display: "flex",
    justifyContent: "center",
  };
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <>
      <div>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>

      <div className="pt-3 bg-light">
        <Nav cartCount={cartCount} setCartCount={setCartCount} />
      </div>
        <div className="row" style={bgImage}>
          <div className="col-md-6 text-center py-5">
            <h3>New Sale</h3>
            <h2>Minimal Latest Model and Party Wears</h2>
            <p>
              Being perfectly well-trend and gives one a tranquility that no
              religion can bestow
            </p>

            <h1>Up To 70% Off</h1>
            <h1>Best Seller</h1>
            <Link to="/products">
              <button
                className="bg-dark text-light p-1 px-3"
                style={{ border: "1px solid black" }}
              >
                <b>Shop Now...</b>
              </button>
            </Link>
          </div>
          <div className="col-md-6 text-center py-5">
            <img
              src="data:image/jpeg;base64,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"
              style={{ height: "40vh" }}
            />
          </div>
        </div>

        <div id="fourBenifits" style={{ display: "flex", justifyContent: "center" }}>
          <div className="container py-5 row">
            <div className="col-md-3 text-center"><FontAwesomeIcon icon={faTruck} />
              <p className="fourBenifit">Fast Free Delivery</p>
            </div>
            <div className="col-md-3 text-center"><FontAwesomeIcon icon={faRotateLeft} />
              <p className="fourBenifit">10 days Easy Returns</p>
            </div>
            <div className="col-md-3 text-center"><FontAwesomeIcon icon={faPhone}/>
              <p className="fourBenifit">24/7 Customer Support</p>
            </div>
            <div className="col-md-3 text-center"><FontAwesomeIcon icon={faTag} />
              <p className="fourBenifit">Member Discount</p>
            </div>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <h1 className="" style={{borderBottom:"4px solid #115E88 "}}>Products</h1>
        </div>

        <div className="my-5" style={{ display: "flex", justifyContent: "center" }}>
          <div className="row container" id="">
            <Link className="col-md-2" to="/products">
              <div className=" homeProd">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64EzBf-hqOWJ1EjbZHxb2o_52hGbPAZ8DYQ&usqp=CAU" />
              </div>
            </Link>
            <Link className="col-md-2" to="/products">
              <div className=" homeProd">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQweY-Osc9zvG_LU26TQhnLbUayRo-exOgXIw&usqp=CAU" />
              </div>
            </Link>
            <Link className="col-md-2" to="/products">
              <div className=" homeProd">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkG8O5-cM5l3I46X8lkkxC-1kBYFE890N8A&usqp=CAU" />
              </div>
            </Link>
            <Link className="col-md-2" to="/products">
              <div className=" homeProd">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvxFVNa7_4KlH1lCkkLIuezfiOQolb56bZKDVyWVNwI-NVxU1cENMgjVnAD4cVLlEA_g&usqp=CAU" />
              </div>
            </Link>
            <Link className="col-md-2" to="/products">
              <div className=" homeProd">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1cuHoJxlnUzsKPH9JpPqFFTEJToeLumoFQ&usqp=CAU" />
              </div>
            </Link>
            <Link className="col-md-2" to="/products">
              <div className=" homeProd">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ismSr2BUPFY08uRKZvbje9Qe3bOqyubovw&usqp=CAU" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
