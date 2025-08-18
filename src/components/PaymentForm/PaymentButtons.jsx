"use client";
import axios from "axios";
import { useState } from "react";
import styles from './styles.module.css'
import { PaymentLoader } from "./PaymentLoader";

export const PaymentButtons = ({ paymentAmount, paymentDetails }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleCheckout = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL_API}/orders/checkoutStripeSession/index.php`, {
        paymentAmount,
        usuario_carrito: paymentDetails.paymentCart,
        usuario_nombre: paymentDetails.usuario_nombre,
        usuario_email: paymentDetails.usuario_email
      });
      console.log(response)
      if (response.data.url) {
        setIsLoading(false)
        window.location.href = response.data.url;
      }
    } catch (error) {
      setIsLoading(false)
      console.error(error);
    }
  };

  return (
    <>
      {!isLoading ? (
        <button className={styles.paymentFormButton} onClick={handleCheckout}>
          Pagar
        </button>
      ) : (
        <PaymentLoader />
      )}
    </>
  )
};
