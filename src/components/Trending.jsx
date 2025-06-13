import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../App';
import trendimg1 from '../images/trending 1.png'
import trendimg2 from '../images/trending 2.png'
import trendimg3 from '../images/trending 3.png'

const productsData = [
  { id: 68, imgSrc: trendimg1, title: 'Organic Garlic', price: 150 },
  { id: 69, imgSrc: trendimg2, title: 'Strawberries', price: 240 },
  { id: 70, imgSrc: trendimg3, title: 'Spinach', price: 25 },
];

function Trending() {
    const {cart,setCart}=useContext(cartContext)
    const [filteredProducts, setFilteredProducts] = useState(productsData);
    
      const addcart = (product) => {
        setCart([...cart, product]);
        alert("Added to cart");
      };
    const removecart=(product)=>{
          setCart(cart.filter((c)=>c.id !==product.id))
        }
  return (
    <>
    {filteredProducts.map((product) => (
        <div className='subheadingtab1' key={product.id}>
            <div className='newarival1'>
                <div className='arivaldiv1'>
                    <img src={product.imgSrc} alt={product.title} />
                </div>
                <div className='arivaldiv2'>
                    <h5>{product.title}</h5>
                    <p>₹ {product.price}</p>
                    {cart.includes(product) ? <button className="btn btn-danger mt-auto fw-semibold" type="button" onClick={() => removecart(product)}>
                        Remove from cart
                    </button> : <button className="btn btn-success mt-auto fw-semibold" type="button" onClick={() => addcart(product)}>
                        Add to cart
                    </button>}
                </div>
            </div>
        </div>
    ))}
    </>
  )
}

export default Trending