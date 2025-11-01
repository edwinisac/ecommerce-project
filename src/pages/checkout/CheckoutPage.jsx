import { OrderSummary } from "./OrderSummary";
import { CheckoutHeader } from "./CheckoutHeader";

import axios from "axios";
import { useState, useEffect } from "react";
import "./CheckoutPage.css";
import { PaymentSummary } from "./PaymentSummary";

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("/api/delivery-options?expand=estimatedDeliveryTime")
  //     .then((response) => {
  //       setDeliveryOptions(response.data);
  //     });

  //   axios.get("/api/payment-summary").then((response) => {
  //     setPaymentSummary(response.data);
  //   });
  // }, []);



  useEffect(()=>{
    const getCheckoutData=async()=>{
      try{
        let response=await axios .get("/api/delivery-options?expand=estimatedDeliveryTime")
        setDeliveryOptions(response.data);
        response=await axios .get("/api/payment-summary")
        setPaymentSummary(response.data);
      }
      catch(error){
        console.error("Error fetching checkout data : ",error)
      }
    }
  getCheckoutData();

  },[])

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="favicons/cart.png" />

      <title>Checkout</title>
      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cart={cart}/>
          <PaymentSummary paymentSummary={paymentSummary}/>

        </div>
      </div>
    </>
  );
}
