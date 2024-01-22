import React from 'react'
import './css/home.css'
import v1 from './asset/viewers-disney.png'
import v2 from './asset/viewers-marvel.png'
import v3 from './asset/viewers-national.png'
import v4 from './asset/viewers-pixar.png'
import v5 from './asset/viewers-starwars.png'
import vid1 from './videos/1564674844-disney.mp4'
import vid2 from './videos/1564676115-marvel.mp4'
import vid3 from './videos/1564676296-national-geographic.mp4'
import vid4 from './videos/1564676714-pixar.mp4'
import vid5 from './videos/1608229455-star-wars.mp4'


const Viewers = () =>{
  return(
    <div className='viewers-container'>
     <div className='viewers-box'>
      <img src={v1} alt='v1' />
      <video autoPlay={true} loop={true} playsInline={true}>
        <source src={vid1} type='video/mp4' />       
      </video>
     </div>
     <div className='viewers-box'>
      <img src={v2} alt='v1' />
      <video autoPlay={true} loop={true} playsInline={true}>
        <source src={vid2} type='video/mp4' />       
      </video>
     </div>
     <div className='viewers-box'>
      <img src={v3} alt='v1' />
      <video autoPlay={true} loop={true} playsInline={true}>
        <source src={vid3} type='video/mp4' />       
      </video>
     </div>
     <div className='viewers-box'>
      <img src={v4} alt='v1' />
      <video autoPlay={true} loop={true} playsInline={true}>
        <source src={vid4} type='video/mp4' />       
      </video>
     </div>
     <div className='viewers-box'>
      <img src={v5} alt='v1' />
      <video autoPlay={true} loop={true} playsInline={true}>
        <source src={vid5} type='video/mp4' />       
      </video>
     </div>
    </div>
  )
}

export default Viewers;