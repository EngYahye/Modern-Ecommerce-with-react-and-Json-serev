import React from 'react'
import '../../index.css'
import boxing from '../../images/Computers.svg'
import Team from '../Team/Team'
import  Cleints from '../Cleints/Cleints'


const ShowCase = () => {
    return (
      <div>
        <section id='Hero' className='max-w-7 md:px-[100px] py-[40px]  mx-auto mt-100 mb-100'>
            {/* <div className="container flex flex-col-reverse md:flex-row px-6 items-center mx-auto space-y-0 md:space-y-0 mt-10"> */}
            <div className="container flex flex-col-reverse md:flex-row px-6 items-center justify-around mx-auto md:space-x-[40px] space-y-0 md:space-y-0 mt-10 ">
              <div className="md:w-[30%] md:ml-[100px]  " >
                <h1 className='text-4xl font-semibold leading-12 py-10 capitalice text-center md:text-left md:5xl'> Top Quality and Digital Products </h1>
                <p className='max-w-sm  text-md '> Manage makes it simple for software teams to plan day-to-day tasks
                   while keeping the larger team goals in view
                </p>
    
                {/* <h1 className=" text-4xl font-semibold leading-5 capitalize text-center md:text-left md:text-5xl">
                Top Quality and Digital Products 
                </h1>
                <p className="max-w-sm  ">
                   Manage makes it simple for software teams to plan day-to-day tasks
                   while keeping the larger team goals in view
                
                </p> */}
                <div className="flex justify-center md:justify-start mt-5">
                <a href="#" className="  p-3 px-6 pt-2 text-white rounded-full hover:bg-brightRedLight baseline bg-brightRed text-center">Shop Now</a>
                </div>
              </div>
    
              <div className=" ">
                <img src={boxing} alt="" className='w-[420px]' />
                
    
                </div>
              
                
            </div>
        </section>
        <Team/>
        <Cleints/>
        </div>


      )
    }

export default ShowCase