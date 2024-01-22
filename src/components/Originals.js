import React from 'react'
import r1 from './asset/login-background.jpg'

const Originals = () => {
  return (
    <div className='recommended'>
    <h3>Originals</h3>
    <div className='recommended-container'>
      <div className='recommended-box'>
        <img src={r1} alt='r1'/>
      </div>
      <div className='recommended-box'>
        <img src={r1} alt='r1'/>
      </div>
      <div className='recommended-box'>
        <img src={r1} alt='r1'/>
      </div>
      <div className='recommended-box'>
        <img src={r1} alt='r1'/>
      </div>
    </div>
    
  </div>
  )
}

export default Originals