
import logo from '../../images/logo.svg'
import profile from '../../images/avatar-shanai.png'
import mobile from '../../images/icon-hamburger.svg'
import {BsCart4} from 'react-icons/bs'
import {RiCloseFill} from 'react-icons/ri'
import iphone from '../../images/Product/13.jpg'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import React, { useContext, useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import CartContainer from './CartContainer'
import Paypal from './Paypal'
import {MdOutlineKeyboardBackspace,MdClose} from 'react-icons/md'
import Auth from '../../images/Auth.jpeg'

// import {motion} from 'framer-motion'
import {RiRefreshFill} from 'react-icons/ri'
import phone from '../../images/Product/iphone8.jpg'
import { CartProvider} from 'react-use-cart'
import  { useSelector,useDispatch } from 'react-redux'
// import { BiMinus, BiPlus } from "react-icons/bi";
import emptyCart from '../../images/Product/emptyCart.svg'
import {BsSun} from 'react-icons/bs'
import { useTheme } from "next-themes";


import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import { removeFromCart } from '../../Features/cartSlice'
import { descreesCart} from '../../Features/cartSlice'
import { addToCart} from '../../Features/cartSlice'
import { ClearCart} from '../../Features/cartSlice'
import { getTotal} from '../../Features/cartSlice'
import { increesCart} from '../../Features/cartSlice'




const Header = ({logoutUser,setLogoutUser}) => {
  const [ActiveHamburger  ,SetHamburger]=useState(false);
  const [show   ,Setshow]=useState(false);
  const { theme, setTheme } = useTheme('dark');
  
  const [CheckOut,setCheckOut]=useState(false);
  // const [Auth,setAuth]=useState('');
  const cart=useSelector((state)=>state.cart);
  const [showcart,Setcart]=useState(false)
  const dispatch=useDispatch();
  const {cartTotalQuantity}=useSelector((state)=>state.cart);


  // Checking whether user is login or logout
  
  const[Login,setLogin]=useState("");
  useEffect(()=>{
    hydrateStatewithLocalstorage();
  },[logoutUser])

  const logout=()=>{
    localStorage.removeItem('login');
    setLogoutUser(true);
  }

  const hydrateStatewithLocalstorage=()=>{
    if(localStorage.hasOwnProperty('login')){
      let value=localStorage.getItem('login');
      try{
        value=JSON.parse(value);
        setLogin(value)
      }
      catch(e){
        setLogin("");
      }
    }
  }


  useEffect(()=>{
    dispatch(getTotal())


  },[cart,dispatch])
   
// setAuth(localStorage.getItem())
  


  // const ReadDataFromStg=()=>{
  //   let oldnotes;
  //   if(localStorage.getItem('data')===null){
  //     oldnotes=[];
  //   }
  //   else{
  //     oldnotes=JSON.parse(localStorage.getItem('data'))
  //     setStorage(oldnotes)
  //   }

  // }

  const RemoveFromCart=(cartItem)=>{
    dispatch(removeFromCart(cartItem))
  };

  const DecreesFromCart=(cartItem)=>{
    dispatch(descreesCart(cartItem))
  }

  const addTocart=(cartItem)=>{
    dispatch(addToCart(cartItem))

  }
  const ClearCarts=()=>{
    dispatch(ClearCart())

  }

  
  
  return (
 <div>
     
     <nav className="fixed container-lg z-40 mx-auto bg-white h-20 w-screen top-0 p-10">
        <div className="flex  items-center justify-between">
            <div className="pt-2">
                <img src={logo} alt="image not found" />
            </div>
            <div className="hidden  md:flex space-x-6 ">
                <Link to="/" className='hover:text-drakGrayishBlue'  >Home</Link>
                <Link to="/Product" className='hover:text-drakGrayishBlue'>Product</Link>
                <Link to='/About' className='hover:text-drakGrayishBlue'>About</Link>
                <Link to='/Contact' className='hover:text-drakGrayishBlue'>Contact</Link>
                {/* {theme === "dark" ? (
          <BsSun
            className="w-7 cursor-pointer "
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsSun
            className="w-7 cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        )} */}
                
            </div>
            










            <div className='flex items-center gap-20'>
              <small>
            <BsCart4 className=" text-brightRed text-xl cursor-pointer"
            onClick={()=>Setcart(!showcart)} />
             <span className='text-white bg-yellow-300 right-52 md:right-36 px-[5px] 
             absolute md:top-10 top-6 rounded-full text-md font-semibold '>{cartTotalQuantity}</span>
            
            </small>
           










              
             <div 
              className=' p-1 rounded-full cursor-pointer'>

                   
        {localStorage.getItem('Auth')==='yahye20025@gmail.com' ?(
               <motion.img whileTap={{scale:0.75}}
               onClick={()=>Setshow(!show)} src={Auth} alt="" className=' w-10 h-10 hidden md:block rounded-full'/>
               

            ):(
              <motion.img whileTap={{scale:0.75}}
              onClick={()=>Setshow(!show)} src={profile}
               alt="" className='w-12 hidden md:block rounded-full'/>
            )
            }

         
            
            
            

          </div>
          

            </div>

            
           

          <div  className={` ${show?'flex':' hidden '}  absolute  flex-col  self-end   
          py-2 px-5 top-24  font-bold rounded-md right-8
          bg-white md:w-auto space-y-3   md:drop-shadow-lg text-left`} >

            {localStorage.getItem('Auth')==='yahye20025@gmail.com' && (
              <Link to='/NewItem'onClick={()=>Setshow(false)}>New Item</Link>

            )
            }
              

            
               

      {!logoutUser && Login && Login.userLogin? (
        <Link to=''onClick={logout}>Logout</Link>
            // <button className='bg-red-800 
            // rounded text-2xl ml-10 text-white ' onClick={logout}>logout</button>

        ):(
          // <Link to="/login">
          // <button className='bg-red-500  rounded text-2xl 
          // font-bold text-white '>login</button>
          // </Link>
          <Link to='/Login' onClick={()=>Setshow(false)}>Login</Link>
        ) }

           

         
            
           </div>
           
            
        {/* <!-- Hamburger Icon --> */}
        <button
        onClick={()=>SetHamburger(!ActiveHamburger)} 
        
        
          id="menu-btn"
          className= ' block hamburger md:hidden focus:outline-none'
          
          
        > 
     



      <img src={mobile} alt="" />
        </button>
      
        </div>
        {/* <!-- Mobile Menu --> */}
      <div className="md:hidden">
        <div
          id="menu open"
          className={`${ActiveHamburger?'right-5':'hidden '}  absolute flex flex-col items-center md:hidden self-end py-8 h-screen px-3 mt-10 
          space-y-6 font-bold bg-white sm:w-auto sm:self-center 
          right-70 left-0 top-12 drop-shadow-md`}
        >
               <Link to="/" className='hover:text-drakGrayishBlue' onClick={()=>SetHamburger(false)}>Home</Link>
               {localStorage.getItem('Auth')==='yahye20025@gmail.com' && (
              <Link to='/NewItem'onClick={()=>Setshow(false)}>New Item</Link>

            )
            }
                <Link to="/Product" className='hover:text-drakGrayishBlue' onClick={()=>SetHamburger(false)}>Product</Link>
                <Link to='/About' className='hover:text-drakGrayishBlue' onClick={()=>SetHamburger(false)}>About</Link>
                <Link to='/Contact' className='hover:text-drakGrayishBlue' onClick={()=>SetHamburger(false)}>Contact</Link>

                {!logoutUser && Login && Login.userLogin? (
        <Link to=''onClick={logout}>Logout</Link>
            // <button className='bg-red-800 
            // rounded text-2xl ml-10 text-white ' onClick={logout}>logout</button>

        ):(
          // <Link to="/login">
          // <button className='bg-red-500  rounded text-2xl 
          // font-bold text-white '>login</button>
          // </Link>
          <Link to='/Login' onClick={()=>Setshow(false)}>Login</Link>
        ) }
          
        </div>
       
      </div>
    </nav>

    
    {/* Out Cart*/}
    {CheckOut? (
      <Paypal/>

    ):(
      <motion.div initial={{opacity:0,x:200}}
      animate={{opacity:1,x:0}}
      exit={{opacity:1,x:200}}
  
className= {`${showcart?'flex':' hidden'}  fixed  top-0 right-0 w-full md:w-[65vh] h-[100vh]
bg-white z-[101] drop-shadow-md  flex-col`}>
  <div className="w-full flex p-4 items-center justify-between cursor-pointer">
      <motion.div whileTap={ {scale:0.75}}>
        <MdOutlineKeyboardBackspace 
        onClick={()=>Setcart(!showcart)}
      className={`    text-brightRed text-3xl`}/>
  
      </motion.div>
      <p className='text-brightRed text-lg font-semibold'>Cart</p>
      <motion.p whileTap={{scale:0.75}}className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hovershadow-md duration-100
       cursor-pointer text-brightRed text-base' onClick={()=>ClearCarts()}> Clear 
       <RiRefreshFill />
       </motion.p>

      </div>

  {/* Bottom section */}

  {cart.cartItems&& cart.cartItems.length>0?(
     <div className='w-full h-full overflow-hidden bg-cartBg rounded-t-[2rem] flex flex-col'>
    
     {/* Cart Items section */}
 <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3  scrollbar-hide overflow-y-scroll '>
     {/* Cart Item section */}

     {cart.cartItems?.map(cartItem=>(
       
     <div className='w-full p-1 px-2 bounded-lg bg-cartItem flex items-center gap-2' key={cartItem.id}>
     <img src={cartItem.imageAsset}className='w-20 h-20 rounded-full max-w-[60px] object-contain' alt="" />

     <div className='flex flex-col gap-3'>
         <p className='text-base text-gray-50'>{cartItem.title}</p>
         <div className='flex gap-4'>
         <p className='text-sm block text-gray-300 font-semibold'>${cartItem.price}</p>
         <motion.div whileTap={{scale:0.75}}>
             <MdClose className='text-gray-50 text-xl cursor-pointer' onClick={()=>RemoveFromCart(cartItem)} />
         </motion.div>
         </div>
     </div>
     <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
         <motion.div whileTap={{scale:0.75}}>
             <BiMinus className='text-gray-50' onClick={()=>DecreesFromCart(cartItem)}/>
         </motion.div>
         <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex
         items-center justify-center'>{cartItem.cartquantity}</p>
         <motion.div whileTap={{scale:0.75}}>
             <BiPlus className='text-gray-50' onClick={()=>addTocart(cartItem)}/>
         </motion.div>
         <p className=' block text-gray-400 text-lg font-semibold'>${cartItem.price*cartItem.cartquantity}</p>
        
         
         
         
         
     </div>
 
 </div>
     ))}
    
   
    
    
    
   
   


 </div>

   {/* Cat total */}
   <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex
   flex-col items-center justify-evenly py-2 px-8'>
       
     

       <div className="w-full flex items-cneter justify-between border-b border-gray-600 my-2">
           <p className="text-gray-200 text-xl font-semibold">Total</p>
           <p className="text-gray-200 text-xl font-semibold">$ {cart.cartTotalAmount}</p>
       </div>
     
     
       <motion.button whileTap={{scale:0.8}} type='button' 
       className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600
        text-gray-50 text-lg my-2
       hover:shadow-lg ' onClick={()=>{setCheckOut(true)}}  >
           Check out

       </motion.button>
     
   </div>
   
   
   



 </div>

  ):(
    <div className='w-full h-full flex flex-col items-center justify-center gap-6 '>
      <img src={emptyCart} alt="" className='w-300' />
      <p className='text-xl font-semibold text-textColor'>
        Add some items to your Cart
      </p>

    </div>
  )}
 
  
</motion.div>
    )}
   
    

  

     
 </div>
  )
}

export default Header