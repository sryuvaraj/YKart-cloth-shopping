import GooglePayButton from '@google-pay/button-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Cart = ({displayCartProducts,setDisplayCartProducts, cartCount, setCartCount, cartTotal,setcartTotal, buyItems,setBuyItems,ordersList, setOrdersList}) => {
  const dispalyProducts = displayCartProducts
  const handleRemoveFromCart = (item) => {
    setDisplayCartProducts(dispalyProducts.filter(i => i.id !== item.id) )
    setCartCount(cartCount -1)

    setBuyItems(buyItems.filter(i => i.id !== item.id))
    setcartTotal(cartTotal-item.price)
    alert("Item removed fromthe cart")
  }
  const addForBuy = (i) =>{
    setBuyItems([...buyItems,i])
    setcartTotal(cartTotal+i.price)
  }

  const logitem = () => {
    console.log(buyItems)
  }


  const buyNow = (i) => {

    console.log(dispalyProducts)
    var options = {
      key: "rzp_test_zt5DDs1PmkkyDy",
      amount: cartTotal *100,
      currency:"INR",
      name:"STARTUP_PROJECTS",
      description:"for testing purpose",
      handler: function(response){
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name:"Velmurugan",
        email:"mvel1620r@gmail.com",
        contact:"7904425033"
      },
      notes:{
        address:"Razorpay Corporate office"
      },
      theme: {
        color:"#3399cc"
      }
    };
    var pay = new window.Razorpay(options);
    pay.open();
    setDisplayCartProducts([])
    setCartCount(0)
    setcartTotal(0)
    setOrdersList([...ordersList,setDisplayCartProducts])
  }

   const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "USD",
      countryCode: "US"
    }
  };
  const buttonStyles = {
    backgroundColor: 'blue', // Change this to your desired color
    // You can add more custom styles here if needed
  };
  return (
   <>
         <div className="pt-3 bg-light">
        <Nav cartCount={cartCount} setCartCount={setCartCount} />
      </div>
   <div className='contanier'>
   <h3 className="text-center py-4"><u>Cart</u></h3>
   <div className=' p-4 px-5' style={{ display: "flex",flexWrap:"wrap"}}>
        
        {
        // dispalyProducts.map(i => (
        // <div key={i.id} className="m-2 p-3" style={{backgroundColor:"#F6F8F9",width:"250px"}}>
        //     <img src={i.img} alt={i.name} style={{height:"200px",width:"200px", borderRadius:"5px"}} />
        //     <p style={{fontWeight:"600",fontSize:"15px",textTransform:"capitalize"}}>{i.brand}</p>
        //     <p style={{fontWeight:"600",fontSize:"15px",textTransform:"capitalize"}}>{i.name}</p>
        //     <p className="" style={{color:"#115E88"}}>Rs: {i.price}.00 /-</p>
        //     <button onClick={() => addForBuy(i)} className="btn btn-success">Add To Buy</button><br/>
        //     <br/>
        //     <button onClick={() => buyNow(i)} className="btn btn-warning">Buy Now</button><br/>
        //     <br/>
        //     {/* <GooglePayButton
        //     style={buttonStyles}
        //   environment="TEST"
        //   // buttonColor={buttonColor}
        //   // buttonType={buttonType}
        //   // buttonSizeMode={buttonSizeMode}
        //   paymentRequest={paymentRequest}
        //   onLoadPaymentData={paymentRequest => {
        //     console.log("load payment data", paymentRequest);
        //   }}
        // /> */}
        //     <button onClick={() => handleRemoveFromCart(i)} className="btn btn-danger">Remove From Cart</button>
        // </div>
        // ))
        }
        {/* <div>
          <div>
            <p className='text-danger'>Items Going to Buy</p>{
            buyItems.map(i => <p>{i.name}</p>)
            }</div>
               <p className='text-success'>Total Amount : {cartTotal}</p>
        <button onClick={() => totalBuyNow()} className="btn btn-warning">But Total Items</button><br/>
            <br/>
        </div> */}
    </div>
    {
      cartCount ? (  <div className='row mx-5' >
      <p className='text-danger'>Items Going to Buy</p>
        <div className='col-md-6 bg-light p-3' style={{borderRight:"1px solid gray"}}>    
          {
            dispalyProducts.map(i => (
              <div key={i.id} className=''>
                <div className='p-3' style={{display:"flex", borderBottom:"1px solid gray"}}>
                  <div className='m-2'><img src={i.img} alt={i.name} style={{height:"130px",width:"130px", borderRadius:"5px"}} /></div>
                  <div>
              <p className='pt-3' style={{fontWeight:"600",fontSize:"15px",textTransform:"capitalize"}}>{i.name}</p>
              <p className="" style={{color:"#115E88"}}>Rs: {i.price}.00 /-</p><button onClick={() => handleRemoveFromCart(i)} className="btn btn-danger">Remove From Cart</button> </div>
              </div>
              </div>
            )
              )
          }
        </div>
        <div className='col-md-6 bg-light px-5' style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start"}}>
        <div className='py-5'>
          <h2 className='mb-4 pb-2' style={{borderBottom:"5px solid gray"}}>Price Details</h2>
          <table>
            <tr>
              <td><p className='text-success'>Price ({cartCount} items)</p></td>
              <td className='px-5'><p> Rs. {cartTotal} /-</p></td>
            </tr>
            <tr>
              <td><p className='text-success'>Total Discout </p></td>
              <td className='px-5'><p> Rs. 00 /-</p></td>
            </tr>
            <tr>
            <td><p className='text-success'>Deleivery Charges </p></td>
              <td className='px-5'><p> Rs. 00 /-</p></td>
            </tr>
            <tr className='' style={{borderTop:"1px solid gray"}}>
              <td><p className='text-success'>Total Amount </p></td>
              <td className='px-5'><p> Rs. {cartTotal} /-</p></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </table>
          <button onClick={buyNow} className='btn btn-success'>Place order</button>

              <br/>
          </div>
        </div>
      </div>
      ) : (
        <div style={{display:"flex", justifyContent:"center"}}>
        <div>
        <p className='text-center text-dark'>Please add items to cart</p>
        <Link to="/products">
        <button
                    className="bg-dark text-light p-1 px-3 text-center"
                    style={{ border: "1px solid black" }}
                  >
                    <b>Shop Now...</b>
                  </button></Link>
                    
          </div>
      </div>
      )
    }
   </div>
   </>
  )
}

export default Cart