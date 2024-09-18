/* eslint-disable react/prop-types */
// import React from 'react'

// eslint-disable-next-line no-unused-vars
import ChangeAddress from "./ChangeAddress"

const Modal = ({isModelOpen ,setIsModelOpen, children}) => {
    if (!isModelOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
            <button className="absolute right-4 top-4 text-3xl text-gray-300" onClick={() => setIsModelOpen (false)}>
                &times;
            </button>
            <div>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modal