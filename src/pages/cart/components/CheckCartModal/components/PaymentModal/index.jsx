import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Form, Input, Row, Col } from "antd";
import { ContextGlobalConsumer } from "@context/Global";
import { Rules } from "@utils/handleInputRules";
import { Payment, UpdateStock } from "./service";
import useServiceAction from "@hooks/useServiceAction";
import "./style.scss";

const PaymentModal = ({ visible, handleModalPayment }) => {
  const navigate = useNavigate();
  const { isCart, isCartQuantity, HandleClearCart } = ContextGlobalConsumer();
  const [paymentForm] = Form.useForm();
  const { TextArea } = Input;
  const [isLoading, setLoading] = useState(false);

  const { fetchData } = useServiceAction({
    collectionName: "laniakea-store-db",
    autoFetch: false,
  });

  const handleSetPayment = async (formData) => {
    let paymentStatus = { sendPayment: false, updateStock: false };

    try {
      setLoading(true);
      const sendPayment = await Payment(formData, isCart, isCartQuantity);
      paymentStatus = { ...paymentStatus, sendPayment };
      const productList = await fetchData();
      const updateStock = await UpdateStock(isCart, productList);
      paymentStatus = { ...paymentStatus, updateStock };
    } finally {
      setLoading(false);

      let navigateLink = `/order-process/success`;

      if (!paymentStatus.updateStock) {
        navigateLink = `/order-process/warning`;
      }

      if (paymentStatus.sendPayment) {
        handleModalPayment(false);
        paymentForm.resetFields();
        await HandleClearCart();
        navigate(navigateLink);
      }
    }
  };

  return (
    <>
      <Modal
        wrapClassName="cart-payment-modal-container"
        maskClosable={true}
        width="1024px"
        centered
        open={visible}
        onCancel={() => {
          paymentForm.resetFields();
          handleModalPayment(false);
        }}
        okText="Confirmar"
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <br />
        <h2 className="cart-payment-modal-title">Formulario de pago:</h2>
        <h4 className="cart-payment-modal-subtitle">
          Complete los siguientes datos para finalizar su pedido
        </h4>
        <br />
        <Form name="paymentForm" onFinish={handleSetPayment} form={paymentForm}>
          <Row>
            <Col span={12}>
              <div className="cart-payment-input-container">
                <h4 className="cart-payment-input-title">Nombre:</h4>
                <Form.Item name={"first_name"} rules={Rules.required}>
                  <Input size="large" type="text" placeholder={"Nombre"} />
                </Form.Item>
              </div>
            </Col>
            <Col span={12}>
              <div className="cart-payment-input-container">
                <h4 className="cart-payment-input-title">Apellido:</h4>
                <Form.Item name={"last_name"} rules={Rules.required}>
                  <Input size="large" type="text" placeholder={"Apellido"} />
                </Form.Item>
              </div>
            </Col>
            <Col span={12}>
              <div className="cart-payment-input-container">
                <h4 className="cart-payment-input-title">Documento ID:</h4>
                <Form.Item name={"document_id"} rules={Rules.required}>
                  <Input
                    size="large"
                    type="text"
                    placeholder={"Documento de Identidad"}
                  />
                </Form.Item>
              </div>
            </Col>
            <Col span={12}>
              <div className="cart-payment-input-container">
                <h4 className="cart-payment-input-title">Teléfono:</h4>
                <Form.Item name={"phone"} rules={Rules.required}>
                  <Input size="large" type="text" placeholder={"Teléfono"} />
                </Form.Item>
              </div>
            </Col>
            <Col span={24}>
              <div className="cart-payment-input-container">
                <h4 className="cart-payment-input-title">Dirección:</h4>
                <Form.Item name={"address"} rules={Rules.required}>
                  <TextArea
                    size="large"
                    type={"text"}
                    placeholder={"Dirección"}
                    rows={4}
                  />
                </Form.Item>
              </div>
            </Col>
            <Col span={24}>
              <div className="cart-payment-set-button-container">
                <Button
                  htmlType="submit"
                  loading={isLoading}
                  className="cart-payment-set-button"
                >
                  Procesar pago
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default PaymentModal;

PaymentModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleModalPayment: PropTypes.func.isRequired,
};
