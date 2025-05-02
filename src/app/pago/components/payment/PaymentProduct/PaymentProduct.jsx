"use client";
import { useFetch } from "@/hooks";
import styles from "./styles.module.css";
import { PaymentForm, Loader } from "@/components";

export const PaymentProduct = ({ id }) => {
  const { error, data, isLoading } = useFetch({
    url: `${process.env.NEXT_PUBLIC_LOCAL_API}products/getProductById/index.php?id=${id}`,
  });
  return (
    <>
      {!isLoading ? (
        <div className={`${styles.paymentDetailsWrapper} flexContainer boxShadow`}>
          <figure className={styles.productImage}>
            <img src={data.producto_imagen} />
          </figure>
          <div className={styles.productDetailsWrapper}>
            <h3 className={styles.productName}>{data.producto_nombre}</h3>
            <span>Únicamente <strong>{data.producto_inventario}</strong> piezas disponibles</span>
            <PaymentForm
              paymentAmount={data.producto_precio}
              paymentCart={[data]}  
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
