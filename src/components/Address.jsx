import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'


function Address() {
     const navigate = useNavigate();
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (form.checkValidity() === false) {
      form.reportValidity();
      return;
    }
    navigate('/Payment');
  };
  return (
    <>
    <center>
      <h3 style={{fontWeight:"bold",fontSize:"32px"}}>Cart</h3>
      <nav style={{fontWeight:"bold",fontSize:"23px", padding:"40px 0px"}}>
        <span style={{color:"#4EB528"}}>BAG</span>
        <span className="text-muted">&gt;</span>
        <span style={{color:"#4EB528"}}>ADDRESS</span>
        <span className="text-muted">&gt;</span>
        <span className="text-muted">PAYMENT</span>
      </nav>
  </center>
 <div style={{margin:"0px 300px"}}>
   <form class="container mt-4" ref={formRef} onSubmit={handleSubmit} noValidate>
  <div class="mb-5">
    <h2 class="fw-bold text-dark">Contact Details</h2>
    <input
      type="text"
      style={{border:"1.8px solid gray"}}
      placeholder="Enter your name"
      class="form-control mt-5 p-2 fs-4"
      required
    />
    <input
      type="tel"
      style={{border:"1.8px solid gray"}}
      placeholder="Enter your mobile number"
      class="form-control mt-3 p-2 fs-4"
      required
      pattern="[0-9]{10}" 
      title="Please enter a valid 10-digit mobile number"
    />
  </div>
  <div class="mb-5">
    <h3 class="fw-bold text-dark">Address</h3>
    <input
      type="text"
      style={{border:"1.8px solid gray"}}
      placeholder="Door no, Building no, Street name"
      class="form-control mt-5 p-2 fs-4"
      required
    />
    <div class="row mt-3">
      <div class="col">
        <input
          type="text"
          style={{border:"1.8px solid gray"}}
          placeholder="City"
          class="form-control p-2 fs-4"
          required
        />
      </div>
      <div class="col">
        <input
            style={{border:"1.8px solid gray"}}
          type="text"
          placeholder="State"
          class="form-control p-2 fs-4"
          required
        />
      </div>
    </div>
  </div>
  <div class="text-center">
    <button
      type="submit"
      class="btn fs-2 fw-bold mb-5 btn-lg"
      style={{backgroundColor:"#4EB528",color:"white",padding:"5px 60px"}}
    >
      ADD ADDRESS
    </button>
  </div>
</form>
</div>
</>
)
}

export default Address