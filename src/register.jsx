import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import './index.css'
import axios from 'axios'
const Register = ({setLogoutUser}) => {
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const[error,seterror]=useState("")
    let navigate=useNavigate();
    const register=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/api/auth/register",{
            email,
            password,
        }).then((Response)=>{
            console.log("response",Response)
            localStorage.setItem(
                "login",JSON.stringify(
                    {
                        userLogin:true,
                        token: Response.data.access_token,
                    })
            );
            seterror("");
        setpassword("");
        setemail("");
        setLogoutUser(false);
        navigate("/Home")

        })
        .catch((error) => seterror(error.response.data.message));
    }
  return (
    <div className=' my-10'>
        <h2 className='text-2xl text-center my-5'>Register page</h2>
        {error && <p className='text-red-500 my-5 text-center'>{error}</p>}
        <form className='p-10 bg-gray-900 flex flex-col ' onSubmit={register}>
            <input type="text" id='user name' placeholder='user name'
            value={email} onChange={(e)=>setemail(e.target.value)} 
            className='text-black text-xl focus:outline-none w-96 m-3 pt-3 rounded'/>
            <input type="password" id='user name' value={password} onChange={(e)=>setpassword(e.target.value)}
             placeholder='password' className='w-96 focus:outline-none m-3 pt-3
            text-black text-xl   rounded'/>
            

            <button className='bg-sky-500 rounded text-2xl font-bold w-2/1 ' type='submit'>Register</button>
        </form>
        <p>
        Already have an account then please <Link to="/login">Login</Link>
      </p>
    </div>
    
    
  )
}

export default Register