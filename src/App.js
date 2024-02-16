import Home from "./Components/Home";
import Nav from "./Components/Nav";
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import CatagoryNav from "./Components/CatagoryNav";
import DisplayProducts from "./Components/DisplayProducts";
import Login from "./Components/Login";
import Products from "./Components/Products";
import ContactPage from "./Components/Contact";
import About from "./Components/About";
import Cart from "./Components/Cart";
import AddressForm from "./Components/AddressForm";
import Orders from "./Components/Orders";
import FirstScreen from "./Components/FirstScreen";
import Register from "./Components/Regsiter";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "tshirtOne",
      brand: "perter england",
      cloth: "t-shirts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZBN8_rYIEpeZVaG3g1PnkxLUykb21nwQxg&usqp=CAU",
      price: 400,
      gender: "men",
    },

    {
      id: 2,
      name: "tshirtTwo",
      brand: "perter england",
      cloth: "t-shirts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64EzBf-hqOWJ1EjbZHxb2o_52hGbPAZ8DYQ&usqp=CAU",
      price: 700,
      gender: "men",
    },
    {
      id: 3,
      name: "pantOne",
      brand: "perter england",
      cloth: "pants",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQweY-Osc9zvG_LU26TQhnLbUayRo-exOgXIw&usqp=CAU",
      price: 900,
      gender: "men",
    },
    {
      id: 4,
      name: "pantOne",
      brand: "perter england",
      cloth: "pants",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFJcbg_7h62xQ8cfRWhGYEJ6tR9yhTwiyBfWgODYzFcrvJXD5pho-Yc4vhYBngF7xrj8&usqp=CAU",
      price: 1100,
      gender: "men",
    },
    {
      id: 5,
      name: "pantOne",
      brand: "perter england",
      cloth: "shirts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvxFVNa7_4KlH1lCkkLIuezfiOQolb56bZKDVyWVNwI-NVxU1cENMgjVnAD4cVLlEA_g&usqp=CAU",
      price: 400,
      gender: "men",
    },
    {
      id: 6,
      name: "pantOne",
      brand: "perter england",
      cloth: "shirts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0yR4h9IZ6WOoGOZbViW9mYJuNlEBfqRdSw&usqp=CAU",
      price: 700,
      gender: "men",
    },
    {
      id: 7,
      name: "pantOne",
      brand: "perter england",
      cloth: "chudis",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfV4KJ6Gh3l14Tx8WeeFDkw7BRZELgb1FH5w&usqp=CAU",
      price: 900,
      gender: "women",
    },
    {
      id: 8,
      name: "pantOne",
      brand: "perter england",
      cloth: "chudis",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxiRh1I1sgWSbW4koPDEMb0t5L_gOhmB8KA&usqp=CAU",
      price: 1100,
      gender: "women",
    },
    {
      id: 9,
      name: "pantOne",
      brand: "perter england",
      cloth: "chudis",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzMYPvdsWvhnJmce5bnrIeqUgraS-0wGygA&usqp=CAU",
      price: 400,
      gender: "women",
    },
    {
      id: 10,
      name: "pantOne",
      brand: "perter england",
      cloth: "sarees",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjih5TDl18_0U3q6Tl7s9LP3VYHfeUoLRlOA&usqp=CAU",
      price: 700,
      gender: "women",
    },
    {
      id: 11,
      name: "pantOne",
      brand: "perter england",
      cloth: "sarees",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-XFK4kU7gFKJN7_4Qji-IXFLQFZiUEa-yQ&usqp=CAU",
      price: 900,
      gender: "women",
    },
    {
      id: 12,
      name: "pantOne",
      brand: "perter england",
      cloth: "sarees",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkG8O5-cM5l3I46X8lkkxC-1kBYFE890N8A&usqp=CAU",
      price: 1100,
      gender: "women",
    },
    {
      id: 13,
      name: "pantOne",
      brand: "perter england",
      cloth: "sarees",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXVRg13B3iVpa5zvuyqG7zGxvAlGStmM-RrA&usqp=CAU",
      price: 400,
      gender: "kids",
    },
    {
      id: 14,
      name: "pantOne",
      brand: "perter england",
      cloth: "pants",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1cuHoJxlnUzsKPH9JpPqFFTEJToeLumoFQ&usqp=CAU",
      price: 700,
      gender: "kids",
    },
    {
      id: 15,
      name: "pantOne",
      brand: "perter england",
      cloth: "shirts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ismSr2BUPFY08uRKZvbje9Qe3bOqyubovw&usqp=CAU",
      price: 900,
      gender: "kids",
    },
    {
      id: 16,
      name: "pantOne",
      brand: "perter england",
      cloth: "pants",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBs7VLWNxKQLlZEnn5Ie3dj-t0xpGsM0uLmA&usqp=CAU",
      price: 1100,
      gender: "kids",
    },
    {
      id: 17,
      name: "pantOne",
      brand: "perter england",
      cloth: "chudis",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU43uP6jvegf-3BoKW_UlUQjtAJhLcX2hl0g&usqp=CAU",
      price: 400,
      gender: "kids",
    },
    {
      id: 18,
      name: "pantOne",
      brand: "perter england",
      cloth: "t-shirts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgdJsRoB2GxXoovIcypneeMcgPcQtIcUWfQ&usqp=CAU",
      price: 700,
      gender: "kids",
    },
    {
      id: 19,
      name: "pantOne",
      brand: "perter england",
      cloth: "shirts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUalyxTgHR7MxsZsejCFHS4QWulL8m3bEblg&usqp=CAU",
      price: 900,
      gender: "kids",
    },

    {
      id: 20,
      name: "pantOne",
      brand: "perter england",
      cloth: "pants",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7n9p81HWFZA3tavvZCx7Uplo_AiFlJur0-g&usqp=CAU",
      price: 1100,
      gender: "kids",
    },

    // {
    //   id: 1,
    //   name: "wm One",
    //   brand: "perter england",
    //   cloth: "washing-machine",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWz9MLRF55cNbOVMIvzqW74EBcEO2yuEe0TIHctP674F_Th7Z_ZFYmFpInUGJOZhdd_uw&usqp=CAU",
    //   price: 1,
    //   gender: "men",
    // },

    // {
    //   id: 2,
    //   name: "wm Two",
    //   brand: "perter england",
    //   cloth: "washing-machine",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cMJt_KhA9iCYttRU2vzSc2A2Fgum-AdSV02I5kkx1vkgMQ7nLxKV4k2gzmHMRQBtRYM&usqp=CAU",
    //   price: 700,
    //   gender: "men",
    // },
    // {
    //   id: 3,
    //   name: "wm Three",
    //   brand: "perter england",
    //   cloth: "washing-machine",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0fqEXEeZG4iKFBdG0D9lshXD9Io89sUg-Bw&usqp=CAU",
    //   price: 900,
    //   gender: "men",
    // },
    // {
    //   id: 4,
    //   name: "wm Four",
    //   brand: "perter england",
    //   cloth: "washing-machine",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2yT1FWQXP3h380os8LL2J64TpZPZ9U9FoA&usqp=CAU",
    //   price: 1100,
    //   gender: "men",
    // },
    // {
    //   id: 5,
    //   name: "wm Five",
    //   brand: "perter england",
    //   cloth: "washing-machine",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVRuui6hpp9LSmTfE-1zYoXywe1POQD3t1g&usqp=CAU",
    //   price: 400,
    //   gender: "men",
    // },
    // {
    //   id: 6,
    //   name: "Fridge One",
    //   brand: "perter england",
    //   cloth: "fridge",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnh1-vT8lrLfFUQs_r-IGf9MFpdVGi1g0M3Q&usqp=CAU",
    //   price: 700,
    //   gender: "men",
    // },
    // {
    //   id: 7,
    //   name: "fridge Two",
    //   brand: "perter england",
    //   cloth: "fridge",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREwRRZtd2VehrA7zSDb5lVvoeRZMPdDgSxug&usqp=CAU",
    //   price: 900,
    //   gender: "women",
    // },
    // {
    //   id: 8,
    //   name: "fridge Three",
    //   brand: "perter england",
    //   cloth: "fridge",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsc_H9P1oFa_UNwq1BaUgakBN-rcTjXjJ0gQ&usqp=CAU",
    //   price: 1100,
    //   gender: "women",
    // },
    // {
    //   id: 9,
    //   name: "fridge Four",
    //   brand: "perter england",
    //   cloth: "fridge",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI6qbKd2nYostFvMwug8wdG2n1JQM2dQhSkA&usqp=CAU",
    //   price: 400,
    //   gender: "women",
    // },
    // {
    //   id: 10,
    //   name: "fridge Five",
    //   brand: "perter england",
    //   cloth: "fridge",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ575qtc6MSGyepDDoB5W4O99Y_0GqEdhupHWz8tM250MZpq-P-ZirvJuLw_ozzkSl8tWE&usqp=CAU",
    //   price: 700,
    //   gender: "women",
    // },
    // {
    //   id: 11,
    //   name: "ac One",
    //   brand: "perter england",
    //   cloth: "ac",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiOYqYOb7CKwV5CNAPydXJKLPN6I9j_RyeOw&usqp=CAU",
    //   price: 900,
    //   gender: "women",
    // },
    // {
    //   id: 12,
    //   name: "ac Two",
    //   brand: "perter england",
    //   cloth: "ac",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtD0IV4aKCqraSBk6Dw99x8QEBArOuZ6raEg&usqp=CAU",
    //   price: 1100,
    //   gender: "women",
    // },
    // {
    //   id: 13,
    //   name: "ac Three",
    //   brand: "perter england",
    //   cloth: "ac",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpTnReRNj8SmK2CTqc_GQ65cFB7p_qfYCYrQ&usqp=CAU",
    //   price: 400,
    //   gender: "kids",
    // },
    // {
    //   id: 14,
    //   name: "ac Four",
    //   brand: "perter england",
    //   cloth: "pants",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwZLedo1bbTSPfbLiJs5-fOTGUq-rxef82A&usqp=CAU",
    //   price: 700,
    //   gender: "kids",
    // },
    // {
    //   id: 15,
    //   name: "ac Five",
    //   brand: "perter england",
    //   cloth: "ac",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY9cwRG5k7RGgwl2WJ4DXHDomeiNB2OXsIKA&usqp=CAU",
    //   price: 900,
    //   gender: "kids",
    // },
    // {
    //   id: 16,
    //   name: "TV One",
    //   brand: "perter england",
    //   cloth: "tv",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6wvnPu2U3p7ME4M3T5hRrKl21MWujrmseySqgeRomQte0pC5vIjMVcW2FL8tSLLfNzEE&usqp=CAU",
    //   price: 1100,
    //   gender: "kids",
    // },
    // {
    //   id: 17,
    //   name: "TV Two",
    //   brand: "perter england",
    //   cloth: "tv",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWibh8TB2izVrdL9_blW1pDMjIaV2XXwOuw&usqp=CAU",
    //   price: 400,
    //   gender: "kids",
    // },
    // {
    //   id: 18,
    //   name: "TV Three",
    //   brand: "perter england",
    //   cloth: "tv",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKtyHU5QccykmvmsC5K6GkhEqqOVCoDR7GL0KGCW9CWGUuppAPVFgW_UcT4fid3VfDgH8&usqp=CAU",
    //   price: 700,
    //   gender: "kids",
    // },
    // {
    //   id: 19,
    //   name: "TV Four",
    //   brand: "perter england",
    //   cloth: "tv",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFjhCatTwXCNACoHESiMgxd1_Iybw552texg&usqp=CAU",
    //   price: 900,
    //   gender: "kids",
    // },

    // {
    //   id: 20,
    //   name: "TV Five",
    //   brand: "perter england",
    //   cloth: "tv",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmX0WnjPqC19qE8zPTMXKh9kemmrXjUpsUqw&usqp=CAU",
    //   price: 1100,
    //   gender: "kids",
    // },

    ])

    const [profileUsers, setProfileUsers] = useState(
      [
        {
          id:1,
          pName:"Yuvaraj S R",
          pEmail:"sryuvaraj99@gmail.com",
          pDob:"03-06-1999",
          pRole:"Junior Developer",
          pImg:"abc.jpg",
        },
        {
          id:2,
          pName:"Yuvaraj E S R",
          pEmail:"esryuvaraj99@gmail.com",
          pDob:"02-06-1999",
          pRole:"Junior Developer",
          pImg:"abcd.jpg",
        }
      ]
    )
  
    const [loginUsers,setLoginUsers] = useState([
      {
        id:1,
        name:"Yuvaraj",
        lName:"S R",
        email:"sryuvaraj99@gmail.com",
        createPassword:"Yuvaraj@123",
        confirmPassword:"Yuvaraj@123",
        mobile:"8220496965"
      }
    ])
    const [editVals, setEditVals] = useState(
      {
        pName:"",
        pEmail:"",
        pRole:"",
        pDob:""
      })

    const [ordersList, setOrdersList] = useState([null])
  const [dispalyProducts, setDisplayProducts] = useState([]);
  const [displayCartProducts, setDisplayCartProducts] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setcartTotal] = useState(0)
  const [buyItems, setBuyItems] = useState([])
  return (
    <div className="App">
      <div>
      <Routes>
      <Route index element ={<FirstScreen />}></Route>
        <Route path='/login' element={<Login 
        loginUsers = {loginUsers}
        />}></Route>
        <Route path='/register' element={<Register
        loginUsers = {loginUsers}
        setLoginUsers = {setLoginUsers}
        />}></Route>
        <Route path='/home' element={<Home
        profileUsers={profileUsers}
        setProfileUsers={setProfileUsers}
        editVals = {editVals}
        setEditVals = {setEditVals}
        />}></Route>
        <Route path="/products" element={<Products products={products}
                buyItems = {buyItems}
                setBuyItems = {setBuyItems}
                cartTotal = {cartTotal}
                setcartTotal = {setcartTotal}
        dispalyProducts={dispalyProducts}
        setDisplayProducts={setDisplayProducts}
        displayCartProducts={displayCartProducts}
        setDisplayCartProducts={setDisplayCartProducts}
        setCartCount={setCartCount} 
        cartCount={cartCount} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="cart" element={<Cart
        ordersList = {ordersList}
        setOrdersList = {setOrdersList}
        buyItems = {buyItems}
        setBuyItems = {setBuyItems}
        cartTotal = {cartTotal}
        setcartTotal = {setcartTotal}
         displayCartProducts = {displayCartProducts} setDisplayCartProducts={setDisplayCartProducts} cartCount={cartCount} setCartCount={setCartCount} />}></Route>
         <Route path="/address" element={<AddressForm 
         setDisplayCartProducts={setDisplayCartProducts}
         setcartTotal = {setcartTotal}
         setCartCount={setCartCount}
          cartTotal = {cartTotal}
         />}></Route>

<Route path="/orders" element={<Orders 
ordersList = {ordersList}
setOrdersList = {setOrdersList}
         setDisplayCartProducts={setDisplayCartProducts}
         setcartTotal = {setcartTotal}
         setCartCount={setCartCount}
          cartTotal = {cartTotal}
         />}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
