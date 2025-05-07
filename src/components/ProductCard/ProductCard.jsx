"use client";
import Link from "next/link";
import Swal from "sweetalert2";
import { useContext } from "react";
import styles from "./styles.module.css";
import { ShoppingCartContext } from "@/contexts";
import { LiaShoppingCartSolid } from "react-icons/lia";

export const ProductCard = ({ product }) => {
  const { addProduct } = useContext(ShoppingCartContext);
  const showModal = () => {
    Swal.fire({
      title: "Añadido al carrito",
      icon: "success",
      timer: 1000,
      position: "top-center",
      showConfirmButton: false,
    });
    return addProduct(product);
  };
  return (
    <>
      {!product ? null : (
        <div className={`${styles.productCardWrapper} boxShadow`}>
          <figure className={styles.productImage}>
            <img src={product.producto_imagen} />
          </figure>
          <span className={styles.productTitle}>{product.producto_nombre}</span>
          {product.producto_inventario !== 0 ? (
            <>
              <span>
                Únicamente <strong>{product.producto_inventario}</strong>{" "}
                pieza(s) disponibles
              </span>
              <span>
                Precio: <strong>${product.producto_precio} mxn</strong>
              </span>
              <Link
                href={`/pago/${product.producto_id}`}
                className={styles.productPaymentButton}
              >
                Comprar ahora
              </Link>
            </>
          ) : (
            <strong>Sin piezas disponibles</strong>
          )}
        </div>
      )}
    </>
  );
};
