import { useState } from "react";
import { Button, Modal } from "antd";
import { ClearOutlined } from "@ant-design/icons";
import { ContextGlobalConsumer } from "@context/Global";
import "./style.scss";

const CartClear = () => {
  const { HandleClearCart } = ContextGlobalConsumer();
  const [isVisible, setVisible] = useState(false);

  const handleEmptyCart = () => {
    HandleClearCart();
    setVisible(false);
  };

  return (
    <>
      <Button className="cart-clear-button" onClick={() => setVisible(true)}>
        <ClearOutlined className="cart-clear-item" />
        Limpiar carrito
      </Button>
      <Modal
        wrapClassName="cart-clear-modal-container"
        maskClosable={true}
        width="450px"
        centered
        open={isVisible}
        onCancel={() => setVisible(false)}
        okText="Confirmar"
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h3 className="cart-clear-modal-main-title">
          ¿Está seguro que desea vaciar su carrito de compras?
        </h3>
        <h4 className="cart-clear-modal-main-subtitle">
          *Esta acción es irreversible
        </h4>
        <Button
          className="cart-clear-modal-button"
          onClick={() => handleEmptyCart()}
        >
          Confirmar
        </Button>
      </Modal>
    </>
  );
};

export default CartClear;
