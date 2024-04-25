import React from 'react';
import "./LoginSignup.css";
import user_image from './person.png';
import email from './email.png';
import password from './password.png';

export const LoginSignup = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Sign up</div>
        <div className='underline'></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_image} alt="user"/>
          <input type="text" placeholder='Name'/>
        </div>
        <div className="input">
          <img src={email} alt="email"/>
          <input type="email" placeholder='Email'/>
        </div>
        <div className="input">
          <img src={password} alt="password"/>
          <input type="password" placeholder='Password'/>
        </div>
      </div>
      <div className="forgot-password">Lost Password?<span>Click here</span></div>
      <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
      </div>
    </div>
  );
};
