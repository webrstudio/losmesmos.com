export const origin = {
  origin: {
    address_type_id: "1",
    full_name: "José Fernando Ortíz García",
    email: "fernando.ortizz.g@gmail.com",
    telephone: "528184583615",
    street: "CAOBA",
    ext_number: "975",
    int_number: "1",
    zip_code: "66490",
    suburb: "Hacienda de los Morales 3er sector",
    municipality: "San Nicolás de los Garza",
    town: "San Nicolás de lo Garza",
    state: "Nuevo León",
    state_code: "NL",
    country_code: "MX",
    reference: "Edificio blanco; timbrar presionando 1 y OK",
    name: "Dirección Origen",
  },
};

export const packageInfo = {
  package: {
    name: "",
    product_type: "CAJA",
    unit_type: "X1A",
    package_content: "Peluche",
    amount_pkg: "1000",
    height: 30,
    width: 30,
    length: 30,
    weight: 1,
    id: "0",
    package_type_id: "2",
    real_weight: "1.00",
    volumetric_weight: "30",
    bill_weight: "30",
    default_pkg: "0",
    client_account_id: "1",
    product_quantity: "1",
  },
};

export const headers = {
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "enviatodo",
    "x-enviatodo-app": "custom",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_ENVIA_TODO_TOKEN}`,
  },
};
