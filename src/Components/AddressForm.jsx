import React, { useState } from 'react';

const AddressForm = ({ cartTotal,setDisplayCartProducts,setcartTotal,setCartCount,ordersList, setOrdersList }) => {
  const initAddress = {
    name: '',
    address: '',
    mobile: null
  };

  const [address, setAddress] = useState(initAddress);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const totalBuyNow = () => {
    console.log(address);
    var options = {
      key: "rzp_test_zt5DDs1PmkkyDy",
      amount: cartTotal * 100,
      currency: "INR",
      name: "STARTUP_PROJECTS",
      description: "for testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "Velmurugan",
        email: "mvel1620r@gmail.com",
        contact: "7904425033"
      },
      notes: {
        address: "Razorpay Corporate office"
      },
      theme: {
        color: "#3399cc"
      }
    };
    var pay = new window.Razorpay(options);
    pay.open();
    setDisplayCartProducts([])
    setCartCount(0)
    setcartTotal(0)
    setOrdersList([...ordersList,setDisplayCartProducts])
  };
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
  return (
    <>
      <div>
        <div>AddressForm</div>
        <div>
          <form>
            <div className='form-control'>
              <label>Name:
                <input type='text' placeholder='Name' name='name' value={address.name} onChange={handleChange} />
              </label>
            </div>
            <div className='form-control'>
              <label>Address:
                <input type='text' placeholder='Address' name='address' value={address.address} onChange={handleChange} />
              </label>
            </div>
            <div className='form-control'>
              <label>Mobile:
                <input type='number' placeholder='Mobile' name='mobile' value={address.mobile} onChange={handleChange} />
              </label>
            </div>
          </form>
        </div>
        <button onClick={totalBuyNow} className="btn btn-primary">Delivery Here and Place Order</button><br />
      </div>
    </>
  );
};

export default AddressForm;
