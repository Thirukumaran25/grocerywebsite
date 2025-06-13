import './Main1.css'
import './Subheading.css'
import { NavLink,Outlet } from 'react-router-dom'
import headimage1 from '../images/headeimage1.png'
import headimage2 from '../images/headerimage2.png'
import headimage3 from '../images/vegetableicon.png'
import headimage4 from '../images/freshfruitsicon.png'
import headimage5 from '../images/meat icon.png'
import headimage6 from '../images/seafood icon.png'
import headimage7 from '../images/milk & diary icon.png'
import headimage8 from '../images/fresh bread icon.png'
import headimage9 from '../images/posterimagehome.png'
import headimage10 from '../images/featured pro home 1.png'
import headimage11 from '../images/featured pro home 2.png'
import headimage12 from '../images/featured pro home 3.png'
import headimage13 from '../images/featured pro home 4.png'
import headimage14 from '../images/poster image 2.png'
import headimage15 from '../images/map home image.png'
import headimage16 from '../images/review image.png'
import headimg1 from '../images/featured pro home 1.png'
import headimg2 from '../images/featured pro home 2.png'
import headimg3 from '../images/featured pro home 3.png'
import headimg4 from '../images/featured pro home 4.png'
import {Link} from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../App';


const productsData = [
  { id: 74, imgSrc: headimg1, title: 'Organic Tomatoes', price: 80 },
  { id: 75, imgSrc: headimg2, title: 'Fresh Meat', price: 420 },
  { id: 76, imgSrc: headimg3, title: 'Seasonal Mangoes', price: 120 },
  { id: 77, imgSrc: headimg4, title: 'Green Onions', price: 100 },
];

function Main1() {
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
    <main>
        <div className='M1sectio1'>
            <div className='M1sec1box'>
                <div className='M1sec1bx1'>
                    <img src={headimage1} alt="" style={{width:"100%", height:"100%",position:"absolute"}}/>
                    <div className='m1sec1sbx1'>
                        <p style={{fontSize:"12px"}}>Halal Products <span style={{color:"red"}}>Online Delivery Shop</span></p>
                        <p className='fs-2'>Make Healthy Life with <span style={{color:"green"}}>Fresh</span> Grocery</p>
                        <p style={{fontSize:"12px"}}>Fresh groceries, particularly fruits, vegetables, whole grains, and lean proteins, play a crucial role in nourishing our bodies and promoting overall well-being</p>
                        <button className='shopnowbtn'><Link className='productlink' to="/Categories">Shop Now</Link></button>
                    </div>
                </div>
                <div className='M1sec1bx2'>
                    <img src={headimage2} alt="" style={{width:"100%",height:"100%",position:"absolute"}}/>
                    <div className='m1sec1sbx2'>
                        <p></p>
                        <p style={{color:"red"}}>Black Friday sale</p>
                        <p className='fs-3 text-white'>Organic Food Up <br />To 50% Off</p>
                        <button className='shopnowbtn'><Link className='productlink' to="/Categories">Shop Now</Link></button>
                    </div>
                </div>
            </div>
        </div>

        <div className="M1section2">
            <div>
                <h3 style={{fontWeight:"bold",textAlign:"center"}}>Browse All Categories</h3>
                <h4 style={{fontWeight:"bold",textAlign:"center"}}> Explore a diverse range of categories to find exactly what you need!</h4>
            </div>
            <div className='m1sec2box'>
                <Link className='productlink1' to="/Vegtablecat"><div className='m1sec2cat'>
                    <div>
                        <img src={headimage3} alt="" style={{backgroundColor:"greenyellow"}} />
                    </div>
                    <h5  style={{fontSize:"15px",fontWeight:"bold"}}>Vegetable</h5>
                    <p style={{fontSize:"12px",fontWeight:"bold"}}>20 Items</p>
                </div></Link>
                <Link className='productlink1' to="/Fruit"><div className='m1sec2cat'>
                    <div>
                        <img src={headimage4} alt="" style={{backgroundColor:"pink"}}/>
                    </div>
                    <h5 style={{fontSize:"15px",fontWeight:"bold"}}>Fresh Fruits</h5>
                    <p style={{fontSize:"12px",fontWeight:"bold"}}>12 Items</p>
                </div></Link>
                <Link className='productlink1' to="/Meat"><div className='m1sec2cat'>
                    <div>
                        <img src={headimage5} alt="" style={{backgroundColor:"gray"}}/>
                    </div>
                    <h5 style={{fontSize:"15px",fontWeight:"bold"}}>Meat</h5>
                    <p style={{fontSize:"12px",fontWeight:"bold"}}>7 Items</p>
                </div></Link>
                <Link className='productlink1' to="/Meat"><div className='m1sec2cat'>
                    <div>
                        <img src={headimage6} alt="" style={{backgroundColor:"violet"}}/>
                    </div>
                    <h5 style={{fontSize:"15px",fontWeight:"bold"}}>Sea Food</h5>
                    <p style={{fontSize:"12px",fontWeight:"bold"}}>12 Items</p>
                </div></Link>
                <Link className='productlink1' to="/Diary"><div className='m1sec2cat'>
                    <div>
                        <img src={headimage7} alt="" style={{backgroundColor:"lightblue"}}/>
                    </div>
                    <h5 style={{fontSize:"15px",fontWeight:"bold"}}>Milk & diary</h5>
                    <p style={{fontSize:"12px",fontWeight:"bold"}}>8 Items</p>
                </div></Link>
                <Link className='productlink1' to="/Bakery"><div className='m1sec2cat'>
                    <div>
                        <img src={headimage8} alt="" style={{backgroundColor:"yellow"}}/>
                    </div>
                    <h5 style={{fontSize:"15px",fontWeight:"bold"}}>Fresh Bread</h5>
                    <p style={{fontSize:"12px",fontWeight:"bold"}}>24 Items</p>
                </div></Link>
            </div>
        </div>

        <div className="M1section3">
            <div>
                <img src={headimage9} alt="" style={{width:"100%",position:"absolute",height:"100%"}}/>
            </div>
            <div className="M1sec3box">
                <p style={{fontSize:"18px",fontWeight:"bold"}}>Enjoy upto 20% off on your first order</p>
                <p style={{fontSize:"28px",fontWeight:"bold"}}>Fresh Produce, From Farm <br />Products At A Reasonable Price!</p>
                <button className='shopnowbtn'><Link className='productlink' to="/Categories">Shop Now</Link></button>
            </div>
        </div>

        <div className="M1section4">
            <div>
                <h3 style={{fontWeight:"bold",textAlign:"center"}}>Browse All Categories</h3>
                <h4 style={{fontWeight:"bold",textAlign:"center"}}> Explore a diverse range of categories to find exactly what you need!</h4>
            </div>
            <div className='m1sec4subx1'>
                
                {filteredProducts.map((product) => (
                                            <div key={product.id} className='m1sec4cat'>
                                                <div>
                                              <img
                                                src={product.imgSrc}
                                                alt={product.title}
                                              /></div>
                                                <h5 style={{fontSize:"23px",fontWeight:"bold"}}>{product.title}</h5>
                                                <p style={{fontSize:"23px",fontWeight:"bold"}}>₹ {product.price}</p>
                                                  {[...Array(5)].map((_, idx) => (
                                                    <i key={idx} className="fa-solid fa-star" style={{ color: "#c7e147", padding: "5px" }}></i>
                                                  ))}
                                                {cart.includes(product) ? <button className="btn btn-danger mt-auto fw-semibold" type="button" onClick={() => removecart(product)}>
                                                Remove from cart
                                              </button> : <button className="btn btn-success mt-auto fw-semibold" type="button" onClick={() => addcart(product)}>
                                                Add to cart
                                              </button>}
                                            </div>   
                                ))}
            </div>
        </div>

        <div className='M1section5'>
            <div className='M1sec5box1'>
                <div className='m1sec5sbx1'>
                    <>
                    <div className='subheadingtab'>
                        <ul>
                        <NavLink to="Newarrival"><li>New  Arrivals</li></NavLink> 
                        <NavLink to="Trending"><li>Trending Products</li></NavLink> 
                        <NavLink to="Bestselling"><li>Best Sellings</li></NavLink> 
                        </ul>
                    </div>
                    <Outlet/>
                    </>
                </div>
                <div className='m1sec5sbx2'>
                    <h1>Get<span style={{color:"#FF7C08"}}> 20% Discount</span>on <br />Your First Sale</h1>
                    <p>To celebrate your first purchase with us, <br /> enjoy a 20% discount oon your first order.</p>
                    <div>45K+ <br />Active  Users</div>
                    <div>45K+ <br />Active  Users</div>
                    <div>45K+ <br />Active  Users</div>
                </div>
            </div>
            <div className='m1sec5img'>
                <img src={headimage14} alt="" style={{width:"100%",position:"absolute",}}/>
            </div>
            <div className="M1sec5box">
                <p style={{fontSize:"35px",fontWeight:"bold"}}>Best Deals <span style={{color:"#FF7C08"}}>This Week</span></p>
                <p style={{fontSize:"14px",fontWeight:"bold"}}>Don’t miss out on our incredible deals to help you <br/>save while enjoying fresh, high-quality groceries! </p>
                <div>7 <br />Days</div>
                <div>168 <br />Hours</div>
                <div>1004<br />Minutes</div>
            </div>
            <div className='m1sec5subx1'>
                <div className='m1sec5cat'>
                    <div>
                        <img src={headimage10} alt=""/>
                    </div>
                    <h5 style={{fontSize:"23px",fontWeight:"bold"}}>Red Chilles</h5>
                    <p style={{fontSize:"23px",fontWeight:"bold"}}>₹80</p>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i> <br />
                    <button className='addcartbtn1'>Add to cart</button>
                </div>
                <div className='m1sec5cat'>
                    <div>
                        <img src={headimage11} alt=""/>
                    </div>
                    <h5 style={{fontSize:"23px",fontWeight:"bold"}}>Fresh Eggs</h5>
                    <p style={{fontSize:"23px",fontWeight:"bold"}}>₹120</p>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                    <i className="fa-solid fa-star" style={{color:" #bebfc1"}}></i> <br />
                    <button className='addcartbtn1'>Add to cart</button>
                </div>
                <div className='m1sec5cat'>
                    <div>
                        <img src={headimage12} alt=""/>
                    </div>
                    <h5 style={{fontSize:"23px",fontWeight:"bold"}}>Soya Chunks</h5>
                    <p style={{fontSize:"23px",fontWeight:"bold"}}>₹70</p>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i> <br />
                    <button className='addcartbtn1'>Add to cart</button>
                </div>
                <div className='m1sec5cat'>
                    <div>
                        <img src={headimage13} alt=""/>
                    </div>
                    <h5 style={{fontSize:"23px",fontWeight:"bold"}}>Dry Beans</h5>
                    <p style={{fontSize:"23px",fontWeight:"bold"}}>₹135</p>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                    <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i> <br />
                    <button className='addcartbtn1'>Add to cart</button>
                </div>
            </div>
        </div>
        <div className="M1section6">
            <div>
                <h3 style={{fontWeight:"bold",textAlign:"center"}}>Browse All Categories</h3>
                <h4 style={{fontWeight:"bold",textAlign:"center"}}> Explore a diverse range of categories to find exactly what you need!</h4>
            </div>
            <div className="M1sec6box" >
                <div className='worldimg'>
                    <img src={headimage15} alt="" />
                </div>
                <div className="M1sec6box2">
                    <div className='f1subbx21' style={{width:"14rem"}}>
                    <div className="fimage"><img src={headimage16} alt="" /></div>
                    <div className="fbx21">
                        <div className="fship">George Stephen</div>
                        <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                        <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                        <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                        <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                        <i className="fa-solid fa-star" style={{color:" #c7e147"}}></i>
                    </div>
                    </div>
                    <div>
                        <p>“I love the quality of the produce! Everything <br />
                            is always fresh and tastes amazing. The prices <br />
                            are competitive, and the weekly deals are <br />
                            fantastic. I save so much on my grocery bills”</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default Main1