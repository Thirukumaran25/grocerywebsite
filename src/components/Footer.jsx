import React from 'react'
import ship from '../images/Shipping.png'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'


function Footer() {
  return (
   <>
   <footer>
    <div className='f1'>
        <div className='f1bx1'>
            <div className='f1subbx11'>
                <div>Get in Touch with us</div>
                <div>+91 91010 90000</div>
            </div>
            <div className='f1subbx12'></div>
        </div>
        <div className='f1bx2'>
            <div className='f1subbx21'>
                <div className="fimage"><img src={ship} alt="" /></div>
                <div className="fbx21">
                    <div className="fship">Free Shipping</div>
                    <div className="forder">For Orders Above 500</div>
                </div>
            </div>
             <div className='f1subbx21'>
                <div className="fimage"><img src={ship} alt="" /></div>
                <div className="fbx21">
                    <div className="fship">Free Shipping</div>
                    <div className="forder">For Orders Above 500</div>
                </div>
            </div>
             <div className='f1subbx21'>
                <div className="fimage"><img src={ship} alt="" /></div>
                <div className="fbx21">
                    <div className="fship">Free Shipping</div>
                    <div className="forder">For Orders Above 500</div>
                </div>
            </div>
        </div>
    </div>
    <div className="f2">
        <div className='f2bx1'>
            <div className='f2subx11'>
               <NavLink to="/Main1"><img src={logo} alt="" /></NavLink>
                <p> Fresh groceries, particularly fruits, vegetables, 
                    whole grains, and lean proteins, play a crucial 
                    role in nourishing our bodies and promoting 
                    overall well-being</p>
            </div>
            <div className='f2subx12'> 
                <div>
                    <h2>NAVIGATE</h2>
                    <NavLink to="/Privcay" style={{textDecoration:"none",color:"white"}}><p>Privacy Policy</p></NavLink>
                    <NavLink to="/Terms" style={{textDecoration:"none",color:"white"}}><p>Terms & Conditions</p></NavLink>
                    <NavLink to="/Howto" style={{textDecoration:"none",color:"white"}}><p>How to Order</p></NavLink>
                    <NavLink to="/About" style={{textDecoration:"none",color:"white"}}><p>About Us</p></NavLink>
                </div>
                <div>
                    <h2>G-STORE</h2>
                    <p>Reg: T21542GST548</p>
                    <p>TIN: 14578452884</p>
                    <p>Email: groceries at doorstep@gmail.com</p>
                </div>
            </div>
        </div>
        <center>
        <div className='copy'>Copyrights 2022© Groceries At Doorstep Ltd</div>
        </center>
    </div>
   </footer>
   </>
  )
};

export default Footer