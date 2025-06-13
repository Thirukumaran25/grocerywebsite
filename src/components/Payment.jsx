import './Payment.css'
import {Link} from 'react-router-dom'



function Payment({finalamt}) {
  return (
    <>
    <div>
       <center>
        <h3 style={{fontWeight:"bold",fontSize:"32px"}}>Cart</h3>
        <nav style={{fontWeight:"bold",fontSize:"23px", padding:"40px 0px"}}>
          <span style={{color:"#4EB528"}}>BAG</span>
          <span className="text-muted">&gt;</span>
          <span style={{color:"#4EB528"}}>ADDRESS</span>
          <span className="text-muted">&gt;</span>
          <span style={{color:"#4EB528"}}>PAYMENT</span>
        </nav>
        </center>
      <section className="section6">
            <div className="sec6box1">
                <div className="sec6subbx">
                    <div className="card3"><input type="radio" /> Credit Card</div>
                    <div>
                        <img src="/icon/master card icon.png" alt="" />
                        <img src="/icon/visa icon.png" alt="" />
                    </div>
                </div>
                <p>Save money transfer using bank account Visa, Mastero</p>
                <table>
                        <tbody>
                          <tr>
                            <td>
                            <h4>CREDIT CARD NUMBER</h4>
                            <input id="input1" type="text" placeholder="Enter your card number" />
                            </td>
                        </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td>
                            <h4>CVV CODE</h4>
                            <input type="text" placeholder="***" />
                            </td>
                            <td>
                            <h4>EXPIRY DATE</h4>
                            <input type="text" placeholder="MM/YY" />
                            </td>
                            </tr>
                        </tbody>
                        <tbody>
                          <tr>
                          <td>
                            <h4>NAME ON CARD</h4>
                            <input id="input1" type="text" placeholder="Enter your name on the card" />
                            </td>
                          </tr>
                        </tbody>
                </table>
            </div>
            <div className="sec6box2">
                <div className="sec6subbx2">
                    <h4>Booking Charge</h4>
                    <p>₹ {finalamt}</p>
                </div>
                <div className="sec6subbx2">
                    <h4>GST</h4>
                    <p>₹ {finalamt*0.18}</p>
                </div>
                <div className="sec6subbx2">
                    <h4>Discount</h4>
                    <p>-₹ 20</p>
                </div>
                <div className="sec6subbx21">
                    <h3>TOTAL</h3>
                    <p>{finalamt+(finalamt*.05)-20}</p>
                </div>
                <center>
                    <button className="proceedbtn"><Link className='paylnk' to="/Successfull">PROCEED TO PAY</Link></button>
                </center>
              <center>100% Secure Payments</center>
            </div>
        </section>
    </div>
    </>
  )
}

export default Payment