import React, { useContext, useState } from 'react'
import './Eggdes.css'
import { cartContext } from '../App'
import meatimg1 from "../images/meat des 1.png"
import meatimg2 from "../images/meat des 2.png"
import meatimg3 from "../images/meat des 3.png"

const productsData = [
  { id: 19, imgSrc: meatimg3, title: 'Country', price: 120 },
];


function Meatdescrip() {
       const { cart,setCart, increaseQuantity, decreaseQuantity } = useContext(cartContext);
       const [filteredProducts, setFilteredProducts] = useState(productsData);
       const [selectedFruit, setSelectedFruit] = useState('');
       const [quant,setQuant]=useState(1)
  
  
    const handleFruitChange = (e) => {
      const { value } = e.target;
      setSelectedFruit(value); // Set the selected fruit
    };
      
       const addcart = (product) => {
          setCart([...cart, product]); 
          alert("Added to cart");
        };
      const removecart=(product)=>{
        setCart(cart.filter((c)=>c.id !==product.id))
      }
    return (
      <>
      <div className='description'>
          <div className='eggdes1'>
              <div className='eggdesbox1'>
                  <div className='eggdsbx1'>
                      <img src={eggdesimg2} alt="" style={{width:"100%",height:"100%"}} />
                  </div>
                  <div className='eggdsbx2'>
                      <div>
                          <img src={meatimg1} alt="" style={{width:"100%",height:"100%"}} />
                      </div>
                      <div>
                          <img src={meatimg2} alt="" style={{width:"100%",height:"100%"}}/>
                      </div>
                      <div>
                          <img src={meatimg3} alt="" style={{width:"100%",height:"100%"}}/>
                      </div>
                  </div>
              </div>
              <div className='eggdesbox2'>
                  <h4>Fresh Meat</h4>
                  <p>Each of our products are hand-selected from the local 
                      farmers and helps you improve good health</p><br />
                  <h4>₹ 120</h4><br />
                  <h5>TAX INCLUDED |SHIPPING CALCULATED AT CHECKOUT</h5>
                  {filteredProducts.map((product) => (
                      <div key={product.id}>
                      <div className="" style={{padding:"10px"}}>
                      <button style={{fontSize:"48px",backgroundColor:"transparent",border:"none"}} onClick={() => setQuant(quant-1)} className="" type="button">-</button>
                      <span style={{padding:"5px 10px",margin:"10px",backgroundColor:"green",color:"white",fontSize:"22px"}} className="">{quant}</span>
                      <button style={{fontSize:"48px",backgroundColor:"transparent",border:"none"}} onClick={() => setQuant(quant+1)} className="" type="button">+</button>
                  </div>
                  <div>
                  <h6>Quantity:</h6>
                  <label>
                      <input type="checkbox" className="radio" value="250g" checked={selectedFruit === '250g'}
              onChange={handleFruitChange} /> 250g</label>
                  <label>
                      <input type="checkbox" className="radio" value="500g" checked={selectedFruit === '500g'}
              onChange={handleFruitChange} /> 500g</label>
                  <label>
                      <input type="checkbox" className="radio" value="1kg" checked={selectedFruit === '1kg'}
              onChange={handleFruitChange} /> 1kg</label>
                  </div><br />
                  {cart.includes(product) ? <button className="btn btn-danger mt-auto fw-semibold" type="button" onClick={() => removecart(product)}>
                              Remove from cart
                            </button> : <button className="btn btn-success mt-auto fw-semibold" type="button" onClick={() => addcart(product)}>
                              Add to cart
                            </button>}
                   </div>
                  ))}<br />
                  
                  <p><i className="fa-solid fa-truck-fast"></i> Free shipping on all orders over 450 rupees</p>
                  <p><i className="fa-regular fa-clock" style={{color:" #000000"}}></i> Delivery in 3-4 working days shipping & return</p><br />
                  <p style={{color:"green",textDecoration:"underLine"}}> Free delivery and return policies</p>
              </div>
          </div>
          <div className='eggdes2'>
              <h3>DESCRIPTION</h3>
              <p> Strawberries are often described as sweet, juicy, and bright red berries with a fragrant, 
                  fruity aroma. They are typically sold fresh in containers or boxes and are a popular 
                  addition to various recipes and snacks. </p>
              <p>Here's a more detailed look at how strawberries might be described in a grocery store 
                  setting:</p>
              <p>Appearance:</p>
              <ul>
                  <li>Color: Bright red, with variations depending on the variety.</li>
                  <li>Shape: Typically round or oval, with a smooth surface.</li>
                  <li>Seeds: The seeds are small, whitish or brownish specks that cover the surface of the 
                      fruit.</li>
                  <li>Freshness: Shiny, firm, and free from blemishes or mold.</li>
              </ul>
              <p>Taste and Aroma:</p>
              <ul>
                  <li>Flavor: Sweet and juicy, with a slightly tart or sour note in some varieties.</li>
                  <li>Aroma: A pleasant, fruity, and fragrant aroma.</li>
              </ul>
              <p>Nutrition:</p>
              <ul>
                  <li> Vitamin C: Rich in vitamin C, an important antioxidant</li>
                  <li> Fiber: A good source of fiber</li>
                  <li> Other nutrients: Contains other vitamins, minerals, and antioxidants</li>
                  <li> Low in calories: A healthy and low-calorie fruit.</li>
              </ul>
              <p>Uses</p>
              <ul>
                  <li> Fresh consumption: Enjoyed as a snack or added to salads, desserts, or smoothies.</li>
                  <li> Culinary applications: Used in jams, sauces, desserts, and other dishes.</li>
              </ul>
              <p>Storage</p>
              <ul>
                  <li> Refrigeration: Should be refrigerated to maintain freshness</li>
                  <li> Humidity: Best stored in the refrigerator at high humidity.</li>
              </ul>
          </div>
      </div>
      </>
    )
  }
  
export default Meatdescrip