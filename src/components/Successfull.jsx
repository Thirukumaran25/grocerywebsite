import React from 'react'
import './Success.css'
import {Link} from 'react-router-dom'

function Successfull() {
  return (
  
    <div className="text-center">
        <h1 className="h3 font-weight-bold mb-3">Payment Successful!</h1>
        <p className="lead mb-4">
            Your order has been confirmed by the vendor.
            <br/>
            Thank you for giving us the opportunity to serve you.
        </p>
        <button className="btn success-button font-weight-bold btn-lg px-4 py-2" type="button">
           <Link className='ctnbtn' to='/Main1'>CONTINUE</Link> 
        </button>
    </div>

  )
}

export default Successfull