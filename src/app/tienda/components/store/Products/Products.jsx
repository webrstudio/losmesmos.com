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
    url: "https://test.webrstudio.com/backend/controllers/products/getAllProducts/index.php",
  });
  return (
    <Container>
      <Title title="Productos oficiales de MESMOS SHOW" />
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
