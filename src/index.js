import React from "react";
import reactdom from 'react-dom'
import App from "./App";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux'
import { AnimatePresence, motion } from "framer-motion";

import productReducer from "./Features/productSlice";
import cartReducer from './Features/cartSlice'
import {getTotal} from './Features/cartSlice'



const store= configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer
    },
});




reactdom.render(
    <React.StrictMode>
        <Provider store={store}>
<App/>
</Provider>
</React.StrictMode>
, document.getElementById('root'))