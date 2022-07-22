import React from 'react'
import logo from '../../images/logo.svg'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
      <section className='bg-white'>
    <div className='w-[90%]   py-[22px] mx-auto grid grid-cols-2 mb-[4rem] gap-5 mt-10 md:grid-cols-4 '>
        <img src={logo} alt="" className='ml-10'/>
        <div className='flex flex-col '>
            <h1 className='text-xl mb-[5px] font-semibold'>Links</h1>
            <ul className='space-y-2'>
                <li className='cursor-pointer text-gray-400 font-medium'>Home</li>
                <li className='cursor-pointer text-gray-400 font-medium'>Product</li>
                <li className='cursor-pointer text-gray-400 font-medium'>Contact</li>
                <li className='cursor-pointer text-gray-400 font-medium'>About</li>
                
                
            </ul>



        </div>
        <div className='flex flex-col'>
            <h1 className='text-xl  mb-[5px] font-semibold'>Company</h1>
            <ul className='space-y-2'>
                <li className='cursor-pointer text-gray-400 font-medium'>Privacy</li>
                <li className='cursor-pointer text-gray-400 font-medium'>Terms of privacy</li>
               
                
            </ul>



        </div>

        <div className='flex flex-col gap-5'>
            <div >
                <div >
                <span className='text-gray-400 font-medium '>Email:  </span> 
                <a href='mailto: yahye20025@gmail.com' className='text-black-100 text-lg'>Yahye20025@gmail.com</a>
            
            
            
            

                </div>
                <div>
                <span className='text-gray-400 textmd'>Inqueries:  </span> 
                <a href='Tel:252617455789' className='text-lg'>252617455789</a>
                </div>
              
            </div>
            <div className=''>
            <h1 className='text-xl font-bold mb-5'>Follow us on </h1>
            <div className='flex gap-6 text-xl text-drakGrayishBlue cursor-pointer w'>
            <FaFacebookSquare/>
            <AiOutlineInstagram/>
            <AiFillLinkedin/>
            </div>
            
             </div>
           
            

        </div>



    </div>
    <div className='border-b  border-solid border-gray-800 mb-[3rem]' ></div>
    <p className='p-2 text-gray-300 text-center'>
        Copyright &copy; 2022 midnimo team 
    </p>

    </section>
  )
}

export default Footer