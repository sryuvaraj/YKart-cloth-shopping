import React from 'react'

const Cart = ({displayCartProducts,setDisplayCartProducts, cartCount, setCartCount}) => {
  const dispalyProducts = displayCartProducts
  const handleRemoveFromCart = (itemId) => {
    setDisplayCartProducts(dispalyProducts.filter(i => i.id !== itemId) )
    setCartCount(cartCount -1)
  }
  const buyNow = () => {

    console.log(dispalyProducts)
  }
  return (
   <>
   <div className='contanier'>
   <h3 className="text-center py-4"><u>Cart</u></h3>
   <div className=' p-4 px-5' style={{ display: "flex",flexWrap:"wrap"}}>
        
        {
        dispalyProducts.map(i => (
        <div key={i.id} className="m-2 p-3" style={{backgroundColor:"#F6F8F9",width:"250px"}}>
            <img src={i.img} alt={i.name} style={{height:"200px",width:"200px", borderRadius:"5px"}} />
            <p style={{fontWeight:"600",fontSize:"15px",textTransform:"capitalize"}}>{i.brand}</p>
            <p style={{fontWeight:"600",fontSize:"15px",textTransform:"capitalize"}}>{i.name}</p>
            <p className="" style={{color:"#115E88"}}>Rs: {i.price}.00 /-</p>
            <button onClick={() => buyNow(i)} className="btn btn-success">Buy Now</button><br/>
            <br/>
            <button onClick={() => handleRemoveFromCart(i.id)} className="btn btn-danger">Remove From Cart</button>
        </div>
        ))
        }
    </div>
   </div>
   </>
  )
}

export default Cart