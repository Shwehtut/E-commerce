/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

// import React from 'react'


const Order = ({order}) => {
    const navigate = useNavigate()
    // console.log(order.products);
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 ">
        <h2 className="font-semibold text-3xl mb-4">Thank you for your order!</h2>
        <p>Your order has placed successfully. You will receive an email confirmation shortly.</p>
        <div className="bg-gray-100 rounded border mt-6 p-4">
            <h3 className="font-semibold text-lg mb-2">Order Summer</h3>
            <p>Order Number: {order.orderNumber}</p>
            <div className="mt-4">
                <h2 className="font-semibold text-md mb-2">Shipping Information</h2>
                <p>{order.shippingInfomation.address}</p>
                <div className="flex">
                    <p>{order.shippingInfomation.city},</p>
                    <p>{order.shippingInfomation.zip}</p>
                </div>
            </div>
            <div className="mt-4">
                <h3  className="font-semibold text-md  mb-2">Items Ordered</h3>
                {
                    order.products.map(product => (
                        <div key={product.id} className="flex justify-between items-center">
                            <p>{product.name} x {product.quantity}</p>
                            <p>${product.price*product.quantity}</p>
                        </div>
                    ))
                }
            </div>
            <div className="mt-4 flex justify-between">
                <span>Total Price</span>
                <span>${order.totalPrice.toFixed(2)}</span>
            </div>
            
          
        </div>
        <div className="mt-6">
                <button className=" bg-green-500 hover:bg-green-700 py-2 px-4 text-white">Order Tracking</button>
                <button className=" bg-red-600 hover:bg-red-800 py-2 ml-8 px-4 text-white"
                onClick={()=> navigate('/')}
                >Continue Shopping</button>
        </div>
    </div>
  )
}

export default Order