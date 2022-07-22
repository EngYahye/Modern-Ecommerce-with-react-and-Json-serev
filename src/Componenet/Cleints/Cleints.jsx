import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import Cl1 from '../../images/testimonial/avatar1.png'
import Cl2 from '../../images/testimonial/avatar2.png'
import Cl3 from '../../images/testimonial/avatar3.png'
import Cl4 from '../../images/testimonial/avatar4.png'
// import Swiper core and required modules
import {  Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data=[
    {
        id:1,
        image:Cl1,
        Desc:'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        name:'Denny Hilguston',
        user:'Yahye20025@gmail.com'

},
    {
        id:2,
        image:Cl2,
        Desc:'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        name:'Denny Hilguston',
        user:'Yahye20025@gmail.com'

},
    {
        id:3,
        image:Cl3,
        Desc:'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        name:'Denny Hilguston',
        user:'Yahye20025@gmail.com'

},
    {
        id:4,
        image:Cl4,
        Desc:'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        name:'Denny Hilguston',
        user:'Yahye20025@gmail.com'

},
    {
        id:5,
        image:Cl4,
        Desc:'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        name:'Denny Hilguston',
        user:'Yahye20025@gmail.com'

},
   
    
]

const Cleints = () => {
  return (
    <div className='max-w-7xl px-10 mx-auto mt-32 text-center'>
         <h3 className='text-brightRed'>CLEINTS</h3>
        <h2 className='text-xl  md:text-3xl text-center font-medium'>Meet Client Satisfaction</h2>
        <Swiper className='grid grid-cols-1 md:grid-cols-3 mt-10 mb-16 gap-10 '
          modules={[ Navigation]}
          spaceBetween={40}
          slidesPerView={1}
        navigation
          
          pagination={{ clickable: true }}
        
        >
            {
                data.map(({image,name,user,id,Desc})=>{
                    return(
                        <SwiperSlide key={id} className="p-12 border rounded-lg  hover:drop-shadow-lg hover:bg-white">
                        <div className='flex text-brightRed text-md'>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        </div>
                        <div className=' text-left leading-10 text-md hove '>
                        <p>&ldquo; {Desc}&rdquo; </p>
                        </div>
            
                        <div className="flex mt-8">
                            <div>
                                <img src={image} alt="" />
                            </div>
            
                            <div className="flex flex-col ml-5">
                                <h2 className='text-sm font-bold'>{name}</h2>
                                <p className='text-red-500 text-left'>{user}</p>
                            </div>
                        </div>
            
                        
                       </SwiperSlide>
                    )
                })
            }
          
         

    </Swiper>
    </div>
  )
}

export default Cleints