import { notification } from "antd";

import { db } from "../../../../firebase";

const CheckCart = async (i) => {
  let response;
  let outStock;
  const dataCheck = db.collection("laniakea-store-db");

  await dataCheck
    .get()
    .then((r) => {
      if (r.docs.length > 0) {
        let array = [];
        r.docs.map((item) => {
          return array.push({ ...item.data(), id: item.id });
        });

        array.forEach((e) => {
          i.forEach((i) => {
            if (e.id === i.id) {
              if (e.stock < i.quantity) {
                outStock = true;
                i.outStock = true;
                notification["warning"]({
                  message: "Aviso:",
                  description:
                    "¡Stock Insuficiente en algunos productos de su Carrito de Compras!.",
                });
              }
            }
          });
        });
        response = {
          cart: i,
          outStock: outStock,
        };
      } else {
        notification["warning"]({
          message: "Aviso:",
          description: "¡Error, problemas con la consulta!.",
        });
      }
    })
    .catch(() => {
      notification["error"]({
        message: "Aviso:",
        description: "¡Revisa tu servicio de internet!.",
      });
    });

  return response;
};
export default CheckCart;
