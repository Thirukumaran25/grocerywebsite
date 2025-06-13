import React from 'react'
import './Readpage.css'
import readimg from '../images/blog read more 1.png'

function Readmore() {
  return (
    <>
    <div style={{backgroundColor:"rgb(240, 237, 237)",padding:"50px 100px"}}>
        <div className='readpage'>
            <h1>Eco-Friendly Shopping Tips</h1>
            <p>Grocery Items should be an essential component of every interior design. Greenery 
                brightens up indoor spaces and is known to have mood-boosting qualities.
                Indoor plants are popular because they are relatively easy to take care of, provide 
                health benefits and can be used in a variety of indoor décor themes. Indoor plants 
                are a great option for those who have little yard space for an outdoor garden or for 
                those who live in climates with severely cold winters.
                So, if you’re caring for indoor plants for the first time, our ultimate guide will provide 
                you with the necessary information to allow your green friends to thrive.
                To provide you with expert insight, we asked our Senior Horticulturist at Ambius, Matt 
                Kostelnick, to answer the most frequently asked questions about indoor plants.</p>
                <div>
                <img src={readimg} alt="" style={{width:"100%",height:"100%"}}/>
                </div>
                <h3>Why shopping tip for groceries is important?</h3>
                <p>Indoor plants are plants that grow indoors. There are a variety of tropical plants, like 
                    palms, that thrive in indoor environments.</p><br /><br />

                 <h3> Essential grocery lists?</h3> 
                 <p> Most of the time, indoor plants are already in containers, so there is no need to plant 
                    them. There are typically only two reasons you need to plant an indoor plant</p>  
                    <p>1. If your plant is getting too big, then you will need to replant</p>
                    <p>2. If you wanted to grow bulbs indoors, then you will need to plant the bulbs 
                    yourself.</p>
        </div>
    </div>
    </>
    
  )
}

export default Readmore