import React from 'react'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import {motion} from 'framer-motion'
import {RiRefreshFill} from 'react-icons/ri'
import phone from '../../images/Product/iphone8.jpg'
import { BiMinus, BiPlus } from "react-icons/bi";

const CartContainer = () => {
  return (
    <motion.div initial={{opacity:0,x:200}}
            animate={{opacity:1,x:0}}
            exit={{opacity:0,x:200}}
        
     className='fixed top-0 right-0 w-full md:w-[50vh] h-[100vh]
     bg-white z-[101] drop-shadow-md flex flex-col'>
        <div className="w-full flex p-4 items-center justify-between cursor-pointer">
            <motion.div whileTap={ {scale:0.75}}><MdOutlineKeyboardBackspace 
            className='text-brightRed text-3xl'/>
        
            </motion.div>
            <p className='text-brightRed text-lg font-semibold'>Cart</p>
            <motion.p whileTap={{scale:0.75}}className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hovershadow-md duration-100
             cursor-pointer text-brightRed text-base'>
                Clear <RiRefreshFill/></motion.p>

        </div>
        {/* Bottom section */}
        <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
            {/* Cart Items section */}
        <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3  scrollbar-hide overflow-y-scroll '>
            {/* Cart Item section */}
           
          
           
           
           
          
          
            <div className='w-full p-1 px-2 bounded-lg bg-cartItem flex items-center gap-2'>
                <img src={phone} className='w-20 h-20 rounded-full max-w-[60px] object-contain' alt="" />

                <div className='flex flex-col gap-3'>
                    <p className='text-base text-gray-50'>Iphone 13</p>
                    <p className='text-sm block text-gray-300 font-semibold'>$13</p>
                </div>
                <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                    <motion.div whileTap={{scale:0.75}}>
                        <BiMinus className='text-gray-50'/>
                    </motion.div>
                    <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex
                    items-center justify-center'>5</p>
                    <motion.div whileTap={{scale:0.75}}>
                        <BiPlus className='text-gray-50'/>
                    </motion.div>
                    
                    
                    
                    
                </div>
            
            </div>


        </div>

        {/* Cat total */}
        <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex
        flex-col items-center justify-evenly py-2 px-8'>
            <div className="w-full flex items-center justify-between">
                <p className="text-gray-400 text-lg">Sub Total</p>
                <p className="text-gray-400 text-lg">$7</p>
            </div>
            <div className="w-full border-b border-gray-600 my-2">

            </div>

            <div className="w-full flex items-cneter justify-between">
                <p className="text-gray-200 text-xl font-semibold">Total</p>
                <p className="text-gray-200 text-xl font-semibold">$ 10</p>
            </div>
            <motion.button whileTap={{scale:0.8}} type='button' 
            className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600
             text-gray-50 text-lg my-2
            hover:shadow-lg transition-all duration-150 ease-out'   >
                Check out

            </motion.button>
        </div>

        </div>
        
     </motion.div>
  )
}

export default CartContainer