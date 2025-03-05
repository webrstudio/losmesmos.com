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
  ];
}

export const metadata = {
    title: "KROLLOSHOW - PAGO",
    description: "KROLLOSHOW",
    icons: {
      icon: "/assets/images/krollo-logo.jpg",
    },
  };
