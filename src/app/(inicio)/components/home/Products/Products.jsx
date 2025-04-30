"use client";
import Link from "next/link";
import { useFetch } from "@/hooks";
import styles from "./styles.module.css";
import {
  Container,
  Title,
  GridContainer,
  ProductCard,
  Loader,
} from "@/components";

export const Products = () => {
  const { error, data, isLoading } = useFetch({
    url: `${process.env.NEXT_PUBLIC_LOCAL_API}products/getAllProducts/index.php?marca_id=2`,
  });
  return (
    <Container backgroundPurple>
      <Title title="Conoce nuestra línea de productos" />
      {!isLoading ? (
        <GridContainer>
          {data.lenght ==0
            ? null
            : data.map((product) => (
                <ProductCard product={product} key={product.producto_id} />
              ))}
        </GridContainer>
      ) : (
        <Loader />
      )}
      <div className={styles.linkToStoreWrapper}>
        <Link href="/tienda">Ver todos</Link>
      </div>
    </Container>
  );
};
