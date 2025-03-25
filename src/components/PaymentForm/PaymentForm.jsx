"use client";
import Swal from "sweetalert2";
import styles from "./styles.module.css";
import { UserContext } from "@/contexts";
import { useContext, useState } from "react";
import { PaymentButtons } from "./PaymentButtons";

export const PaymentForm = ({ paymentAmount, defaultUser }) => {
  const { user, addUser } = useContext(UserContext);
  const [formData, setFormData] = useState(user);
  const onChange = (evt) => {
    setFormData({
      ...user,
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    Swal.fire({
      title: "Dirección de envío añadida",
      icon: "success",
      timer: 1000,
      position: "top-end",
      showConfirmButton: false,
    });
    addUser(formData);
  };
  return (
    <div className={styles.paymentFormWrapper}>
      <span>{! user ? 'Añade una dirección de envío:' : 'Dirección de envío:'}</span>
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
          <label>Dirección:</label>
          <input
            autoComplete="off"
            defaultValue={!user ? null : user.usuario_direccion}
            name="usuario_direccion"
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
        <button>Guardar dirección de envío</button>
      </form>
      {!user ? null : <PaymentButtons paymentAmount={paymentAmount} />}
    </div>
  );
};