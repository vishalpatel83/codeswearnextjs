import React,{useState} from 'react';
import { useEffect } from 'react';
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState({});
  const [ subTotal={subTotal}, setsubTotal] = useState(0)
  useEffect(()=>{
    try {
      if(localStorage.getItem("cart")){
        setcart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.log(error)
      localStorage.clear();
    }
  },[])
  const saveCart=(myCart)=>{
    localStorage.setItem("cart",JSON.stringify(myCart));
    let subt=0;
    let keys=Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subt+=myCart[keys[i]].price * myCart[keys[i]].qty;       
    }
    setsubTotal(subt);
  }
  const clearCart=()=>{
    setcart({})
    saveCart({})
  }
  const addToCart=(itemCode,qty,price,name,size,varient)=>{
    debugger
   let newCart=cart;
   if(itemCode in cart){
     newCart[itemCode].qty=cart[itemCode].qty+qty;
   }
   else{
     newCart[itemCode]={qty:1,price,name,size,varient}
   }
   setcart(newCart);
   saveCart(newCart);
  }
  const removeFromCart=(itemCode,qty,price,name,size,varient)=>{
    debugger
    let newCart=cart;
    if(itemCode in cart){
      newCart[itemCode].qty=cart[itemCode].qty-qty;
    }
    if(newCart[itemCode].qty<=0){
        delete newCart[itemCode]
    }
    setcart(newCart);
    saveCart(newCart);
  }
  return (
  <>
  <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/>
  <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
  <Footer/>
  </>
  )
}

export default MyApp
