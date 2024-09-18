/* eslint-disable react/prop-types */
// import React from 'react'

import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const handleAddToCart = (e, product) =>{
      e.stopPropagation()
      e.preventDefault()
      dispatch(addToCart(product))
      alert(" Product added Successfully!")
  }
  
  return (
   <Link to ={`/product/${product.id}`}>
       <div
      className="bg-white p-4 reltive border shadow rounded transform 
    transitation-transform duration-300 hover:scale-105"
   
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />

      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
      <div className="flex mt-2 text-center ">
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        
      </div>
    
      <div
        className="absolute bottom-3 right-2 flex items-center justify-center bg-red-600 
            w-8 h-8  group rounded-full text-sm text-white hover:w-24
              hover:bg-red-700  transition-all"
            onClick={(e)=> handleAddToCart (e, product)}
       >
        <span className=" group-hover:hidden">+</span>
        <span className="hidden group-hover:block">Add to Cart</span>
      </div>
    
    </div>
   </Link>
  );
};

export default ProductCard;
