"use client";
import styles from "./styles.module.css";
import { PaymentForm } from "@/components";
import { ShoppingCartContext } from "@/contexts";
import { useContext, useState, useEffect } from "react";

export const CartProducts = () => {
  const [total, setTotal] = useState(0);
  const { products, addProduct, deleteProduct } = useContext(ShoppingCartContext);
  useEffect(() => {
    if (products.length > 0) {
      const newTotal = products.reduce(
        (sum, product) => sum + parseFloat(product.producto_precio),
        0
      );
      setTotal(newTotal);
    } else {
      setTotal(0);
    }
  }, [products]);
  return (
    <div className={`flexContainer ${styles.cartProductsWrapper}`}>
      <p>Productos: {products.length}</p>
      {products && products.length === 0 ? (
        <p>No hay productos para mostrar</p>
      ) : (
        <ul className={styles.productsList}>
          {products.map((product, index) => (
            <li key={index}>
              <figure className={styles.productImage}>
                <img src={product.producto_imagen} />
              </figure>
              <span>{product.producto_nombre}</span>
              <span>Precio: ${product.producto_precio}.00</span>
              <div className={styles.productsListButtons}>
                <button
                  className={styles.productListAddButton}
                  onClick={() => addProduct(product)}
                >
                  +
                </button>
                <button
                  className={styles.productListDeleteButton}
                  onClick={()=>deleteProduct(index)}
                >
                    -
                </button>
              </div>
            </li>
          ))}
          <div className={styles.paymentButtons}>
            <span>Total: ${total}.00</span>
            <PaymentForm paymentAmount={total} />
          </div>
        </ul>
      )}
    </div>
  );
};
