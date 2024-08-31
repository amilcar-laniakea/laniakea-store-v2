import PropTypes from "prop-types";
import { DeleteFilled } from "@ant-design/icons";
import { ContextGlobalConsumer } from "@context/Global";
import "./style.scss";

const CartDeleteProduct = ({ cart }) => {
  const { HandleDeleteItemCart } = ContextGlobalConsumer();

  const HandleDeleteItem = (item) => {
    HandleDeleteItemCart(item);
  };

  return (
    <DeleteFilled
      className="cart-delete-item"
      onClick={() => HandleDeleteItem(cart)}
    />
  );
};

export default CartDeleteProduct;

CartDeleteProduct.propTypes = {
  cart: PropTypes.object.isRequired,
};
