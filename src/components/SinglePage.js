import React from 'react'
import { useLocation } from 'react-router-dom'
import './css/details.css'
import { FaPlay } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { RiGroup2Fill } from "react-icons/ri";

const SinglePage = () => {

  const location = useLocation()
  const {item} = location.state
  console.log(item , 'item')


  return (
    <div className='details-container'>
      <img src={item.backgroundImg} alt='bg'/>
      <div className='details-content'>
        <div className='title-img'>
          <img src={item.titleImg} alt='bg-logo' loading='eager'/>
        </div>
        
        <div className='details-btn'>
          <button className='play'><FaPlay />PLAY</button>
          <button className='trailer'><FaPlay />TRAILER</button>
          <div className='details-icon'>
            <FiPlusCircle />
            <RiGroup2Fill />
          </div>
        </div>

        <div className='details-txt'>
          <p>{item.subTitle}</p>
          <p>{item.description}</p>
        </div>
        

      </div>
    </div>
  )
}

export default SinglePage