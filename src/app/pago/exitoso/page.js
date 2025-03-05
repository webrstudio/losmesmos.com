import { Container, Title } from "@/components";
import { PaymentDetails } from "../components/payment";

export default function PaymentSuccessFull() {
  return (
    <Container>
      <Title title="Pago exitoso" />
      <PaymentDetails />
    </Container>
  );
}

export const metadata = {
  title: "KROLLOSHOW - PAGO-EXITOSO",
  description: "KROLLOSHOW",
  icons: {
    icon: "/assets/images/krollo-logo.jpg",
  },
};
