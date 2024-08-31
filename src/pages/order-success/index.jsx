import { CheckCircleOutlined } from "@ant-design/icons";
import "./style.scss";

const OrderSuccess = () => {
  return (
    <div className="global-container">
      <div className="order-success-container">
        <div className="order-success-inner-container">
          <CheckCircleOutlined className="order-success-icon" />
          <h1 className="order-success-title">¡Enhorabuena!</h1>
          <h3 className="order-success-subtitle">
            Su compra se ha realizado de manera exitosa
          </h3>
        </div>
      </div>
    </div>
  );
};
export default OrderSuccess;
