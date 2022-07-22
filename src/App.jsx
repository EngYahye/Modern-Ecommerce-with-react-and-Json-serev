import React,{Fragment,  useState} from 'react'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';


import './app.css'
import './index.css'
// import Home from './Home';
import 'react-toastify/dist/ReactToastify.css'







import Header from './Componenet/Header/Header';
import Paypal from './Componenet/Header/Paypal'
import ShowCase from './Componenet/ShowCase/ShowCase';
import Team from './Componenet/Team/Team';
import Cleints from './Componenet/Cleints/Cleints'
import Product from './Componenet/Products/Product';
import NewItem from './Componenet/NewItem/NewItem'
import { AnimatePresence, motion } from "framer-motion";
import {ToastContainer} from 'react-toastify';
import Register from './Componenet/Register/Register'
import Login from './Componenet/Login/Login'
import Contact from './Componenet/Contact/Contact'
import Footer from './Componenet/Footer/Footer'
import About from './Componenet/About/About';

// import CartContainer from './Componenet/Header/CartContainer'



const App = () => {
  const[logoutUser,setLogoutUser]=useState(false);
  
    // <BrowserRouter>
    // <div>
    //   <h1 className='text-2xl'>User authentication using Json server</h1>
      
    
    //   <Routes>
        // <Route path="/ShowCase" element={
        //   <Fragment>
        //     <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
        //     <ShowCase logoutUser={logoutUser} />
        //   </Fragment>
        // } />
        // <Route path="/Login" element={
        //   <Fragment>
        //       <Login setLogoutUser={setLogoutUser} />
        //   </Fragment>
        // }/>
        // <Route path="/register" element={
        //   <Fragment>
        //       <Register setLogoutUser={setLogoutUser} />
        //   </Fragment>
        // }/>
        
    //     </Routes>
    // </div>
    // </BrowserRouter>
    

    //product 
  //   return(
  //     <BrowserRouter>
  //   <div>
  //   <button className='text-2xl mx-2 bg-red-500 py-2 px-4 
  //  rounded text-white mt-1'
  //  ><Link to={'/NewProduct'} >New Item</Link></button>
  //     <Routes>
  //     <Route path='/' element={<Item/>}/>
  //     <Route path='/NewProduct' element={<Newproduct/>}/>
  //     </Routes>
  //   </div>
  //   </BrowserRouter>
  
  // )
  
  return(
    
        <BrowserRouter>
    <ToastContainer/>
    <div>
      {<Header/>}
    <AnimatePresence>
    <Routes>
      
    <Route path="/" element={
          <Fragment>
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <ShowCase logoutUser={logoutUser} />
          </Fragment>
        } />

<Route path="/Login" element={
          <Fragment>
              <Login setLogoutUser={setLogoutUser} />
          </Fragment>
        }/>
      
      <Route path="/Register" element={
          <Fragment>
              <Register setLogoutUser={setLogoutUser} />
          </Fragment>
        }/>
      
      {/* <CartContainer/> */}
      
   
      {/* <Route path='/' element={<ShowCase/>}/> */}
      
      <Route path='/Product' element={<Product/>}/>
      
      <Route path='/NewItem' element={<NewItem/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      
      </Routes>
      </AnimatePresence>
      <Footer/>
   </div>
    </BrowserRouter>
    
  
  )
  
}

export default App