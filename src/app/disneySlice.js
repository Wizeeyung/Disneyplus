import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  userInfo: null,
  favMovies: [],
  movies:[],
  recommend: [],
  newDisney: [],
  original: [],
  trending: []
}

export const disneySlice = createSlice({
  name: 'disney',
  initialState,
  reducers:{
    addUser: (state, action)=>{
      state.userInfo = action.payload
    },

    removeUser: (state) =>{
      state.userInfo = null
    },

    setMovies: (state, action)=>{
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending
    },

    setFullMovies: (state, action) =>{
      state.movies = action.payload.movies
    },

    addToMovies: (state, action) =>{
      const items = state.favMovies.find((movie)=>(
        movie.id === action.payload.id
      ));

      if(!items){
        state.favMovies.push({...action.payload, liked: true})
      }

      else{
        state.favMovies = state.favMovies.filter((movie)=>(
          movie.id !== action.payload.id
        ))
      }
    },

    deleteFavorite: (state, action) => {
      state.favMovies = state.favMovies.filter((movie)=> movie.id !== action.payload)
    }

  }
})

export const {addUser, setFullMovies ,removeUser, setMovies, addToMovies, deleteFavorite} = disneySlice.actions;
export const selectUserInfo = (state) => state.disney.userInfo;
export const selectRecommend = (state)=> state.disney.recommend;
export const selectDisney = (state)=> state.disney.newDisney;
export const selectFullMovies = (state)=> state.disney.movies;
export const selectOriginal = (state)=> state.disney.original;
export const selectTrending = (state)=> state.disney.trending;
export const selectAddToMovies = (state) => state.disney.favMovies;
export default disneySlice.reducer;