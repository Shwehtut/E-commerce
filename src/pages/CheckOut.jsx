/* eslint-disable react/prop-types */
// import React from 'react'

import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const CheckOut = ({setOrder}) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod , setPaymentMethod] = useState("cod");
  const [shippingInfo , setShippingInfo] = useState({
    address : '',
    city : '',
    zip : ''
  })

const cart = useSelector(state => state.cart)
const navigate = useNavigate()

 const  orderHandle = () =>{
    const newOrder = {
        products : cart.products,
        orderNumber : '12344',
        shippingInfomation : shippingInfo,
        totalPrice : cart.totalPrice
    }
    setOrder(newOrder)
    navigate('/order_confirm')
  }
  

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 min-h-96 ">
      <h3 className="font-semibold text-3xl mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
 {/*Biling */}
          <div className="border p-2 mb-6 ">
            <div
              className="flex justify-between items-center"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="font-semibold text-xl mb-4">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4   ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="border w-full py-2 px-3"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="border w-full py-2 px-3"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  placeholder="Enter Your Phone"
                  className="border w-full py-2 px-3"
                />
              </div>
            </div>
          </div>
 {/* Shipping  */}
          <div className="border p-2 mb-6 ">
            <div
              className="flex justify-between items-center"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="font-semibold text-xl mb-4">
                Shipping Information
              </h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4   ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name ="address"
                  placeholder="Enter Your Address"
                  className="border w-full py-2 px-3"
                  onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                   name = "city"
                  placeholder="Enter Your City"
                  className="border w-full py-2 px-3"
                  onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700">Zip Code</label>
                <input
                  type="text"
                  name = "zip"
                  placeholder="Enter Your Zip Code"
                  className="border w-full py-2 px-3"
                  onChange={(e) => setShippingInfo({...shippingInfo, zip: e.target.value})}
                />
              </div>
            </div>
          </div>
{/*Payment methods */}
          <div className="border p-2 mb-6 ">
            <div
              className="flex justify-between items-center"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="font-semibold text-xl mb-4">Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4   ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input 
                type="radio" 
                name="payment" 
                checked= {paymentMethod === "cod"}
                onChange={()=> setPaymentMethod ("cod")}
                 />
                <label className="block text-gray-700 ml-2">Cash On Delivery</label>
              </div>
              <div className="flex items-center mb-2">
                <input 
                type="radio" 
                name="payment" 
                checked= {paymentMethod === "dc"}
                onChange={()=> setPaymentMethod ("dc")}
                 />
                <label className="block text-gray-700 ml-2">Debit Cash</label>
              </div>
    {/*payment card informantion form */}
              {paymentMethod === "dc" && (
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <h3 className="text-xl font-semibold mb-4">Debit Card Informantion</h3>
                    <div className="mb-4">
                       <label htmlFor=""
                       className="font-semibold mb-2 block"
                       >
                        Card Number
                        </label> 
                       <input type="text"
                       placeholder="Enter Card Number" 
                       className="w-full rounded border p-2"
                       required
                       />
                    </div>
                    <div  className="mb-4">
                       <label htmlFor=""
                       className="font-semibold mb-2 block"
                       >
                        Card Holder Name
                       </label> 
                       <input type="text"
                        placeholder="Enter Card Holder Name" 
                        className="w-full rounded border p-2"
                        required
                       />
                    </div>
                    <div className="flex justify-between mb-4">
                        <div className="w-1/2 mr-2">
                            <label htmlFor=""
                            className="font-semibold mb-2 block text-gray-700"
                            >
                            Expire Date
                            </label> 
                            <input type="text" 
                            placeholder="MM/YY" 
                            className="w-full rounded border p-2"
                            required
                            />
                        </div>
                        <div className="w-1/2 ml-2">
                            <label htmlFor=""
                            className="font-semibold mb-2 block text-gray-700"
                            >
                            CW
                            </label> 
                            <input type="text"
                             placeholder=" CW"
                             className="border w-full rounded p-2" />
                        </div>
                    </div>
                </div>
              )}
            </div>
          </div>
        </div>

  {/* 2nd table design */}
        <div className="md:w-1/3 bg-white rounded-lg p-6 border shadow-md">
          <h3 className="text-lg font-semibold mb-5">Order Summary</h3>
          <div className="space-y-4">
            {
              cart.products.map((product) =>(
                <div key={product.id} className="flex justify-between">
                  <div className="flex items-center">
                    <img src={product.image} alt="" className="w-16 h-16 object-contain rounded" />
                    <div className="ml-1">
                      <h4 className="text-md font-semibold">{product.name}</h4>
                      <p className="text-gray-600">
                          & {product.price} x {product.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-800 flex items-center">
                    $ {product.price * product.quantity}
                  </div>
                </div>
                
              ))
            }
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between">
              <span>Total price:</span>
              <span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full text-white bg-red-600 hover:bg-red-800 mt-6 py-2"
          onClick= {orderHandle}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
