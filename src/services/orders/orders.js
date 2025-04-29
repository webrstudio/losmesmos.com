import axios from "axios";
import { origin, headers, packageInfo } from "./consts";

export const creatOrder = async (uuid) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_ENVIA_TODO_API}Api/create_order`,
      {
        order: {
          type: "create_order",
          data: {
            uuid: uuid,
            detail: {
              provider_id: "9",
              provider_service_id: "11",
              insurance: false,
            },
          },
        },
      },
      headers
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getServiceInfo = async (destination) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_ENVIA_TODO_API}Api/rates_client`,
      {
        type: "order",
        quotes: {
          shipping_type: "1",
          quantity: 1,
          provider_id: 9,
          ...origin,
          destination: {
            address_type_id: destination.usuario_nombre,
            full_name: destination.usuario_nombre,
            email: destination.usuario_email,
            telephone: destination.usuario_telefono,
            street: destination.usuario_calle,
            ext_number: destination.usuario_numero_exterior,
            int_number: "",
            zip_code: destination.usuario_cp,
            suburb: destination.usuario_colonia,
            municipality: destination.usuario_municipio,
            town: destination.usuario_municipio,
            state: destination.usuario_estado,
            state_code: destination.usuario_estado,
            country_code: "MX",
            reference: destination.usuario_referencia,
            name: "Dirección Destino",
          },
          ...packageInfo,
        },
      },
      headers
    );
    const data = response.data;
    return data;
  } catch (error) {
    return console.log(error);
  }
};

export const getServicePrice = async (uuid) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_ENVIA_TODO_API}Api/rates_client`,
      {
        type: "order",
        quotes: {
          shipping_type: "1",
          quantity: 1,
          provider_id: 9,
          ...origin,
          destination: {
            address_type_id: destination.usuario_nombre,
            full_name: destination.usuario_nombre,
            email: destination.usuario_email,
            telephone: destination.usuario_telefono,
            street: destination.usuario_calle,
            ext_number: destination.usuario_numero_exterior,
            int_number: "",
            zip_code: destination.usuario_cp,
            suburb: destination.usuario_colonia,
            municipality: destination.usuario_municipio,
            town: destination.usuario_municipio,
            state: destination.usuario_estado,
            state_code: destination.usuario_estado,
            country_code: "MX",
            reference: destination.usuario_referencia,
            name: "Dirección Destino",
          },
          ...packageInfo,
        },
      },
      headers
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {}
};
