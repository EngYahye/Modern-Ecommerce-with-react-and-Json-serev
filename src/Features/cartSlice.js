import {createSlice} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

const initialState={
    cartItems:localStorage.getItem("cartItems") 
    ? JSON.parse(localStorage.getItem("cartItems")) :[],
    cartTotalQuantity:0,
    cartTotalAmount:0

}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
          const itemIndex=  state.cartItems.findIndex(
            (item)=> item.id===action.payload.id);

            if(itemIndex>=0){
                state.cartItems[itemIndex].cartquantity+=1
                toast.info(` ${state.cartItems[itemIndex].title} added to the cart `,
                {
                position:"top-right"
                
                 } )

            }
            else{
                const tempProduct={...action.payload,cartquantity:1};
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.title} added to cart`,{
                    position:"top-right"
                    
                     } )

            }

            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
           
        },
        increesCart(state,action){
          const itemIndex=  state.cartItems.findIndex(
            (item)=> item.id===action.payload.id);

            if(itemIndex>=0){
                state.cartItems[itemIndex].cartquantity+=1
                toast.info(` ${state.cartItems[itemIndex].title} is already in a cart `,
                {
                position:"top-right"
                
                 } )

            }
            else{
                const tempProduct={...action.payload,cartquantity:1};
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.title} added to cart`,{
                    position:"top-right"
                    
                     } )

            }

            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
           
        },
        removeFromCart(state,action){
            const nextcartItems=state.cartItems.filter(
                cartItem=>cartItem.id !== action.payload.id
            );
            state.cartItems=nextcartItems
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
            toast.error(`${action.payload.title} remover from cart`,{
                position:"top-right"
                
                 } )
        },

        descreesCart(state,action){
            const itemIndex=state.cartItems.findIndex(
                cartItem=>cartItem.id === action.payload.id
            )
            if(state.cartItems[itemIndex].cartquantity>1){
                state.cartItems[itemIndex].cartquantity -=1

                toast.info(` Decreesed ${action.payload.title}  cart quantity`,{
                    position:"top-right"
                    
                     } )
            }
            else if(state.cartItems[itemIndex].cartquantity===1){
                const nextcartItems=state.cartItems.filter(
                    cartItem=>cartItem.id !== action.payload.id
                );
                state.cartItems=nextcartItems
                
                toast.error(`${action.payload.title} remover from cart`,{
                    position:"top-right"
                    
                     } )
            }

            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },

        ClearCart(state,action){
            state.cartItems=[];
            toast.info(`Cart Cleared..`,{
                position:"top-right"
                
                 } )
                 localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        getTotal(state,action){
            let {Total,Quantity}=state.cartItems.reduce((cartTotal,cartItem)=>{
                const {price,cartquantity}=cartItem;
                const ItemTotal=price*cartquantity;
                cartTotal.Total+=ItemTotal;
                cartTotal.Quantity+=cartquantity;
                return cartTotal;
            },{
                Total:0,
                Quantity:0
            });

            state.cartTotalAmount=Total;
            state.cartTotalQuantity=Quantity;
        }

    },
    

})

export const {addToCart,removeFromCart,descreesCart,ClearCart,getTotal}=  cartSlice.actions;

export default cartSlice.reducer;