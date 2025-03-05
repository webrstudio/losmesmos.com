import Link from "next/link";
import styles from "./styles.module.css";
import { CiCircleCheck } from "react-icons/ci";

export const PaymentDetails = () => {
  return (
    <div className={`${styles.paymentDetailsWrapper} flexContainer`}>
      <CiCircleCheck />
      <p>
        Se ha envíado la confirmación de su pedido por correo electrónico, favor
        de estar atento a la recepción de su guía de rastreo.
      </p>
      <Link href='/tienda'>Volver a la tienda</Link>
    </div>
  );
};
