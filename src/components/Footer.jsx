// import React from 'react'
import {Link} from 'react-router-dom'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-12 px-4 md:px-16 lg:px-24 mt-12'>
      <div className=' container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
              {/* Left sides*/}
            <div>
              <h3 className='text-xl font-bold'>e-Shop</h3>
              <p className='mt-4'>
                Your one-stop shop for all your needs. Shop with us and experience
                the best online shopping.
              </p>
            </div> 
        
      
            <div className='flex flex-col md:items-center'>
              <h4 className='text-lg font-semibold'>Quick Links</h4>
              <ul className='mt-4 space-y-2'>
                <li  >
                  <Link to={'/'} className='hover:underline cursor-pointer'>Home</Link>
                </li>
                <li  >
                  <Link to={'/shop'} className='hover:underline cursor-pointer'>Shop</Link>
                </li>
                <li>
                  <Link to={'/'} className='hover:underline cursor-pointer'>About Us</Link>
                </li>
                <li>
                  <Link to={'/'} className='hover:underline cursor-pointer'>Contact Us</Link>
                </li>
          
              </ul>

            
            </div>

      
         <div>
          <h4 className='text-lg font-semibold'>Follow Us</h4>
          <div className='flex space-x-4 mt-4'>
            <a href="" className='hover:text-gray-400'>
              
              <FaFacebook />
            </a>
            <a href="" className='hover:text-gray-400'>
             
              <FaLinkedin />
            </a>
            <a href="" className='hover:text-gray-400'>
             
              <FaTwitter />
            </a>
            <a href="" className='hover:text-gray-400'>
              
              <FaGithub />
            </a>
            <a href="" className='hover:text-gray-400'>
              
              <FaInstagram />
            </a>
          </div>
          <form className='flex justify-center items-center mt-8'>
            <input type="email" placeholder="Your email" className='w-full bg-gray-800 border border-gray-600 p-2 rounded-l-lg'/>
            <button className='bg-red-700 hover:bg-red-800 text-white rounded-r-lg px-4 py-2 border border-gray-600'>Subscribe</button>
          </form>
          </div>

         
      </div>
      <div className='border-t border-gray-700 mt-8 pt-4'>
            <div  className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
              <p>&copy; 2024 e-Shop All rights reserved.</p>
              <div className='flex space-x-4 mt-4 md:mt-0'>
                <a href="" className='hover:underline cursor-pointer'>Privacy Policy</a>
                <a href="" className='hover:underline cursor-pointer'>Terms of Service</a>
              </div>
            </div>
          </div>
    </footer>
  )
}

export default Footer