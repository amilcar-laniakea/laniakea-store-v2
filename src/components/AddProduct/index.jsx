import PropTypes from "prop-types";
import { Button, notification } from "antd";
import { ContextDetailProductConsumer } from "@context/ProductDetail";

import "./style.scss";

const AddProduct = ({ detail, quantity }) => {
  const { HandAddVerifyProductCart } = ContextDetailProductConsumer();

  const handleAddItemCart = (item) => {
    if (quantity <= 0) {
      notification["warning"]({
        message: "Aviso:",
        description: "¡Debes agregar una cantidad!",
      });
    } else {
      HandAddVerifyProductCart(item, quantity);
    }
  };

  return (
    <div className="add-product-button-container">
      <Button
        className="add-product-button"
        disabled={detail.stock <= 0 || quantity <= 0}
        onClick={() => handleAddItemCart(detail)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default AddProduct;

AddProduct.propTypes = {
  detail: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
};
