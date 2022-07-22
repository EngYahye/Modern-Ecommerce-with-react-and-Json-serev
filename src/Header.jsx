import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './index.css';

const Header = ({logoutUser,setLogoutUser}) => {
  const[Login,setLogin]=useState("");
  useEffect(()=>{
    hydrateStatewithLocalstorage();
  },[logoutUser])

  const logout=()=>{
    localStorage.removeItem('login');
    setLogoutUser(true);
  }

  const hydrateStatewithLocalstorage=()=>{
    if(localStorage.hasOwnProperty('login')){
      let value=localStorage.getItem('login');
      try{
        value=JSON.parse(value);
        setLogin(value)
      }
      catch(e){
        setLogin("");
      }
    }
  }
  return (
    <div>
      <header className='mt-20'>
        {!logoutUser && Login && Login.userLogin? (
            <button className='bg-red-800 
            rounded text-2xl ml-10 text-white ' onClick={logout}>logout</button>

        ):(
          <Link to="/login">
          <button className='bg-red-500  rounded text-2xl 
          font-bold text-white '>login</button>
          </Link>
        ) }
      </header>

    </div>
  )
}

export default Header