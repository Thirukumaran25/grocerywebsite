import React from 'react'
import blogimg1 from '../images/blog header image.png'
import blogimg2 from '../images/blog 1.png'
import blogimg3 from '../images/blog 2.png'
import blogimg4 from '../images/blog 3.png'
import blogimg5 from '../images/blog 4.png'
import blogimg6 from '../images/blog 5.png'
import blogimg7 from '../images/blog 6.png'
import './Blogpage.css'
import{Link} from 'react-router-dom'


function Blogs() {
  return (
    <>
    <div style={{backgroundColor:"rgb(240, 237, 237)",padding:"50px 100px"}}>
    <div className='blogpage'>
      <div className='blogbox1'>
        <div className='blogsubbx3'>
          <div>
            <img src={blogimg1} alt="" style={{width:"100%",height:"100%"}}/>
          </div>
          <div className='bbox'>
          <p>08/7/2025</p>
          <h2>Eco-Friendly Shopping Tips</h2>
          <p>“Welcome to our Plant Care section, where we share expert advice 
          and practical tips to help you have your trees, and plants healthy 
          and thriving...</p>
          </div>
        </div>
        <div className='blogsubbx2'>
          <h2>Quick Prefix in this Article:</h2>
          <p>1.What are Indoor Plants?</p>
          <p>2.How do you plant indoor plants?</p>
          <p> 3.How much light do indoor plants need?</p>
          <p>4.What qualities make for a good indoor 
            plants?</p>
          <p>5.Which indoor plants are easy to take care 
            of?</p>
        </div>
      </div>
      <div className='blogbox2'>
        <div className='blogsubbx1'>
          <div>
            <img src={blogimg2} alt="" style={{width:"100%",height:"100%"}} />
          </div>
          <div className='bbox'>
          <span>08/7/2025</span>
          <h2>Budget-Friendly Grocery</h2>
          <p> “Welcome to our Plant Care section, 
              where we share expert advice..</p>
          <Link to="/Readmore"><button className='readbtn'>Read Now</button></Link>
          </div>
        </div>
        <div className='blogsubbx1'>
          <div>
            <img src={blogimg3} alt="" style={{width:"100%",height:"100%"}}/>
          </div>
          <div className='bbox'>
          <span>08/7/2025</span>
          <h2>Meal planning for the week</h2>
          <p>“Welcome to our Plant Care section, 
            where we share expert advice...</p>
          <Link to="/Readmore"><button className='readbtn'>Read Now</button></Link>
          </div>
        </div>
        <div className='blogsubbx1'>
          <div>
            <img src={blogimg4} alt="" style={{width:"100%",height:"100%"}} />
          </div>
          <div className='bbox'>
          <span>08/7/2025</span>
          <h2> Healthy grocery swaps</h2>
          <p>“Welcome to our Plant Care section, 
              where we share expert advice..</p>
          <Link to="/Readmore"><button className='readbtn'>Read Now</button></Link>
          </div>
        </div>
        <div className='blogsubbx1'>
          <div>
            <img src={blogimg5} alt="" style={{width:"100%",height:"100%"}}/>
          </div>
          <div className='bbox'>
          <span>08/7/2025</span>
          <h2> Cooking with kids</h2>
          <p> “Welcome to our Plant Care section, 
            where we share expert advice...</p>
          <Link to="/Readmore"><button className='readbtn'>Read Now</button></Link>
          </div>
        </div>
        <div className='blogsubbx1'>
          <div>
            <img src={blogimg6} alt="" style={{width:"100%",height:"100%"}}/>
          </div>
          <div className='bbox'>
          <span>08/7/2025</span>
          <h2> Best Grocery Ingredient for salad</h2>
          <p> “Welcome to our Plant Care section, 
              where we share expert advice...</p>
          <Link to="/Readmore"><button className='readbtn'>Read Now</button></Link>
          </div>
        </div>
        <div className='blogsubbx1'>
          <div>
            <img src={blogimg7} alt="" style={{width:"100%",height:"100%"}}/>
          </div>
          <div className='bbox'>
          <span>08/7/2025</span>
          <h2> Seasonal store produce</h2>
          <p> “Welcome to our Plant Care section, 
              where we share expert advice...</p>
          <Link to="/Readmore"><button className='readbtn'>Read Now</button></Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Blogs