import {Routes,Route} from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'


import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/orders/OrdersPage'
import { PageNotFound } from './pages/page_not_found/PageNotFound'
import { TrackingPage } from './pages/tracking/TrackingPage'


import './App.css'

function App() {
  const [cart,setCart]=useState([]);
  
  // useEffect(()=>{
  //   axios.get('/api/cart-items?expand=product')
  //   .then((response)=>{
  //     setCart(response.data)
  //   })
  // },[])

  useEffect(()=>{
    const getCartData = async()=>{
      const response=await axios.get('/api/cart-items?expand=product')
      setCart(response.data)
    }
    getCartData();
  },[])

  return (
    <>

      <Routes>
          <Route index element={<HomePage cart={cart}/>}/>
          <Route path="checkout" element={<CheckoutPage cart={cart}/>}/>
          <Route path="orders" element={<OrdersPage cart={cart}/>}/>
          <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart}/>}/>
          <Route path="*" element={<PageNotFound cart={cart}/>}/>
      </Routes>

      
    </>
  )
}

export default App
