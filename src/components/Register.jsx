import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'

function Register() {

  const navigate = useNavigate(); 
  const [registerFullName, setRegisterFullName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState(''); 
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showRegisterForm, setShowRegisterForm] = useState(true);


  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };


  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setRegisterError(''); 
    setRegisterSuccess('');

    if (!registerFullName.trim() || !registerEmail.trim() || !registerPassword.trim()) {
      setRegisterError('All fields are required.');
      return;
    }

    if (!validateEmail(registerEmail)) {
      setRegisterError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(registerPassword)) {
      setRegisterError('Password must be at least 6 characters long.');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const emailExists = existingUsers.some(user => user.email === registerEmail);

    if (emailExists) {
      setRegisterError('This email is already registered. Please log in or use another email.');
      return;
    }

    const newUser = {
      fullName: registerFullName,
      email: registerEmail,
      password: registerPassword, 
    };

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    console.log('Registration details stored in localStorage:', newUser);

    setRegisterSuccess('Registration successful! Redirecting to home...');
    setRegisterFullName('');
    setRegisterEmail('');
    setRegisterPassword('');


    setTimeout(() => {
      navigate('/Home'); 
    }, 1500);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault(); 

    setLoginError(''); 

    if (!loginEmail.trim() || !loginPassword.trim()) {
      setLoginError('Both email and password are required.');
      return;
    }

    if (!validateEmail(loginEmail)) {
      setLoginError('Please enter a valid email address.');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const user = storedUsers.find(
      (u) => u.email === loginEmail && u.password === loginPassword
    );

    if (user) {
      console.log('Login successful:', user);
      setLoginError(''); 
      alert('Login Successful!'); 
      navigate('/Home');
    } else {
      setLoginError('Invalid email or password.');
    }
  };

  return (
    <>
      <section className="registerpage" style={{ display: showRegisterForm ? 'block' : 'none' }}>
        <center><h2>Customer Registration</h2></center>
        <div className="logpagebox">
          <div className="logpagesubbx1">
            <form onSubmit={handleRegisterSubmit}>
              <label htmlFor="reg-fullname">Full Name</label><br />
              <input
                type="text"
                id="reg-fullname"
                placeholder="Enter your full name"
                value={registerFullName}
                onChange={(e) => setRegisterFullName(e.target.value)}
              /><br /><br />
              <label htmlFor="reg-email">Email Address</label><br />
              <input
                type="email" 
                id="reg-email"
                placeholder="Enter your Email Id"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              /><br /><br />
              <label htmlFor="reg-password">Password</label><br />
              <input
                type="password"
                id="reg-password"
                placeholder="Create a password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              /><br /><br />
              <center>
                {registerError && <p id="registererror" style={{ color: 'red' }}>{registerError}</p>}
                {registerSuccess && <p id="registersuccess" style={{ color: 'green' }}>{registerSuccess}</p>}
                <button type="submit" className="registerbtn2">Register</button>
              </center>
            </form>
          </div>
          <div className="logpagesubbx2">
            <h2>Log In</h2>
            <p>If you already have an account, <br />Login here</p><br />
            <center>
              <button className="logbtn" onClick={() => setShowRegisterForm(false)}>Log In</button>
            </center>
          </div>
        </div>
      </section>

      <section className="loginpage" style={{ display: !showRegisterForm ? 'block' : 'none' }}>
        <center><h2>Customer Log In</h2></center>
        <div className="logpagebox">
          <div className="logpagesubbx1">
            <form onSubmit={handleLoginSubmit}>
              <label htmlFor="login-email">Email Address</label><br />
              <input
                type="email" 
                id="login-email"
                placeholder="Enter your Email Id"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              /><br /><br />
              <label htmlFor="login-password">Password</label><br />
              <input
                type="password"
                id="login-password"
                placeholder="Enter your password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              /><br /><br />
              <center>
                {loginError && <p id="loginerror" style={{ color: 'red' }}>{loginError}</p>}
                <button type="submit" className="signbtn">Sign In</button>
              </center>
            </form>
          </div>
          <div className="logpagesubbx2">
            <h2>Create An Account</h2>
            <p>Sign Up for a new Account</p><br />
            <center>
              <button className="registerbtn1" onClick={() => setShowRegisterForm(true)}>Register</button>
            </center>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register