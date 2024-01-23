import React from 'react';
import './css/home.css';
import { MdCancel } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteFavorite } from '../app/disneySlice';

const Favorite = ({movie}) => {

  const dispatch = useDispatch()
  
  const handleDelete = () =>{
    dispatch(deleteFavorite(movie.id))

  }
  return (
    <div className='recommended-favorite'>
    <div className='recommended-box'>
         <div className='favorite-icon'>
          <MdCancel onClick={handleDelete}/>
        </div>
      <img src={movie.cardImg} alt='img' loading='eager'  />
         
        </div>
    
    </div>
  )
}

export default Favorite