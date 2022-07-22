import React from 'react'
import '../../index.css'
import team1 from '../../images/Team/member-1.png'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import team2 from '../../images/Team/member-2.png'
import team3 from '../../images/Team/member-3.png'
import team4 from '../../images/Team/member-4.png'
import team5 from '../../images/Team/member-5.png'
import team6 from '../../images/Team/member-6.png'

const Data=[
  {
    image:team1,
    name:'Mohamed Said',
    skill:'Web developer'
  },
  {
    image:team2,
    name:'Mohamed Said',
    skill:'Web developer'
  },
  {
    image:team3,
    name:'Mohamed Said',
    skill:'Web developer'
  },
  {
    image:team4,
    name:'Mohamed Said',
    skill:'Web developer'
  },
  {
    image:team5,
    name:'Mohamed Said',
    skill:'Web developer'
  },
  {
    image:team6,
    name:'Mohamed Said',
    skill:'Web developer'
  },
]

const Team = () => {
  return (
    <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
        <h3 className='text-brightRed'>OUR TEAM</h3>
        <h2 className='text-xl  md:text-3xl text-center font-medium'>The most qualified and talented<br></br> individuals</h2>
        {/* Teams */}
        <div className="grid grid-cols-2 space-x-4 md:space-y-6 md:space-x-10 md:grid-cols-3">
            {/* Person one */}
            {
              Data.map(({image,name,skill},index)=>{
                return(
                  <div className='p-10 md:hover:bg-white hover:rounder-lg mb-5 hover:text-back md:hover:text-brightRed hover: drop-shadow-md'>

               <img src={image} alt="" className='w-24 ml-6 -mt-4 md:ml-20 md:w-auto bg-brightRed rounded-full p-0.5' />
               <h1 className='text-md font-bold my-4'>{name}</h1>
               <p className='text-sm'>{skill}</p>
               <div className='md:absolute  flex md:block space-x-8 mt-5text-black md:right-5 md:space-x-0 md:space-y-5 md:bottom-12  '>
                <div>
                <FaFacebookF/>
            
                </div>
                <div><AiOutlineTwitter/>
                </div>
                <div><AiOutlineInstagram/></div>
               </div>

               <div>
                

               </div>

               
            </div>

                )
              })
            }
        </div>

    </div>
  )
}

export default Team