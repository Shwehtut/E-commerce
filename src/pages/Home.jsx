/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'
import { Categories, mockdata } from "../assets/mockData";
import HeroImage from "../assets/Images/HomeCover.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import {useDispatch , useSelector} from 'react-redux'
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";
import { useNavigate } from "react-router-dom";




const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product)
  const navigate = useNavigate()
  useEffect( () => { 
      dispatch(setProducts(mockdata))
  },[])

const ShopPage = () =>{
  navigate('/shop')
}
  return (
    
    <div>  
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24 mx-auto ">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">

        {/*Left Home table */}
        <div className="w-full md:w-3/12 ">
         <div className="bg-red-600 text-white font-bold px-2 py-2.5 text-xs">SHOP BY CATEGORIES</div>
          <ul className="space-y-4 bg-gray-100 p-2 border">
            {Categories.map((category, index) => (
              <li key={index} className="flex  items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Home Image*/}
        <div className="w-full md:w-9/12 h-96 mt-8 md:mt-0 relative">
          <img src={HeroImage} alt="" className="w-full h-full"/>
          <div className="top-16 left-8 absolute">
            <p className="text-gray-600 mb-4">ShweHtut | s-Shop</p>
            <h2 className="font-bold text-3xl">WELCOME TO E-SHOP</h2>
            <p className="font-bold text-xl mt-2.5 text-gray-800">MILLION + PRODUCTS</p>
            <button className="bg-red-600 text-white px-8 py-1.5 mt-4 hover:bg-red-700
            transform transition-transform hover:scale-105 duration-300"
            onClick={ShopPage}
            >SHOP NOW</button>
          </div>
        </div>
        
      </div>
      <InfoSection></InfoSection>
      <CategorySection></CategorySection>

      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold text-center mb-6">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {
            products.products.slice(0, 5).map(((product,index)=>(
                <div key={index} >
                     <ProductCard product={product}></ProductCard>
                </div>
             
               
             )))
          }
        </div>
      </div>
        
    </div>
    <Shop></Shop>
    
   </div>
     
  );
};

export default Home;
