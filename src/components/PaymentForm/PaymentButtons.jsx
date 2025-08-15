"use client";
import axios from "axios";
import { useState } from "react";
import styles from "./styles.module.css";
import { createOrder } from "@/services";
import { useRouter } from "next/navigation";
import { PaymentLoader } from "./PaymentLoader";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export const PaymentButtons = ({ paymentAmount, uuid, paymentDetails }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  /*const deliveryOrder = await createDeliveryOrder(uuid)*/
  const getClientSecret = async () => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_CLIENT_SECRET_LOCAL_API,
        {
          amount: paymentAmount,
        }
      );

      if (
        !response ||
        response.status !== 200 ||
        !response.data?.clientSecret
      ) {
        console.error("Respuesta inválida del backend:", response);
        return null;
      }

      return response.data.clientSecret;
    } catch (error) {
      return null;
    }
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();
    setIsLoading(true)
    if (!stripe || !elements) {
      console.warn("Stripe.js aún no está listo");
      setIsLoading(false)
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const clientSecret = await getClientSecret();

    if (!clientSecret) {
      setIsLoading(false)
      return;
    }

    try {
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (paymentResult.error) {
        setIsLoading(false)
        return;
      }

      if (paymentResult.paymentIntent?.status === "succeeded") {
        const order = await createOrder(paymentDetails)
        setIsLoading(false)
        router.push('/pago/exitoso')
      } else {
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
    }
  };
  return (
    <form className={`${styles.addressFormWrapper}`} onSubmit={onSubmit}>
      <CardElement />
      {!isLoading ? (
        <button className={styles.paymentFormButton}>Pagar</button>
      ) : (
        <PaymentLoader />
      )}
    </form>
  );
};
