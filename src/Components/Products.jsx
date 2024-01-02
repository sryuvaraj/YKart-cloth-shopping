import React from 'react'
import CatagoryNav from './CatagoryNav'
import DisplayProducts from './DisplayProducts'

const Products = ({products,dispalyProducts,setDisplayProducts, displayCartProducts,setDisplayCartProducts,setCartCount,cartCount}) => {
  return (
    <>
    <div>
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
        <DisplayProducts products={products} dispalyProducts={dispalyProducts}  displayCartProducts={displayCartProducts}
        setDisplayCartProducts={setDisplayCartProducts} setCartCount={setCartCount} cartCount={cartCount}  />
      </div>
     </div>
    </div>
    </>
  )
}

export default Products