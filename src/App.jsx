import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import CheckOut from "./pages/CheckOut"
import { useState } from "react"
import Order from "./pages/Order"
import FilterData from "./pages/FilterData"
import ProductDetail from "./pages/ProductDetail"


function App() {
const [order ,setOrder] = useState(null)
  return (
    <>
     <BrowserRouter>
      <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/checkout" element={<CheckOut setOrder={setOrder}></CheckOut>}></Route>
          <Route path="/order_confirm" element={<Order order ={order} ></Order>}></Route>
          <Route path="/filter-product" element={<FilterData></FilterData>}></Route>
          <Route path="/product/:id" element={<ProductDetail></ProductDetail>}></Route>
        </Routes>

        <Footer></Footer>
     </BrowserRouter>
    
    </>
  )
}

export default App
