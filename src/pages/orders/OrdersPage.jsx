import { OrdersGrid } from "./OrdersGrid";
import { useEffect, useState} from "react";
import axios from "axios";

import { Header } from "../../components/Header";
import "./OrdersPage.css";

export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   axios.get("/api/orders?expand=products").then((response) => {
  //     setOrders(response.data);
  //   });
  // }, []);

  useEffect(()=>{
    const getOrdersData=async()=>{
      const response=await axios('/api/orders?expand=products')
      setOrders(response.data)
    }
    getOrdersData();
  },[])

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="favicons/orders.png" />

      <title>Orders</title>

      <Header cart={cart} />


        <OrdersGrid orders={orders} loadCart={loadCart}/>

     
    </>
  );
}
