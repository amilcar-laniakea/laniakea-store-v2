import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Row, Col } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { ContextGlobalConsumer } from "@context/Global";
import Image from "@components/Image";
import MetaDescription from "@components/MetaDescription";
import Spacer from "@components/Spacer";
import { cartPrice } from "@utils/isCartPrice";
import CartQuantity from "./components/CartQuantity";
import CartDeleteProduct from "./components/CartDeleteProduct";
import CartClear from "./components/CartClear";
import CheckCartModal from "./components/CheckCartModal";
import "./style.scss";

const Cart = () => {
  const { isCart, isCartQuantity } = ContextGlobalConsumer();
  const [isVisible, setVisible] = useState(false);
  const [isImage, setImage] = useState(null);

  const handlePreviewImage = (item) => {
    setVisible(true);
    setImage(item);
  };

  if (isCart.length <= 0) {
    return (
      <div className="empty-cart-global-container">
        <div className="empty-cart-main-container">
          <span>
            <ExclamationCircleOutlined className="empty-cart-main-icon" />
          </span>
          <h2 className="empty-cart-main-title">
            ¡No hay productos en su carrito de compras!
          </h2>
          <Link to="/">
            <Button className="empty-cart-return-button">Ir al inicio</Button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <MetaDescription
          title="Laniakea - Carrito de compras"
          description="Laniakea tienda de imágenes."
        />
        <div className="global-container">
          <div className="main-container">
            <div className="cart-title-container">
              <h2 className="laniakea-main-title-global">Mis Productos:</h2>
              <Spacer />
              <CartClear />
            </div>
            <Row className="cart-checkout-global-container">
              <Col xs={24} sm={24} md={24} lg={17} xl={17}>
                <div className="cart-checkout-map-container">
                  {isCart.map((item, index) => (
                    <div key={index} className="cart-product-global-container">
                      <CartQuantity cart={item} />
                      <CartDeleteProduct cart={item} />
                      <div className="cart-product-main-container">
                        <div
                          className="cart-image-product-global-container"
                          onClick={() => handlePreviewImage(item)}
                        >
                          <Image
                            container={"cart-image-product-main-container"}
                            classImg={"cart-image-product"}
                            image={item.image}
                            alt={item.title}
                            title={item.title}
                          />
                        </div>
                        <div className="cart-text-product-main-container">
                          <Link to={`/detail/${item.id}`}>
                            <h2 className="cart-detail-title">
                              <span className="cart-detail-span">Título:</span>{" "}
                              {item.title}
                            </h2>
                          </Link>
                          <h3 className="cart-detail-description">
                            <span className="cart-detail-span">
                              Descripción:
                            </span>{" "}
                            {item.description}
                          </h3>
                          <h3 className="cart-detail-description">
                            <span className="cart-detail-span">Cantidad:</span>{" "}
                            {item.quantity}
                          </h3>
                          <h3 className="cart-detail-description">
                            <span className="cart-detail-span">Stock:</span>{" "}
                            {item.stock}
                          </h3>
                          <h3 className="cart-detail-description">
                            <span className="cart-detail-span">Precio:</span> $
                            {item.price}
                          </h3>
                          <h3 className="cart-detail-description">
                            <span className="cart-detail-span">
                              Precio por {item.quantity} unidades:
                            </span>{" "}
                            ${item.price * item.quantity}
                          </h3>
                          {item.outStock && (
                            <h3 className="cart-product-out-stock">
                              No hay stock suficiente de este producto...
                            </h3>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
              <Col
                className="cart-payment-global-container"
                xs={24}
                sm={12}
                md={9}
                lg={7}
                xl={7}
              >
                <div className="cart-payment-main-container">
                  <h2 className="cart-payment-quantity-title">
                    Cantidad de Productos:
                  </h2>
                  <h2 className="cart-payment-quantity">{isCartQuantity}</h2>
                  <h2 className="cart-payment-total-price-title">
                    Total General:
                  </h2>
                  <h2 className="cart-payment-total-price">
                    ${cartPrice(isCart)}
                  </h2>
                  <CheckCartModal cart={isCart} />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <Modal
          wrapClassName="cart-image-modal-global-container"
          maskClosable={true}
          width="1024px"
          centered
          open={isVisible}
          onCancel={() => setVisible(false)}
          okText="Confirmar"
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
        >
          {isImage && (
            <Image
              container={"cart-image-modal-product-container"}
              classImg={"cart-image-modal-product"}
              image={isImage.image}
              alt={isImage.title}
              title={isImage.title}
            />
          )}
        </Modal>
      </>
    );
  }
};

export default Cart;
