"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PaymentLoader } from "./PaymentLoader";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export const PaymentButtons = ({ paymentAmount }) => {
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
              value: `5.00`,
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
      console.log(details.purchase_units);
      setIsLoading(true)
      if (details.status === "COMPLETED") {
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
