import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Modal, Spin, notification } from "antd";
import { LoadingOutlined, CreditCardFilled } from "@ant-design/icons";
import { ContextGlobalConsumer } from "@context/Global";
import PaymentModal from "./components/PaymentModal";
import useServiceAction from "@hooks/useServiceAction";
import "./style.scss";

const CheckCartModal = ({ cart }) => {
  const { HandleStockCart } = ContextGlobalConsumer();

  const { fetchData } = useServiceAction({
    collectionName: "laniakea-store-db",
    autoFetch: false,
  });

  const [isVisible, setVisible] = useState(false);
  const [isModalPayment, setModalPayment] = useState(false);

  const handleNotification = ({ type, description }) => {
    notification[type]({
      message: "Aviso:",
      description: description,
    });
  };

  const handlePayment = async () => {
    const cartMirror = [...cart];
    setVisible(true);

    const productsList = await fetchData();

    if (productsList && productsList.length > 0) {
      const updatedCartMirror = cartMirror.reduce((acc, cartItem) => {
        const product = productsList.find(
          (product) => product.id === cartItem.id
        );

        if (product && product.stock < cartItem.quantity)
          cartItem.outStock = true;

        acc.push(cartItem);
        return acc;
      }, []);

      const validOutOfStock = updatedCartMirror.find(
        (cartItem) => cartItem.outStock
      );

      if (validOutOfStock) {
        HandleStockCart(updatedCartMirror);
        handleNotification({
          type: "warning",
          description:
            "¡Stock Insuficiente en algunos productos de su Carrito de Compras!.",
        });
      } else {
        setModalPayment(true);
      }
    } else {
      handleNotification({
        type: "error",
        description: "Ha ocurrido un error al verificar los productos.",
      });
    }
    setVisible(false);
  };

  return (
    <>
      <PaymentModal
        visible={isModalPayment}
        handleModalPayment={(e) => setModalPayment(e)}
      />
      <Button
        loading={isVisible}
        className="cart-payment-button"
        onClick={() => handlePayment()}
      >
        <CreditCardFilled className="cart-clear-item" />
        Pagar
      </Button>
      <Modal
        wrapClassName="cart-clear-modal-container"
        maskClosable={false}
        width="400px"
        centered
        closable={false}
        open={isVisible}
        onCancel={() => setVisible(false)}
        okText="Confirmar"
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h3 className="cart-clear-modal-main-title">
          Comprobando su carrito de compras...
        </h3>
        <h4 className="cart-clear-modal-main-subtitle">
          *No cierre el navegador
        </h4>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      </Modal>
    </>
  );
};

export default CheckCartModal;

CheckCartModal.propTypes = {
  cart: PropTypes.array.isRequired,
};
