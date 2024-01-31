import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './css/details.css'
import { FaPlay } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { RiGroup2Fill } from "react-icons/ri";

const SinglePage = () => {

  const location = useLocation()
  const {item} = location.state
  console.log(item , 'item')

  const [movies, setMovies] = useState([])

  useEffect(()=>{
    setMovies(item)
  }, [])

  return (
    <div className='details-container'>
      <img src={movies.backgroundImg} alt='bg'/>
      <div className='details-content'>
        <div className='title-img'>
          <img src={movies.titleImg} alt='bg-logo' loading='lazy'/>
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
          <p>{movies.subTitle}</p>
          <p>{movies.description}</p>
        </div>
        

      </div>
    </div>
  )
}

export default SinglePage