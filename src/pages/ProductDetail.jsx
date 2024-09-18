/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { FaCarSide, FaQuestion } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const {id} = useParams();
    const products = useSelector(state => state.product.products)
    const [ product , setproduct] = useState()
    
    useEffect( ()=>{

        const newProduct = products.find(
            (product) => product.id === parseInt(id));
            setproduct (newProduct);

    },[id , products])

    if(!product) return <div className='text-lg mt-4'>Loading.........</div>


  return (
    <div className='container mx-auto py-10 px-4 md:px-16 lg:x-24'>
        <div className='flex flex-col md:flex-row gap-x-16'>
            {/* Image Product */}
            <div className='md:w-1/2 h-96 flex justify-center md:px-8 py-4 shadow-md'>
                <img src={product.image} alt={product.name} className='w-full' />
            </div>
             {/* Product Informations*/}
             <div className='md:w-1/2 p-4 shadow-md flex flex-col items-center md:p-16 gap-y-2'>
                <h2 className='text-3xl font-semibold mb-2'>{product.name}</h2>
                <p className='text-xl font-semibold mb-4 text-gray-800'>$ {product.price}</p>

                <div className='flex items-center mb-2 gap-x-2'>
                    <input type="number" 
                            id ='quantity'
                            min = "1"
                            className='border w-16 p-1 rounded'
                    />
                    <button className='bg-red-600 hover:bg-red-800 text-white py-1.5 px-4 '>Add to Cart</button>

                </div>
                <div className='flex flex-col gap-y-4 mt-4'>
                    <p  className='flex items-center'>
                        <FaCarSide  className='mr-1'></FaCarSide>
                        Delivery & Return
                    </p>
                    <p  className='flex items-center'>
                        <FaQuestion className='mr-1'></FaQuestion>
                        Ask a Question
                    </p>
                </div>
                
             </div>
            
        </div>
        <div className='mt-8'>
                    <h2 className='text-xl font-bold mb-2'>Production Descriptiion</h2>
                    <p >Production description will go here.</p>
        </div>
    </div>
  )
}

export default ProductDetail