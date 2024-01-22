// import styled from 'styled-components';
import bg from './asset/login-background.jpg'
import logos from './asset/cta-logo-one.png'
import ctaLogos from './asset/cta-logo-two.png'
import './css/login.css';
import React from 'react';

const Login = () => {
  return (
    <div className='log-container'>
      <img src={bg} alt='login-background' className='bg'/>
      <div className='log-content'>
        <div className='cta-content'>
          <img src={logos} className='logos' alt='logos'/>
          <button>GET ALL THERE</button>
          <p>Get Premier Access to Raya and the Last Dragon for an additional fee
              with a Disney+ subscription. As of 03/26/21, the price of Disney+
              and The Disney Bundle will increase by $1.
          </p>
          <img src={ctaLogos} className='logos-2' alt='logos'/>
        </div>
      </div>

    </div>
  )
}



export default Login