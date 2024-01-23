import React, { useEffect, useState } from 'react'
import logo from './asset/logo.svg'
import user from './asset/sam.jpg'
import './css/header.css'
import { FaUserAlt } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdSettingsInputSvideo } from "react-icons/md";
import { Link, useNavigate, NavLink} from 'react-router-dom';
import { auth, provider} from './firebase.js';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser, selectUserInfo } from '../app/disneySlice.js';

const Header = () =>{

  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo)
  console.log(userInfo)
  const navigate = useNavigate()
  const [signed, setSigned] = useState(false)
  console.log(userInfo)
  
  //if user is logged in and comes back to the application redirect the user to the home page

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        dispatch(addUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          image: user.photoURL
        }));

        navigate('/home')

      }else if(!user){
        navigate('/')
      }
    })
  }, [user.name])

  const handleAuth = () =>{
    if(!userInfo){
      signInWithPopup(auth, provider).then((result)=>{
        const user = result.user
        console.log(user)
        dispatch(addUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          image: user.photoURL
        }))
  
        setTimeout(()=>{
          navigate('/home')
        }, 1000)
  
        setSigned(false)
        
        
      }).catch((error)=>{
        console.log(error.code)
      })
      
    }else if(userInfo){
      signOut(auth).then(()=>{
        dispatch(removeUser())
  
        setTimeout(()=>{
          navigate('/')
        },1000)
        
      }).catch((error)=>{
        console.log(error)
        alert(error.message)
      })

    }
    
  }

  const handleUser = ()=>{
    setSigned(!signed)
  }

  const renderName = () => {
    if (userInfo.name.length > 15) {
      // Display ellipsis (...) for names longer than 15 characters
      return <span>{userInfo.name.slice(0, 15)}...</span>;
    } else {
      // Display the full name for names 15 characters or shorter
      return <span>{userInfo.name}</span>;
    }
  };


  return(
    <nav className='header-container'>
      <div className='header-content'>
        <Link to={'/home'}><img src={logo} alt='logo'/></Link>
        {userInfo &&
        <div className='nav-links-menu'>
          <ul className='nav-links'>
            <li><IoMdHome /><NavLink className='link' to='/home'>Home</NavLink></li>
            <li><FaSearch /><NavLink className='link'>Search</NavLink></li>
            <li><FaPlus /><NavLink to='/favorite' className='link'>Watchlist</NavLink></li>
            <li><FaStar /><NavLink className='link'>Originals</NavLink></li>
            <li><MdSettingsInputSvideo /><NavLink className='link'>Movies</NavLink></li>
            <li><FaPhotoVideo /><NavLink className='link'>Series</NavLink></li>
          </ul>
          <span className='watchlist'><NavLink to='/favorite'><FaPlus /></NavLink></span>
        </div>
        }
      </div>
      {userInfo ?
      <>
       <h4 className='user-name'>Hi, {renderName()}</h4>
      <div className='user-profile'>
       
        <div className='user'>
          {userInfo?.image ?  <img src={userInfo?.image} alt='' onClick={handleUser}/> : <FaUserAlt />}
        </div>
        {signed && <span className='sign-out' onClick={handleAuth}>Sign Out</span>}
      </div> </>:

      <div className='user-profile'>
        <div className='login-btn'>
        <button onClick={handleAuth}>LOGIN</button>
        </div>
      </div>
      }

      
      
      
      
    </nav>
  )
}

export default Header;