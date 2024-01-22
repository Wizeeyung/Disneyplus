import React, { useState } from "react";
import './css/home.css'
import Viewers from "./Viewers";
import ImageSlide from "./ImageSlide";
import Recommended from "./Recommended";
import bg from '../components/asset/home-background.png'
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "./firebase";
import {v4 as uuidv4} from 'uuid'
import { setFullMovies, setMovies } from "../app/disneySlice";
import { collection, getDocs } from "firebase/firestore";
import { selectUserInfo } from "../app/disneySlice";
import {SpinnerRoundOutlined} from 'spinners-react'

const Home = () =>{
  
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo)
  const [recommends, setRecommend] = useState([]);
  const [newDisneys, setNewDisney] = useState([]);
  const [originals, setOriginals] = useState([]);
  const [trendings, setTrendings] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(()=>{
    const setLoadTime = setTimeout(()=>{
      setLoader(true)
    },2000)

    return ()=>{
      clearTimeout(setLoadTime)
    }
  },[])

  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const databaseMovies = await getDocs(collection(db, 'movies'));
        const moviesData = databaseMovies.docs.map(doc => {
          const id = uuidv4()
          return {id, ...doc.data()}
      
        });

        console.log(moviesData)

        // Filter movies based on type and set state accordingly
        const recommendMovies = moviesData.filter(movie => movie.type === 'recommend');
        const newDisneyMovies = moviesData.filter(movie => movie.type === 'new');
        const originalsMovies = moviesData.filter(movie => movie.type === 'original');
        const trendingsMovies = moviesData.filter(movie => movie.type === 'trending');

        setRecommend(recommendMovies);
        setNewDisney(newDisneyMovies);
        setOriginals(originalsMovies);
        setTrendings(trendingsMovies);

        dispatch(setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings
        }))

        dispatch(setFullMovies({
          movies: moviesData
        }))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userInfo]);
  

  

  return(
    <div style={{ backgroundImage: `url(${bg})` }} className="home-bg">
      <div className="home-container">
        <ImageSlide />
        <Viewers />
        {loader ?
        <>
        <h3 className="movie-heading">Recommended For You</h3>
        <div className="movies-content">
        {recommends.map((movie) => (
          <Recommended key={movie.id}  movie={movie} />
        ))}
        </div>

        
        <h3 className="movie-heading">New Disney+</h3>
        <div className="movies-content">
         {newDisneys.map((movie) => (
          <Recommended key={movie.id} title='New Disney+' movie={movie} />
        ))}
        </div>

        <h3 className="movie-heading">Originals</h3>
        <div className="movies-content">
        {originals.map((movie) => (
          <Recommended key={movie.id} title='Originals' movie={movie} />
        ))}
        </div>

        <h3 className="movie-heading">Originals</h3>
        <div className="movies-content">
        {trendings.map((movie) => (
          <Recommended key={movie.id} title='Trendings' movie={movie} />
        ))}
        
        </div>
        {/* <Recommended title='Recommended For You' movies={recommends.map((movie)=> movie)} /> */}
        {/* <Recommended title='New Disney+' movies={newDisneys} /> */}
        {/* <Recommended title='Originals' movies={originals} />
        <Recommended title='Trendings' movies={trendings} /> */}
        
        </> : <div className='spinner'><SpinnerRoundOutlined type='TailSpin' height='50' width='50' color='darkblue'/></div>}
      </div>
      
      
    </div>
  )
}

export default Home