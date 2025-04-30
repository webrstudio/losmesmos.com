"use client";
import { useFetch } from "@/hooks";
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
    <Container>
      <Title title="Productos oficiales de Los Mesmos Show" />
      {!isLoading ? (
        <GridContainer>
          {data.lenght == 0
            ? null
            : data.map((product) => (
                <ProductCard product={product} key={product.producto_id} />
              ))}
        </GridContainer>
      ) : (
        <Loader />
      )}
    </Container>
  );
};
