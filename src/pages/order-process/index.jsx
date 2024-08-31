import { useEffect } from "react";
import { CheckCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";
import "./style.scss";

const OrderProcess = () => {
  const navigate = useNavigate();
  const { status } = useParams();

  useEffect(() => {
    if (status !== "warning" && status !== "success") navigate("/");
  }, [navigate, status]);

  return (
    <div className="global-container">
      <div className="order-success-container">
        <div className="order-success-inner-container">
          {status === "success" && (
            <>
              <CheckCircleOutlined className="order-success-icon" />
              <h1 className="order-success-title">¡Enhorabuena!</h1>
              <h3 className="order-success-subtitle">
                Su compra se ha realizado de manera exitosa.
              </h3>
            </>
          )}
          {status === "warning" && (
            <>
              <InfoCircleOutlined className="order-warning-icon" />
              <h1 className="order-success-title">¡Enhorabuena!</h1>
              <h3 className="order-success-subtitle">
                Su compra se ha realizado de manera exitosa, sin embargo ocurrió
                un problema al actualizar el stock de los productos.
              </h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default OrderProcess;
