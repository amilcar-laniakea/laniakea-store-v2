import { notification } from "antd";
import moment from "moment";
import "moment/locale/es";
import { cartPrice } from "@utils/isCartPrice";
import { firstUppercase } from "@utils/handleFirstUppercase";
import {
  collection,
  doc,
  updateDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@fireb";

moment.locale("es");

export const UpdateStock = async (cart, productList) => {
  let response;

  if (productList.length > 0) {
    const updatingStatusProducts = productList.reduce((responses, item) => {
      const cartItem = cart.find((element) => item.id === element.id);
      if (cartItem) {
        const updateStock = doc(db, "laniakea-store-db", cartItem.id);
        updateDoc(updateStock, {
          stock: item.stock - cartItem.quantity,
        })
          .then(() => {
            responses.push(true);
          })
          .catch((error) => {
            console.error("Error updating document: ", error);
            responses.push(false);
          });
      }
      return responses;
    }, []);

    response = updatingStatusProducts.every((item) => item === true);
  } else {
    notification["error"]({
      message: "Aviso:",
      description: "¡Error, problemas con la consulta!.",
    });
  }

  return response;
};

export const Payment = async (formData, cart, cartQuantity) => {
  let response;

  try {
    const dataOrder = {
      user_info: { ...formData },
      date: firstUppercase(moment(new Date()).format("LLLL")),
      createdAt: serverTimestamp(),
      cart_items: cart,
      products_ordered: cartQuantity,
      total: cartPrice(cart),
    };

    const collectionRequest = collection(db, "laniakea-store-orders");
    await addDoc(collectionRequest, dataOrder);

    response = true;

    if (response) {
      notification["success"]({
        message: `Notificación`,
        description: `Su orden ha sido procesada exitosamente.`,
      });
    }
  } catch {
    notification["error"]({
      message: `Aviso:`,
      description: `Ha ocurrido un error, intente más tarde`,
    });
  }

  return response;
};
