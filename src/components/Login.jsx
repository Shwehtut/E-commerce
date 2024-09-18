/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Login = ({openSignup}) => {
  return (
    <div>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
        <form>
            <div className='mb-4'>
                <label htmlFor="" className='block text-gray-700'>Email</label>
                <input type="email" placeholder='Enter Your Email' 
                className='w-full px-3 py-2 border '
                />
            </div>
            <div className='mb-4'>
                <label htmlFor="" className='block text-gray-700'>Password</label>
                <input type="text" placeholder='Password'
                 className='w-full px-3 py-2 border '
                />
            </div>
            <div className='mb-4 flex items-center justify-between'>
                <label className='inline-flex items-center'>
                    <input type="checkbox" className='form-checkbox' />
                    <span className='ml-1 text-gray-700'>Remenber me</span>
                </label>
                <a href="#" className='text-red-800 hover:underline'>Forget password?</a>
            </div>
            <div className='mb-4'>
                <button type='submit' className='w-full py-2 bg-red-600 text-white'>Login</button>
            </div>
        </form>
        <div className='items-center'>
            <span className='text-gray-700'> Don't have an account?</span>
            <button className='text-red-800 hover:underline' 
            onClick={openSignup}
            >Sign Up</button>
        </div>
    </div>
  )
}

export default Login