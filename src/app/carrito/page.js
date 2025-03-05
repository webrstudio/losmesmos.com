import { Container, Title } from "@/components";
import { CartProducts } from "./components/cart";

export default function ShoppingCart(){
    return (
        <Container>
            <Title title='Carrito de compras' />
            <CartProducts />
        </Container>
    )
}
export const metadata = {
    title: "MESMOS SHOW - CARRITO",
    description: "MESMOS SHOW",
    icons: {
      icon: "/assets/images/logo.png",
    },
  };