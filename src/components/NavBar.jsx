// import React from 'react'
import {Link, useNavigate  } from "react-router-dom"
import {FaSearch, FaShoppingCart, FaUser} from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import Modal from "./Modal"
import Login from "./Login"
import Register from "./Register"
import { setSearchTerm } from "../redux/productSlice"

const NavBar = () => {
    const [isModelOpen , setIsModelOpen ] = useState(false)
    const [isLogin , setIsLogin] = useState(true)
    const [search , setSearch] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const  Handlesearch = (e) =>{
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate('/filter-product')

    }

    const openLogin = () => {
        setIsModelOpen(true)
        setIsLogin(true)
    }
    const openSignup =()=>{
        setIsModelOpen(true)
        setIsLogin(false)
    }

    const products = useSelector(state=> state.cart.products)
  return (
    <nav className="bg-white shadow-md">
        <div className="conatiner mx-auto px-4 md:px-16 lg:px-24 py-6 flex justify-between items-center">
            <div className="text-lg font-bold">
                <Link to ="/"> e-SHOP</Link>
            </div>
            <div className="relative flex-1 mx-4">
                <form onSubmit={Handlesearch}>
                    <input type="text" placeholder="Enter Search Products...." 
                    className="w-full px-4 py-2 border"
                    onChange={(e) => setSearch(e.target.value)}
                    />
                    <FaSearch className="absolute top-3 right-3 text-red-500"
                   
                    >

                    </FaSearch>
                </form>
            </div>
            <div className="flex items-center space-x-4">
                <Link to={'/cart'} className="relative" >
                    <FaShoppingCart className="text-lg "></FaShoppingCart>
                   {
                    products.length > 0 && (
                        <span className="absolute top-0 w-3 left-3 rounded-full bg-red-600 flex items-center text-xs justify-center text-white" >
                            {products.length}</span>
                        
                    )
                   }
                </Link>
                <button className="hidden md:block"
                onClick={()=> setIsModelOpen(true)}
                >
                    Login | Register
                </button>
                <button className="block md:hidden">
                    <FaUser></FaUser>
                </button>
            </div>
        </div>
        <div className="flex justify-center items-center space-x-10 py-4 font-bold">
            <Link to={'/'} className="hover:underline">
                Home
            </Link>
            <Link to={'/shop'} className="hover:underline">
                Shop
            </Link>
            <Link to={'/'} className="hover:underline">
                Contact
            </Link>
            <Link to={'/'} className="hover:underline">
                About
            </Link>
        </div>
        <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            {isLogin? <Login openSignup={openSignup}></Login> : <Register openLogin ={openLogin}></Register>}
        </Modal>
    </nav>
   
  )
}

export default NavBar