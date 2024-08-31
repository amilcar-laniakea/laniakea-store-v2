import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Input, Form, notification } from "antd";
import "./style.scss";

const ProductCounter = ({ detail, handleQuantity, isAddedProduct }) => {
  const [itemsCartForm] = Form.useForm();
  const [isValidDelete, setValidDelete] = useState(true);

  const handleDeleteQuantity = () => {
    let quantity = itemsCartForm.getFieldValue("cart_quantity");
    if (quantity === 1) {
      notification["warning"]({
        message: "Aviso:",
        description:
          "¡No puedes disminuir la cantidad inferior a un (1) artículo!",
      });
    } else {
      quantity = quantity - 1;
      handleQuantity(quantity);
      itemsCartForm.setFieldsValue({
        cart_quantity: quantity,
      });
    }
  };

  const handleAddQuantity = () => {
    let quantity = itemsCartForm.getFieldValue("cart_quantity");
    if (quantity >= detail.stock) {
      notification["warning"]({
        message: "Aviso:",
        description: "¡No puedes agregar mas productos al stock disponible!.",
      });
    } else {
      quantity = quantity + 1;
      handleQuantity(quantity);
      itemsCartForm.setFieldsValue({
        cart_quantity: quantity,
      });
    }
    if (isValidDelete) {
      setValidDelete(false);
    }
  };

  return (
    <div className="counter-global-container">
      <Form
        className="detail-quantity-form-container"
        form={itemsCartForm}
        initialValues={{ cart_quantity: 0 }}
      >
        <Button
          className="detail-quantity-button"
          disabled={detail.stock <= 0 || isValidDelete || isAddedProduct}
          onClick={() => handleDeleteQuantity()}
        >
          -
        </Button>
        <Form.Item name="cart_quantity">
          <Input className="detail-quantity-form-input" disabled />
        </Form.Item>
        <Button
          className="detail-quantity-button"
          disabled={detail.stock <= 0 || isAddedProduct}
          onClick={() => handleAddQuantity()}
        >
          +
        </Button>
      </Form>
    </div>
  );
};

export default ProductCounter;

ProductCounter.propTypes = {
  detail: PropTypes.object.isRequired,
  handleQuantity: PropTypes.func.isRequired,
  isAddedProduct: PropTypes.bool.isRequired,
};
