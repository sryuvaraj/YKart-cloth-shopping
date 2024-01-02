import React from 'react'

const Product = (item, setCartCount, cartCount) => {
    const count = item.cartCount
  return (
    <>
    <div>
        <div >
            <div className='m-2'>
            <img src={item.item.img}/>
            <button onClick={e => {item.setCartCount(count+1)}} >Add to Cart</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product