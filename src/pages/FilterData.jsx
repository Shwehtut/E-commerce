/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import NotFoundPage from '../assets/Images/Productnotfound.jpg'


const FilterData = () => {
    const filterProduct = useSelector(state => state.product.filteredData)
  return (
    <div>
        <div  className="px-4 md:px-16 lg:px-24 mx-auto py-12">
            <h2 className="text-2xl font-bold text-center mb-6">Shop</h2>
           {
            filterProduct.length > 0 ? 
            <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
                    {
                    filterProduct.map ( product=>(
                        <div key={product.id} >
                            <ProductCard product={product}></ProductCard>
                            
                        </div>
                    ))
                    }
                 </div>
            </>
             :
            <div className='flex justify-center'>
                <img src={NotFoundPage} alt="" />
            </div>
           }
         </div>
     
   </div>
  )
}

export default FilterData