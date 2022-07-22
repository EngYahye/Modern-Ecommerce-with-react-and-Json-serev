import React, { useRef, useEffect } from "react";
import '../../index.css'
import {Link} from 'react-router-dom'
import  { useSelector,useDispatch } from 'react-redux'
export default function Paypal() {
  const paypal = useRef();
  const cart=useSelector((state)=>state.cart);

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: `${cart.cartTotalAmount}`
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
        <Link className='mt-100 text-lg' to='/'>Back Home</Link>
    <div>
        
      <div ref={paypal} className='flex items-center justify-center h-[100vh] ' target='blank'></div>
    </div>
    </div>
  );
}