
import '../../index.css'

import '../../app.css'
import {BsCart4} from 'react-icons/bs'
import {FaTrashAlt} from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../NewItem/Loader'
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from 'react-redux/es/exports'
import { addToCart } from '../../Features/cartSlice'
import {toast} from 'react-toastify';




const Product = () => {
  const api=axios.create({baseURL:'http://localhost:5001/'})
  const[products,setproducts]=useState(null);
  const dispatch= useDispatch()
  
  


  
  const Deletedata=(id)=>{
      if(window.confirm("are you sure to delete?")){
        
      api.delete(`products/${id}`);
      const newproducts= products.filter((product)=>{
          return product.id !== id
          // toast.success(`product Deleted!`)


      })



      setproducts(newproducts);

      }
      

  }
  useEffect(()=>{
    api.get("products").then(response=>{
      console.log(response)
        setproducts(response.data)

    }).catch(error=>{
        console.log(error)
    })

   

},[])

const addItem=(product)=>{
  dispatch(addToCart(product))
  
 



}

const Update=(id)=>{
  console.log(id)
  
}
  return(
    
    
    <div className='max-w-5xl px-10 mx-auto my-36'>
    <h1 className='text-2xl font-bold'>New Araival</h1>
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3 my-10">
    {!products && <Loader/>}
    {products && products.map(Product=>

 <motion.div 
//  initial={{ opacity: 0, scale: 0.6 }}
//   animate={{ opacity: 1, scale: 1 }}
//   exit={{ opacity: 0, scale: 0.6 }}

 key={Product.id} className="py-5 px-0 bg-white rounded-lg drop-shadow-md hover:drop-shadow-xl">
        
<img src={Product.imageAsset} className='flex items-center rounded-lg w-2/2 -mt-6' alt="" />
<h1 className='md:text-xl text-xl font-extrabold my-5 mx-8'>{Product.title}</h1>
<div className='flex gap-10 mx-8 text-lg md:text-xl  text-brightRed '>
<h3 className='    font-bold italic'>${Product.price}</h3>
<BsCart4 className='cursor-pointer' onClick={()=>addItem(Product)}/>
{localStorage.getItem('Auth')==='yahye20025@gmail.com' && (
              <FaTrashAlt className='cursor-pointer' onClick={(e)=>Deletedata(Product.id)}/>

            )
            }

{/* <FiEdit onClick={()=>Update(Product.id)} className="cursor-pointer"/> */}
</div>



</ motion.div>
      
      
      )}
     

    </div>
    

</div>


  )
  
}

export default Product