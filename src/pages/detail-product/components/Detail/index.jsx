import { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import MetaDescription from "@components/MetaDescription";
import Loading from "@components/Loading";
import Image from "@components/Image";
import CounterProduct from "@components/CounterProduct";
import AddProduct from "@components/AddProduct";
import Error from "@components/Error";
import useServiceAction from "@hooks/useServiceAction";
import { ContextDetailProductConsumer } from "@context/ProductDetail";
import "./style.scss";

const Detail = () => {
  const { isAddedProduct, HandVerifyProductCart } =
    ContextDetailProductConsumer();
  let { id } = useParams();

  const [isQuantity, setQuantity] = useState(0);

  const { data, error, loading } = useServiceAction({
    collectionName: "laniakea-store-db",
    queryParams: id,
  });

  const handleQuantity = (item) => {
    setQuantity(item);
  };

  const handleVerifyProductStock = useCallback(
    (prod) => {
      const cart = JSON.parse(localStorage.getItem("cart"));

      if (cart.length > 0) {
        cart.forEach((e) => {
          if (e.id === prod.id) {
            HandVerifyProductCart(true);
          }
        });
      }
    },
    [HandVerifyProductCart]
  );

  useEffect(() => {
    if (data) handleVerifyProductStock(data);
  }, [data, handleVerifyProductStock]);

  if (error)
    return <Error error={"Hubo un error en la consulta, intente más tarde."} />;

  if (loading) return <Loading />;

  return (
    <>
      <MetaDescription
        title={`Laniakea - ${data.title}`}
        description="Laniakea tienda de imágenes."
      />
      <div className="detail-global-container">
        <div className="detail-main-container">
          <Image
            container={"detail-main-image-container"}
            classImg={"detail-main-image"}
            image={data.image}
            alt={data.title}
            title={data.title}
          />

          <div className="detail-global-text-container">
            <div className="detail-main-text-container">
              <h2 className="detail-title">{data.title}</h2>
              <h4 className="detail-code-title">Código: {id}</h4>
              <h3 className="detail-description">{data.description}</h3>
              <h3 className="detail-category">
                Categoría: {data.category.name_category}
              </h3>
              <h3 className="detail-stock">Stock: {data.stock}</h3>

              <h2 className="detail-price">Precio: ${data.price}</h2>
            </div>
            <div className="counter-add-product-container">
              <CounterProduct
                isAddedProduct={isAddedProduct}
                detail={data}
                handleQuantity={(e) => handleQuantity(e)}
              />
              {!isAddedProduct ? (
                <AddProduct detail={data} quantity={isQuantity} />
              ) : (
                <div className="detail-note-container">
                  <h4 className="detail-note-title">Nota:</h4>
                  <h3 className="detail-note-subtitle">
                    Tiene este producto agregado a su carrito de compras, si
                    desea eliminarlo o modificar la cantidad a comprar, haga
                    click{" "}
                    <Link className="detail-note-link" to="/cart">
                      aquí
                    </Link>
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
