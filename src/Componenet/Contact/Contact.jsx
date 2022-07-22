import React from 'react'
import '../../index.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../../index.css'
const Contact = () => {
  const Form = useRef();
  
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_omzrksf', 'template_sqcodlx', Form.current, 'mELPgT27kYmrxrLbx')
     e.target.reset();
  };


  return (
   

    <section className=' mt-[8rem]'>
      <h5 className='text-center  font-medium text-BG'>Get in touch</h5>
      <h2 className='text-center  font-medium mb-[3rem] text-cartTotal'>Contact</h2>

      <div className='w-[58%] mx-auto grid  grid-cols-1 gap-[2rem] md:grid-cols-2 md:gap-[12%] '>

        {/* Contact options */}
        <div className="flex flex-col gap-[1.2rem] mb-[8rem]
         ">
          {/* option 1 */}
          <article className='p-[1.2rem] border rounded-lg text-center cursor-default 
          transition-all 400ms ease bg-white hover:border-tag drop-shadow-sm hover:bg-transparent'>
              <HiOutlineMail className='text-drakGrayishBlue text-[1.8rem] mb-[0.5rem]'/>
            <h4 className='text-brightRed'>Email</h4>
            <h5 className='text-drakGrayishBlue font-semibold'>Yahye20025@gmail.com</h5>
            <a href="mailto:yahye20025@gmail.com" target='_blank' className='mt-[0.7rem] 
             text-tag font-medium
            inline-block '>Email</a>

          </article>
          <article className='p-[1.2rem] border rounded-lg text-center  cursor-default
          transition-all 400ms ease bg-white hover:border-tag drop-shadow-sm hover:bg-transparent'>
              <BsWhatsapp className='text-drakGrayishBlue text-[1.8rem] mb-[0.5rem]'/>
            <h4 className='text-brightRed'>What'sapp</h4>
            <h5 className='text-drakGrayishBlue font-semibold'>252617455789</h5>
            <a href="https://api.whatsapp.com/send?phone=252617455789" target="_blank" className='mt-[0.7rem] 
             text-tag font-medium
            inline-block '>What'sapp</a>

          </article>
          <article className='p-[1.2rem] border rounded-lg text-center 
          transition-all 400ms ease bg-white hover:border-tag drop-shadow-sm hover:bg-transparent'>
              <RiMessengerLine className='text-drakGrayishBlue cursor-default text-[1.8rem] mb-[0.5rem]'/>
            <h4 className='text-brightRed'>Messenger</h4>
            <h5 className='text-drakGrayishBlue font-semibold'>Yahye Ali Yusuf</h5>
            <a href="https://m.me/profile.php?id=100008832166607" target='_blank' className='mt-[0.7rem] 
             text-tag font-medium
            inline-block '>Send message</a>

          </article>
         
        </div>

        <form ref={Form} onSubmit={sendEmail} className='flex flex-col gap-[1.2rem]'>
          <input type="text" name='name' placeholder='Your Full Name' required 
            className='w-[100%] bg-transparent p-[1.5rem] rounded-md border border-tag text-gray-800 focus:outline-none'/>
          
          <input type="email" name='email' placeholder='Your Email' required
          className='w-[100%] bg-transparent p-[1.5rem] rounded-md border border-tag text-gray-800 focus:outline-none ' />
          <textarea name="message" id="" rows="7" required placeholder='Your message'   className='w-[100%] bg-transparent p-[1.5rem] 
          rounded-md border border-tag
          text-gray-800 focus:outline-none'>
            
          </textarea>
          <button type='submit' className='w-[max-content] inline cursor-pointer 
          py-[0.7rem] px-[1.2rem] rounded-md  border border-solid font-medium
          border-veryLightGray   hover:bg-tag hover:border-transparent 
          bg-orange-500 hover:text-white text-white'>Send Message</button>
        </form>

      </div>

    </section>
  )
}

export default Contact