import React, { useContext, useEffect, useState } from 'react'
import newarrivimg1 from '../images/new arrivals 1.png'
import newarrivimg2 from '../images/new arrivals 2.png'
import newarrivimg3 from '../images/new arrivals 3.png'
import { cartContext } from '../App';

const productsData = [
  { id: 65, imgSrc: newarrivimg1, title: 'European Zesty lemon', price: 80 },
  { id: 66, imgSrc: newarrivimg2, title: 'Apple from Kashmir', price: 240 },
  { id: 67, imgSrc: newarrivimg3, title: 'Coconuts', price: 320 },
];

function Newarrival() {
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

export default Newarrival