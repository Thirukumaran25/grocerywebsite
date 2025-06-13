import React from 'react'
import './Categories.css'
import catimage1 from '../images/fruits cate.png'
import catimage2 from '../images/vege cate.png'
import catimage3 from '../images/eggs cate.png'
import catimage4 from '../images/meat & sea food cate.png'
import catimage5 from '../images/bakery cate.png'
import catimage6 from '../images/pantry cate.png'
import catimage7 from '../images/snack cate.png'
import catimage8 from '../images/frozen cate 1.png'
import { NavLink } from 'react-router-dom'

function Categories() {
  return (
    <>
    <div style={{backgroundColor:"rgb(240, 237, 237)"}}>
        <div className='catitems'>
            <div className='catsubitem'>
               <NavLink to="/Fruit" style={{textDecoration:"none",color:"black"}}> <div className='catsubitem1'>
                    <img src={catimage1} alt="" />
                </div>
                <h2>Fruits</h2></NavLink>
            </div>
            <div className='catsubitem'>
               <NavLink to="/Vegtablecat" style={{textDecoration:"none",color:"black"}}><div className='catsubitem1'>
                    <img src={catimage2} alt="" />
                </div>
                <h2>Vegetables</h2></NavLink>
            </div>
            <div className='catsubitem'>
               <NavLink to="/Diary" style={{textDecoration:"none",color:"black"}}><div className='catsubitem1'>
                    <img src={catimage3} alt="" />
                </div>
                <h2>Diary & Eggs</h2></NavLink>
            </div>
            <div className='catsubitem'>
              <NavLink to="/Meat" style={{textDecoration:"none",color:"black"}}><div className='catsubitem1'>
                    <img src={catimage4} alt="" />
                </div>
                <h2>Meat & Seafood</h2></NavLink>
            </div>
            <div className='catsubitem'>
               <NavLink to="/Bakery" style={{textDecoration:"none",color:"black"}}><div className='catsubitem1'>
                    <img src={catimage5} alt="" />
                </div>
                <h2>Backery</h2></NavLink>
            </div>
            <div className='catsubitem'>
               <NavLink to="/Pantry" style={{textDecoration:"none",color:"black"}}><div className='catsubitem1'>
                    <img src={catimage6} alt="" />
                </div>
                <h2>Pantry Staples</h2></NavLink>
            </div>
            <div className='catsubitem'>
               <NavLink to="/Snacks" style={{textDecoration:"none",color:"black"}}><div className='catsubitem1'>
                    <img src={catimage7} alt="" />
                </div>
                <h2>Snacks & Bevarage</h2></NavLink>
            </div>
            <div className='catsubitem'>
               <NavLink to="/Frozen" style={{textDecoration:"none",color:"black"}}> <div className='catsubitem1'>
                    <img src={catimage8} alt="" />
                </div>
                <h2>Frozen Food</h2></NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default Categories