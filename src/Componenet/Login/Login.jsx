
import {motion} from 'framer-motion'
import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import '../../index.css'
import axios from 'axios'

const Login = ({setLogoutUser}) => {
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const[error,seterror]=useState("")
    
    
    let navigate=useNavigate();
    const login=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/api/auth/login",{
            email,
            password,
        }).then((Response)=>{
            localStorage.setItem('Auth',email);
            
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
        navigate("/")

        })
        .catch((error) => seterror(error.response.data.message));
    }


  return (
    <div className='flex flex-col items-center justify-center  h-[100vh] '>
        
        <form action="" className='md:py-[30px] space-y-5 md:px-[40px] md:w-[30%]
         py-[15px] px-[40px] w-[80%] bg-white 
        
        rounded-lg drop-shadow-lg' onSubmit={login}>
            <h1 className='text-xl font-bold  '>Register User</h1>
            {error && <p className='text-red-500 my-5 text-center'>{error}</p>}
            <div className='  '>
                <label htmlFor="" className='block  mb-[5px] text-md font-semibold'>User Name</label>
                <input type="text" className='bg-gray-200 text-[20px] rounded-lg 
                 w-[100%] py-[10px] px-[15px]     focus:outline-orange-400 ' 
                 placeholder='Enter User Name  ' value={email} onChange={e=>setemail(e.target.value)}/>
                 
            </div>
            <div className='  '>
                <label htmlFor="" className='block mb-[5px] text-md font-semibold'>PassWord</label>
                <input type="text" className='bg-gray-200 text-[20px] rounded-lg 
                 w-[100%] py-[10px] px-[15px]   focus:outline-orange-400 '
                 value={password} onChange={(e)=>setpassword(e.target.value)} 
                 placeholder='Enter Password  ' />
                 
            </div>
            <motion.button whileTap={{scale:0.8}} type='submit' 
       className='w-full p-2 rounded-xl bg-gradient-to-tr from-orange-400 to-orange-600
        text-gray-50 text-lg my-2
       hover:shadow-lg '   >
           Login

       </motion.button>
        </form>
        <p className='mt-5 '>
        Don't have an account? <Link className='text-blue-500 font-bold' to="/Register">Register</Link> yourself
      </p>

    </div>
  )
} 

export default Login