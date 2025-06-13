import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../App';
import bestsellimg1 from '../images/best selling home 1.png'
import bestsellimg2 from '../images/best selling home 2.png'
import bestsellimg3 from '../images/best selling home 3.png'

const productsData = [
  { id: 71, imgSrc: bestsellimg1, title: 'Organic Garlic', price: 150 },
  { id: 72, imgSrc: bestsellimg2, title: 'Strawberries', price: 240 },
  { id: 73, imgSrc: bestsellimg3, title: 'Spinach', price: 25 },
];

function Bestselling() {
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

export default Bestselling