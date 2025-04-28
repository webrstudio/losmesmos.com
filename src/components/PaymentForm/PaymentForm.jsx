"use client";
import Swal from "sweetalert2";
import styles from "./styles.module.css";
import { UserContext } from "@/contexts";
import { getServiceInfo } from "@/services";
import { useContext, useState } from "react";
import { PaymentLoader } from "./PaymentLoader";
import { PaymentButtons } from "./PaymentButtons";

export const PaymentForm = ({ paymentAmount }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, addUser } = useContext(UserContext);
  const [formData, setFormData] = useState(user);
  const onChange = (evt) => {
    setFormData({
      ...user,
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };
  const onSubmit = async (evt) => {
    try {
      setIsLoading(true)
      evt.preventDefault();
      const data = await getServiceInfo(formData);
      console.log(data)
      if (data) {
        setIsLoading(false)
        Swal.fire({
          title: "Dirección de envío añadida",
          icon: "success",
          timer: 1000,
          position: "top-end",
          showConfirmButton: false,
        });
        addUser({
          ...formData,
          guide_amount: data.data.rates[1].detail_charges[2].amount,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {!isLoading ? (
        <div className={styles.paymentFormWrapper}>
          <span>
            Total con envío:{" "}
            {!user
              ? "Por favor, complete el formulario"
              : `$${Number(user.guide_amount) + Number(paymentAmount)} mxn`}
          </span>
          <span>
            {!user ? "Añade una dirección de envío:" : "Dirección de envío:"}
          </span>
          <form className={styles.addressFormWrapper} onSubmit={onSubmit}>
            <div>
              <label>Nombre:</label>
              <input
                autoComplete="off"
                defaultValue={!user ? null : user.usuario_nombre}
                name="usuario_nombre"
                onChange={onChange}
                required
                type="text"
              />
            </div>
            <div>
              <label>Calle:</label>
              <input
                autoComplete="off"
                defaultValue={!user ? null : user.usuario_calle}
                name="usuario_calle"
                onChange={onChange}
                required
                type="text"
              />
            </div>
            <div>
              <label>Número exterior:</label>
              <input
                autoComplete="off"
                defaultValue={!user ? null : user.usuario_numero_exterior}
                name="usuario_numero_exterior"
                onChange={onChange}
                required
                type="text"
              />
            </div>
            <div>
              <label>Código postal:</label>
              <input
                autoComplete="off"
                defaultValue={!user ? null : user.usuario_cp}
                name="usuario_cp"
                onChange={onChange}
                required
                type="text"
              />
            </div>
            <div>
              <label>Colonia:</label>
              <input
                autoComplete="off"
                defaultValue={!user ? null : user.usuario_colonia}
                name="usuario_colonia"
                onChange={onChange}
                required
                type="text"
              />
            </div>
            <div>
              <label>Municipio:</label>
              <input
                autoComplete="off"
                defaultValue={!user ? null : user.usuario_municipio}
                name="usuario_municipio"
                onChange={onChange}
                required
                type="text"
              />
            </div>
            <div>
              <label>Estado:</label>
              <input
                autoComplete="off"
                defaultValue={!user ? null : user.usuario_estado}
                name="usuario_estado"
                onChange={onChange}
                required
                type="text"
              />
            </div>
            <div>
              <label>Correo electrónico:</label>
              <input
                autoComplete="off"
                defaultValue={!user ? null : user.usuario_email}
                name="usuario_email"
                onChange={onChange}
                required
                type="email"
              />
            </div>
            <div>
              <label>Teléfono:</label>
              <input
                autoComplete="off"
                defaultValue={!user ? null : user.usuario_telefono}
                name="usuario_telefono"
                onChange={onChange}
                required
                type="number"
              />
            </div>
            <div>
              <label>Referencia:</label>
              <input
                autoComplete="off"
                defaultValue={!user ? null : user.usuario_referencia}
                name="usuario_referencia"
                onChange={onChange}
                required
                type="text"
              />
            </div>
            <button>Guardar dirección de envío</button>
          </form>
          {!user ? null : (
            <PaymentButtons
              paymentAmount={`${
                Number(user.guide_amount) + Number(paymentAmount)
              }`}
            />
          )}
        </div>
      ) : (
        <PaymentLoader />
      )}
    </>
  );
};
