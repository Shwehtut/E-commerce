// import React from 'react'
import MenCategory from '../assets/Images/Men.jpg'
import WomenCategory from '../assets/Images/women.jpg'
import KidsCategory from '../assets/Images/kids.jpg'

const CategorySection = () => {
    const categoryItems = [
        {
            title : 'Men',
            imageUrl : MenCategory,
        },
        {
            title : 'Women',
            imageUrl : WomenCategory,
        },
        {
            title : 'Kids',
            imageUrl : KidsCategory,
        },
    ]
  return (
   
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 '>
            {
                categoryItems.map((category,index)=> (
                    <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105'>
                        <img src={category.imageUrl} alt="" className='w-full h-full object-cover rounded-lg shadow-md'/>
                        <div className='absolute top-20 left-12'>
                            <p className='font-bold text-xl'>{category.title}</p>
                            <p className='text-gray-600'>View All</p>
                        </div>
                        
                    </div>
                ))
            }
        </div>
  
  )
}

export default CategorySection