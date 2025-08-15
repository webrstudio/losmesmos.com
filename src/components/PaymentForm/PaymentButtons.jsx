"use client";
import axios from "axios";
import styles from "./styles.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PaymentLoader } from "./PaymentLoader";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export const PaymentButtons = ({ paymentAmount, uuid, paymentDetails }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  /*const deliveryOrder = await createDeliveryOrder(uuid)
  const order = await createOrder(paymentDetails)*/
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
      console.error(
        "Error al obtener clientSecret:",
        error.response?.data?.error || error.message
      );
      return null;
    }
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    if (!stripe || !elements) {
      console.warn("Stripe.js aún no está listo");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const clientSecret = await getClientSecret();

    if (!clientSecret) {
      console.error("No se pudo obtener clientSecret, abortando pago");
      return;
    }

    try {
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (paymentResult.error) {
        console.error(
          "Error al confirmar el pago:",
          paymentResult.error.message
        );
        return;
      }

      if (paymentResult.paymentIntent?.status === "succeeded") {
        console.log("Pago exitoso!");
      } else {
        console.warn(
          "Pago no completado, estado:",
          paymentResult.paymentIntent?.status
        );
      }
    } catch (error) {
      console.error("Error inesperado en confirmCardPayment:", error.message);
    }
  };
  return (
    <>
      {!isLoading ? (
        <form className={`${styles.addressFormWrapper}`} onSubmit={onSubmit}>
          <CardElement />
          <button className={styles.paymentFormButton}>Pagar</button>
        </form>
      ) : (
        <PaymentLoader />
      )}
    </>
  );
};
