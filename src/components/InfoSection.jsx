// import React from 'react'
import {FaHeadset, FaLock, FaMoneyBillWave, FaTag} from 'react-icons/fa'
import { FaShippingFast } from "react-icons/fa";

const InfoSection = () => {
    const infoItems = [
        {
            icon :  <FaShippingFast className ='text-3xl text-red-600' />,
            title :"Free Shipping",
            description : 'Get yours orders deliveres with no extra cost'

        },
        {
            icon : <FaHeadset className ='text-3xl text-red-600'></FaHeadset>,
            title :"Support 24/7",
            description : 'We are here to assist you anytime.'

        },
        {
            icon : <FaMoneyBillWave className ='text-3xl text-red-600'></FaMoneyBillWave>,
            title :"100% Money Back",
            description : 'Full refund if you are not satisfied.'

        },
        {
            icon : <FaLock className ='text-3xl text-red-600'></FaLock>,
            title :"Payment Secure",
            description : 'Your payment information is safe with us.'

        },
        {
            icon : <FaTag className ='text-3xl text-red-600'></FaTag>,
            title :"Discount",
            description : 'Enjoy the best prices on our products'

        },
    ]
  return (
    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {
                 infoItems.map((item,index)=>(
                    <div key={index} className='flex flex-col p-4 border rounded-lg shadow-md
                     text-center items-center transform transition-transform hover:scale-105
                      duration-300'
                    >
                        
                        {item.icon}
                        <h2 className='text-semibold text-xl mt-4'>{item.title}</h2>
                        <p className='text-gray-600'>{item.description}</p>

                    </div>
                ))
            }
        </div>
    </div>
  );
};

export default InfoSection;