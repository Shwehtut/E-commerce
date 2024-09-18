/* eslint-disable react/prop-types */
// import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div>
        <h2 className='text-2xl font-bold mb-4'>Sign up</h2>
        <form>
            <div className='mb-4'>
                <label htmlFor="" className='block text-gray-700'>Name</label>
                <input type="text" placeholder='Enter your name' 
                className='w-full px-3 py-2 border '
                />
            </div>
            <div className='mb-4'>
                <label htmlFor="" className='block text-gray-700'>Password</label>
                <input type="text" placeholder='Password'
                 className='w-full px-3 py-2 border '
                />
            </div>
            <div className='mb-4'>
                <button type='submit' className='w-full py-2 bg-red-600 text-white'>Sign up</button>
            </div>
        </form>
        <div className='items-center'>
            <span className='text-gray-700'> Already have an account?</span>
            <button className='text-red-800 hover:underline' onClick={openLogin}>Login</button>
        </div>
    </div>
  )
}

export default Register