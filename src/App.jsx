import {Routes,Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { PageNotFound } from './pages/PageNotFound'


import './App.css'
import { TrackingPage } from './pages/TrackingPage'

function App() {

  return (
    <>

      <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="checkout" element={<CheckoutPage/>}/>
          <Route path="orders" element={<OrdersPage/>}/>
          <Route path="tracking" element={<TrackingPage/>}/>
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>

      
    </>
  )
}

export default App
