import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ContactPage from "./Contact";
import "../Css/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faRotateLeft, faTable, faTag, faTruck} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const bgImage = {
    backgroundImage:
      'url("https://images.pexels.com/photos/6310923/pexels-photo-6310923.jpeg?auto=compress&cs=tinysrgb&w=600")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <>
      <div>
        <div className="row" style={bgImage}>
          <div className="col-md-6 text-center py-5">
            <h3>Fashion Sale</h3>
            <h2>Minimal Men's Style</h2>
            <p>
              Being perfectly well-dressed gives one a tranquility that no
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
              src="https://images.pexels.com/photos/6310923/pexels-photo-6310923.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9n7C_5S1ysH5UNQxtAMlktBFGgD02rF1AjA&usqp=CAU" />
              </div>
            </Link>
            <Link className="col-md-2" to="/products">
              <div className=" homeProd">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-yerZppXRGZtcbks_gNglWThGvVtNyTh5Q&usqp=CAU" />
              </div>
            </Link>
            <Link className="col-md-2" to="/products">
              <div className=" homeProd">
                <img src="data:image/jpeg;base64,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" />
              </div>
            </Link>
            <Link className="col-md-2" to="/products">
              <div className=" homeProd">
                <img src="data:image/jpeg;base64,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" />
              </div>
            </Link>
            <Link className="col-md-2" to="/products">
              <div className=" homeProd">
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663623093-GUEST_38605b4a-010d-4274-b7b6-59afba61c170.jpg?crop=1xw:1.00xh;center,top&resize=980:*" />
              </div>
            </Link>
            <Link className="col-md-2" to="/products">
              <div className=" homeProd">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qQCiVHKxh-9aMgiJfPxuDN-Co4RrNKXi2w&usqp=CAU" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
