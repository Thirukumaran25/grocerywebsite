import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { cartContext } from '../App'
import {Link} from 'react-router-dom'
import Payment from './Payment'

function Cartpage({finalamt, setFinalamt }) {
  const [total,setTotal]=useState(0)
  const { cart,setCart, increaseQuantity, decreaseQuantity } = useContext(cartContext);
  
useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price) * (curr.quantity || 1), 0));

    const newFinalAmt = total + 50 - (total * 0.05);
    setFinalamt(newFinalAmt);
  }, [cart, setFinalamt]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart)); 
  }, [cart]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [setCart]);

  
  return (
    <>
    <div>
  <center>
  <h3 style={{fontWeight:"bold",fontSize:"32px"}}>Cart</h3>
  <nav style={{fontWeight:"bold",fontSize:"23px", padding:"40px 0px"}}>
    <span className="text-success">BAG</span>
    <span className="text-muted">&gt;</span>
    <span className="text-muted">ADDRESS</span>
    <span className="text-muted">&gt;</span>
    <span className="text-muted">PAYMENT</span>
  </nav>
  </center>
  <main className="cartmain">
    <div className="carsect1">
        {
          cart.map((product)=>(
        <div className="carsect3" key={product.id}>
          <div style={{width:"100px",height:"100px"}}>
            <img alt="image" className="img-fluid rounded-lg" src={product.imgSrc} style={{width:"100%",height:"100%"}} />
          </div>
          <div className="">
            <p className="">Vegetables</p>
            <p className="">{product.title}</p>
            <p className="">₹{product.price}</p>
          </div>
          <div className="" style={{padding:"10px"}}>
            <button style={{fontSize:"48px",backgroundColor:"transparent",border:"none"}} onClick={() => decreaseQuantity(product.id)} className="" type="button">-</button>
            <span style={{padding:"5px 10px",margin:"10px",backgroundColor:"green",color:"white",fontSize:"22px"}} className="">{product.quantity || 1}</span>
            <button style={{fontSize:"48px",backgroundColor:"transparent",border:"none"}} onClick={() => increaseQuantity(product.id)} className="" type="button">+</button>
          </div>
        </div> 
          ))
        }
      </div> 
    <section  className="carsect2">
      <div className="d-flex justify-content-between">
        <span>Subtotal</span>
        <span>₹ {total}</span>
      </div>
      <div className="d-flex justify-content-between">
        <span>Delivery Charges</span>
        <span>₹ 50</span>
      </div>
      <div className="d-flex justify-content-between">
        <span>Discount</span>
        <span>- ₹ {total*.05}</span>
      </div>
      <hr className="my-2"/>
      <div className="d-flex justify-content-between">
        <span style={{fontWeight:"bold",fontSize:"24px"}}>TOTAL</span>
        <span>₹ {finalamt ? finalamt.toFixed(2) : '0.00'}</span>
      </div>
      <center>
      <Link to="/Address"><button className="btn btn-success btn-block font-weight-bold mt-2" type="button">CHECKOUT</button></Link> 
      <div className="gap-2  mt-2">
        <i className="fas fa-lock"></i>
        <span>100% Secure Payments</span>
      </div>
      </center>
    </section>
  </main>
  </div>

    </>
  )
}

export default Cartpage
