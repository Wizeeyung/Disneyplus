import React from 'react'
import { selectAddToMovies, selectUserInfo } from '../app/disneySlice'
import { useSelector } from 'react-redux'
import Recommended from './Recommended'
import Favorite from './Favorite'
import './css/favorites.css'

const Favorites = () => {

  const favoriteMovies = useSelector(selectAddToMovies)
  const userInfo = useSelector(selectUserInfo)
  console.log(favoriteMovies, 'these are mine')
  return (
    <div className='favorite-container'>
      {favoriteMovies.length > 0 ? <><h3 className="favorite-heading">Hello {userInfo.name},</h3> <span>These are your Favorite movies:</span></>  : <><h3 className="favorite-heading">Hello {userInfo.name},</h3> <span>you need to add to favorite to see your movies</span></>}
        <div className="favorite-content">
        {favoriteMovies.map((movie) => (
          <Favorite key={movie.id}  movie={movie} />
        ))}
        </div>
    </div>
  )
}

export default Favorites