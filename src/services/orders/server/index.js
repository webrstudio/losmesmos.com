import axios from "axios";

export const createOrder = async (orderInfo) => {
  try {
    const date = new Date().toLocaleString();
    const data = {
      ...orderInfo,
      usuario_carrito: orderInfo.paymentCart.map((product) => ({
        producto_id: product.producto_id,
        pedido_fecha: date,
      })),
    };
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_LOCAL_API}orders/addNewOrder/index.php`,
      data
    );
    return response
  } catch (error) {
    console.log(error);
  }
};
