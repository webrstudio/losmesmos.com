"use client";
import Swal from "sweetalert2";
import styles from "./styles.module.css";
import { UserContext } from "@/contexts";
import { getServiceInfo } from "@/services";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentLoader } from "./PaymentLoader";
import { PaymentButtons } from "./PaymentButtons";
import { Elements } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";

export const PaymentForm = ({ paymentAmount, paymentCart }) => {
  const { user, addUser } = useContext(UserContext);
  const [formData, setFormData] = useState(user || {});
  const [isLoading, setIsLoading] = useState(false);
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  useEffect(() => {
    if (user) setFormData(user);
  }, [user]);

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();
    try {
      setIsLoading(true);
      const data = await getServiceInfo(formData);

      if (data && data.data) {
        const updatedUser = {
          ...formData,
          guide_amount: data.data.rates?.[1]?.detail_charges?.[2]?.amount || 0,
          uuid: data.data.transaction?.uuid || "",
        };

        addUser(updatedUser);
        Swal.fire({
          title: "Dirección de envío y datos personales guardados",
          icon: "success",
          showCloseButton: true,
          position: "top-end",
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const newTotal = user?.guide_amount
    ? Number(user.guide_amount) + Number(paymentAmount)
    : null;

  return (
    <>
      {isLoading ? (
        <PaymentLoader />
      ) : (
        <div className={styles.paymentFormWrapper}>
          {!user ? null : (
            <span>
              Total con envío <strong>${newTotal}</strong>
            </span>
          )}

          <span>
            {user ? (
              <>
                Dirección de envío: {""}
                <strong>
                  C. {user.usuario_calle + user.usuario_numero_exterior},{""}{" "}
                  C.P. {user.usuario_cp},{""} Col. {user.usuario_colonia},{""}{" "}
                  {user.usuario_municipio},{""} {user.usuario_estado}
                </strong>
              </>
            ) : (
              "Añade una dirección de envío:"
            )}
          </span>
          <form className={styles.addressFormWrapper} onSubmit={onSubmit}>
            {[
              { label: "Nombre", name: "usuario_nombre", type: "text" },
              { label: "Calle", name: "usuario_calle", type: "text" },
              {
                label: "Número exterior",
                name: "usuario_numero_exterior",
                type: "text",
              },
              { label: "Código postal", name: "usuario_cp", type: "text" },
              { label: "Colonia", name: "usuario_colonia", type: "text" },
              { label: "Municipio", name: "usuario_municipio", type: "text" },
              { label: "Estado", name: "usuario_estado", type: "text" },
              {
                label: "Correo electrónico",
                name: "usuario_email",
                type: "email",
              },
              { label: "Teléfono", name: "usuario_telefono", type: "number" },
              { label: "Referencia", name: "usuario_referencia", type: "text" },
            ].map((field) => (
              <div key={field.name}>
                <label>{field.label}:</label>
                <input
                  autoComplete="off"
                  name={field.name}
                  type={field.type}
                  value={formData?.[field.name] || ""}
                  onChange={onChange}
                  required
                />
              </div>
            ))}

            <button type="submit" className={styles.paymentFormButton}>Guardar dirección de envío</button>
          </form>
          {!user ? null : (
            <strong>
              Estamos en nuestras primeras etapas de operación, por lo que los
              tiempos de envío podrían extenderse ligeramente. Agradecemos su
              paciencia y confianza.
            </strong>
          )}
          {user && (
            <Elements stripe={stripePromise}>
              <PaymentButtons
                paymentAmount={/*!newTotal ? "" : Math.round((newTotal)*100)*/ 1000}
                uuid={user.uuid}
                paymentDetails={{ ...user, paymentCart }}
              />
            </Elements>
          )}
        </div>
      )}
    </>
  );
};
