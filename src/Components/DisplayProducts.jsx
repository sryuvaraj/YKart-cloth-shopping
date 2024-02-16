import React, { useState } from "react";

const DisplayProducts = ({ products, dispalyProducts, displayCartProducts,setDisplayCartProducts,setCartCount,cartCount, cartTotal,setcartTotal, buyItems,setBuyItems }) => {
 
  const addForBuy = (i) =>{

  }


  const handleAddCar = (item) => {
    setDisplayCartProducts([...displayCartProducts, item])
    setCartCount(cartCount+1)
    setBuyItems([...buyItems,item])
    setcartTotal(cartTotal+item.price)
    alert("Item added to the cart")
  }
    console.log(displayCartProducts)
  return (
    <>
      <div className="p-4">
        <div>
        </div>
        <div style={{ display: "flex",flexWrap:"wrap"}}>

        {dispalyProducts.length ? (
          dispalyProducts.map((i) => (
    <div key={i.id} className="m-2 p-3" style={{ backgroundColor: "#F6F8F9", width: "250px" }}>
      <img src={i.img} alt={i.name} style={{ height: "200px", width: "200px", borderRadius: "5px" }} />
      <p style={{ fontWeight: "600", fontSize: "15px", textTransform: "capitalize" }}>{i.brand}</p>
      <p style={{ fontWeight: "600", fontSize: "15px", textTransform: "capitalize" }}>{i.name}</p>
      <p className="" style={{ color: "#115E88" }}>Rs: {i.price}.00 /-</p>
      <button onClick={() => handleAddCar(i)} className="btn btn-success">Add to cart</button>
    </div>
  ))
) : (
  products.map((i) => (
    <div key={i.id} className="m-2 p-3" style={{ backgroundColor: "#F6F8F9", width: "250px" }}>
      <img src={i.img} alt={i.name} style={{ height: "200px", width: "200px", borderRadius: "5px" }} />
      <p style={{ fontWeight: "600", fontSize: "15px", textTransform: "capitalize" }}>{i.brand}</p>
      <p style={{ fontWeight: "600", fontSize: "15px", textTransform: "capitalize" }}>{i.name}</p>
      <p className="" style={{ color: "#115E88" }}>Rs: {i.price}.00 /-</p>
      <button onClick={() => handleAddCar(i)} className="btn btn-success">Add to cart</button>
    </div>
  ))
)}

       
            
        </div>
      </div> 
    </>
  );
};

export default DisplayProducts;
