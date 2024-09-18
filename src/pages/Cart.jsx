// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import EmptyCart from '../assets/Images/emptycart.jpg'
import { FaTrashAlt } from "react-icons/fa"
import { useState } from "react"
import Modal from "../components/Modal"
import ChangeAddress from "../components/ChangeAddress"
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/cartSlice"
import { useNavigate } from "react-router-dom"


const Cart = () => {
  const cart = useSelector(state => state.cart)
  const [address ,setAddress] = useState('kyawswar street, 105')
  const [isModelOpen , setIsModelOpen] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 min-h-96 ">
       {
          cart.products.length > 0 ? 
          (<div>
              <h3 className="font-semibold text-3xl mb-4">SHOPPING CART</h3>
              <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">

                 {/*1st table design */}
                <div className="md:w-2/3">
                    {/* Upper */}
                    <div className="flex justify-between items-center text-xs border-b mb-4 font-bold ">
                      <p>PRODUCT</p>
                      <div className="flex space-x-8">
                          <p>PRICE</p>
                          <p>QUANTITY</p>
                          <p>SUBTOTAL</p>
                          <p>REMOVE</p>
                      </div>
                    </div>

                      {/* Lower */}
                      
                        {
                          cart.products.map((product,index)=>(
                            <div key={index} className="flex justify-between items-center p-3 border-b">
                              <div className="md:flex items-center space-x-4">
                                <img src={product.image} alt={product.name} className="w-16 h-16 rounded   object-contain "/>
                                <div className="flex-1 ml-4">
                                  <p className="text-lg font-semibold">{product.name}</p>
                                </div>
                              </div>
                              <div className="flex space-x-12 items-center">
                                  <p>${product.price}</p>
                                      <div className="flex justify-between items-center border">
                                        <button className="text-xl border-r font-bold px-1.5"
                                          onClick={()=> dispatch(decreaseQuantity(product.id))}
                                        >-</button>
                                        <p className="text-xl px-2">{product.quantity}</p>
                                     <button className="text-xl border-l font-bold px-1"
                                       onClick={()=> dispatch(increaseQuantity(product.id))}
                                     >+</button>
                                      </div>
                                     <p>${(product.quantity * product.price).toFixed(2)}</p>
                                     <button className="text-red-500 hover:text-red-700"
                                     onClick={() => dispatch(removeFromCart(product.id))}
                                     >
                                     <FaTrashAlt></FaTrashAlt>
                                     </button>
                              </div>
                            </div>
                          ))
                        }
                      
                </div>

                 {/* 2nd table design */}
                <div className="md:w-1/3 bg-white rounded-lg p-6 border shadow-md">
                  <h3 className="text-sm font-bold mb-5">CART TOTALS</h3>
                  <div className="flex justify-between items-center border-b mb-5 pb-1">
                    <span className="text-sm ">TOTAL ITEMS:</span>
                    <span>{cart.totalQuantity}</span>
                  </div>
                  <div className="border-b mb-4 pb-2">
                    <h3>Shipping:</h3>
                    <p className="ml-2">shipping to: <span className="font-bold text-sm">{address}</span></p>
                    
                    <button className="text-blue-500 ml-2 mt-1 hover:underline"
                    onClick={()=> setIsModelOpen(true)}>
                      Change Address
                    </button>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span>Total Price:</span>
                    <span>${(cart.totalPrice).toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-red-600 hover:bg-red-800 py-2 text-white"
                    onClick={()=> navigate ('/checkout')}
                  >Proceed to Checkout</button>
                
                </div>
              </div>
              <Modal   
              isModelOpen = {isModelOpen}
              setIsModelOpen = {setIsModelOpen}>

                <ChangeAddress setAddress= {setAddress} setIsModelOpen={setIsModelOpen}> </ChangeAddress>

              </Modal>

          </div>

                      ):(<div className="justify-center flex">
          <img src={EmptyCart} alt="" className="h-96"/>
          </div>)
       }
    </div>
  )
}

export default Cart