"use client";
import { useRouter } from "next/navigation";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export const PaymentButtons = ({ paymentAmount }) => {
  const router = useRouter();
  const paypalOptions = {
    clientId:
      "AThgNMLSW6yJ-eriWWMMxF2LFMUcjtHfHSgyYLfXZ0hnh9lLlvXRcj1-Nr0L4PilRxBsc38wxM7uNrie",
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
              value: `${paymentAmount}.00`,
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
      console.log(details);
      if (details.status === "COMPLETED") {
        router.push('/pago/exitoso')
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <div>
        <PayPalButtons
          createOrder={onCreateOrder}
          style={{ layout: "vertical" }}
          onApprove={onApproveOrder}
        />
      </div>
    </PayPalScriptProvider>
  );
};
