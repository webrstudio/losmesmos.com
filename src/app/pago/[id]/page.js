import { Container, Title } from "@/components"
import { PaymentProduct } from "../components/payment"

export default function Payment({ params }) {
  return (
    <Container>
      <Title title='Pagar producto'/>
      <PaymentProduct id={params.id}/>
    </Container>
  )
}

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
  ];
}

export const metadata = {
    title: "MESMOS SHOW - PAGO",
    description: "MESMOS SHOW - PAGAR PRODUCTO",
    icons: {
      icon: "/assets/images/logo.png",
    },
  };
