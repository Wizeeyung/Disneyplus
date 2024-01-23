import React, { useEffect, useState } from 'react'
import r1 from './asset/login-background.jpg'
import './css/home.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectFullMovies, selectRecommend,selectAddToMovies, setMovies, addToMovies } from '../app/disneySlice'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Recommended = ({movie}) => {
  console.log(movie, 'for this')

  const dispatch = useDispatch()
  const selectFullMovie = useSelector(selectFullMovies)
  const selectFavMovies = useSelector(selectAddToMovies)
  console.log(selectFavMovies, 'favviies')
  const navigate = useNavigate();
  const [likedMovies, setLikedMovies] = useState(false);
  


  const singleMovies = selectFavMovies.find((film)=>(
    film.movieTitle === movie.title
  ))
  console.log(singleMovies, 'thisss')

  
  useEffect(() => {
    if(singleMovies){
      setLikedMovies(true)
    }else if(!singleMovies){
      setLikedMovies(false)
    }
    
  }, [singleMovies]);
  
  

  const handleLiked = (e, moviees) =>{
    e.stopPropagation()
    // setLikedMovies((prevLikedMovies) => ({
    //   ...prevLikedMovies,
    //   [id]: !prevLikedMovies[id], // Toggle liked state for the specific movie ID
    // }));    

    const moviesSelected = selectFullMovie.find((film)=>(
      film.title === moviees
    ))

    if(moviesSelected){
      setLikedMovies(!likedMovies)
    }
  }

  const idString = (id)=>{
    return String(id).toLowerCase().split('/').join('')
  }

  const findMovie = (id)=>{
    const moves =selectFullMovie.find((movie)=> movie.id === id);
    const ids = moves.title
    const root = idString(ids)
    navigate(`/detail/${root}`, 
    {
      state:{
        item: moves
      }
    })
  }
  

  

  return (
    <div className='recommended'>
      <div className='recommended-box' onClick={()=>findMovie(movie.id)}>
           <div className='recommended-icon'>{likedMovies ? <FaHeart onClick={(e)=> handleLiked(e, movie.title) & dispatch(addToMovies({
        id: movie.id,
        movieTitle: movie.title || '', // Use optional chaining to handle potential undefined
        cardImg: movie.cardImg
      }))} />:<FaRegHeart onClick={(e)=> handleLiked(e, movie.title) & dispatch(addToMovies({
        id: movie.id,
        movieTitle: movie.title || '', // Use optional chaining to handle potential undefined
        cardImg: movie.cardImg
      }))} />}</div>
           <img src={movie.cardImg} alt='img' loading='eager' />
           
          </div>
      
      </div>
  
   
  )
}

export default Recommended