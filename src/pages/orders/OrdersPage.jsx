import { OrdersGrid } from "./OrdersGrid";
import { useEffect, useState, Fragment } from "react";
import axios from "axios";

import { Header } from "../../components/Header";
import "./OrdersPage.css";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders?expand=products").then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="favicons/orders.png" />

      <title>Orders</title>

      <Header cart={cart} />


        <OrdersGrid orders={orders}/>

     
    </>
  );
}
