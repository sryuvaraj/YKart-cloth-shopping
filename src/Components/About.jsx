import React from "react";

const AboutPage = () => {
  const paragraphStyle = {
    textAlign: "justify",
    textIndent: "20px",
    margin:"20px"
    
  };
  const containerStyle = {};
  const headerStyle = {
    textAlign:"center",
    padding:"20px"
  };
  return (
    <>
      <div>
        <div className="row"><h1 style={headerStyle}>About Us</h1>
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div style={containerStyle}>
              
              <li style={paragraphStyle}>
                Welcome to YKart, your one-stop destination for the latest
                fashion trends!
              </li>
              <li style={paragraphStyle}>
                At YKart, we believe that fashion is a form of self-expression.
                Our mission is to provide high-quality, trendy clothing that
                allows you to express your unique style and personality.
              </li>
              <li style={paragraphStyle}>
                
                Our carefully curated collection features a wide range of
                styles, from casual and comfortable to chic and sophisticated.
                We source our products from top designers and ensure that each
                item meets our standards of quality and style.
              </li>
              <li style={paragraphStyle}>
                Shopping with us is not just about buying clothes; it's about
                embracing your individuality and staying on top of the latest
                fashion trends. Our user-friendly website makes it easy for you
                to explore our catalog, find the perfect pieces, and have them
                delivered to your doorstep.
              </li>
              <li style={paragraphStyle}>
                Thank you for choosing [Your Brand Name]. Join us on this
                fashion journey, and let's redefine style together!
              </li>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
