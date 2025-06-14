import "./Head.css"
import logo from '../images/logo.png'
import search from '../images/searchicon.png'
import cart from '../images/cart icon.png'
import { NavLink } from 'react-router-dom'
import { useState } from "react"

function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleRegisterClick = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
    <div style={{color:"white",backgroundColor:"#4EB528",textAlign:"center",fontSize:"20px"}}>
        <p style={{padding:"5px"}}>Fresh & Organic produce form our farmers to your kitchen</p>
    </div>
    <div className='header'>
        <div className='subhead1'>
           <NavLink to="/Main1"> <img src={logo} alt="" /></NavLink>
        </div>
        <div className='subhead2'>
            <div className='searchbar p-2'>
            <input className='px-3' type="text" placeholder='Search for products' style={{borderRadius:"0px"}} />
            <button ><img rel='icon' src={search} alt="" />Search</button>
            </div>
            <div className='navbar'>
                <ul className='navitem'>
                   <li><NavLink to="/" >Home</NavLink></li>
                   <li><NavLink to="/Categories" >Categories</NavLink></li>
                   <li><NavLink to="/Bestsale" >Best Sales</NavLink></li>
                   <li><NavLink to="/Blogs">Blogs</NavLink></li>
                   <li><NavLink to="/Cartpage" ><img rel='icon' src={cart} alt="" /></NavLink></li>
                   {isLoggedIn ? (
                      <button style={{ color: "white" }}><NavLink to="/Main1" style={{color:"white"}}>My Account</NavLink></button>
                    ) : (
                      <button onClick={handleRegisterClick} style={{ color: "white", cursor: 'pointer' }}>
                        <NavLink to="/Register" style={{color:"white"}}>Register</NavLink>
                      </button>
                    )}
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header
