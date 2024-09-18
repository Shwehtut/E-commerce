/* eslint-disable react/prop-types */
// import React from 'react'

import { useState } from "react"

const ChangeAddress = ({setAddress , setIsModelOpen}) => {

    const [newAddress , setNewAddress] = useState("");
    const onClose = () =>{
       setAddress(newAddress)
       setIsModelOpen(false)
    }

  return (
    <div>
        <h3 className="font-semibold text-xl mb-4">SHIPPING ADDRESS CHANGE</h3>
        <input type="text" 
        placeholder="Enter your design"
        className="border w-full p-2 mb-4"
        onChange={(e) => setNewAddress(e.target.value)}
        />
        <div className="flex justify-end">
            <button className="bg-gray-500 text-wite py-2 px-4 rounded mr-2"
                onClick={()=> setIsModelOpen(false)}
            >Cancel</button>
            <button className="bg-blue-500 text-wite py-2 px-4 rounded "
                onClick={onClose}
            >Save Address</button>
        </div>
    </div>
  )
}

export default ChangeAddress