import React from 'react'
import CatagoryNav from './CatagoryNav'
import DisplayProducts from './DisplayProducts'
import Nav from './Nav'

const Products = ({products,dispalyProducts,setDisplayProducts, displayCartProducts,setDisplayCartProducts,setCartCount,cartCount, cartTotal,setcartTotal, buyItems,setBuyItems}) => {
  return (
    <>
    <div>
    <div className="pt-3 bg-light">
        <Nav cartCount={cartCount} setCartCount={setCartCount}  />
      </div>
    <h3 className="text-center pt-5">Products</h3>
     <div className='row'>
       <div className='col-md-2'>
      <CatagoryNav
        products={products}
        dispalyProducts={dispalyProducts}
        setDisplayProducts={setDisplayProducts}
      />
      </div>
      <div className='col-md-10'>
        <DisplayProducts
                buyItems = {buyItems}
                setBuyItems = {setBuyItems}
                cartTotal = {cartTotal}
                setcartTotal = {setcartTotal}
         products={products} dispalyProducts={dispalyProducts}  displayCartProducts={displayCartProducts}
        setDisplayCartProducts={setDisplayCartProducts} setCartCount={setCartCount} cartCount={cartCount}  />
      </div>
     </div>
    </div>
    </>
  )
}

export default Products