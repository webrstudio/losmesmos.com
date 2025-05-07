"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PaymentLoader } from "./PaymentLoader";
import { createDeliveryOrder, createOrder } from "@/services";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export const PaymentButtons = ({ paymentAmount, uuid, paymentDetails }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const paypalOptions = {
    clientId: `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`,
    currency: "MXN",
    intent: "capture",
  };
  const onCreateOrder = async (data, actions) => {
    try {
      return await actions.order.create({
        purchase_units: [
          {
            amount: {
              currency_code: "MXN",
              value: `${paymentAmount}`,
            },
          },
        ],
      });
    } catch (error) {
      alert(error);
    }
  };

  const onApproveOrder = async (data, actions) => {
    try {
      const details = await actions.order.capture();
      setIsLoading(true)
      if (details.status === "COMPLETED") {
        const deliveryOrder = await createDeliveryOrder(uuid)
        const order = await createOrder(paymentDetails)
        console.log(order)
        router.push("/pago/exitoso");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <div>
        {!isLoading ? (
          <PayPalButtons
            createOrder={onCreateOrder}
            style={{ layout: "vertical" }}
            onApprove={onApproveOrder}
          />
        ) : (
          <PaymentLoader />
        )}
      </div>
    </PayPalScriptProvider>
  );
};
