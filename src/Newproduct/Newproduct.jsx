import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Newproduct = () => {
    const navigate=useNavigate();
    const api=axios.create({baseURL:'http://localhost:5000/'})
    const[name,setname]=useState('');
    const[phone,setphone]=useState('');
    const saveData=(event)=>{
        event.preventDefault();
        const data ={phone,name};
        api.post("students",data).then(response=>{
            console.log(response.data);
            navigate('/')

        }).catch(error=>{
            console.log(error)
        })
    }

  return (
    <form onSubmit={saveData}>
        <div className='felx block m-5 bg-red-900 w-96 h-96'>
            <div >
               <div className='mt-10'>
               <label className='text-white text-2xl text-white text-2xl ml-20' htmlFor="">Name</label>
                <input type="text" className='  px-20 py-2 rounded focus:outline-sky-300 mx-2'
                value={name} onChange={e=>setname(e.target.value)} />
               </div>
               <div className='mt-10'>
               <label className='text-white text-2xl ml-20' htmlFor="">Phone</label>
                <input type="text" className=' 
                 px-20 py-2 rounded focus:outline-sky-300 mx-2' value={phone} onChange={e=>setphone(e.target.value)} />
               </div>
            </div>
            <div >
            <button type='submit' className='bg-blue-500 text-2xl p-2 m-10 text-white rounded  '>Save</button>
            </div>
        </div>
    </form>
  )
}

export default Newproduct