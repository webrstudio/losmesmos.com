import { Container, Title } from "@/components";
import { DeliveryPolicity } from "./components/deliverypolicity";

export default function () {
  return (
    <Container>
      <Title title="Políticas de Envío – Los Mesmos Shop" />
      <DeliveryPolicity />
    </Container>
  );
}

export const metadata = {
  title: "MESMOS SHOW - POLÍTICAS DE ENVÍO",
  description: "MESMOS SHOW",
  icons: {
    icon: "/assets/images/logo.png",
  },
};
